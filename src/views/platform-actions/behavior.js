// Generated from public/html/contexq-decision-intelligence.html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      // ---- page script ----
      try {
(()=>{
const RM=matchMedia('(prefers-reduced-motion: reduce)');
const hv=document.getElementById('hv'),cap=document.getElementById('hvCap'),pb=document.getElementById('hvPause');
const CAP=['Data from your systems and outside sources flows into ContexQ.',
 'ContexQ resolves the people and companies in it and builds a graph of how they connect.',
 'From the graph, it suggests next steps, ranked, each with the evidence behind it.',
 'Your team approves a step, and it is handed to the people or systems that carry it out.'];
let s=RM.matches?3:0,play=!RM.matches,vis=true,tm=null;
const bsvg=document.getElementById('hvSvg'),NS='http://www.w3.org/2000/svg';let blay='';
const mkS=(tag,at,p)=>{const e=document.createElementNS(NS,tag);for(const k in at)e.setAttribute(k,at[k]);(p||bsvg).appendChild(e);return e};
const ICN={alert:'M0 -6 L6 5 H-6 Z M0 -2 V1 M0 3 V3.2',doc:'M-5 -7 H3 L6 -4 V7 H-5 Z M-2 -1 H3 M-2 2 H3',users:'M-3 -3 m-2.5 0 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0 M-8 6 Q-3 0 2 6 M4 -4 m-2 0 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0 M3 1 Q6 0 8 5',news:'M-6 -5 H6 V6 H-6 Z M-3 -2 H3 M-3 1 H3 M-3 4 H1',gap:'M0 -6 a6 6 0 1 0 0.01 0 M-2 -2 a2 2 0 1 1 2 2 v1.5 M0 4 v.2',bulb:'M0 -7 a5 5 0 0 1 3 9 v2 h-6 v-2 a5 5 0 0 1 3 -9 M-2 6 h4',check:'M-5 0 l3 3 l7 -7'};
function bcard(cls,x,y,w,h,icon,k,t,col){const g=mkS('g',{class:'bc '+cls});mkS('rect',{x,y,width:w,height:h,rx:10},g);
 mkS('circle',{cx:x+20,cy:y+h/2,r:12,class:'bci'},g);mkS('path',{d:ICN[icon],transform:`translate(${x+20} ${y+h/2})`,class:'bcp',stroke:col||'#bfe3ff'},g);
 const a=mkS('text',{class:'k',x:x+40,y:y+h/2-4},g);a.textContent=k;const b=mkS('text',{class:'t',x:x+40,y:y+h/2+11},g);b.textContent=t;return g}
function cqGlobe(cx,cy,sc){
 const r=86*sc,g=mkS('g',{class:'cqglobe'});
 mkS('circle',{cx,cy,r:r*2.4,fill:'url(#bHalo)'},g);
 mkS('circle',{cx,cy,r,fill:'url(#bFill)'},g);
 let d1='',d2='',d3='';for(let i=0;i<760;i++){const y=1-i/759*2,rr=Math.sqrt(1-y*y),a=i*2.399963,x=Math.cos(a)*rr,z=Math.sin(a)*rr,ry=y*Math.cos(.38)-z*Math.sin(.38),rz=y*Math.sin(.38)+z*Math.cos(.38);if(rz<-.1)continue;
  const px=cx+x*r,py=cy-ry*r,s=(.55+(rz+1)*.6).toFixed(2),dot=`M${(px-s).toFixed(1)} ${py.toFixed(1)}a${s} ${s} 0 1 0 ${2*s} 0a${s} ${s} 0 1 0 ${-2*s} 0`;if(rz>.55)d1+=dot;else if(rz>.15)d2+=dot;else d3+=dot}
 mkS('path',{d:d3,fill:'#3f8fd8',opacity:.55},g);mkS('path',{d:d2,fill:'#7cc8f5',opacity:.85},g);mkS('path',{d:d1,fill:'#eefcff'},g);
 mkS('circle',{cx,cy,r:r+1.5,fill:'none',stroke:'#bff1ff','stroke-width':1.6,opacity:.85,filter:'url(#bGlow)'},g);
 const o1=`M${cx-r*1.55} ${cy} a${r*1.55} ${r*.4} 0 1 0 ${r*3.1} 0 a${r*1.55} ${r*.4} 0 1 0 ${-r*3.1} 0`;
 mkS('path',{d:o1,fill:'none',stroke:'#7cdef2','stroke-width':1.2,opacity:.6,transform:`rotate(-14 ${cx} ${cy})`},g);
 mkS('ellipse',{cx,cy,rx:r*1.32,ry:r*.3,fill:'none',stroke:'#5bb6f8','stroke-width':1,opacity:.45,'stroke-dasharray':'3 5',transform:`rotate(16 ${cx} ${cy})`},g);
 const sg=mkS('g',{transform:`rotate(-14 ${cx} ${cy})`},g),sat=mkS('circle',{r:3.4,fill:'#f2fdff',filter:'url(#bGlow)'},sg);
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches)mkS('animateMotion',{dur:'9s',repeatCount:'indefinite',path:o1},sat);else{sat.setAttribute('cx',cx+r*1.55);sat.setAttribute('cy',cy)}
 const lb=mkS('text',{x:cx,y:cy+r+30,'text-anchor':'middle','font-size':18,'font-weight':700,fill:'#f2fbff',filter:'url(#bGlow)'},g);lb.innerHTML='Contex<tspan fill="#ff8a5c">Q</tspan>';
}
const BL={d:{W:640,H:400,b:[230,186,.6],src:[[10,34],[10,96],[10,158],[10,220],[10,282]],sw:148,sh:46,graph:[364,190],rec:[470,70,160],recH:62},
 m:{W:360,H:680,b:[180,212,.56],src:[[12,12],[184,12],[12,62],[184,62],[98,112]],sw:164,sh:42,graph:[180,352],rec:[16,446,328],recH:52}};
const SRC=[['users','INTERNAL','Customer records'],['doc','INTERNAL','Transactions'],['doc','EXTERNAL','Company registries'],['news','EXTERNAL','News & media'],['alert','EXTERNAL','Watchlists']];
const REC=[['REVIEW','Examine connections','High priority'],['REQUEST','Ask for missing info','Medium priority'],['MONITOR','Reassess on new data','Low priority']];
function bbuild(){
 const k=matchMedia('(max-width:560px)').matches?'m':'d';if(k===blay)return;blay=k;const c=BL[k],m=k==='m';bsvg.innerHTML='';bsvg.setAttribute('viewBox',`0 0 ${c.W} ${c.H}`);
 mkS('defs',{}).innerHTML=`<radialGradient id="bHalo"><stop offset="0" stop-color="#7cdef2" stop-opacity=".38"/><stop offset=".5" stop-color="#2f86ff" stop-opacity=".12"/><stop offset="1" stop-color="#2f86ff" stop-opacity="0"/></radialGradient>
 <radialGradient id="bFill" cx=".38" cy=".34" r=".75"><stop offset="0" stop-color="#2a7fd0" stop-opacity=".6"/><stop offset=".6" stop-color="#0d3a6e" stop-opacity=".55"/><stop offset="1" stop-color="#061a33" stop-opacity=".3"/></radialGradient>
 <linearGradient id="streamC" x1="0" x2="1"><stop offset="0" stop-color="#62d7f6" stop-opacity=".25"/><stop offset="1" stop-color="#9fe8ff"/></linearGradient>
 <filter id="bGlow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
 <pattern id="pcb" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M0 20 H14 L20 14 V0 M40 26 H26 L22 30 V40" fill="none" stroke="#17305a" stroke-width="1"/><circle cx="20" cy="14" r="1.6" fill="#1f3e6e"/><circle cx="22" cy="30" r="1.6" fill="#1f3e6e"/></pattern>`;
 mkS('rect',{width:c.W,height:c.H,fill:'url(#pcb)',opacity:.8});
 const [bx,by,bs]=c.b,r=86*bs,streams=mkS('g',{}),S=(cls,d)=>mkS('path',{class:'st '+cls,d},streams);
 c.src.forEach(([x,y])=>{const a=m?[x+c.sw/2,y+c.sh]:[x+c.sw,y+c.sh/2],b=m?[bx,by-r-4]:[bx-r-4,by];S('s-in',m?`M${a[0]} ${a[1]} C ${a[0]} ${a[1]+30}, ${b[0]} ${b[1]-40}, ${b[0]} ${b[1]}`:`M${a[0]} ${a[1]} C ${a[0]+40} ${a[1]}, ${b[0]-40} ${b[1]}, ${b[0]} ${b[1]}`)});
 const [gx,gy]=c.graph,gg=mkS('g',{class:'graph'});
 const N=m?[['Customer',0,0,'c'],['Company',-92,-34,''],['Director',-20,-58,''],['Supplier',78,-30,'k'],['Account',-110,30,''],['Address',-34,48,''],['News',118,28,'k']]
          :[['Customer',0,0,'c'],['Company',-50,-70,''],['Director',36,-84,''],['Supplier',62,-8,'k'],['Account',-62,40,''],['Address',0,82,''],['News',70,72,'k']];
 const E=[[0,1,''],[0,4,''],[0,3,'k'],[1,2,''],[2,3,'k'],[3,6,'k'],[4,5,''],[0,5,'']];
 mkS('circle',{cx:gx,cy:gy,r:m?96:112,class:'ghalo'},gg);
 const bd=m?`M${bx} ${by+r+30} C ${bx} ${gy-90}, ${gx} ${gy-60}, ${gx} ${gy-14}`:`M${bx+r+4} ${by} C ${bx+r+40} ${by}, ${gx-50} ${gy}, ${gx-14} ${gy}`;
 mkS('path',{d:bd,class:'gbeam'},gg);S('s-gr',bd);
 E.forEach(([a,b2,t],n)=>{const A=N[a],B=N[b2],e=mkS('line',{x1:gx+A[1],y1:gy+A[2],x2:gx+B[1],y2:gy+B[2],class:'ge'+(t?' gek':'')},gg);const L=Math.hypot(B[1]-A[1],B[2]-A[2]);e.style.strokeDasharray=L;e.style.setProperty('--L',L);e.style.transitionDelay=(.35+n*.12).toFixed(2)+'s'});
 N.forEach(([lab,x,y,t],n)=>{const g=mkS('g',{class:'gnode '+t,style:`transition-delay:${(.15+n*.1).toFixed(2)}s`},gg);
  mkS('circle',{cx:gx+x,cy:gy+y,r:t==='c'?12:8,class:'gn'},g);if(t==='c')mkS('circle',{cx:gx+x,cy:gy+y,r:18,class:'gring'},g);
  const tx=mkS('text',{x:gx+x,y:gy+y+(t==='c'?28:20),'text-anchor':'middle',class:'glbl'},g);tx.textContent=lab});
 const gl=mkS('text',{x:gx,y:m?gy+82:gy+122,'text-anchor':'middle',class:'glab'},gg);gl.textContent='CONNECTED GRAPH';
 const [rx,ry,rw]=c.rec,rh=c.recH,rt=mkS('text',{x:rx,y:ry-10,class:'rtl'});rt.textContent='RECOMMENDATIONS';
 REC.forEach((q,i)=>{const y=ry+i*(rh+10);S('s-rc s'+i,m?`M${gx} ${gy+64} C ${gx} ${y-20}, ${rx+rw/2} ${y-20}, ${rx+rw/2} ${y}`:`M${gx+60} ${gy+(i-1)*10} C ${gx+80} ${gy}, ${rx-30} ${y+rh/2}, ${rx} ${y+rh/2}`);
  const g=mkS('g',{class:'bc rcd r'+i});mkS('rect',{x:rx,y,width:rw,height:rh,rx:10},g);
  const kk=mkS('text',{class:'k',x:rx+12,y:y+17},g);kk.textContent=q[0];const tt=mkS('text',{class:'t',x:rx+12,y:y+33},g);tt.textContent=q[1];
  const pr=mkS('text',{class:'pr',x:rx+12,y:y+rh-9},g);pr.textContent=q[2];
  const pbr=mkS('g',{class:'pbar'},g);mkS('rect',{x:rx+rw-46,y:y+rh-16,width:34,height:5,rx:2.5,class:'pbg'},pbr);mkS('rect',{x:rx+rw-46,y:y+rh-16,width:[34,22,11][i],height:5,rx:2.5,class:'pfg p'+i},pbr);
  if(i===0){const ok=mkS('g',{class:'okb'},g);mkS('rect',{x:rx+rw-82,y:y+rh-22,width:72,height:17,rx:8.5},ok);const ot=mkS('text',{x:rx+rw-46,y:y+rh-10,'text-anchor':'middle'},ok);ot.textContent='✓ Approved'}});
 const hy=ry+3*(rh+10)+(m?2:4),hd=mkS('g',{class:'bc hand'});mkS('rect',{x:rx,y:hy,width:rw,height:m?40:44,rx:10},hd);
 const h1=mkS('text',{class:'k',x:rx+12,y:hy+16},hd);h1.textContent='HANDED TO';const h2=mkS('text',{class:'t',x:rx+12,y:hy+31},hd);h2.textContent='Owning team · in progress';h2.setAttribute('font-size',m?12:12.5)
 S('s-ac',`M${rx+rw/2} ${ry+rh} C ${rx+rw+(m?0:18)} ${ry+rh+40}, ${rx+rw+(m?0:18)} ${hy-20}, ${rx+rw/2} ${hy}`);
 c.src.forEach((pos,i)=>bcard('src',pos[0],pos[1],c.sw,c.sh,...SRC[i],i<2?'#bfe3ff':'#9fe8ff'));
 cqGlobe(bx,by,bs);
}
new ResizeObserver(bbuild).observe(hv);bbuild();

function hr(){hv.dataset.s=s;cap.textContent=CAP[s];hv.querySelectorAll('.hv-steps button').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.s===s)));pb.textContent=play?'Pause':'Play';hv.classList.toggle('paused',!play);pb.setAttribute('aria-label',play?'Pause animation':'Play animation')}
function hs(){clearTimeout(tm);if(play&&vis&&!document.hidden)tm=setTimeout(()=>{s=(s+1)%4;hr();hs()},[3600,4600,4600,6400][s])}
hv.querySelectorAll('.hv-steps button').forEach(b=>b.addEventListener('click',()=>{s=+b.dataset.s;hr();hs()}));
pb.addEventListener('click',()=>{play=!play;hr();hs()});document.getElementById('hvReplay').addEventListener('click',()=>{s=RM.matches?3:0;play=!RM.matches;hr();hs()});
new IntersectionObserver(e=>{vis=e[0].isIntersecting;hs()},{threshold:.2}).observe(hv);document.addEventListener('visibilitychange',hs);
hr();hs();

