// Generated from public/eco-skin/PressReleases.html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-eco-press);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
import "../_shared/eco/eco-hero.css";
export function View() {
  return (
    <ViewShell viewId="eco-press" className="v-eco-press cq-html" lang="en" bodyClassName="cq-body bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary min-h-screen flex flex-col">
      <div id="ecosystem-chrome" data-active="Press" />
      {" "}
      <main className="w-full flex-1 flex flex-col bg-[#F7F9FD]">
        <section className="eco-hero" aria-labelledby="eco-hero-title">
          <div className="eco-hero-inner">
            <h1 id="eco-hero-title">{"Press & Media"}</h1>
            <p className="eco-hero-lede">{"Announcements from ContexQ and coverage from the press."}</p>
            <nav className="eco-hero-links" aria-label="On this page">
              <a className="eco-hero-link" href="#press-releases">
                <span className="eco-hero-link-title">{"Press Releases"}</span>
                <span className="eco-hero-link-note">{"Announcements from ContexQ"}</span>
              </a>
              <a className="eco-hero-link" href="#media">
                <span className="eco-hero-link-title">{"News & Media Coverage"}</span>
                <span className="eco-hero-link-note">{"ContexQ in the press"}</span>
              </a>
            </nav>
          </div>
        </section>
        {" "}
        <section id="press-releases" className="eco-hero-target w-full max-w-[1240px] mx-auto px-gutter md:px-gutter-desktop pt-12 md:pt-16 pb-16">
          <div className="flex items-center justify-between pb-6">
            <h2 className="text-[28px] font-bold text-[#0B1530] tracking-tight font-['Plus_Jakarta_Sans']">Press Releases</h2>
          </div>
          {" "}
          <div className="relative overflow-hidden rounded-2xl bg-white border border-[#E2E8F0] p-8 md:p-10 mb-8 shadow-sm">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 flex flex-col items-start">
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider font-semibold text-[#2F6BFF] mb-3">
                  {" "}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F6BFF]" />
                  {" Featured · Singapore, November 2025 "}
                </span>
                {" "}
                <h3 className="text-2xl md:text-3xl font-bold leading-tight text-[#0B1530] mt-0 mb-4 font-['Plus_Jakarta_Sans']">
                  {" ContexQ Awarded a 312K USD Grant from MAS to Tackle Complex Money Mule Networks with Graph AI "}
                </h3>
                {" "}
                <p className="text-[#475569] text-sm md:text-base mb-6 max-w-2xl leading-relaxed">
                  {" The grant accelerates the deployment of ContexQ's platform, helping financial institutions detect multi-layered financial crime and synthetic corporate identities. "}
                </p>
                {" "}
                <Link prefetch={false} className="bg-[#2F6BFF] hover:bg-[#1E54DC] text-white font-medium px-6 py-2.5 rounded-lg shadow-sm transition inline-flex items-center gap-2 text-sm" href="/Ecosystem/awards/mas-supported-grant">
                  {" "}
                  <span className="">Read the release</span>
                  {" "}
                  <span className="">→</span>
                  {" "}
                </Link>
              </div>
              {" "}
              <div className="hidden md:flex md:col-span-4 items-center justify-center relative">
                <div className="w-56 h-56 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl flex items-center justify-center p-6">
                  <img alt="Monetary Authority of Singapore" className="w-full h-full object-contain" src="/assets/images/Ecosystem/MAS.jpg" />
                </div>
              </div>
            </div>
          </div>
          {" "}
          <div className="flex flex-col gap-6">
            <article className="bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="order-2 md:order-1 md:col-span-7 flex flex-col items-start gap-2.5">
                <time className="text-slate-500 text-sm">Singapore, September 2025</time>
                {" "}
                <h3 className="text-xl font-bold text-[#0B1530] font-['Plus_Jakarta_Sans']">
                  {" Jean-Michel Coeur Joins ContexQ as Co-Founder & CTO to Power the Next Chapter of Contextual AI "}
                </h3>
                {" "}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {" Former global enterprise architect and distributed systems pioneer Jean-Michel Coeur joins ContexQ to spearhead high-throughput graph computing architecture and low-latency sovereign intelligence engines. "}
                </p>
                {" "}
                <div className="pt-2">
                  <Link prefetch={false} className="bg-[#0B1530] hover:bg-[#152347] text-white text-xs md:text-sm font-medium px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-colors" href="/Ecosystem/press-releases/jean-michel-coeur-joins-contexq-co-founder-cto">
                    {" "}
                    <span className="">Read More</span>
                    {" "}
                    <span className="">→</span>
                    {" "}
                  </Link>
                </div>
              </div>
              {" "}
              <div className="order-1 md:order-2 md:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col items-center text-center gap-3">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#2F6BFF] p-0.5 shadow-sm bg-white">
                  <img alt="Jean-Michel Coeur" className="w-full h-full object-cover rounded-full" src="/assets/images/Team/Jean_Michel_Coeur.webp" />
                </div>
                {" "}
                <div>
                  <h4 className="text-sm font-bold text-[#0B1530] font-['Plus_Jakarta_Sans']">Jean-Michel Coeur</h4>
                  {" "}
                  <p className="text-xs text-[#2F6BFF] font-medium">{"Co-Founder & CTO"}</p>
                </div>
                {" "}
                <span className="px-3 py-1 bg-white text-slate-500 rounded border border-slate-200 text-xs font-medium">
                  {" Distributed Graph Architecture Focus "}
                </span>
              </div>
            </article>
            {" "}
            <article className="bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col items-center text-center gap-3">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#2F6BFF] p-0.5 shadow-sm bg-white flex items-center justify-center">
                  <img alt="Jean-Michel Coeur" className="w-full h-full object-cover rounded-full" src="/assets/images/Team/Jean_Michel_Coeur.webp" />
                </div>
                {" "}
                <div>
                  <h4 className="text-sm font-bold text-[#0B1530] font-['Plus_Jakarta_Sans']">Jean-Michel Coeur</h4>
                  {" "}
                  <p className="text-xs text-[#2F6BFF] font-medium">Keynote Speaker</p>
                </div>
                {" "}
                <span className="px-3 py-1 bg-blue-50 text-[#2F6BFF] rounded border border-blue-200 text-xs font-semibold">
                  {" ATxSG 2026 | Singapore EXPO "}
                </span>
              </div>
              {" "}
              <div className="md:col-span-7 flex flex-col items-start gap-2.5">
                <time className="text-slate-500 text-sm">Singapore, April 2025</time>
                {" "}
                <h3 className="text-xl font-bold text-[#0B1530] font-['Plus_Jakarta_Sans']">
                  {" Jean-Michel, CTO, to Speak at Asia Tech x Singapore 2026 "}
                </h3>
                {" "}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {" CTO Jean-Michel Coeur selected to address sovereign tech leaders on 'Deterministic Graph Resolution vs. Probabilistic Hallucination in National Security Infrastructure' at ATxSG 2026. "}
                </p>
                {" "}
                <div className="pt-2">
                  <Link prefetch={false} className="bg-[#0B1530] hover:bg-[#152347] text-white text-xs md:text-sm font-medium px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-colors" href="/Ecosystem/press-releases/jean-michel-cto-speak-asia-tech-x-singapore-2026">
                    {" "}
                    <span className="">Read More</span>
                    {" "}
                    <span className="">→</span>
                    {" "}
                  </Link>
                </div>
              </div>
            </article>
            {" "}
            <article className="bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="order-2 md:order-1 md:col-span-7 flex flex-col items-start gap-2.5">
                <time className="text-slate-500 text-sm">Singapore, April 2025</time>
                {" "}
                <h3 className="text-xl font-bold text-[#0B1530] font-['Plus_Jakarta_Sans']">
                  {" ContexQ Appoints Partha Dasgupta as Chief Mentor & Head of Business Development, India & Middle East "}
                </h3>
                {" "}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {" Eminent economist and institutional governance authority Partha Dasgupta joins ContexQ as Chief Mentor to guide macroeconomic risk modeling and algorithmic accountability frameworks. "}
                </p>
                {" "}
                <div className="pt-2">
                  <Link prefetch={false} className="bg-[#0B1530] hover:bg-[#152347] text-white text-xs md:text-sm font-medium px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-colors" href="/Ecosystem/press-releases/partha-dasgupta-appointed-chief-mentor">
                    {" "}
                    <span className="">Read More</span>
                    {" "}
                    <span className="">→</span>
                    {" "}
                  </Link>
                </div>
              </div>
              {" "}
              <div className="order-1 md:order-2 md:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col items-center text-center gap-3">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#2F6BFF] p-0.5 shadow-sm bg-white">
                  <img alt="Professor Partha Dasgupta" className="w-full h-full object-cover rounded-full" src="/assets/images/Ecosystem/Partha-DasGupta.jpg" />
                </div>
                {" "}
                <div>
                  <h4 className="text-sm font-bold text-[#0B1530] font-['Plus_Jakarta_Sans']">Professor Partha Dasgupta</h4>
                  {" "}
                  <p className="text-xs text-[#2F6BFF] font-medium">{"Chief Mentor & Institutional Advisor"}</p>
                </div>
                {" "}
                <span className="px-3 py-1 bg-white text-slate-500 rounded border border-slate-200 text-xs font-medium">
                  {" Macroeconomic Risk & Algorithmic Governance "}
                </span>
              </div>
            </article>
          </div>
        </section>
        {" "}
        <section id="media" className="eco-hero-target w-full bg-[#F4F6FA] py-12 md:py-16 border-t border-slate-200/80">
          <div className="w-full max-w-[1240px] mx-auto px-gutter md:px-gutter-desktop">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-x-8 items-baseline">
              <div className="md:col-span-6">
                <h2 className="text-[28px] font-bold text-[#0B1530] tracking-tight font-['Plus_Jakarta_Sans']">
                  {"News & Media Coverage"}
                </h2>
              </div>
              {" "}
              <div className="md:col-span-6">
                <p className="text-base text-slate-600 leading-relaxed">{" ContexQ in the press. "}</p>
              </div>
            </div>
            {" "}
            <div className="mt-8 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm py-14 px-6 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              {" "}
              <h3 className="text-lg font-bold text-[#0B1530] font-['Plus_Jakarta_Sans']">Media coverage is coming soon</h3>
              {" "}
              <p className="text-sm text-slate-500 max-w-md">
                Verified press features, global media mentions, and publication interviews will appear here.
              </p>
            </div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
