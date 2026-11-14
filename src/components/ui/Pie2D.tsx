"use client";

import { useEffect, useRef, useState } from "react";
import type { CoinSliceData } from "../three/types";
import { FLOOR_TEXTURE } from "../three/sceneAssets";

/**
 * Phone homepage hub: a flat (2D) version of the 3D coin. Same slices, same artwork,
 * same click behaviour (opens the same pie views), drawn as SVG over the world map.
 *
 * Layout (clockwise, 72deg each, Team centred at 36deg): Team top-right, Platform right,
 * Solutions bottom, Industries left, Ecosystem top-left - as on the 3D coin. The centre button opens
 * Customers.
 */

const ORDER = ["Team", "Platform", "Solutions", "Industries", "Ecosystem"];

const R_OUT = 196; // outer edge of the label ring
const R_RING_IN = 152; // inner edge of the label ring
const R_DISK = 142; // dark wedges
const R_HUB = 40; // centre button
const GAP_DEG = 1.4; // half the gap between segments
const LABEL_SIZE = 25;
const OFFSET = 36; // Team's centre, so Ecosystem/Team share the top and Solutions sits at the bottom

const rad = (deg: number) => (deg * Math.PI) / 180;
// clock angle: 0 = top, clockwise
const pt = (r: number, deg: number) => [r * Math.sin(rad(deg)), -r * Math.cos(rad(deg))] as const;
const f = (n: number) => n.toFixed(2);

