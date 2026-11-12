// Generated from public/html/contexq-banking-v6.html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      // ---- page script ----
      try {
(()=>{'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RMQ=matchMedia('(prefers-reduced-motion: reduce)');
const TAU=Math.PI*2,clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v)),ease=t=>{t=clamp(t);return t*t*(3-2*t)},easeOut=t=>1-Math.pow(1-clamp(t),3),mix=(a,b,t)=>a+(b-a)*t;

/* Icons shared by SVG and canvas */
const ICON={};$$('#sprite symbol').forEach(s=>{ICON[s.id.slice(2)]=new Path2D(s.querySelector('path').getAttribute('d'))});
function drawIcon(ctx,name,x,y,size,color,lw=1.5){const s=size/24;ctx.save();ctx.translate(x-size/2,y-size/2);ctx.scale(s,s);ctx.strokeStyle=color;ctx.lineWidth=lw/s;ctx.lineCap='round';ctx.lineJoin='round';ctx.stroke(ICON[name]);ctx.restore()}

/* World map: 2° land grid, lat 76 to -58 */
const MAP={rows:67,cols:180,lat0:76,span:134,b64:'AAAABhA24P///oAAAAAAEAAOwAAAAAAAAAAEACAAf//wAAEAADAAf/oAAAAAAAAAHdnn0AH//gAAAAAMDD///8DgAAADwAAD4z/wH/8gAAAoACDf//////wAgf///+wdjwD/8AAAH/iL//////////+D//////h2H/gAAAf+z/+/////////EX/////9n4D8AeAB++///////////+Af/////wkcBwAAAH5///////////99EP9////gHgAQAAAH5v//////////HAADgH///gH0AAAAEEx/////////+AIAACAC///8D+AAAAGCz/////////4A8AAAAAf///v/gAAALAL/////////wAwAAAAAf///n/wAAAbv///////////AgAAAAAL/////QAAAEf//////////9AAAAAAAB////sYAAAD///////////8AAAAAAAD////9AAAAB//7f///////4AAAAAAAD////0AAAAB/Pwf///////xQAAAAAAD////gAAAAPynwH//////+DAAAAAAAD///+AAAAAPCbP///////eCAAAAAAAD///8AAAAAfABf//////+ECAAAAAAAB///8AAAAAEeAC///////GMAAAAAAAA///4AAAAAH+AA///////AgAAAAAAAAf//wAAAAAf/jB///////hAAAAAAAAAL//gAAAAAf/7//f/////AAAAAAAAAAD/AQAAAAA///9/P/////gAAAAAAAAAB+AUAAAAB///+/h/////AAAAAAAAAAC+AAAAAAD////f0D///+gAAAAAAAAAAeAQAAAAD////P/B/7/4AAAAAAAAAAAeEGAAAAD////v+A/j+AAAAAAAAAAAAPsAwAAAD////n8A/B+ggAAAAAAAAAAB8AAAAAD////3wAeBfAgAAAAAAAAAAAPABAAAH////7gAcAfggAAAAAAAAAAADAAAAAD////8AAcAXgoAAAAAAAAAAABD6AAAB////9wAMATAYAAAAAAAAAAAAz/AAAB/////gAKAQAIAAAAAAAAAAAAH/gAAAf////gACAICIAAAAAAAAAAAAH/8AAAAH///AAAAsGAAAAAAAAAAAAAH/+AAAAB//+AAAAUOAAAAAAAAAAAAAP/+AAAAB//8AAAAM+wAAAAAAAAAAAAP//gAAAB//4AAAAccwgAAAAAAAAAAAP//+AAAB//wAAAAGFk/AAAAAAAAAAAP///AAAA//gAAAACAAHsAAAAAAAAAAP///gAAA//wAAAAAwBHwAAAAAAAAAAH///AAAAf/wAAAAABIAIAAAAAAAAAAH//+AAAAf/wAAAAAABgAAAAAAAAAAAD//+AAAA//wgAAAAABxAAAAAAAAAAAB//+AAAA//wgAAAAAPxgBAAAAAAAAAA//8AAAA//jgAAAAAf/gAAAAAAAAAAAf/8AAAA//DAAAAAAf/wAAAAAAAAAAAf/4AAAAf/DAAAAAD//4AAAAAAAAAAAf/gAAAAf/DAAAAAH//8AAAAAAAAAAAf/AAAAAf8AAAAAAH//+AAAAAAAAAAAf/AAAAAP8AAAAAAH//+AAAAAAAAAAA/+AAAAAP8AAAAAAH//+AAAAAAAAAAA/8AAAAAH4AAAAAAD//8AAAAAAAAAAA/4AAAAAHwAAAAAADwf8AAAAAAAAAAA/gAAAAAAAAAAAAAAAH4AAAAAAAAAAB/gAAAAAAAAAAAAAAAD4AEAAAAAAAAB+AAAAAAAAAAAAAAAAAAAEAAAAAAAAB8AAAAAAAAAAAAAAAAAwAIAAAAAAAAB4AAAAAAAAAAAAAAAAAAAQAAAAAAAABwAAAAAAAAAAAAAAAAAABgAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAACAAAAAAAAAAAAAAAAABwgAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA='};
const LAND=(()=>{const bin=atob(MAP.b64),out=[];for(let r=0;r<MAP.rows;r++)for(let c=0;c<MAP.cols;c++){const i=r*MAP.cols+c;if((bin.charCodeAt(i>>3)>>(7-(i&7)))&1)out.push([-180+c*2+1,MAP.lat0-r*2-1])}return out})();
function proj(lon,lat,m,k=0){return{x:m.ox+k*m.w+(lon+180)/360*m.w,y:m.oy+(MAP.lat0-lat)/MAP.span*m.h}}
function renderMap(W,H,dpr,m,color,r){const c=document.createElement('canvas');c.width=Math.max(1,W*dpr);c.height=Math.max(1,H*dpr);const x=c.getContext('2d');x.scale(dpr,dpr);x.fillStyle=color;for(let k=-1;k<=1;k++){for(const [lo,la] of LAND){const p=proj(lo,la,m,k);if(p.x<-2||p.x>W+2||p.y<-2||p.y>H+2)continue;x.beginPath();x.arc(p.x,p.y,r,0,TAU);x.fill()}}return c}

function fib(n){return Array.from({length:n},(_,i)=>{const y=1-i/(n-1)*2,r=Math.sqrt(1-y*y),a=i*2.399963;return{x:Math.cos(a)*r,y,z:Math.sin(a)*r}})}
function drawSphere(ctx,pts,cx,cy,R,rot,tilt,alpha,color,size=1,lift=0){const ca=Math.cos(rot),sa=Math.sin(rot),ct=Math.cos(tilt),st=Math.sin(tilt);ctx.fillStyle=color;for(const p of pts){const x1=p.x*ca+p.z*sa,z1=-p.x*sa+p.z*ca,y2=p.y*ct-z1*st,z2=p.y*st+z1*ct,d=(z2+1)/2;ctx.globalAlpha=alpha*(.1+d*(.6+lift));ctx.beginPath();ctx.arc(cx+x1*R,cy+y2*R,(.55+d*1.05)*size,0,TAU);ctx.fill()}ctx.globalAlpha=1}
function sizeCanvas(cv,el){const r=el.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);cv.width=Math.max(1,Math.round(r.width*dpr));cv.height=Math.max(1,Math.round(r.height*dpr));const ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);return{W:r.width,H:r.height,dpr,ctx}}

