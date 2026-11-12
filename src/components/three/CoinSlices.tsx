"use client";

import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { Text, Edges, useGLTF } from "@react-three/drei";
import { useBitmapTexture } from "./useBitmapTexture";
import { useEffect, useMemo, useRef, Suspense, useCallback, useState } from "react";
import { CoinSliceData } from "./types";

// Subcomponent safely separating image hook logic
function ImageSliceContent({
  imageUrl,
  dir,
  radius,
  offset,
  height,
}: {
  imageUrl: string;
  dir: THREE.Vector3;
  radius: number;
  offset: [number, number, number];
  height: number;
}) {
  const texture = useBitmapTexture(imageUrl);
  // Configure sampling once per texture. (Setting needsUpdate on every render
  // re-uploaded the image to the GPU on each hover, causing frame hitches.)
  useMemo(() => {
    texture.anisotropy = 16;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = true;
    texture.needsUpdate = true;
  }, [texture]);
  const iconSize = 0.85;
  const rimRadius = radius * 0.824;
  const r = rimRadius * 0.60;
  const pos: [number, number, number] = [
    dir.x * r + offset[0],
    height / 2 + 0.03,
    dir.z * r + offset[2],
  ];

  const rotation: [number, number, number] = [
    -Math.PI / 2,
    0,
    -19 * (Math.PI / 180),
  ];

  return (
    <mesh position={pos} rotation={rotation} raycast={() => null}>
      <planeGeometry args={[iconSize, iconSize]} />
      <meshBasicMaterial
        map={texture}
        transparent
        alphaTest={0.3}
        depthWrite={false}
      />
    </mesh>
  );
}

// Subcomponent safely isolating text-only mesh
function TextSliceContent({
  text,
  dir,
  radius,
  offset,
  height,
}: {
  text: string;
  dir: THREE.Vector3;
  radius: number;
  offset: [number, number, number];
  height: number;
}) {
  const rimRadius = radius * 0.824;
  const r = rimRadius * 0.68;
  const pos: [number, number, number] = [
    dir.x * r + offset[0],
    height / 2 + 0.018,
    dir.z * r + offset[2],
  ];

  const rotation: [number, number, number] = [
    -Math.PI / 2,
    0,
    -19 * (Math.PI / 180),
  ];

  return (
    <Text
      position={pos}
      rotation={rotation}
      fontSize={0.075}
      color="#ffffff"
      textAlign="center"
      maxWidth={0.55}
      lineHeight={1.4}
      font="/assets/fonts/Roboto-Bold.ttf"
      raycast={() => null}
    >
      {text}
    </Text>
  );
}

// Subcomponent: render a GLB model as the slice icon
function GlbSliceContent({
  glbUrl,
  dir,
  radius,
  offset,
  height,
  glbScale = 0.4,
  glbYOffset = 0,
  glbRotationY = 0,
}: {
  glbUrl: string;
  dir: THREE.Vector3;
  radius: number;
  offset: [number, number, number];
  height: number;
  glbScale?: number;
  glbYOffset?: number;
  glbRotationY?: number;
}) {
  const { scene } = useGLTF(glbUrl);
  const cloned = useMemo(() => scene.clone(true), [scene]);
  const rimRadius = radius * 0.824;
  const r = rimRadius * 0.60;
  const pos: [number, number, number] = [
    dir.x * r + offset[0],
    height / 2 + 0.03 + glbYOffset,
    dir.z * r + offset[2],
  ];
  // Rotate model so Y-up models sit upright on the horizontal slice face.
  const rotation: [number, number, number] = [
    0,
    glbRotationY - 19 * (Math.PI / 180),
    0,
  ];
  return (
    <group position={pos} rotation={rotation} scale={glbScale} raycast={() => null}>
      <primitive object={cloned} />
    </group>
  );
}

function SliceContent({
  contentType,
  imageUrl,
  glbUrl,
  glbScale,
  glbYOffset,
  glbRotationY,
  text,
  dir,
  radius,
  offset,
  height,
}: {
  contentType?: string;
  imageUrl?: string;
  glbUrl?: string;
  glbScale?: number;
  glbYOffset?: number;
  glbRotationY?: number;
  text?: string;
  dir: THREE.Vector3;
  radius: number;
  offset: [number, number, number];
  height: number;
  worldPerPx: number;
}) {
  if (contentType === "image" && imageUrl) {
    return <ImageSliceContent imageUrl={imageUrl} dir={dir} radius={radius} offset={offset} height={height} />;
  }

  if (contentType === "glb" && glbUrl) {
    return (
      <Suspense fallback={null}>
        <GlbSliceContent
          glbUrl={glbUrl}
          dir={dir}
          radius={radius}
          offset={offset}
          height={height}
          glbScale={glbScale}
          glbYOffset={glbYOffset}
          glbRotationY={glbRotationY}
        />
      </Suspense>
    );
  }

  if (contentType === "text" && text) {
    return <TextSliceContent text={text} dir={dir} radius={radius} offset={offset} height={height} />;
  }

  return null;
}

