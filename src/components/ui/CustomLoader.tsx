"use client";

import { useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";

export function CustomLoader({ done }: { done?: boolean } = {}) {
  const { progress: loadProgress } = useProgress();
  // `done` (when given) means the scene can render; until then never show 100%.
  const progress = done === undefined ? loadProgress : done ? 100 : Math.min(loadProgress, 99);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setVisible(false), 800);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const pulseDuration = Math.max(0.5, 2 - (progress / 100) * 1.5);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#020408',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      transition: 'opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
      opacity: progress === 100 ? 0 : 1,
      pointerEvents: 'none'
    }}>
      <style>{`
        @keyframes loaderPulse {
          0%   { opacity: 0.2; transform: scale(0.8); filter: blur(40px); }
          50%  { opacity: 0.45; transform: scale(1.1); filter: blur(60px); }
          100% { opacity: 0.2; transform: scale(0.8); filter: blur(40px); }
        }
        @keyframes textReveal {
          0%   { opacity: 0; transform: translateY(8px); }
          100% { opacity: 0.8; transform: translateY(0); }
        }
      `}</style>

      {/* Decorative Glow Pulse */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, #00e5ff 0%, transparent 70%)',
        animation: `loaderPulse ${pulseDuration}s ease-in-out infinite`,
        pointerEvents: 'none',
        zIndex: -1
      }} />

      <div style={{
        position: 'relative',
        width: '260px',
        height: '2px',
        background: 'rgba(0, 229, 255, 0.08)',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '32px',
        boxShadow: '0 0 40px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: '#00e5ff',
          boxShadow: '0 0 20px rgba(0, 229, 255, 0.8)',
          transition: 'width 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
        }} />
      </div>

      <div style={{
        color: '#00e5ff',
        fontFamily: 'var(--font-geist), sans-serif',
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '4px',
        textTransform: 'uppercase',
        opacity: 0,
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        animation: 'textReveal 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards'
      }}>
        <span style={{ opacity: 0.7 }}>Initializing Neural Link</span>
        <span style={{ minWidth: '40px', color: '#ffffff', textShadow: '0 0 10px rgba(0,229,255,0.5)' }}>
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}
