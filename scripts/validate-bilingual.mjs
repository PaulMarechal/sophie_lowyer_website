import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const i18nSource = fs.readFileSync(path.join(root, "src/lib/i18n.js"), "utf8");
const pairPattern = /fr:\s*"([^"]+)",\s*en:\s*"([^"]+)"/g;
const pairs = [...i18nSource.matchAll(pairPattern)].map((match) => ({ fr: match[1], en: match[2] }));

const errors = [];
const titles = new Map();
const descriptions = new Map();
const routeSet = new Set(pairs.flatMap(({ fr, en }) => [fr, en]));

function htmlPath(route) {
  if (route === "/") return path.join(root, ".next/server/app/index.html");
  if (route === "/en") return path.join(root, ".next/server/app/en.html");
  return path.join(root, `.next/server/app${route}.html`);
}

function absolute(route) {
  return `https://www.sophiemarechal-avocat.fr${route === "/" ? "" : route}`;
}

function sitemapAbsolute(route) {
  return `https://www.sophiemarechal-avocat.fr${route}`;
}

function stripScriptsAndTags(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&apos;|&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

if (pairs.length !== 18) {
  errors.push(`Expected 18 route pairs, found ${pairs.length}.`);
}

for (const pair of pairs) {
  for (const [locale, route] of [["fr", pair.fr], ["en", pair.en]]) {
    const file = htmlPath(route);
    if (!fs.existsSync(file)) {
      errors.push(`Missing generated HTML for ${route}: ${file}`);
      continue;
    }

    const html = fs.readFileSync(file, "utf8");
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    if (!title) {
      errors.push(`Missing title on ${route}.`);
    } else if (titles.has(title)) {
      errors.push(`Duplicate title on ${route} and ${titles.get(title)}: ${title}`);
    } else {
      titles.set(title, route);
    }
    if (!description) {
      errors.push(`Missing meta description on ${route}.`);
    } else if (descriptions.has(description)) {
      errors.push(`Duplicate description on ${route} and ${descriptions.get(description)}.`);
    } else {
      descriptions.set(description, route);
    }

    const expectedCanonical = absolute(route);
    if (!html.includes(`rel="canonical" href="${expectedCanonical}"`)) {
      errors.push(`Wrong or missing canonical on ${route}.`);
    }
    if (!html.includes(`hrefLang="fr-FR" href="${absolute(pair.fr)}"`)) {
      errors.push(`Wrong or missing fr-FR alternate on ${route}.`);
    }
    if (!html.includes(`hrefLang="en-GB" href="${absolute(pair.en)}"`)) {
      errors.push(`Wrong or missing en-GB alternate on ${route}.`);
    }
    if (!html.includes(`hrefLang="x-default" href="${absolute(pair.fr)}"`)) {
      errors.push(`Wrong or missing x-default alternate on ${route}.`);
    }
    const expectedSwitch = locale === "en" ? pair.fr : pair.en;
    const expectedSwitchLabel = locale === "en" ? "FR" : "EN";
    if (!html.includes(`href="${expectedSwitch}">${expectedSwitchLabel}</a>`)) {
      errors.push(`Wrong language-switch target on ${route}: expected ${expectedSwitch}.`);
    }

    if (locale === "en") {
      if (!html.includes('<html lang="en">')) {
        errors.push(`Wrong prerendered HTML language on ${route}.`);
      }
      if (!html.includes('property="og:locale" content="en_GB"')) {
        errors.push(`Missing en_GB Open Graph locale on ${route}.`);
      }
      if (!html.includes('property="og:image" content="https://www.sophiemarechal-avocat.fr/social/en/')) {
        errors.push(`English social image is not used on ${route}.`);
      }
      const visibleText = stripScriptsAndTags(html);
      for (const phrase of ["Questions fréquentes", "Contacter le cabinet", "Consulter les honoraires", "Mentions légales", "Politique de confidentialité", "Tout accepter", "Tout refuser", "Téléphone", "E-mail", "Cabinet Sophie Maréchal"]) {
        if (visibleText.includes(phrase)) {
          errors.push(`French interface phrase on ${route}: ${phrase}`);
        }
      }
    } else if (!html.includes('<html lang="fr">')) {
      errors.push(`Wrong prerendered HTML language on ${route}.`);
    }

    for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        JSON.parse(match[1]);
      } catch (error) {
        errors.push(`Invalid JSON-LD on ${route}: ${error.message}`);
      }
    }

    for (const match of html.matchAll(/href="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
      const href = match[1].length > 1 ? match[1].replace(/\/$/, "") : match[1];
      if (href.startsWith("/_next/") || href.startsWith("/Images/") || href.startsWith("/icons/") || /\.[a-z0-9]+$/i.test(href)) {
        continue;
      }
      if (!routeSet.has(href)) {
        errors.push(`Unknown internal link on ${route}: ${href}`);
      }
    }
  }
}

const sitemapFile = path.join(root, ".next/server/app/sitemap.xml.body");
if (!fs.existsSync(sitemapFile)) {
  errors.push("Missing generated sitemap.xml.");
} else {
  const sitemap = fs.readFileSync(sitemapFile, "utf8");
  const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  if (locations.length !== routeSet.size) {
    errors.push(`Sitemap contains ${locations.length} URLs; expected ${routeSet.size}.`);
  }
  for (const route of routeSet) {
    if (!locations.includes(sitemapAbsolute(route))) {
      errors.push(`Sitemap is missing ${route}.`);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${pairs.length} bilingual route pairs (${routeSet.size} pages), ${titles.size} unique titles and descriptions, hreflang/canonical metadata, language switches, sitemap, internal links and JSON-LD.`);
