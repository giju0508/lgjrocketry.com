import imageManifest from "../content/imageManifest.json";
import { normalizeAssetPath, resolveAssetPath } from "./assets";

export const getImageSources = (source, maxWidth = 2048) => {
  const original = resolveAssetPath(source);
  const image = imageManifest[normalizeAssetPath(source)];
  if (!image) return { src: original, original };

  const variants = image.variants.filter((variant) => variant.width <= maxWidth);
  if (variants.length === 0) variants.push(image.variants[0]);

  return {
    src: resolveAssetPath(variants.at(-1).src),
    srcSet: variants.map((variant) => `${resolveAssetPath(variant.src)} ${variant.width}w`).join(", "),
    placeholder: `data:image/webp;base64,${image.placeholder}`,
    width: image.width,
    height: image.height,
    original,
  };
};
