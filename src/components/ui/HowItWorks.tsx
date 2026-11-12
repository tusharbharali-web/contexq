'use client';

import { useEffect, useRef, useState } from 'react';

const howItWorksStyles = `
  @keyframes gentle-float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
  }

  .bounce-soft { animation: gentle-float 5s ease-in-out infinite; }
`;

interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

function ProcessStep({ step, delay, isLast }: { step: Step; delay: number; isLast: boolean }) {
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
      className={`relative transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`flex flex-col items-center transition-all duration-700 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Step circle */}
        <div className={`relative mb-8 ${isVisible ? 'bounce-soft' : ''}`} style={{animationDelay: `${delay}ms`}}>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border-2 border-cyan-400/50 flex items-center justify-center group hover:border-cyan-400 hover:from-cyan-400/30 hover:to-blue-500/30 transition-all duration-300 group-hover:shadow-md group-hover:shadow-cyan-500/30">
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
          </div>
          <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
            {step.number}
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
          <p className="text-gray-400 max-w-sm leading-relaxed">{step.description}</p>
        </div>

        {/* Connector line */}
        {!isLast && (
          <div className="hidden md:block absolute top-[120px] left-1/2 w-1 h-20 bg-gradient-to-b from-cyan-400/50 to-transparent transform -translate-x-1/2 translate-y-full" />
        )}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      number: 1,
      title: 'Collect Context',
      description: 'Aggregate internal metrics with external factors like market trends, regulatory changes, and real-world signals.',
      icon: '📊'
    },
    {
      number: 2,
      title: 'Analyze Intelligently',
      description: 'Our Composite AI processes fragmented data to identify patterns and insights that traditional solutions miss.',
      icon: '🧠'
    },
    {
      number: 3,
      title: 'Decide Confidently',
      description: 'Make decisions with full context. Every insight is backed by comprehensive risk analysis and real-time data.',
      icon: '✅'
    },
    {
      number: 4,
      title: 'Act & Improve',
      description: 'Execute decisions with measurable impact. Continuous learning and optimisation drive ongoing value creation.',
      icon: '📈'
    }
  ];

  return (
    <>
      <style>{howItWorksStyles}</style>
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#0d1526] via-[#101e36] to-[#0d1526]">
        {/* Background effects with animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}} />
        </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-widest">Contextual Decision Intelligence</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Four Pillars of Success
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From context to decision. How we transform fragmented data into actionable intelligence.
          </p>
        </div>

        {/* Steps - Grid on desktop, stacked on mobile */}
        <div className="grid md:grid-cols-4 gap-4 relative">
          {steps.map((step, idx) => (
            <ProcessStep
              key={idx}
              step={step}
              delay={idx * 100}
              isLast={idx === steps.length - 1}
            />
          ))}

          {/* Connector lines for desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>

      </div>
    </section>
    </>
  );
}
