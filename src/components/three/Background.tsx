"use client";

import * as THREE from "three";
import { useBitmapTexture } from "./useBitmapTexture";
import { useEffect } from "react";
import { FLOOR_TEXTURE } from "./sceneAssets";

export function Background({ floorRef, children }: { 
  floorRef: React.RefObject<THREE.Group | null>;
  children?: React.ReactNode;
}) {
  const texture = useBitmapTexture(FLOOR_TEXTURE);

  useEffect(() => {
    if (texture) {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.needsUpdate = true;
    }
  }, [texture]);

  // depth of the floor
  const floorDepth = 6 * 0.85;
  // Base offset
  const zOffset = -0.4;

  return (
    <group ref={floorRef}>
      {/* Ground Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, zOffset]}>
        <planeGeometry args={[11 * .85, floorDepth]} />
        <meshBasicMaterial
          map={texture}
          transparent={true}
          opacity={1.0}
          color="#ffffff"
          toneMapped={false}
        />
      </mesh>
      {children}
    </group>
  );
}