/* Header border on scroll */
const header=$('#siteHeader');if(header){const onScroll=()=>header.classList.toggle('scrolled',scrollY>8);addEventListener('scroll',onScroll,{passive:true});onScroll();}

/* =========================================================
   01 HERO — signals converge on the ContexQ core, graph emerges
   ========================================================= */
(function hero(){
  const hero=$('.hero'),cv=$('#heroCanvas'),stage=$('#heroStage'),copy=$('.hero-copy'),stepEls=$$('.hero-steps li'),replay=$('#heroReplay');
  let paused=false,W=0,H=0,dpr=1,ctx,cx=0,cy=0,R=100,m,mapImg,eligible=[],primary=[],t=0,last=0,inView=true,reduce=RMQ.matches,ambient=[],pulses=[],nextAmbient=9.4,stepIdx=-1;
  const SPH=fib(900);
  const CITIES=[['Singapore',103.8,1.35,'card'],['Hong Kong',114.2,22.3,'building'],['Mumbai',72.8,19,'person'],['Dubai',55.3,25.2,'doc'],['Tokyo',139.7,35.7,'phone'],['London',-0.1,51.5,'hierarchy'],['Sydney',151.2,-33.9,'news'],['Frankfurt',8.7,50.1,'doc'],['Jakarta',106.8,-6.2,'phone'],['Seoul',127,37.5,'card'],['Johannesburg',28,-26.2,'person'],['Lagos',3.4,6.5,'building'],['New York',-74,40.7,'card'],['Istanbul',29,41,'news'],['Riyadh',46.7,24.7,'card'],['Nairobi',36.8,-1.3,'phone'],['Shanghai',121.5,31.2,'building'],['Perth',115.9,-32,'doc'],['Delhi',77.2,28.6,'person'],['Manila',121,14.6,'card']];
  const NODES=[{dx:-1.95,dy:-.42,label:'Customer',icon:'person'},{dx:-1.62,dy:1.02,label:'Account',icon:'card'},{dx:-.4,dy:1.78,label:'Device',icon:'phone'},{dx:1.18,dy:1.42,label:'Counterparty',icon:'bank'},{dx:1.92,dy:-.72,label:'Owner',icon:'person'},{dx:.62,dy:-1.84,label:'Company',icon:'building'},{dx:-.98,dy:-1.62,label:'Adverse media',icon:'news'}];
  const EDGES=[[0,1],[1,2],[1,3],[5,4],[4,3],[6,5],[2,3],[0,6]];
  const RING={rx:1.4,ry:.42,rot:-.32,start:Math.PI*.25};

  function layout(){
    ({W,H,dpr,ctx}=sizeCanvas(cv,hero));
    const hr=hero.getBoundingClientRect(),sr=stage.getBoundingClientRect(),cr=copy.getBoundingClientRect();
    const usableH=sr.height-48;
    cx=sr.left-hr.left+sr.width/2;cy=sr.top-hr.top+usableH/2+4;
    R=Math.max(52,Math.min(sr.width/4.5,usableH/4.3));
    const wide=W>=900;
    const mw=wide?Math.max(W*1.05,1200):Math.max(W*3,900);
    m={w:mw,h:mw*MAP.span/360};m.ox=cx-(100+180)/360*m.w;m.oy=cy-(MAP.lat0-14)/MAP.span*m.h;
    mapImg=renderMap(W,H,dpr,m,'#5C86C8',Math.max(.85,m.w/180*.12));
    const box={l:cr.left-hr.left-24,r:cr.right-hr.left+24,t:cr.top-hr.top-24,b:cr.bottom-hr.top+24};
    eligible=[];
    for(const [name,lo,la,type] of CITIES){let best=null;for(let k=-1;k<=1;k++){const p=proj(lo,la,m,k);if(p.x<16||p.x>W-16||p.y<16||p.y>H-60)continue;if(!best||Math.abs(p.x-cx)<Math.abs(best.x-cx))best=p}
      if(!best)continue;if(best.x>box.l&&best.x<box.r&&best.y>box.t&&best.y<box.b)continue;const d=Math.hypot(best.x-cx,best.y-cy);if(d<R*1.25)continue;eligible.push({name,type,x:best.x,y:best.y})}
    primary=eligible.slice(0,9).map((c,i)=>makeSignal(c,.5+i*.3,1.7));
    if(reduce)draw();
  }
  function makeSignal(c,start,dur){const ang=Math.atan2(c.y-cy,c.x-cx);const ex=cx+Math.cos(ang)*R*.97,ey=cy+Math.sin(ang)*R*.97;const mx=(c.x+ex)/2,my=(c.y+ey)/2,len=Math.hypot(ex-c.x,ey-c.y);let nx=-(ey-c.y)/len,ny=(ex-c.x)/len;if(ny>0){nx=-nx;ny=-ny}return{c,start,dur,ex,ey,qx:mx+nx*len*.22,qy:my+ny*len*.22,done:false}}
  const qpt=(s,p)=>({x:(1-p)*(1-p)*s.c.x+2*(1-p)*p*s.qx+p*p*s.ex,y:(1-p)*(1-p)*s.c.y+2*(1-p)*p*s.qy+p*p*s.ey});
  function chip(x,y,type,a,sc=1){const r=10*sc;ctx.globalAlpha=a;ctx.fillStyle='#0B1838';ctx.strokeStyle='rgba(63,200,242,.75)';ctx.lineWidth=1;ctx.beginPath();ctx.roundRect?ctx.roundRect(x-r,y-r,r*2,r*2,3*sc):ctx.rect(x-r,y-r,r*2,r*2);ctx.fill();ctx.stroke();drawIcon(ctx,type,x,y,13*sc,'#9FE3F7',1.3);ctx.globalAlpha=1}
  function drawSignal(s,now,persist){
    const local=now-s.start;if(local<0)return;
    const travel=(local-.45)/s.dur;
    if(local<1.8){const pr=local/1.8;ctx.strokeStyle='rgba(63,200,242,'+(.55*(1-pr))+')';ctx.lineWidth=1;ctx.beginPath();ctx.arc(s.c.x,s.c.y,3+pr*16,0,TAU);ctx.stroke()}
    const dotA=travel<1?.9:(persist?.45:Math.max(0,.9-(travel-1)*2));if(dotA>0){ctx.globalAlpha=dotA;ctx.fillStyle='#7FD6F5';ctx.beginPath();ctx.arc(s.c.x,s.c.y,2.2,0,TAU);ctx.fill();ctx.globalAlpha=1}
    if(travel<=0){chip(s.c.x,s.c.y-18,s.c.type,ease(local/.45));return}
    if(travel<1){const p=ease(travel),p0=Math.max(0,p-.32);let prev=qpt(s,p0);ctx.lineWidth=1.3;ctx.lineCap='round';for(let i=1;i<=14;i++){const pp=mix(p0,p,i/14),pt=qpt(s,pp);ctx.strokeStyle='rgba(63,200,242,'+(.55*i/14)+')';ctx.beginPath();ctx.moveTo(prev.x,prev.y);ctx.lineTo(pt.x,pt.y);ctx.stroke();prev=pt}
      const h=qpt(s,p);chip(h.x,h.y,s.c.type,1-ease((travel-.8)/.2)*.6,mix(1,.5,p));return}
    const since=(travel-1)*s.dur;if(since<.7){ctx.strokeStyle='rgba(159,227,247,'+(.8*(1-since/.7))+')';ctx.lineWidth=1.2;ctx.beginPath();ctx.arc(s.ex,s.ey,2+since*18,0,TAU);ctx.stroke()}else s.done=true;
  }
  function ringPoint(th){const x=Math.cos(th)*RING.rx*R,y=Math.sin(th)*RING.ry*R,c=Math.cos(RING.rot),s=Math.sin(RING.rot);return{x:cx+x*c-y*s,y:cy+x*s+y*c}}
  function drawRing(prog,front){if(prog<=0)return;const end=RING.start+prog*TAU;ctx.strokeStyle='rgba(63,200,242,.78)';ctx.lineWidth=1.4;ctx.beginPath();let pen=false;for(let th=RING.start;th<=end+1e-4;th+=.04){const isFront=Math.sin(th)>=0;const p=ringPoint(Math.min(th,end));if(isFront===front){pen?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y);pen=true}else pen=false}ctx.stroke();
    if(front&&prog<1){const h=ringPoint(end);ctx.fillStyle='#E7F8FE';ctx.beginPath();ctx.arc(h.x,h.y,2.4,0,TAU);ctx.fill()}}
  function drawTail(p){if(p<=0)return;const P=ringPoint(RING.start),dx=.74,dy=.67,a={x:P.x-dx*R*.1,y:P.y-dy*R*.1},b={x:P.x+dx*R*.46*p,y:P.y+dy*R*.46*p};const g=ctx.createLinearGradient(a.x,a.y,P.x+dx*R*.46,P.y+dy*R*.46);g.addColorStop(0,'#3FC8F2');g.addColorStop(1,'#F26B3A');ctx.strokeStyle=g;ctx.lineWidth=2.4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}
  function nodePos(i,k){const n=NODES[i];return{x:mix(cx,cx+n.dx*R,k),y:mix(cy,cy+n.dy*R,k)}}
  function draw(){
    const now=reduce?14:t;ctx.clearRect(0,0,W,H);
    const mapA=ease(now/1.2);ctx.globalAlpha=mapA*.3;ctx.drawImage(mapImg,0,0,W,H);ctx.globalAlpha=1;
    const sphA=.45+ease((now-.2)/1.2)*.25,glow=ease((now-4.3)/.9);
    // signals
    if(!reduce){for(const s of primary)drawSignal(s,now,true);for(const s of ambient)drawSignal(s,now,false);ambient=ambient.filter(s=>!s.done)}
    else{for(const s of primary){ctx.globalAlpha=.45;ctx.fillStyle='#7FD6F5';ctx.beginPath();ctx.arc(s.c.x,s.c.y,2.2,0,TAU);ctx.fill();ctx.globalAlpha=1}}
    // core glow
    const g=ctx.createRadialGradient(cx,cy,R*.2,cx,cy,R*1.7);g.addColorStop(0,'rgba(30,110,220,'+(.16+glow*.1)+')');g.addColorStop(1,'rgba(30,110,220,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(cx,cy,R*1.7,0,TAU);ctx.fill();
    const ringP=ease((now-3.6)/1.7);
    drawRing(ringP,false);
    drawSphere(ctx,SPH,cx,cy,R,now*.12,.36,sphA+glow*.2,'#8FD3F2',W<600?.85:1,glow*.15);
    drawRing(ringP,true);drawTail(ease((now-5.2)/.5));
    // graph
    const emerge=NODES.map((_,i)=>easeOut((now-5.7-i*.16)/1.1));
    if(emerge.some(v=>v>0)){
      ctx.setLineDash([2,5]);ctx.lineWidth=1;NODES.forEach((_,i)=>{if(emerge[i]<=0)return;const p=nodePos(i,emerge[i]),ang=Math.atan2(p.y-cy,p.x-cx);ctx.strokeStyle='rgba(91,150,220,'+(.35*emerge[i])+')';ctx.beginPath();ctx.moveTo(cx+Math.cos(ang)*R*1.02,cy+Math.sin(ang)*R*1.02);ctx.lineTo(p.x,p.y);ctx.stroke()});ctx.setLineDash([]);
      EDGES.forEach(([a,b],j)=>{const k=easeOut((now-6.9-j*.1)/.8);if(k<=0)return;const p=nodePos(a,emerge[a]),q=nodePos(b,emerge[b]);ctx.strokeStyle='rgba(63,200,242,.5)';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(mix(p.x,q.x,k),mix(p.y,q.y,k));ctx.stroke()});
      for(const pu of pulses){const k=(now-pu.start)/1.1;if(k<0||k>1)continue;const e=nodePos(pu.node,1),ang=Math.atan2(e.y-cy,e.x-cx),sx=cx+Math.cos(ang)*R,sy=cy+Math.sin(ang)*R;ctx.fillStyle='#E7F8FE';ctx.beginPath();ctx.arc(mix(sx,e.x,ease(k)),mix(sy,e.y,ease(k)),2.4,0,TAU);ctx.fill()}
      pulses=pulses.filter(p=>now-p.start<2.2);
      const fs=W<600?11:12;ctx.font='500 '+fs+'px "Hanken Grotesk",system-ui,sans-serif';ctx.textAlign='center';ctx.textBaseline='alphabetic';
      NODES.forEach((n,i)=>{const k=emerge[i];if(k<=0)return;const p=nodePos(i,k),pr=W<600?13:15;let lit=0;for(const pu of pulses){if(pu.node===i){const d=now-pu.start-1.1;if(d>0&&d<1.1)lit=Math.max(lit,1-d/1.1)}}
        ctx.globalAlpha=k;ctx.fillStyle='#0A1736';ctx.strokeStyle=lit?'rgba(231,248,254,'+(.6+lit*.4)+')':'rgba(63,200,242,.85)';ctx.lineWidth=1.2+lit;ctx.beginPath();ctx.arc(p.x,p.y,pr,0,TAU);ctx.fill();ctx.stroke();
        drawIcon(ctx,n.icon,p.x,p.y,pr*1.05,'#9FE3F7',1.3);ctx.fillStyle='#C9D5E8';ctx.fillText(n.label,p.x,p.y+pr+16);ctx.globalAlpha=1});
    }
    const si=now<4.3?0:now<5.9?1:2;if(si!==stepIdx){stepIdx=si;stepEls.forEach((li,i)=>li.classList.toggle('on',i===si))}
  }
  function frame(ts){if(!last)last=ts;const dt=Math.min((ts-last)/1000,.1);last=ts;
    if(!reduce&&!paused&&inView&&!document.hidden){t+=dt;
      if(t>nextAmbient&&eligible.length){const c=eligible[Math.floor(Math.random()*eligible.length)];ambient.push(makeSignal(c,t,1.8));const arrive=t+.45+1.8;pulses.push({node:Math.floor(Math.random()*NODES.length),start:arrive});nextAmbient=t+2.6}
      draw()}
    requestAnimationFrame(frame)}
  const pauseB=$('#heroPause');const setP=v=>{paused=v;pauseB.textContent=v?'▶':'Ⅱ';pauseB.setAttribute('aria-label',v?'Play animation':'Pause animation')};pauseB.addEventListener('click',()=>setP(!paused));
  replay.addEventListener('click',()=>{setP(false);t=0;ambient=[];pulses=[];nextAmbient=9.4;primary.forEach(s=>s.done=false);if(reduce)draw()});
  new IntersectionObserver(e=>{inView=e[0].isIntersecting},{threshold:.05}).observe(hero);
  document.addEventListener('visibilitychange',()=>{last=0});
  RMQ.addEventListener?.('change',e=>{reduce=e.matches;draw()});
  let rt;new ResizeObserver(()=>{clearTimeout(rt);rt=setTimeout(layout,60)}).observe(hero);
  layout();if(reduce){replay.hidden=true;pauseB.hidden=true}
  document.fonts&&document.fonts.ready.then(()=>{if(reduce)draw()});
  requestAnimationFrame(frame);
})();