function WedgeGroup({ children, isActive, wedgesHidden, anyWedgeActive, index, onHoverEnter, onHoverExit, isHovered, revealReady }: {
  children: React.ReactNode;
  revealReady: boolean;
  isActive: boolean;
  wedgesHidden: boolean;
  anyWedgeActive: boolean;
  index: number;
  onHoverEnter?: (e: any) => void;
  onHoverExit?: (e: any) => void;
  isHovered?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const progress = useRef(0);
  const revealProgress = useRef(0);
  const hoverProgress = useRef(0);
  const isHoveredRef = useRef(false);
  const _vec = useMemo(() => new THREE.Vector3(), []);
  const _targetWorld = useMemo(() => new THREE.Vector3(-1.2, 0.4, 1.2), []);
  const _origin = useMemo(() => new THREE.Vector3(0, 0, 0), []);
  const pulse = useRef(0);
  const wasActive = useRef(false);
  // Clock time at which this wedge's entrance starts (set once the scene is ready).
  const revealStart = useRef<number | null>(null);

  const onPointerEnter = useCallback((e: any) => {
    e.stopPropagation();
    isHoveredRef.current = true;
  }, []);

  const onPointerLeave = useCallback((e: any) => {
    e.stopPropagation();
    isHoveredRef.current = false;
  }, []);

  // Constants
  const REVEAL_STAGGER = 0.085;
  const REVEAL_SPEED = 1.4;

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // 1. Staggered Entry Reveal - timed from when the scene is ready, not from
    //    when the canvas was created, so the entrance always plays in full.
    if (!revealReady) {
      // In the scene at scale 0 (renders nothing) so compileAsync in CoinScene can
      // pre-compile the wedge materials while the loader is up.
      groupRef.current.visible = true;
      groupRef.current.scale.setScalar(0);
      return;
    }
    if (revealStart.current === null) revealStart.current = state.clock.elapsedTime;
    // Starts with the loader fade (was 0.8 s after it), same entrance motion and stagger.
    const revealTime = state.clock.elapsedTime - revealStart.current - (index * REVEAL_STAGGER);
    revealProgress.current = Math.min(1, Math.max(0, revealTime * REVEAL_SPEED));
    
    // 2. Active Interaction Animation
    if (isActive && !wasActive.current) {
      pulse.current = 1.0;
    }
    wasActive.current = isActive;

    if (pulse.current > 0) {
      pulse.current = Math.max(0, pulse.current - delta * 4);
    }

    const isArrived = isActive && progress.current > 0.66;
    groupRef.current.visible = isArrived ? false : true;

    const DURATION = 3;
    if (anyWedgeActive) {
      progress.current = Math.min(1, progress.current + delta / DURATION);
    } else {
      progress.current = Math.max(0, progress.current - delta / DURATION);
    }

    const x = progress.current;
    const t = x === 0 ? 0 : x === 1 ? 1 : x < 0.5
      ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2;

    const reveal = revealProgress.current;
    const revT = reveal === 0 ? 0 : reveal === 1 ? 1 : reveal < 0.5
      ? Math.pow(2, 20 * reveal - 10) / 2
      : (2 - Math.pow(2, -20 * reveal + 10)) / 2;

    const baseScale = THREE.MathUtils.lerp(1.0, 0.1, t) * revT;
    const p = pulse.current;
    const springPop = 1.0 + Math.sin(p * Math.PI) * 0.06;
    const finalScale = baseScale * springPop;
    
    groupRef.current.scale.set(finalScale, finalScale, finalScale);
    groupRef.current.visible = (reveal > 0 && !isArrived);
    
    if (groupRef.current.parent) {
      if (isActive) {
        _vec.copy(_targetWorld);
        groupRef.current.parent.worldToLocal(_vec);
        groupRef.current.position.copy(_origin).lerp(_vec, t);
        const targetRotY = -groupRef.current.parent.rotation.y - .1;
        groupRef.current.rotation.y = THREE.MathUtils.lerp(0, targetRotY, t);
      } else {
        // Subtle positional reveal (floating up from -0.1)
        const revealPosY = THREE.MathUtils.lerp(-0.15, 0, revT);
        groupRef.current.position.set(0, revealPosY, 0);

        // Return from "Active" lerp logic
        if (t > 0) {
          groupRef.current.position.lerp(_origin, 0.15);
          groupRef.current.rotation.y = 0;
        }

        // Apply hover offset with premium easing
        const targetHoverOffset = isHovered ? 0.09 : 0;
        const easeSpeed = 0.1;
        hoverProgress.current = THREE.MathUtils.lerp(hoverProgress.current, targetHoverOffset, easeSpeed);
        groupRef.current.position.y += hoverProgress.current;
      }
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerEnter={(e) => {
        onHoverEnter?.(e);
        onPointerEnter(e);
      }}
      onPointerLeave={(e) => {
        onHoverExit?.(e);
        onPointerLeave(e);
      }}
    >
      {children}
    </group>
  );
}

export function CoinSlices({
  slices,
  radius = 1.35,
  height = 0.24,
  gapRadians = 0,
  centerGapPx = 20,
  onWedgeClick,
  activeWedgeTitle,
  wedgesHidden,
  canInteract,
  anyWedgeActive,
  revealReady = true,
}: {
  revealReady?: boolean;
  slices: CoinSliceData[];
  radius?: number;
  height?: number;
  gapRadians?: number;
  centerGapPx?: number;
  onWedgeClick?: (title: string) => void;
  activeWedgeTitle?: string | null;
  wedgesHidden: boolean;
  canInteract: boolean;
  anyWedgeActive: boolean;
}) {
  const { size } = useThree();
  const [hoveredWedges, setHoveredWedges] = useState<Set<number>>(new Set());
  const pointerTimerRef = useRef<{ [key: number]: NodeJS.Timeout }>({});

  const { worldPerPx, centerGapWorld } = useMemo(() => {
    const distance = 4.2;
    const vFov = 40;
    const baselineHeight = typeof window !== 'undefined' ? Math.max(1000, window.innerHeight) : 1000;
    const wPx = (2 * Math.tan(THREE.MathUtils.degToRad(vFov) / 2) * distance) / baselineHeight;
    return { worldPerPx: wPx, centerGapWorld: centerGapPx * wPx };
  }, [centerGapPx]);

  const prepared = useMemo(() => {
    const n = Math.max(1, slices.length);
    const full = Math.PI * 2;
    const base = full / n;
    const thetaLength = Math.max(0.001, base - gapRadians);

    return slices.map((slice, i) => {
      const thetaStart = i * base + gapRadians / 2;
      const mid = thetaStart + thetaLength / 2;
      return { ...slice, i, thetaStart, thetaLength, mid };
    });
  }, [gapRadians, slices]);

  const geometries = useMemo(() => {
    const shrink = THREE.MathUtils.clamp(1 - centerGapWorld / Math.max(0.0001, radius * 2.5), 0.82, 1);

    return prepared.map(({ thetaStart, thetaLength }) => {
      const rInner = radius * 0.789;
      const rOuter = radius;

      const innerShape = new THREE.Shape();
      innerShape.moveTo(0, 0);
      innerShape.absarc(0, 0, rInner, thetaStart, thetaStart + thetaLength, false);
      innerShape.lineTo(0, 0);

      const outerShape = new THREE.Shape();
      outerShape.absarc(0, 0, rOuter, thetaStart, thetaStart + thetaLength, false);
      outerShape.absarc(0, 0, rInner, thetaStart + thetaLength, thetaStart, true);

      const innerExtrudeSettings = {
        depth: height,
        bevelEnabled: true,
        bevelThickness: 0.012,
        bevelSize: 0.008,
        bevelSegments: 3,
        curveSegments: 32,
      };

      const rimDepth = height * 1.2;
      const outerExtrudeSettings = {
        depth: rimDepth,
        bevelEnabled: true,
        bevelThickness: 0.036,
        bevelSize: 0.024,
        bevelSegments: 3,
        curveSegments: 32,
      };

      const innerGeom = new THREE.ExtrudeGeometry(innerShape, innerExtrudeSettings);
      const outerGeom = new THREE.ExtrudeGeometry(outerShape, outerExtrudeSettings);
      const topShapeGeom = new THREE.ShapeGeometry(innerShape, 32);

      const dir = new THREE.Vector3();

      [innerGeom, outerGeom, topShapeGeom].forEach((geom, idx) => {
        if (idx === 2) {
          geom.translate(0, 0, height / 2 + 0.012);
          geom.rotateX(-Math.PI / 2);
        } else if (idx === 1) {
          geom.translate(0, 0, -rimDepth / 2);
          geom.rotateX(-Math.PI / 2);
        } else {
          geom.translate(0, 0, -height / 2);
          geom.rotateX(-Math.PI / 2);
        }

        const pos = geom.attributes.position;
        const centroid = new THREE.Vector3(0, 0, 0);
        for (let i = 0; i < pos.count; i++) {
          centroid.x += pos.getX(i);
          centroid.z += pos.getZ(i);
        }
        centroid.divideScalar(Math.max(1, pos.count));

        if (idx === 0) {
          dir.copy(centroid).setY(0).normalize();
          if (dir.lengthSq() < 1e-8) dir.set(1, 0, 0);
        }

        const localDir = new THREE.Vector3(centroid.x, 0, centroid.z).normalize();
        const tangent = new THREE.Vector3(-localDir.z, 0, localDir.x);

        for (let i = 0; i < pos.count; i++) {
          const x = pos.getX(i);
          const z = pos.getZ(i);
          const v = new THREE.Vector3(x, 0, z);
          const along = v.dot(localDir);
          const across = v.dot(tangent) * shrink;
          const nx = localDir.x * along + tangent.x * across;
          const nz = localDir.z * along + tangent.z * across;
          pos.setX(i, nx);
          pos.setZ(i, nz);
        }
        pos.needsUpdate = true;
        geom.computeVertexNormals();
      });

      return { innerGeom, outerGeom, topShapeGeom, dir };
    });
  }, [centerGapWorld, height, prepared, radius]);

  useEffect(() => {
    return () => {
      geometries.forEach(({ innerGeom, outerGeom, topShapeGeom }) => {
        if (innerGeom) innerGeom.dispose();
        if (outerGeom) outerGeom.dispose();
        if (topShapeGeom) topShapeGeom.dispose();
      });
    };
  }, [geometries]);

  return (
    <group>
      {prepared.map(({ title, i, mid, contentType, imageUrl, glbUrl, glbScale, glbYOffset, glbRotationY, text, showOutward, isBlackText }, idx) => {
        const { innerGeom, outerGeom, topShapeGeom, dir } = geometries[idx];
        const offset: [number, number, number] = [
          dir.x * centerGapWorld,
          0,
          dir.z * centerGapWorld,
        ];

        return (
          <WedgeGroup
            key={`${title}-${i}`}
            isActive={activeWedgeTitle === title}
            wedgesHidden={wedgesHidden}
            anyWedgeActive={anyWedgeActive}
            index={idx}
            isHovered={hoveredWedges.has(idx)}
            revealReady={revealReady}
          >
            <group
              onClick={(e) => {
                e.stopPropagation();
                if (!canInteract) return;
                onWedgeClick?.(title);
              }}
              onPointerOver={(e) => {
                e.stopPropagation();
                if (!canInteract) return;
                document.body.style.cursor = "pointer";
              }}
              onPointerOut={() => {
                document.body.style.cursor = "auto";
              }}
              onPointerEnter={() => {
                if (pointerTimerRef.current[idx]) {
                  clearTimeout(pointerTimerRef.current[idx]);
                  delete pointerTimerRef.current[idx];
                }
                setHoveredWedges(prev => new Set([...prev, idx]));
              }}
              onPointerLeave={() => {
                pointerTimerRef.current[idx] = setTimeout(() => {
                  setHoveredWedges(prev => {
                    const next = new Set(prev);
                    next.delete(idx);
                    return next;
                  });
                }, 150);
              }}
            >
              <mesh
                geometry={innerGeom}
                position={offset}
                visible={true}
              >
                {/* Hidden via material.visible instead of toggling transmission 1 -> 0:
                    changing transmission recompiles the shader (a visible stutter when a
                    popup opens/closes) and kept the extra transmission render pass alive. */}
                <meshPhysicalMaterial
                  visible={!wedgesHidden}
                  color="#0d141c"
                  transmission={1.0}
                  opacity={0.7}
                  transparent={true}
                  roughness={0}
                  metalness={0}
                  ior={1.0}
                  envMapIntensity={0}
                  specularIntensity={0}
                  clearcoat={0}
                />
              </mesh>

              <group position={offset}>
                <Edges geometry={topShapeGeom} scale={1} threshold={15} position={[0, 0.002, 0]} raycast={() => null}>
                  <lineBasicMaterial
                    color="#1b88f5"
                    transparent
                    opacity={wedgesHidden ? 0 : 0.5}
                    depthTest={false}
                    depthWrite={false}
                  />
                </Edges>
              </group>

              <mesh
                geometry={outerGeom}
                position={offset}
                visible={true}
              >
                <meshPhysicalMaterial
                  color="#2d2d2d"
                  emissive="#001a33"
                  emissiveIntensity={0.45}
                  roughness={0.4}
                  metalness={1.0}
                  clearcoat={0}
                  clearcoatRoughness={0}
                  envMapIntensity={1.5}
                  toneMapped={false}
                  transparent={false}
                  opacity={wedgesHidden ? 0 : 1}
                />
              </mesh>

              <group position={offset}>
                {(() => {
                  const textIsOutward = showOutward ?? true;
                  const chars = textIsOutward ? title.split("") : title.split("").reverse();
                  const FONT_SIZE = 0.13;
                  const labelR = radius * 0.89;
                  const CHAR_WIDTHS: Record<string, number> = {
                    'i': 0.30, 'l': 0.32, 'I': 0.35, 'j': 0.32, '1': 0.48, '!': 0.35,
                    'f': 0.38, 'r': 0.44, 't': 0.46, 'c': 0.54, 'e': 0.55, 's': 0.53, 'z': 0.54,
                    'a': 0.60, 'b': 0.62, 'd': 0.62, 'g': 0.60, 'h': 0.63, 'k': 0.62, 'n': 0.63,
                    'o': 0.66, 'p': 0.62, 'q': 0.62, 'u': 0.63, 'v': 0.60, 'x': 0.60, 'y': 0.60,
                    'w': 0.84, 'm': 0.92, 'A': 0.70, 'B': 0.69, 'C': 0.71, 'D': 0.73, 'E': 0.64,
                    'F': 0.59, 'G': 0.75, 'H': 0.75, 'J': 0.48, 'K': 0.72, 'L': 0.60, 'M': 0.84,
                    'N': 0.77, 'O': 0.78, 'P': 0.65, 'Q': 0.78, 'R': 0.69, 'S': 0.65, 'T': 0.65,
                    'U': 0.76, 'V': 0.72, 'W': 0.90, 'X': 0.71, 'Y': 0.67, 'Z': 0.68, ' ': 0.33,
                  };
                  const DEFAULT_W = 0.65;
                  const CHAR_GAP = FONT_SIZE * 0.08;
                  const halfWidths = chars.map(c => (CHAR_WIDTHS[c] ?? DEFAULT_W) * FONT_SIZE / 2);
                  let cursor = 0;
                  const charCenters = chars.map((_, i) => {
                    const center = cursor + halfWidths[i];
                    cursor = center + halfWidths[i] + CHAR_GAP;
                    return center;
                  });
                  const totalWidth = chars.length > 0 ? charCenters[chars.length - 1] + halfWidths[chars.length - 1] : 0;
                  const centeredOffset = -(totalWidth / 2);
                  const trueAngle = Math.atan2(dir.z, dir.x);

                  return chars.map((char, charIdx) => {
                    const charAngle = trueAngle - (centeredOffset + charCenters[charIdx]) / labelR;
                    const charDir = new THREE.Vector3(Math.cos(charAngle), 0, Math.sin(charAngle));
                    const px = charDir.x * labelR;
                    const pz = charDir.z * labelR;
                    const rotationY = textIsOutward ? (-charAngle + Math.PI / 2) : (-charAngle - Math.PI / 2);

                    return (
                      <Text
                        key={`${title}-char-${charIdx}`}
                        position={[px, height / 2 + 0.07, pz]}
                        rotation={[-Math.PI / 2, 0, rotationY]}
                        font="/assets/fonts/Roboto-SemiBold.ttf"
                        fontSize={0.13}
                        fontWeight={600}
                        color={isBlackText ? "#000000" : "#ffffff"}
                        anchorX="center"
                        anchorY="middle"
                      >
                        {char}
                      </Text>
                    );
                  });
                })()}
              </group>

              <Suspense fallback={null}>
                <SliceContent
                  contentType={contentType}
                  imageUrl={imageUrl}
                  glbUrl={glbUrl}
                  glbScale={glbScale}
                  glbYOffset={glbYOffset}
                  glbRotationY={glbRotationY}
                  text={text}
                  dir={dir}
                  radius={radius}
                  offset={offset}
                  height={height}
                  worldPerPx={worldPerPx}
                />
              </Suspense>
            </group>
          </WedgeGroup>
        );
      })}
    </group>
  );
}
