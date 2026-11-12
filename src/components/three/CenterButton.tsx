"use client";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef } from "react";

/**
 * The raised "Customers" button in the middle of the coin.
 *
 * It uses no new assets (the label reuses the slice-label font that is already
 * loaded), so it adds nothing to the startup download. It enters with the wedges
 * once the scene is revealed, and shrinks away while a slice popup is open.
 */
const RADIUS = 0.3; // puck radius in coin space (the coin's outer radius is 1.35)
const BOTTOM = -0.06; // sits in the coin's centre, rising above the wedges
const TOP = 0.27;
const LABEL_FONT = "/assets/fonts/Roboto-SemiBold.ttf";
const REVEAL_DELAY = 5 * 0.085; // after the five wedges' staggered entrance
const REVEAL_SPEED = 1.4;
const ACTIVE_DURATION = 3; // matches the wedges' exit timing
const LABEL_ROTATION = -19 * (Math.PI / 180); // same counter-rotation as the slice icons

// Exactly the coin rim's material (see CoinSlices): the same lights then shade the
// puck like the rest of the pie - bright where it faces up, darker on its walls.
const RIM_MATERIAL = {
  color: "#2d2d2d",
  emissive: "#001a33",
  emissiveIntensity: 0.45,
  roughness: 0.4,
  metalness: 1.0,
  envMapIntensity: 1.5,
  toneMapped: false,
} as const;

const easeInOutExpo = (x: number) =>
  x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2;

export function CenterButton({
  label,
  revealReady,
  anyWedgeActive,
  canInteract,
  onSelect,
}: {
  label: string;
  revealReady: boolean;
  anyWedgeActive: boolean;
  canInteract: boolean;
  onSelect: () => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const revealStart = useRef<number | null>(null);
  const exit = useRef(0);
  const hovered = useRef(false);
  const lift = useRef(0);

  useFrame((state, delta) => {
    const g = groupRef.current;
    if (!g) return;
    if (!revealReady) {
      g.scale.setScalar(0);
      return;
    }
    if (revealStart.current === null) revealStart.current = state.clock.elapsedTime;
    const reveal = easeInOutExpo(
      Math.min(1, Math.max(0, (state.clock.elapsedTime - revealStart.current - REVEAL_DELAY) * REVEAL_SPEED)),
    );
    exit.current = anyWedgeActive
      ? Math.min(1, exit.current + delta / ACTIVE_DURATION)
      : Math.max(0, exit.current - delta / ACTIVE_DURATION);
    const scale = reveal * (1 - easeInOutExpo(exit.current));
    g.scale.setScalar(Math.max(scale, 0.0001));
    g.visible = scale > 0.001;
    lift.current = THREE.MathUtils.lerp(lift.current, hovered.current && canInteract ? 0.05 : 0, 0.1);
    g.position.y = THREE.MathUtils.lerp(-0.15, 0, reveal) + lift.current;
  });

  const height = TOP - BOTTOM;

  return (
    <group
      ref={groupRef}
      onClick={(e) => {
        e.stopPropagation();
        if (canInteract) onSelect();
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        hovered.current = true;
        if (canInteract) document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        hovered.current = false;
        document.body.style.cursor = "auto";
      }}
    >
      {/* side wall: the rim's metal */}
      <mesh position={[0, BOTTOM + height / 2, 0]}>
        <cylinderGeometry args={[RADIUS, RADIUS, height, 64, 1, true]} />
        <meshPhysicalMaterial {...RIM_MATERIAL} side={THREE.DoubleSide} />
      </mesh>

      {/* flat metal lip on top, like the rim's upper face, with a rounded outer edge */}
      <mesh position={[0, TOP, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[RADIUS * 0.88, RADIUS, 64]} />
        <meshPhysicalMaterial {...RIM_MATERIAL} />
      </mesh>
      <mesh position={[0, TOP - 0.008, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[RADIUS - 0.008, 0.012, 12, 64]} />
        <meshPhysicalMaterial {...RIM_MATERIAL} />
      </mesh>

      {/* dark top face in the wedges' colour, lit by the scene */}
      <mesh position={[0, TOP + 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[RADIUS * 0.88, 64]} />
        <meshPhysicalMaterial color="#0d141c" roughness={0.35} metalness={0.3} envMapIntensity={0.6} />
      </mesh>

      {/* glowing cyan ring: soft halo + crisp line, and a faint inner ring */}
      <mesh position={[0, TOP + 0.002, 0]} rotation={[-Math.PI / 2, 0, 0]} raycast={() => null}>
        <ringGeometry args={[RADIUS * 0.6, RADIUS * 0.82, 64]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.16} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
      </mesh>
      <mesh position={[0, TOP + 0.003, 0]} rotation={[-Math.PI / 2, 0, 0]} raycast={() => null}>
        <ringGeometry args={[RADIUS * 0.7, RADIUS * 0.74, 64]} />
        <meshBasicMaterial color="#5ee8ff" toneMapped={false} />
      </mesh>
      <mesh position={[0, TOP + 0.003, 0]} rotation={[-Math.PI / 2, 0, 0]} raycast={() => null}>
        <ringGeometry args={[RADIUS * 0.84, RADIUS * 0.855, 64]} />
        <meshBasicMaterial color="#1aa3c4" transparent opacity={0.7} toneMapped={false} />
      </mesh>

      {/* label */}
      <Text
        position={[0, TOP + 0.004, 0]}
        rotation={[-Math.PI / 2, 0, LABEL_ROTATION]}
        font={LABEL_FONT}
        fontSize={0.072}
        letterSpacing={0.06}
        color="#0a2a3a"
        outlineWidth={0.0045}
        outlineColor="#7cf0ff"
        anchorX="center"
        anchorY="middle"
        raycast={() => null}
      >
        {label.toUpperCase()}
      </Text>
    </group>
  );
}
