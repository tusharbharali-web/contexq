// Generated from public/html/contexq-telecom-v4.html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      // ---- page script ----
      try {
/* Hero: "Signal city". A night-time city on a telecom network. ContexQ, the globe above
   the skyline, links what happens on the ground into three findings: one subscriber,
   a connected group of applications, and a supplier's ownership. Steps only toggle a
   data attribute; CSS handles transitions and the ambient signal pulses. */
(()=>{
const stage=document.getElementById('cq-stage'),svg=document.getElementById('tq-svg'),cap=document.getElementById('tq-cap'),pauseB=document.getElementById('cq-pause'),statusEl=document.getElementById('cq-status'),NS='http://www.w3.org/2000/svg',RM=matchMedia('(prefers-reduced-motion: reduce)');
const CAPS=['Know the customer: a mobile line and a home broadband account resolve to one subscriber. His business account stays a separate role.',
 'Investigate activity: applications from different homes lead to the same dealer and device, so they are reviewed as one group. A shared detail is a clue, not proof.',
 'Assess partners: behind a network supplier sits a parent company, bringing ownership and dependencies into view.',
 'One connected view across customers, investigations and partners. Your teams decide what happens next.'];
const ICON={phone:'M-4 -7 h8 v14 h-8 z M-1 5 h2',house:'M-6 0 L0 -6 L6 0 M-4 -1 V6 H4 V-1',office:'M-5 7 V-6 H5 V7 M-2 -3 h1 M1 -3 h1 M-2 0 h1 M1 0 h1 M-2 3 h1 M1 3 h1',person:'M0 -4 m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M-6 7 Q0 0 6 7',doc:'M-5 -7 H3 L6 -4 V7 H-5 Z M-2 -1 H3 M-2 2 H3',store:'M-6 -2 h12 l-1 -4 h-10 z M-5 -2 v8 h10 v-8',chain:'M-6 2 a3 3 0 0 1 0 -4 l2 -2 a3 3 0 0 1 4 0 M6 -2 a3 3 0 0 1 0 4 l-2 2 a3 3 0 0 1 -4 0 M-2 2 l4 -4',mast:'M0 -7 V7 M-4 7 L0 -3 L4 7 M-5 -6 a7 7 0 0 0 0 6 M5 -6 a7 7 0 0 1 0 6',sim:'M-5 -7 h7 l3 3 v11 h-10 z M-2 0 h4 v4 h-4 z'};
// layouts: g = globe, pins = [lane, x, y, w, icon, kicker, title], res = result tags
const LAY={
 d:{W:800,H:500,ground:452,g:[400,128,46],
  pins:[['c',150,300,'phone','MOBILE','John Smith',168],['c',270,334,'house','BROADBAND','J. Smith',150],['cb',96,236,'office','BUSINESS ACCOUNT','Contact role',150],
        ['i',418,352,'doc','APPLICATION','App A',118],['i',522,316,'doc','APPLICATION','App B',118],['i',616,366,'doc','APPLICATION','App C',118],
        ['p',700,206,'mast','SUPPLIER','Network services',156]],
  dealer:[520,436],hq:[748,300],
  res:[['c',176,96,'person','ONE SUBSCRIBER','John Smith · two services',200],['i',624,96,'chain','CONNECTED GROUP','Same dealer · shared device',210],['p',330,240,'chain','PARTNER EXPOSURE','Ownership & dependencies',220]]},
 m:{W:400,H:600,ground:556,g:[200,92,34],
  pins:[['c',92,330,'phone','MOBILE','John Smith',132],['c',112,398,'house','BROADBAND','J. Smith',132],['cb',84,268,'office','BUSINESS','Contact role',122],
        ['i',222,462,'doc','APP','App A',80],['i',300,432,'doc','APP','App B',80],['i',318,494,'doc','APP','App C',80],
        ['p',296,322,'mast','SUPPLIER','Network services',140]],
  dealer:[250,548],hq:[380,392],
  res:[['c',104,168,'person','ONE SUBSCRIBER','John Smith',184],['i',296,168,'chain','CONNECTED GROUP','Review together',184],['p',200,216,'chain','PARTNER EXPOSURE','Ownership in view',200]]}};
let step=RM.matches?3:0,playing=!RM.matches,inView=true,timer=null,lay='';
const mk=(tag,at,p)=>{const e=document.createElementNS(NS,tag);for(const k in at)e.setAttribute(k,at[k]);(p||svg).appendChild(e);return e};
let seed=11;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
function tag(p,cls,cx,cy,w,icon,k,t,h=38){const g=mk('g',{class:'tg '+cls},p),x=cx-w/2,y=cy-h/2;mk('rect',{x,y,width:w,height:h,rx:9},g);
 mk('path',{class:'ic',d:ICON[icon],transform:`translate(${x+16} ${cy})`},g);const a=mk('text',{class:'k',x:x+30,y:cy-3},g);a.textContent=k;const b=mk('text',{class:'t',x:x+30,y:cy+11},g);b.textContent=t;return g}
function globe(cx,cy,r){
 const g=mk('g',{class:'globe'});mk('circle',{cx,cy,r:r*2.7,fill:'url(#tqHalo)'},g);mk('circle',{cx,cy,r,fill:'url(#tqCore)'},g);
 let d1='',d2='',d3='';for(let i=0;i<620;i++){const y=1-i/619*2,rr=Math.sqrt(1-y*y),a=i*2.399963,x=Math.cos(a)*rr,z=Math.sin(a)*rr,ry=y*Math.cos(.38)-z*Math.sin(.38),rz=y*Math.sin(.38)+z*Math.cos(.38);if(rz<-.1)continue;
  const px=cx+x*r,py=cy-ry*r,s=(.45+(rz+1)*.48).toFixed(2),dot=`M${(px-s).toFixed(1)} ${py.toFixed(1)}a${s} ${s} 0 1 0 ${2*s} 0a${s} ${s} 0 1 0 ${-2*s} 0`;if(rz>.55)d1+=dot;else if(rz>.15)d2+=dot;else d3+=dot}
 mk('path',{d:d3,fill:'#3f8fd8',opacity:.55},g);mk('path',{d:d2,fill:'#7cc8f5',opacity:.85},g);mk('path',{d:d1,fill:'#eefcff'},g);
 mk('circle',{cx,cy,r:r+1.2,fill:'none',stroke:'#bff1ff','stroke-width':1.3,opacity:.85,filter:'url(#tqGlow)'},g);
 const o1=`M${cx-r*1.6} ${cy} a${r*1.6} ${r*.42} 0 1 0 ${r*3.2} 0 a${r*1.6} ${r*.42} 0 1 0 ${-r*3.2} 0`;
 mk('path',{d:o1,fill:'none',stroke:'#7cdef2','stroke-width':1.1,opacity:.6,transform:`rotate(-14 ${cx} ${cy})`},g);
 mk('ellipse',{cx,cy,rx:r*1.35,ry:r*.3,fill:'none',stroke:'#5bb6f8','stroke-width':1,opacity:.45,'stroke-dasharray':'3 5',transform:`rotate(16 ${cx} ${cy})`},g);
 const sg=mk('g',{transform:`rotate(-14 ${cx} ${cy})`},g),sat=mk('circle',{r:3.2,fill:'#f2fdff',filter:'url(#tqGlow)'},sg);
 if(!RM.matches)mk('animateMotion',{dur:'9s',repeatCount:'indefinite',path:o1},sat);else{sat.setAttribute('cx',cx+r*1.6);sat.setAttribute('cy',cy)}
 const lb=mk('text',{x:cx,y:cy-r-14,'text-anchor':'middle','font-size':r>40?16:13,'font-weight':700,fill:'#f2fbff',filter:'url(#tqGlow)'},g);lb.innerHTML='Contex<tspan fill="#ff8a5c">Q</tspan>';
}
function build(){
 const k=matchMedia('(max-width:760px)').matches?'m':'d';if(k===lay)return;lay=k;const L=LAY[k],{W,H}=L,G=L.ground,[gx,gy,gr]=L.g;seed=11;svg.innerHTML='';svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
 mk('defs',{}).innerHTML=`<linearGradient id="tqSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#040c1a"/><stop offset=".55" stop-color="#0a2240"/><stop offset="1" stop-color="#103459"/></linearGradient>
 <radialGradient id="tqHalo"><stop offset="0" stop-color="#7cdef2" stop-opacity=".38"/><stop offset=".5" stop-color="#5bb6f8" stop-opacity=".1"/><stop offset="1" stop-color="#5bb6f8" stop-opacity="0"/></radialGradient>
 <radialGradient id="tqCore" cx=".38" cy=".34" r=".75"><stop offset="0" stop-color="#2a7fd0" stop-opacity=".6"/><stop offset=".6" stop-color="#0d3a6e" stop-opacity=".55"/><stop offset="1" stop-color="#061a33" stop-opacity=".3"/></radialGradient>
 <linearGradient id="tqBeam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7cdef2" stop-opacity=".28"/><stop offset="1" stop-color="#7cdef2" stop-opacity="0"/></linearGradient>
 <linearGradient id="tqBld" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e2848"/><stop offset="1" stop-color="#071628"/></linearGradient>
 <linearGradient id="tqGround" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f86ff" stop-opacity=".35"/><stop offset="1" stop-color="#2f86ff" stop-opacity="0"/></linearGradient>
 <filter id="tqGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;
 mk('rect',{width:W,height:H,fill:'url(#tqSky)'});
 // stars
 let st='';for(let i=0;i<(k==='m'?60:90);i++){const x=rnd()*W,y=rnd()*G*.55,s=(rnd()*.8+.3).toFixed(2);st+=`M${x.toFixed(1)} ${y.toFixed(1)}a${s} ${s} 0 1 0 ${2*s} 0a${s} ${s} 0 1 0 ${-2*s} 0`}mk('path',{d:st,fill:'#bfe3ff',opacity:.55});
 // ContexQ light falling on the city
 mk('path',{d:`M${gx-gr*.7} ${gy+gr*.6} L${gx-gr*3.4} ${G} L${gx+gr*3.4} ${G} L${gx+gr*.7} ${gy+gr*.6} Z`,fill:'url(#tqBeam)',class:'beamcone'});
 // far skyline
 const far=mk('g',{opacity:.5});for(let x=0;x<W;){const w=18+rnd()*30,h=40+rnd()*90;mk('rect',{x,y:G-h-30,width:w,height:h+30,fill:'#0b2140'},far);x+=w+2}
 // near skyline with lit windows
 const near=mk('g',{});let win='';for(let x=-6;x<W;){const w=26+rnd()*44,h=50+rnd()*(k==='m'?120:140);mk('rect',{x,y:G-h,width:w,height:h,fill:'url(#tqBld)',stroke:'#16365a','stroke-width':.8},near);
  for(let wy=G-h+8;wy<G-8;wy+=10)for(let wx=x+5;wx<x+w-5;wx+=8)if(rnd()<.22)win+=`M${wx.toFixed(1)} ${wy.toFixed(1)}h3v4h-3z`;x+=w+3}
 mk('path',{d:win,fill:'#ffd58a',opacity:.55},near);
 // ground glow + fibre route
 mk('rect',{x:0,y:G,width:W,height:H-G,fill:'#06111f'});mk('rect',{x:0,y:G,width:W,height:16,fill:'url(#tqGround)'});
 mk('path',{class:'fibre',d:`M0 ${G+6} C ${W*.25} ${G-6}, ${W*.5} ${G+14}, ${W*.75} ${G+2} S ${W} ${G+8} ${W} ${G+8}`});
 // cell masts with signal ripples
 (k==='m'?[[34,G-120],[372,G-150]]:[[40,G-150],[370,G-176],[770,G-140]]).forEach(([x,y],i)=>{const m2=mk('g',{class:'mastg'});mk('path',{class:'mast',d:`M${x} ${y} V${y+40} M${x-8} ${y+40} L${x} ${y+12} L${x+8} ${y+40}`},m2);
  [0,1,2].forEach(j=>mk('circle',{class:'ripple',cx:x,cy:y,r:10,style:`animation-delay:${(i*.7+j*1.1).toFixed(1)}s`},m2));mk('circle',{cx:x,cy:y,r:2.5,fill:'#7cdef2'},m2)});
 // landmark buildings: dealer shop and supplier HQ
 const [dx,dy]=L.dealer;const dl=mk('g',{class:'lane ln-i land'});mk('rect',{x:dx-40,y:dy-28,width:80,height:28,rx:3,fill:'#13304f',stroke:'#3d6a96'},dl);mk('path',{d:`M${dx-44} ${dy-28} h88 l-6 -10 h-76 z`,fill:'#ff858c',opacity:.85},dl);
 const dt=mk('text',{x:dx,y:dy-10,'text-anchor':'middle','font-size':10.5,'font-weight':700,fill:'#ffd2d5'},dl);dt.textContent='DEALER';
 // links layer
 const links=mk('g',{});
 const pinsG=mk('g',{}),resG=mk('g',{});
 const P=L.pins.map(p=>{const [lane,x,y,icon,kk,t,w]=p;const g=mk('g',{class:'lane ln-'+(lane==='cb'?'c':lane)},pinsG);
   mk('line',{x1:x,y1:y+19,x2:x,y2:Math.min(G-4,y+60),stroke:'#5bb6f8','stroke-width':1,opacity:.5},g);mk('circle',{cx:x,cy:Math.min(G-4,y+60),r:3,fill:'#7cdef2',filter:'url(#tqGlow)'},g);
   tag(g,lane==='i'?'app':'',x,y,w,icon,kk,t);return {lane,x,y,w}});
 const R={};L.res.forEach(([lane,x,y,icon,kk,t,w])=>{R[lane]={x,y,w};tag(mk('g',{class:'lane ln-'+lane+' res'},resG),'find',x,y,w,icon,kk,t,40)});
 const arc=(cls,x1,y1,x2,y2,bend)=>{const e=mk('path',{class:'arc '+cls,d:`M${x1} ${y1} Q ${(x1+x2)/2+(bend||0)} ${Math.min(y1,y2)-40} ${x2} ${y2}`},links);const n=e.getTotalLength();e.style.setProperty('--l',n.toFixed(0));return e};
 // customer: pins rise to ContexQ, ContexQ hands down one subscriber; business is a role link
 P.filter(p=>p.lane==='c').forEach(p=>arc('ln-c up',p.x,p.y-19,gx-gr*.8,gy+gr*.5,-30));
 const cb=P.find(p=>p.lane==='cb');arc('ln-c role',cb.x,cb.y-19,R.c.x-R.c.w/2+20,R.c.y+20,0);
 arc('ln-c out',gx-gr,gy,R.c.x+R.c.w/2,R.c.y,0);
 // investigation: applications lead to the same dealer, then up to ContexQ
 P.filter(p=>p.lane==='i').forEach(p=>{const e=mk('path',{class:'arc ln-i red',d:`M${p.x} ${p.y+19} Q ${(p.x+dx)/2} ${dy+10} ${dx} ${dy-38}`},links);e.style.setProperty('--l',e.getTotalLength().toFixed(0))});
 arc('ln-i up',dx,dy-38,gx+gr*.8,gy+gr*.5,40);arc('ln-i out',gx+gr,gy,R.i.x-R.i.w/2,R.i.y,0);
 // partners: supplier to its parent company, then up to ContexQ
 const sp=P.find(p=>p.lane==='p'),[hx,hy]=L.hq;
 const hq=mk('g',{class:'lane ln-p land'},pinsG);const hw=k==='m'?11:15;mk('rect',{x:hx-hw,y:hy-6,width:hw*2,height:G-hy+6,fill:'#14335a',stroke:'#7cdef2','stroke-width':1},hq);for(let wy=hy+4;wy<G-6;wy+=12)mk('path',{d:`M${hx-hw+5} ${wy}h${hw-6}v5h${-(hw-6)}z`,fill:'#bfefff',opacity:.7},hq);
 const ht=mk('text',{x:hx-(k==='m'?20:0),y:hy-12,'text-anchor':'middle','font-size':10,'font-weight':700,fill:'#bff1ff'},hq);ht.textContent='PARENT CO.';
 arc('ln-p',sp.x+(k==='m'?sp.w/2-10:sp.w/2-20),sp.y+19,hx,hy-4,0);arc('ln-p up',hx,hy-24,gx,gy+gr+4,0);
 // globe last, above everything but the tags
 svg.insertBefore(links,pinsG);globe(gx,gy,gr);svg.appendChild(pinsG);svg.appendChild(resG);
 render();
}
function render(){stage.dataset.step=step;cap.textContent=CAPS[step];document.querySelectorAll('.cq-step').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.stage===step)));
 pauseB.textContent=playing?'Ⅱ Pause':'▶ Play';pauseB.setAttribute('aria-pressed',String(!playing));statusEl.textContent=playing||RM.matches?'':'Paused';stage.classList.toggle('paused',!playing)}
function schedule(){clearTimeout(timer);if(playing&&inView&&!document.hidden)timer=setTimeout(()=>{step=(step+1)%4;render();schedule()},[5600,6000,5200,6400][step])}
document.querySelectorAll('.cq-step').forEach(b=>b.addEventListener('click',()=>{step=+b.dataset.stage;render();schedule()}));
pauseB.addEventListener('click',()=>{playing=!playing;render();schedule()});
document.getElementById('cq-replay').addEventListener('click',()=>{step=RM.matches?3:0;playing=!RM.matches;render();schedule()});
document.addEventListener('visibilitychange',schedule);
new IntersectionObserver(e=>{inView=e[0].isIntersecting;schedule()},{threshold:.15}).observe(stage);
new ResizeObserver(()=>build()).observe(stage);
RM.addEventListener('change',()=>{step=3;playing=false;lay='';build();schedule()});
build();schedule();
})();
      } catch (err) { console.error('[industry-telco] page script error:', err); }
      // ---- page script ----
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const uses=[
{title:'Understand customers across services',audience:'Commercial & customer teams',heading:'Know the relationship before the conversation.',body:'Bring mobile, broadband and business-account records into one view. Help teams see existing services and understand the role a customer plays in a business account.',benefit:'Support more relevant service, engagement and account planning.',tags:['Mobile subscriber','Broadband customer','Business contact'],example:'John’s home services belong to his customer relationship. His role as a business account contact remains a separate link.'},
{title:'Reconcile inconsistent subscriber records',audience:'Subscriber operations & identity reviews',heading:'Recognise a subscriber across changing details.',body:'Assess records with name variations, missing fields or updated contact information. Use the supporting evidence to examine possible duplicates and inconsistencies.',benefit:'Support subscriber reviews with less manual record reconciliation.',tags:['John Smith','J. Smith','Supporting identity evidence'],example:'Review whether records describe the same person. A shared household address alone should not merge different subscribers.'},
{title:'Investigate linked applications and dealer activity',audience:'Fraud & investigation teams',heading:'Understand the scope of a connected review.',body:'Examine available subscriber, application, device and dealer records together. Reveal the relationships that may justify reviewing several applications as a group.',benefit:'Help investigators focus the review and examine the evidence behind each link.',tags:['Subscriber applications','Dealer activity','Device relationships'],example:'A dealer may connect several applications; shared device activity may provide another clue. Examine the timing and legitimate explanations together.'},
{title:'Assess supplier and partner exposure',audience:'Procurement & enterprise risk teams',heading:'Look beyond the direct contract.',body:'Bring relevant supplier and partner records together with ownership, dependency and external information. Examine how a change beyond a direct relationship could affect your business.',benefit:'Support better-informed onboarding, sourcing and ongoing reviews.',tags:['Direct supplier','Parent organisation','Relevant risk signals'],example:'Trace a supplier to its parent organisation and review relevant external events before deciding whether further due diligence is needed.'}
];
document.getElementById('use-list').innerHTML=uses.map((u,i)=>`<details class="use-item" id="use-${i}" ${i===0?'open':''}><summary>${u.title}<span class="plus" aria-hidden="true"></span></summary><div class="use-body"><div><div class="audience">${u.audience}</div><h3>${u.heading}</h3><p>${u.body}</p><div class="benefit">${u.benefit}</div></div><div><div class="example"><div class="example-top">The decision in practice</div><div class="tags">${u.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div><div class="example-result">${u.example}</div></div><button class="next-use" data-next="${(i+1)%uses.length}">Explore next: ${uses[(i+1)%uses.length].title.toLowerCase()} <span>→</span></button></div></div></details>`).join('');
const items=[...document.querySelectorAll('.use-item')];items.forEach(d=>d.addEventListener('toggle',()=>{if(d.open)items.forEach(o=>{if(o!==d)o.open=false})}));document.querySelectorAll('[data-next]').forEach(b=>b.onclick=()=>{const d=items[+b.dataset.next];items.forEach(o=>o.open=o===d);d.querySelector('summary').focus({preventScroll:true});d.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'})});
const riskCopy=[['Begin with the application in front of you.','Each subscriber record can appear ordinary on its own. Explore the connections to see what a wider review could include.',['Original application details','Available device and activation records','Dealer and channel information']],['A wider group comes into view.','All three applications share a dealer. Two also share an observed device. These are different relationships, giving the team a defined group to examine.',['Dealer relationship across applications','Additional device link between two records','Distinct applicants retained']],['Review the evidence before deciding.','Examine the underlying records and timing together. Establish whether the connections have an ordinary explanation or need further investigation.',['Source records supporting each connection','Activation timing and available activity','Reason for review and legitimate explanations']]];
document.querySelectorAll('[data-risk]').forEach(b=>b.onclick=()=>{const n=+b.dataset.risk;document.getElementById('risk-scene').dataset.step=n;document.querySelectorAll('[data-risk]').forEach(x=>x.setAttribute('aria-pressed',x===b));document.getElementById('risk-title').textContent=riskCopy[n][0];document.getElementById('risk-description').textContent=riskCopy[n][1];document.getElementById('evidence').innerHTML=riskCopy[n][2].map(t=>`<div><span>↗</span>${t}</div>`).join('')});
      return {  };
    }
  })(cq);
}
