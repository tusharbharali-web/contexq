"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

// Global mouse-tracker rig applying subtle opposite rotation to simulate zero-gravity parallax
export function MouseParallax({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Calculate normalized rotation targets from pointer (max 2% of half-pi)
    const targetX = (state.pointer.x * Math.PI) * 0.02;
    const targetY = (state.pointer.y * Math.PI) * 0.02;

    // Smooth geometric interpolation damping
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.05);
  });

  return <group ref={groupRef}>{children}</group>;
}
