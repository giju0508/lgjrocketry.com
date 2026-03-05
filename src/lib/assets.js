const DEFAULT_IMAGE_PATH = "/images/wallpaper.jpg";

const isExternalUrl = (value) => /^(https?:)?\/\//.test(value);

export const normalizeAssetPath = (path) => {
  if (!path) return DEFAULT_IMAGE_PATH;

  const normalized = String(path).trim().replace(/\\/g, "/");
  if (!normalized) return DEFAULT_IMAGE_PATH;
  if (isExternalUrl(normalized)) return normalized;

  return normalized.startsWith("/") ? normalized : `/${normalized}`;
};

export const resolveAssetPath = (path) => {
  const normalized = normalizeAssetPath(path);
  if (isExternalUrl(normalized)) return normalized;

  const baseUrl = (import.meta.env.BASE_URL || "").replace(/\/$/, "");
  return `${baseUrl}${normalized}`;
};

export const resolveAssetList = (paths = []) =>
  paths.map((path) => resolveAssetPath(path)).filter(Boolean);

