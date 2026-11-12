'use client';

import { useEffect, useRef, useState } from 'react';

const statsStyles = ``;  // Minimal animations for premium feel

interface Stat {
  number: string;
  label: string;
  description: string;
}

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayNumber, setDisplayNumber] = useState('0');
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

  // Animate numbers
  useEffect(() => {
    if (!isVisible) return;

    const numericPart = stat.number.replace(/[^0-9.]/g, '');
    const suffix = stat.number.replace(/[0-9.]/g, '');
    const target = parseFloat(numericPart);

    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayNumber(stat.number);
        clearInterval(timer);
      } else {
        setDisplayNumber(Math.round(current).toString() + suffix);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, stat.number]);

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{animationDelay: `${delay}ms`}}
    >
      <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300 text-center group hover:shadow-lg hover:shadow-cyan-500/20 group-hover:translate-y-[-3px]">
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />

        {/* Number */}
        <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
          {displayNumber}
        </p>

        {/* Label */}
        <p className="text-xl font-semibold text-white mb-3">{stat.label}</p>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed">{stat.description}</p>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const stats: Stat[] = [
    {
      number: '500+',
      label: 'Enterprise Clients',
      description: 'Leading organisations across 50+ countries trust ContexQ'
    },
    {
      number: '2.3B',
      label: 'Value Preserved',
      description: 'Total value identified and protected for our clients'
    },
    {
      number: '300%',
      label: 'Average ROI',
      description: 'Within 12 months of implementation'
    },
    {
      number: '99.99%',
      label: 'Uptime SLA',
      description: 'Enterprise-grade reliability and redundancy'
    },
    {
      number: '50ms',
      label: 'Response Time',
      description: 'Lightning-fast processing at scale'
    },
    {
      number: '24/7',
      label: 'Expert Support',
      description: 'Dedicated teams available round-the-clock'
    }
  ];

  return (
    <>
      <style>{statsStyles}</style>
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#0d1526] via-[#101e36] to-[#0d1526]">
        {/* Background effects with animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-widest">Impact & Metrics</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Numbers Don't Lie
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real results delivered to enterprise organisations worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              stat={stat}
              delay={idx * 50}
            />
          ))}
        </div>

      </div>
    </section>
    </>
  );
}