const fc=document.getElementById('fc'),fb=[...fc.querySelectorAll('.fc-rail button[data-s]')],fp=document.getElementById('fcPause'),DUR=[6500,5500,6000];
let fs=0,fplay=!RM.matches,fvis=false,ftm=null;
function frender(){fc.dataset.s=fs;fb.forEach((b,i)=>{if(i===fs)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');b.classList.toggle('done',i<fs);b.style.setProperty('--d',DUR[i]+'ms');const bar=b.querySelector('.fc-bar i');bar.style.animation='none';void bar.offsetWidth;bar.style.animation=''});
 fc.classList.toggle('playing',fplay&&fvis);fp.textContent=fplay?'Pause':'Play'}
function fsched(){clearTimeout(ftm);fc.classList.toggle('playing',fplay&&fvis);if(fplay&&fvis&&!document.hidden)ftm=setTimeout(()=>{fs=(fs+1)%3;frender();fsched()},DUR[fs])}
fb.forEach(b=>b.addEventListener('click',()=>{fs=+b.dataset.s;frender();fsched()}));
fp.addEventListener('click',()=>{fplay=!fplay;frender();fsched()});
new IntersectionObserver(e=>{const was=fvis;fvis=e[0].isIntersecting;if(fvis&&!was){frender()}fsched()},{threshold:.35}).observe(fc);
if(RM.matches){fplay=false}frender();

})();
      } catch (err) { console.error('[platform-actions] page script error:', err); }
      return {  };
    }
  })(cq);
}
