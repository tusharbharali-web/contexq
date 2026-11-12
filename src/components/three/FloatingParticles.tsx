"use client";

import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

interface FloatingParticlesProps {
  count?: number;
}

// 50 High-End Spherical Data Nodes localized to the World Map
export function FloatingParticles({ count = 50 }: FloatingParticlesProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // FIXED: Constrained to the local Coordinate System of the World Map
  const initialPositions = useMemo(() => {
    const posArr = new Float32Array(count * 3);
    const floorWidth = 11 * 0.85;
    const floorDepth = 6 * 0.85;
    const zOffset = -0.4;

    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 0] = (Math.random() - 0.5) * floorWidth;
      posArr[i * 3 + 1] = 0;
      posArr[i * 3 + 2] = (Math.random() - 0.5) * floorDepth + zOffset;
    }
    return posArr;
  }, [count]);

  const offsets = useMemo(() => new Float32Array(count).map(() => Math.random() * 8), [count]);
  const speeds = useMemo(() => new Float32Array(count).map(() => 0.4 + Math.random() * 1.0), [count]);

  // Re-usable objects to avoid GC pressure
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);
  const revealProgress = useRef(0);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Global Bloom Reveal
    revealProgress.current = Math.min(1, revealProgress.current + delta * 0.4);

    for (let i = 0; i < count; i++) {
      const life = 4; // 1.5x FASTER: Shorter life = higher frequency
      const time = (state.clock.elapsedTime * speeds[i] + offsets[i]) % life;
      const progress = time / life;

      // 1. Pure Vertical Rise
      const MAX_HEIGHT = 0.35; // User set cap
      const currentY = progress * MAX_HEIGHT;

      const initialX = initialPositions[i * 3 + 0];
      const initialZ = initialPositions[i * 3 + 2];

      dummy.position.set(initialX, currentY, initialZ);

      // 2. Scale & Opacity Lifecycle
      const baseAlpha = Math.sin(progress * Math.PI);
      const intensity = baseAlpha * 0.75 * revealProgress.current;
      const scale = 0.012 * (0.8 + intensity * 0.2); // Further reduced to 0.012 for high-res look
      dummy.scale.set(scale, scale, scale);

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // 3. Instance Colors (Balanced Sky-Blue from World_1 texture)
      const mix = (offsets[i] % 1);
      color.setRGB(
        (0.2 + mix * 0.2) * intensity, // Low Red (Slate)
        (0.6 + mix * 0.2) * intensity, // Mid-High Green (Oceanic)
        (0.95 + mix * 0.05) * intensity // High Blue (Sky)
      );
      meshRef.current.setColorAt(i, color);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} frustumCulled={false}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </instancedMesh>
  );
}
