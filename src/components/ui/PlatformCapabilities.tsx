'use client';

import { useEffect, useRef, useState } from 'react';

interface CapabilityCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: { label: string; items: (string | { text: string; icon: string })[] }[];
  metric: string;
  metricLabel: string;
  colorClass: string;
  borderColor: string;
  accentColor: string;
}

const capabilities: CapabilityCard[] = [
  {
    id: 'dirty-data',
    title: 'Dirty data',
    subtitle: 'INGEST',
    description: 'Real enterprise data is messy. We start there.',
    points: [
      {
        label: '',
        items: [
          'Duplicate customer names across systems',
          'Addresses in 12 different scripts',
          'Missing or partial KYC fields',
          'Siloed transaction records',
          'Inconsistent entity formats',
          'No single source of truth',
        ],
      },
    ],
    metric: '15+',
    metricLabel: 'Data sources integrated',
    colorClass: 'from-red-900/20 to-red-800/10',
    borderColor: 'border-red-500/30',
    accentColor: 'text-red-400',
  },
  {
    id: 'clean-match',
    title: 'Clean + match',
    subtitle: 'RESOLVE',
    description: 'Entity resolution across 163M+ records, 12 scripts.',
    points: [
      {
        label: 'CUSTOMER MATCH',
        items: [
          'Rajesh K. ... R. Kumar, same person',
          'راجش ... Arabic script, same entity',
          'ABC Ltd ... ABC Private Limited',
          'Adar #1 ... Adar, name, address',
          'Phone ... Shared across 2 entities',
        ],
      },
    ],
    metric: '96.3%',
    metricLabel: 'accuracy',
    colorClass: 'from-amber-900/20 to-yellow-800/10',
    borderColor: 'border-amber-500/30',
    accentColor: 'text-amber-400',
  },
  {
    id: 'knowledge-graph',
    title: 'Knowledge graph',
    subtitle: 'CONNECT',
    description: 'Every entity, every relationship, every link.',
    points: [
      {
        label: 'CUSTOMER GRAPH',
        items: [
          { text: 'Customer → subsidiaries → directors → BNPO', icon: '👤' },
          { text: 'Account → branch → signatory → family links', icon: '👥' },
        ],
      },
      {
        label: 'RISK GRAPH',
        items: [
          { text: 'Entity → shell cos → sanctioned counterparty', icon: '⊘' },
          { text: 'Mule account → fund flow → exit points', icon: '⚠' },
        ],
      },
      {
        label: 'DATA GRAPH',
        items: [{ text: 'Source A → cross-validated → Source B → linkage', icon: '🔗' }],
      },
    ],
    metric: '5-hop',
    metricLabel: 'connections',
    colorClass: 'from-purple-900/20 to-purple-800/10',
    borderColor: 'border-purple-500/30',
    accentColor: 'text-purple-400',
  },
  {
    id: 'triple-intelligence',
    title: 'Triple intelligence',
    subtitle: 'ANALYSE',
    description: 'Customer, risk, and data in one.',
    points: [
      {
        label: 'CUSTOMER INTELLIGENCE',
        items: [
          'Customer 360',
          'KYC / KYB',
          'UBO detection',
        ],
      },
      {
        label: 'RISK INTELLIGENCE',
        items: [
          'AML / sanctions',
          'Fraud networks',
          'Financial forensics',
          'Location risk',
        ],
      },
      {
        label: 'DATA INTELLIGENCE',
        items: [
          'Quality scoring',
          'Completeness',
          'Cross-validation',
          'Data lineage',
        ],
      },
    ],
    metric: '47',
    metricLabel: 'risk signals',
    colorClass: 'from-blue-900/20 to-blue-800/10',
    borderColor: 'border-blue-500/30',
    accentColor: 'text-blue-400',
  },
  {
    id: 'decisions',
    title: 'Decisions, not reports',
    subtitle: 'DECIDE',
    description: 'Every output is an action, with full explainability.',
    points: [
      {
        label: 'CUSTOMER DECISIONS',
        items: [
          'Onboard or reject, with evidence',
          'Segment + monitor, perpetual KYC',
        ],
      },
      {
        label: 'RISK DECISIONS',
        items: [
          'File STR, with full graph context',
          'Block + escalate, with network map',
        ],
      },
      {
        label: 'DATA DECISIONS',
        items: [
          'Enrich + merge, golden record',
          'Govern + trace, full data lineage',
        ],
      },
    ],
    metric: '72%',
    metricLabel: 'decision accuracy',
    colorClass: 'from-emerald-900/20 to-teal-800/10',
    borderColor: 'border-emerald-500/30',
    accentColor: 'text-emerald-400',
  },
];

