"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CoinSliceData } from "../three/types";

interface InteractivePopupProps {
  activePopup: string | null;
  safeSlices: CoinSliceData[];
  onClose: () => void;
  popupScale: number;
  iconPx: number;
  btnCellPx: number;
  onOpenBranch?: (data: { title: string; parents: any[]; children: any[]; slug?: string; subPopUp?: boolean; subNewPage?: boolean }) => void;
  onShowNotify?: (text: string) => void;
  onExpandModule?: (btn: any) => void;
}

export function InteractivePopup({
  activePopup,
  safeSlices,
  onClose,
  popupScale,
  iconPx,
  btnCellPx,
  onOpenBranch,
  onShowNotify,
  onExpandModule,
}: InteractivePopupProps) {
  const router = useRouter();
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const activeSlice = safeSlices.find((s) => s.title === activePopup);
  const buttons = activeSlice?.buttons || [];

  React.useEffect(() => {
    if (activePopup === "Team" && buttons.length === 1 && buttonRef.current) {
      const timer = setTimeout(() => {
        buttonRef.current?.click();
      }, 1450);
      return () => clearTimeout(timer);
    }
  }, [activePopup, buttons.length]);

  if (!activePopup) return null;

  const cols = buttons.length === 4 ? 2 : buttons.length >= 5 ? 3 : buttons.length || 1;

  // Glossy blue button colors
  const getButtonColors = () => {
    return {
      bg: "linear-gradient(135deg, #00d9ff 0%, #0088cc 50%, #004a99 100%), radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.35) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(0, 0, 0, 0.2) 0%, transparent 50%)",
      glow: "rgba(0, 217, 255, 0.8)",
      border: "rgba(255, 255, 255, 0.25)",
      text: "#ffffff",
      glowColor: "rgba(0, 217, 255, 0.9)"
    };
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "58%",
        left: "32%",
        transform: `translate(-50%, -50%) perspective(1000px) rotateY(25deg) scale(${popupScale})`,
        backgroundImage: "url(/assets/images/New_BG_7.png)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "transparent",
        padding: "1rem",
        color: "white",
        zIndex: 1000,
        width: "fit-content",
        height: "auto",
        maxWidth: "none",
        minWidth: "0",
        maxHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        textAlign: "left",
        gap: "0.7rem",
        opacity: 0,
        animation: "popupPremiumHolo 1.4s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards",
        transformStyle: "preserve-3d",
        filter: "drop-shadow(0 0 30px rgba(14, 165, 233, 0.3)) drop-shadow(0 0 10px rgba(14, 165, 233, 0.15))",
      }}
    >
      <style>{`
        @keyframes popupPremiumHolo {
          0%   { opacity: 0;   transform: translate(-50%, -20%) perspective(1000px) rotateY(15deg)    rotateX(15deg) scale(${(popupScale * 1.1).toFixed(3)}); filter: brightness(3) blur(10px) drop-shadow(0 0 50px rgba(14, 165, 233, 0.4)); }
          60%  { opacity: 0.95; transform: translate(-50%, -51%) perspective(1000px) rotateY(23deg)   rotateX(5deg)  scale(${(popupScale * 1.1).toFixed(3)}); filter: brightness(1.5) blur(3px) drop-shadow(0 0 60px rgba(14, 165, 233, 0.6)); }
          100% { opacity: 1;   transform: translate(-50%, -50%) perspective(1000px) rotateY(25deg)   rotateX(0deg)  scale(${(popupScale * 1.1).toFixed(3)}); filter: brightness(1) blur(0px) drop-shadow(0 0 30px rgba(14, 165, 233, 0.3)) drop-shadow(0 0 10px rgba(14, 165, 233, 0.15)); }
        }
        @keyframes buttonHoloFly {
          0%   { opacity: 0; transform: translateZ(30px) rotateY(45deg) scale(0.9); }
          100% { opacity: 1; transform: translateZ(0px)  rotateY(0deg) scale(1); }
        }
        
        .popup-btn {
          transition: transform 180ms cubic-bezier(0.23, 1, 0.32, 1), 
                      opacity 180ms cubic-bezier(0.23, 1, 0.32, 1), 
                      background 200ms ease,
                      filter 200ms ease;
        }

        .popup-btn:active {
          transform: scale(0.97) !important;
          transition-duration: 80ms;
        }

        @media (hover: hover) and (pointer: fine) {
          .popup-btn:hover {
            transform: translateY(-6px) scale(1.1) translateZ(20px);
            filter: brightness(1.2) saturate(1.15) drop-shadow(0 0 5px rgba(14, 165, 233, 0.4)) drop-shadow(0 0 30px rgba(14, 165, 233, 0.15)) !important;
          }
        }
      `}</style>

      {/* Header Info */}
      <div style={{ position: "absolute", top: "6.5%", left: "calc(12% - 9px)", display: "flex", flexDirection: "column", gap: "2px", zIndex: 3 }}>
        <h2 style={{ margin: "0", fontSize: "clamp(0.8rem, 1.1vw, 1rem)", fontWeight: "600", color: "#ffffff", letterSpacing: "0.01rem", textShadow: "0 0 15px rgba(255, 255, 255, 0.3)" }}>
          {activePopup}
        </h2>
      </div>

      <div style={{ width: "100%", boxSizing: "border-box", padding: buttons.length > 4 ? "38px 30px 23px 25px" : "38px 30px 23px 25px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, ${btnCellPx * 0.8}px)`,
            gridAutoRows: `${btnCellPx * 0.72}px`,
            columnGap: buttons.length <= 4 ? "0.9rem" : "0.5rem",
            rowGap: "0.5rem",
            marginTop: "5px",
            boxSizing: "border-box",
          }}
        >
          {buttons.map((btn, i) => {
            return (
              <motion.button
                key={`main-btn-${btn.label}-${i}`}
                ref={i === 0 ? buttonRef : null}
                layoutId={`btn-${btn.label}`}
                onClick={() => {
                  // TACTICAL AUDIO TRIGGER
                  const clickAudio = new Audio("/assets/sound/click.mp3");
                  clickAudio.volume = 0.5;
                  clickAudio.play().catch(() => {});

                  // INHERIT LOGIC FROM SLICE IF NOT ON BUTTON
                  const isNewPage = (btn.newpage !== undefined) ? btn.newpage : (activeSlice?.newpage ?? false);
                  const isListView = (btn.listView !== undefined) ? btn.listView : (activeSlice?.listView ?? false);

                  // CASE: Solution Page Redirect
                  if (isNewPage) {
                    let basePath = "/solutions";
                    if (activePopup === "Knowledge Hub") {
                      basePath = "/Knowledge_Hub";
                    } else if (activePopup === "Platform") {
                      basePath = "/Platform";
                    } else if (activePopup === "Industries") {
                      basePath = "/Industries";
                    } else if (activePopup === "Ecosystem") {
                      basePath = "/Ecosystem";
                    } else if (activePopup === "Customers") {
                      basePath = "/customer-stories";
                    }
                    router.push(`${basePath}/${btn.slug}`);
                    return;
                  }

                  // CASE: Customers - Open branching directly
                  if (btn.label === "Customers" && btn.subPopUp && btn.subButtons && btn.subButtons.length > 0) {
                    const allSub = btn.subButtons.map((sub: any, idx: number) => ({
                      id: `sub-${idx}`,
                      label: sub.subLabel,
                      icon: sub.subIcon,
                      title: sub.subTitle,
                      companies: sub.companies,
                      subText: sub.subText,
                      fullText: sub.fullText
                    }));
                    const mid = Math.ceil(allSub.length / 2);
                    onClose();
                    setTimeout(() => {
                      onOpenBranch?.({
                        title: btn.label,
                        parents: allSub.slice(0, mid),
                        children: allSub.slice(mid),
                        slug: btn.slug,
                        subPopUp: btn.subPopUp,
                        subNewPage: btn.subNewPage
                      });
                    }, 100);
                    return;
                  }

                  // CASE: List View (Big Button Animation Part)
                  if (!isNewPage && isListView) {
                    onExpandModule?.({ ...btn, buttonColor: getButtonColors() });
                    return;
                  }

                  // CASE: End-of-Path Reset (Rest of the clicks)
                  onClose();
                }}
                className="popup-btn"
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.15rem",
                  padding: "0.55rem 0.25rem",
                  background: `${getButtonColors().bg}`,
                  backdropFilter: "none",
                  color: "#ffffff",
                  border: `1px solid ${getButtonColors().border}`,
                  borderTopLeftRadius: "16px",
                  borderBottomLeftRadius: "16px",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  cursor: "pointer",
                  overflow: "hidden",
                  minWidth: "0",
                  transformStyle: "preserve-3d",
                  zIndex: 2,
                  opacity: 0,
                  animation: "buttonHoloFly 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",
                  animationDelay: `${1.4 + i * 0.05}s`,
                  boxShadow: `-4px 0 6px rgba(0, 0, 0, 0.5), 0 6px 8px rgba(0, 0, 0, 0.5)`,
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  filter: "brightness(1)",
                  userSelect: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `-6px 0 12px rgba(0, 0, 0, 0.6), 0 12px 20px rgba(0, 0, 0, 0.7)`;
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.12)";
                  e.currentTarget.style.filter = "brightness(1.2) saturate(1.15) drop-shadow(0 0 30px rgba(14, 165, 233, 0.4)) drop-shadow(0 0 60px rgba(14, 165, 233, 0.15)) !important";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `-4px 0 6px rgba(0, 0, 0, 0.5), 0 6px 8px rgba(0, 0, 0, 0.5)`;
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.filter = "brightness(1) !important";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.boxShadow = `-3px 0 4px rgba(0, 0, 0, 0.5), 0 3px 6px rgba(0, 0, 0, 0.6)`;
                  e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.boxShadow = `inset -2px -2px 10px rgba(0, 0, 0, 0.15), inset 2px 2px 10px rgba(255, 255, 255, 0.2)`;
                  e.currentTarget.style.transform = "translateY(-6px) scale(1.08)";
                }}
              >

                {/* BUTTON CONTENT */}
                {btn.icon && (() => {
                  // Platform tiles use full-color HD artwork (own blue background).
                  // Everything else uses simple white silhouettes that need the
                  // "screen" blend + drop-shadow treatment to glow against the pie.
                  const isPlatformHD = activePopup === "Platform";
                  return (
                    <motion.img
                      layoutId={`icon-${btn.label}`}
                      src={btn.icon}
                      alt=""
                      style={isPlatformHD ? {
                        width: `${iconPx}px`,
                        height: `${iconPx}px`,
                        objectFit: "contain",
                        imageRendering: "auto",
                        opacity: 1,
                        zIndex: 3,
                        borderRadius: "14px",
                      } : {
                        width: `${iconPx * 0.8}px`,
                        height: `${iconPx * 0.8}px`,
                        filter: `drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))`,
                        opacity: 0.95,
                        transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1), filter 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                        zIndex: 3,
                        mixBlendMode: "screen",
                        color: "#ffffff"
                      }}
                    />
                  );
                })()}
                <span style={{
                  fontSize: "0.56rem",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  letterSpacing: "0.04rem",
                  color: "white",
                  textShadow: "0 0 8px rgba(255, 255, 255, 0.2)",
                  marginTop: "0.8px",
                  zIndex: 3,
                  width: "90%",
                  whiteSpace: "pre-line", 
                  wordBreak: "break-word",
                  lineHeight: "1.1",
                  textAlign: "center"
                }}>
                  {btn.label}
                </span>

                {/* ACCENT SHIMMER */}
                <div style={{ position: "absolute", bottom: 0, left: "20%", right: "20%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.6), transparent)", opacity: 0.3, zIndex: 3 }} />
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
