"use client";

import * as THREE from "three";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useEnvironment, useProgress } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState, useCallback, useMemo } from "react";

// Components
import { GlobeModel } from "./GlobeModel";
import { FloatingParticles } from "./FloatingParticles";
import { CameraAnimator } from "./CameraAnimator";
import { CoinSlices } from "./CoinSlices";
import { CenterButton } from "./CenterButton";
import coinData from "@/data/coin-slices.json";
import { MouseParallax } from "./MouseParallax";
import { Background } from "./Background";
import { PieOverlay } from "./PieOverlay";
import { InteractivePopup } from "../ui/InteractivePopup";
import { BranchingPopup } from "../ui/BranchingPopup";
import { TeamOverlay, preloadTeamAssets } from "../ui/TeamOverlay";
import { ModuleExpansion } from "../ui/ModuleExpansion";
import { CustomLoader } from "../ui/CustomLoader";

// Types
import { CoinSliceData } from "./types";
import { ENVIRONMENT_HDR, IMAGE_ASSETS, SLICE_TEXTURES } from "./sceneAssets";
import { AwaitTextures, useBitmapTexture } from "./useBitmapTexture";

// Start every texture/HDR load as soon as this module is evaluated, all in parallel.
// (Each Suspense boundary used to request its file only after the previous one had
// resolved, so the scene's assets arrived one after another.)
// (drei can only preload .hdr/.exr here; a gain-map .jpg is still fetched early by the
// <link rel="preload"> emitted in app/page.tsx.)
if (/\.(hdr|exr)$/i.test(ENVIRONMENT_HDR)) useEnvironment.preload({ files: ENVIRONMENT_HDR });
for (const url of IMAGE_ASSETS) useBitmapTexture.preload(url);

/**
 * Once everything is loaded, compiles all shaders in parallel (KHR_parallel_shader_compile)
 * before the reveal, so the first visible frames don't stall on shader compilation.
 */
function PrecompileShaders({ when, onDone }: { when: boolean; onDone: () => void }) {
  const { gl, scene, camera } = useThree();
  useEffect(() => {
    if (!when) return;
    let finished = false;
    const finish = () => {
      if (!finished) {
        finished = true;
        onDone();
      }
    };
    gl.compileAsync(scene, camera).then(finish, finish);
    const fallback = window.setTimeout(finish, 1500); // never hold the reveal longer than this
    return () => window.clearTimeout(fallback);
  }, [when, gl, scene, camera, onDone]);
  return null;
}

/** Mounts only once every sibling in its Suspense boundary has finished loading. */
function ReadySignal({ onReady }: { onReady: () => void }) {
  useEffect(() => onReady(), [onReady]);
  return null;
}

