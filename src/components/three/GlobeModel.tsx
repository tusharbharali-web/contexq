"use client";

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useMemo, useCallback, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { BASE_PLATE_TEXTURE, GLOBE_MODEL, isFlatViewport } from "./sceneAssets";

interface GlobeModelProps {
  groupRef: React.RefObject<THREE.Group | null>;
  scale?: number;
  position?: [number, number, number];
  showBase?: boolean;
  isActive?: boolean;
  /** Start loading assets that are not needed for the first view (the base plate). */
  loadExtras?: boolean;
}

// Primary 3D Globe with Atmosphere Layer
export function GlobeModel({
  groupRef,
  scale = 1.4,
  position = [0, 0, 0],
  showBase = true,
  isActive = false,
  loadExtras = true
}: GlobeModelProps) {
  const { scene } = useGLTF(GLOBE_URL);
  const baseRef = useRef<THREE.Mesh>(null);
  const globeRef = useRef<THREE.Group>(null);

  // Drag state, only meaningful when isActive
  const isDragging = useRef(false);
  const lastPointer = useRef<{ x: number; y: number } | null>(null);

  // State for physical momentum and transitions
  const dragOffset = useRef(new THREE.Vector3(0, 0, 0));
  const velocity = useRef({ x: 0, y: 0 });
  const autoSpinY = useRef(0);
  const transitionProgress = useRef(0);

  const DURATION = 3;
  const DAMPING = 0.94;
  const DRAG_SENSITIVITY = 0.005;

  // Cleanly clone the scene explicitly and ensure no glow from inside the GLTF
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mat = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
        if (mat.emissive) {
          mat.emissiveIntensity = 0;
        }
      }
    });
    return clone;
  }, [scene]);

  // Initial rotation applied via JSX: rotation={[-1, 0, 0]}
  const INIT_ROT_X = -1;
  const INIT_ROT_Z = 0;

  useFrame((_state, delta) => {
    if (!globeRef.current) return;

    // 1. Update Transition Progress (0 to 1 over 3s)
    if (isActive) {
      transitionProgress.current = Math.min(1, transitionProgress.current + delta / DURATION);
    } else {
      transitionProgress.current = Math.max(0, transitionProgress.current - delta / DURATION);

      // Settle velocity when closing
      velocity.current.x *= 0.85;
      velocity.current.y *= 0.85;

      // Stop drag if popup closed
      if (isDragging.current) {
        isDragging.current = false;
        lastPointer.current = null;
        document.body.style.cursor = 'auto';
      }
    }

    // 2. Continuous Auto-Spin
    autoSpinY.current += delta * 0.15;

    // 3. Apply Momentum (when not dragging)
    if (!isDragging.current) {
      velocity.current.x *= DAMPING;
      velocity.current.y *= DAMPING;
      dragOffset.current.x += velocity.current.x;
      dragOffset.current.y += velocity.current.y;
    }

    // 3. Apply Synchronized Rotation Reset
    // Uses the same easing logic as CameraAnimator for perfect alignment
    const x = transitionProgress.current;
    const ease = x === 0 ? 0 : x === 1 ? 1 : x < 0.5
      ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2;

    // Mix between the "Resting State" (Auto-spin Y, INIT X/Z) 
    // and the "Active State" (Auto-spin + full User Drag)
    globeRef.current.rotation.x = INIT_ROT_X + (dragOffset.current.x * ease);
    globeRef.current.rotation.y = autoSpinY.current + (dragOffset.current.y * ease);
    globeRef.current.rotation.z = INIT_ROT_Z + (dragOffset.current.z * ease);

    // Clear drag offset and velocity once fully reset to center to avoid "pops" next time
    if (transitionProgress.current === 0 && (dragOffset.current.x !== 0 || dragOffset.current.y !== 0)) {
      dragOffset.current.set(0, 0, 0);
      velocity.current = { x: 0, y: 0 };
    }

    // 4. Base Plate is independent
    if (baseRef.current) {
      baseRef.current.rotation.z += delta * 0.45;
    }
  });

  // Pointer handlers, attached to the globe inner group so base plate is never involved
  const onPointerDown = useCallback((e: any) => {
    if (!isActive) return;
    e.stopPropagation();
    e.target.setPointerCapture(e.pointerId);
    isDragging.current = true;
    lastPointer.current = { x: e.clientX, y: e.clientY };
    document.body.style.cursor = 'grabbing';
  }, [isActive]);

  const onPointerMove = useCallback((e: any) => {
    if (!isDragging.current || !lastPointer.current || !globeRef.current) return;
    const dx = e.clientX - lastPointer.current.x;
    const dy = e.clientY - lastPointer.current.y;

    // Update velocity and absolute rotation
    const vx = dy * DRAG_SENSITIVITY;
    const vy = dx * DRAG_SENSITIVITY;

    velocity.current = { x: vx, y: vy };
    dragOffset.current.x += vx;
    dragOffset.current.y += vy;

    lastPointer.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
    lastPointer.current = null;
    document.body.style.cursor = 'auto';
  }, []);

  return (
    // MASTER ASSEMBLY: Tilts everything slightly AWAY from the screen (+0.25 rad tilt)
    <group ref={groupRef} position={[0.6, 4, -0.07]} scale={2} rotation={[0.1, 0, 0]} >

      {/* The Globe: drag-rotatable inner assembly. Base plate is a sibling, unaffected. */}
      <group
        ref={globeRef}
        rotation={[-1, 0, 0]}
        onPointerDown={isActive ? onPointerDown : undefined}
        onPointerMove={isActive ? onPointerMove : undefined}
        onPointerUp={isActive ? onPointerUp : undefined}
        onPointerLeave={isActive ? onPointerUp : undefined}
      >
        <primitive object={clonedScene} />
      </group>

      {/* Rotating Futuristic Base Plate - always spins on its own, never dragged.
          Starts at scale 0; CameraAnimator grows it when a slice opens. It is only
          seen after a click, so its texture loads after the scene is revealed. */}
      <BasePlate baseRef={baseRef} load={loadExtras} />
    </group>
  );
}

