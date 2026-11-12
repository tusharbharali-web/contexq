// Generated from public/html/contexq-mule-merged (1).html.
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
const TAU=Math.PI*2,clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v)),ease=t=>{t=clamp(t);return t*t*(3-2*t)},mix=(a,b,t)=>a+(b-a)*t;
const ICON={};$$('#sprite symbol').forEach(s=>{ICON[s.id.slice(2)]=new Path2D(s.querySelector('path').getAttribute('d'))});
function drawIcon(ctx,name,x,y,size,color,lw=1.5){const s=size/24;ctx.save();ctx.translate(x-size/2,y-size/2);ctx.scale(s,s);ctx.strokeStyle=color;ctx.lineWidth=lw/s;ctx.lineCap='round';ctx.lineJoin='round';ctx.stroke(ICON[name]);ctx.restore()}

/* World map: 2° land grid */
const MAP={rows:67,cols:180,lat0:76,span:134,b64:'AAAABhA24P///oAAAAAAEAAOwAAAAAAAAAAEACAAf//wAAEAADAAf/oAAAAAAAAAHdnn0AH//gAAAAAMDD///8DgAAADwAAD4z/wH/8gAAAoACDf//////wAgf///+wdjwD/8AAAH/iL//////////+D//////h2H/gAAAf+z/+/////////EX/////9n4D8AeAB++///////////+Af/////wkcBwAAAH5///////////99EP9////gHgAQAAAH5v//////////HAADgH///gH0AAAAEEx/////////+AIAACAC///8D+AAAAGCz/////////4A8AAAAAf///v/gAAALAL/////////wAwAAAAAf///n/wAAAbv///////////AgAAAAAL/////QAAAEf//////////9AAAAAAAB////sYAAAD///////////8AAAAAAAD////9AAAAB//7f///////4AAAAAAAD////0AAAAB/Pwf///////xQAAAAAAD////gAAAAPynwH//////+DAAAAAAAD///+AAAAAPCbP///////eCAAAAAAAD///8AAAAAfABf//////+ECAAAAAAAB///8AAAAAEeAC///////GMAAAAAAAA///4AAAAAH+AA///////AgAAAAAAAAf//wAAAAAf/jB///////hAAAAAAAAAL//gAAAAAf/7//f/////AAAAAAAAAAD/AQAAAAA///9/P/////gAAAAAAAAAB+AUAAAAB///+/h/////AAAAAAAAAAC+AAAAAAD////f0D///+gAAAAAAAAAAeAQAAAAD////P/B/7/4AAAAAAAAAAAeEGAAAAD////v+A/j+AAAAAAAAAAAAPsAwAAAD////n8A/B+ggAAAAAAAAAAB8AAAAAD////3wAeBfAgAAAAAAAAAAAPABAAAH////7gAcAfggAAAAAAAAAAADAAAAAD////8AAcAXgoAAAAAAAAAAABD6AAAB////9wAMATAYAAAAAAAAAAAAz/AAAB/////gAKAQAIAAAAAAAAAAAAH/gAAAf////gACAICIAAAAAAAAAAAAH/8AAAAH///AAAAsGAAAAAAAAAAAAAH/+AAAAB//+AAAAUOAAAAAAAAAAAAAP/+AAAAB//8AAAAM+wAAAAAAAAAAAAP//gAAAB//4AAAAccwgAAAAAAAAAAAP//+AAAB//wAAAAGFk/AAAAAAAAAAAP///AAAA//gAAAACAAHsAAAAAAAAAAP///gAAA//wAAAAAwBHwAAAAAAAAAAH///AAAAf/wAAAAABIAIAAAAAAAAAAH//+AAAAf/wAAAAAABgAAAAAAAAAAAD//+AAAA//wgAAAAABxAAAAAAAAAAAB//+AAAA//wgAAAAAPxgBAAAAAAAAAA//8AAAA//jgAAAAAf/gAAAAAAAAAAAf/8AAAA//DAAAAAAf/wAAAAAAAAAAAf/4AAAAf/DAAAAAD//4AAAAAAAAAAAf/gAAAAf/DAAAAAH//8AAAAAAAAAAAf/AAAAAf8AAAAAAH//+AAAAAAAAAAAf/AAAAAP8AAAAAAH//+AAAAAAAAAAA/+AAAAAP8AAAAAAH//+AAAAAAAAAAA/8AAAAAH4AAAAAAD//8AAAAAAAAAAA/4AAAAAHwAAAAAADwf8AAAAAAAAAAA/gAAAAAAAAAAAAAAAH4AAAAAAAAAAB/gAAAAAAAAAAAAAAAD4AEAAAAAAAAB+AAAAAAAAAAAAAAAAAAAEAAAAAAAAB8AAAAAAAAAAAAAAAAAwAIAAAAAAAAB4AAAAAAAAAAAAAAAAAAAQAAAAAAAABwAAAAAAAAAAAAAAAAAABgAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAACAAAAAAAAAAAAAAAAABwgAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA='};
const LAND=(()=>{const bin=atob(MAP.b64),out=[];for(let r=0;r<MAP.rows;r++)for(let c=0;c<MAP.cols;c++){const i=r*MAP.cols+c;if((bin.charCodeAt(i>>3)>>(7-(i&7)))&1)out.push([-180+c*2+1,MAP.lat0-r*2-1])}return out})();
function proj(lon,lat,m,k=0){return{x:m.ox+k*m.w+(lon+180)/360*m.w,y:m.oy+(MAP.lat0-lat)/MAP.span*m.h}}
function renderMap(W,H,dpr,m,color,r){const c=document.createElement('canvas');c.width=Math.max(1,W*dpr);c.height=Math.max(1,H*dpr);const x=c.getContext('2d');x.scale(dpr,dpr);x.fillStyle=color;for(let k=-1;k<=1;k++){for(const [lo,la] of LAND){const p=proj(lo,la,m,k);if(p.x<-2||p.x>W+2||p.y<-2||p.y>H+2)continue;x.beginPath();x.arc(p.x,p.y,r,0,TAU);x.fill()}}return c}