export default function CoinScene({ slices }: { slices: CoinSliceData[] }) {
  const safeSlices = slices?.length ? slices : [{ title: "Slice" }];
  // The centre button's "Customers" tab opens a popup like the slices do, but has no wedge.
  const centerButton = coinData.centerButton as unknown as CoinSliceData;
  const popupSlices = useMemo(() => (centerButton ? [...safeSlices, centerButton] : safeSlices), [safeSlices, centerButton]);
  const coinHeight = 0.24;

  // Scene Refs
  const sceneGroupRef = useRef<THREE.Group>(null);
  const globeGroupRef = useRef<THREE.Group>(null);
  const floorRef = useRef<THREE.Group>(null);
  const groupRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<any>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  // Interaction State
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [branchingData, setBranchingData] = useState<{ title: string; parents: any[]; children: any[]; slug?: string; subPopUp?: boolean; subNewPage?: boolean } | null>(null);
  const [expandingModule, setExpandingModule] = useState<any | null>(null);
  const [showSlices, setShowSlices] = useState(true);
  const [showPie, setShowPie] = useState(false);
  const rotationY = useRef(19 * (Math.PI / 180));

  // The scene is revealed once every asset is downloaded and uploaded to the GPU,
  // so the coin, icons and globe appear together and the entrance animation plays
  // in full instead of pieces popping in while textures are still arriving.
  // Each part reports in once it can actually render: lighting (decoded gain map),
  // coin (geometry, label font and all icon textures) and globe. Download progress
  // alone is not enough - the lighting is decoded after it has downloaded.
  const { active: loading, progress } = useProgress();
  const [partsReady, setPartsReady] = useState({ env: false, coin: false, globe: false });
  const envReady = useCallback(() => setPartsReady((p) => ({ ...p, env: true })), []);
  const coinReady = useCallback(() => setPartsReady((p) => ({ ...p, coin: true })), []);
  const globeReady = useCallback(() => setPartsReady((p) => ({ ...p, globe: true })), []);
  const sceneReady = !loading && progress === 100 && partsReady.env && partsReady.coin && partsReady.globe;
  const [revealed, setRevealed] = useState(false);
  const reveal = useCallback(() => setRevealed(true), []);

  // Lighting State
  const lightPos = {
    point: [9.96, 4, 0.87] as [number, number, number],
    main: [5.63, 8, 4.51] as [number, number, number],
    front: [13.42, 6, 7.19] as [number, number, number],
    rear: [10.66, 5, -7.1] as [number, number, number]
  };

  // Viewport Tracking for Popup Scaling
  const [vp, setVp] = useState({ 
    w: typeof window !== 'undefined' ? window.innerWidth : 1440,
    h: typeof window !== 'undefined' ? window.innerHeight : 900 
  });

  useEffect(() => {
    const res = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', res);
    return () => window.removeEventListener('resize', res);
  }, []);

  // Popup Scaling Logic
  const popupScaleW = Math.min(1.5, Math.max(0.65, (vp.w / 1440) * 1.5));
  const iconPx = Math.round(Math.min(60, Math.max(32, (vp.w / 1440) * 60)));
  const btnCellPx = Math.round(Math.min(130, Math.max(90, (vp.w / 1440) * 130)));
  
  const _activeS = popupSlices.find(s => s.title === activePopup);
  const _btns = _activeS?.buttons || [];
  const _cols = _btns.length === 4 ? 2 : (_btns.length > 3 ? 3 : (Math.max(1, _btns.length)));
  const _rows = Math.ceil(_btns.length / _cols);
  const _natH = 48 + 55 + _rows * btnCellPx + 16;
  const popupScaleH = _natH > 0 ? Math.min(1.5, (vp.h * 0.90) / _natH) : 1.5;
  // Phones (portrait): centre the panel and size it to the screen width instead of the
  // desktop's left-of-globe placement, which left it small and off to one side.
  const isPhone = vp.w < 1024 && vp.h > vp.w;
  const _natW = _cols * btnCellPx * 0.8 + (_cols - 1) * (_btns.length <= 4 ? 14.4 : 8) + 55 + 32;
  const popupScale = isPhone
    ? Math.min(1.3, (vp.w * 0.84) / _natW, popupScaleH)
    : Math.min(popupScaleW, popupScaleH);

  const handleReset = useCallback(() => {
    setActivePopup(null);
    setBranchingData(null);
    setExpandingModule(null);
    orbitRef.current?.reset();
    if (typeof window !== 'undefined' && window.location.hash) {
      window.history.pushState({}, '', window.location.pathname);
    }
  }, []);

  const clickSound = useMemo(() => {
    if (typeof window !== "undefined") {
      const audio = new Audio("/assets/sound/click.mp3");
      audio.volume = 0.5;
      return audio;
    }
    return null;
  }, []);

  const handleWedgeClick = useCallback((title: string) => {
    clickSound?.play().catch(() => {});
    setActivePopup(title);
    if (typeof window !== 'undefined') {
      const hash = `#${title.toLowerCase().replace(/\s+/g, '-')}`;
      if (window.location.hash !== hash) {
        window.history.pushState({ activePopup: title }, '', hash);
      }
    }
  }, [clickSound]);

  // The Team cards appear after the ~4s Team animation: fetch their font + photos as
  // soon as the Team popup opens (click, hash link or Back/Forward).
  useEffect(() => {
    if (activePopup === "Team") preloadTeamAssets();
  }, [activePopup]);

  const handleFlipStart = useCallback(() => {
    const btn = expandingModule;
    if (btn && btn.subButtons && btn.subButtons.length > 0) {
      const allSub = btn.subButtons.map((sub: any, idx: number) => ({
        id: `sub-${idx}`,
        label: sub.subLabel,
        icon: sub.subIcon,
        title: sub.subTitle,
        companies: sub.companies,
        subText: sub.subText,
        fullText: sub.fullText,
        linkedin: sub.linkedin
      }));
      const mid = Math.ceil(allSub.length / 2);
      setBranchingData({
        title: btn.label,
        parents: allSub.slice(0, mid),
        children: allSub.slice(mid),
        slug: btn.slug,
        subPopUp: btn.subPopUp,
        subNewPage: btn.subNewPage
      });
    }
  }, [expandingModule]);

  const handleCloseModule = useCallback(() => {
    setExpandingModule(null);
  }, []);

  const handleCloseBranching = useCallback(() => {
    setBranchingData(null);
    setExpandingModule(null);
  }, []);

  const handleTeamNodeClick = useCallback((label: string) => {
    const nodes = [...(branchingData?.parents || []), ...(branchingData?.children || [])];
    const node: any = nodes.find((n: any) => n.label === label);
    if (!node || !node.fullText) {
      handleCloseBranching();
      return;
    }
    window.dispatchEvent(new CustomEvent('open-team-profile', {
      detail: {
        name: node.label,
        role: node.title || '',
        short: node.subText || '',
        description: node.fullText || '',
        photo: node.icon || '',
        linkedin: node.linkedin || '',
        initials: (node.label || '').split(' ').map((w: string) => w[0]).join('').slice(0, 2).toUpperCase(),
      },
    }));
  }, [branchingData, handleCloseBranching]);


  // Handle 3D scene reset. Wheel scrolling is left to the browser's native
  // handling: OrbitControls has enableZoom=false so it won't swallow wheel
  // events, and native scroll keeps OS acceleration + trackpad momentum.
  useEffect(() => {
    const handleReset3D = () => handleReset();
    window.addEventListener('reset3dScene', handleReset3D);
    return () => window.removeEventListener('reset3dScene', handleReset3D);
  }, [handleReset]);

  // Escape = "Back to pie" while any pie view is open (slice popup, tree, expanding module, Team cards).
  // A profile popup open on top of it (Team card dialog or tree profile) takes the first Escape itself.
  useEffect(() => {
    if (!(activePopup || branchingData || expandingModule)) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape' || e.defaultPrevented) return;
      if (document.querySelector('dialog[open], [data-team-profile-modal]')) return;
      e.preventDefault();
      handleReset();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activePopup, branchingData, expandingModule, handleReset]);

  // Sync pie sub-views with browser history so Back steps through them
  useEffect(() => {
    const restoreFromHash = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (!hash) {
        setActivePopup(null);
        setBranchingData(null);
        setExpandingModule(null);
        return;
      }
      // Branch or module hashes - can't rebuild the data, so step back to bare pie
      if (hash.startsWith('branch-') || hash.startsWith('module-')) {
        setActivePopup(null);
        setBranchingData(null);
        setExpandingModule(null);
        return;
      }
      const match = popupSlices.find(
        s => s.title.toLowerCase().replace(/\s+/g, '-') === hash
      );
      if (match) {
        setBranchingData(null);
        setExpandingModule(null);
        setActivePopup(match.title);
      }
    };
    restoreFromHash();
    window.addEventListener('popstate', restoreFromHash);
    return () => window.removeEventListener('popstate', restoreFromHash);
  }, [popupSlices]);

  useEffect(() => {
    if (activePopup || expandingModule || branchingData) {
      // If we are starting a popup sequence, ensure wedges hide after transition
      const pT = setTimeout(() => setShowPie(false), 1000);
      const sT1 = setTimeout(() => setShowSlices(true), 1000);
      const sT2 = setTimeout(() => setShowSlices(false), 3000);
      return () => { clearTimeout(pT); clearTimeout(sT1); clearTimeout(sT2); };
    } else {
      setShowSlices(true);
      setShowPie(false);
    }
  }, [activePopup, expandingModule, branchingData]);

  useEffect(() => {
    if (activePopup || branchingData || expandingModule) {
      document.body.classList.add('popup-active');
    } else {
      document.body.classList.remove('popup-active');
    }
  }, [activePopup, branchingData, expandingModule]);

  // While any pie view is open (slice popup, tree, expanding module, Team cards) the page
  // behind it must not scroll: wheel, keys and touch are all stopped by locking the root.
  // Scrolling inside the popups themselves is unaffected. Released when back on the pie.
  const pieOpen = !!(activePopup || branchingData || expandingModule);
  useEffect(() => {
    if (!pieOpen) return;
    const root = document.documentElement;
    const prev = { overflow: root.style.overflow, overscroll: root.style.overscrollBehavior };
    root.style.overflow = 'hidden';
    root.style.overscrollBehavior = 'none';
    return () => {
      root.style.overflow = prev.overflow;
      root.style.overscrollBehavior = prev.overscroll;
    };
  }, [pieOpen]);

  return (
     <div
      ref={canvasContainerRef}
      style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}
    >
      <InteractivePopup
        activePopup={activePopup}
        safeSlices={popupSlices}
        onClose={() => {
          setActivePopup(null);
          if (typeof window !== 'undefined' && window.location.hash) {
            window.history.back();
          }
        }}
        popupScale={popupScale}
        isPhone={isPhone}
        iconPx={iconPx}
        btnCellPx={btnCellPx}
        onOpenBranch={(data) => {
          setBranchingData(data);
          setActivePopup(null);
          if (typeof window !== 'undefined') {
            const slug = (data.slug || data.title || 'branch').toLowerCase().replace(/\s+/g, '-');
            window.history.pushState({ branch: slug }, '', `#branch-${slug}`);
          }
        }}
        onShowNotify={() => {}}
        onExpandModule={(btn) => {
          setExpandingModule(btn);
          setActivePopup(null);
          if (typeof window !== 'undefined') {
            const slug = (btn.slug || btn.label || 'module').toLowerCase().replace(/\s+/g, '-');
            window.history.pushState({ module: slug }, '', `#module-${slug}`);
          }
        }}
      />

      {/* Team ends in the founder/advisor cards; other branches (Partners, Awards…) in the tree */}
      {branchingData && (branchingData.title === "Team" ? (
        <TeamOverlay onClose={handleReset} /* Escape on the cards = "Back to pie" */ />
      ) : (
        <BranchingPopup 
          title={branchingData.title}
          parentNodes={branchingData.parents}
          childNodes={branchingData.children}
          onClose={handleCloseBranching}
          onNodeClick={handleTeamNodeClick}
          subPopUp={!!branchingData.subPopUp}
          subNewPage={!!branchingData.subNewPage}
          parentSlug={branchingData.slug}
        />
      ))}

      {expandingModule && (
        <ModuleExpansion
          button={expandingModule}
          popupHeight={_natH > 0 ? _natH : 500}
          onClose={handleCloseModule}
          onFlipStart={handleFlipStart}
        />
      )}

      <Canvas
        shadows
        camera={{ position: [0.02, 3.5, 1.45], fov: 40 }}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
          stencil: false
        } as any}
        dpr={[1, 1.5]}
        style={{ background: "#020408" }}
      >
        <OrbitControls
          ref={orbitRef}
          makeDefault
          enableDamping
          dampingFactor={0.05}
          enabled={!activePopup}
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
          mouseButtons={{
            LEFT: undefined,
            MIDDLE: undefined,
            RIGHT: undefined
          }}
        />
        <PrecompileShaders when={sceneReady} onDone={reveal} />
        <color attach="background" args={["#020408"]} />
        <fogExp2 attach="fog" args={["#020408", 0.08]} />

        {/* Physical Skydome */}
        <mesh scale={50}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#020408" side={THREE.BackSide} depthWrite={false} />
        </mesh>

        <Suspense fallback={null}>
          <Environment files={ENVIRONMENT_HDR} />
          <Background floorRef={floorRef}>
            <FloatingParticles />
          </Background>
          <ReadySignal onReady={envReady} />
        </Suspense>

        <ambientLight intensity={0.4} />

        <CameraAnimator
          active={!!activePopup || !!expandingModule || !!branchingData}
          sceneGroupRef={sceneGroupRef}
          globeGroupRef={globeGroupRef}
          groupRef={groupRef}
          floorRef={floorRef}
        />

        <MouseParallax>
          <group ref={sceneGroupRef} position={[0, 0, 0]}>
            <Suspense fallback={null}>
              <pointLight position={lightPos.point} intensity={8} distance={15} color="#383434" />
              <spotLight position={lightPos.main} intensity={8} angle={0.8} penumbra={1.0} color="#ffffff" distance={30} />
              <spotLight position={lightPos.front} intensity={8} angle={0.7} penumbra={1.0} color="#e0faff" distance={25} />
              <directionalLight position={lightPos.rear} intensity={0.7} color="#393838" />
              
              {/* Purpose Rim Edge Lights */}
              <pointLight position={[-1.2, 0.45, -1.3]} intensity={30} distance={1.8} decay={2} color="#c8ddff" />
              <pointLight position={[-0.9, 0.7, -1.15]} intensity={14} distance={1.4} decay={2} color="#ddeeff" />
            </Suspense>

            <Suspense fallback={null}>
              <PieOverlay visible={showPie} />
              <group scale={[0.9*0.9, .6*0.9, 0.8*0.9]}>
                <group
                  ref={groupRef}
                  rotation={[-0.26, rotationY.current, 0.05]}
                  position={[0.6, .45, -0.02]}    //Slices Position
                >
                  <CoinSlices
                    slices={safeSlices}
                    height={coinHeight}
                    onWedgeClick={handleWedgeClick}
                    activeWedgeTitle={activePopup}
                    wedgesHidden={!showSlices}
                    canInteract={!activePopup}
                    anyWedgeActive={!!activePopup || !!expandingModule || !!branchingData}
                    revealReady={revealed}
                  />
                  {centerButton && (
                    <CenterButton
                      label={centerButton.title}
                      revealReady={revealed}
                      anyWedgeActive={!!activePopup || !!expandingModule || !!branchingData}
                      canInteract={!activePopup && !expandingModule && !branchingData}
                      onSelect={() => handleWedgeClick(centerButton.title)}
                    />
                  )}
                </group>
              </group>
              <AwaitTextures urls={SLICE_TEXTURES} />
              <ReadySignal onReady={coinReady} />
            </Suspense>

            <Suspense fallback={null}>
              <GlobeModel 
                groupRef={globeGroupRef}
                isActive={!!activePopup}
                loadExtras={revealed}
              />
              <ReadySignal onReady={globeReady} />
            </Suspense>
          </group>
        </MouseParallax>
      </Canvas>

      {/* Same loader as the initial code-loading screen; fades out once the scene is ready. */}
      <CustomLoader done={revealed} />
    </div>
  );
}