// Separate loading manager: this texture must not hold back the startup loader.
const deferredLoader = new THREE.TextureLoader(new THREE.LoadingManager());

function BasePlate({ baseRef, load }: { baseRef: React.RefObject<THREE.Mesh | null>; load: boolean }) {
  const [baseTex, setBaseTex] = useState<THREE.Texture | null>(null);
  useEffect(() => {
    if (!load || baseTex) return;
    let cancelled = false;
    deferredLoader.load(BASE_PLATE_TEXTURE, (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      if (!cancelled) setBaseTex(t);
    });
    return () => { cancelled = true; };
  }, [load, baseTex]);
  if (!baseTex) return null;
  return (
    <mesh
      ref={baseRef}
      name="basePlate"
      rotation={[0.45, -0.05, 0]}
      position={[-.1, -0.2, 0.95]}
      scale={[0, 0, 0]}
      renderOrder={10}
      visible={true}
    >
      <planeGeometry args={[2, 2]} />
      <meshPhysicalMaterial
        map={baseTex}
        transparent={true}
        opacity={1}
        emissive="#ffffff"
        emissiveIntensity={0.2}
        side={THREE.DoubleSide}
        depthWrite={true}
      />
    </mesh>
  );
}

// Globe model with its 2880x1440 colour texture stored as AVIF (0.35 MB instead of 5.6 MB).
const GLOBE_URL = GLOBE_MODEL;

// Preload the GLTF file to avoid rendering hitches
// Phones show the flat hub, which has no globe: don't download it there.
if (typeof window !== "undefined" && !isFlatViewport()) useGLTF.preload(GLOBE_URL);
