// Generated from public/html/contexq-mfg-v2.html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      // ---- page script ----
      try {
document.getElementById('hero-animation-frame').srcdoc = document.getElementById('hero-animation-document').innerHTML;
      } catch (err) { console.error('[industry-mfg] page script error:', err); }
      // ---- page script ----
    let currentTabIndex = 0;
    const totalTabs = 3;
    const progressWidths = ['0%', '50%', '100%'];

    function switchJourneyTab(index) {
      currentTabIndex = index;

      // Update progress bar
      const progressBar = document.getElementById('progress-bar');
      if (progressBar) {
        progressBar.style.width = progressWidths[index];
      }

      // Update Tab Buttons
      for (let i = 0; i < totalTabs; i++) {
        const btn = document.getElementById(`tab-${i}`);
        const panel = document.getElementById(`panel-${i}`);
        const circle = btn.querySelector('.stop-icon-circle');

        if (i === index) {
          btn.setAttribute('aria-selected', 'true');
          btn.setAttribute('tabindex', '0');
          circle.className = 'stop-icon-circle w-[72px] h-[72px] rounded-[9999px] flex items-center justify-center transition-all duration-200 bg-status-blue text-white ring-4 ring-[#328CFF]/20';
          panel.classList.remove('hidden');
        } else {
          btn.setAttribute('aria-selected', 'false');
          btn.setAttribute('tabindex', '-1');
          circle.className = 'stop-icon-circle w-[72px] h-[72px] rounded-[9999px] flex items-center justify-center transition-all duration-200 bg-white border border-[#D9E1EC] text-text-muted-on-light';
          panel.classList.add('hidden');
        }
      }
    }

    // Keyboard Arrow Navigation for tabs
    document.addEventListener('keydown', function(event) {
      const activeEl = document.activeElement;
      if (activeEl && activeEl.getAttribute('role') === 'tab') {
        let newIndex = currentTabIndex;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
          event.preventDefault();
          newIndex = (currentTabIndex + 1) % totalTabs;
          switchJourneyTab(newIndex);
          document.getElementById(`tab-${newIndex}`).focus();
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
          event.preventDefault();
          newIndex = (currentTabIndex - 1 + totalTabs) % totalTabs;
          switchJourneyTab(newIndex);
          document.getElementById(`tab-${newIndex}`).focus();
        }
      }
    });

    // Initial setup
    document.addEventListener('DOMContentLoaded', function() {
      switchJourneyTab(0);
    });
      // ---- page script ----
      try {
document.addEventListener('DOMContentLoaded',()=>{
 const canvas=document.querySelector('.aspect-video');
 const play=canvas?.querySelector('.material-symbols-outlined');
 const status=document.querySelector('.aspect-video .absolute.bottom-4');
 let running=false;
 function setRunning(value){running=value;if(play){play.textContent=running?'pause':'play_arrow';play.closest('.rounded-full')?.classList.toggle('is-running',running)}if(status){const label=status.querySelector('span');if(label)label.innerHTML='<span class="w-1.5 h-1.5 rounded-full bg-[#2FB67C]"></span> '+(running?'SIMULATION RUNNING':'GRAPH ACTIVE')}canvas?.setAttribute('aria-label',running?'Pause supply chain trace simulation':'Play supply chain trace simulation')}
 canvas?.setAttribute('role','button');canvas?.setAttribute('tabindex','0');canvas?.setAttribute('aria-label','Play supply chain trace simulation');canvas?.addEventListener('click',()=>setRunning(!running));canvas?.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setRunning(!running)}});
 document.querySelectorAll('button').forEach(button=>{const label=button.textContent.trim().toLowerCase();button.addEventListener('click',()=>{if(label.includes('pause'))setRunning(false);if(label.includes('replay')){setRunning(false);canvas?.animate([{opacity:.45},{opacity:1}],{duration:500})}})});
});
      } catch (err) { console.error('[industry-mfg] page script error:', err); }
      // ---- page script ----
      try {
(() => {
  const regData = {
    trade: { headline: 'Check suppliers and their owners against sanctions and denied-party lists.', pills: ['OFAC sanctions', 'EU sanctions', 'UK sanctions', 'US Entity List', 'ITAR and EAR'] },
    human: { headline: 'Show where materials come from and who handled them along the way.', pills: ['UFLPA', 'EU CSDDD', 'EU Forced Labour Regulation', 'German Supply Chain Act'] },
    sourcing: { headline: 'Trace minerals and materials back to the smelters and mines behind them.', pills: ['Conflict minerals (3TG)', 'EU Conflict Minerals Regulation', 'EU CBAM', 'EU Deforestation Regulation'] },
    bribery: { headline: 'See who really owns and controls the companies you pay.', pills: ['US FCPA', 'UK Bribery Act', 'Beneficial ownership checks'] },
    quality: { headline: 'Trace a defect back to the plant and supplier it came from.', pills: ['ISO 9001', 'IATF 16949', 'AS9100'] }
  };
  const activeChip = 'reg-chip px-5 py-2.5 rounded-full text-sm font-semibold transition-colors bg-[#328CFF] text-white border border-[#328CFF] shadow-sm';
  const idleChip = 'reg-chip px-5 py-2.5 rounded-full text-sm font-semibold transition-colors bg-white border border-[#51627A]/20 text-[#0B1A2A] hover:bg-[#51627A]/10';
  const pillClass = 'px-3.5 py-1.5 rounded-lg bg-[#F4F7FB] border border-[#51627A]/20 text-xs font-semibold text-[#0B1A2A]';
  const headline = document.getElementById('regHeadline');
  const pills = document.getElementById('regPills');
  const chips = document.querySelectorAll('.reg-chip');
  chips.forEach(chip => chip.addEventListener('click', () => {
    const data = regData[chip.dataset.reg];
    chips.forEach(c => { const on = c === chip; c.className = on ? activeChip : idleChip; c.setAttribute('aria-selected', on); });
    headline.textContent = data.headline;
    pills.innerHTML = '';
    data.pills.forEach(name => { const s = document.createElement('span'); s.className = pillClass; s.textContent = name; pills.appendChild(s); });
  }));
})();
      } catch (err) { console.error('[industry-mfg] page script error:', err); }
      // ---- page script ----
      try {
document.querySelectorAll('.data-list-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const list = document.getElementById(btn.getAttribute('aria-controls'));
    const open = list.classList.toggle('hidden') === false;
    btn.setAttribute('aria-expanded', open);
    btn.children[0].textContent = open ? 'Show less' : 'See the full list';
    btn.children[1].style.transform = open ? 'rotate(180deg)' : '';
  });
});
      } catch (err) { console.error('[industry-mfg] page script error:', err); }
      // ---- page script ----
      try {
/* Journey auto-play: steps through the three stages on its own while the section is on screen.
   Pauses while a keyboard user is focused inside the section; clicking a stage restarts the timer.
   Turned off for visitors who ask for reduced motion. Uses the page's existing switchJourneyTab(). */
(() => {
  const section = document.getElementById('journey-section');
  if (!section || typeof switchJourneyTab !== 'function') return;
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const DELAY = 1800;
  let timer = null, inView = false, keyboardFocus = false;
  const stop = () => { clearInterval(timer); timer = null; };
  const start = () => {
    stop();
    if (inView && !keyboardFocus) timer = setInterval(() => switchJourneyTab((currentTabIndex + 1) % totalTabs), DELAY);
  };
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; start(); }, { threshold: 0.35 }).observe(section);
  }
  section.addEventListener('focusin', e => { if (e.target.matches(':focus-visible')) { keyboardFocus = true; stop(); } });
  section.addEventListener('focusout', e => { if (!section.contains(e.relatedTarget)) { keyboardFocus = false; start(); } });
  section.querySelectorAll('[role="tab"]').forEach(tab => tab.addEventListener('click', start));
})();
      } catch (err) { console.error('[industry-mfg] page script error:', err); }
      return { switchJourneyTab: typeof switchJourneyTab === 'function' ? switchJourneyTab : undefined };
    }
  })(cq);
}