function fib(n){return Array.from({length:n},(_,i)=>{const y=1-i/(n-1)*2,r=Math.sqrt(1-y*y),a=i*2.399963;return{x:Math.cos(a)*r,y,z:Math.sin(a)*r}})}
function drawSphere(ctx,pts,cx,cy,R,rot,tilt,alpha,color,size=1,lift=0){const ca=Math.cos(rot),sa=Math.sin(rot),ct=Math.cos(tilt),st=Math.sin(tilt);ctx.fillStyle=color;for(const p of pts){const x1=p.x*ca+p.z*sa,z1=-p.x*sa+p.z*ca,y2=p.y*ct-z1*st,z2=p.y*st+z1*ct,d=(z2+1)/2;ctx.globalAlpha=alpha*(.1+d*(.6+lift));ctx.beginPath();ctx.arc(cx+x1*R,cy+y2*R,(.55+d*1.05)*size,0,TAU);ctx.fill()}ctx.globalAlpha=1}
function sizeCanvas(cv,el){const r=el.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);cv.width=Math.max(1,Math.round(r.width*dpr));cv.height=Math.max(1,Math.round(r.height*dpr));const ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);return{W:r.width,H:r.height,dpr,ctx}}

const header=$('#siteHeader');
if(header){
  const onScroll=()=>header.classList.toggle('scrolled',scrollY>8);
  addEventListener('scroll',onScroll,{passive:true});
  onScroll();
}

const onVisible=(el,fn,th=.3)=>{if(!('IntersectionObserver' in window)){fn();return}const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){io.disconnect();fn()}},{threshold:th});io.observe(el)};