function CapabilityCard({ card, index }: { card: CapabilityCard; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`h-full transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`border ${card.borderColor} bg-gradient-to-br ${card.colorClass} backdrop-blur-sm rounded-xl p-2 h-full flex flex-col border-opacity-40`}>
        <div className="border rounded-lg pt-3 pb-2 px-2 h-full flex flex-col" style={{ borderColor: card.accentColor === 'text-red-400' ? 'rgba(239, 68, 68, 0.1)' : card.accentColor === 'text-amber-400' ? 'rgba(251, 146, 60, 0.1)' : card.accentColor === 'text-purple-400' ? 'rgba(168, 85, 247, 0.1)' : card.accentColor === 'text-blue-400' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(16, 185, 129, 0.1)' }}>
        {/* Category Label */}
        <p className={`text-[0.65rem] font-bold ${card.accentColor} uppercase tracking-widest mb-1`}>{String(index + 1).padStart(2, '0')}, {card.subtitle}</p>

        {/* Title */}
        <h3 className={`text-2xl font-bold ${card.accentColor === 'text-red-400' ? 'text-red-300' : card.accentColor === 'text-amber-400' ? 'text-amber-300' : card.accentColor === 'text-purple-400' ? 'text-purple-300' : card.accentColor === 'text-blue-400' ? 'text-blue-300' : 'text-emerald-300'} mb-1`}>{card.title}</h3>

        {/* Description */}
        <p className="text-[0.65rem] text-gray-400 mb-5 leading-relaxed">{card.description}</p>

        {/* Points */}
        <div className="flex-1 mb-8 space-y-3 text-[0.65rem]">
          {card.points.map((section, idx) => (
            <div key={idx}>
              {section.label && card.id !== 'clean-match' && (
                <>
                  <p className={`text-[0.65rem] font-bold ${['decisions', 'knowledge-graph', 'triple-intelligence'].includes(card.id) ? idx === 0 ? 'text-emerald-400' : idx === 1 ? 'text-red-400' : 'text-blue-400' : 'text-gray-500'} uppercase tracking-widest mt-3 mb-1`}>{section.label}</p>
                  <div className="w-full h-px bg-white/10 mb-2" />
                </>
              )}
              <ul className="space-y-2">
                {section.items.map((item, itemIdx) => {
                  const itemText = typeof item === 'string' ? item : item.text;
                  const itemIcon = typeof item === 'string' ? undefined : item.icon;
                  if (card.id === 'clean-match') {
                    const parts = itemText.split(' ... ');
                    const label = parts[0];
                    const description = parts[1] || itemText;
                    return (
                      <li key={itemIdx} className={`flex items-center gap-2 border ${card.borderColor} rounded-lg p-2`} style={{ backgroundColor: card.accentColor === 'text-amber-400' ? 'rgba(251, 146, 60, 0.08)' : 'rgba(251, 146, 60, 0.08)' }}>
                        <span className={`flex-shrink-0 px-2 py-1 rounded border ${card.borderColor} text-[0.6rem] font-bold ${card.accentColor}`}>{label}</span>
                        <span className="text-gray-400 text-[0.65rem] leading-snug">=</span>
                        <span className="text-gray-400 text-[0.65rem] leading-snug">{description}</span>
                      </li>
                    );
                  }
                  return (
                    <li key={itemIdx} className={`flex items-center gap-3 border rounded-lg p-3 bg-opacity-10`} style={{ backgroundColor: ['decisions', 'knowledge-graph', 'triple-intelligence'].includes(card.id) ? idx === 0 ? 'rgba(16, 185, 129, 0.08)' : idx === 1 ? 'rgba(239, 68, 68, 0.08)' : 'rgba(59, 130, 246, 0.08)' : card.accentColor === 'text-red-400' ? 'rgba(239, 68, 68, 0.08)' : card.accentColor === 'text-amber-400' ? 'rgba(251, 146, 60, 0.08)' : card.accentColor === 'text-purple-400' ? 'rgba(192, 132, 250, 0.08)' : card.accentColor === 'text-blue-400' ? 'rgba(96, 165, 250, 0.08)' : 'rgba(52, 211, 153, 0.08)', borderColor: ['decisions', 'knowledge-graph', 'triple-intelligence'].includes(card.id) ? idx === 0 ? 'rgba(16, 185, 129, 0.3)' : idx === 1 ? 'rgba(239, 68, 68, 0.3)' : 'rgba(59, 130, 246, 0.3)' : card.accentColor === 'text-red-400' ? 'rgba(239, 68, 68, 0.3)' : card.accentColor === 'text-amber-400' ? 'rgba(251, 146, 60, 0.3)' : card.accentColor === 'text-purple-400' ? 'rgba(192, 132, 250, 0.3)' : card.accentColor === 'text-blue-400' ? 'rgba(96, 165, 250, 0.3)' : 'rgba(52, 211, 153, 0.3)' }}>
                      {card.id === 'triple-intelligence' ? (
                        <span className={`flex-shrink-0 text-lg font-bold ${idx === 0 ? 'text-emerald-400' : idx === 1 ? 'text-red-400' : 'text-blue-400'}`}>•</span>
                      ) : card.id === 'knowledge-graph' && itemIcon ? (
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full border ${idx === 0 ? 'border-emerald-400' : idx === 1 ? 'border-red-400' : 'border-blue-400'} flex items-center justify-center text-[0.8rem] ${idx === 0 ? 'text-emerald-400' : idx === 1 ? 'text-red-400' : 'text-blue-400'}`}>{itemIcon}</span>
                      ) : (
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full border ${card.borderColor} flex items-center justify-center text-[0.6rem] font-bold ${card.accentColor}`}>✓</span>
                      )}
                      <span className="text-gray-400 text-[0.65rem] leading-snug">{itemText}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider before metric */}
        <div className="w-full h-px bg-white/10 mb-" />

        {/* Metric */}
        <div className="text-center mt-4">
          <p className={`text-5xl font-bold ${card.accentColor} mb-2`}>{card.metric}</p>
          <p className="text-[0.65rem] text-gray-500 uppercase tracking-widest">{card.metricLabel}</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default function PlatformCapabilities() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#0d1526]">
      {/* Background subtle elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 leading-snug">
            <span className="text-gray-500">Raw data in. </span>
            <span className="text-white">Decisions out. </span>
            <span className="text-blue-400">One platform.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            Not an LLM. Not a dashboard. Complete customer, risk, and data intelligence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="relative">
          <div className="grid md:grid-cols-5 gap-6">
            {capabilities.map((card, index) => (
              <CapabilityCard key={card.id} card={card} index={index} />
            ))}
          </div>
          {/* Arrows between cards */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {[...Array(4)].map((_, i) => {
              const columnWidth = `(100% - 1.5rem * 4) / 5`;
              const gapWidth = `1.5rem`;
              const leftPos = `calc((${columnWidth}) * ${i + 1} + ${gapWidth} * ${i + 0.5})`;
              return (
                <div key={i} className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2" style={{ left: leftPos }}>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="h-px w-32" style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.1), transparent)' }} />
            <p className="text-center text-xs text-gray-500 uppercase tracking-widest whitespace-nowrap">
              One platform. Five stages. Zero handoffs.
            </p>
            <div className="h-px w-32" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.1), transparent)' }} />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-red-400">✕</span>
            <p className="text-sm text-gray-400">
              Not an LLM. Not a BI tool. <span className="text-cyan-400">Purpose-built decision intelligence for regulated enterprises.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
