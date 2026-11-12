// Generated from public/html/contexq-supply-chain (5).html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      // ---- page script ----
      try {
document.addEventListener('DOMContentLoaded',()=>{['piGrid','acGrid','risks8'].forEach(id=>{const el=document.getElementById(id);if(!el)return;if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){el.classList.add('in');return}const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){el.classList.add('in');io.disconnect()}},{threshold:.3});io.observe(el)})});
      } catch (err) { console.error('[solution-supply-chain] page script error:', err); }
      // ---- page script ----
      try {
(()=>{
 const img=new Image();img.src='/views/solution-supply-chain/inline-2.png';
 const canvas=document.getElementById('nodes'),ctx=canvas.getContext('2d');
 const countEl=document.getElementById('count'),totalEl=document.getElementById('total'),statusEl=document.getElementById('status'),progressEl=document.getElementById('progress');
 const replayBtn=document.getElementById('cqReplay'),pauseBtn=document.getElementById('cqPause');
 let runToken=0,lastDrawn=-1,components=[],revealed=0,started=0,pausedAt=0,paused=false,raf=0,duration=2600,lastSize='';
 function findComponents(){
  const w=img.naturalWidth,h=img.naturalHeight,tmp=document.createElement('canvas');tmp.width=w;tmp.height=h;const t=tmp.getContext('2d',{willReadFrequently:true});t.drawImage(img,0,0);const data=t.getImageData(0,0,w,h).data;
  // Threshold on the opaque bright core isolates each node, while the full soft glow is drawn for that node.
  const stride=2,sw=Math.ceil(w/stride),sh=Math.ceil(h/stride),seen=new Uint8Array(sw*sh),out=[];
  for(let sy=0;sy<sh;sy++)for(let sx=0;sx<sw;sx++){
   const si=sy*sw+sx;if(seen[si])continue;const x=sx*stride,y=sy*stride,pi=(y*w+x)*4;
   if(data[pi+3]<155||data[pi+2]<160||data[pi+1]<75){seen[si]=1;continue}
   const stack=[si];seen[si]=1;let minX=sx,maxX=sx,minY=sy,maxY=sy,n=0;
   while(stack.length){const q=stack.pop(),qx=q%sw,qy=(q/sw)|0;n++;if(qx<minX)minX=qx;if(qx>maxX)maxX=qx;if(qy<minY)minY=qy;if(qy>maxY)maxY=qy;
    const ns=[q-1,q+1,q-sw,q+sw];for(let k=0;k<4;k++){const z=ns[k];if(z<0||z>=seen.length||seen[z])continue;const nx=z%sw,ny=(z/sw)|0;if(Math.abs(nx-qx)+Math.abs(ny-qy)!==1)continue;const xx=nx*stride,yy=ny*stride,pp=(yy*w+xx)*4;seen[z]=1;if(data[pp+3]>=155&&data[pp+2]>=160&&data[pp+1]>=75)stack.push(z);}
   }
   if(n>=2){const pad=28;out.push({x:Math.max(0,minX*stride-pad),y:Math.max(0,minY*stride-pad),w:Math.min(w,maxX*stride+pad)-Math.max(0,minX*stride-pad),h:Math.min(h,maxY*stride+pad)-Math.max(0,minY*stride-pad),cx:(minX+maxX)*stride/2,cy:(minY+maxY)*stride/2,order:Math.random()});}
  }
  // Reveal in a broad left-to-right sweep with a little jitter, rather than a rigid row.
  out.sort((a,b)=>(a.cx/w+Math.sin(a.cy/h*8)*.07)-(b.cx/w+Math.sin(b.cy/h*8)*.07));return out;
 }
 let linkPicks=null;
 function updateGlobeLinks(){
  const svg=document.getElementById('globeLinks'),stage=document.getElementById('stage'),globe=document.getElementById('globeWrap');
  if(!components.length||!svg||!stage||!globe)return;
  const sw=stage.clientWidth,sh=stage.clientHeight;if(!sw||!sh)return;
  const sr=stage.getBoundingClientRect(),cr=canvas.getBoundingClientRect();
  svg.setAttribute('viewBox','0 0 '+sw+' '+sh);
  // The globe always lands centred in the stage at scale 1, so links target that FINAL geometry
  // (offsetWidth ignores transforms) and never need re-targeting mid-animation.
  const gcx=sw/2,gcy=sh/2,R=globe.offsetWidth/2*.82;
  const pos=c=>({x:cr.left-sr.left+c.cx/img.naturalWidth*cr.width,y:cr.top-sr.top+c.cy/img.naturalHeight*cr.height});
  const N=12;
  if(!linkPicks){
   let pool=components.filter(c=>{const p=pos(c);return p.x>sw*.04&&p.x<gcx-R*1.15&&p.y>sh*.1&&p.y<sh*.9});
   if(pool.length<N)pool=components.slice();
   const picks=[];
   for(let k=0;k<N;k++){const ty=sh*(.14+.72*k/(N-1));let best=null,bd=Infinity;for(const c of pool){if(picks.includes(c))continue;const p=pos(c),d=Math.abs(p.y-ty)+Math.abs(p.x-sw*.25)*.12;if(d<bd){bd=d;best=c}}if(best)picks.push(best)}
   linkPicks=picks;svg.innerHTML='';
   picks.forEach(()=>svg.appendChild(document.createElementNS('http://www.w3.org/2000/svg','path')));
  }
  const ps=svg.querySelectorAll('path');
  const order=linkPicks.map(c=>({c,p:pos(c)})).sort((u,v)=>u.p.y-v.p.y),n=order.length;
  order.forEach((o,k)=>{
   // Evenly spaced landing angles on the globe's left rim, in the same order as start-y => no crossings.
   const ang=(-52+104*(n>1?k/(n-1):.5))*Math.PI/180,ex=gcx-R*Math.cos(ang),ey=gcy+R*Math.sin(ang);
   const dx=ex-o.p.x,L=Math.max(40,dx*.42);
   const d='M '+o.p.x.toFixed(1)+' '+o.p.y.toFixed(1)+' C '+(o.p.x+dx*.45).toFixed(1)+' '+o.p.y.toFixed(1)+', '+(ex-Math.cos(ang)*L).toFixed(1)+' '+(ey+Math.sin(ang)*L).toFixed(1)+', '+ex.toFixed(1)+' '+ey.toFixed(1);
   const p=ps[k];if(!p)return;p.setAttribute('d',d);
   p.style.setProperty('--len',p.getTotalLength().toFixed(1));
   p.style.setProperty('--d',(k*.04).toFixed(2)+'s');
  });
 }
 function resize(){const r=canvas.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,1.7);canvas.width=Math.round(r.width*d);canvas.height=Math.round(r.height*d);ctx.setTransform(canvas.width/img.naturalWidth,0,0,canvas.height/img.naturalHeight,0,0);draw(revealed);updateGlobeLinks();}
 let edges=[];
 function buildEdges(){
  edges=[];const W=img.naturalWidth,linked=new Set();
  for(let i=1;i<components.length;i++){
   const a=components[i];let nearest=-1,nd=Infinity,second=-1,sd=Infinity;
   for(let j=0;j<i;j++){const b=components[j],dx=a.cx-b.cx,dy=a.cy-b.cy,d=dx*dx+dy*dy;if(d<nd){second=nearest;sd=nd;nearest=j;nd=d}else if(d<sd){second=j;sd=d}}
   const cand=[nearest];if(second>=0&&sd<(W*.19)*(W*.19))cand.push(second);
   for(const j of cand){if(j<0)continue;const key=j+'-'+i;if(linked.has(key))continue;linked.add(key);
    const b=components[j];edges.push({i,ax:a.cx,ay:a.cy,bx:b.cx,by:b.cy,far:Math.hypot(a.cx-b.cx,a.cy-b.cy)>W*.2});}
  }
 }
 function draw(n){
  if(!img.complete||!img.naturalWidth)return;
  const visible=Math.min(n,components.length),W=img.naturalWidth,H=img.naturalHeight;
  ctx.clearRect(0,0,W,H);
  if(visible>1&&edges.length){
   ctx.save();ctx.lineCap='round';ctx.lineJoin='round';ctx.lineWidth=Math.max(1.2,W/1600);ctx.shadowColor='#16bfff';ctx.shadowBlur=7;
   for(let pass=0;pass<2;pass++){
    ctx.beginPath();
    for(let k=0;k<edges.length;k++){const e=edges[k];if(e.i>=visible)break;if(e.far!==(pass===1))continue;ctx.moveTo(e.ax,e.ay);ctx.lineTo(e.bx,e.by)}
    ctx.strokeStyle=pass?'rgba(36,190,255,.22)':'rgba(36,190,255,.58)';ctx.stroke();
   }
   ctx.restore();
  }
  for(let i=0;i<visible;i++){const c=components[i];ctx.drawImage(img,c.x,c.y,c.w,c.h,c.x,c.y,c.w,c.h)}
  countEl.textContent=visible;
 }
 function frame(now){if(paused)return;const elapsed=now-started,p=Math.min(1,elapsed/duration);revealed=Math.floor((1-Math.pow(1-p,1.7))*components.length);if(revealed!==lastDrawn){lastDrawn=revealed;draw(revealed)}progressEl.style.width=(p*100)+'%';if(p<1){raf=requestAnimationFrame(frame)}else{statusEl.textContent='ROUTING TO GLOBE';pauseBtn.textContent='Ⅱ Pause';pauseBtn.disabled=true;paused=true;
 const stageEl=document.getElementById('stage');
 stageEl.classList.remove('globe-linked','globe-arriving','globe-absorbed','graph-live');
 updateGlobeLinks();
 void stageEl.offsetWidth;
 const runAt=runToken,hold=matchMedia('(prefers-reduced-motion: reduce)').matches?0:2200;
 statusEl.textContent='HAZARD SIGNALS MAPPED';
 // 0) hold on the map so the hazard signals can be read, then continue the original sequence
 window.setTimeout(()=>{
 if(runAt!==runToken)return;
 statusEl.textContent='ROUTING TO GLOBE';
 requestAnimationFrame(()=>{
  if(runAt!==runToken)return;
  // 1) globe forms + edges draw in (CSS-driven, paths are never rebuilt mid-flight)
  stageEl.classList.add('globe-arriving','globe-linked');
  // 2) once edges have landed, map slides away while the globe glides left
  window.setTimeout(()=>{
   if(runAt!==runToken)return;
   stageEl.classList.add('globe-absorbed');
   statusEl.textContent='INTELLIGENCE CONNECTED';
   window.setTimeout(()=>{if(runAt===runToken)stageEl.classList.add('graph-live')},300);
  },1150);
 });
 },hold);
}}
 function start(){runToken++;cancelAnimationFrame(raf);document.getElementById('stage').classList.remove('globe-linked','globe-arriving','globe-absorbed','graph-live');document.querySelectorAll('#graphEdges .graph-edge').forEach(e=>e.classList.remove('is-live'));document.querySelectorAll('#graphCards .graph-dot').forEach(e=>e.classList.remove('is-live'));window.setTimeout(updateGlobeLinks,100);document.querySelectorAll('#globeLinks path').forEach(path=>{path.style.transitionDelay='0ms';});paused=false;revealed=0;started=performance.now();pausedAt=0;statusEl.textContent='REVEALING';pauseBtn.textContent='Ⅱ Pause';pauseBtn.disabled=false;progressEl.style.width='0%';document.querySelectorAll('[data-hazard]').forEach((el)=>el.classList.remove('is-live'));window.setTimeout(()=>document.querySelectorAll('[data-hazard]').forEach((el,i)=>window.setTimeout(()=>{if(!paused)el.classList.add('is-live')},200+i*150)),250);draw(0);raf=requestAnimationFrame(frame);}
 function armStart(){
  statusEl.textContent='STANDBY';const st=document.getElementById('stage');
  if(!('IntersectionObserver' in window)){start();return}
  const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){io.disconnect();start()}},{threshold:.35});io.observe(st);
 }
 img.onload=()=>{components=findComponents();buildEdges();totalEl.textContent=components.length;resize();updateGlobeLinks();armStart();};
 img.onerror=()=>{statusEl.textContent='ASSET NOT FOUND';};
 replayBtn.addEventListener('click',start);
 pauseBtn.addEventListener('click',()=>{if(paused){start();return;}paused=true;pausedAt=performance.now();cancelAnimationFrame(raf);pauseBtn.textContent='▶ Resume';statusEl.textContent='PAUSED';});
 window.addEventListener('resize',()=>{resize();updateGlobeLinks();});document.addEventListener('visibilitychange',()=>{if(document.hidden){paused=true;cancelAnimationFrame(raf)}else if(paused&&revealed<components.length){started=performance.now()-(revealed/Math.max(1,components.length))*duration;paused=false;raf=requestAnimationFrame(frame)}});
})();
      } catch (err) { console.error('[solution-supply-chain] page script error:', err); }
      // ---- page script ----
      try {
(() => {
 const panel=document.getElementById('relationshipPanel');
 const svg=document.getElementById('relationshipSvg');
 if(!panel||!svg)return;
 const tabs=[...panel.querySelectorAll('.relationship-tab')];
 const copy={
  tiers:{
   title:'See every tier, not only the suppliers you pay.',
   desc:'Sub-tier relationships are inferred from registries, customs, ownership and trade data, then labelled with their evidence and verification status — including where no supplier disclosed them.',
   meta:['● Your direct suppliers','○ Their suppliers, resolved','● Evidence on every link']
  },
  hidden:{
   title:'Expose the chokepoints behind “independent” suppliers.',
   desc:'Shared sub-tier plants, shared ownership, and regional concentration are three distinct relationship types — each surfaced as a distinct pattern in the graph, so “dual-sourced on paper” is tested against reality.',
   meta:['Shared site','Shared owner','Regional concentration']
  },
  impact:{
   title:'Know which parts stop, and when.',
   desc:'Trace an event through your network before it lands, then again as it unfolds. Impact is a potential exposure, not a confirmed shutdown, until the site itself confirms status.',
   meta:['Affected sites','Affected parts','Affected routes']
  },
  alternates:{
   title:'Find alternates that actually reduce risk.',
   desc:'Candidates are ranked by capability evidence and by how much each one improves your network — not by name similarity. Each remains a candidate requiring verification and qualification.',
   meta:['Candidate suppliers','Evidence of capability','Verification required']
  }
 };
 const line=(x1,y1,x2,y2,cls='edge')=>`<path class="${cls}" d="M${x1} ${y1} L${x2} ${y2}"/>`;
 const circ=(x,y,r,cls='node')=>`<circle class="${cls}" cx="${x}" cy="${y}" r="${r}"/>`;
 const text=(x,y,t,cls='label',anchor='start')=>`<text class="${cls}" x="${x}" y="${y}" text-anchor="${anchor}">${t}</text>`;
 const rect=(x,y,w,h,t)=>`<rect class="card" x="${x}" y="${y}" width="${w}" height="${h}" rx="5"/>${text(x+12,y+h/2+4,t)}`;
 function baseGuides(){return [190,355,510].map((x,i)=>`<line class="guide" x1="${x}" y1="38" x2="${x}" y2="355"/>`).join('')+text(190,382,'Direct suppliers','axis','middle')+text(355,382,'Their suppliers','axis','middle')+text(510,382,'Further upstream','axis','middle')}
 function tiers(){
  let a=baseGuides();
  const root=[52,205], t1=[[190,110],[190,205],[190,300]], t2=[[355,70],[355,150],[355,245],[355,335]], t3=[[510,120],[510,225],[510,310]];
  t1.forEach(([x,y])=>a+=line(...root,x,y));
  [[0,0],[0,1],[1,1],[1,2],[2,2],[2,3],[0,3]].forEach(([i,j])=>a+=line(...t1[i],...t2[j]));
  [[0,0],[0,1],[1,1],[2,2],[3,2],[3,1]].forEach(([i,j])=>a+=line(...t2[i],...t3[j]));
  a+=circ(...root,19,'tier1')+text(...[52,209],'You','label','middle');
  t1.forEach(([x,y],i)=>{a+=circ(x,y,11,'tier1')+text(x,y-20,`Supplier ${'ABC'[i]}`,'label','middle')});
  t2.forEach(([x,y])=>a+=circ(x,y,7,'node'));
  t3.forEach(([x,y])=>a+=circ(x,y,7,'node'));
  a+=text(355,30,'Inferred and verified, no contract needed','small-label','middle');
  return a;
 }
 function hidden(){
  let a=baseGuides();
  const root=[52,205], t1=[[190,110],[190,205],[190,300]], t2=[[355,70],[355,150],[355,245],[355,335]], hub=[510,225];
  t1.forEach(([x,y])=>a+=line(...root,x,y));
  [[0,1],[1,1],[1,2],[2,2],[0,0],[2,3]].forEach(([i,j])=>a+=line(...t1[i],...t2[j],'edge hot'));
  [[0,0],[0,1],[1,1],[2,1],[3,1],[3,0]].forEach(([i])=>a+=line(...t2[i],...hub,'edge hot'));
  a+=circ(...root,19,'tier1')+text(52,209,'You','label','middle');
  t1.forEach(([x,y],i)=>a+=circ(x,y,11,'danger')+text(x,y-20,`Supplier ${'ABC'[i]}`,'label','middle')+text(x,y+28,'Exposed','small-label','middle'));
  t2.forEach(([x,y])=>a+=circ(x,y,7,'node'));
  a+=`<circle cx="510" cy="225" r="76" fill="rgba(239,65,54,.10)" stroke="rgba(239,65,54,.55)" stroke-dasharray="4 4"/>`+circ(...hub,15,'danger')+text(510,325,'Shared chokepoint','small-label','middle');
  return a;
 }
 function impact(){
  let a=baseGuides();
  const root=[52,205], t1=[[190,110],[190,205],[190,300]], t2=[[355,70],[355,150],[355,245],[355,335]], hub=[510,225];
  t1.forEach(([x,y])=>a+=line(...root,x,y,'edge hot'));
  [[0,1],[1,1],[1,2],[2,2],[0,0],[2,3]].forEach(([i,j])=>a+=line(...t1[i],...t2[j],'edge hot'));
  t2.forEach(([x,y])=>a+=line(x,y,...hub,'edge hot'));
  a+=circ(...root,19,'tier1')+text(52,209,'You','label','middle');
  t1.forEach(([x,y],i)=>a+=circ(x,y,11,'danger')+text(x,y-20,`Supplier ${'ABC'[i]}`,'label','middle')+`<rect x="${x-36}" y="${y+16}" width="72" height="18" rx="9" fill="rgba(239,65,54,.12)"/>`+text(x,y+28,'Exposed','small-label','middle'));
  t2.forEach(([x,y])=>a+=circ(x,y,7,'node'));
  a+=`<circle cx="510" cy="225" r="76" fill="rgba(239,65,54,.10)" stroke="rgba(239,65,54,.55)" stroke-dasharray="4 4"/>`+circ(...hub,15,'danger')+text(510,325,'Hazard corridor','small-label','middle');
  return a;
 }
 function alternates(){
  let a=baseGuides();
  const root=[52,205], t1=[[190,110],[190,205],[190,300]], t2=[[355,150],[355,245],[355,335]], old=[510,225], k=[610,105], r=[610,290];
  t1.forEach(([x,y])=>a+=line(...root,x,y));
  [[0,0],[0,1],[1,0],[1,1],[2,1],[2,2]].forEach(([i,j])=>a+=line(...t1[i],...t2[j]));
  t2.forEach(([x,y],i)=>a+=line(x,y,...old));
  a+=line(...t2[0],...k,'edge alt')+line(...t2[2],...k,'edge alt')+line(...t2[2],...r,'edge alt');
  a+=circ(...root,19,'tier1')+text(52,209,'You','label','middle');
  t1.forEach(([x,y],i)=>a+=circ(x,y,11,'tier1')+text(x,y-20,`Supplier ${'ABC'[i]}`,'label','middle'));
  t2.forEach(([x,y])=>a+=circ(x,y,7,'node'));
  a+=`<circle cx="510" cy="225" r="11" fill="none" stroke="#d99a36" stroke-dasharray="3 3"/>`+circ(...k,12,'good')+circ(...r,12,'good')+text(610,83,'Option to assess','label','middle')+text(610,268,'Option to assess','label','middle');
  return a;
 }
 const renderers={tiers,hidden,impact,alternates};
 function select(view){
  const data=copy[view]||copy.tiers;
  tabs.forEach(b=>{const active=b.dataset.view===view;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active))});
  svg.innerHTML=renderers[view]();
  // Add tiny moving information pulses along the structural paths to signal continuous network activity.
  [...svg.querySelectorAll('.edge')].forEach((path,i)=>{
    if(i%2===0){const len=path.getTotalLength();const dot=document.createElementNS('http://www.w3.org/2000/svg','circle');dot.setAttribute('r','2.3');dot.setAttribute('class','pulse');const anim=document.createElementNS('http://www.w3.org/2000/svg','animateMotion');anim.setAttribute('dur',`${2.2+(i%4)*.4}s`);anim.setAttribute('repeatCount','indefinite');anim.setAttribute('path',path.getAttribute('d'));dot.appendChild(anim);svg.appendChild(dot)}
  });
 }
 tabs.forEach(b=>b.addEventListener('click',()=>select(b.dataset.view)));
 select('tiers');
})();
      } catch (err) { console.error('[solution-supply-chain] page script error:', err); }
      // ---- page script ----
      try {
(() => {
 const stage=document.getElementById('stage'),globe=document.getElementById('globeWrap'),visual=document.querySelector('.relationship-visual');
 if(!stage||!globe||!visual)return;
 const ns='http://www.w3.org/2000/svg';
 const old=document.getElementById('globe-to-focal-bridge');if(old)old.remove();
 const svg=document.createElementNS(ns,'svg');svg.setAttribute('id','globe-to-focal-bridge');svg.setAttribute('aria-hidden','true');svg.setAttribute('preserveAspectRatio','none');
 const glow=document.createElementNS(ns,'path'),path=document.createElementNS(ns,'path'),pulse=document.createElementNS(ns,'circle');
 [[glow,'rgba(56,190,255,.16)','6'],[path,'#4fd0ff','1.6']].forEach(([p,s,w])=>{p.setAttribute('fill','none');p.setAttribute('stroke',s);p.setAttribute('stroke-width',w);p.setAttribute('stroke-linecap','round')});
 pulse.setAttribute('r','3');pulse.setAttribute('fill','#e6fbff');pulse.style.filter='drop-shadow(0 0 5px #42cfff)';pulse.style.opacity='0';
 svg.append(glow,path,pulse);stage.appendChild(svg);
 const ease=t=>1-Math.pow(1-t,3);let vb='';
 function frame(){
  requestAnimationFrame(frame);
  const f=window.__ctxFocal,on=stage.classList.contains('globe-absorbed')||stage.classList.contains('graph-live');
  if(!on||!f||!isFinite(f.showAt)){svg.style.opacity='0';return}
  const sr=stage.getBoundingClientRect(),gr=globe.getBoundingClientRect(),vr=visual.getBoundingClientRect();
  if(!sr.width||!gr.width||!vr.width)return;
  const key=sr.width+'x'+sr.height;if(key!==vb){vb=key;svg.setAttribute('viewBox','0 0 '+sr.width+' '+sr.height)}
  // globe centre + visible particle-sphere radius (sphere fills ~82% of its canvas)
  const gcx=gr.left-sr.left+gr.width/2,gcy=gr.top-sr.top+gr.height/2,Rg=gr.width/2*.82;
  const ex=vr.left-sr.left+f.x-f.r-4,ey=vr.top-sr.top+f.y;
  const ang=Math.atan2(ey-gcy,ex-gcx),sx=gcx+Math.cos(ang)*Rg,sy=gcy+Math.sin(ang)*Rg,dx=ex-sx;
  if(dx<24){svg.style.opacity='0';return}
  const d='M '+sx.toFixed(1)+' '+sy.toFixed(1)+' C '+(sx+dx*.5).toFixed(1)+' '+sy.toFixed(1)+', '+(ex-dx*.5).toFixed(1)+' '+ey.toFixed(1)+', '+ex.toFixed(1)+' '+ey.toFixed(1);
  path.setAttribute('d',d);glow.setAttribute('d',d);
  const len=path.getTotalLength(),t=performance.now()/1000,p=Math.min(1,Math.max(0,(t-(f.showAt-.55))/.55));
  svg.style.opacity=p>0?'1':'0';
  [path,glow].forEach(el=>{el.style.strokeDasharray=len;el.style.strokeDashoffset=len*(1-ease(p))});
  if(p>=1){const pt=path.getPointAtLength(((t*.5)%1)*len);pulse.setAttribute('cx',pt.x);pulse.setAttribute('cy',pt.y);pulse.style.opacity='1'}else pulse.style.opacity='0';
 }
 requestAnimationFrame(frame);
})();
      } catch (err) { console.error('[solution-supply-chain] page script error:', err); }
      // ---- page script ----
      try {
(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var NS='http://www.w3.org/2000/svg';
function curve(a,b){var dx=(b.x-a.x)*.5;return 'M'+a.x.toFixed(1)+' '+a.y.toFixed(1)+' C'+(a.x+dx).toFixed(1)+' '+a.y.toFixed(1)+' '+(b.x-dx).toFixed(1)+' '+b.y.toFixed(1)+' '+b.x.toFixed(1)+' '+b.y.toFixed(1)}
function onVisible(el,fn,th){if(!('IntersectionObserver' in window)){fn();return}var io=new IntersectionObserver(function(es){if(es.some(function(e){return e.isIntersecting})){io.disconnect();fn()}},{threshold:th||.35});io.observe(el)}

/* ---------- hero story strip: follows the map animation without touching it ---------- */
(function(){
  var stage=document.getElementById('stage'),status=document.getElementById('status'),list=$('#cqStory');
  if(!stage||!status||!list)return;
  var items=$$('li',list),cur=0;
  function set(n){if(n===cur)return;cur=n;items.forEach(function(li,i){var k=i+1;li.classList.toggle('on',k===n);li.classList.toggle('done',k<n);});}
  function read(){
    var c=stage.classList,t=(status.textContent||'').toUpperCase();
    if(c.contains('globe-absorbed')||c.contains('graph-live'))return set(4);
    if(c.contains('globe-arriving')||c.contains('globe-linked'))return set(3);
    if(t.indexOf('HAZARD')>-1)return set(2);
    if(t.indexOf('REVEAL')>-1)return set(1);
    if(t.indexOf('STANDBY')>-1||t.indexOf('INITIAL')>-1)return set(0);
  }
  new MutationObserver(read).observe(stage,{attributes:true,attributeFilter:['class']});
  new MutationObserver(read).observe(status,{childList:true,characterData:true,subtree:true});
  read();
})();

/* ---------- engine prism: one orchestrated reveal ---------- */
(function(){var pz=$('#pz');if(!pz)return;onVisible(pz,function(){pz.classList.add('go')},.35)})();


})();
      } catch (err) { console.error('[solution-supply-chain] page script error:', err); }
      // ---- page script ----
      try {
/* ContexQ auto-rotate: every click-to-switch control cycles on its own while visible.
   Pauses on hover/focus, restarts its timer after a manual click, honours reduced motion. */
(function(){
'use strict';
if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var stage=document.getElementById('stage');
function byAttr(a){return function(el){return el.getAttribute(a)==='true'}}
var G=[];
function add(c){
  c.items=$$(c.sel);if(c.items.length<2)return;
  c.root=c.root||c.items[0].parentElement;c.acc=0;c.vis=false;c.hold=false;c.last=-2;
  var holds=[c.items[0].parentElement].concat(c.panels?c.panels():[]);
  holds.forEach(function(h){if(!h)return;
    h.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')c.hold=true});
    h.addEventListener('pointerleave',function(){c.hold=false});
    h.addEventListener('focusin',function(){c.hold=true});
    h.addEventListener('focusout',function(){c.hold=false});});
  c.items.forEach(function(it){it.addEventListener('click',function(e){if(e.isTrusted)c.acc=0})});
  if('IntersectionObserver' in window){new IntersectionObserver(function(es){c.vis=es[es.length-1].isIntersecting},{threshold:c.th||.3}).observe(c.root)}else c.vis=true;
  G.push(c);
}
function idx(c){for(var i=0;i<c.items.length;i++)if(c.isOn(c.items[i]))return i;return -1}
/* 1. network map views (after the intro story finishes) */
add({sel:'.relationship-tab',ms:5200,bar:true,root:stage,th:.35,
  isOn:function(el){return el.classList.contains('active')},
  ready:function(){return stage&&stage.classList.contains('graph-story-complete')},
  panels:function(){return [stage]}});
var t0=performance.now();
function tick(now){
  var dt=Math.min(100,now-t0);t0=now;
  G.forEach(function(c){
    var run=c.vis&&!c.hold&&!document.hidden&&(!c.ready||c.ready());
    var i=idx(c);
    if(i!==c.last){c.acc=0;c.last=i}
    if(run)c.acc+=dt;
    var p=Math.min(1,c.acc/c.ms);
    if(c.bar)c.items.forEach(function(it,k){it.style.setProperty('--cq-p',k===i?p:0)});
    if(run&&c.acc>=c.ms){c.acc=0;var n=c.items[(i+1)%c.items.length];if(n)n.click()}
  });
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
})();
      } catch (err) { console.error('[solution-supply-chain] page script error:', err); }
      // ---- page script ----
      try {
(function(){
const cards=document.querySelectorAll('.cq-story');
if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('cq-inview');observer.unobserve(entry.target)}}),{threshold:.2});
cards.forEach(card=>observer.observe(card));
})();
      } catch (err) { console.error('[solution-supply-chain] page script error:', err); }
      // ---- page script #mobile-alternatives-js ----
      try {
(()=>{
  const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* hero: four phases, same captions as the desktop network */
  const h=document.getElementById('mHero');
  if(h){
    const CAP=['Suppliers A, B and C appear to rely on separate companies.','Traced further, their suppliers depend on the same producer.','A disruption at that producer could reach each of your suppliers.','Alternative producers are identified for you to assess.'];
    const tabs=[...h.querySelectorAll('[role=tab]')],cap=document.getElementById('mhCap'),DELAY=3600;
    let i=0,timer=null,inView=false,user=false;
    const show=n=>{i=n;h.dataset.phase=n;cap.textContent=CAP[n];tabs.forEach((b,k)=>{b.setAttribute('aria-selected',String(k===n));b.tabIndex=k===n?0:-1;
      if(k===n){b.style.animation='none';void b.offsetWidth;b.style.animation=''}})};
    const tick=()=>{clearTimeout(timer);if(user||RM||!inView)return;timer=setTimeout(()=>{show((i+1)%4);tick()},DELAY)};
    tabs.forEach((b,k)=>{b.addEventListener('click',()=>{user=true;h.classList.add('paused');clearTimeout(timer);show(k)});
      b.addEventListener('keydown',e=>{const d={ArrowRight:1,ArrowLeft:-1}[e.key];if(!d)return;e.preventDefault();const n=(i+d+4)%4;user=true;h.classList.add('paused');show(n);tabs[n].focus()})});
    if(RM){h.classList.add('paused');show(1)}else show(0);
    if('IntersectionObserver' in window)new IntersectionObserver(es=>{inView=es[0].isIntersecting;tick()},{threshold:.3}).observe(h);
  }
  /* prism: build once when scrolled into view */
  const p=document.getElementById('mPz');
  if(p){if(RM||!('IntersectionObserver' in window))p.classList.add('go');
    else{const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){p.classList.add('go');io.disconnect()}},{threshold:.2});io.observe(p)}}
})();
      } catch (err) { console.error('[solution-supply-chain] page script error:', err); }
      // ---- page module script ----
      (async () => {
(async()=>{
 const THREE=window.__CQ_THREE||await new Promise(r=>window.addEventListener('cq-three',()=>r(window.__CQ_THREE),{once:true}));
 try{await document.fonts.load('500 30px "Hanken Grotesk"');await document.fonts.load('600 25px "Hanken Grotesk"')}catch(e){}
 const stage=document.getElementById('stage'),visual=document.querySelector('.relationship-visual');
 if(!stage||!visual)return;
 const old=document.getElementById('supplier3d');if(old)old.remove();
 const canvas=document.createElement('canvas');canvas.id='supplier3d';canvas.setAttribute('aria-label','Supply chain relationship network');visual.appendChild(canvas);
 const tip=document.createElement('div');tip.id='networkTip';tip.setAttribute('aria-live','polite');tip.textContent='';visual.appendChild(tip);
 let renderer;try{renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'high-performance'})}catch(e){tip.textContent='WebGL unavailable — enable hardware acceleration to view the network.';return}
 renderer.setPixelRatio(Math.min(devicePixelRatio||1,2));renderer.setClearColor(0x000000,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(30,1,.1,100);camera.position.set(0,0,13.6);
 const root=new THREE.Group();root.position.set(.45,-.72,0);scene.add(root);

 // ---- strict grid layout: 5 tier columns, evenly spaced rows, everything on one plane ----
 const X=[-3.9,-2.2,-.5,1.2,2.9],R4=[2.25,.75,-.75,-2.25],R3=[1.5,0,-1.5];
 const P={you:[X[0],0],a:[X[1],R3[0]],b:[X[1],R3[1]],c:[X[1],R3[2]],
  t21:[X[2],R4[0]],t22:[X[2],R4[1]],t23:[X[2],R4[2]],t24:[X[2],R4[3]],
  t31:[X[3],R4[0]],t32:[X[3],R4[1]],t33:[X[3],R4[2]],t34:[X[3],R4[3]],
  k:[X[4],R3[0]],hub:[X[4],R3[1]],r:[X[4],R3[2]]};
 const NAMES={you:'YOUR COMPANY',a:'Supplier A',b:'Supplier B',c:'Supplier C',t21:'Component maker',t22:'Sub-assembler',t23:'Packaging supplier',t24:'Distributor',t31:'Upstream supplier',t32:'Upstream supplier',t33:'Upstream supplier',t34:'Upstream supplier',hub:'Shared producer',k:'Alternative to assess',r:'Alternative to assess'};
 const DEPTH={you:0,a:1,b:1,c:1,t21:2,t22:2,t23:2,t24:2,t31:3,t32:3,t33:3,t34:3,hub:3,k:3,r:3};
 // Apparently separate chains: each direct supplier relies on its own upstream companies.
 const E_TIERS=[['you','a'],['you','b'],['you','c'],['a','t21'],['b','t22'],['b','t23'],['c','t24'],['t21','t31'],['t22','t32'],['t23','t33'],['t24','t34']];
 // The discovery: three of those upstream companies all depend on one producer.
 const E_RISK=[['you','a'],['you','b'],['you','c'],['a','t21'],['b','t22'],['b','t23'],['c','t24'],['t21','hub'],['t22','hub'],['t24','hub']];
 const E_ALT=[['you','a'],['you','b'],['you','c'],['a','t21'],['b','t22'],['b','t23'],['c','t24'],['t21','k'],['t22','k'],['t24','r']];
 const AFFECTED=new Set(['you-a','you-b','you-c','a-t21','b-t22','c-t24','t21-hub','t22-hub','t24-hub']);
 const VIEWS={
  tiers:{edges:E_TIERS,show:id=>!['hub','k','r'].includes(id),dim:()=>false,head5:null},
  hidden:{edges:E_RISK,show:id=>!['k','r'].includes(id),dim:id=>id.startsWith('t3')||id==='t23',head5:['SHARED DEPENDENCY','#ffc66b']},
  impact:{edges:E_RISK,show:id=>!['k','r'].includes(id),dim:id=>id.startsWith('t3')||id==='t23',head5:['DISRUPTION','#ff8a82']},
  alternates:{edges:E_ALT,show:()=>true,dim:id=>id.startsWith('t3')||id==='hub',head5:['ALTERNATIVES TO ASSESS','#6ff0b0']}
 };
 const BLUE=0x4fc8ff,RED=0xff4f45,AMBER=0xffb23e,GREEN=0x39e58f,FOCAL=0x9be3ff;
 function colorFor(view,id){
  if(id==='you')return FOCAL;
  if(view==='hidden'){if(id==='hub')return AMBER;return BLUE}
  if(view==='impact'){if(['hub','t21','t22','t24','a','c'].includes(id))return RED;if(id==='b')return AMBER;return BLUE}
  if(view==='alternates'){if(id==='k'||id==='r')return GREEN;if(id==='hub')return RED;return BLUE}
  return BLUE;
 }

 // ---- textures ----
 function textTex(text,{color='#d7ecfb',size=34,weight=500,spacing=0,shadow=true}={}){
  const c=document.createElement('canvas');c.width=640;c.height=120;const x=c.getContext('2d');
  x.font=weight+' '+size+'px "Hanken Grotesk",Inter,Arial,sans-serif';if('letterSpacing' in x)x.letterSpacing=spacing+'px';
  x.textAlign='center';x.textBaseline='middle';
  if(shadow){x.shadowColor='rgba(2,12,22,.95)';x.shadowBlur=8}
  x.fillStyle=color;x.fillText(text,320,60);
  const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t;
 }
 const haloTex=(()=>{const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d'),g=x.createRadialGradient(64,64,0,64,64,64);
  g.addColorStop(0,'rgba(255,255,255,.95)');g.addColorStop(.25,'rgba(255,255,255,.35)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.fillRect(0,0,128,128);
  const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t})();

 // ---- nodes ----
 const nodes={},nodeList=[];
 Object.keys(P).forEach(id=>{
  const rad=id==='you'?.17:(id==='hub'?.15:(id==='k'||id==='r')?.12:.09);
  const mat=new THREE.MeshBasicMaterial({color:BLUE,transparent:true,opacity:0});
  const mesh=new THREE.Mesh(new THREE.SphereGeometry(rad,28,20),mat);mesh.position.set(P[id][0],P[id][1],0);mesh.scale.setScalar(.001);
  const halo=new THREE.Sprite(new THREE.SpriteMaterial({map:haloTex,color:BLUE,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending}));
  halo.position.copy(mesh.position);halo.scale.setScalar(rad*7);
  const label=new THREE.Sprite(new THREE.SpriteMaterial({map:textTex(NAMES[id],{color:id==='you'?'#ffffff':'#cfe6f6',weight:id==='you'?700:600,size:54}),transparent:true,opacity:0,depthWrite:false}));
  const LS=innerWidth<700?1.1:1;label.position.set(P[id][0],P[id][1]+(id==='you'?.52:.4)*LS,0);label.scale.set(1.95*LS,.366*LS,1);
  root.add(mesh,halo,label);
  const n={id,mesh,halo,label,rad,cur:0,hover:1,dimF:1,dimT:1,inView:false,showAt:Infinity};
  mesh.userData.node=n;nodes[id]=n;nodeList.push(n);
 });
 // column headers
 const heads=[];
 [['YOUR COMPANY',X[0],['you']],['DIRECT SUPPLIERS',X[1],['a','b','c']],['THEIR SUPPLIERS',X[2],['t21','t22','t23','t24']],['FURTHER UPSTREAM',X[3],['t31','t32','t33','t34']]].forEach(([txt,x,ids])=>{
  const s=new THREE.Sprite(new THREE.SpriteMaterial({map:textTex(txt,{color:'#7fb9d8',size:40,weight:700,spacing:2,shadow:false}),transparent:true,opacity:0,depthWrite:false}));
  s.position.set(x,3.1,0);s.scale.set(1.95,.366,1);root.add(s);heads.push({s,ids,base:1});
 });
 const head5={};
 [['SHARED DEPENDENCY','#ffc66b'],['DISRUPTION','#ff8a82'],['ALTERNATIVES TO ASSESS','#6ff0b0']].forEach(([txt,col])=>{
  const s=new THREE.Sprite(new THREE.SpriteMaterial({map:textTex(txt,{color:col,size:40,weight:700,spacing:2,shadow:false}),transparent:true,opacity:0,depthWrite:false}));
  s.position.set(X[4],3.1,0);s.scale.set(1.95,.366,1);root.add(s);head5[txt]={s,cur:0};
 });
 // faint column guides
 X.forEach(x=>{const g=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x,-2.65,-.01),new THREE.Vector3(x,2.75,-.01)]);root.add(new THREE.Line(g,new THREE.LineBasicMaterial({color:0x1d4a63,transparent:true,opacity:.22})))});

 // ---- edges: clean horizontal-tangent S-curves, drawn as real (anti-aliased) tubes that grow ----
 let edgeObjs=[],activeView='tiers';
 const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
 function clearEdges(){edgeObjs.forEach(o=>{root.remove(o.core,o.glow,o.dot);[o.core,o.glow,o.dot].forEach(m=>{m.geometry.dispose();m.material.dispose()})});edgeObjs=[]}
 const CAP={tiers:'Suppliers A, B and C appear to rely on separate companies.',hidden:'Traced further, their suppliers depend on the same producer.',impact:'A disruption at that producer could reach each of your suppliers.',alternates:'Alternative producers are identified for you to assess.'};
 function build(view,t0,step){
  clearEdges();activeView=view;const V=VIEWS[view];if(!hovered)tip.textContent=CAP[view];
  V.edges.forEach(([from,to],i)=>{
   const A=new THREE.Vector3(P[from][0]+nodes[from].rad+.02,P[from][1],0),B=new THREE.Vector3(P[to][0]-nodes[to].rad-.02,P[to][1],0),dx=B.x-A.x;
   const key=from+'-'+to,shared=view==='hidden'&&to==='hub',risk=view==='impact'&&AFFECTED.has(key),alt=view==='alternates'&&(to==='k'||to==='r');
   const col=risk?RED:shared?AMBER:alt?GREEN:BLUE;
   // disrupted links are drawn from the producer back towards you, so the effect visibly travels upstream-to-you
   const curve=risk?new THREE.CubicBezierCurve3(B,new THREE.Vector3(B.x-dx*.5,B.y,0),new THREE.Vector3(A.x+dx*.5,A.y,0),A):new THREE.CubicBezierCurve3(A,new THREE.Vector3(A.x+dx*.5,A.y,0),new THREE.Vector3(B.x-dx*.5,B.y,0),B);
   const core=new THREE.Mesh(new THREE.TubeGeometry(curve,72,.013,6,false),new THREE.MeshBasicMaterial({color:col,transparent:true,opacity:risk||alt?.95:.78}));
   const glow=new THREE.Mesh(new THREE.TubeGeometry(curve,72,.042,6,false),new THREE.MeshBasicMaterial({color:col,transparent:true,opacity:.13,blending:THREE.AdditiveBlending,depthWrite:false}));
   const dot=new THREE.Mesh(new THREE.SphereGeometry(.036,12,10),new THREE.MeshBasicMaterial({color:risk?0xffb3ad:shared?0xffe0a8:alt?0xb5ffd8:0xdff8ff}));dot.visible=false;
   core.geometry.setDrawRange(0,0);glow.geometry.setDrawRange(0,0);
   root.add(glow,core,dot);
   // In the disruption view the effect travels back from the producer towards your company.
   const order=view==='impact'?(3-DEPTH[to]):(DEPTH[to]-1);
   edgeObjs.push({core,glow,dot,curve,from,to,startAt:t0+order*step+(i%4)*.05,dur:.75,idx:core.geometry.index.count,off:i/V.edges.length,spd:.16+(i%4)*.02});
  });
  nodeList.forEach(n=>{
   const inV=V.show(n.id);n.inView=inV;n.dimT=V.dim(n.id)?.28:1;
   const col=colorFor(view,n.id);n.mesh.material.color.setHex(col);n.halo.material.color.setHex(col);
   if(!inV){n.showAt=-1e9;return}
   if(n.cur>.5){n.showAt=-1e9}else n.showAt=n.id==='you'?t0:t0+(DEPTH[n.id]-1)*step+.38;
  });
 }

 // ---- story: starts when the globe hand-off finishes (NOT at page load), then unlocks the tabs ----
 const now=()=>performance.now()/1000;
 let active=false,story=false,storyT0=0,phase=0;
 const tabs=[...document.querySelectorAll('.relationship-tab')];
 const setTab=v=>tabs.forEach(b=>{const on=b.dataset.view===v;b.classList.toggle('active',on);b.setAttribute('aria-selected',String(on))});
 function hideAll(){nodeList.forEach(n=>{n.cur=0;n.showAt=Infinity;n.inView=false});clearEdges()}
 function startStory(){
  hideAll();
  // reduced motion: open directly on the discovery, no timed sequence
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){story=false;setTab('hidden');build('hidden',now(),0);stage.classList.add('graph-story-complete');return}
  story=true;phase=0;storyT0=now()+.5;stage.classList.remove('graph-story-complete');setTab('tiers');build('tiers',storyT0,.55);
 }
 function reset(){story=false;hideAll();stage.classList.remove('graph-story-complete');window.__ctxFocal=null;setTab('tiers')}
 const sync=()=>{const on=stage.classList.contains('globe-absorbed')||stage.classList.contains('graph-live');if(on&&!active){active=true;startStory()}else if(!on&&active){active=false;reset()}};
 new MutationObserver(sync).observe(stage,{attributes:true,attributeFilter:['class']});

 tabs.forEach(btn=>btn.addEventListener('click',()=>{story=false;stage.classList.add('graph-story-complete');build(btn.dataset.view,now(),.22)}));

 // ---- hover only (no drag / rotation) ----
 const ray=new THREE.Raycaster(),ptr=new THREE.Vector2();let hovered=null;
 canvas.addEventListener('pointermove',e=>{
  const r=canvas.getBoundingClientRect();ptr.set(((e.clientX-r.left)/r.width)*2-1,-((e.clientY-r.top)/r.height)*2+1);
  ray.setFromCamera(ptr,camera);const hit=ray.intersectObjects(nodeList.filter(n=>n.cur>.6).map(n=>n.mesh))[0];
  hovered=hit?hit.object.userData.node:null;tip.textContent=hovered?hovered.id==='you'?'Your company':NAMES[hovered.id]:CAP[activeView];canvas.style.cursor=hovered?'pointer':'default';
 });
 canvas.addEventListener('pointerleave',()=>{hovered=null;tip.textContent=CAP[activeView]});

 // ---- fit camera to the panel so the layout never clips ----
 function resize(){
  const r=visual.getBoundingClientRect();if(!r.width||!r.height)return;
  renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;
  const t=Math.tan(THREE.MathUtils.degToRad(camera.fov/2));camera.position.z=Math.max(4.35/(t*camera.aspect),2.9/t);camera.updateProjectionMatrix();
 }
 new ResizeObserver(resize).observe(visual);resize();

 // ---- render loop ----
 const proj=new THREE.Vector3();let raf=0;
 function animate(){
  raf=requestAnimationFrame(animate);if(!active)return;
  const t=now();
  if(story){
   const s=t-storyT0;
   // separate suppliers → shared dependency → disruption reaches it → alternatives to assess
   if(phase===0&&s>3.6){phase=1;build('hidden',t,.32);setTab('hidden')}
   if(phase===1&&s>7.4){phase=2;build('impact',t,.38);setTab('impact')}
   if(phase===2&&s>11.2){phase=3;build('alternates',t,.3);setTab('alternates')}
   if(phase===3&&s>13.4){story=false;stage.classList.add('graph-story-complete')}
  }
  nodeList.forEach(n=>{
   const target=(n.inView&&t>=n.showAt)?1:0;n.cur+=(target-n.cur)*.14;if(Math.abs(target-n.cur)<.002)n.cur=target;
   n.dimF+=(n.dimT-n.dimF)*.12;n.hover+=(((hovered===n)?1.35:1)-n.hover)*.2;
   const pulse=n.id==='hub'&&(activeView==='hidden'||activeView==='impact')?1+(activeView==='impact'?.32:.18)*Math.sin(t*(activeView==='impact'?5:3)):1;
   const s=Math.max(.001,n.cur*n.hover);n.mesh.scale.setScalar(s);
   n.mesh.material.opacity=n.cur*n.dimF;n.halo.material.opacity=n.cur*n.dimF*(.55+.15*Math.sin(t*1.8+n.rad*40));
   n.halo.scale.setScalar(n.rad*7*s*pulse);n.label.material.opacity=n.cur*n.dimF;
  });
  heads.forEach(h=>{const v=Math.max(...h.ids.map(id=>nodes[id].cur));h.s.material.opacity=v*.9});
  const V=VIEWS[activeView];Object.entries(head5).forEach(([k,h])=>{const want=V.head5&&V.head5[0]===k?Math.max(nodes.hub.cur,nodes.k.cur,nodes.r.cur):0;h.cur+=(want-h.cur)*.14;h.s.material.opacity=h.cur*.95});
  edgeObjs.forEach(o=>{
   const p=ease(Math.min(1,Math.max(0,(t-o.startAt)/o.dur)));const n=Math.floor(o.idx*p/3)*3;
   o.core.geometry.setDrawRange(0,n);o.glow.geometry.setDrawRange(0,n);
   if(p>=1){o.dot.visible=true;o.dot.position.copy(o.curve.getPoint((t*o.spd+o.off)%1));o.dot.scale.setScalar(.8+.25*Math.sin(t*5+o.off*9))}else o.dot.visible=false;
  });
  renderer.render(scene,camera);
  // expose the focal node's on-screen position so the globe bridge lands exactly on it
  const f=nodes.you;proj.set(P.you[0],P.you[1],0).applyMatrix4(root.matrixWorld).project(camera);
  const w=visual.clientWidth,h=visual.clientHeight;
  const edgePx=new THREE.Vector3(P.you[0]-f.rad,P.you[1],0).applyMatrix4(root.matrixWorld).project(camera);
  window.__ctxFocal={x:(proj.x*.5+.5)*w,y:(-proj.y*.5+.5)*h,r:Math.abs((proj.x-edgePx.x)*.5*w),showAt:f.showAt,cur:f.cur};
 }
 animate();
 document.addEventListener('visibilitychange',()=>{cancelAnimationFrame(raf);if(!document.hidden)animate()});
 sync();
})();
      })();
      // ---- page module script ----
      (async () => {
const THREE = await import(/* webpackIgnore: true */ /* turbopackIgnore: true */ 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js');
window.__CQ_THREE=THREE;window.dispatchEvent(new Event('cq-three'));
      })();
      // ---- page module script ----
      (async () => {
// Uses the page's bundled Three.js (exposed by the hero) — no external downloads.
const THREE=window.__CQ_THREE||await new Promise(r=>window.addEventListener('cq-three',()=>r(window.__CQ_THREE),{once:true}));
// Minimal tween helper replacing the GSAP calls this globe used (to / set on numeric properties).
const gsap=(()=>{const E={'power2.out':t=>1-Math.pow(1-t,3),'power3.out':t=>1-Math.pow(1-t,4)};const live=new Map();
 function set(o,v){for(const k in v)if(typeof o[k]==='number')o[k]=v[k];const a=live.get(o);if(a)a.cancel=true;}
 function to(o,v){const d=(v.duration||1)*1000,ease=E[v.ease]||E['power2.out'],from={},keys=[];for(const k in v)if(typeof o[k]==='number'&&k!=='duration'){from[k]=o[k];keys.push(k);}
  const prev=live.get(o);if(prev)prev.cancel=true;const job={cancel:false};live.set(o,job);const s=performance.now();
  (function step(now){if(job.cancel)return;const p=Math.min(1,(now-s)/d),e=ease(p);for(const k of keys)o[k]=from[k]+(v[k]-from[k])*e;if(p<1)requestAnimationFrame(step);})(s);}
 return {to,set};})();

const canvas=document.getElementById('particleGlobe'), wrap=document.getElementById('globeWrap'), stage=document.getElementById('stage');
if(canvas&&wrap){
 const scene=new THREE.Scene();
 const camera=new THREE.PerspectiveCamera(42,1,.1,100);camera.position.z=8.5;
 let renderer;
 try{renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});}catch(e){console.warn('WebGL globe unavailable',e);}
 if(renderer){
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,2));renderer.setClearColor(0x000000,0);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.3;
  const globe=new THREE.Group();scene.add(globe);const radius=2.55,count=9000,golden=Math.PI*(3-Math.sqrt(5));
  const pos=new Float32Array(count*3),cols=new Float32Array(count*3),sizes=new Float32Array(count);const deep=new THREE.Color(0x0649b9),blue=new THREE.Color(0x168bff),ice=new THREE.Color(0xc9efff);
  for(let i=0;i<count;i++){const y=1-i/(count-1)*2,ring=Math.sqrt(1-y*y),theta=golden*i,r=radius+(Math.random()-.5)*.035;pos[i*3]=Math.cos(theta)*ring*r;pos[i*3+1]=y*r;pos[i*3+2]=Math.sin(theta)*ring*r;let c=deep.clone().lerp(blue,.35+Math.random()*.6);if(Math.random()>.91)c.lerp(ice,.7);cols.set([c.r,c.g,c.b],i*3);sizes[i]=Math.random()>.94?3+Math.random()*1.5:.7+Math.random()*1.25;}
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(pos,3));geo.setAttribute('color',new THREE.BufferAttribute(cols,3));geo.setAttribute('aSize',new THREE.BufferAttribute(sizes,1));
  const mat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,vertexColors:true,uniforms:{uPixelRatio:{value:renderer.getPixelRatio()},uTime:{value:0},uReveal:{value:0}},vertexShader:`attribute float aSize;uniform float uPixelRatio;uniform float uTime;uniform float uReveal;varying vec3 vColor;varying float vPulse;void main(){vColor=color;vec4 mv=modelViewMatrix*vec4(position,1.);float pulse=.82+.22*sin(uTime*1.4+position.x*2.1+position.y*3.);vPulse=pulse;gl_PointSize=clamp(aSize*uPixelRatio*(8./max(1.,-mv.z))*pulse,1.,9.)*uReveal;gl_Position=projectionMatrix*mv;}`,fragmentShader:`varying vec3 vColor;varying float vPulse;void main(){float d=length(gl_PointCoord-vec2(.5));if(d>.5)discard;float core=smoothstep(.20,0.,d);float halo=smoothstep(.5,.10,d)*.4;gl_FragColor=vec4(vColor*(1.+halo),(core+halo)*vPulse);}`});
  globe.add(new THREE.Points(geo,mat));
  const ac=115,ap=new Float32Array(ac*3),acol=new Float32Array(ac*3),asz=new Float32Array(ac);for(let i=0;i<ac;i++){let y=Math.random()*2-1,t=Math.random()*Math.PI*2,rr=Math.sqrt(1-y*y)*(radius+.015);ap[i*3]=Math.cos(t)*rr;ap[i*3+1]=y*(radius+.015);ap[i*3+2]=Math.sin(t)*rr;const c=new THREE.Color(Math.random()>.25?0x3da5ff:0xd5f5ff);acol.set([c.r,c.g,c.b],i*3);asz[i]=2.4+Math.random()*2.7;}
  const ag=new THREE.BufferGeometry();ag.setAttribute('position',new THREE.BufferAttribute(ap,3));ag.setAttribute('color',new THREE.BufferAttribute(acol,3));ag.setAttribute('aSize',new THREE.BufferAttribute(asz,1));
  const am=new THREE.ShaderMaterial({transparent:true,depthWrite:false,vertexColors:true,uniforms:{uPixelRatio:{value:renderer.getPixelRatio()},uTime:{value:0},uReveal:{value:0}},vertexShader:`attribute float aSize;uniform float uPixelRatio;uniform float uTime;uniform float uReveal;varying vec3 vColor;varying float vPulse;void main(){vColor=color;vec4 mv=modelViewMatrix*vec4(position,1.);vPulse=.72+.45*sin(uTime*2.+position.x*5.);gl_PointSize=clamp(aSize*uPixelRatio*(8./max(1.,-mv.z)),1.5,15.)*uReveal;gl_Position=projectionMatrix*mv;}`,fragmentShader:`varying vec3 vColor;varying float vPulse;void main(){float d=length(gl_PointCoord-vec2(.5));if(d>.5)discard;float core=smoothstep(.19,0.,d);float halo=smoothstep(.5,.08,d)*.65;gl_FragColor=vec4(vColor*(1.+halo*1.5),(core+halo)*vPulse);}`});globe.add(new THREE.Points(ag,am));
  globe.scale.setScalar(.08);globe.rotation.x=-.22;globe.rotation.y=-.65;
  let formed=false;const reveal=()=>{if(formed)return;formed=true;gsap.to(globe.scale,{x:1,y:1,z:1,duration:2.6,ease:'power3.out'});gsap.to(globe.rotation,{x:0,y:0,duration:2.8,ease:'power3.out'});gsap.to(mat.uniforms.uReveal,{value:1,duration:2.6,ease:'power2.out'});gsap.to(am.uniforms.uReveal,{value:1,duration:2.6,ease:'power2.out'});};
  // Keep the uploaded globe's reveal/rotation/pulse behavior; trigger its reveal when map edges arrive.
  const linkedObserver=new MutationObserver(()=>{if(stage.classList.contains('globe-linked'))reveal();else{formed=false;gsap.set(globe.scale,{x:.08,y:.08,z:.08});gsap.set(mat.uniforms.uReveal,{value:0});gsap.set(am.uniforms.uReveal,{value:0});gsap.set(globe.rotation,{x:-.22,y:-.65});}});linkedObserver.observe(stage,{attributes:true,attributeFilter:['class']});
  const clock=new THREE.Clock();let raf=0,alive=true;function resize(){const r=wrap.getBoundingClientRect();if(!r.width||!r.height)return;renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.position.z=8.5;camera.updateProjectionMatrix();mat.uniforms.uPixelRatio.value=renderer.getPixelRatio();am.uniforms.uPixelRatio.value=renderer.getPixelRatio();}const ro=new ResizeObserver(resize);ro.observe(wrap);resize();
  function tick(){if(!alive)return;const t=clock.getElapsedTime();mat.uniforms.uTime.value=t;am.uniforms.uTime.value=t;if(!matchMedia('(prefers-reduced-motion: reduce)').matches)globe.rotation.y=t*.035;renderer.render(scene,camera);raf=requestAnimationFrame(tick);}tick();document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelAnimationFrame(raf);else tick();});window.addEventListener('beforeunload',()=>{alive=false;cancelAnimationFrame(raf);ro.disconnect();linkedObserver.disconnect();geo.dispose();ag.dispose();mat.dispose();am.dispose();renderer.dispose();});
 }
}
      })();
      return {  };
    }
  })(cq);
}
