"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModuleExpansionProps {
  button: {
    label: string;
    icon: string;
    slug: string;
    buttonColor?: { bg: string; glow: string; border: string; text: string };
  } | null;
  onClose: () => void;
  onFlipStart?: () => void;
  popupHeight: number;
}

export function ModuleExpansion({ button, onClose, onFlipStart, popupHeight }: ModuleExpansionProps) {
  const audioPlayed = React.useRef(false);
  const flipStarted = React.useRef(false);
  const closedCalled = React.useRef(false);

  useEffect(() => {
    if (button && !audioPlayed.current) {
      audioPlayed.current = true;
      const expansionAudio = new Audio("/assets/sound/big_button.mp3");
      expansionAudio.volume = 0.6;
      expansionAudio.play().catch(() => { });
    }
  }, [button]);

  useEffect(() => {
    if (button) {
      // AUTO-TERMINATION SEQUENCE
      const flipTimer = setTimeout(() => {
        if (!flipStarted.current) {
          flipStarted.current = true;
          onFlipStart?.();
        }
      }, 2600);

      const closeTimer = setTimeout(() => {
        if (!closedCalled.current) {
          closedCalled.current = true;
          onClose();
        }
      }, 3000);

      return () => {
        clearTimeout(flipTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [button, onClose, onFlipStart]);

  if (!button) return null;

  const FINAL_SIZE = 450;
  const HALO_SIZE = 510; // REDUCED BY 15% (600 -> 510)

  return (
    <AnimatePresence>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(2, 6, 15, 0.45)",
          backdropFilter: "blur(10px)",
          zIndex: 3000,
          pointerEvents: "auto",
        }}
        onClick={onClose}
      >
        {/* HALO BLUEPRINT (BACKGROUND) - SNAPPY DISSIPATION */}
        {/* WALL CLOCK: DELAY 0.8s + GROW 0.8s = ROTATION START AT 1.6s */}
        <motion.div
          initial={{
            opacity: 0,
            transform: "translate(-50%, -50%) perspective(1000px) rotateY(25deg) translateZ(0px) scale(0.8) rotate(0deg)"
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            transform: [
              "translate(-50%, -50%) perspective(1000px) rotateY(25deg) translateZ(0px) scale(0.8) rotate(0deg)",
              "translate(-50%, -50%) perspective(1000px) rotateY(25deg) translateZ(15px) scale(1.5) rotate(0deg)",
              "translate(-50%, -50%) perspective(1000px) rotateY(25deg) translateZ(15px) scale(1.5) rotate(0deg)",
              "translate(-50%, -50%) perspective(1000px) rotateY(25deg) translateZ(25px) scale(1.5) rotate(45deg)"
            ]
          }}
          transition={{
            delay: 0.8,
            duration: 2.2,
            times: [0, 0.36, 0.36, 1], // GROW(0.8s), HOLD(0s), ROTATE/FADE START(1.6s total), ENDS(3.0s total)
            ease: "easeOut"
          }}
          style={{
            position: "absolute",
            left: "32%",
            top: "50%",
            width: `${HALO_SIZE}px`,
            height: `${HALO_SIZE}px`,
            pointerEvents: "none",
            zIndex: 2,
            filter: "brightness(1.5) drop-shadow(0 0 50px rgba(14, 165, 233, 0.5))"
          }}
        >
          <img src="/assets/images/button_bg.webp" style={{ width: "100%", height: "100%", objectFit: "contain" }} alt="" />
        </motion.div>

        {/* UNIVERSAL COMMAND TERMINAL (450PX) - SNAPPY TACTICAL FLIP (SYNC DISSOLVE) */}
        {/* WALL CLOCK: GROW (0-0.8s) -> HOLD (0.8-1.6s) -> FADE (1.6-3.6s) -> FLIP (2.6-3.6s) */}
        <motion.div
          initial={{
            opacity: 0,
            transform: "translate(-50%, -50%) perspective(1000px) rotateY(25deg) translateZ(0px) scale(0.5)"
          }}
          animate={{
            opacity: [0, 1, 1, 0], // FADE STARTS AT 2.6s (86%), ENDS AT 3.0s (100%)
            transform: [
              "translate(-50%, -50%) perspective(1000px) rotateY(25deg) translateZ(0px) scale(0.5)",
              "translate(-50%, -50%) perspective(1000px) rotateY(25deg) translateZ(20px) scale(1.0)",
              "translate(-50%, -50%) perspective(1000px) rotateY(25deg) translateZ(20px) scale(1.0)", // 2.6s MARK (0.86)
              "translate(-50%, -50%) perspective(1000px) rotateY(205deg) translateZ(-50px) scale(0.4)"
            ],
            backdropFilter: [
              "blur(40px)",
              "blur(40px)",
              "blur(40px)",
              "blur(0px)"
            ],
            background: [
              "rgba(2, 6, 15, 0.4)",
              "rgba(2, 6, 15, 0.4)",
              "rgba(2, 6, 15, 0.4)",
              "rgba(2, 6, 15, 0)"
            ],
            filter: [
              "brightness(1) saturate(1) drop-shadow(0 0 0px rgba(14, 165, 233, 0))",
              "brightness(1.2) saturate(1.15) drop-shadow(0 0 15px rgba(14, 165, 233, 0.4)) drop-shadow(0 0 30px rgba(14, 165, 233, 0.15))",
              "brightness(1.2) saturate(1.15) drop-shadow(0 0 15px rgba(14, 165, 233, 0.4)) drop-shadow(0 0 30px rgba(14, 165, 233, 0.15))",
              "brightness(1) saturate(1) drop-shadow(0 0 0px rgba(14, 165, 233, 0))"
            ]
          }}
          transition={{
            duration: 3.0,
            times: [0, 0.26, 0.93, 1], // GROW(0.8), GLOW FOR 2s (1.8), FADE+FLIP(0.4)
            ease: [0.16, 1, 0.3, 0.5]
          }}
          style={{
            position: "absolute",
            left: "32%",
            top: "50%",
            width: `${FINAL_SIZE}px`,
            height: `${FINAL_SIZE}px`,
            borderTopLeftRadius: "40px",
            borderBottomLeftRadius: "40px",
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transformStyle: "preserve-3d",
            textAlign: "center",
            zIndex: 3,
            overflow: "hidden"
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* UNIVERSAL STYLE OBJECT: COLORED BY CLICKED BUTTON */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: button?.buttonColor?.bg || "linear-gradient(135deg, #00d9ff 0%, #0088cc 50%, #004a99 100%)",
            backgroundImage: button?.buttonColor
              ? `${button.buttonColor.bg}, radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.35) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(0, 0, 0, 0.2) 0%, transparent 50%)`
              : "linear-gradient(135deg, #00d9ff 0%, #0088cc 50%, #004a99 100%), radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.35) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(0, 0, 0, 0.2) 0%, transparent 50%)",
            borderTopLeftRadius: "40px",
            borderBottomLeftRadius: "40px",
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
            border: `1px solid ${button?.buttonColor?.border || "rgba(255, 255, 255, 0.25)"}`,
            boxShadow: `-10px 0 24px rgba(0, 0, 0, 0.5), 0 16px 32px rgba(0, 0, 0, 0.5)`,
            zIndex: -1
          }} />

          {/* THE CELESTIAL VOLUMETRIC SPARKLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              position: "absolute",
              width: "200%",
              height: "400px",
              zIndex: 10,
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "translateZ(60px)",
              filter: "brightness(2.2) contrast(1.2)"
            }}
          >
            <motion.div animate={{ scale: [0, 2, 1.5], opacity: [0, 0.8, 0] }} transition={{ delay: 0.4, duration: 1, ease: "easeOut" }} style={{ position: "absolute", width: "250px", height: "250px", background: "radial-gradient(circle, #fff 0%, #0ea5e9 40%, transparent 80%)", filter: "blur(40px)", opacity: 0.6 }} />
            <motion.div animate={{ width: ["0%", "85%", "100%"], opacity: [0, 1, 1, 0] }} transition={{ delay: 0.4, duration: 0.8, times: [0, 0.2, 0.8, 1] }} style={{ position: "absolute", height: "10px", background: "linear-gradient(90deg, transparent, #fff, #0ea5e9, #fff, transparent)", boxShadow: "0 0 80px #0ea5e9, 0 0 120px #0ea5e9" }} />
            <motion.div animate={{ height: ["0%", "45%", "60%"], opacity: [0, 1, 1, 0] }} transition={{ delay: 0.4, duration: 0.8, times: [0, 0.2, 0.8, 1] }} style={{ position: "absolute", width: "4px", background: "linear-gradient(180deg, transparent, #fff, #0ea5e9, #fff, transparent)", boxShadow: "0 0 60px #0ea5e9" }} />
            <motion.div animate={{ scale: [0, 1.2, 0.8, 0], opacity: [0, 1, 1, 0] }} transition={{ delay: 0.4, duration: 0.9, times: [0, 0.15, 0.8, 1] }} style={{ position: "absolute", width: "140px", height: "140px", background: "radial-gradient(circle, #fff 0%, #0ea5e9 25%, transparent 65%)", boxShadow: "0 0 60px #fff", clipPath: "polygon(50% 0%, 55% 45%, 100% 50%, 55% 55%, 50% 100%, 45% 55%, 0% 50%, 45% 45%)" }} />
          </motion.div>

          {/* CONTENT SECTION */}
          {button.icon && (
            <motion.div
              animate={{ filter: ["drop-shadow(0 0 20px rgba(14, 165, 233, 0.4))", "drop-shadow(0 0 45px rgba(14, 165, 233, 0.7))", "drop-shadow(0 0 20px rgba(14, 165, 233, 0.4))"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(10px)" }}
            >
              <motion.img
                src={button.icon}
                alt=""
                style={{ width: "180px", height: "180px", filter: "brightness(0) invert(1)", display: "block" }}
              />
            </motion.div>
          )}

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{
              fontSize: "3.2rem",
              fontWeight: "600",
              color: "#ffffff",
              textTransform: "capitalize",
              letterSpacing: "0.15rem",
              margin: 0,
              textShadow: "0 0 30px rgba(14, 165, 233, 0.5)",
              marginTop: "20px",
              transform: "translateZ(10px)",
              // ABSOLUTE TYPOGRAPHIC SYNC: 2-LINE STACKING
              maxWidth: "350px",
              whiteSpace: "pre-wrap",
              lineHeight: "1.1",
              textAlign: "center"
            }}
          >
            {button.label}
          </motion.h2>

          {/* ACCENT BAR */}
          <div style={{ position: "absolute", bottom: 0, left: "15%", right: "15%", height: "2px", background: "linear-gradient(90deg, transparent, #0ea5e9, transparent)", opacity: 0.4, transform: "translateZ(5px)" }} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
