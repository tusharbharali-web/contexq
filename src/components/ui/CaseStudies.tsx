'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const caseStudyStyles = ``;  // Removed overly complex animations

interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metric: string;
  color: 'cyan' | 'blue' | 'purple';
}

function CaseStudyCard({ study, delay, color }: { study: CaseStudy; delay: number; color: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const colorClasses = {
    cyan: 'from-cyan-500/20 to-blue-500/20 border-cyan-400/30 hover:border-cyan-400/60',
    blue: 'from-blue-500/20 to-indigo-500/20 border-blue-400/30 hover:border-blue-400/60',
    purple: 'from-purple-500/20 to-indigo-500/20 border-purple-400/30 hover:border-purple-400/60'
  };

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`relative overflow-hidden rounded-2xl border ${colorClasses[color as keyof typeof colorClasses]} bg-white/5 backdrop-blur-xl p-8 transition-all duration-400 group-hover:shadow-lg group-hover:shadow-cyan-500/20 group-hover:translate-y-[-4px]`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-gray-400 text-sm uppercase tracking-widest">{study.industry}</p>
            <h3 className="text-2xl font-bold text-white mt-2">{study.company}</h3>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {study.metric}
            </p>
          </div>
        </div>

        {/* Challenge */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">Challenge</h4>
          <p className="text-gray-300">{study.challenge}</p>
        </div>

        {/* Solution */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">Solution</h4>
          <p className="text-gray-300">{study.solution}</p>
        </div>

        {/* Results */}
        <div className="mb-6 pb-6 border-b border-white/10">
          <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Results</h4>
          <ul className="space-y-2">
            {study.results.map((result, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-300">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Link
          href="/customers"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300 group/link"
        >
          Read Full Case Study
          <span className="transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const studies: CaseStudy[] = [
    {
      company: 'Global Bank & Finance Co.',
      industry: 'Financial Services',
      challenge: 'Processing 10M+ transactions daily with manual compliance checks taking 3+ days',
      solution: 'Implemented ContexQ\'s automated KYC and fraud detection with real-time processing',
      results: [
        'Reduced compliance review time from 3 days to 2 hours',
        'Detected $47M in fraudulent transactions in first year',
        'Improved customer onboarding speed by 85%'
      ],
      metric: '+340% ROI',
      color: 'cyan'
    },
    {
      company: 'International Supply Chain Corp',
      industry: 'Manufacturing',
      challenge: 'Visibility gaps across global supply chain causing $2.3M in losses annually',
      solution: 'Deployed ContexQ for end-to-end supply chain intelligence and risk assessment',
      results: [
        'Achieved 99.2% supply chain visibility',
        'Reduced operational losses by $2.1M yearly',
        'Cut supplier onboarding time from 6 weeks to 5 days'
      ],
      metric: '+280% ROI',
      color: 'blue'
    },
    {
      company: 'Healthcare Network Group',
      industry: 'Healthcare',
      challenge: 'Patient data scattered across systems with compliance risks and poor analytics',
      solution: 'Integrated ContexQ for unified data management and HIPAA-compliant analytics',
      results: [
        'Unified 500M+ patient records across network',
        'Improved care coordination response time by 73%',
        'Eliminated compliance violations in audit cycles'
      ],
      metric: '+315% ROI',
      color: 'purple'
    }
  ];

  return (
    <>
      <style>{caseStudyStyles}</style>
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#0d1526] via-[#101e36] to-[#0d1526]">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-widest">Case Studies</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Proven Results Across Industries
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how leading enterprises transformed their operations with ContexQ
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {studies.map((study, idx) => (
            <CaseStudyCard
              key={idx}
              study={study}
              delay={idx * 100}
              color={study.color}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/customers"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
          >
            View All Case Studies
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
