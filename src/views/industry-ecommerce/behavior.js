// Generated from public/html/contexq-ecommerce-v4.html.
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
/* Hero: approved orders arrive; ContexQ reveals what connects them. */
const $=s=>document.querySelector(s),motion=$('#commerce-motion'),svg=$('#cqSvg'),NS='http://www.w3.org/2000/svg',reduced=matchMedia('(prefers-reduced-motion: reduce)');
const MAP={rows:67,cols:180,lat0:76,span:134,b64:'AAAABhA24P///oAAAAAAEAAOwAAAAAAAAAAEACAAf//wAAEAADAAf/oAAAAAAAAAHdnn0AH//gAAAAAMDD///8DgAAADwAAD4z/wH/8gAAAoACDf//////wAgf///+wdjwD/8AAAH/iL//////////+D//////h2H/gAAAf+z/+/////////EX/////9n4D8AeAB++///////////+Af/////wkcBwAAAH5///////////99EP9////gHgAQAAAH5v//////////HAADgH///gH0AAAAEEx/////////+AIAACAC///8D+AAAAGCz/////////4A8AAAAAf///v/gAAALAL/////////wAwAAAAAf///n/wAAAbv///////////AgAAAAAL/////QAAAEf//////////9AAAAAAAB////sYAAAD///////////8AAAAAAAD////9AAAAB//7f///////4AAAAAAAD////0AAAAB/Pwf///////xQAAAAAAD////gAAAAPynwH//////+DAAAAAAAD///+AAAAAPCbP///////eCAAAAAAAD///8AAAAAfABf//////+ECAAAAAAAB///8AAAAAEeAC///////GMAAAAAAAA///4AAAAAH+AA///////AgAAAAAAAAf//wAAAAAf/jB///////hAAAAAAAAAL//gAAAAAf/7//f/////AAAAAAAAAAD/AQAAAAA///9/P/////gAAAAAAAAAB+AUAAAAB///+/h/////AAAAAAAAAAC+AAAAAAD////f0D///+gAAAAAAAAAAeAQAAAAD////P/B/7/4AAAAAAAAAAAeEGAAAAD////v+A/j+AAAAAAAAAAAAPsAwAAAD////n8A/B+ggAAAAAAAAAAB8AAAAAD////3wAeBfAgAAAAAAAAAAAPABAAAH////7gAcAfggAAAAAAAAAAADAAAAAD////8AAcAXgoAAAAAAAAAAABD6AAAB////9wAMATAYAAAAAAAAAAAAz/AAAB/////gAKAQAIAAAAAAAAAAAAH/gAAAf////gACAICIAAAAAAAAAAAAH/8AAAAH///AAAAsGAAAAAAAAAAAAAH/+AAAAB//+AAAAUOAAAAAAAAAAAAAP/+AAAAB//8AAAAM+wAAAAAAAAAAAAP//gAAAB//4AAAAccwgAAAAAAAAAAAP//+AAAB//wAAAAGFk/AAAAAAAAAAAP///AAAA//gAAAACAAHsAAAAAAAAAAP///gAAA//wAAAAAwBHwAAAAAAAAAAH///AAAAf/wAAAAABIAIAAAAAAAAAAH//+AAAAf/wAAAAAABgAAAAAAAAAAAD//+AAAA//wgAAAAABxAAAAAAAAAAAB//+AAAA//wgAAAAAPxgBAAAAAAAAAA//8AAAA//jgAAAAAf/gAAAAAAAAAAAf/8AAAA//DAAAAAAf/wAAAAAAAAAAAf/4AAAAf/DAAAAAD//4AAAAAAAAAAAf/gAAAAf/DAAAAAH//8AAAAAAAAAAAf/AAAAAf8AAAAAAH//+AAAAAAAAAAAf/AAAAAP8AAAAAAH//+AAAAAAAAAAA/+AAAAAP8AAAAAAH//+AAAAAAAAAAA/8AAAAAH4AAAAAAD//8AAAAAAAAAAA/4AAAAAHwAAAAAADwf8AAAAAAAAAAA/gAAAAAAAAAAAAAAAH4AAAAAAAAAAB/gAAAAAAAAAAAAAAAD4AEAAAAAAAAB+AAAAAAAAAAAAAAAAAAAEAAAAAAAAB8AAAAAAAAAAAAAAAAAwAIAAAAAAAAB4AAAAAAAAAAAAAAAAAAAQAAAAAAAABwAAAAAAAAAAAAAAAAAABgAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAACAAAAAAAAAAAAAAAAABwgAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA='};
const COPY=[['Each order passes checkout.','Your fraud engine approves every purchase on its own: different buyers, cards from different markets, plausible addresses.'],
 ['ContexQ looks across the approved orders.','Working as a second screen, it connects the delivery records. All three orders ship to the same forwarding address.'],
 ['Session signals line up.','Two of the orders also share session and location patterns. Unrelated orders stay unconnected.'],
 ['One ring, reviewed as one case.','Investigators see the orders, cards and reshipping hub together. ContexQ informs the review; it does not block payments, and a shared hub is a lead, not proof.']];
