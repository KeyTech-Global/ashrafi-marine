import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE = process.argv[2] ?? "C:/Users/Mohmmad Danish/AppData/Local/Temp/opencode/am-img/final";
const DEST = path.resolve("public/images");

const files = [
  ["hero-harbour", 2400],
  ["hero-boat-sunset", 2200],
  ["product-jawla", 1500],
  ["product-mixed", 1500],
  ["product-other", 1500],
  ["drying-rack", 2000],
  ["dried-hanging", 1500],
  ["market-fish", 1800],
  ["harbour-sunny", 1800],
  ["ocean-aerial", 2000],
  ["dried-container", 1500],
  ["fish-heads", 1500],
];

await fs.mkdir(DEST, { recursive: true });
const output = {};

for (const [name, width] of files) {
  const sourcePath = path.join(SOURCE, `${name}.jpg`);
  const destPath = path.join(DEST, `${name}.webp`);

  const pipeline = sharp(sourcePath).rotate().resize({
    width,
    withoutEnlargement: true,
  });

  const info = await pipeline
    .clone()
    .webp({ quality: 82, effort: 5 })
    .toFile(destPath);

  const blur = await pipeline
    .clone()
    .resize({ width: 22 })
    .webp({ quality: 35 })
    .toBuffer();

  output[name] = {
    width: info.width,
    height: info.height,
    bytes: info.size,
    blurDataURL: `data:image/webp;base64,${blur.toString("base64")}`,
  };

  console.log(`${name}: ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)}KB`);
}

await fs.writeFile(
  path.join(DEST, "manifest.json"),
  JSON.stringify(output, null, 2),
);

console.log("Wrote", path.join(DEST, "manifest.json"));
