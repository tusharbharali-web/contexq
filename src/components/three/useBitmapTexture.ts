"use client";

import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";

/**
 * Like drei's useTexture, but the image is decoded off the main thread
 * (fetch + createImageBitmap) instead of synchronously during the GPU upload.
 * With <img>-based textures, decoding the slice icons and the floor map blocked
 * ~600 ms of frames right when the coin's entrance animation was playing.
 *
 * Pixels are identical: the bitmap is flipped at decode time (instead of by WebGL)
 * and alpha is not premultiplied, matching the TextureLoader upload path.
 */
const configure = (loader: THREE.ImageBitmapLoader) => {
  loader.setOptions({ imageOrientation: "flipY", premultiplyAlpha: "none" });
};

export function useBitmapTexture(url: string): THREE.Texture {
  const bitmap = useLoader(THREE.ImageBitmapLoader, url, configure) as ImageBitmap;
  return useMemo(() => {
    const texture = new THREE.Texture(bitmap as unknown as HTMLImageElement);
    texture.flipY = false; // already flipped by createImageBitmap
    texture.needsUpdate = true;
    return texture;
  }, [bitmap]);
}

/** Starts loading (and decoding) a texture before any component asks for it. */
useBitmapTexture.preload = (url: string) => useLoader.preload(THREE.ImageBitmapLoader, url, configure);

/** Suspends until all of these textures are loaded and decoded. Renders nothing. */
export function AwaitTextures({ urls }: { urls: string[] }) {
  // One call per URL (a fixed list) so each shares the per-URL cache entry used by
  // useBitmapTexture; passing an array would create a separate cache entry.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  for (const url of urls) useLoader(THREE.ImageBitmapLoader, url, configure);
  return null;
}
