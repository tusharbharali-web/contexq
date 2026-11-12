'use client';

import { useEffect, useRef, useState } from 'react';

const floatingStyle = `
  @keyframes subtle-float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }

  .float-1 { animation: subtle-float 6s ease-in-out infinite; }
  .float-2 { animation: subtle-float 8s ease-in-out infinite 0.5s; }
  .float-3 { animation: subtle-float 7s ease-in-out infinite 1s; }
`;

interface CardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

function Card({ icon, title, description, delay }: CardProps) {
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
      className={`group relative overflow-hidden rounded-2xl transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Glass morphism card background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-cyan-400/50 transition-colors duration-300" />

      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />

      {/* Content */}
      <div className="relative p-8 z-10 transform transition-all duration-400 group-hover:translate-y-[-3px]">
        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-400">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500" />
    </div>
  );
}

export default function Section() {
  return (
    <>
      <style>{floatingStyle}</style>
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#0d1526] via-[#101e36] to-[#0d1526]">
        {/* Background elements with subtle animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl float-1" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl float-2" />
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl float-3" />
        </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Enterprise Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Power intelligent decision-making across your organisation with contextual AI.
            Real-time insights, reduced risk, and measurable business impact.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            icon="👤"
            title="Know Your Customer"
            description="Reduce false positives by 85% and accelerate onboarding by 60% with intelligent customer intelligence and verification."
            delay={0}
          />
          <Card
            icon="📊"
            title="Credit Risk"
            description="Comprehensive risk profiling with early warning signals. Make informed lending decisions with complete visibility and context."
            delay={100}
          />
          <Card
            icon="🏭"
            title="Supply Chain"
            description="Continuous deep-screening for supplier assessment. Identify risks before they impact your operations and bottom line."
            delay={200}
          />
          <Card
            icon="🔍"
            title="Customer Intelligence"
            description="Unify fragmented data into 360° customer insights. Understand behaviour, preferences, and risk with unprecedented clarity."
            delay={300}
          />
          <Card
            icon="🛡️"
            title="Fraud Management"
            description="Real-time fraud detection and prevention powered by contextual analysis. Protect revenue while improving customer experience."
            delay={400}
          />
          <Card
            icon="⚖️"
            title="Financial Crime"
            description="Transform fragmented data into unified risk analysis. Detect and prevent financial crimes with AI-powered contextual intelligence."
            delay={500}
          />
        </div>
      </div>
    </section>
    </>
  );
}