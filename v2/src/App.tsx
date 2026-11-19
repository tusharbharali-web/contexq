import { useState } from 'react';
import { ChatWidget } from './components/chatbot/ChatWidget';
import { 
  ArrowRight, 
  Sparkles, 
  Cloud, 
  Users, 
  Layers, 
  Lightbulb, 
  Building2, 
  Mouse
} from 'lucide-react';

export function App() {
  const [activeSlice, setActiveSlice] = useState<string>('Solutions');
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const slices = [
    { name: 'Ecosystem', icon: Cloud, desc: 'Connecting internal silos with global registry and risk data fabrics.' },
    { name: 'Team', icon: Users, desc: 'Empowering risk analysts and compliance officers with graph intelligence.' },
    { name: 'Platform', icon: Layers, desc: 'SarasW Composite Graph Engine with native cross-script entity resolution.' },
    { name: 'Solutions', icon: Lightbulb, desc: 'Supply Chain Intelligence, Money Mule Detection, and AML Screening.' },
    { name: 'Industries', icon: Building2, desc: 'Tailored for Banking, Insurance, Supply Chain, and Government.' }
  ];

  return (
    <div className="min-h-screen bg-[#06111F] text-white font-sans overflow-x-hidden selection:bg-[#328CFF]/30 selection:text-[#328CFF] relative">
      {/* Background Map & Constellation Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="world-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#328CFF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#06111F" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#world-glow)" />
          {/* Subtle network constellation lines */}
          <line x1="10%" y1="20%" x2="40%" y2="50%" stroke="#328CFF" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="4 4" />
          <line x1="40%" y1="50%" x2="80%" y2="30%" stroke="#328CFF" strokeWidth="0.5" strokeOpacity="0.3" />
          <line x1="80%" y1="30%" x2="90%" y2="70%" stroke="#328CFF" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="3 3" />
          <line x1="30%" y1="80%" x2="60%" y2="60%" stroke="#328CFF" strokeWidth="0.5" strokeOpacity="0.3" />
        </svg>
      </div>

      {/* Top Navbar */}
      <header className="relative z-30 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Exact Logo from contexq.com */}
        <div className="flex flex-col">
          <div className="flex items-center text-2xl font-bold tracking-wider">
            <span className="text-white">CONTEX</span>
            <span className="relative text-white flex items-center">
              Q
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] absolute top-[45%] left-[38%]"></span>
            </span>
          </div>
          <span className="text-[10px] tracking-widest text-[#687B91] font-mono -mt-1">
            Context in every decision
          </span>
        </div>

        {/* Top Right "Get Started" */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="px-6 py-2 rounded-xl bg-[#328CFF] hover:bg-[#2574E0] active:scale-95 text-white text-sm font-semibold shadow-launcher transition-all"
        >
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <main className="relative z-20 max-w-7xl mx-auto px-6 pt-6 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-140px)]">
        {/* Left Column: Hero Text */}
        <div className="lg:col-span-6 space-y-6">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08182B] border border-[#328CFF]/30 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#328CFF] animate-pulse"></span>
            <span>Graph Intelligence Platform — SarasW by ContexQ</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15]">
            We are a{' '}
            <span className="text-[#328CFF]">technology AI startup</span>{' '}
            leapfrogging the way businesses{' '}
            <span className="text-white">maximise their data value</span>.
          </h1>

          {/* Subheading paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-xl">
            <p>
              By connecting entities, signals and relationships, we help businesses uncover insights that would otherwise remain hidden.
            </p>
            <p className="text-xs sm:text-sm text-[#687B91]">
              Your data isn't incomplete. It's <strong className="text-slate-200">underread</strong>. ContexQ finds connections and signals across every dimension, then enriches your data with real-world intelligence to surface what matters most, from opportunity to risk.
            </p>
          </div>

          {/* Action Button & Slices Helper */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <button
              onClick={() => setIsChatOpen(true)}
              className="px-7 py-3 rounded-xl bg-[#328CFF] hover:bg-[#2574E0] active:scale-95 text-white text-sm font-semibold shadow-launcher transition-all flex items-center gap-2"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5 text-xs text-[#687B91] font-mono tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#328CFF]" />
              <span>✦ CLICK A SLICE ➔</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Segmented Ring & Interactive Graph Hub */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] flex items-center justify-center">
            {/* Outer Circular Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-slate-700/40 shadow-[0_0_60px_rgba(50,140,255,0.15)] animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-[#328CFF]/20"></div>

            {/* Segmented Slices Navigation */}
            {slices.map((slice, idx) => {
              const angle = (idx / slices.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 150;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isSelected = activeSlice === slice.name;
              const Icon = slice.icon;

              return (
                <button
                  key={slice.name}
                  onClick={() => setActiveSlice(slice.name)}
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                  className={`absolute p-3 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-300 z-20 group ${
                    isSelected
                      ? 'bg-[#328CFF] text-white shadow-launcher scale-110 ring-4 ring-[#328CFF]/30'
                      : 'bg-[#08182B] text-slate-300 border border-slate-700/80 hover:bg-[#0c223c] hover:border-[#328CFF]/60'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-[#328CFF] group-hover:scale-110 transition-transform'}`} />
                  <span className="text-[11px] font-semibold tracking-wide">{slice.name}</span>
                </button>
              );
            })}

            {/* Center Core: "CUSTOMERS" */}
            <div className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-b from-[#0c223c] to-[#06111F] border-2 border-[#328CFF] shadow-[0_0_30px_rgba(50,140,255,0.4)] flex flex-col items-center justify-center text-center p-2">
              <span className="text-[10px] font-mono tracking-widest text-[#328CFF] uppercase font-semibold">Core Focus</span>
              <span className="text-xs font-extrabold tracking-wider text-white">CUSTOMERS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 animate-ping"></span>
            </div>
          </div>

          {/* Active Slice Description Card */}
          <div className="mt-6 p-4 rounded-2xl bg-[#08182B]/90 border border-slate-700/80 max-w-sm text-center backdrop-blur-md shadow-xl animate-in fade-in">
            <span className="text-[10px] font-mono uppercase text-[#328CFF] font-semibold tracking-wider">
              Selected Dimension: {activeSlice}
            </span>
            <p className="text-xs text-slate-300 mt-1">
              {slices.find(s => s.name === activeSlice)?.desc}
            </p>
          </div>
        </div>
      </main>

      {/* Scroll Down Indicator */}
      <div className="w-full flex flex-col items-center justify-center pb-8 text-[#687B91] space-y-1">
        <span className="text-[10px] uppercase font-mono tracking-widest">SCROLL DOWN</span>
        <Mouse className="w-4 h-4 animate-bounce text-[#328CFF]" />
      </div>

      {/* Floating ContexQ AI Chatbot Widget */}
      <ChatWidget initialOpen={isChatOpen} />
    </div>
  );
}

export default App;
