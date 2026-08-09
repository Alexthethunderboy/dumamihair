const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('/Users/thunderboy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');

const root = path.resolve(__dirname, '..');
const sourceDir = path.join(root, 'assets', 'brand', 'logo');
const outputDir = path.join(root, 'exports', 'logo');

const colours = {
  wine: '#4a1721',
  black: '#1b1415',
  white: '#fffaf4',
};

const jobs = [
  { source: 'dumami-symbol-small.svg', output: 'dumami-symbol-small-64.png', width: 64, height: 64 },
  { source: 'dumami-symbol-small.svg', output: 'dumami-symbol-small-128.png', width: 128, height: 128 },
  { source: 'dumami-symbol-small.svg', output: 'dumami-symbol-small-256.png', width: 256, height: 256 },
  { source: 'dumami-symbol-small.svg', output: 'dumami-symbol-small-512.png', width: 512, height: 512 },
  { source: 'dumami-symbol.svg', output: 'dumami-symbol-wine-1024.png', width: 1024, height: 1024, colour: 'wine' },
  { source: 'dumami-symbol.svg', output: 'dumami-symbol-white-1024.png', width: 1024, height: 1024, colour: 'white' },
  { source: 'dumami-wordmark.svg', output: 'dumami-wordmark-wine-1432.png', width: 1432, colour: 'wine' },
  { source: 'dumami-wordmark.svg', output: 'dumami-wordmark-black-1432.png', width: 1432, colour: 'black' },
  { source: 'dumami-wordmark.svg', output: 'dumami-wordmark-white-1432.png', width: 1432, colour: 'white' },
  { source: 'dumami-primary.svg', output: 'dumami-primary-wine-1700.png', width: 1700, colour: 'wine' },
  { source: 'dumami-primary.svg', output: 'dumami-primary-white-1700.png', width: 1700, colour: 'white' },
];

async function render(job) {
  let svg = await fs.readFile(path.join(sourceDir, job.source), 'utf8');
  if (job.colour) {
    svg = svg.replace(/svg \{ color: #[0-9a-f]{6}; \}/i, `svg { color: ${colours[job.colour]}; }`);
  }

  const destination = path.join(outputDir, job.output);
  await sharp(Buffer.from(svg))
    .resize({ width: job.width, ...(job.height ? { height: job.height, fit: 'fill' } : {}) })
    .png({ compressionLevel: 9 })
    .toFile(destination);
  return destination;
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  const written = [];
  for (const job of jobs) written.push(await render(job));
  process.stdout.write(`${written.join('\n')}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