/* =========================================================
   02 INTELLIGENCE SOURCES — original connected-view animation (ported)
   ========================================================= */
(()=>{'use strict';const canvas=document.querySelector('#network'),ctx=canvas.getContext('2d'),scene=document.querySelector('#scene');let W=800,H=550,dpr=1,clock=0,last=0,playing=!matchMedia('(prefers-reduced-motion: reduce)').matches,stage=-1,hover=-1;const SPEED=1.5,STAGE_SPEED=[1.8,1,1.35,1],duration=7,total=28,TAU=Math.PI*2;const mint='#79D9F2',blue='#5BA9E0',gold='#F2C47F';const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v)),ease=t=>{t=clamp(t);return t*t*(3-2*t)},mix=(a,b,t)=>a+(b-a)*t;let points=[];const nodes=[
{x:.29,y:.46,label:'Bank customer',type:'person',desc:'One person, matched from six bank and registry records.',focal:true},
{x:.5,y:.29,label:'Aster Trading',type:'company',desc:'Separate company. Customer is a director: corporate registry, 12 Mar 2025. Confirmed.'},
{x:.74,y:.43,label:'Meridian Holdings',type:'company',desc:'Separate company. Owns 60% of Aster Trading: ownership register, 3 Jan 2025. Confirmed.'},
{x:.77,y:.69,label:'Listed entity',type:'risk',desc:'Potential match to Meridian Holdings on name and country: sanctions list, 20 Sep 2026. Needs analyst review; not a sanctions finding.',risk:true},
{x:.47,y:.73,label:'Payment account',type:'account',desc:'Account held by the customer: core banking. Confirmed.'},
{x:.15,y:.69,label:'Shared address',type:'location',desc:'Address shared with another account holder. Context only; not evidence of common ownership.'},
{x:.2,y:.24,label:'KYC record',type:'person',desc:'Onboarding record: name, ID and address.'},
{x:.67,y:.17,label:'Registry record',type:'document',desc:'Corporate registry filing listing directors.'},
{x:.89,y:.28,label:'Ownership',type:'document',desc:'Shareholding record for Aster Trading.'},
{x:.91,y:.55,label:'Screening',type:'document',desc:'Screening result behind the potential match.'},
{x:.28,y:.84,label:'Transactions',type:'account',desc:'Payment history for the account.'},
{x:.61,y:.58,label:'Device',type:'device',desc:'Device used for sessions on the payment account.'}];
const edges=[[0,1],[1,2],[2,3],[0,4],[0,5],[0,6],[1,7],[2,8],[3,9],[4,10],[4,5],[1,4],[4,11]];
const texts=[['Bring data together','Bank records meet external sources.','Accounts, payments and devices meet registries, ownership and screening data.'],['Match records','A clearer view of the customer.','Connect records of the same person, with the match details available for review.'],['Link entities','The relationships behind the customer.','The customer and two companies stay distinct, joined by directorship and ownership.'],['Examine evidence','An indirect link that needs review.','The path ends at a potential screening match, not a sanctions conclusion.']];
function size(){let r=scene.getBoundingClientRect();W=r.width;H=r.height;dpr=Math.min(devicePixelRatio||1,2);canvas.width=W*dpr;canvas.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}new ResizeObserver(size).observe(scene);
const particles=Array.from({length:820},(_,i)=>{let y=1-i/819*2,r=Math.sqrt(1-y*y),a=i*2.399963;return{x:Math.cos(a)*r,y,z:Math.sin(a)*r,seed:i*.71}});
function line(x,y,x2,y2,color,width=1,alpha=1){ctx.globalAlpha=alpha;ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x2,y2);ctx.stroke();ctx.globalAlpha=1}
function text(s,x,y,color,size=11,align='center'){ctx.fillStyle=color;ctx.font=`500 ${size}px "Hanken Grotesk",Arial,sans-serif`;ctx.textAlign=align;ctx.fillText(s,x,y)}
function circle(x,y,r,color,alpha=1){ctx.globalAlpha=alpha;ctx.fillStyle=color;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();ctx.globalAlpha=1}
function icon(type,x,y,color){const MAPI={person:'person',risk:'alert',document:'doc',account:'card',company:'building',device:'phone',location:'pin'};if(MAPI[type]&&ICON[MAPI[type]]){drawIcon(ctx,MAPI[type],x,y,13,color,1.2);return}ctx.strokeStyle=color;ctx.lineWidth=1.15;ctx.beginPath();if(type==='person'){ctx.arc(x,y-3,2.5,0,TAU);ctx.moveTo(x-4,y+5);ctx.quadraticCurveTo(x-4,y,x,y);ctx.quadraticCurveTo(x+4,y,x+4,y+5)}else if(type==='risk'){ctx.moveTo(x,y-6);ctx.lineTo(x+6,y+5);ctx.lineTo(x-6,y+5);ctx.closePath();ctx.moveTo(x,y-2);ctx.lineTo(x,y+1);ctx.moveTo(x,y+3);ctx.lineTo(x,y+3.5)}else{ctx.rect(x-4,y-5,8,10);ctx.moveTo(x-2,y-2);ctx.lineTo(x+2,y-2);ctx.moveTo(x-2,y+1);ctx.lineTo(x+2,y+1)}ctx.stroke()}
function node(n,x,y,alpha=1,r=15){ctx.save();ctx.globalAlpha=alpha;let col=n.risk?gold:n.focal?mint:blue;ctx.shadowColor=col;ctx.shadowBlur=n.focal||n.risk?20:8;circle(x,y,r+5,col,.06*alpha);ctx.globalAlpha=alpha;ctx.fillStyle='#0A1736';ctx.strokeStyle=col;ctx.lineWidth=n.focal?1.4:.8;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();ctx.stroke();ctx.shadowBlur=0;icon(n.type,x,y,col);ctx.globalAlpha=alpha;text(n.label,x,y+r+18,n.focal?'#d8f6ed':'#a7bfc3',W<480?9:11);ctx.restore()}
function setStage(s){if(s===stage)return;stage=s;document.querySelectorAll('.step').forEach((b,i)=>b.classList.toggle('active',i===s));let t=texts[s];document.querySelector('#stageStatus').textContent=`${['Bring data together','Match records','Link entities','Examine evidence'][s]}`;['insightTag','insightTitle','insightBody'].forEach((id,i)=>document.getElementById(id).textContent=t[i]);document.querySelector('#dialog').hidden=true;document.querySelector('#hint').textContent=s>1?'Select a node to inspect':''}
function render(now){if(!last)last=now;let dt=Math.min((now-last)/1000,.1);last=now;if(playing&&!document.hidden&&inView)clock=(clock+dt*SPEED*STAGE_SPEED[Math.min(3,Math.floor(clock/duration))])%total;let s=Math.min(3,Math.floor(clock/duration)),local=clock-s*duration;setStage(s);document.querySelectorAll('.step').forEach((b,i)=>b.style.setProperty('--progress',(i<s?100:i===s?local/duration*100:0)+'%'));ctx.clearRect(0,0,W,H);let cx=W*.51,cy=H*.47,R=Math.min(W*.23,H*.30);let rotation=clock*.17,expand=ease((clock-13)/4);const networkAlpha=expand;let particleAlpha=1-expand*.92;
// Quiet concentric depth rings.
ctx.strokeStyle='#184049';ctx.lineWidth=.5;ctx.globalAlpha=.35;[1.15,1.5].forEach(m=>{ctx.beginPath();ctx.ellipse(cx,cy,R*m,R*m,0,0,TAU);ctx.stroke()});ctx.globalAlpha=1;
particles.forEach(p=>{let xx=p.x*Math.cos(rotation)+p.z*Math.sin(rotation),zz=-p.x*Math.sin(rotation)+p.z*Math.cos(rotation),scale=1+zz*.17;let rad=R*(1+expand*.55);circle(cx+xx*rad*scale,cy+p.y*rad*scale,(.65+(zz+1)*.45)*(W<500?.8:1),'#7FC9EE',particleAlpha*(.16+(zz+1)*.26))});
if(s===0){const labels=[['KYC & customer records',['doc']],['Accounts & payments',['bank']],['Devices & channels',['phone']],['Corporate registries',['building']],['Ownership records',['hierarchy']],['Sanctions & adverse media',['shield','news']]];
const narrow=W<640,fs=narrow?12:14;let a=ease(local/1.8);ctx.font=`500 ${fs}px "Hanken Grotesk",Arial,sans-serif`;ctx.textBaseline='middle';
labels.forEach(([l,ics],i)=>{const left=narrow||i<3,k=i%3,iw=ics.length*18,tw=ctx.measureText(l).width;let x,y;
if(narrow){x=16;y=i<3?62+k*26:H-118+k*26}else{x=left?W*.05:W*.95;y=H*(.3+k*.19)}
const dir=left?1:-1,textX=x+dir*(iw+8),sx=textX+dir*(tw+12),sy=y;
const ang=Math.atan2(sy-cy,sx-cx),ex=cx+Math.cos(ang)*R*.97,ey=cy+Math.sin(ang)*R*.97;
ctx.globalAlpha=a;ics.forEach((ic,j)=>{const ix=left?x+9+j*18:x-9-(ics.length-1-j)*18;drawIcon(ctx,ic,ix,y,15,mint,1.4)});ctx.globalAlpha=1;
ctx.fillStyle='#C6D2E6';ctx.globalAlpha=a;ctx.textAlign=left?'left':'right';ctx.fillText(l,textX,y);ctx.globalAlpha=1;
circle(sx,sy,2,mint,.9*a);line(sx,sy,ex,ey,blue,.8,.5*a);
for(let p=0;p<3;p++){let t=(local*.32+p/3+i*.11)%1;circle(mix(sx,ex,t),mix(sy,ey,t),1.8,mint,a*(1-t*.5))}});
ctx.textBaseline='alphabetic';ctx.save();ctx.font=`500 ${narrow?18:26}px "Hanken Grotesk",Arial,sans-serif`;ctx.fillStyle='#E1EDF8';ctx.textAlign='center';if('letterSpacing' in ctx)ctx.letterSpacing='0.02em';ctx.fillText('ContexQ',cx,cy+8);ctx.restore();}
if(s===1){const narrow=W<640;
const recs=[['KYC record','Name, ID, address','doc'],['Account holder','Core banking','bank'],['Payment payer','Name variant','card'],['Registry director','Name + date of birth','building'],['Shareholder entry','Ownership record','hierarchy'],['Loan file','Lending system','doc']];
const posD=[[-1.62,-.78],[-1.82,0],[-1.62,.78],[1.62,-.78],[1.82,0],[1.62,.78]],posM=[[-1.12,-1.5],[0,-2.15],[1.12,-1.5],[-1.12,1.4],[0,2.0],[1.12,1.4]];
const pos=narrow?posM:posD,draw=ease(local/1),m=ease((local-1.2)/2.4),lab=1-ease((m-.45)/.3);
ctx.textAlign='center';
recs.forEach(([name,sub,ic],i)=>{const tx=cx+pos[i][0]*R,ty=cy+pos[i][1]*R,x=mix(tx,cx,m),y=mix(ty,cy,m);
 if(m<.98){line(x,y,mix(x,cx,draw),mix(y,cy,draw),blue,.8,.45*(1-m));const t=(local*.6+i*.17)%1;circle(mix(x,cx,t),mix(y,cy,t),1.8,mint,.8*(1-m))}
 const r=narrow?12:14,al=1-m*.85;ctx.save();ctx.globalAlpha=al;ctx.fillStyle='#0A1736';ctx.strokeStyle=mint;ctx.lineWidth=1.2;ctx.shadowColor=mint;ctx.shadowBlur=10;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();ctx.stroke();ctx.shadowBlur=0;drawIcon(ctx,ic,x,y,r*1.05,mint,1.3);ctx.restore();
 if(lab>0){ctx.globalAlpha=lab;text(name,x,y+r+16,'#D6E2F2',narrow?10.5:12);text(sub,x,y+r+30,'#8DA0C2',narrow?9.5:11);ctx.globalAlpha=1}});
node({type:'person',label:'Matched customer',focal:true},cx,cy,ease((local-2.6)/1.2),21);
if(local>3.4){ctx.globalAlpha=ease((local-3.4)/.8);const ly=narrow?cy+R+22:cy+R*.62;text('A clearer customer view',cx,ly,mint,narrow?11:12);text('Matched on name, date of birth and ID',cx,ly+17,'#8DA0C2',narrow?9.5:11);ctx.globalAlpha=1}}
points=nodes.map(n=>({x:mix(cx,n.x*W,expand),y:mix(cy,n.y*H,expand)}));if(networkAlpha>0){edges.forEach(([a,b],i)=>{let p=points[a],q=points[b],reveal=ease((clock-14-i*.15)/1.7);line(p.x,p.y,mix(p.x,q.x,reveal),mix(p.y,q.y,reveal),blue,.8,.35*networkAlpha);if(reveal>.9){let t=(clock*.17+i*.21)%1;circle(mix(p.x,q.x,t),mix(p.y,q.y,t),1.5,blue,.7*networkAlpha)}});if(s===3){for(let i=0;i<3;i++){let t=ease((local-i*1.2)/1.4),p=points[i],q=points[i+1];ctx.shadowBlur=10;ctx.shadowColor=gold;line(p.x,p.y,mix(p.x,q.x,t),mix(p.y,q.y,t),gold,1.8,t);ctx.shadowBlur=0;if(t>.8){let f=(local*.36)%1;circle(mix(p.x,q.x,f),mix(p.y,q.y,f),2.7,'#ffebc7');let lx=(p.x+q.x)/2,ly=(p.y+q.y)/2;text(['director of','60% owned by','△ potential match'][i],lx,ly-10,'#e8c895',W<480?8:10)}}}nodes.forEach((n,i)=>{let p=points[i];node(n,p.x,p.y,networkAlpha,hover===i?19:n.focal?19:14)});if(s===3&&local>4.2){text('△ Potential match: analyst review required',W*.54,H*.9,gold,W<480?10:12)}}requestAnimationFrame(render)}
function updatePause(){document.querySelector('#pause').textContent=playing?'Ⅱ':'▶';document.querySelector('#pause').setAttribute('aria-label',playing?'Pause animation':'Play animation')}
function jump(s){clock=s*duration+5.5;playing=false;updatePause();setStage(s)}document.querySelectorAll('.step').forEach(b=>b.addEventListener('click',()=>jump(Number(b.dataset.step))));document.querySelector('#pause').onclick=()=>{playing=!playing;updatePause()};document.querySelector('#replay').onclick=()=>{clock=0;playing=true;updatePause()};document.querySelector('#close').onclick=()=>document.querySelector('#dialog').hidden=true;
function hit(e){let b=canvas.getBoundingClientRect(),x=e.clientX-b.left,y=e.clientY-b.top;return stage>1?points.findIndex(p=>Math.hypot(p.x-x,p.y-y)<25):-1}canvas.onpointermove=e=>{hover=hit(e);canvas.style.cursor=hover>=0?'pointer':'default'};canvas.onpointerleave=()=>{hover=-1};canvas.onclick=e=>{let i=hit(e);if(i<0)return;playing=false;updatePause();document.querySelector('#nodeTitle').textContent=nodes[i].label;document.querySelector('#nodeText').textContent=nodes[i].desc;document.querySelector('#dialog').hidden=false};if(!playing)clock=25.5;let inView=false;new IntersectionObserver(entries=>{inView=entries[0].isIntersecting},{threshold:.15}).observe(scene);document.addEventListener('visibilitychange',()=>{last=0});updatePause();size();requestAnimationFrame(render);
})();


