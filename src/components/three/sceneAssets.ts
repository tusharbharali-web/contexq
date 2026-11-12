import coinData from "@/data/coin-slices.json";

/**
 * Every file the homepage 3D scene needs before it can be shown.
 *
 * These are requested in parallel as soon as the page HTML arrives (see
 * `preloadSceneAssets` in app/page.tsx and the loader preloads in CoinScene).
 * Without this, React only requested each file once the component before it had
 * finished loading, so the assets downloaded one after another.
 */
export const GLOBE_MODEL = "/assets/3d/Globe.avif.glb";
/** Studio lighting as an Ultra HDR JPEG (gain map): 198 KB instead of the 1.6 MB .hdr, visually identical. */
export const ENVIRONMENT_HDR = "/assets/environments/studio.jpg";
export const FLOOR_TEXTURE = "/assets/images/world_1.jpg";
/** Only visible after a slice is clicked, so it is loaded after the reveal (not preloaded). */
export const BASE_PLATE_TEXTURE = "/assets/images/globe_base_1.webp";
export const SLICE_TEXTURES: string[] = coinData.slices
  .map((s) => (s as { imageUrl?: string }).imageUrl)
  .filter((u): u is string => Boolean(u));

/** Textures decoded off the main thread (see useBitmapTexture). */
export const IMAGE_ASSETS = [...SLICE_TEXTURES, FLOOR_TEXTURE];
/** Everything is fetched with fetch() (GLTFLoader, gain-map loader, ImageBitmapLoader). */
export const FETCH_ASSETS = [GLOBE_MODEL, ENVIRONMENT_HDR, ...IMAGE_ASSETS];