function annulus(r0: number, r1: number, a0: number, a1: number) {
  const [x0, y0] = pt(r1, a0), [x1, y1] = pt(r1, a1), [x2, y2] = pt(r0, a1), [x3, y3] = pt(r0, a0);
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M${f(x0)} ${f(y0)}A${r1} ${r1} 0 ${large} 1 ${f(x1)} ${f(y1)}L${f(x2)} ${f(y2)}A${r0} ${r0} 0 ${large} 0 ${f(x3)} ${f(y3)}Z`;
}

function wedge(r: number, a0: number, a1: number) {
  const [x0, y0] = pt(r, a0), [x1, y1] = pt(r, a1);
  return `M0 0L${f(x0)} ${f(y0)}A${r} ${r} 0 0 1 ${f(x1)} ${f(y1)}Z`;
}

/** Arc for the label text: clockwise on the top half, anticlockwise on the bottom half so
 *  every label reads upright from outside the ring. */
function labelArc(mid: number, r: number) {
  const span = 34;
  const lower = mid > 90 && mid < 270;
  const a0 = lower ? mid + span : mid - span;
  const a1 = lower ? mid - span : mid + span;
  const [x0, y0] = pt(r, a0), [x1, y1] = pt(r, a1);
  return `M${f(x0)} ${f(y0)}A${r} ${r} 0 0 ${lower ? 0 : 1} ${f(x1)} ${f(y1)}`;
}

export function Pie2D({
  slices,
  centerTitle,
  hidden,
  onSelect,
  onReady,
}: {
  slices: CoinSliceData[];
  centerTitle?: string;
  hidden: boolean;
  onSelect: (title: string) => void;
  onReady: () => void;
}) {
  const [shown, setShown] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  // The hero text is overlaid on the hub (top of the screen when upright, left half when
  // sideways); the pie takes the space that is left, as large as it fits.
  const [box, setBox] = useState<{ left: number; top: number; size: number } | null>(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const hero = document.querySelector(".hero-content");
    const measure = () => {
      const r = root.getBoundingClientRect();
      const W = r.width, H = r.height;
      const header = document.querySelector("header")?.getBoundingClientRect().bottom ?? 64;
      const h = hero?.getBoundingClientRect();
      const hint = H > 520 ? 44 : 10;
      if (W > H) {
        const left = h ? Math.min(h.right - r.left + 8, W * 0.5) : W * 0.45;
        const top = header - r.top + 6;
        const size = Math.max(160, Math.min(W - left - 12, H - top - hint, 560));
        setBox({ left: left + (W - left - size) / 2, top: top + (H - top - hint - size) / 2, size });
      } else {
        const top = (h ? h.bottom - r.top : header - r.top) + 10;
        const size = Math.max(180, Math.min(W * 0.94, H - top - hint, 560));
        setBox({ left: (W - size) / 2, top: top + Math.max(0, (H - top - hint - size) / 2), size });
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(root);
    if (hero) ro.observe(hero);
    window.addEventListener("resize", measure);
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); };
  }, []);
  useEffect(() => {
    onReady();
    const t = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(t);
  }, [onReady]);

  const byTitle = new Map(slices.map((s) => [s.title, s]));
  const items = ORDER.map((t) => byTitle.get(t)).filter(Boolean) as CoinSliceData[];
  const step = 360 / items.length;
  const ringMid = (R_OUT + R_RING_IN) / 2;

  return (
    <div ref={rootRef} className={`pie2d${shown ? " is-in" : ""}${hidden ? " is-hidden" : ""}`}>
      <style>{`
        .pie2d { position: absolute; inset: 0; overflow: hidden; background: #050b16; }
        .pie2d-map { position: absolute; inset: 0; background: url(${FLOOR_TEXTURE}) center 40% / cover no-repeat; opacity: .55; filter: saturate(1.1); }
        .pie2d-shade { position: absolute; inset: 0; background: radial-gradient(ellipse 90% 60% at 50% 45%, rgba(5,11,22,0) 0%, rgba(5,11,22,.55) 70%, rgba(5,11,22,.9) 100%); }
        .pie2d-stage { position: absolute; }
        .pie2d-stage > svg { width: 100%; height: 100%; overflow: visible;
          opacity: 0; transform: scale(.92) rotate(-8deg); transition: opacity .7s ease, transform .9s cubic-bezier(.16,1,.3,1); }
        .pie2d.is-in .pie2d-stage > svg { opacity: 1; transform: none; }
        .pie2d.is-hidden .pie2d-stage > svg { opacity: 0; transform: scale(.85); pointer-events: none; transition-duration: .45s; }
        .pie2d.is-hidden .pie2d-hint { opacity: 0; }
        .pie2d-slice { cursor: pointer; -webkit-tap-highlight-color: transparent; outline: none; }
        .pie2d-slice .seg { transition: transform .18s ease, filter .18s ease; transform-origin: 0 0; }
        .pie2d-slice:active .seg, .pie2d-slice:focus-visible .seg { transform: scale(1.035); filter: brightness(1.12); }
        .pie2d-slice:focus-visible .ring { stroke: #2ec4e6; stroke-width: 3; }
        .pie2d-hub { cursor: pointer; outline: none; -webkit-tap-highlight-color: transparent; }
        .pie2d-hub .glow { animation: pie2dPulse 2.6s ease-in-out infinite; transform-origin: 0 0; }
        .pie2d-hub:active { filter: brightness(1.1); }
        @keyframes pie2dPulse { 0%,100% { opacity: .55; transform: scale(1); } 50% { opacity: 1; transform: scale(1.06); } }
        .pie2d-hint { position: absolute; left: 50%; bottom: max(18px, env(safe-area-inset-bottom)); transform: translateX(-50%);
          display: flex; flex-direction: row; align-items: center; gap: 10px; white-space: nowrap; animation: pie2dHint 2.4s ease-in-out infinite; color: #9fb3cf; font-size: 12px; letter-spacing: .18em;
          text-transform: uppercase; opacity: .85; transition: opacity .3s; pointer-events: none; }
        .pie2d-hint .star { color: #2ec4e6; }
        @keyframes pie2dHint { 0%,100% { opacity: .85; } 50% { opacity: .5; } }
        @media (max-height: 520px) { .pie2d-hint { display: none; } }
        @media (prefers-reduced-motion: reduce) { .pie2d svg, .pie2d-hub .glow, .pie2d-hint { animation: none !important; } }
      `}</style>
      <div className="pie2d-map" />
      <div className="pie2d-shade" />
      <div className="pie2d-stage" style={box ? { left: box.left, top: box.top, width: box.size, height: box.size } : { visibility: "hidden" }}>
        <svg viewBox="-205 -205 410 410" role="group" aria-label="Explore ContexQ">
          <defs>
            <radialGradient id="pie2dHubFill" cx="50%" cy="45%" r="60%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#dbe7f3" />
            </radialGradient>
            <filter id="pie2dGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            {items.map((s, i) => {
              const a0 = i * step + OFFSET - step / 2;
              return (
                <clipPath id={`pie2dClip${i}`} key={s.title}>
                  {/* artwork stays clear of the centre button: clipped to a band outside it */}
                  <path d={annulus(R_HUB + 14, R_DISK - 2, a0 + GAP_DEG, a0 + step - GAP_DEG)} />
                </clipPath>
              );
            })}
          </defs>

          {/* dark disk + ring backdrop so the gaps read as thin dividers */}
          <circle r={R_OUT + 4} fill="#22324a" opacity=".9" />
          <circle r={R_DISK + 2} fill="#0a111d" />

          {items.map((s, i) => {
            const mid = i * step + OFFSET;
            const a0 = mid - step / 2 + GAP_DEG, a1 = mid + step / 2 - GAP_DEG;
            const lower = mid > 90 && mid < 270;
            const textR = lower ? ringMid + LABEL_SIZE * 0.36 : ringMid - LABEL_SIZE * 0.36;
            const [ix, iy] = pt(R_DISK * 0.63, mid);
            const img = 108;
            return (
              <g
                key={s.title}
                className="pie2d-slice"
                role="button"
                tabIndex={0}
                aria-label={s.title}
                onClick={() => onSelect(s.title)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(s.title);
                  }
                }}
              >
                <g className="seg">
                  <path d={wedge(R_DISK, a0, a1)} fill="#0b1322" stroke="#3e5370" strokeWidth="1.5" />
                  {s.imageUrl && (
                    <image
                      href={s.imageUrl}
                      x={ix - img / 2}
                      y={iy - img / 2}
                      width={img}
                      height={img}
                      clipPath={`url(#pie2dClip${i})`}
                      preserveAspectRatio="xMidYMid meet"
                    />
                  )}
                  <path className="ring" d={annulus(R_RING_IN, R_OUT, a0, a1)} fill="#e3eaf3" stroke="#41536c" strokeWidth="2" />
                  <path id={`pie2dArc${i}`} d={labelArc(mid, textR)} fill="none" />
                  <text fontSize={LABEL_SIZE} fontWeight={700} letterSpacing="2.5" fill="#0b1220" style={{ fontFamily: "inherit" }}>
                    <textPath href={`#pie2dArc${i}`} startOffset="50%" textAnchor="middle">
                      {s.title}
                    </textPath>
                  </text>
                </g>
              </g>
            );
          })}

          {centerTitle && (
            <g
              className="pie2d-hub"
              role="button"
              tabIndex={0}
              aria-label={centerTitle}
              onClick={() => onSelect(centerTitle)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(centerTitle);
                }
              }}
            >
              <circle className="glow" r={R_HUB + 6} fill="#22d3ee" filter="url(#pie2dGlow)" />
              <circle r={R_HUB + 12} fill="#0a111d" stroke="#3e5370" strokeWidth="1.5" />
              <circle r={R_HUB} fill="url(#pie2dHubFill)" stroke="#22d3ee" strokeWidth="3.5" />
              <circle r={R_HUB - 6} fill="none" stroke="#7be3f5" strokeWidth="1" opacity=".7" />
              <text y="4" textAnchor="middle" fontSize="11.5" fontWeight={700} letterSpacing=".6" fill="#0b1220" style={{ fontFamily: "inherit" }}>
                {centerTitle.toUpperCase()}
              </text>
            </g>
          )}
        </svg>
      </div>
      <div className="pie2d-hint" aria-hidden="true">
        <span className="star">✦</span>
        <span>Click a slice</span>
      </div>
    </div>
  );
}
