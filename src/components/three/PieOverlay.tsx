"use client";

import * as THREE from "three";
import { useTexture } from "@react-three/drei";

// The overlay texture is only fetched once the overlay is actually shown.
// (Previously the 2.9 MB PNG was always downloaded and, sharing a Suspense
// boundary with the coin, held back the coin's first paint even while hidden.)
export function PieOverlay({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return <PieOverlayMesh />;
}

function PieOverlayMesh() {
  const texture = useTexture("/assets/images/Pie1.webp");

  // Calculate aspect ratio dynamically once texture is loaded
  const img = texture.image as HTMLImageElement | undefined;
  const aspect = img ? img.width / img.height : 1;
  const baseSize = 2.4;

  return (
    <mesh position={[0, 0.6, 0.1]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[baseSize * aspect, baseSize]} />
      <meshBasicMaterial
        map={texture}
        transparent={true}
        opacity={1}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}
