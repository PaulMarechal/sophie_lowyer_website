import fs from "node:fs";
import path from "node:path";

const appOutput = path.join(process.cwd(), ".next/server/app");
const englishFiles = [path.join(appOutput, "en.html")];
const englishDirectory = path.join(appOutput, "en");

if (fs.existsSync(englishDirectory)) {
  for (const entry of fs.readdirSync(englishDirectory, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith(".html")) {
      englishFiles.push(path.join(englishDirectory, entry.name));
    }
  }
}

if (englishFiles.length !== 18 || englishFiles.some((file) => !fs.existsSync(file))) {
  throw new Error(`Expected 18 prerendered English HTML files, found ${englishFiles.length}.`);
}

let updated = 0;
for (const file of englishFiles) {
  const html = fs.readFileSync(file, "utf8");
  if (html.includes('<html lang="en">')) {
    continue;
  }
  const nextHtml = html.replace('<html lang="fr">', '<html lang="en">');
  if (nextHtml === html) {
    throw new Error(`Could not identify the root language attribute in ${file}.`);
  }
  fs.writeFileSync(file, nextHtml);
  updated += 1;
}

console.log(`Verified lang="en" on ${englishFiles.length} prerendered English documents (${updated} updated).`);
