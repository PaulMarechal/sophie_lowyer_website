import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';

const { values } = parseArgs({ options: {
  'base-url': { type: 'string', default: 'http://127.0.0.1:3100' },
  'tools-dir': { type: 'string' },
  'output-dir': { type: 'string', default: 'reports/lighthouse' },
  'form-factor': { type: 'string', default: 'desktop' },
  'retry-failed': { type: 'boolean', default: false },
} });
if (!values['tools-dir']) throw new Error('Provide --tools-dir with a directory containing Lighthouse 13.4.1 (see README).');
if (!['desktop', 'mobile'].includes(values['form-factor'])) throw new Error('Invalid --form-factor.');
const requireTool = createRequire(path.resolve(values['tools-dir'], 'package.json'));
const { default: lighthouse } = await import(pathToFileURL(requireTool.resolve('lighthouse')));
const { launch } = await import(pathToFileURL(requireTool.resolve('chrome-launcher')));
const origin = new URL(values['base-url']).origin;
const output = path.resolve(values['output-dir']);
const formFactor = values['form-factor'];
await fs.mkdir(output, { recursive: true });
const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
if (!sitemapResponse.ok) throw new Error(`Sitemap returned ${sitemapResponse.status}`);
const sitemap = await sitemapResponse.text();
const routes = [...new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname))];
if (!routes.length) throw new Error('No routes found in sitemap.xml.');
const hasFailed = r => r.error || r.runtimeError || r.seo.score !== 1 || r.agentic.failures.length;
let results = [];
if (values['retry-failed']) {
  const previous = JSON.parse(await fs.readFile(path.join(output, 'summary.json'), 'utf8'));
  if (previous.origin !== origin || previous.formFactor !== formFactor) throw new Error('Retry settings must match the previous audit.');
  results = previous.results.filter(r => routes.includes(r.route) && !hasFailed(r));
}
const queue = routes.filter(route => !results.some(r => r.route === route));
const auditCategory = (lhr, categoryId) => {
  const category = lhr.categories[categoryId];
  const applicable = category.auditRefs.filter(({ weight, id }) => weight > 0 && !['notApplicable', 'informative', 'manual'].includes(lhr.audits[id].scoreDisplayMode));
  return {
    score: category.score,
    passed: applicable.filter(({ id }) => lhr.audits[id].score === 1).length,
    total: applicable.length,
    failures: applicable.filter(({ id }) => lhr.audits[id].score !== 1).map(({ id }) => ({
      id, title: lhr.audits[id].title,
      explanation: lhr.audits[id].explanation || lhr.audits[id].errorMessage || '',
    })),
  };
};
async function worker() {
  const userDataDir = await fs.mkdtemp(path.join(os.tmpdir(), 'sophie-lighthouse-'));
  let chrome;
  try {
    chrome = await launch({ userDataDir, chromeFlags: ['--headless=new', '--no-first-run', '--disable-default-apps'] });
    while (queue.length) {
      const route = queue.shift();
      const settings = {
        port: chrome.port, logLevel: 'error', output: ['json', 'html'],
        onlyCategories: ['seo', 'agentic-browsing'], formFactor,
        ...(formFactor === 'desktop' ? {
          screenEmulation: { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false },
          throttlingMethod: 'provided',
        } : {}),
      };
      try {
        const { lhr, report } = await lighthouse(origin + route, settings);
        const file = route === '/' ? 'index' : route.slice(1).replaceAll('/', '--');
        await fs.writeFile(path.join(output, `${file}.json`), report[0]);
        await fs.writeFile(path.join(output, `${file}.html`), report[1]);
        const result = {
          route, url: lhr.finalDisplayedUrl, lighthouse: lhr.lighthouseVersion,
          browser: lhr.environment.hostUserAgent, formFactor,
          seo: auditCategory(lhr, 'seo'), agentic: auditCategory(lhr, 'agentic-browsing'),
          runtimeError: lhr.runtimeError || null,
          webmcp: Object.fromEntries(['webmcp-form-coverage', 'webmcp-registered-tools', 'webmcp-schema-validity'].map(id => [id, lhr.audits[id].scoreDisplayMode])),
          report: `${file}.html`,
        };
        results.push(result);
        console.log(`${results.length}/${routes.length} ${route}: SEO ${result.seo.score === null ? 'ERROR' : Math.round(result.seo.score * 100)}, agentic ${result.agentic.passed}/${result.agentic.total}`);
      } catch (error) {
        results.push({ route, error: error.message });
        console.error(`${route}: ${error.message}`);
      }
    }
  } finally {
    if (chrome) await chrome.kill();
    await fs.rm(userDataDir, { recursive: true, force: true });
  }
}
// Lighthouse uses process-wide timing marks; concurrent runs in one process interfere.
if (queue.length) await worker();
results.sort((a, b) => a.route.localeCompare(b.route));
const failed = results.filter(hasFailed);
await fs.writeFile(path.join(output, 'summary.json'), JSON.stringify({
  generatedAt: new Date().toISOString(), origin, formFactor, pages: routes.length,
  passed: routes.length - failed.length, failed: failed.length, results,
}, null, 2) + '\n');
console.log(`Complete: ${routes.length - failed.length}/${routes.length} pages pass SEO and all applicable agentic checks. Reports: ${output}`);
if (failed.length) process.exitCode = 1;
