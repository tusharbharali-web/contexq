// Generated from public/html/contexq-aml (3).html.
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
const header=$('#siteHeader');if(header){const onScroll=()=>header.classList.toggle('scrolled',scrollY>8);addEventListener('scroll',onScroll,{passive:true});onScroll();}
const onVisible=(el,fn,th=.3)=>{if(!('IntersectionObserver' in window)){fn();return}const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){io.disconnect();fn()}},{threshold:th});io.observe(el)};
function tabKeys(tabs,show){tabs.forEach((b,i)=>b.addEventListener('keydown',e=>{const s={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1}[e.key];if(!s)return;e.preventDefault();const n=(i+s+tabs.length)%tabs.length;show(n);tabs[n].focus()}))}

/* =========================================================
   HERO - follow the money.
   Funds move hop by hop across countries (placement → layering → integration).
   Each alert sees one step and is closed. ContexQ connects the records, traces the
   whole trail, finds a hidden common owner and a link to a sanctioned person → one case.
   ========================================================= */
(function hero(){
  const hero=$('.hero'),cv=$('#heroCanvas'),stage=$('#heroStage'),foot=$('.hero-foot'),steps=$$('.hstep'),pauseB=$('#heroPause'),replayB=$('#heroReplay');
  const CYCLE=19,STEP_T=[0,5,8.2,11,17.5],SETTLE=[4.7,7.9,10.8,14.5];
  const C={cyan:'#3FC8F2',soft:'#9FE3F7',hot:'#E7F8FE',rel:'#A9B8E8',amber:'#F2B84B',red:'#F0524F',green:'#3CCB8A',dim:'#4A5E86',text:'#DCE6F4',muted:'#9AACC8',fill:'#0A1736'};
  const ROUTE=[
    {icon:'card',name:'Cash deposits',sub:'Country A'},
    {icon:'bank',name:'Personal account',sub:'Country A'},
    {icon:'building',name:'Shell company',sub:'Country B'},
    {icon:'bank',name:'Account',sub:'Country C'},
    {icon:'building',name:'Trading company',sub:'Country D'},
    {icon:'person',name:'Final beneficiary',sub:'Country E'}];
  const WIDE={r:[[.05,.66],[.22,.44],[.40,.66],[.58,.44],[.76,.66],[.94,.44]],owner:[.58,.90],listed:[.94,.17],core:[.61,.17]};
  const NAR={r:[[.10,.16],[.45,.16],[.84,.16],[.84,.44],[.45,.44],[.10,.44]],owner:[.65,.30],listed:[.10,.68],core:[.62,.66]};
  const SPH=fib(950);
  let W=0,H=0,ctx,box,narrow=false,t=0,last=0,playing=!RMQ.matches,inView=true,stepIdx=-1,mapImg=null;
  const ap=(s,d=.5)=>ease((t-s)/d);
  function layout(){
    let dpr;({W,H,dpr,ctx}=sizeCanvas(cv,hero));
    const hr=hero.getBoundingClientRect(),sr=stage.getBoundingClientRect(),fr=foot.getBoundingClientRect();
    narrow=sr.width<620;
    box={l:sr.left-hr.left+6,r:sr.right-hr.left-6,t:sr.top-hr.top+8,b:fr.top-hr.top-14};box.w=box.r-box.l;box.h=box.b-box.t;
    const mw=Math.max(W*(narrow?2.4:1.15),narrow?900:1200),m={w:mw,h:mw*MAP.span/360};
    m.ox=(box.l+box.r)/2-(100+180)/360*m.w;m.oy=(box.t+box.b)/2-(MAP.lat0-18)/MAP.span*m.h;
    mapImg=renderMap(W,H,dpr,m,'#5C86C8',Math.max(.85,m.w/180*.12));
    draw();
  }
  const L=()=>narrow?NAR:WIDE;
  const at=([fx,fy])=>({x:box.l+fx*box.w,y:box.t+fy*box.h});
  const RP=i=>at(L().r[i]);
  const lerp=(a,b,q)=>({x:mix(a.x,b.x,q),y:mix(a.y,b.y,q)});
  function rr(x,y,w,h,r){ctx.beginPath();ctx.roundRect?ctx.roundRect(x,y,w,h,r):ctx.rect(x,y,w,h)}
  function txt(s,x,y,o={}){const a=o.alpha??1;if(a<=0)return;ctx.save();ctx.globalAlpha=a;ctx.font=`${o.w||500} ${o.size||(narrow?11:12.5)}px "Hanken Grotesk",system-ui,sans-serif`;const w=ctx.measureText(s).width;let lx=o.align==='left'?x:o.align==='right'?x-w:x-w/2;lx=Math.max(box.l,Math.min(box.r-w,lx));ctx.fillStyle=o.color||C.text;ctx.textBaseline='middle';ctx.fillText(s,lx,y);ctx.restore()}
  function pill(s,x,y,o={}){const a=o.alpha??1;if(a<=0)return;const size=o.size||(narrow?10.5:11.5);ctx.save();ctx.font=`600 ${size}px "Hanken Grotesk",system-ui,sans-serif`;const w=ctx.measureText(s).width+18,h=size+11;let lx=x-w/2;lx=Math.max(box.l,Math.min(box.r-w,lx));ctx.globalAlpha=a;rr(lx,y-h/2,w,h,h/2);ctx.fillStyle=o.fill||'rgba(10,23,54,.95)';ctx.fill();ctx.strokeStyle=o.color||C.text;ctx.globalAlpha=a*.55;ctx.lineWidth=1;ctx.stroke();ctx.globalAlpha=a;ctx.fillStyle=o.tc||o.color||C.text;ctx.textBaseline='middle';ctx.fillText(s,lx+9,y+.5);ctx.restore()}
  function node(p,r,icon,col,a,glow=0,lw=1.5){if(a<=0)return;ctx.save();ctx.globalAlpha=a;if(glow){ctx.shadowColor=col;ctx.shadowBlur=glow}ctx.fillStyle=C.fill;ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.beginPath();ctx.arc(p.x,p.y,r,0,TAU);ctx.fill();ctx.stroke();ctx.shadowBlur=0;drawIcon(ctx,icon,p.x,p.y,r*1.05,col,1.3);ctx.restore()}
  function seg(a,b,col,w,alpha,rev=1,dash=null){if(alpha<=0||rev<=0)return;ctx.save();ctx.globalAlpha=alpha;ctx.strokeStyle=col;ctx.lineWidth=w;ctx.lineCap='round';if(dash)ctx.setLineDash(dash);ctx.beginPath();ctx.moveTo(a.x,a.y);const e=lerp(a,b,rev);ctx.lineTo(e.x,e.y);ctx.stroke();ctx.restore()}
  function pulse(a,b,p,col,alpha=1){if(p<=0||p>=1||alpha<=0)return;ctx.save();ctx.lineCap='round';for(let i=1;i<=8;i++){const q0=Math.max(0,p-.3*i/8),q1=Math.max(0,p-.3*(i-1)/8);const s=lerp(a,b,q0),e=lerp(a,b,q1);ctx.globalAlpha=alpha*.75*(1-i/9);ctx.strokeStyle=col;ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(s.x,s.y);ctx.lineTo(e.x,e.y);ctx.stroke()}
    const h=lerp(a,b,p);ctx.globalAlpha=alpha;ctx.fillStyle=C.hot;ctx.shadowColor=col;ctx.shadowBlur=12;ctx.beginPath();ctx.arc(h.x,h.y,3.4,0,TAU);ctx.fill();ctx.restore()}
  function mixC(a,b,q){const pa=parseInt(a.slice(1),16),pb=parseInt(b.slice(1),16);return`rgb(${Math.round(mix(pa>>16,pb>>16,q))},${Math.round(mix(pa>>8&255,pb>>8&255,q))},${Math.round(mix(pa&255,pb&255,q))})`}

  function draw(){
    if(!ctx)return;ctx.clearRect(0,0,W,H);
    const A=1-ap(17.5,1.4),nr=narrow?13:16,lay=L();
    // world map: money moving between countries
    ctx.globalAlpha=.28;ctx.drawImage(mapImg,0,0,W,H);ctx.globalAlpha=1;
    // ContexQ intelligence layer (receives records, never money)
    const core=at(lay.core),R=Math.min(box.w,box.h)*(narrow?.11:.15),act=ap(5,.6)*(1-ap(10.5,1)*.4);
    const g=ctx.createRadialGradient(core.x,core.y,R*.2,core.x,core.y,R*2.8);g.addColorStop(0,`rgba(30,110,220,${(.12+act*.25)*A})`);g.addColorStop(1,'rgba(30,110,220,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(core.x,core.y,R*2.8,0,TAU);ctx.fill();
    // orbit ring for depth
    ctx.save();ctx.globalAlpha=(.25+act*.3)*A;ctx.strokeStyle='#5FB8E8';ctx.lineWidth=1;ctx.beginPath();ctx.ellipse(core.x,core.y,R*1.42,R*.42,-.28,0,TAU);ctx.stroke();ctx.restore();
    for(let k=0;k<3;k++){const an=t*.9+k*TAU/3,ox=Math.cos(an)*R*1.42,oy=Math.sin(an)*R*.42,c=Math.cos(-.28),s2=Math.sin(-.28);const px=core.x+ox*c-oy*s2,py=core.y+ox*s2+oy*c;if(Math.sin(an)<0)continue;ctx.save();ctx.globalAlpha=.8*A;ctx.fillStyle=C.soft;ctx.shadowColor=C.cyan;ctx.shadowBlur=8;ctx.beginPath();ctx.arc(px,py,2.4,0,TAU);ctx.fill();ctx.restore()}
    drawSphere(ctx,SPH,core.x,core.y,R,t*.22,.38,(.45+act*.5)*A,'#8FD3F2',narrow?.9:1.15,0);
    for(let k=0;k<3;k++){const an=t*.9+k*TAU/3,ox=Math.cos(an)*R*1.42,oy=Math.sin(an)*R*.42,c=Math.cos(-.28),s2=Math.sin(-.28);const px=core.x+ox*c-oy*s2,py=core.y+ox*s2+oy*c;if(Math.sin(an)>=0)continue;ctx.save();ctx.globalAlpha=.8*A;ctx.fillStyle=C.soft;ctx.shadowColor=C.cyan;ctx.shadowBlur=8;ctx.beginPath();ctx.arc(px,py,2.4,0,TAU);ctx.fill();ctx.restore()}
    txt('Contex',core.x-(narrow?5:7),core.y,{w:700,color:'#EAF6FF',alpha:A,size:narrow?13:18});
    {ctx.save();ctx.font=`700 ${narrow?13:18}px "Hanken Grotesk",system-ui,sans-serif`;const w=ctx.measureText('Contex').width;ctx.restore();txt('Q',core.x-(narrow?5:7)+w/2+(narrow?5:7),core.y,{w:700,color:'#F26B3A',alpha:A,size:narrow?13:18})}

    // scan progress along the route (0..5)
    const scan=clamp((t-6.2)/3.2)*5;
    // route segments: money
    for(let k=0;k<5;k++){
      const a=RP(k),b=RP(k+1),drawn=ap(.8+k*.7,.6),lit=clamp(scan-k);
      const col=lit>0?mixC(C.cyan,C.amber,lit):C.cyan;
      seg(a,b,col,lit>0?2.6:1.8,(.35+.35*drawn+.2*lit)*A,drawn);
    }
    // first pass: money moves hop by hop
    for(let k=0;k<5;k++){pulse(RP(k),RP(k+1),(t-.8-k*.7)/.7,C.cyan,A)}
    // second pass, quicker
    if(t>5&&t<6.4)for(let k=0;k<5;k++)pulse(RP(k),RP(k+1),(t-5-k*.25)/.5,C.cyan,.6*A);
    // hold: the trail keeps moving, now highlighted
    if(t>11.2&&t<17.5){const ph=(t-11.2)%3;for(let k=0;k<5;k++)pulse(RP(k),RP(k+1),(ph-k*.32)/.5,C.amber,.9*A)}
    // ContexQ reads every step of the trail (data, not money)
    if(t>5.2&&t<6.6)for(let i=0;i<6;i++){const q=ease(clamp((t-5.2-i*.1)/.9));if(q<=0||q>=1)continue;const p=lerp(RP(i),core,q);ctx.save();ctx.globalAlpha=A*(1-q)*.9;ctx.fillStyle=C.cyan;ctx.fillRect(p.x-3,p.y-3,6,6);ctx.restore()}
    // once traced, ContexQ holds the whole picture
    {const k=Math.floor(scan);for(let i=0;i<=Math.min(5,k);i++){if(t<6.2)break;const p=RP(i);ctx.save();ctx.globalAlpha=.16*A;ctx.strokeStyle=C.soft;ctx.lineWidth=1;ctx.setLineDash([2,5]);ctx.beginPath();ctx.moveTo(core.x,core.y);ctx.lineTo(p.x,p.y);ctx.stroke();ctx.restore()}}
    // scan beam from ContexQ to the point being traced
    if(t>6.2&&t<9.6){const k=Math.min(4,Math.floor(scan)),p=lerp(RP(k),RP(k+1),scan-k);ctx.save();ctx.globalAlpha=.35*A;const gr=ctx.createLinearGradient(core.x,core.y,p.x,p.y);gr.addColorStop(0,'rgba(63,200,242,.9)');gr.addColorStop(1,'rgba(242,184,75,.9)');ctx.strokeStyle=gr;ctx.lineWidth=1.4;ctx.setLineDash([3,4]);ctx.beginPath();ctx.moveTo(core.x,core.y);ctx.lineTo(p.x,p.y);ctx.stroke();ctx.restore();
      ctx.save();ctx.globalAlpha=A;ctx.fillStyle=C.amber;ctx.shadowColor=C.amber;ctx.shadowBlur=14;ctx.beginPath();ctx.arc(p.x,p.y,4,0,TAU);ctx.fill();ctx.restore()}

    // records entering ContexQ
    const src=narrow?[['doc','KYC',[.30,.58]],['building','Registry',[.95,.58]],['shield','Watchlists',[.95,.76]]]:[['doc','KYC',[.20,-.02]],['building','Registry',[.45,-.06]],['shield','Watchlists',[.70,-.02]]];
    src.forEach(([icon,lab,o],j)=>{const loc=t-5.1-j*.28;if(loc<0||loc>1.4)return;const o0=at(o),q=ease(clamp((loc-.15)/1));const h=lerp(o0,core,q);const a=(loc<.15?loc/.15:1)*(1-ease((q-.82)/.18))*A;
      ctx.save();ctx.fillStyle=C.cyan;for(let k=0;k<=10;k++){const p=lerp(o0,core,Math.max(0,q-.3)+k/10*Math.min(.3,q));ctx.globalAlpha=a*.6*k/10;ctx.beginPath();ctx.arc(p.x,p.y,1.3,0,TAU);ctx.fill()}ctx.restore();
      ctx.save();ctx.globalAlpha=a;rr(h.x-11,h.y-11,22,22,4);ctx.fillStyle='#0B1838';ctx.fill();ctx.strokeStyle=C.cyan;ctx.lineWidth=1.1;ctx.stroke();drawIcon(ctx,icon,h.x,h.y,14,C.soft,1.3);ctx.restore();
      txt(lab,h.x+15,h.y,{align:'left',size:10.5,color:C.soft,alpha:a*(1-q)})});

    // hidden owner behind two companies (revealed as the scan passes them)
    const own=at(lay.owner),oA=ap(6.2+2/5*3.2,.4);
    seg(own,RP(2),C.amber,1.6,.9*A,ap(6.4+2/5*3.2,.5),[5,5]);
    seg(own,RP(4),C.amber,1.6,.9*A,ap(6.2+4/5*3.2,.5),[5,5]);
    node(own,nr*.9,'person',C.amber,oA*A,8);
    txt('Same hidden owner',own.x,own.y+(narrow?22:26),{w:600,color:C.amber,alpha:ap(6.2+4/5*3.2+.3)*A,size:narrow?10.5:12});
    // sanctioned person linked to the beneficiary
    const ls=at(lay.listed),lt=6.2+3.2;
    seg(RP(5),ls,C.red,1.7,.95*A,ap(lt,.5),[5,5]);
    node(ls,nr,'person',C.red,ap(lt+.2,.4)*A,10+5*Math.sin(t*5));
    txt('Sanctioned person',ls.x,ls.y+(narrow?-22:-26),{w:700,color:C.red,alpha:ap(lt+.4)*A,size:narrow?10.5:12});
    txt('relative of',mix(RP(5).x,ls.x,.5)+(narrow?14:-12),mix(RP(5).y,ls.y,.5)+(narrow?0:-6),{align:narrow?'left':'right',size:10.5,color:'#F2A09E',alpha:ap(lt+.5)*A});

    // route nodes + labels
    ROUTE.forEach((n,i)=>{const p=RP(i),a=ap(.1+i*.12,.5)*A,lit=clamp(scan-i+1);const col=i===5&&t>9.4?mixC(C.cyan,C.red,ap(9.4,.4)):lit>0&&t>6.2?mixC(C.cyan,C.amber,lit):C.cyan;
      node(p,i===5?nr*1.1:nr,n.icon,col,a,lit>.9?8:0);
      const below=narrow?true:(i%2===0);const dy=below?nr+16:-(nr+28);
      txt(n.name,p.x,p.y+dy,{w:600,size:narrow?10.5:12,alpha:a});
      txt(n.sub,p.x,p.y+dy+(narrow?13:15),{size:narrow?10:11,color:C.muted,alpha:a})});

    // each alert sees one step and is closed (before ContexQ)
    [[1,1.5],[3,2.9]].forEach(([i,s])=>{const p=RP(i),a=ap(s,.4)*(1-ap(6.2+i/5*3.2,.4))*A;const y=narrow?p.y-nr-12:p.y+nr+20;
      pill(narrow?'✓ Alert closed':'✓ Alert closed: looks normal',p.x,y,{color:'#8FA2C6',tc:'#C9D4EA',alpha:a})});

    // AML stages under the route (wide layout)
    if(!narrow){const y=at([0,.80]).y,ba=ap(1,.6)*A;
      [['Placement',.02,.21,0],['Layering',.23,.75,1],['Integration',.77,.98,4]].forEach(([lab,x0,x1,k])=>{const on=t>.8+k*.7&&t<5?1:0,a0=box.l+x0*box.w,a1=box.l+x1*box.w;
        ctx.save();ctx.globalAlpha=ba*(on?1:.55);ctx.strokeStyle=on?C.soft:'#3A5480';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(a0,y-5);ctx.lineTo(a0,y);ctx.lineTo(a1,y);ctx.lineTo(a1,y-5);ctx.stroke();ctx.restore();
        txt(lab,(a0+a1)/2,y+13,{w:600,size:11.5,color:on?C.soft:'#7E90B0',alpha:ba})})}

    // the case
    if(t>11){const a=ap(11,.6)*A,cw=narrow?box.w:Math.min(320,box.w*.42),ch=narrow?78:94,x=box.l,y=narrow?at([0,.80]).y:box.t;
      ctx.save();ctx.globalAlpha=a;ctx.shadowColor=C.amber;ctx.shadowBlur=14;rr(x,y,cw,ch,10);ctx.fillStyle='rgba(12,26,58,.97)';ctx.fill();ctx.shadowBlur=0;ctx.strokeStyle=C.amber;ctx.lineWidth=1.4;ctx.stroke();ctx.restore();
      const tx=x+14;txt('One case: the full money trail',tx,y+(narrow?16:19),{align:'left',w:700,size:narrow?12:13.5,color:C.amber,alpha:a});
      ['Funds layered through several countries','Two companies, one hidden owner','Linked to a sanctioned person'].forEach((s,k)=>txt('· '+s,tx,y+(narrow?35:41)+k*(narrow?14:16),{align:'left',size:narrow?10.5:11.5,alpha:ap(11.3+k*.25)*A}))}

    const si=t<STEP_T[1]?0:t<STEP_T[2]?1:t<STEP_T[3]?2:3;
    if(si!==stepIdx){stepIdx=si;steps.forEach((b,i)=>b.setAttribute('aria-current',i===si?'step':'false'))}
    steps.forEach((b,i)=>b.style.setProperty('--p',(i<si?100:i===si?clamp((t-STEP_T[i])/(STEP_T[i+1]-STEP_T[i]))*100:0)+'%'));
  }
  function setPlaying(v){playing=v;pauseB.textContent=v?'Ⅱ':'▶';pauseB.setAttribute('aria-label',v?'Pause animation':'Play animation')}
  function frame(ts){const dt=last?Math.min((ts-last)/1000,.1):0;last=ts;if(playing&&inView&&!document.hidden){t+=dt;if(t>=CYCLE)t-=CYCLE;draw()}requestAnimationFrame(frame)}
  steps.forEach((b,i)=>b.addEventListener('click',()=>{t=SETTLE[i];setPlaying(false);draw()}));
  pauseB.addEventListener('click',()=>setPlaying(!playing));
  replayB.addEventListener('click',()=>{t=0;setPlaying(true);draw()});
  new IntersectionObserver(e=>{inView=e[0].isIntersecting},{threshold:.05}).observe(hero);
  document.addEventListener('visibilitychange',()=>{last=0});
  RMQ.addEventListener?.('change',e=>{if(e.matches){t=SETTLE[3];setPlaying(false);draw()}});
  let rt;new ResizeObserver(()=>{clearTimeout(rt);rt=setTimeout(layout,60)}).observe(hero);
  if(RMQ.matches){t=SETTLE[3];setPlaying(false)}else setPlaying(true);
  layout();document.fonts&&document.fonts.ready.then(()=>draw());requestAnimationFrame(frame);
})();

/* ---------- examples: all three visible, each plays from "alert view" to "ContexQ view" ---------- */
(function(){
  const T=(x,y,s,c='',a='middle')=>`<text x="${x}" y="${y}" text-anchor="${a}" class="${c}">${s}</text>`;
  const N=(x,y,r,c)=>`<circle cx="${x}" cy="${y}" r="${r}" class="${c}"/>`;
  const B=(x,y,w,h,c,s)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" class="${c}"/>`+T(x+w/2,y+h/2+5,s,'w');
  const MOV=(d,dur,b)=>`<circle r="3.2" fill="#E7F8FE"><animateMotion dur="${dur}s" begin="${b}s" repeatCount="indefinite" path="${d}"/></circle>`;
  const F=[
   ()=>{let s='';const ys=[40,85,130,175];
     ys.forEach(y=>{s+=`<path class="pc" d="M44 ${y} Q 100 ${y} 140 110"/>`+N(32,y,11,'n')});
     s+=ys.map((y,i)=>MOV(`M44 ${y} Q 100 ${y} 140 110`,2.4,-i*.6)).join('');
     s+=B(132,90,96,40,'box','Fund');
     s+=`<g class="r">${T(180,160,'✓ looks normal','ok')}</g>`;
     s+=`<g class="c"><path class="pr" d="M228 110 L 290 110"/>${MOV('M228 110 L 290 110',1.2,0)}`+N(306,110,15,'nr')+T(354,148,'CEO’s account','rd','end')+`<path class="rla" d="M306 50 L 306 95"/>`+N(306,36,12,'na')+T(290,40,'Fund CEO','am','end')+T(262,98,'next day','am')+`</g>`;
     return s},
   ()=>{let s=B(8,92,104,40,'box','Company')+`<path class="pc" d="M112 112 L 186 112"/>${MOV('M112 112 L 186 112',1.4,0)}`+N(204,112,16,'nc')+T(190,152,'Person abroad','w');
     s+=`<g class="r">${T(150,96,'✓ no list match','ok')}</g>`;
     s+=`<g class="c"><path class="rl" d="M216 100 L 262 52"/><path class="rl" d="M216 124 L 262 172"/>`+N(272,44,11,'n')+N(272,180,11,'n')+T(272,22,'Partner','')+T(272,210,'Partner','')+
       `<path class="rla" d="M282 50 L 326 104"/><path class="rla" d="M282 174 L 326 120"/>`+N(334,112,15,'nr')+T(358,150,'Sanctioned','rd','end')+`</g>`;
     return s},
   ()=>{let s='';const xs=[46,128,210,300];
     xs.forEach(x=>{s+=N(x,150,14,'n')+T(x,184,'Customer','')});
     s+=`<g class="r">`+xs.map(x=>B(x-27,100,54,26,'boxa','alert').replace('class="w"','class="am"')).join('')+`</g>`;
     s+=`<g class="c">`+B(40,26,108,32,'box','Director')+B(166,26,108,32,'box','Address')+
       `<path class="rla" d="M94 58 L 46 136"/><path class="rla" d="M94 58 L 128 136"/><path class="rla" d="M220 58 L 128 136"/><path class="rla" d="M220 58 L 210 136"/>`+
       [46,128,210].map(x=>N(x,150,14,'nr')).join('')+T(128,216,'One real case','rd')+`</g>`;
     return s},
   ()=>{let s=`<rect x="10" y="44" width="128" height="150" rx="8" class="box"/>`+T(74,68,'News article','w');
     [86,100,114,128,142,156,170].forEach((y,i)=>{s+=`<rect x="24" y="${y}" width="${i%3===2?70:100}" height="5" rx="2.5" fill="#2A3C63"/>`});
     [['ES',30],['中文',66],['عربي',108]].forEach(([l,x])=>{s+=`<rect x="${x-14}" y="16" width="${l.length>2?40:28}" height="18" rx="9" fill="#0F2350" stroke="#2F4FA0"/>`+T(x+(l.length>2?6:0),29,l,'w').replace('class="w"','class="w" style="font-size:11px"')});
     s+=N(304,118,18,'nc')+T(304,158,'Your customer','w');
     s+=`<g class="r"><path class="rl" d="M138 118 L 286 118"/>`+T(212,108,'name match?','')+T(212,206,'one of thousands of hits','am')+`</g>`;
     s+=`<g class="c">`+[[72,'Name'],[102,'Places'],[132,'Business'],[162,'Associate']].map(([y,l])=>`<path class="rla" d="M222 ${y-8} L 287 118"/>`+T(146,y-4,'✓ '+l,'ok','start')).join('')+N(304,118,18,'nr')+T(304,206,'Strong hit','rd')+`</g>`;
     return s}];
  const box=$('#exs');
  $$('.exfig',box).forEach(el=>{el.innerHTML=`<svg viewBox="0 0 360 220" aria-hidden="true">${F[+el.dataset.x]()}</svg>`});
  const cards=$$('.exc',box);let timers=[];
  function play(){timers.forEach(clearTimeout);timers=[];cards.forEach(c=>c.classList.remove('on'));
    if(RMQ.matches){cards.forEach(c=>c.classList.add('on'));return}
    cards.forEach((c,i)=>timers.push(setTimeout(()=>c.classList.add('on'),1400+i*700)))}
  $('#exReplay').addEventListener('click',play);
  onVisible(box,play,.35);
})();
onVisible($('#layers'),()=>$('#layers').classList.add('in'),.3);
onVisible($('#caseCard'),()=>$('#caseCard').classList.add('in'),.35);
if(RMQ.matches){$('#caseCard').classList.add('in')}
onVisible($('#steps4'),()=>$('#steps4').classList.add('in'),.35);

})();
      } catch (err) { console.error('[solution-aml] page script error:', err); }
      return {  };
    }
  })(cq);
}
