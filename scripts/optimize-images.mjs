import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const publicDir = path.join(root, "public");
const widths = [320, 640, 1024, 1600, 2048];
const manifest = {};

async function findImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? findImages(file) : /\.(png|jpe?g)$/i.test(file) ? [file] : [];
  }));
  return files.flat().sort();
}

const images = [...await findImages(path.join(publicDir, "images")), path.join(publicDir, "LGJLogo.png")];

for (const file of images) {
  const input = await readFile(file);
  // Include encoder settings in the hash so regenerated assets remain safe to cache.
  const hash = createHash("sha256").update(input).update("webp-v1-78-84").digest("hex").slice(0, 12);
  const source = path.relative(publicDir, file).split(path.sep).join("/");
  const metadata = await sharp(input).metadata();
  const rotated = [5, 6, 7, 8].includes(metadata.orientation);
  const width = rotated ? metadata.height : metadata.width;
  const height = rotated ? metadata.width : metadata.height;
  const targetWidths = [...new Set(widths.map((size) => Math.min(size, width)))];
  const preview = await sharp(input).rotate().resize({ width: 32, withoutEnlargement: true }).webp({ quality: 35 }).toBuffer();
  const variants = [];

  for (const size of targetWidths) {
    const outputPath = `/optimized/${source}.${hash}.${size}.webp`;
    const destination = path.join(publicDir, outputPath);
    await mkdir(path.dirname(destination), { recursive: true });
    const existing = await stat(destination).catch(() => null);
    if (!existing) {
      const output = await sharp(input).rotate().resize({ width: size, withoutEnlargement: true })
        .webp({ quality: size <= 640 ? 78 : 84, effort: 5 }).toBuffer();
      await writeFile(destination, output);
    }
    variants.push({ src: outputPath, width: size });
  }

  manifest[`/${source}`] = {
    width,
    height,
    placeholder: preview.toString("base64"),
    variants,
  };
}

await writeFile(path.join(root, "src/content/imageManifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Optimized ${images.length} images. Originals preserved; manifest and responsive WebP files generated.`);