/* =========================================================
   05 USE CASES  +  07 DEMO CTA
   ========================================================= */
(function useCases(){
  const FAM=['Financial crime & fraud','Customer due diligence','Credit & portfolio risk','Customer & relationship intelligence'];
  const C=[
    {f:0,t:'Anti-money laundering (AML)',h:"Investigate the network behind financial crime.",with:"Connect transactions, accounts, customers and controlling businesses to reveal relationships behind an AML alert.",chain:[['Customer','person'],['Linked accounts','card'],['Controlling company','building'],['Related parties','hierarchy']],v:"Help investigators focus on connected activity and build cases with supporting evidence.",q:'',dh:"Catch more. Chase less.",td:"Rules on single accounts; most alerts are closed with no action.",wq:"The network behind the money, with the evidence behind every alert.",act:"Review the connected accounts as one case and prepare the report with the evidence attached."},
    {f:0,t:'Payment fraud & scams',h:"Protect payments with a clearer view of the payee.",with:"Bring beneficiary relationships, shared devices and scam signals into payment reviews.",chain:[['Payer','person'],['Beneficiary account','card'],['Shared device','phone'],['Linked accounts','globe']],v:"Support more informed interventions while considering the impact on genuine customers.",q:'Timing depends on payment-flow integration.',dh:"Clear the good. Stop the scam.",td:"Each payment is scored on its own; scam rings route around the rules.",wq:"The payee and the network behind them, assessed before money leaves.",act:"Pause the payment and speak to the customer before release."},
    {f:0,t:'Money-mule detection',h:"Expose mule networks beyond a single account.",with:"Link accounts through devices, identities and fund flows to reveal potential mule rings and coordinators.",chain:[['Flagged account','card'],['Shared device','phone'],['Linked accounts','globe'],['Possible coordinator','person']],v:"Give fraud teams a broader target for investigation and coordinated action.",q:'',dh:"The ring, not just the account.",td:"A flagged account is closed; the ring simply opens new ones.",wq:"The linked accounts and their coordinator, from one flagged account.",act:"Restrict the linked accounts and review them together before cash-out."},
    {f:0,t:'Terrorist financing & human trafficking',h:"Bring hidden criminal networks into view.",with:"Connect people, payments and businesses to support specialist investigations into terrorist financing and human trafficking.",chain:[['Payment','card'],['Sender','person'],['Intermediary company','building'],['Recipient network','globe']],v:"Help teams develop and assess leads with the surrounding relationships in view.",q:'',dh:"Follow the network across borders.",td:"Leads are worked one party at a time.",wq:"People, payments and businesses followed across borders and channels.",act:"Escalate the connected network to your specialist unit, evidence attached."},
    {f:1,t:'KYC, EDD & perpetual KYC',h:"Focus due diligence where risk changes.",with:"Connect customer records, ownership and screening information to identify changes that warrant closer review.",chain:[['Customer file','doc'],['Change detected','alert'],['Materiality check','check'],['Focused review','person']],process:true,v:"Direct review effort towards material changes and support evidence-based customer decisions.",q:'Supports ongoing due diligence alongside required periodic reviews.',dh:"Onboard once. Know always.",td:"Reviews run by calendar; risk drifts unseen in between.",wq:"Reviews triggered by real changes in ownership, sanctions or media.",act:"Review this customer now: its ownership changed last week."},
    {f:2,t:'Credit & counterparty risk',h:"See risk beyond the borrower.",with:"Connect owners, group companies and key counterparties with financial and external risk signals.",chain:[['Borrower','building'],['Major buyer','flow'],['Buyer’s parent','hierarchy'],['Insolvency filing','alert']],v:"Support earlier watch-list reviews and a clearer understanding of connected exposure.",q:'Warnings inform, not replace, credit judgement.',dh:"Score the ecosystem, not the snapshot.",td:"Bureau scores and last filings show one borrower at a point in time.",wq:"Stress in buyers, suppliers and owners flagged as it builds.",act:"Add the borrower to the watch list and review its covenants early."},
    {f:2,t:'Collections & recoveries',h:"Bring customer context to recovery decisions.",with:"Connect customer and account information to support collections and recovery reviews.",chain:[['Overdue account','card'],['Customer','person'],['Linked accounts','bank'],['Asset records','doc']],v:"Help teams prioritise cases and choose an appropriate next action.",q:'',dh:"The right party, the right approach.",td:"Collections work from account data alone.",wq:"The customer’s wider relationships and assets in view.",act:"Contact the right party with an approach that fits their situation."},
    {f:2,t:'Sustainable finance integrity',h:"Bring greater scrutiny to sustainable lending.",with:"Connect borrowers and their related businesses with information relevant to sustainability claims.",chain:[['Green facility','leaf'],['Borrower','building'],['Subsidiary','hierarchy'],['Emissions & media','news']],v:"Support better-informed due diligence and lending reviews.",q:'',dh:"Prove the activity behind the label.",td:"Green claims are largely taken as declared.",wq:"The activity behind the claim checked across the borrower’s group.",act:"Request evidence for the claim before the next drawdown."},
    {f:3,t:'Connected customer intelligence',h:"Turn customer relationships into growth opportunities.",with:"Reveal the wider corporate group, its ownership and businesses your bank does not yet serve.",chain:[['Client','person'],['Parent company','building'],['Unbanked sister company','hierarchy'],['Key supplier','flow']],v:"Help coverage teams identify relevant prospects and deepen existing relationships.",q:'',dh:"One customer. Every connection.",td:"One record per product; group links stay hidden.",wq:"The whole client group, including businesses you don’t yet serve.",act:"Introduce coverage to the group company that banks elsewhere."}];
  const nav=$('#ucNav'),sel=$('#ucSelect'),demo=$('#demoTopic'),req=$('#requestDemo');let cur=0;const btns=[];
  FAM.forEach((f,fi)=>{const group=document.createElement('section');group.className='uc-group';group.dataset.family=String(fi);const heading=Object.assign(document.createElement('h3'),{textContent:f,id:'uc-group-'+fi});group.setAttribute('aria-labelledby',heading.id);group.append(heading);nav.append(group);const ul=document.createElement('ul');const og=document.createElement('optgroup');og.label=f;const og2=og.cloneNode();
    C.forEach((c,i)=>{if(c.f!==fi)return;const li=document.createElement('li'),b=document.createElement('button');b.type='button';b.textContent=c.t;b.addEventListener('click',()=>show(i));b.addEventListener('keydown',e=>{if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();const n=(i+(e.key==='ArrowDown'?1:C.length-1))%C.length;show(n);btns[n].focus()}});btns[i]=b;li.append(b);ul.append(li);
      og.append(new Option(c.t,String(i)));og2.append(new Option(c.t,c.t))});group.append(ul);sel.append(og);demo?.append(og2);
    if(fi===3)group.append(Object.assign(document.createElement('p'),{className:'uc-note',textContent:'Also supports AML, KYC and credit teams.'}))});
  demo?.append(new Option('Something else','Something else'));
  sel.addEventListener('change',()=>show(+sel.value));
  function show(i){cur=i;const c=C[i];$$('.uc-group',nav).forEach(g=>g.classList.toggle('is-active',Number(g.dataset.family)===c.f));btns.forEach((b,j)=>b.setAttribute('aria-current',String(j===i)));sel.value=String(i);
    $('#ucFamily').textContent=FAM[c.f];$('#ucHeadline').textContent=c.dh||c.h;$('#ucWith').textContent=c.with;$('#ucValue').textContent=c.v;$('#ucToday').textContent=c.td||'';$('#ucWq').textContent=c.wq||'';$('#ucAct').textContent=c.act||'';
    $('#ucQualifier').textContent=c.q;
    $('#ucChainLabel').textContent=c.process?'Review process':'Example relationship path';
    const ch=$('#ucChain');ch.className='uc-chain'+(c.process?' process':'');ch.setAttribute('aria-label',c.process?'Review process':'Example relationship path');ch.replaceChildren();c.chain.forEach(([label,ic])=>{const li=document.createElement('li');li.innerHTML=`<span class="ci" aria-hidden="true"><svg viewBox="0 0 24 24"><use href="#i-${ic}"/></svg></span>`;li.append(document.createTextNode(label));ch.append(li)})}
  function setMail(){req.href='/contact'}
  demo?.addEventListener('change',setMail);
  $$('.ch-link').forEach(b=>b.addEventListener('click',()=>{show(+b.dataset.uc);$('#use-cases').scrollIntoView({behavior:RMQ.matches?'auto':'smooth',block:'start'})}));
  $('#ucDiscuss')?.addEventListener('click',()=>{if(demo)demo.value=C[cur].t;setMail();$('#demo').scrollIntoView({behavior:RMQ.matches?'auto':'smooth',block:'start'});setTimeout(()=>demo?.focus({preventScroll:true}),RMQ.matches?0:500)});
  show(0);if(demo)demo.value=C[0].t;setMail();
})();

/* CTA: static, very quiet world map */
(function cta(){const sec=$('#demo'),cv=$('#ctaCanvas');if(!sec||!cv)return;function draw(){const {W,H,dpr,ctx}=sizeCanvas(cv,sec);const mw=Math.max(W*1.1,900),m={w:mw,h:mw*MAP.span/360};m.ox=W*.5-mw*.5;m.oy=H*.5-m.h*.48;const img=renderMap(W,H,dpr,m,'#5C86C8',Math.max(.8,mw/180*.11));ctx.clearRect(0,0,W,H);ctx.globalAlpha=.2;ctx.drawImage(img,0,0,W,H);ctx.globalAlpha=1}let rt;new ResizeObserver(()=>{clearTimeout(rt);rt=setTimeout(draw,80)}).observe(sec);draw()})();
})();
      } catch (err) { console.error('[industry-finance] page script error:', err); }
      // ---- page script ----
      try {
(()=>{const el=document.getElementById('bkActGrid');if(!el)return;if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){el.classList.add('in');return}const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){el.classList.add('in');io.disconnect()}},{threshold:.2});io.observe(el)})();
      } catch (err) { console.error('[industry-finance] page script error:', err); }
      return {  };
    }
  })(cq);
}