const STAGE_AT=[0,2,5,8],CYCLE=12.6;
const L={
 d:{W:800,H:500,tr:[0,0,.8],glo:[220,262,58],ord:[[432,108],[432,206],[432,304]],cw:176,ch:40,hub:[690,206],
    pay:{c:420},payLbl:[416,166,'end'],rev:[688,370],oth:[[560,430],[560,460]],othA:[[640,430],[640,460]],map:[20,10,760,360],fl:[220,374]},
 m:{W:380,H:460,tr:[0,0,.62],glo:[190,340,42],ord:[[52,46],[52,124],[52,202]],cw:170,ch:38,hub:[330,124],
    pay:{c:38},payLbl:[52,262,'start'],rev:[278,22],oth:[[278,292],[278,318]],othA:[[340,292],[340,318]],map:[-40,8,460,250],fl:[190,410]}
};
let lay=null,el={},t=0,last=0,playing=!reduced.matches,visible=true,stage=-1;
const mk=(tag,at={},parent)=>{const e=document.createElementNS(NS,tag);for(const k in at)e.setAttribute(k,at[k]);(parent||svg).appendChild(e);return e};
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v)),ease=x=>{x=clamp(x);return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2},win=(a,d)=>ease((t-a)/d);
function build(){
 const k=matchMedia('(max-width:640px)').matches?'m':'d';if(lay&&lay.k===k)return;lay=Object.assign({k},L[k]);svg.innerHTML='';el={};
 const {W,H}=lay;svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
 const defs=mk('defs');
 defs.innerHTML=`<linearGradient id="metal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3f8ff"/><stop offset=".45" stop-color="#b4c8e2"/><stop offset=".7" stop-color="#d9e6f6"/><stop offset="1" stop-color="#7f97b8"/></linearGradient>
 <linearGradient id="spec" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".55" stop-color="#fff" stop-opacity=".9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
 <linearGradient id="basketFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#62d7f6" stop-opacity=".10"/><stop offset="1" stop-color="#2f86ff" stop-opacity=".02"/></linearGradient>
 <radialGradient id="floorGlow"><stop offset="0" stop-color="#62d7f6" stop-opacity=".45"/><stop offset=".5" stop-color="#2f86ff" stop-opacity=".16"/><stop offset="1" stop-color="#2f86ff" stop-opacity="0"/></radialGradient>
 <radialGradient id="gloCore" cx=".38" cy=".34" r=".75"><stop offset="0" stop-color="#2a7fd0" stop-opacity=".55"/><stop offset=".6" stop-color="#0d3a6e" stop-opacity=".5"/><stop offset="1" stop-color="#061a33" stop-opacity=".2"/></radialGradient>
 <radialGradient id="gloGlow"><stop offset="0" stop-color="#62d7f6" stop-opacity=".55"/><stop offset="1" stop-color="#2f86ff" stop-opacity="0"/></radialGradient>
 <linearGradient id="reflFade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
 <filter id="glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
 <filter id="mapBlur" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="5"/></filter>
 <filter id="soft" x="-2%" y="-2%" width="104%" height="104%"><feGaussianBlur stdDeviation=".7"/></filter>
 <filter id="far" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="1.4"/></filter>
 <radialGradient id="scrim"><stop offset="0" stop-color="#03101a" stop-opacity=".72"/><stop offset=".7" stop-color="#03101a" stop-opacity=".35"/><stop offset="1" stop-color="#03101a" stop-opacity="0"/></radialGradient>
 <radialGradient id="mapShade" cx=".5" cy=".42" r=".7"><stop offset=".45" stop-color="#03101a" stop-opacity="0"/><stop offset="1" stop-color="#03101a" stop-opacity=".85"/></radialGradient>
 <filter id="mapGlow" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="1.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
 <radialGradient id="bokehC"><stop offset="0" stop-color="#9fe6ff" stop-opacity=".9"/><stop offset=".55" stop-color="#62d7f6" stop-opacity=".35"/><stop offset="1" stop-color="#62d7f6" stop-opacity="0"/></radialGradient>
 <radialGradient id="bokehB"><stop offset="0" stop-color="#7fb4ff" stop-opacity=".8"/><stop offset=".55" stop-color="#2f86ff" stop-opacity=".28"/><stop offset="1" stop-color="#2f86ff" stop-opacity="0"/></radialGradient>
 <radialGradient id="bokehR"><stop offset="0" stop-color="#ffb0ad" stop-opacity=".7"/><stop offset=".55" stop-color="#ff716f" stop-opacity=".22"/><stop offset="1" stop-color="#ff716f" stop-opacity="0"/></radialGradient>
 <radialGradient id="platform" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#bff3ff" stop-opacity=".55"/><stop offset=".35" stop-color="#62d7f6" stop-opacity=".28"/><stop offset=".75" stop-color="#2f86ff" stop-opacity=".1"/><stop offset="1" stop-color="#2f86ff" stop-opacity="0"/></radialGradient>
 <linearGradient id="shaft" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#62d7f6" stop-opacity=".22"/><stop offset="1" stop-color="#62d7f6" stop-opacity="0"/></linearGradient>
 <linearGradient id="chipFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#10304f" stop-opacity=".97"/><stop offset="1" stop-color="#06162a" stop-opacity=".97"/></linearGradient>
 <linearGradient id="vign" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#040b16" stop-opacity="0"/><stop offset=".7" stop-color="#040b16" stop-opacity="0"/><stop offset="1" stop-color="#040b16" stop-opacity=".75"/></linearGradient>`;
 // faint world map
 const [mx,my,mw,mh]=lay.map,bin=atob(MAP.b64);
 let md='';const step=1,dr=Math.min(mw/MAP.cols,mh/MAP.rows)*.46;
 for(let r=0;r<MAP.rows;r++)for(let c=0;c<MAP.cols;c+=step){const i=r*MAP.cols+c;if((bin.charCodeAt(i>>3)>>(7-(i&7)))&1){const x=mx+c/MAP.cols*mw,y=my+r/MAP.rows*mh;md+=`M${(x-dr).toFixed(1)} ${y.toFixed(1)}a${dr} ${dr} 0 1 0 ${2*dr} 0a${dr} ${dr} 0 1 0 ${-2*dr} 0`}}
 mk('path',{d:md,fill:'#38c9d6',opacity:.55,filter:'url(#mapBlur)'});
 mk('path',{d:md,fill:'#5fe0e8',opacity:.5,filter:'url(#soft)'});
 mk('rect',{x:0,y:0,width:W,height:H,fill:'url(#mapShade)'});
 {const [ox,oy]=lay.ord[1];mk('ellipse',{cx:lay.k==='m'?190:ox+110,cy:oy+20,rx:lay.k==='m'?230:280,ry:lay.k==='m'?170:190,fill:'url(#scrim)'})}
 // background depth: soft bokeh and floating commerce tiles
 const bk=mk('g',{class:'bokeh'});let seed=7;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
 for(let i=0;i<60;i++){const lowY=i<40,x=rnd()*W,y=lowY?H*(.8+rnd()*.2):rnd()*H*.75,r=lowY?2+rnd()*10:1.5+rnd()*4,f=rnd()<.12?'bokehR':rnd()<.55?'bokehC':'bokehB';mk('circle',{cx:x.toFixed(1),cy:y.toFixed(1),r:r.toFixed(1),fill:`url(#${f})`,opacity:(.35+rnd()*.5).toFixed(2)},bk)}
 const tl=mk('g',{class:'tiles'}),TI=['M-5 -3h10v6h-10z M-5 -1h10','M-4 -5h8v10h-8z M-2 -2h4 M-2 1h4','M-5 -2l5 -3 5 3v5h-10z','M-5 -4h10v6h-6l-3 3v-3h-1z'];
 (lay.k==='m'?[[30,250,.55],[352,262,.5]]:[[40,90,.65],[112,214,.5],[764,110,.6],[770,300,.55]]).forEach(([x,y,o],i)=>{if(lay.k!=='m'&&i<4)mk('path',{d:`M${x+(x<400?15:-15)} ${y} h${x<400?40:-40} v18`,fill:'none',stroke:'#5fe0e8','stroke-width':.8,opacity:.45},tl);const g=mk('g',{transform:`translate(${x} ${y})`,opacity:o,filter:i%2?'url(#far)':null},tl);if(!(i%2))g.removeAttribute('filter');mk('rect',{x:-15,y:-12,width:30,height:24,rx:5,fill:'#0b2a3d',stroke:'#5fe0e8','stroke-width':1},g);mk('path',{d:TI[i%4],fill:'none',stroke:'#8fd0ff','stroke-width':1.3},g)});
 mk('rect',{x:0,y:0,width:W,height:H,fill:'url(#vign)'});
 // floor
 const [fx,fy]=lay.fl,s=lay.tr[2];
 mk('ellipse',{cx:fx,cy:fy,rx:210*s,ry:34*s,fill:'url(#platform)'});
 mk('ellipse',{cx:fx,cy:fy,rx:150*s,ry:20*s,fill:'none',stroke:'#62d7f6','stroke-width':1.2,opacity:.45});
 el.ring=mk('ellipse',{cx:fx,cy:fy,rx:118*s,ry:15*s,fill:'none',stroke:'#c8f4ff','stroke-width':2.2,opacity:.8,filter:'url(#glow)'});
 mk('ellipse',{cx:fx,cy:fy,rx:190*s,ry:28*s,fill:'none',stroke:'#2f86ff','stroke-width':1,opacity:.3,'stroke-dasharray':'2 6'});

 el.mouth=null;
 // globe
 const [gx,gy,gr]=lay.glo;
 // ContexQ globe: the hero of the scene - bright core, crisp rim, orbit rings and a light column from the platform
 el.gGlow=mk('circle',{cx:gx,cy:gy,r:gr*3.2,fill:'url(#gloGlow)',opacity:.3});
 mk('path',{d:`M${gx-gr*.9} ${lay.fl[1]} L${gx-gr*.55} ${gy} L${gx+gr*.55} ${gy} L${gx+gr*.9} ${lay.fl[1]} Z`,fill:'url(#shaft)',opacity:.9});
 el.globe=mk('g',{opacity:.6});
 mk('circle',{cx:gx,cy:gy,r:gr,fill:'url(#gloCore)'},el.globe);
 for(let i=0;i<520;i++){const y=1-i/519*2,rr=Math.sqrt(1-y*y),a=i*2.399963,x=Math.cos(a)*rr,z=Math.sin(a)*rr;const ry=y*Math.cos(.35)-z*Math.sin(.35),rz=y*Math.sin(.35)+z*Math.cos(.35);if(rz<-.15)continue;mk('circle',{cx:(gx+x*gr).toFixed(1),cy:(gy-ry*gr).toFixed(1),r:(.6+(rz+1)*.55).toFixed(2),fill:rz>.55?'#f2fcff':rz>0?'#9fe6ff':'#4fa8ef',opacity:(.45+(rz+1)*.27).toFixed(2)},el.globe)}
 mk('circle',{cx:gx,cy:gy,r:gr+1.5,fill:'none',stroke:'#bff1ff','stroke-width':1.4,opacity:.75,filter:'url(#glow)'},el.globe);
 el.orb1=mk('ellipse',{cx:gx,cy:gy,rx:gr*1.55,ry:gr*.38,fill:'none',stroke:'#62d7f6','stroke-width':1.1,opacity:.6,transform:`rotate(-16 ${gx} ${gy})`},el.globe);
 el.orb2=mk('ellipse',{cx:gx,cy:gy,rx:gr*1.32,ry:gr*.3,fill:'none',stroke:'#2f86ff','stroke-width':1,opacity:.5,'stroke-dasharray':'3 5',transform:`rotate(12 ${gx} ${gy})`},el.globe);
 el.sat=mk('circle',{r:3.2,fill:'#e9fbff',filter:'url(#glow)'},el.globe);
 el.gLabel=mk('text',{x:gx,y:gy+gr+(lay.k==='m'?22:26),'text-anchor':'middle','font-size':lay.k==='m'?15:18,'font-weight':700,'letter-spacing':'.02em',fill:'#f2fbff',opacity:0,filter:'url(#glow)'});el.gLabel.innerHTML='Contex<tspan fill="#ff8a5c">Q</tspan>';
 // lines
 const lineL=mk('g'),C=lay.cw,CH=lay.ch,[hx,hy]=lay.hub;
 el.scan=lay.ord.map(([x,y])=>mk('path',{d:`M${gx} ${gy-gr*.6} Q ${(gx+x)/2} ${Math.min(gy,y)-30} ${x} ${y+CH/2}`,fill:'none',stroke:'#62d7f6','stroke-width':1,'stroke-dasharray':'3 5',opacity:0},lineL));
 el.pulse=mk('circle',{r:3,fill:'#dff7ff',opacity:0},lineL);
 el.del=lay.ord.map(([x,y])=>{const sx=x+C,sy=y+CH/2,d=`M${sx} ${sy} C ${sx+40} ${sy}, ${hx-50} ${hy}, ${hx-15} ${hy}`;const p=mk('path',{d,fill:'none',stroke:'#ff716f','stroke-width':2.2,opacity:.95,filter:'url(#glow)'},lineL);const L=p.getTotalLength();p.style.strokeDasharray=L;p.style.strokeDashoffset=L;p._L=L;return p});
 const [o1,,o3]=lay.ord,cx=lay.pay.c,py1=o1[1]+CH/2,py3=o3[1]+CH/2,px=lay.k==='m'?o1[0]:o1[0];
 el.pay=mk('path',{d:`M${px} ${py1} C ${cx} ${py1}, ${cx} ${py3}, ${px} ${py3}`,fill:'none',stroke:'#ff716f','stroke-width':2.2,'stroke-dasharray':'6 5',opacity:0,filter:'url(#glow)'},lineL);
 // other activity (unconnected, quiet blue)
 el.oth=mk('g',{opacity:0});
 lay.oth.forEach(([x,y],i)=>{const a=lay.othA[i];mk('line',{x1:x,y1:y,x2:a[0],y2:a[1],stroke:'#2f86ff','stroke-width':1,opacity:.5},el.oth);mk('circle',{cx:x,cy:y,r:4,fill:'#0f2a4a',stroke:'#4f8fd6'},el.oth)});
 lay.othA.forEach(([x,y])=>mk('rect',{x:x-4,y:y-4,width:8,height:8,rx:2,fill:'#0f2a4a',stroke:'#4f8fd6'},el.oth));
 const ot=mk('text',{x:lay.oth[0][0]-8,y:lay.oth[0][1]-12,'font-size':lay.k==='m'?10:11,fill:'#7f9fbf'},el.oth);ot.textContent=lay.k==='m'?'Other orders':'Other orders · own addresses';
 // order records
 el.ord=lay.ord.map(([x,y],i)=>{const g=mk('g',{opacity:0});
   mk('rect',{x:0,y:0,width:C,height:CH,rx:10,fill:'url(#chipFill)',stroke:'#4f8fd0','stroke-width':1.3},g);mk('path',{d:`M10 1 H${C-10}`,stroke:'#bfe6ff','stroke-width':1,opacity:.45},g);
   mk('rect',{x:7,y:7,width:CH-14,height:CH-14,rx:6,fill:'#16365e'},g);
   const ic=mk('path',{d:`M${12} ${15} h${CH-24} l1 ${CH-24} h${-(CH-22)} z M${15} ${15} v-2 a3 3 0 0 1 ${CH-30} 0 v2`,fill:'none',stroke:'#9fd0ff','stroke-width':1.3},g);
   const tA=mk('text',{x:CH,y:CH/2-2,'font-size':12.5,'font-weight':600,fill:'#e6f2ff'},g);tA.textContent='Order '+(i+1);
   const tB=mk('text',{x:CH,y:CH/2+12,'font-size':10.5,fill:'#8fb0cc'},g);tB.textContent='Buyer '+'ABC'[i]+' · Market '+'ABC'[i]+' card';
   const ok=mk('g',{class:'okb'},g);mk('circle',{cx:C-14,cy:CH/2,r:8,fill:'#0f3a2c',stroke:'#3ccb8a','stroke-width':1.2},ok);mk('path',{d:`M${C-18} ${CH/2} l3 3 l5 -6`,fill:'none',stroke:'#7ee2b0','stroke-width':1.6,'stroke-linecap':'round','stroke-linejoin':'round'},ok);
   g._x=x;g._y=y;return g});
 // hub
 el.hub=mk('g',{opacity:0});mk('circle',{cx:hx,cy:hy,r:30,fill:'url(#bokehR)',opacity:.9},el.hub);mk('circle',{cx:hx,cy:hy,r:15,fill:'#2a1520',stroke:'#ff716f','stroke-width':2},el.hub);
 mk('path',{d:`M${hx-6} ${hy+1} l6 -6 l6 6 v6 h-12 z`,fill:'none',stroke:'#ffd2d0','stroke-width':1.4},el.hub);
 const hl=mk('text',{x:hx,y:hy+36,'text-anchor':'middle','font-size':lay.k==='m'?11:12,'font-weight':600,fill:'#ffd2d0'},el.hub);
 if(lay.k==='m'){hl.innerHTML='<tspan x="'+hx+'" dy="0">Reshipping</tspan><tspan x="'+hx+'" dy="13">hub</tspan>'}else{hl.setAttribute('x',hx+24);hl.setAttribute('y',hy-2);hl.setAttribute('text-anchor','start');hl.innerHTML='<tspan x="'+(hx+24)+'" dy="0">Reshipping</tspan><tspan x="'+(hx+24)+'" dy="15">hub</tspan>'}
 // payment label
 const [plx,ply,pla]=lay.payLbl;el.payL=mk('g',{opacity:0});{const tw=lay.k==='m'?140:152,bx=pla==='end'?plx-tw:plx-6;mk('rect',{x:bx-4,y:ply-14,width:tw+8,height:21,rx:10.5,fill:'#1d0f18',stroke:'#ff716f','stroke-opacity':.5},el.payL);const tt=mk('text',{x:pla==='end'?plx-2:plx+2,y:ply+1,'text-anchor':pla,'font-size':lay.k==='m'?11:12,'font-weight':600,fill:'#ffc2bf'},el.payL);tt.textContent='Shared session signals'}
 // review tag
 const [rx,ry]=lay.rev;el.rev=mk('g',{opacity:0});const rw=lay.k==='m'?190:200;mk('rect',{x:rx-rw/2,y:ry-14,width:rw,height:28,rx:14,fill:'#3a1820',stroke:'#ff716f','stroke-width':1.2},el.rev);
 const rt=mk('text',{x:rx,y:ry+4.5,'text-anchor':'middle','font-size':12,'font-weight':600,fill:'#fff'},el.rev);rt.textContent='One ring · review as one case';
 draw();
}
function draw(){
 if(!lay)return;const [gx,gy,gr]=lay.glo;
 // approved orders arrive one by one
 el.ord.forEach((g,i)=>{const k=win(.25+i*.55,1.1),x=g._x-(1-k)*120,y=g._y,sc=.92+.08*k;
   g.setAttribute('transform',`translate(${x} ${y}) scale(${sc})`);g.setAttribute('opacity',(clamp(k*3)).toFixed(2))});
 // ContexQ illuminates and reads the records
 const gl=win(2,.7);el.globe.setAttribute('opacity',(.5+.5*gl).toFixed(2));el.gGlow.setAttribute('opacity',(.3+.7*gl).toFixed(2));{const an=t*.9,c=Math.cos(-16*Math.PI/180),sn=Math.sin(-16*Math.PI/180),ex=Math.cos(an)*gr*1.55,ey=Math.sin(an)*gr*.38;el.sat.setAttribute('cx',(gx+ex*c-ey*sn).toFixed(1));el.sat.setAttribute('cy',(gy+ex*sn+ey*c).toFixed(1));el.sat.setAttribute('opacity',Math.sin(an)>-.2?1:.35)}el.gLabel.setAttribute('opacity',gl.toFixed(2));
 el.scan.forEach((p,i)=>p.setAttribute('opacity',(win(2.3+i*.15,.5)*(1-win(5.2,1))*.7).toFixed(2)));
 const pq=clamp((t-2.4)/1.1);if(pq>0&&pq<1){const p=el.scan[1],pt=p.getPointAtLength(p.getTotalLength()*ease(pq));el.pulse.setAttribute('cx',pt.x);el.pulse.setAttribute('cy',pt.y);el.pulse.setAttribute('opacity',Math.sin(pq*Math.PI).toFixed(2))}else el.pulse.setAttribute('opacity',0);
 el.oth.setAttribute('opacity',(win(2.6,.8)*.75).toFixed(2));
 // delivery connections draw progressively to one destination
 el.del.forEach((p,i)=>{p.style.strokeDashoffset=(p._L*(1-win(3+i*.5,.9))).toFixed(1)});
 el.hub.setAttribute('opacity',win(3.4,.8).toFixed(2));
 el.ord.forEach(g=>g.firstChild.setAttribute('stroke',t>4.6?'#ff8a87':'#4f8fd0'));
 // payment relationship between two orders
 el.pay.setAttribute('opacity',win(5.2,1).toFixed(2));el.payL.setAttribute('opacity',win(5.8,.8).toFixed(2));
 el.rev.setAttribute('opacity',win(8,.8).toFixed(2));
 el.ring.setAttribute('opacity',(.25+.15*Math.sin(t*1.4)).toFixed(2));
 // soft fade before the loop restarts
 svg.style.opacity=t>CYCLE-.9?(1-clamp((t-(CYCLE-.9))/.8)).toFixed(2):1;
 const s=STAGE_AT.reduce((a,v,i)=>t>=v?i:a,0);if(s!==stage){stage=s;caption()}
}
function caption(){motion.dataset.stage=stage;$('#scene-title').textContent=COPY[stage][0];$('#scene-copy').textContent=COPY[stage][1];
 document.querySelectorAll('.stages button').forEach((b,i)=>{b.classList.toggle('active',i===stage);b.classList.toggle('done',i<stage);b.setAttribute('aria-pressed',String(i===stage))});}