/* HERO ANIMATION */
(function hero(){
  const hero=$('.hero'),cv=$('#heroCanvas'),stage=$('#heroStage'),foot=$('.hero-foot'),steps=$$('.hstep'),pauseB=$('#heroPause'),replayB=$('#heroReplay');
  const CYCLE=19,STEP_T=[0,5,9,11.2,17.5],SETTLE=[4.6,8.7,10.9,14.5];
  const C={cyan:'#22C3E6',soft:'#9FE3F7',hot:'#E7F8FE',amber:'#F5A524',red:'#F4647A',text:'#FFFFFF',muted:'#93A4BF',fill:'#081A2E'};
  const WIDE={v:[.05,.40],v2:[.05,.76],m1:[.25,.36],m2:[.25,.50],m3:[.25,.64],m4:[.25,.78],m5:[.50,.46],m6:[.50,.70],x:[.76,.58],d:[.36,.90],c:[.62,.86],n:[.92,.74],core:[.64,.17]};
  const NAR={v:[.27,.04],v2:[.73,.04],m1:[.12,.20],m2:[.37,.20],m3:[.63,.20],m4:[.88,.20],m5:[.30,.36],m6:[.70,.36],x:[.50,.50],d:[.14,.66],c:[.50,.68],n:[.86,.66],core:[.13,.47]};
  const MULES=['m1','m2','m3','m4','m5','m6'],APPS={m1:'App A',m2:'App B',m3:'App C',m4:'App D',m5:'App B',m6:'App E'};
  const RING=['m2','m4','m5','m6'];
  const IN=[['v','m1'],['v','m2'],['v2','m3'],['v2','m4']],MID=[['m1','m5'],['m2','m5'],['m3','m6'],['m4','m6']],OUT=[['m5','x'],['m6','x']];
  const SPH=fib(950);
  let W=0,H=0,ctx,box,narrow=false,t=0,last=0,playing=!RMQ.matches,inView=true,stepIdx=-1,mapImg=null;
  const ap=(s,d=.5)=>ease((t-s)/d);

  function layout(){
    let dpr;({W,H,dpr,ctx}=sizeCanvas(cv,hero));
    const hr=hero.getBoundingClientRect(),sr=stage.getBoundingClientRect(),fr=foot.getBoundingClientRect();
    // Stacked hero (phones and tablets: copy above, animation below) uses the vertical layout,
    // as does any stage narrower than 620px. Side-by-side desktop keeps the original layout.
    const stacked=sr.left-hr.left<hr.width*.25;
    narrow=stacked||sr.width<620;
    // On stacked layouts the hero's left-to-right text fade would dim half the animation, so the
    // canvas is lifted to the fade's layer (it paints after it). Desktop keeps the fade as before.
    cv.style.zIndex=stacked?'-1':'';
    box={l:sr.left-hr.left+6,r:sr.right-hr.left-6,t:sr.top-hr.top+8,b:fr.top-hr.top-14};box.w=box.r-box.l;box.h=box.b-box.t;
    const mw=Math.max(W*(narrow?2.4:1.15),narrow?900:1200),m={w:mw,h:mw*MAP.span/360};
    m.ox=(box.l+box.r)/2-(100+180)/360*m.w;m.oy=(box.t+box.b)/2-(MAP.lat0-18)/MAP.span*m.h;
    mapImg=renderMap(W,H,dpr,m,'#2F86FF',Math.max(.85,m.w/180*.12));
    draw();
  }
  const L=()=>narrow?NAR:WIDE;
  const P=id=>{const [fx,fy]=L()[id];return{x:box.l+fx*box.w,y:box.t+fy*box.h}};
  const at=([fx,fy])=>({x:box.l+fx*box.w,y:box.t+fy*box.h});
  const lerp=(a,b,q)=>({x:mix(a.x,b.x,q),y:mix(a.y,b.y,q)});
  function rr(x,y,w,h,r){ctx.beginPath();ctx.roundRect?ctx.roundRect(x,y,w,h,r):ctx.rect(x,y,w,h)}
  function txt(s,x,y,o={}){const a=o.alpha??1;if(a<=0)return;ctx.save();ctx.globalAlpha=a;ctx.font=`${o.w||500} ${o.size||(narrow?11:12.5)}px "Hanken Grotesk",system-ui,sans-serif`;const w=ctx.measureText(s).width;let lx=o.align==='left'?x:o.align==='right'?x-w:x-w/2;lx=Math.max(box.l,Math.min(box.r-w,lx));ctx.fillStyle=o.color||C.text;ctx.textBaseline='middle';ctx.fillText(s,lx,y);ctx.restore()}
  function pill(s,x,y,o={}){const a=o.alpha??1;if(a<=0)return;const size=o.size||(narrow?10.5:11.5);ctx.save();ctx.font=`600 ${size}px "Hanken Grotesk",system-ui,sans-serif`;const w=ctx.measureText(s).width+18,h=size+11;let lx=o.align==='left'?x:x-w/2;lx=Math.max(box.l,Math.min(box.r-w,lx));ctx.globalAlpha=a;rr(lx,y-h/2,w,h,h/2);ctx.fillStyle=o.fill||'rgba(12,32,56,.95)';ctx.fill();ctx.strokeStyle=o.color||C.text;ctx.globalAlpha=a*.55;ctx.lineWidth=1;ctx.stroke();ctx.globalAlpha=a;ctx.fillStyle=o.tc||o.color||C.text;ctx.textBaseline='middle';ctx.fillText(s,lx+9,y+.5);ctx.restore()}
  function node(p,r,icon,col,a,glow=0,lw=1.5,square=false){if(a<=0)return;ctx.save();ctx.globalAlpha=a;if(glow){ctx.shadowColor=col;ctx.shadowBlur=glow}ctx.fillStyle=C.fill;ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.beginPath();if(square){rr(p.x-r,p.y-r,r*2,r*2,6)}else ctx.arc(p.x,p.y,r,0,TAU);ctx.fill();ctx.stroke();ctx.shadowBlur=0;drawIcon(ctx,icon,p.x,p.y,r*1.05,col,1.3);ctx.restore()}
  function seg(a,b,col,w,alpha,rev=1,dash=null){if(alpha<=0||rev<=0)return;ctx.save();ctx.globalAlpha=alpha;ctx.strokeStyle=col;ctx.lineWidth=w;ctx.lineCap='round';if(dash)ctx.setLineDash(dash);ctx.beginPath();ctx.moveTo(a.x,a.y);const e=lerp(a,b,rev);ctx.lineTo(e.x,e.y);ctx.stroke();ctx.restore()}
  function pulse(a,b,p,col,alpha=1){if(p<=0||p>=1||alpha<=0)return;ctx.save();ctx.lineCap='round';for(let i=1;i<=8;i++){const q0=Math.max(0,p-.3*i/8),q1=Math.max(0,p-.3*(i-1)/8);const s=lerp(a,b,q0),e=lerp(a,b,q1);ctx.globalAlpha=alpha*.75*(1-i/9);ctx.strokeStyle=col;ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(s.x,s.y);ctx.lineTo(e.x,e.y);ctx.stroke()}
    const h=lerp(a,b,p);ctx.globalAlpha=alpha;ctx.fillStyle=C.hot;ctx.shadowColor=col;ctx.shadowBlur=12;ctx.beginPath();ctx.arc(h.x,h.y,3.4,0,TAU);ctx.fill();ctx.restore()}
  function mixC(a,b,q){const pa=parseInt(a.slice(1),16),pb=parseInt(b.slice(1),16);return`rgb(${Math.round(mix(pa>>16,pb>>16,q))},${Math.round(mix(pa>>8&255,pb>>8&255,q))},${Math.round(mix(pa&255,pb&255,q))})`}

  function draw(){
    if(!ctx)return;ctx.clearRect(0,0,W,H);
    const A=1-ap(17.5,1.4),nr=narrow?12:15,hl=ap(8.6,.5);
    ctx.globalAlpha=.24;ctx.drawImage(mapImg,0,0,W,H);ctx.globalAlpha=1;

    const core=P('core'),R=Math.min(box.w,box.h)*(narrow?.10:.15),act=ap(5,.6)*(1-ap(11,1)*.4);
    const g=ctx.createRadialGradient(core.x,core.y,R*.2,core.x,core.y,R*2.6);g.addColorStop(0,`rgba(47,134,255,${(.12+act*.25)*A})`);g.addColorStop(1,'rgba(47,134,255,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(core.x,core.y,R*2.6,0,TAU);ctx.fill();
    const orbit=front=>{for(let k=0;k<3;k++){const an=t*.9+k*TAU/3;if((Math.sin(an)>=0)!==front)continue;const ox=Math.cos(an)*R*1.42,oy=Math.sin(an)*R*.42,c=Math.cos(-.28),s2=Math.sin(-.28);ctx.save();ctx.globalAlpha=.8*A;ctx.fillStyle=C.soft;ctx.shadowColor=C.cyan;ctx.shadowBlur=8;ctx.beginPath();ctx.arc(core.x+ox*c-oy*s2,core.y+ox*s2+oy*c,2.4,0,TAU);ctx.fill();ctx.restore()}};
    ctx.save();ctx.globalAlpha=(.25+act*.3)*A;ctx.strokeStyle='#2F86FF';ctx.lineWidth=1;ctx.beginPath();ctx.ellipse(core.x,core.y,R*1.42,R*.42,-.28,0,TAU);ctx.stroke();ctx.restore();
    orbit(false);drawSphere(ctx,SPH,core.x,core.y,R,t*.22,.38,(.45+act*.5)*A,'#8FD3F2',narrow?.9:1.15,0);orbit(true);
    {const fs=narrow?13:18;ctx.save();ctx.font=`700 ${fs}px "Hanken Grotesk",system-ui,sans-serif`;const w1=ctx.measureText('Contex').width,w2=ctx.measureText('Q').width;ctx.restore();const x0=core.x-(w1+w2)/2;txt('Contex',x0,core.y,{align:'left',w:700,size:fs,color:'#FFFFFF',alpha:A});txt('Q',x0+w1,core.y,{align:'left',w:700,size:fs,color:'#F26B3A',alpha:A})}

    const flowCol=(a,b)=>{return t>8.6&&((RING.includes(a)&&(RING.includes(b)||b==='x'))||a==='v'&&RING.includes(b)||a==='v2'&&RING.includes(b))?mixC(C.cyan,C.amber,hl):C.cyan};
    [[IN,.5],[MID,1.5],[OUT,2.4]].forEach(([E,s0])=>E.forEach(([a,b],j)=>seg(P(a),P(b),flowCol(a,b),1.7,.55*A,ap(s0+j*.1,.5))));
    IN.forEach(([a,b],j)=>pulse(P(a),P(b),(t-.6-j*.12)/.8,C.cyan,A));
    MID.forEach(([a,b],j)=>pulse(P(a),P(b),(t-1.6-j*.1)/.7,C.cyan,A));
    OUT.forEach(([a,b],j)=>pulse(P(a),P(b),(t-2.5-j*.1)/.6,C.cyan,A));

    if(t>5&&t<6.6)MULES.concat(['x']).forEach((id,i)=>{const q=ease(clamp((t-5.1-i*.08)/.9));if(q<=0||q>=1)return;const p=lerp(P(id),core,q);ctx.save();ctx.globalAlpha=A*(1-q)*.9;ctx.fillStyle=C.cyan;ctx.fillRect(p.x-3,p.y-3,6,6);ctx.restore()});

    (narrow?[['phone','Device logs',[.02,.30]],['doc','Sign-up records',[.02,.60]]]:[['phone','Device logs',[.40,-.03]],['doc','Sign-up records',[.86,-.03]]]).forEach(([icon,lab,o],j)=>{const loc=t-5.2-j*.3;if(loc<0||loc>1.4)return;const o0=at(o),q=ease(clamp((loc-.15)/1)),h=lerp(o0,core,q),a=(loc<.15?loc/.15:1)*(1-ease((q-.82)/.18))*A;
      ctx.save();ctx.globalAlpha=a;rr(h.x-11,h.y-11,22,22,4);ctx.fillStyle='#0C2038';ctx.fill();ctx.strokeStyle=C.cyan;ctx.lineWidth=1.1;ctx.stroke();drawIcon(ctx,icon,h.x,h.y,14,C.soft,1.3);ctx.restore();
      txt(lab,h.x+15,h.y,{align:'left',size:10.5,color:C.soft,alpha:a*(1-q)})});

    const beam=(id,s0)=>{if(t<s0)return;const p=P(id),q=ap(s0,.35),hit=t-s0-.35;
      ctx.save();ctx.globalAlpha=A*(hit<.6?.95:.32);ctx.strokeStyle=hit<.6?'#BDF0FF':'#7FD6F5';ctx.lineWidth=hit<.6?1.8:1.2;ctx.shadowColor=C.cyan;ctx.shadowBlur=hit<.6?10:4;ctx.setLineDash([4,6]);ctx.lineDashOffset=-t*28;
      const e=lerp(core,p,q);ctx.beginPath();ctx.moveTo(core.x,core.y);ctx.lineTo(e.x,e.y);ctx.stroke();ctx.restore();
      if(hit>0&&hit<.8){const k=hit/.8;ctx.save();ctx.globalAlpha=A*(1-k)*.9;ctx.strokeStyle=C.soft;ctx.lineWidth=1.6;ctx.beginPath();ctx.arc(p.x,p.y,nr*(1+k*1.4),0,TAU);ctx.stroke();ctx.restore()}};
    if(t>5.9){['v','v2','m1','m2','m3','m4','m5','m6','x'].forEach((id,i)=>beam(id,5.9+i*.13));beam('d',6.9);beam('c',8.3)}
    if(t>9.3)beam('n',9.3);

    const d=P('d');
    if(t>6.4){const gd=ap(6.4,.5);
      RING.forEach((id,j)=>seg(d,P(id),C.amber,1.7,.9*A,ap(6.9+j*.35,.5),[5,5]));
      node(d,nr,'phone',C.amber,gd*A,10,1.7,true);
      txt(narrow?'Same phone':'Same phone & SIM batch',d.x,d.y+(narrow?-24:-27),{w:700,color:C.amber,alpha:ap(7.4)*A,size:narrow?10.5:12});
      const c=P('c'),ca=ap(8.3,.5);
      seg(d,c,C.red,1.7,.9*A,ap(8.1,.5),[5,5]);seg(P('x'),c,C.red,1.7,.9*A,ap(8.5,.6),[5,5]);
      node(c,nr*1.05,'person',C.red,ca*A,10+4*Math.sin(t*5),1.8);
      txt('Controller',c.x,c.y+nr+16,{w:700,color:C.red,alpha:ap(8.6)*A,size:narrow?10.5:12});
      if(!narrow)txt('receives the money',c.x,c.y+nr+31,{size:11,color:'#F2A09E',alpha:ap(8.8)*A});
    }

    const n=P('n');
    if(t>9){const na=ap(9,.4),pop=1+.4*(1-ap(9,.7));
      seg(n,d,C.red,1.9,.95*A,ap(9.8,.6),[5,5]);
      const col=t>10.2?mixC(C.soft,C.red,ap(10.2,.4)):C.soft;
      node(n,nr*pop,'card',col,na*A,12*(1-ap(9.6,1))+(t>10.2?10:0),1.8);
      txt(t<10.2?'Brand-new account':'New account flagged',n.x,n.y+nr+16,{w:700,size:narrow?10.5:12,color:t<10.2?C.soft:C.red,alpha:na*A});
      txt(t<10.2?'no history yet':'on day one',n.x,n.y+nr+(narrow?29:31),{size:narrow?10:11,color:C.muted,alpha:na*A});
    }

    ['v','v2'].forEach(id=>{const p=P(id);node(p,nr*1.1,'person',C.text,ap(.1)*A,0,1.4);
      txt('Scam victim',p.x,p.y+(narrow?nr+12:nr+18),{w:600,size:narrow?10:12,alpha:ap(.1)*A})});
    MULES.forEach((id,i)=>{const p=P(id),inR=RING.includes(id),col=inR&&t>8.6?mixC(C.cyan,C.amber,hl):C.cyan;node(p,nr,'card',col,ap(.2+i*.08)*A,inR&&t>8.6?8:0);
      if(!narrow||i<4)txt(APPS[id],p.x+(narrow?0:nr+8),narrow?p.y+nr+11:p.y,{align:narrow?'center':'left',size:narrow?10:11,color:C.muted,alpha:ap(.3+i*.08)*A})});
    if(!narrow){txt(t<7.8?'New accounts, different apps':'Different apps, same timing',P('m1').x,P('m1').y-nr-16,{w:t<7.8?600:700,size:12,color:t<7.8?C.text:C.amber,alpha:ap(6.3)*A})}else if(t>7.8){pill('Different apps, same timing',at([.5,.135]).x,at([.5,.135]).y,{color:C.amber,alpha:ap(7.8)*A,size:10})}
    node(P('x'),nr*1.1,'bank',t>8.6?mixC(C.cyan,C.amber,hl):C.cyan,ap(.5)*A,0,1.6);
    txt('Cash-out',P('x').x,P('x').y+nr+18,{w:600,size:narrow?10.5:12,alpha:ap(.5)*A});
    pill('Gone in minutes',P('x').x,P('x').y-(narrow?28:34),{color:C.soft,alpha:ap(2.9,.4)*(1-ap(6.4,.5))*A});

    [['m1',1.5],['m5',2.3]].forEach(([id,s])=>{const p=P(id),a=ap(s,.4)*(1-ap(6.2,.5))*A;pill(narrow?'✓ No alert':'✓ New account, no alert',p.x+(narrow?0:10),p.y-nr-14,{color:'#8FA2C6',tc:'#C9D4EA',alpha:a})});

    // Fraud stages under the route (mirrors AML's Placement/Layering/Integration)
    if(!narrow){const y=at([0,.80]).y,ba=ap(1,.6)*A;
      [['Payments',.02,.30,0],['Convergence',.32,.70,1],['Cash-out',.72,.98,3]].forEach(([lab,x0,x1,k])=>{const on=t>.8+k*.7&&t<5?1:0,a0=box.l+x0*box.w,a1=box.l+x1*box.w;
        ctx.save();ctx.globalAlpha=ba*(on?1:.55);ctx.strokeStyle=on?C.soft:'#3A5480';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(a0,y-5);ctx.lineTo(a0,y);ctx.lineTo(a1,y);ctx.lineTo(a1,y-5);ctx.stroke();ctx.restore();
        txt(lab,(a0+a1)/2,y+13,{w:600,size:11.5,color:on?C.soft:'#7E90B0',alpha:ba})})}

    if(t>8){const a=ap(8,.6)*A,cw=narrow?box.w:Math.min(320,box.w*.42),ch=narrow?82:94,x=box.l,y=narrow?Math.max(at([0,.79]).y,box.b-ch):box.t;
      ctx.save();ctx.globalAlpha=a;ctx.shadowColor=C.amber;ctx.shadowBlur=18;rr(x,y,cw,ch,10);ctx.fillStyle='rgba(10,22,44,.985)';ctx.fill();ctx.shadowBlur=0;ctx.strokeStyle=C.amber;ctx.lineWidth=1.6;ctx.stroke();ctx.restore();
      const tx=x+14;txt('One mule ring, one case',tx,y+(narrow?17:19),{align:'left',w:700,size:narrow?12.5:13.5,color:C.amber,alpha:a});
      ['Different victims, one controller','One phone, same timing','Next account flagged on day one'].forEach((s,k)=>txt('· '+s,tx,y+(narrow?36:41)+k*(narrow?14:16),{align:'left',size:narrow?11:11.5,color:'#F4F1EA',alpha:ap(8.2+k*.2)*A}))}

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

/* Examples view logic */
(function(){
  const T=(x,y,s,c='',a='middle')=>`<text x="${x}" y="${y}" text-anchor="${a}" class="${c}">${s}</text>`;
  const N=(x,y,r,c)=>`<circle cx="${x}" cy="${y}" r="${r}" class="${c}"/>`;
  const B=(x,y,w,h,c,s,tc='w')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" class="${c}"/>`+T(x+w/2,y+h/2+5,s,tc);
  const MOV=(d,dur,b)=>`<circle r="3.2" fill="#E7F8FE"><animateMotion dur="${dur}s" begin="${b}s" repeatCount="indefinite" path="${d}"/></circle>`;
  const F=[
   ()=>{let s='';const xs=[32,92,152,212,272,332];
     [['App A',62],['App B',182],['App C',302]].forEach(([l,x])=>{s+=`<rect x="${x-52}" y="70" width="104" height="80" rx="10" fill="none" stroke="#2A3C63" stroke-dasharray="4 4"/>`+T(x,62,l,'')});
     [[0,1],[2,3],[4,5]].forEach(([a,b])=>{s+=`<path class="pc" d="M${xs[a]} 110 L ${xs[b]} 110"/>`+MOV(`M${xs[a]} 110 L ${xs[b]} 110`,1.6,-a*.2)});
     s+=xs.map(x=>N(x,110,11,'n')).join('');
     s+=`<g class="r">`+[62,182,302].map(x=>T(x,176,'✓ normal','ok')).join('')+`</g>`;
     s+=`<g class="c"><path class="pr" d="M92 110 L 152 110"/><path class="pr" d="M212 110 L 272 110"/>`+xs.map(x=>N(x,110,11,'nr')).join('')+T(182,182,'One chain, emptied in minutes','rd')+`</g>`;
     return s},
   ()=>{let s='';const pos=[[50,60],[120,40],[190,40],[260,60],[50,170],[120,190],[190,190],[260,170]];
     s+=`<g class="c">`+pos.map(([x,y])=>`<path class="rla" d="M155 115 L ${x} ${y}"/>`).join('')+`<rect x="135" y="95" width="40" height="40" rx="8" class="boxa"/>`+'<use href="#i-phone" x="143" y="103" width="24" height="24" fill="none" stroke="#F2B84B" stroke-width="1.5"/>'+T(155,158,'Same phones','am')+`</g>`;
     s+=pos.map(([x,y])=>N(x,y,11,'n')).join('');
     s+=`<g class="r">${T(155,122,'✓ real IDs','ok')}</g>`;
     s+=`<g class="c">`+pos.map(([x,y])=>N(x,y,11,'nr')).join('')+T(155,215,'One operator','rd')+`</g>`;
     return s},
   ()=>{let s='';const st=[[70,120],[180,120],[290,120]];
     s+=st.map(([x,y])=>B(x-38,y-18,76,36,'box','Shop')).join('');
     s+=`<g class="r">`+st.map(([x])=>T(x,166,'✓ real sales','ok')).join('')+`</g>`;
     s+=`<g class="c">`+[120,180,240].map((x,i)=>N(x,40,7,'na')+st.map(([sx])=>`<path class="rla" d="M${x} 47 L ${sx} 102"/>`).join('')).join('')+T(180,22,'Same wallets, at night','am')+
       st.map(([x])=>`<path class="pr" d="M${x} 138 L 180 186"/>`).join('')+B(120,180,120,30,'boxr','Holding company','rd')+`</g>`;
     return s},
   ()=>{let s=`<path d="M20 186 H 340" stroke="#2A3C63"/>`;const q=[[70,'Business 1'],[180,'Business 2'],[290,'Business 3']];
     s+=q.map(([x,l])=>N(x,130,15,'n')+T(x,206,l,'')).join('');
     s+=`<g class="r">`+q.map(([x])=>T(x,100,'✓ new','ok')).join('')+`</g>`;
     s+=`<g class="c">`+B(110,24,140,30,'boxa','Same formation agent','am')+q.map(([x])=>`<path class="rla" d="M180 54 L ${x} 116"/>`).join('')+q.map(([x])=>N(x,130,15,'nr')).join('')+T(180,170,'One syndicate','rd')+`</g>`;
     return s},
   ()=>{let s='';const cards=[];for(let r=0;r<4;r++)for(let c=0;c<2;c++)cards.push([250+c*52,44+r*40]);
     s+=cards.map(([x,y])=>`<path class="pc" d="M${x-16} ${y} Q 170 ${y} 104 116" style="opacity:.45"/><rect x="${x-16}" y="${y-10}" width="32" height="20" rx="3" class="box"/>`).join('');
     s+=cards.map(([x,y],i)=>MOV(`M${x-16} ${y} Q 170 ${y} 104 116`,2.6,-i*.3)).join('');
     s+=N(88,116,17,'nc')+T(88,154,'One merchant','w');
     s+=`<g class="r">${T(88,180,'✓ everyday noise','ok')}</g>`;
     s+=`<g class="c"><rect x="222" y="22" width="108" height="164" rx="10" fill="none" stroke="#F0524F" stroke-width="1.6" stroke-dasharray="6 5"/>`+T(276,206,'Exposed cards','rd')+T(88,180,'Same test point','am')+`</g>`;
     return s},
   ()=>{let s='';
     s+=[60,160].map(y=>N(36,y,10,'n')+`<path class="pc" d="M46 ${y} L 150 ${y}"/>`).join('')+T(36,32,'Purchases','');
     s+=[60,160].map(y=>N(168,y,16,'nc')).join('')+T(168,32,'Merchants','w');
     s+=`<g class="r">`+[60,160].map(y=>T(250,y+5,'✓ normal refunds','ok')).join('')+`</g>`;
     s+=`<g class="c"><path class="rla" d="M168 76 L 168 144"/>`+T(178,114,'shared back office','am','start')+[60,160].map(y=>`<path class="pr" d="M184 ${y} L 300 ${y}"/>`+N(316,y,11,'nr')+MOV(`M184 ${y} L 300 ${y}`,1.5,-y/100)).join('')+T(316,32,'Other cards','rd')+`</g>`;
     return s}];
  const cards=$$('.exc');
  $$('.exfig').forEach(el=>{el.innerHTML=`<svg viewBox="0 0 360 220" aria-hidden="true">${F[+el.dataset.x]()}</svg>`});
  let timers=[];
  function play(group){const list=group?$$('.exc',group):cards;timers.forEach(clearTimeout);timers=[];list.forEach(c=>c.classList.remove('on'));
    if(RMQ.matches){list.forEach(c=>c.classList.add('on'));return}
    list.forEach((c,i)=>timers.push(setTimeout(()=>c.classList.add('on'),1300+i*650)))}
  [$('#exs')].forEach(g=>onVisible(g,()=>{const list=$$('.exc',g);if(RMQ.matches){list.forEach(c=>c.classList.add('on'));return}list.forEach((c,i)=>timers.push(setTimeout(()=>c.classList.add('on'),1300+i*650)))},.35));
  $('#exReplay').addEventListener('click',()=>play());
})();
onVisible($('#ldr'),()=>$('#ldr').classList.add('in'),.25);
onVisible($('#caseCard'),()=>$('#caseCard').classList.add('in'),.35);
if(RMQ.matches){$('#caseCard').classList.add('in')}
onVisible($('#steps4'),()=>$('#steps4').classList.add('in'),.35);

})();
      } catch (err) { console.error('[solution-fraud] page script error:', err); }
      return {  };
    }
  })(cq);
}
