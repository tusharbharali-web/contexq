'use client';

import { useEffect, useRef, useState } from 'react';

const testimonialStyles = ``;  // Keep animations minimal

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

function TestimonialCard({ testimonial, delay }: { testimonial: Testimonial; delay: number }) {
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
      className={`transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="relative p-8 rounded-2xl border border-slate-200/80 bg-white shadow-md hover:border-cyan-400 transition-all duration-300 h-full group hover:shadow-lg hover:translate-y-[-2px]">
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10" />

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-yellow-500">★</span>
          ))}
        </div>

        {/* Quote */}
        <p className="text-slate-600 leading-relaxed mb-6 italic">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
            {testimonial.avatar}
          </div>
          <div>
            <p className="text-slate-900 font-semibold">{testimonial.name}</p>
            <p className="text-slate-600 text-sm">{testimonial.role}</p>
            <p className="text-slate-400 text-xs">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Chen',
      role: 'Chief Risk Officer',
      company: 'Global Finance & Bank',
      content: 'ContexQ transformed our compliance operations. We went from weeks of manual review to real-time automated checks. The ROI was immediate.',
      avatar: 'SC',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'VP of Operations',
      company: 'International Supply Chain',
      content: 'We had no visibility across our global supply chain until ContexQ. Now we see everything in real-time and catch issues before they become problems.',
      avatar: 'MJ',
      rating: 5
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Chief Medical Officer',
      company: 'Healthcare Network Group',
      content: 'The data integration was seamless. Our team can now access unified patient information across all facilities instantly. Patient care has improved significantly.',
      avatar: 'PP',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CTO',
      company: 'TechCorp Industries',
      content: 'The implementation was smooth with minimal disruption. Their support team is exceptional, always available when we need them.',
      avatar: 'JW',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Director of Strategy',
      company: 'Telecom Solutions Ltd',
      content: 'Best investment we made this year. The analytics insights have helped us make better business decisions. The platform scales effortlessly.',
      avatar: 'LR',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Founder & CEO',
      company: 'FinTech Innovations',
      content: 'From setup to production, everything was handled professionally. The team understood our business needs and delivered exactly what we needed.',
      avatar: 'DK',
      rating: 5
    }
  ];

  return (
    <>
      <style>{testimonialStyles}</style>
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#0d1526] via-[#101e36] to-[#0d1526]">
        {/* Background effects with animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}} />
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-widest">Testimonials</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Loved by Enterprise Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See what our clients say about their experience with ContexQ
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              testimonial={testimonial}
              delay={idx * 50}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 pt-20 border-t border-white/10">
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              500+
            </p>
            <p className="text-gray-300 mt-2">Enterprise Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              98%
            </p>
            <p className="text-gray-300 mt-2">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              $2.3B
            </p>
            <p className="text-gray-300 mt-2">Value Preserved</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              24/7
            </p>
            <p className="text-gray-300 mt-2">Expert Support</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
