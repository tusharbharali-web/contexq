import manifest from "./manifest.json";

/**
 * Maps a URL written for the old standalone HTML pages (e.g. "awards/lhoft-catapult.html",
 * "PR_JM_joins.html?slug=x", "/html/contact (2).html") to the React route that now serves it.
 * Returns null for external URLs or anything that is not a page.
 */
export function resolveRoute(href: string, legacyUrl: string): string | null {
  const raw = href.trim();
  if (!raw || /^(#|mailto:|tel:|javascript:|data:|blob:)/i.test(raw)) return null;
  let url: URL;
  try {
    url = new URL(raw, window.location.origin + legacyUrl);
  } catch {
    return null;
  }
  if (url.origin !== window.location.origin) return null;

  const pathname = decodeURIComponent(url.pathname);
  const template = (manifest.templateDefaults as Record<string, { base: string; slug: string }>)[pathname];
  if (template) {
    return template.base + (url.searchParams.get("slug") || template.slug) + url.hash;
  }
  const mapped = (manifest.routeMap as Record<string, string>)[pathname];
  if (mapped !== undefined) {
    url.searchParams.delete("embed");
    const query = url.searchParams.toString();
    return mapped + (query ? `?${query}` : "") + url.hash;
  }
  // Already a site route (absolute path that is not a legacy file)?
  if (!/\.[a-z0-9]+$/i.test(pathname)) return pathname + url.search + url.hash;
  return null;
}

/** Turns an asset path that was relative to the old HTML file into an absolute one. */
export function absoluteAsset(src: string, legacyUrl: string): string {
  if (!src || /^(data:|blob:|https?:|\/\/|#|\/)/i.test(src.trim())) return src;
  try {
    const url = new URL(src.trim(), window.location.origin + legacyUrl);
    return url.pathname + url.search + url.hash;
  } catch {
    return src;
  }
}
