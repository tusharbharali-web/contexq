"use client";

import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";

interface CameraAnimatorProps {
  active: boolean;
  sceneGroupRef: React.RefObject<THREE.Group | null>;
  globeGroupRef: React.RefObject<THREE.Group | null>;
  groupRef: React.RefObject<THREE.Group | null>;
  floorRef: React.RefObject<THREE.Group | null>;
}

/**
 * CameraAnimator, smoothly orbits the camera and manages major scene transitions.
 * When `active` is true (a slice was clicked), it moves the camera to a top-down view.
 */
export function CameraAnimator({ 
  active, 
  sceneGroupRef, 
  globeGroupRef, 
  groupRef, 
  floorRef 
}: CameraAnimatorProps) {
  const { camera } = useThree();
  const progress = useRef(0);
  const DURATION = 3; // Exactly 3 seconds

  const lookTarget = useMemo(() => new THREE.Vector3(0, 0, 0), []);
  const restPos = useMemo(() => new THREE.Vector3(0.02, 3.5, 1.45), []);

  const activPos = useMemo(() => {
    const offset = restPos.clone().sub(lookTarget);
    const spherical = new THREE.Spherical().setFromVector3(offset);
    spherical.phi += THREE.MathUtils.degToRad(50); // Keep user's 50° downward tilt
    spherical.makeSafe();
    const pos = new THREE.Vector3().setFromSpherical(spherical).add(lookTarget);
    return pos;
  }, [restPos, lookTarget]);

  useFrame((_state, delta) => {
    // 1. Calculate time-based progress (0 to 1 over 3 seconds)
    if (active) {
      progress.current = Math.min(1, progress.current + delta / DURATION);
    } else {
      progress.current = Math.max(0, progress.current - delta / DURATION);
    }

    // 2. MANUAL "GSAP EXPO" EASING
    const x = progress.current;
    const easeInOutExpo = x === 0 ? 0 : x === 1 ? 1 : x < 0.5
      ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2;

    // 3. Update Camera Position (Only if active or transitioning)
    if (active || progress.current > 0) {
      camera.position.lerpVectors(restPos, activPos, easeInOutExpo);
      camera.lookAt(lookTarget);
    }

    // 4. Update Scene Layout (Lateral shift & Perspective tilt)
    if (sceneGroupRef.current) {
      sceneGroupRef.current.position.x = easeInOutExpo * 1.5;
      sceneGroupRef.current.rotation.z = easeInOutExpo * 0.1;
    }

    // 4b. Lower the wedges & rim group
    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(0.6, -0.3, easeInOutExpo);
      groupRef.current.position.y = THREE.MathUtils.lerp(0.45, -0.05, easeInOutExpo);
    }

    // 5. Update Globe Transformation
    if (globeGroupRef.current) {
      // Scale: 0.22 (rest) -> 0.14 (active)
      const targetScale = THREE.MathUtils.lerp(1.1*0.9, 0.7*0.9, easeInOutExpo);
      globeGroupRef.current.scale.setScalar(targetScale);

      // Position X
      globeGroupRef.current.position.x = THREE.MathUtils.lerp(0.6, -0.3, easeInOutExpo);

      // Position Y
      globeGroupRef.current.position.y = THREE.MathUtils.lerp(-.8, -.3, easeInOutExpo);

      // Rotation X
      const targetRotX = THREE.MathUtils.lerp(0.1, THREE.MathUtils.degToRad(45)+0.1, easeInOutExpo);
      globeGroupRef.current.rotation.x = targetRotX;

      // Base Plate Scale
      const basePlate = globeGroupRef.current.getObjectByName("basePlate");
      if (basePlate) {
        basePlate.scale.setScalar(easeInOutExpo);
      }
    }

    // 6. Update Floor Height
    if (floorRef.current) {
      floorRef.current.position.y = THREE.MathUtils.lerp(-1.0, -1.8, easeInOutExpo);
    }
  });

  return null;
}
