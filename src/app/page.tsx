import Link from "next/link";
import ClientSceneWrapper from "@/components/three/ClientSceneWrapper";
import PlatformSection from "@/components/ui/PlatformSection";
import LandingSection from "@/components/landing/LandingSection";
import Footer from "@/components/ui/Footer";
import BackToPieButton from "@/components/ui/BackToPieButton";
import coinData from "@/data/coin-slices.json";
import { preload } from "react-dom";
import { FETCH_ASSETS } from "@/components/three/sceneAssets";

// Start downloading every 3D asset with the HTML (as <link rel="preload"> in <head>),
// in parallel with the JavaScript, instead of one after another once the scene mounts.
function preloadSceneAssets() {
  for (const href of FETCH_ASSETS) preload(href, { as: "fetch", crossOrigin: "anonymous" });
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
      `}</style>
      <main className="relative w-full h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
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
                <span className="text-white">leapfrogging</span>
                <br />
                <span className="text-white">the way businesses</span>
                <br />
                <span className="text-white">maximise their data value.</span>
              </h1>
            </div>

            {/* Subheading with accent line */}
            <div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent mt-1" />
                <p className="text-lg text-gray-300 leading-relaxed">
                  By connecting entities, signals and relationships, we help businesses uncover insights that would otherwise remain hidden.
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed max-w-xl text-sm">
              Your data isn't incomplete. It's <span className="text-white font-semibold">underread</span>. ContexQ finds connections and signals across every dimension, then enriches your data with real-world intelligence to surface what matters most, from opportunity to risk.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
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
