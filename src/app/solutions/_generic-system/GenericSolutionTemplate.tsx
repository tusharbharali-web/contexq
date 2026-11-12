'use client';

import { useEffect, useRef } from 'react';
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { SolutionConfig } from './SOLUTIONS_CONFIG';

interface GenericSolutionTemplateProps {
  config: SolutionConfig;
}

export default function GenericSolutionTemplate({ config }: GenericSolutionTemplateProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-tag, .engine-card, .insight-card').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getCSSVariables = () => {
    return `
      :root {
        --solution-primary: ${config.colors.primary};
        --solution-secondary: ${config.colors.secondary};
        --solution-accent: ${config.colors.accent};
        --solution-success: ${config.colors.success};
        --text-primary: #ffffff;
        --text-secondary: #d1d5db;
        --border-color: rgba(38, 198, 218, 0.2);
        --bg-surface: rgba(255, 255, 255, 0.05);
      }
    `;
  };

  const renderTextCard = () => {
    if (!config.hero.textCard || !config.hero.textCard.enabled) {
      return null;
    }

    return (
      <div className="hero-spec">
        {config.hero.textCard.rows.map((row, idx) => (
          <div key={idx} className="hs-row">
            <span className="hs-label">{row.label}</span>
            {row.isChips ? (
              <div className="hs-chips">
                {(row.content as Array<{label: string; color: string}>).map((item, i) => (
                  <span key={i} className="hs-chip">
                    <span className="pip" style={{background: item.color}}></span>
                    {item.label}
                  </span>
                ))}
              </div>
            ) : (
              <span className="hs-content">{(row.content as string[])[0]}</span>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-[#0a0f1a] via-[#080f1d] to-[#0f1626]">
      <style>{`
        ${getCSSVariables()}

        /* ============ ANIMATIONS ============ */
        @keyframes rise {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes rotate-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotate-counter-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        @keyframes pulse-scale {
          0%, 100% { r: 14px; opacity: 0.3; }
          50% { r: 20px; opacity: 0.2; }
        }

        .solution-eyebrow {
          font-family: 'Geist Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--solution-primary);
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          animation: fade-in 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
          opacity: 0;
          animation-delay: 0.1s;
        }

        .solution-eyebrow::before {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--solution-primary);
        }

        .solution-quote {
          font-family: 'Fraunces', serif;
          font-weight: 300;
          font-size: clamp(32px, 4.2vw, 56px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-bottom: 32px;
          max-width: 680px;
          animation: rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
          opacity: 0;
          animation-delay: 0.2s;
        }

        .solution-quote em {
          font-style: italic;
          color: var(--solution-primary);
          font-weight: 400;
        }

        .solution-h1 {
          font-family: 'Fraunces', serif;
          font-weight: 500;
          font-size: clamp(48px, 7vw, 96px);
          line-height: 0.95;
          letter-spacing: -0.035em;
          margin-bottom: 32px;
          margin-top: 12px;
        }

        .solution-h1 .word {
          display: inline-block;
          margin-right: 0.12em;
          opacity: 0;
          transform: translateY(24px);
          animation: rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
        }

        .solution-h1 .word:nth-child(1) {
          animation-delay: 0.3s;
          color: var(--solution-success);
        }

        .solution-h1 .word:nth-child(2) {
          animation-delay: 0.5s;
          color: var(--text-primary);
        }

        .solution-h1 .word:nth-child(3) {
          animation-delay: 0.7s;
          color: var(--solution-primary);
        }

        .solution-h1 .dot {
          color: var(--solution-accent);
        }

        .solution-sub {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 520px;
          margin-bottom: 28px;
          animation: rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
          opacity: 0;
          animation-delay: 0.4s;
        }

        .solution-hero {
          min-height: 92vh;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .solution-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 20%, rgba(38, 198, 218, 0.08), transparent 60%),
                      radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.04), transparent 60%);
          pointer-events: none;
        }

        .solution-hero-inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .solution-hero-visual {
          position: relative;
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
        }

        .hero-viz-svg {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-viz-svg svg {
          width: 100%;
          height: 100%;
          max-width: 100%;
          max-height: 100%;
        }

        .orbit-ring {
          transform-origin: 200px 200px;
        }

        .orbit-ring-outer {
          animation: rotate-clockwise 60s linear infinite;
        }

        .orbit-ring-mid {
          animation: rotate-counter-clockwise 45s linear infinite;
        }

        .orbit-ring-inner {
          animation: rotate-clockwise 30s linear infinite;
        }

        .pulse-ring {
          animation: pulse-scale 2s ease-in-out infinite;
        }

        .hero-spec-container {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 16px;
        }

        .hero-spec {
          width: calc(100% - 32px);
          margin: 16px 16px 16px 16px;
          padding: 12px 16px;
          background: rgba(38, 198, 218, 0.08);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-size: 13px;
          flex-shrink: 0;
          order: 2;
        }

        .hs-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 8px;
        }

        .hs-row:last-child {
          margin-bottom: 0;
        }

        .hs-label {
          color: var(--solution-primary);
          font-family: 'Geist Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          min-width: 80px;
        }

        .hs-chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .hs-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 8px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          font-size: 12px;
          color: var(--text-secondary);
        }

        .pip {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
        }

        .hs-content {
          color: var(--text-secondary);
        }

        .section-tag {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 32px;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--border-color);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .section-tag.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .section-tag-number {
          font-family: 'Geist Mono', monospace;
          font-size: 14px;
          font-weight: 600;
          color: var(--solution-primary);
          min-width: 32px;
          line-height: 1.4;
        }

        .section-tag-content {
          flex: 1;
        }

        .section-tag-title {
          font-family: 'Fraunces', serif;
          font-size: 20px;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .section-tag-label {
          font-family: 'Geist Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--solution-primary);
        }

        .solution-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          margin-bottom: 80px;
        }

        .solution-split-side {
          padding: 0 60px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 40px;
        }

        .solution-split-side:first-child {
          border-right: 1px solid var(--border-color);
        }

        .solution-split-side h3 {
          font-family: 'Geist Mono', monospace;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--solution-accent);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          padding-left: 24px;
        }

        .solution-split-side h3::before {
          content: '';
          position: absolute;
          left: 5px;
          top: 50%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--solution-accent);
          transform: translateY(-50%);
          z-index: 2;
        }

        .solution-split-side h3::after {
          content: '';
          position: absolute;
          left: 0px;
          top: 50%;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--solution-accent);
          opacity: 0.3;
          transform: translateY(-50%);
          z-index: 1;
        }

        .solution-split-side h3.positive {
          color: var(--solution-success);
        }

        .solution-split-side h3.positive::before {
          background: var(--solution-success);
        }

        .solution-split-side h3.positive::after {
          background: var(--solution-success);
        }

        .solution-split-text {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .solution-split-text em {
          color: var(--solution-primary);
          font-style: italic;
          font-weight: 500;
        }

        .solution-split-side h2 em {
          color: var(--solution-primary);
          font-style: italic;
        }

        .engine-card {
          padding: 24px;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease;
        }

        .engine-card.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .engine-card h4 {
          font-family: 'Fraunces', serif;
          font-size: 18px;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .engine-card p {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .platform-section {
          margin: 100px 0 80px;
          padding: 60px;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
        }

        .platform-quote {
          font-family: 'Fraunces', serif;
          font-size: 42px;
          font-weight: 400;
          line-height: 1.3;
          color: var(--text-primary);
          margin-bottom: 24px;
        }

        .platform-quote em {
          color: var(--solution-primary);
          font-style: italic;
        }

        .platform-sub {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 800px;
          margin-bottom: 40px;
        }

        .section-visual-container {
          margin: 60px 0;
          display: flex;
          justify-content: center;
        }

        .section-visual {
          width: 100%;
          max-width: 1000px;
        }

        .section-visual svg {
          width: 100%;
          height: auto;
        }

        .section-visual-image {
          width: 100%;
          max-width: 1600px;
          height: auto;
          display: block;
        }

        .section-callout {
          display: flex;
          align-items: center;
          gap: 24px;
          margin: 60px 0 40px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.03);
          border-left: 3px solid var(--solution-primary);
          border-radius: 4px;
        }

        .callout-tag {
          color: var(--solution-primary);
          font-size: 14px;
          line-height: 1.4;
          min-width: 120px;
          flex-shrink: 0;
          text-transform: uppercase;
        }

        .callout-text {
          font-size: 20px;
          line-height: 1.6;
          color: var(--text-primary);
        }

        .callout-text em {
          color: var(--text-primary);
          font-style: italic;
        }

        .callout-text strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .section-visuals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin: 40px 0;
        }

        .section-visual-item {
          border: none;
          border-radius: 0;
          overflow: hidden;
          background: transparent;
        }

        .section-visual-item-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .section-visual-item-svg {
          width: 100%;
          padding: 24px;
        }

        .section-visual-item-svg svg {
          width: 100%;
          height: auto;
        }

        .section-visual-item-placeholder {
          width: 100%;
          aspect-ratio: 16 / 9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pipeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin: 40px 0;
        }

        .pipe-stage {
          padding: 24px;
          border-top: 2px solid var(--border-color);
        }

        .pipe-num {
          font-family: 'Geist Mono', monospace;
          font-size: 12px;
          font-weight: 600;
          color: var(--solution-primary);
          margin-bottom: 8px;
        }

        .pipe-name {
          font-family: 'Fraunces', serif;
          font-size: 20px;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .pipe-tag {
          font-family: 'Geist Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(38, 198, 218, 0.6);
          margin-bottom: 12px;
        }

        .pipe-desc {
          font-size: 13px;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .pipe-desc strong {
          color: var(--text-primary);
        }

        @media (max-width: 1024px) {
          .solution-hero-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .solution-split {
            grid-template-columns: 1fr;
          }

          .solution-split-side:first-child {
            border-right: none;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 40px;
            margin-bottom: 40px;
          }

          .pipeline {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ============ SECTION 02 - OUTCOMES ============ */
        .outcome-section {
          margin: 40px auto;
        }

        .outcome-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          margin-top: 40px;
        }

        .outcome-side {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .outcome-side-label {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--solution-primary);
        }

        .outcome-side-subtext {
          font-size: 26px;
          color: var(--text-secondary);
          font-style: italic;
        }

        .outcome-side-subtext em {
          color: var(--solution-primary);
          font-style: italic;
        }

        .outcome-heading {
          font-size: 24px;
          font-weight: 600;
          line-height: 1.3;
          color: var(--text-primary);
          margin: 0;
        }

        .outcome-box {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
        }

        .outcome-box.outcome-bad {
          background: rgba(176, 41, 28, 0.08);
          border-color: rgba(176, 41, 28, 0.3);
        }

        .outcome-box.outcome-good {
          background: rgba(42, 74, 60, 0.08);
          border-color: rgba(42, 74, 60, 0.3);
        }

        .outcome-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          min-width: 40px;
          border-radius: 50%;
          font-weight: 700;
          font-size: 18px;
        }

        .outcome-box.outcome-bad .outcome-icon {
          background: #ef4444;
          color: #ffffff;
        }

        .outcome-box.outcome-good .outcome-icon {
          background: #10b981;
          color: #ffffff;
        }

        .outcome-text {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .outcome-title {
          font-weight: 600;
          color: var(--text-primary);
        }

        .outcome-box.outcome-bad .outcome-title {
          color: #ef4444;
        }

        .outcome-box.outcome-good .outcome-title {
          color: #10b981;
        }

        .outcome-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* ============ TIMELINE ============ */
        .timeline-container {
          margin: 40px 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .timeline-days {
          position: relative;
          height: 40px;
          margin-bottom: 8px;
        }

        .timeline-day-label {
          position: absolute;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
          transform: translateX(-50%);
          top: 0;
        }

        .timeline-axis {
          position: relative;
          height: 2px;
          background: var(--border-color);
          margin: 10px 0;
        }

        .timeline-marker {
          position: absolute;
          top: -5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: translateX(-50%);
        }

        .timeline-dot {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: var(--solution-primary);
          border: 2px solid var(--bg-surface);
        }

        .timeline-marker.warn .timeline-dot {
          background: #f59e0b;
        }

        .timeline-marker.danger .timeline-dot {
          background: #ef4444;
          box-shadow: 0 0 0 12px rgba(239, 68, 68, 0.15);
        }

        .timeline-labels {
          position: relative;
          height: 40px;
          margin-top: 8px;
        }

        .timeline-text-label {
          position: absolute;
          font-size: 11px;
          color: var(--text-secondary);
          white-space: normal;
          word-wrap: break-word;
          transform: translateX(-50%);
          top: 0;
          text-align: center;
          max-width: 80px;
          line-height: 1.3;
        }

        .timeline-text-label.warn {
          color: #f59e0b;
        }

        .timeline-text-label.danger {
          color: #ef4444;
        }

        /* ============ SUMMARY CARD ============ */
        .summary-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background: var(--bg-surface);
          margin: 20px 0;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          font-size: 13px;
          align-items: center;
        }

        .summary-key {
          font-weight: 600;
          color: var(--text-secondary);
          min-width: 80px;
        }

        .summary-value {
          color: var(--text-primary);
          line-height: 1.4;
          flex: 1;
          text-align: left;
        }

        .summary-value strong {
          font-weight: 600;
          color: var(--solution-primary);
        }

        .summary-value em {
          font-style: italic;
          color: var(--text-secondary);
        }

        .summary-status {
          font-size: 11px;
          color: var(--solution-primary);
          font-weight: 600;
          background: rgba(38, 198, 218, 0.15);
          padding: 2px 8px;
          border-radius: 12px;
          white-space: nowrap;
          display: inline-block;
          margin-left: 8px;
        }

        .summary-row:nth-child(1) .summary-status {
          background: rgba(251, 191, 36, 0.2);
          color: #fbbf24;
        }

        .summary-row:nth-child(2) .summary-status {
          background: rgba(252, 165, 165, 0.3);
          color: #ef4444;
        }

        .summary-row:nth-child(3) .summary-status {
          background: rgba(134, 239, 172, 0.3);
          color: #10b981;
        }

        .summary-row:nth-child(4) .summary-status {
          background: rgba(134, 239, 172, 0.3);
          color: #10b981;
        }

        @media (max-width: 1024px) {
          .outcome-split {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .solution-hero {
            padding: 80px 0 60px;
          }

          .solution-h1 {
            font-size: clamp(32px, 6vw, 48px);
          }

          .solution-split-side {
            padding: 0 20px;
          }

          .pipeline {
            grid-template-columns: 1fr;
          }

          .outcome-split {
            gap: 24px;
          }

          .outcome-heading {
            font-size: 20px;
          }
        }
      `}</style>

      <Header />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="solution-hero">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="solution-hero-inner">
              <div>
                <div className="solution-eyebrow">{config.hero.eyebrow}</div>

                <h2
                  className="solution-quote"
                  dangerouslySetInnerHTML={{ __html: config.hero.quote }}
                />

                <div className="solution-h1">
                  {config.hero.h1Words.map((word, idx) => (
                    <span key={idx} className="word">
                      {word}
                      <span className="dot">.</span>
                    </span>
                  ))}
                </div>

                <p className="solution-sub">{config.hero.subheading}</p>
              </div>

              <div>
                <div className="solution-hero-visual">
                  {config.hero.visualization ? (
                    config.hero.visualization.type === 'svg' && config.hero.visualization.svgContent ? (
                      <div
                        className="hero-viz-svg"
                        dangerouslySetInnerHTML={{ __html: config.hero.visualization.svgContent }}
                      />
                    ) : config.hero.visualization.type === 'canvas' ? (
                      <div style={{ color: 'rgba(38, 198, 218, 0.4)', fontSize: '14px', textAlign: 'center' }}>
                        [Canvas visualization]
                      </div>
                    ) : config.hero.visualization.type === 'threejs' ? (
                      <div style={{ color: 'rgba(38, 198, 218, 0.4)', fontSize: '14px', textAlign: 'center' }}>
                        [3D visualization]
                      </div>
                    ) : null
                  ) : (
                    <div style={{ color: 'rgba(38, 198, 218, 0.4)', fontSize: '14px', textAlign: 'center' }}>
                      [Visualization goes here]
                    </div>
                  )}
                </div>
                {renderTextCard() && (
                  <div className="hero-spec-container">
                    {renderTextCard()}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 01 */}
        {config.sections['01'] && (
          <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="section-tag">
              <div className="section-tag-number">01</div>
              <div className="section-tag-content">
                <div className="section-tag-label">{config.sections['01'].label}</div>
                <div className="section-tag-title">{config.sections['01'].title}</div>
              </div>
            </div>

            <div className="solution-split">
              <div className="solution-split-side">
                <h3>{config.sections['01'].left.heading}</h3>
                {config.sections['01'].left.subheading && (
                  <h2 style={{fontFamily: 'Fraunces, serif', fontSize: '34px', fontWeight: 500, marginBottom: '16px', color: 'var(--text-primary)'}}>
                    <span dangerouslySetInnerHTML={{ __html: config.sections['01'].left.subheading }} />
                  </h2>
                )}
                {config.sections['01'].left.content.map((para, idx) => (
                  <p key={idx} className="solution-split-text" dangerouslySetInnerHTML={{ __html: para }} />
                ))}
                {config.sections['01'].left.visualization && (
                  <div style={{marginTop: '24px', marginBottom: '24px'}}>
                    {config.sections['01'].left.visualization.type === 'svg' && config.sections['01'].left.visualization.svgContent && (
                      <div dangerouslySetInnerHTML={{ __html: config.sections['01'].left.visualization.svgContent }} />
                    )}
                    {config.sections['01'].left.visualization.type === 'image' && config.sections['01'].left.visualization.imageSrc && (
                      <img src={config.sections['01'].left.visualization.imageSrc} alt={config.sections['01'].left.visualization.description} style={{width: '100%', height: 'auto'}} />
                    )}
                  </div>
                )}
                {config.sections['01'].left.quote && (
                  <div style={{marginTop: '20px', padding: '16px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '6px', borderLeft: '3px solid var(--solution-accent)'}}>
                    <p style={{fontSize: '12px', fontStyle: 'italic', color: 'var(--text-secondary)'}}>
                      {config.sections['01'].left.quote}
                    </p>
                  </div>
                )}
              </div>

              <div className="solution-split-side">
                <h3 className={config.sections['01'].right.isPositive ? 'positive' : ''}>
                  {config.sections['01'].right.heading}
                </h3>
                {config.sections['01'].right.subheading && (
                  <h2 style={{fontFamily: 'Fraunces, serif', fontSize: '34px', fontWeight: 500, marginBottom: '16px', color: 'var(--text-primary)'}}>
                    <span dangerouslySetInnerHTML={{ __html: config.sections['01'].right.subheading }} />
                  </h2>
                )}
                {config.sections['01'].right.content.map((para, idx) => (
                  <p key={idx} className="solution-split-text" dangerouslySetInnerHTML={{ __html: para }} />
                ))}
                {config.sections['01'].right.visualization && (
                  <div style={{marginTop: '24px', marginBottom: '24px'}}>
                    {config.sections['01'].right.visualization.type === 'svg' && config.sections['01'].right.visualization.svgContent && (
                      <div dangerouslySetInnerHTML={{ __html: config.sections['01'].right.visualization.svgContent }} />
                    )}
                    {config.sections['01'].right.visualization.type === 'image' && config.sections['01'].right.visualization.imageSrc && (
                      <img src={config.sections['01'].right.visualization.imageSrc} alt={config.sections['01'].right.visualization.description} style={{width: '100%', height: 'auto'}} />
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 02 - Outcomes Comparison */}
        {config.sections['02'] && (
          <section className="outcome-section max-w-7xl mx-auto px-6 py-12">
            <div className="section-tag">
              <div className="section-tag-number">02</div>
              <div className="section-tag-content">
                <div className="section-tag-label">{config.sections['02'].label}</div>
                <div className="section-tag-title">{config.sections['02'].title}</div>
              </div>
            </div>

            {config.sections['02'].intro && (
              <>
                <h2
                  className="platform-quote"
                  dangerouslySetInnerHTML={{ __html: config.sections['02'].intro.quote }}
                />
                <p className="platform-sub">{config.sections['02'].intro.description}</p>
              </>
            )}

            <div className="outcome-split">
              <div className="outcome-side">
                <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#ef4444" strokeWidth="1" opacity="0.4"/>
                    <circle cx="12" cy="12" r="5" stroke="#ef4444" strokeWidth="2"/>
                  </svg>
                  <div className="outcome-side-label" style={{color: '#ef4444'}}>{config.sections['02'].left.heading}</div>
                </div>
                {config.sections['02'].left.subtext && (
                  <div className="outcome-side-subtext" dangerouslySetInnerHTML={{ __html: config.sections['02'].left.subtext }} />
                )}
                <h3 className="outcome-heading">{config.sections['02'].left.content[0]}</h3>

                {config.timeline?.left && config.timeline.left.length > 0 && (
                  <div className="timeline-container">
                    <div className="timeline-days">
                      {config.timeline.left.map((item, idx) => (
                        <div
                          key={idx}
                          className="timeline-day-label"
                          style={{ left: `${(idx / (config.timeline!.left.length - 1)) * 100}%` }}
                        >
                          {item.day}
                        </div>
                      ))}
                    </div>
                    <div className="timeline-axis">
                      {config.timeline.left.map((item, idx) => (
                        <div
                          key={idx}
                          className={`timeline-marker ${item.type || 'default'}`}
                          style={{ left: `${(idx / (config.timeline!.left.length - 1)) * 100}%` }}
                        >
                          <div
                            className="timeline-dot"
                            style={item.color ? { background: item.color } : undefined}
                          ></div>
                        </div>
                      ))}
                    </div>
                    <div className="timeline-labels">
                      {config.timeline.left.map((item, idx) => (
                        <div
                          key={idx}
                          className={`timeline-text-label ${item.type || 'default'}`}
                          style={{ left: `${(idx / (config.timeline!.left.length - 1)) * 100}%` }}
                        >
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {config.sections['02'].left.outcome && (
                  <div className={`outcome-box outcome-${config.sections['02'].left.outcome.type}`}>
                    <div className="outcome-icon">{config.sections['02'].left.outcome.icon}</div>
                    <div className="outcome-text">
                      <div className="outcome-title">{config.sections['02'].left.outcome.title}</div>
                      <div className="outcome-desc">{config.sections['02'].left.outcome.description}</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="outcome-side">
                <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#10b981" strokeWidth="1" opacity="0.4"/>
                    <circle cx="12" cy="12" r="5" stroke="#10b981" strokeWidth="2"/>
                  </svg>
                  <div className="outcome-side-label" style={{color: '#10b981'}}>{config.sections['02'].right.heading}</div>
                </div>
                {config.sections['02'].right.subtext && (
                  <div className="outcome-side-subtext" dangerouslySetInnerHTML={{ __html: config.sections['02'].right.subtext }} />
                )}
                <h3 className="outcome-heading">{config.sections['02'].right.content[0]}</h3>

                {config.timeline?.right && config.timeline.right.length > 0 && (
                  <div className="timeline-container">
                    <div className="timeline-days">
                      {config.timeline.right.map((item, idx) => (
                        <div
                          key={idx}
                          className="timeline-day-label"
                          style={{ left: `${(idx / (config.timeline!.right.length - 1)) * 100}%` }}
                        >
                          {item.day}
                        </div>
                      ))}
                    </div>
                    <div className="timeline-axis">
                      {config.timeline.right.map((item, idx) => (
                        <div
                          key={idx}
                          className={`timeline-marker ${item.type || 'default'}`}
                          style={{ left: `${(idx / (config.timeline!.right.length - 1)) * 100}%` }}
                        >
                          <div
                            className="timeline-dot"
                            style={item.color ? { background: item.color, ...(idx === config.timeline!.right.length - 1 ? { boxShadow: '0 0 0 12px rgba(16, 185, 129, 0.15)' } : {}) } : undefined}
                          ></div>
                        </div>
                      ))}
                    </div>
                    <div className="timeline-labels">
                      {config.timeline.right.map((item, idx) => (
                        <div
                          key={idx}
                          className={`timeline-text-label ${item.type || 'default'}`}
                          style={{ left: `${(idx / (config.timeline!.right.length - 1)) * 100}%` }}
                        >
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {config.sections['02'].right.summary && config.sections['02'].right.summary.length > 0 && (
                  <div className="summary-card">
                    {config.sections['02'].right.summary.map((item, idx) => (
                      <div key={idx} className="summary-row">
                        <span className="summary-key">{item.key}</span>
                        <span className="summary-value" dangerouslySetInnerHTML={{ __html: item.value }} />
                        {item.status && <span className="summary-status">{item.status}</span>}
                      </div>
                    ))}
                  </div>
                )}

                {config.sections['02'].right.outcome && (
                  <div className={`outcome-box outcome-${config.sections['02'].right.outcome.type}`}>
                    <div className="outcome-icon">{config.sections['02'].right.outcome.icon}</div>
                    <div className="outcome-text">
                      <div className="outcome-title">{config.sections['02'].right.outcome.title}</div>
                      <div className="outcome-desc">{config.sections['02'].right.outcome.description}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 03 - Platform */}
        {config.sections['03'] && (
          <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="section-tag">
              <div className="section-tag-number">03</div>
              <div className="section-tag-content">
                <div className="section-tag-label">{config.sections['03'].label}</div>
                <div className="section-tag-title">{config.sections['03'].title}</div>
              </div>
            </div>

            <h2
              className="platform-quote"
              dangerouslySetInnerHTML={{ __html: config.sections['03'].quote }}
            />

            <p className="platform-sub">{config.sections['03'].description}</p>

            {config.sections['03'].visual && (
              <div className="section-visual-container">
                {config.sections['03'].visual.type === 'svg' && config.sections['03'].visual.svgContent && (
                  <div
                    className="section-visual"
                    dangerouslySetInnerHTML={{ __html: config.sections['03'].visual.svgContent }}
                  />
                )}
                {config.sections['03'].visual.type === 'image' && (
                  config.sections['03'].visual.imageSrc ? (
                    <img
                      src={config.sections['03'].visual.imageSrc}
                      alt={config.sections['03'].visual.description || 'Section visualization'}
                      className="section-visual-image"
                    />
                  ) : (
                    <div className="section-visual-placeholder">
                      <div style={{ fontSize: '14px', color: 'rgba(38, 198, 218, 0.5)', textAlign: 'center', padding: '60px 20px' }}>
                        [Visualization - {config.sections['03'].visual.description || 'Image placeholder'}]
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {config.sections['03'].callout && (
              <div className="section-callout">
                <div className="callout-tag" dangerouslySetInnerHTML={{ __html: config.sections['03'].callout.tag }} />
                <div className="callout-text" dangerouslySetInnerHTML={{ __html: config.sections['03'].callout.text }} />
              </div>
            )}

            {config.sections['03'].stages && (
              <div className="pipeline">
                {config.sections['03'].stages.map((stage, idx) => (
                  <div key={idx} className="pipe-stage">
                    <div className="pipe-name">{stage.name}</div>
                    <div
                      className="pipe-desc"
                      dangerouslySetInnerHTML={{ __html: stage.description }}
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* SECTION 04 - Visuals Showcase */}
        {config.sections['04'] && (
          <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="section-tag">
              <div className="section-tag-number">04</div>
              <div className="section-tag-content">
                <div className="section-tag-label">{config.sections['04'].label}</div>
                <div className="section-tag-title">{config.sections['04'].title}</div>
              </div>
            </div>

            <h2
              className="platform-quote"
              dangerouslySetInnerHTML={{ __html: config.sections['04'].quote }}
            />

            <p className="platform-sub">{config.sections['04'].description}</p>

            <div className="section-visuals-grid">
              {config.sections['04'].visuals.map((visual, idx) => (
                <div key={idx} className="section-visual-item">
                  {visual.type === 'image' && visual.imageSrc ? (
                    <img
                      src={visual.imageSrc}
                      alt={visual.description || `Visual ${idx + 1}`}
                      className="section-visual-item-image"
                    />
                  ) : visual.type === 'svg' && visual.svgContent ? (
                    <div
                      className="section-visual-item-svg"
                      dangerouslySetInnerHTML={{ __html: visual.svgContent }}
                    />
                  ) : (
                    <div className="section-visual-item-placeholder">
                      <div style={{ fontSize: '14px', color: 'rgba(38, 198, 218, 0.5)', textAlign: 'center', padding: '40px 20px' }}>
                        [Visual {idx + 1} - {visual.description || 'Image placeholder'}]
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
