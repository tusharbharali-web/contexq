import Link from "next/link";
import ClientSceneWrapper from "@/components/three/ClientSceneWrapper";
import PlatformSection from "@/components/ui/PlatformSection";
import LandingSection from "@/components/landing/LandingSection";
import Footer from "@/components/ui/Footer";
import BackToPieButton from "@/components/ui/BackToPieButton";
import coinData from "@/data/coin-slices.json";
import { preload } from "react-dom";
import { FETCH_ASSETS, SCENE_3D_MEDIA } from "@/components/three/sceneAssets";

// Start downloading every 3D asset with the HTML (as <link rel="preload"> in <head>),
// in parallel with the JavaScript, instead of one after another once the scene mounts.
function preloadSceneAssets() {
  // Phones show the flat 2D hub instead, so they skip these (media-gated preload).
  for (const href of FETCH_ASSETS) preload(href, { as: "fetch", crossOrigin: "anonymous", media: SCENE_3D_MEDIA } as any);
}

export default function Home() {
  preloadSceneAssets();
  return (
    <div className="bg-[#0d1526]">
      <style>{`
        body.popup-active .hero-content {
          opacity: 0;
          transform: translateX(-50px);
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        body.popup-active .hero-bg {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-content {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          width: clamp(300px, 30vw, 500px);
          overflow: hidden;
        }

        .hero-bg {
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (max-width: 1024px) {
          .hero-content {
            width: clamp(280px, 35vw, 400px) !important;
            max-width: none !important;
            transform: scale(0.85) !important;
            padding-left: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            width: 100% !important;
            max-width: 100% !important;
            transform: none !important;
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
          .hero-content h1 {
            font-size: 1.875rem !important;
            line-height: 1.2 !important;
          }
          .pie-hint, .scroll-hint {
            display: none !important;
          }
        }

        /* Phones (portrait): text block at the top, the coin is framed by the 3D camera in
           the space below it (see CameraAnimator), and the dark fade runs top-down instead
           of from the left so the text stays readable over the scene. */
        @media (max-width: 1023px) and (orientation: portrait) {
          .hero-main {
            height: 100svh !important;
            min-height: 560px;
            align-items: flex-start !important;
            padding-top: calc(var(--site-header-height, 64px) + 20px) !important;
          }
          .hero-bg {
            background: linear-gradient(to bottom, rgba(2,4,8,0.92) 0%, rgba(2,4,8,0.8) 40%, rgba(2,4,8,0) 58%) !important;
          }
          .hero-content { width: 100% !important; max-width: 640px !important; transform: none !important; padding-left: 20px !important; padding-right: 20px !important; }
          .pie-hint, .scroll-hint { display: none !important; }
          .hero-content > .space-y-6 > * + * { margin-top: 14px !important; }
          .hero-content h1 { font-size: clamp(1.45rem, 6.6vw, 1.75rem) !important; margin-bottom: 0 !important; }
          .hero-content h1 br { display: none; }
          .hero-sub { font-size: 0.95rem !important; line-height: 1.5 !important; }
          .hero-desc { display: none !important; }
          .hero-cta { padding-top: 4px !important; }
          .hero-cta a { padding: 12px 24px !important; }
        }

        /* Phones held sideways: very little height, so a compact text block on the left
           (the coin keeps its desktop place on the right). */
        @media (max-height: 520px) and (orientation: landscape) {
          .hero-main { padding-top: calc(var(--site-header-height, 56px) + 8px) !important; }
          .hero-content { width: min(46vw, 420px) !important; transform: none !important; padding-left: 24px !important; }
          .hero-content > .space-y-6 > * + * { margin-top: 10px !important; }
          .hero-content h1 { font-size: 1.2rem !important; line-height: 1.25 !important; margin-bottom: 0 !important; }
          .hero-sub { font-size: 0.8rem !important; line-height: 1.45 !important; }
          .hero-desc, .pie-hint, .scroll-hint { display: none !important; }
          .hero-cta { padding-top: 0 !important; }
          .hero-cta a { padding: 0 20px !important; height: 40px !important; min-height: 0 !important; line-height: 40px !important; font-size: 0.85rem !important; }
          .hero-content > .space-y-6 > :first-child { display: none !important; }
        }

        /* Phones (upright or sideways): flat 2D hub (ui/Pie2D, no 3D scene) fills the first
           screen and the hero text is overlaid on it - across the top when upright, down the
           left when sideways. Pie2D sizes the pie into the space the text leaves. Keep in
           sync with FLAT_MEDIA. */
        @media (max-width: 767px), (orientation: landscape) and (max-height: 520px) and (max-width: 1023px) {
          .hero-main { height: 100svh !important; min-height: 520px; align-items: flex-start !important;
            padding-top: calc(var(--site-header-height, 64px) + 14px) !important; }
          .hero-bg, .scroll-hint, .pie-hint, .hero-desc { display: none !important; }
          .hero-content { width: 100% !important; max-width: 640px !important; transform: none !important;
            padding: 0 20px !important; pointer-events: none; }
          .hero-content a, .hero-content button { pointer-events: auto; }
          .hero-content > .space-y-6 > * + * { margin-top: 12px !important; }
          .hero-content h1 { font-size: clamp(1.35rem, 6.2vw, 1.7rem) !important; line-height: 1.2 !important; margin-bottom: 0 !important;
            text-shadow: 0 2px 14px rgba(2,6,15,.8); }
          .hero-content h1 br { display: none; }
          .hero-sub { font-size: .9rem !important; line-height: 1.5 !important; text-shadow: 0 1px 10px rgba(2,6,15,.9); }
          .hero-cta { padding-top: 2px !important; }
          .hero-cta a { padding: 0 22px !important; height: 42px !important; line-height: 42px !important; font-size: .9rem !important; }
        }
        /* Short upright phones (e.g. 375x667): drop the tagline pill, and on the shortest the
           sub-paragraph too, so the pie keeps a usable size. */
        @media (max-width: 767px) and (orientation: portrait) and (max-height: 760px) {
          .hero-content > .space-y-6 > :first-child { display: none !important; }
        }
        @media (max-width: 767px) and (orientation: portrait) and (max-height: 700px) {
          .hero-sub { display: none !important; }
          .hero-sub, .hero-content > .space-y-6 > :nth-child(3) { display: none !important; }
        }
        @media (orientation: landscape) and (max-height: 520px) and (max-width: 1023px) {
          .hero-main { min-height: 0; padding-top: calc(var(--site-header-height, 56px) + 8px) !important; }
          .hero-content { width: min(46vw, 400px) !important; padding: 0 0 0 24px !important; }
          .hero-content > .space-y-6 > :first-child { display: none !important; }
          .hero-content h1 { font-size: 1.15rem !important; }
          .hero-sub { font-size: .8rem !important; }
          .hero-cta a { height: 38px !important; line-height: 38px !important; }
        }
      `}</style>
      <main className="hero-main relative w-full h-screen flex items-center overflow-hidden pt-20">
        <div className="hero-scene absolute inset-0">
          <ClientSceneWrapper slices={coinData.slices as any[]} />
        </div>

        {/* Cyan/Yellow Accent Line with Vignette */}
        <div className="hero-bg absolute inset-0 pointer-events-none z-5" style={{
          background: `
            linear-gradient(to right, #000000 0%, #000000 100px, rgba(0, 0, 0, 0.25) 22%, transparent 33%),
            radial-gradient(ellipse 150% 150% at 50% 50%, transparent 20%, rgba(0, 0, 0, 0.3) 100%)
          `
        }} />

        <div className="hero-content relative z-10 pl-20 origin-left" style={{ transform: "scale(0.90)" }}>
          <div className="space-y-6">
            {/* Tagline */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 w-fit max-w-full">
              <div className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
              <p className="text-xs leading-snug">Graph Intelligence Platform - SarasW by ContexQ</p>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-3xl font-bold leading-tight mb-4">
                <span className="text-white">We are a </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">technology AI startup </span>
                <span className="text-white">leapfrogging</span>{" "}
                <br />
                <span className="text-white">the way businesses</span>{" "}
                <br />
                <span className="text-white">maximise their data value.</span>
              </h1>
            </div>

            {/* Subheading with accent line */}
            <div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent mt-1" />
                <p className="hero-sub text-lg text-gray-300 leading-relaxed">
                  By connecting entities, signals and relationships, we help businesses uncover insights that would otherwise remain hidden.
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="hero-desc text-gray-400 leading-relaxed max-w-xl text-sm">
              Your data isn't incomplete. It's <span className="text-white font-semibold">underread</span>. ContexQ finds connections and signals across every dimension, then enriches your data with real-world intelligence to surface what matters most, from opportunity to risk.
            </p>

            {/* CTA Button */}
            <div className="hero-cta pt-4">
              <Link href="#solutions" scroll={true} className="inline-block px-8 py-3 rounded-lg bg-[#2F86FF] hover:bg-[#5BA0FF] active:bg-[#1F6FEB] text-white font-semibold hover:shadow-lg hover:shadow-[#2F86FF]/40 transition-all duration-300 cq-cta">
                Explore Platform
              </Link>
            </div>

            {/* Pie hint - subtle arrow pointing to the pie */}
            <div
              className="pie-hint"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 12,
                marginTop: 24,
                color: "#9fb3cf",
                fontSize: 13,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                opacity: 0.85,
                animation: "pieHintFloat 2.4s ease-in-out infinite",
              }}
            >
              <span style={{ color: "#2ec4e6" }}>✦</span>
              <span>Click a slice</span>
              <svg width="26" height="10" viewBox="0 0 26 10" fill="none">
                <path d="M1 5 H22 M18 1 L22 5 L18 9" stroke="#2ec4e6" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll hint - bottom of hero */}
        <div
          className="scroll-hint"
          style={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            opacity: 0.75,
            pointerEvents: "none",
          }}
        >
          <span style={{ fontSize: 12, color: "#9fb3cf", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Scroll down
          </span>
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none" style={{ animation: "scrollBob 1.6s ease-in-out infinite" }}>
            <rect x="1" y="1" width="18" height="26" rx="9" stroke="#9fb3cf" strokeWidth="1.5" />
            <circle cx="10" cy="9" r="2" fill="#9fb3cf" />
          </svg>
        </div>
        <BackToPieButton />

        <style>{`
          @keyframes scrollBob {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(5px); opacity: 0.5; }
          }
          @keyframes pieHintFloat {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(6px); }
          }
          body.popup-active .scroll-hint,
          body.popup-active .pie-hint {
            opacity: 0 !important;
            transition: opacity 0.3s;
          }
        `}</style>
      </main>
      <LandingSection />
      <Footer />
    </div>
  );
}
