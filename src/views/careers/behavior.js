// Generated from public/html/contexq-careers.html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      // ---- page script ----
      try {
(function(){
  // Edit this list to add, remove or update roles.
  const ROLES=[
    {title:"Founding Business Analyst, FinCrime & Risk Data",source:"Wellfound",url:"https://wellfound.com/l/2CK3D7"},
    {title:"Pre-Sales Engineer",source:"Wellfound",url:"https://wellfound.com/l/2CK6g8"},
    {title:"Sr. Knowledge Graph (GT, GNN, GAT) PhD Expert",source:"Cutshort",url:"https://cutshort.io/job/Sr-Knowledge-Graph-GT-GNN-GAT-PhD-Expert-ContexQ-pte-Ltd-P3dX29oM"}
  ];
  const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  document.getElementById("count").textContent=ROLES.length===1?"1 open role":`${ROLES.length} open roles`;
  document.getElementById("roleList").innerHTML=ROLES.map(r=>`
    <a class="role rrow" href="${esc(r.url)}" target="_blank" rel="noopener" aria-label="${esc(r.title)}, apply on ${esc(r.source)} (opens in a new tab)">
      <h3>${esc(r.title)}</h3>
      <span class="btn btn-p" aria-hidden="true">Apply on ${esc(r.source)}</span>
    </a>`).join("");

  const els=document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)||matchMedia("(prefers-reduced-motion: reduce)").matches){els.forEach(e=>e.classList.add("in"))}
  else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});els.forEach(e=>io.observe(e))}
})();
      } catch (err) { console.error('[careers] page script error:', err); }
      return {  };
    }
  })(cq);
}
