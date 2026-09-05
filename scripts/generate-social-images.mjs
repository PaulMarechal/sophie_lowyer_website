import { build } from 'esbuild';
import { mkdir, writeFile, copyFile, readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import sharp from 'sharp';

// Bundle the existing JSX image renderer for use by Node without a running server.
const result = await build({
  stdin: { contents: `export { createPageOgImage } from './app/og-page-template.js'; export { socialCards, socialImageSizes, socialImagePath } from './src/lib/social-images.js';`, resolveDir: process.cwd() },
  bundle: true, write: false, platform: 'node', format: 'cjs', packages: 'external',
  loader: { '.js': 'jsx' }, jsx: 'automatic',
});
const module = { exports: {} };
new Function('require', 'module', 'exports', result.outputFiles[0].text)(createRequire(import.meta.url), module, module.exports);
const { createPageOgImage, socialCards, socialImageSizes, socialImagePath } = module.exports;
let count = 0;
for (const [key, translations] of Object.entries(socialCards)) {
  for (const [locale, copy] of Object.entries(translations)) {
    for (const [format, size] of Object.entries(socialImageSizes)) {
      const output = path.join('public', socialImagePath(key, locale, format));
      await mkdir(path.dirname(output), { recursive: true });
      const response = createPageOgImage({ ...copy, locale }, size);
      const png = await sharp(Buffer.from(await response.arrayBuffer())).png({ compressionLevel: 9 }).toBuffer();
      await writeFile(output, png);
      count++;
    }
  }
}
// Preserve previously shared image URLs with the new artwork.
await copyFile('public/social/fr/home-og.png', 'public/og.png');
for (const key of ['home', 'a-propos', 'competences', 'honoraires', 'contact']) {
  await copyFile(`public/social/fr/${key}-og.png`, `public/Images/og_pages/${key}.png`);
}
// Rasterize the site's existing vector icon at the native mobile sizes.
const icon = await readFile('app/icon.svg');
for (const [file, size] of [['apple-touch-icon.png', 180], ['icons/icon-192.png', 192], ['icons/icon-512.png', 512]]) {
  await sharp(icon).resize(size, size).flatten({ background: '#ffffff' }).png().toFile(`public/${file}`);
}
console.log(`Generated ${count} social images, compatibility images and mobile icons.`);
