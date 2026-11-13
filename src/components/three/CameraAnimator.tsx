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
  const { camera, size } = useThree();
  const progress = useRef(0);
  const framed = useRef(false);
  const textBottom = useRef(0);
  const lastSize = useRef("");
  // Resting coin centre in world space (slices group position x the scaling group) and
  // its half-width including the rim labels; used to fit the coin on portrait phones.
  const coinCentre = useMemo(() => new THREE.Vector3(0.486, 0.243, -0.014), []);
  const COIN_HALF_W = 1.45;
  const tmp = useMemo(() => new THREE.Vector3(), []);
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

    // 3b. Portrait phones: the desktop framing puts the coin off the right edge, behind the
    // hero text. Widen the lens so the whole coin fits the screen width and slide the view
    // so the coin sits centred in the space below the hero text. Blends back to the desktop
    // framing as the camera moves into a pie view.
    const cam = camera as THREE.PerspectiveCamera;
    const W = size.width, H = size.height;
    const portrait = W < 1024 && H > W;
    // phone held sideways: text on the left half, coin fitted into the right half
    const shortLandscape = !portrait && H < 520 && W > H;
    if (portrait || shortLandscape) {
      const key = `${W}x${H}`;
      if (key !== lastSize.current || !textBottom.current) {
        lastSize.current = key;
        const hero = document.querySelector(".hero-content");
        const canvas = document.querySelector("main canvas");
        if (hero && canvas) {
          textBottom.current = hero.getBoundingClientRect().bottom - canvas.getBoundingClientRect().top;
        }
      }
      let coinW: number, targetX: number, targetY: number;
      if (portrait) {
        const top = Math.min(Math.max(textBottom.current + 16, H * 0.35), H * 0.7);
        coinW = THREE.MathUtils.clamp(Math.min(W * 0.92, (H - top - 24) * 1.25), W * 0.62, W * 0.92);
        targetX = W / 2;
        targetY = Math.min(H - coinW * 0.46 - 20, top + (H - top) / 2 - 10);
      } else {
        const headerH = 56;
        coinW = Math.min(W * 0.46, (H - headerH - 16) * 1.45);
        targetX = W * 0.74;
        targetY = headerH + (H - headerH) / 2 + 6;
      }
      // fov that makes the coin coinW pixels wide at its distance from the camera
      const dist = tmp.copy(coinCentre).sub(cam.position).length();
      const fovFit = THREE.MathUtils.radToDeg(2 * Math.atan((COIN_HALF_W * H) / (dist * coinW)));
      cam.fov = THREE.MathUtils.lerp(fovFit, 40, easeInOutExpo);
      cam.clearViewOffset();
      cam.updateProjectionMatrix();
      tmp.copy(coinCentre).project(cam);
      const px = (tmp.x * 0.5 + 0.5) * W, py = (-tmp.y * 0.5 + 0.5) * H;
      const k = 1 - easeInOutExpo;
      cam.setViewOffset(W, H, (px - targetX) * k, (py - targetY) * k, W, H);
      framed.current = true;
    } else if (framed.current) {
      framed.current = false;
      cam.clearViewOffset();
      cam.fov = 40;
      cam.updateProjectionMatrix();
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
