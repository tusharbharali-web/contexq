'use client';

import { useEffect, useRef, useState } from 'react';

const animationStyles = `
  @keyframes float-subtle {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
  }

  .float-card { animation: float-subtle 5s ease-in-out infinite; }
`;

interface ValueProp {
  icon: string;
  title: string;
  description: string;
  metric: string;
}

function ValueCard({ icon, title, description, metric, delay }: ValueProp & { delay: number }) {
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

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 float-card'
          : 'opacity-0 translate-y-8'
      }`}
      style={{animationDelay: `${delay}ms`}}
    >
      <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/20">
        {/* Glow effect on hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />

        {/* Icon */}
        <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>

        {/* Metric */}
        <div className="pt-4 border-t border-white/10 group-hover:border-cyan-400/50 transition-colors duration-300">
          <p className="text-cyan-400 font-semibold text-lg">{metric}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const values: ValueProp[] = [
    {
      icon: '🧠',
      title: 'Contextual AI',
      description: 'Composite AI that understands context beyond data. Surfaces insights that sophisticated solutions typically miss.',
      metric: 'Enlightened decisions'
    },
    {
      icon: '⚡',
      title: 'Real-Time Processing',
      description: 'Lightning-fast decision-making with millisecond response times. React instantly to market changes and risks.',
      metric: '< 50ms latency'
    },
    {
      icon: '📈',
      title: 'Proven ROI',
      description: 'Enterprises achieve 300% average ROI within 12 months. Real results backed by measurable impact.',
      metric: '300% avg ROI'
    },
    {
      icon: '🔒',
      title: 'Enterprise Grade',
      description: 'Bank-grade security with SOC 2 Type II, ISO 27001, and all major regulatory certifications.',
      metric: '99.99% uptime'
    },
    {
      icon: '🌐',
      title: 'Global Trust',
      description: 'Trusted by 500+ enterprises across 50+ countries. Multi-region redundancy and 24/7 expert support.',
      metric: '500+ customers'
    },
    {
      icon: '🎯',
      title: 'Risk Reduction',
      description: 'Comprehensive risk identification and mitigation. 85% reduction in false positives, protecting business value.',
      metric: '85% fewer errors'
    }
  ];

  return (
    <>
      <style>{animationStyles}</style>
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#0d1526] via-[#101e36] to-[#0d1526]">
        {/* Background effects with animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-widest">Why Choose ContexQ</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Built for Enterprise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We don't just solve problems. We deliver measurable results that transform how you do business.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <ValueCard
              key={idx}
              icon={value.icon}
              title={value.title}
              description={value.description}
              metric={value.metric}
              delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