function ui(){$('#pause').textContent=playing?'Ⅱ Pause':'▷ Play';$('#pause').setAttribute('aria-label',playing?'Pause animation':'Play animation');$('#motion-state').textContent=reduced.matches?'Showing the connected orders':playing?'Playing automatically':'Paused'}
function frame(now){const dt=last?Math.min((now-last)/1000,.06):0;last=now;if(playing&&visible&&!document.hidden){t+=dt;if(t>=CYCLE)t=0;draw()}requestAnimationFrame(frame)}
document.querySelectorAll('.stages button').forEach((b,i)=>b.onclick=()=>{t=[0,2.2,5.3,9][i];if(i===0)t=0;draw()});
$('#pause').onclick=()=>{playing=!playing;ui()};$('#replay').onclick=()=>{t=0;playing=true;ui();draw()};
new IntersectionObserver(es=>{visible=es[0].isIntersecting},{threshold:.1}).observe(motion);
new ResizeObserver(()=>{build()}).observe(motion);
const setRM=()=>{if(reduced.matches){playing=false;t=9}else{playing=true}ui();draw()};reduced.addEventListener('change',setRM);
build();if(reduced.matches){t=9;playing=false}ui();draw();requestAnimationFrame(frame);
})();

(()=>{'use strict';const $=s=>document.querySelector(s),reduced=matchMedia('(prefers-reduced-motion: reduce)');
const cases=[
['reshipping','Card-not-present orders and reshipping','Follow the goods to where they really go.','Stolen cards from several markets buy from different online merchants. Each issuer sees a few foreign orders and each merchant sees a plausible delivery address, so nothing stands out.','Examined: delivery and forwarding addresses, cards clustered across issuers, and unusual session or location patterns.','Do separate orders lead to the same destination?','Review orders that share a forwarding hub as one case, alongside the cards and accounts behind them.'],
['testing','Card testing before high-value fraud','Catch the test run, not just the theft.','Fraudsters confirm stolen cards with tiny payments that look like routine noise, then use the validated cards for larger purchases.','Examined: the shared signature of a testing run across cards, amounts and the merchant or terminal used, and where those cards appear next.','Which cards were tested together?','Watch and prioritise cards linked to the same testing run before larger purchases are attempted.'],
['giftcard','Gift-card draining networks','See the operation behind small purchases.','Many stolen cards buy gift cards in amounts that stay under individual limits, spread across many stores.','Examined: purchases across merchants, repeated gift-card values, and the routes the buying follows.','Are these purchases part of one operation?','Bring the buying runs together so investigators can scope the whole network.'],
['refunds','Merchant refund collusion','When refunds become the route out.','Purchases on stolen cards are refunded to different cards controlled by the same group. Each merchant’s refunds look like normal customer service.','Examined: refunds paid to a different card than the purchase, refund levels compared with similar merchants, and shared back-office links between merchants.','Are these merchants connected?','Review related merchants as one case instead of one at a time.'],
['synthetic','Synthetic identities and bust-out','Spot the ring while it is still building trust.','Manufactured identities build a clean history, then exit together. ContexQ’s scenario shows this in lending; the same pattern can apply to buy-now-pay-later or commerce credit.','Examined: similar applications, identity checks against official registries, shared addresses and links across lenders.','Do these applicants share the same infrastructure?','Review connected applicants as a group before limits grow.'],
['sellers','Seller onboarding and review','Know who is behind a business seller.','Marketplaces need to understand who owns and controls a seller, and whether a new seller is connected to one that was previously removed. Social-commerce storefronts, such as livestream shops, raise similar questions.','Examined: business registration, owners and directors, and links to previously exited businesses, drawing on ContexQ’s KYC capabilities.','Is this seller connected to someone we already know?','A potential application to explore with your team, giving onboarding and periodic reviews a clearer basis.']];
$('#cases').innerHTML=cases.map((c,i)=>`<details class="case" id="${c[0]}" ${i===0?'open':''}><summary>${c[1]}<span class="plus" aria-hidden="true"></span></summary><div class="case-body"><div><h3>${c[2]}</h3><p>${c[3]}</p><div class="result">${c[4]}</div></div><div><div class="decision"><h4>${c[5]}</h4><p>${c[6]}</p></div><button class="next-case" data-next="${cases[(i+1)%cases.length][0]}">Explore ${cases[(i+1)%cases.length][1].toLowerCase()}<span aria-hidden="true">→</span></button></div></div></details>`).join('');
const details=[...document.querySelectorAll('.case')];details.forEach(d=>d.addEventListener('toggle',()=>{if(d.open)details.forEach(o=>{if(o!==d)o.open=false})}));document.querySelectorAll('[data-next]').forEach(b=>b.onclick=()=>{const d=document.getElementById(b.dataset.next);details.forEach(o=>o.open=o===d);d.querySelector('summary').focus({preventScroll:true});d.scrollIntoView({block:'start',behavior:reduced.matches?'instant':'smooth'})});const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));})();
      } catch (err) { console.error('[industry-ecommerce] page script error:', err); }
      return {  };
    }
  })(cq);
}
