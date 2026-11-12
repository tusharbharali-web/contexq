"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Play, CheckCircle2, AlertCircle } from "lucide-react";

interface SolutionData {
  title: string;
  subtitle: string;
  problems: { problem: string; solution: string }[];
  capabilities: { title: string; description: string; impact: string }[];
  caseStudies: { company: string; result: string; quote: string }[];
  faqs: { q: string; a: string }[];
}

export default function SolutionTemplate({ data }: { data: SolutionData }) {
  const [activeCap, setActiveCap] = useState(0);

  return (
    <div className="min-h-screen bg-[#02060f] text-slate-200 font-sans selection:bg-sky-500/30 overflow-x-hidden">
      {/* GLOW BACKGROUNDS */}
      <div className="fixed inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-sky-600 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-sky-900 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          The Outcome
        </motion.div>
        
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {data.title}
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {data.subtitle}
        </motion.p>
      </section>

      {/* PROBLEM - SOLUTION (Vertical Scroll Sync) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-16 text-center opacity-80 uppercase tracking-widest text-sm">Identifying & Resolving Friction</h2>
        
        <div className="space-y-32">
          {data.problems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Problem Pane */}
              <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(239, 68, 68, 0.1)]">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
                  <AlertCircle size={24} />
                </div>
                <h3 className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">The Challenge</h3>
                <p className="text-xl md:text-2xl font-medium text-slate-100 leading-relaxed">{item.problem}</p>
              </div>

              {/* Solution Pane */}
              <div className="group p-8 rounded-2xl bg-sky-500/5 border border-sky-500/20 hover:border-sky-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(14, 165, 233, 0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <ArrowRight size={80} className="-rotate-45" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-500 mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-sky-400 text-sm font-bold uppercase tracking-widest mb-4">Our Innovation</h3>
                <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">{item.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES (TAB Toggle) */}
      <section className="py-24 bg-gradient-to-b from-[#02040a] to-black/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Critical Capabilities</h2>
            <p className="text-slate-400">Master the logic behind every outcome.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 min-h-[450px]">
             {/* Left Nav */}
             <div className="lg:col-span-4 grid grid-cols-1 gap-4">
                {data.capabilities.map((cap, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCap(i)}
                    className={`group relative text-left p-6 rounded-2xl border transition-all duration-500 overflow-hidden ${
                      activeCap === i 
                      ? "bg-sky-500/10 border-sky-500/50 text-white shadow-[0_0_30px_rgba(14,165,233,0.15)]" 
                      : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/[0.08] hover:border-white/20"
                    }`}
                  >
                    {/* Active Indicator Line */}
                    {activeCap === i && (
                      <motion.div 
                        layoutId="activeTabLine"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-sky-400"
                      />
                    )}
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-[10px] font-mono tracking-tighter opacity-50 uppercase">Module-0{i+1}</span>
                       {activeCap === i && <div className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />}
                    </div>
                    <span className="text-xl font-bold tracking-tight">{cap.title}</span>
                  </button>
                ))}
            </div>

            {/* Capability Detail Display */}
            <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCap}
                    initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="h-full p-10 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden flex flex-col justify-center"
                  >
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                       <Play size={200} fill="currentColor" className="text-sky-400" />
                    </div>

                    <div className="inline-flex p-4 rounded-2xl bg-sky-500/20 text-sky-400 mb-8 w-fit shadow-[0_0_20px_rgba(14,165,233,0.2)]">
                      <Play size={24} fill="currentColor" />
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">{data.capabilities[activeCap].title}</h3>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-12">{data.capabilities[activeCap].description}</p>
                    
                    <div className="pt-10 border-t border-white/10 mt-auto">
                      <p className="text-sky-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Metric Transformation Impact</p>
                      <div className="flex items-baseline gap-3">
                         <p className="text-3xl font-bold text-white">{data.capabilities[activeCap].impact}</p>
                         <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
             </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
           Proof in Action <span className="h-[2px] flex-grow bg-white/5" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.caseStudies.map((cs, i) => (
            <motion.div 
               key={i}
               whileHover={{ y: -10 }}
               className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all relative group"
            >
               <h4 className="text-sky-500 font-bold text-sm uppercase tracking-widest mb-6">{cs.company}</h4>
               <p className="text-2xl font-bold text-white mb-4">"{cs.result}"</p>
               <p className="text-slate-400 italic mb-8">"{cs.quote}"</p>
               <button className="flex items-center gap-2 text-sky-400 font-semibold group-hover:underline">
                  Full Story <ArrowRight size={16} />
               </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-black/40">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold text-white mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {data.faqs.map((faq, i) => (
              <details key={i} className="group p-6 rounded-xl bg-white/5 border border-white/10 open:bg-sky-500/5 open:border-sky-500/20 transition-all cursor-pointer">
                <summary className="flex items-center justify-between text-xl font-medium text-white list-none">
                  {faq.q}
                  <span className="block transition-transform group-open:rotate-180"><ChevronDown /></span>
                </summary>
                <p className="pt-6 text-slate-400 leading-relaxed text-lg animate-fadeIn">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 p-16 rounded-[40px] bg-gradient-to-br from-sky-600/20 to-sky-900/20 border border-sky-500/30 backdrop-blur-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Elevate Your Strategy?</h2>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(14, 165, 233, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 rounded-full bg-sky-500/10 border-2 border-sky-500/40 text-white font-bold text-xl backdrop-blur-md transition-all"
          >
            Request Full Insight Demo
          </motion.button>
        </div>
      </section>
      
      <footer className="py-12 text-center text-slate-500 border-t border-white/5 text-sm">
        &copy; {new Date().getFullYear()} ContexQ Ecosystem. All rights reserved.
      </footer>
    </div>
  );
}
