// Generated from public/html/contexq-ai-cleansing.html.
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
/* Hero: messy fragments flow into the ContexQ globe, a cleaning cycle runs
   (detect, standardise, repair, verify), and a clean, labelled record comes out. */
const RM=matchMedia('(prefers-reduced-motion: reduce)'),svg=document.getElementById('cxSvg'),cap=document.getElementById('cxCap'),pb=document.getElementById('cxPause'),root=document.getElementById('cx'),NS='http://www.w3.org/2000/svg';
const mk=(tag,at,p)=>{const e=document.createElementNS(NS,tag);for(const k in at)e.setAttribute(k,at[k]);(p||svg).appendChild(e);return e};
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v)),ease=x=>{x=clamp(x);return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2};
const FR=[['SMITH, JOHN','FORMAT'],['J. Smth','TYPO'],['Джон Смит','SCRIPT'],['DOB 01/08/81','DATE?'],['12 lake rd #4b','ADDRESS'],['ID S••••567A','MASKED'],['Mobile: -','MISSING'],['John Smith','DUPLICATE']];
const ROWS=[['Name','John Smith','Spellings merged','ok'],['Date of birth','1 Aug 1981','Standardised','ok'],['Address','12 Lake Road, #04-B','Standardised','ok'],['Mobile','+65 9123 4567','From bank record','src'],['ID','S••••567A','Kept masked','src'],['Income band','Middle','Estimate','est'],['Occupation','Values conflict','For review','rev']];
const STAGES=['Detect','Standardise','Repair','Verify'];
const LAY={d:{W:640,H:420,fr:[[12,36],[30,78],[8,120],[26,162],[12,204],[32,246],[10,288],[28,330]],fw:176,g:[312,196,50],ring:74,card:[436,30,192,360],rowH:43},
 m:{W:360,H:712,fr:[[10,12],[186,12],[10,50],[186,50],[10,88],[186,88],[10,126],[186,126]],fw:164,g:[180,262,44],ring:66,card:[14,372,332,326],rowH:38}};
const CAPS=[[0,'Messy data arrives from everywhere.'],[3.2,'ContexQ works out what each piece is, and what it should be.'],[6.6,'Clean, standardised information comes out.'],[9.8,'Nothing is guessed silently: estimates and doubts are labelled.']];
const CYCLE=15.4;
let lay='',L,el={},t=0,last=0,play=!RM.matches,vis=true;
function globe(p,cx,cy,r){const g=mk('g',{},p);mk('circle',{cx,cy,r:r*2.2,fill:'url(#kgHalo)'},g);mk('circle',{cx,cy,r,fill:'url(#kgCore)'},g);
 let d1='',d2='',d3='';for(let i=0;i<700;i++){const y=1-i/699*2,rr=Math.sqrt(1-y*y),a=i*2.399963,x=Math.cos(a)*rr,z=Math.sin(a)*rr,ry=y*Math.cos(.38)-z*Math.sin(.38),rz=y*Math.sin(.38)+z*Math.cos(.38);if(rz<-.1)continue;
  const px=cx+x*r,py=cy-ry*r,s=(.5+(rz+1)*.55).toFixed(2),dot=`M${(px-s).toFixed(1)} ${py.toFixed(1)}a${s} ${s} 0 1 0 ${2*s} 0a${s} ${s} 0 1 0 ${-2*s} 0`;if(rz>.55)d1+=dot;else if(rz>.15)d2+=dot;else d3+=dot}
 mk('path',{d:d3,fill:'#3f8fd8',opacity:.55},g);mk('path',{d:d2,fill:'#7cc8f5',opacity:.85},g);mk('path',{d:d1,fill:'#eefcff'},g);
 mk('circle',{cx,cy,r:r+1.4,fill:'none',stroke:'#bff1ff','stroke-width':1.5,opacity:.85,filter:'url(#kgSoft)'},g);
 const o1=`M${cx-r*1.5} ${cy} a${r*1.5} ${r*.4} 0 1 0 ${r*3} 0 a${r*1.5} ${r*.4} 0 1 0 ${-r*3} 0`;
 mk('path',{d:o1,fill:'none',stroke:'#7cdef2','stroke-width':1.1,opacity:.55,transform:`rotate(-14 ${cx} ${cy})`},g);
 const sg=mk('g',{transform:`rotate(-14 ${cx} ${cy})`},g),sat=mk('circle',{r:3,fill:'#f2fdff',filter:'url(#kgSoft)'},sg);
 if(!RM.matches)mk('animateMotion',{dur:'9s',repeatCount:'indefinite',path:o1},sat);else{sat.setAttribute('cx',cx+r*1.5);sat.setAttribute('cy',cy)}
 return g}
function build(){
 const k=matchMedia('(max-width:640px)').matches?'m':'d';if(k===lay)return;lay=k;L=LAY[k];const m=k==='m';svg.innerHTML='';el={};svg.setAttribute('viewBox',`0 0 ${L.W} ${L.H}`);
 mk('defs',{}).innerHTML=`<radialGradient id="kgHalo"><stop offset="0" stop-color="#7cdef2" stop-opacity=".35"/><stop offset=".5" stop-color="#2f86ff" stop-opacity=".1"/><stop offset="1" stop-color="#2f86ff" stop-opacity="0"/></radialGradient>
 <radialGradient id="kgCore" cx=".38" cy=".34" r=".75"><stop offset="0" stop-color="#2a7fd0" stop-opacity=".6"/><stop offset=".6" stop-color="#0d3a6e" stop-opacity=".55"/><stop offset="1" stop-color="#061a33" stop-opacity=".3"/></radialGradient>
 <radialGradient id="cxBg" cx=".5" cy=".45" r=".7"><stop offset="0" stop-color="#0f2a4f"/><stop offset="1" stop-color="#040b19"/></radialGradient>
 <filter id="kgSoft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;
 mk('rect',{width:L.W,height:L.H,fill:'url(#cxBg)'});
 const [gx,gy,gr]=L.g,R=L.ring,[cx0,cy0,cw,ch]=L.card;
 // the cleaning cycle around the globe
 mk('circle',{class:'ring',cx:gx,cy:gy,r:R});
 el.drum=mk('circle',{class:'drum',cx:gx,cy:gy,r:R,'stroke-dasharray':`${(R*1.1).toFixed(0)} ${(R*6.3).toFixed(0)}`,opacity:0});
 globe(svg,gx,gy,gr);
 const wl=mk('text',{x:gx,y:gy+gr+(m?16:18),'text-anchor':'middle','font-size':m?13:15,'font-weight':700,fill:'#f2fbff',filter:'url(#kgSoft)'});wl.innerHTML='Contex<tspan fill="#ff8a5c">Q</tspan>';
 const ang=[-150,-30,30,150];el.stages=STAGES.map((s,i)=>{const a=ang[i]*Math.PI/180,x=gx+R*Math.cos(a),y=gy+R*Math.sin(a),w=m?70:78,g=mk('g',{class:'stage-pill',opacity:0});
  mk('rect',{x:x-w/2,y:y-11,width:w,height:22,rx:11},g);const tx=mk('text',{x,y:y+4},g);tx.textContent=s;return g});
 // clean record card and the stream into it
 el.flow=mk('path',{class:'outflow',d:m?`M${gx} ${gy+gr+24} V${cy0}`:`M${gx+gr+4} ${gy} C ${gx+gr+40} ${gy}, ${cx0-30} ${cy0+70}, ${cx0} ${cy0+70}`,opacity:0});
 el.card=mk('g',{opacity:0});mk('rect',{class:'card-bg',x:cx0,y:cy0,width:cw,height:ch,rx:12},el.card);
 const ck=mk('text',{class:'card-k',x:cx0+14,y:cy0+20},el.card);ck.textContent='CLEANED RECORD';const chd=mk('text',{class:'card-h',x:cx0+14,y:cy0+38},el.card);chd.textContent='Customer · John Smith';
 const rh=L.rowH,r0=cy0+50;el.rows=ROWS.map(([lb,vl,st,cls],i)=>{const y=r0+i*rh,g=mk('g',{class:'row '+cls,opacity:0});
  mk('line',{class:'sep',x1:cx0+12,x2:cx0+cw-12,y1:y,y2:y},g);
  const a=mk('text',{class:'lb',x:cx0+14,y:y+15},g);a.textContent=lb;const b=mk('text',{class:'vl',x:cx0+14,y:y+31},g);b.textContent=vl;
  const sw=st.length*5.7+16,sg=mk('g',{class:'st'},g);mk('rect',{x:cx0+cw-12-sw,y:y+4,width:sw,height:16,rx:8},sg);const s2=mk('text',{x:cx0+cw-12-sw/2,y:y+15.5,'text-anchor':'middle'},sg);s2.textContent=st;
  return g});
 // messy fragments
 el.fr=FR.map(([v,p],i)=>{const [x,y]=L.fr[i],w=L.fw,g=mk('g',{class:'fr'}),rot=((i*37)%7-3)*.9;
  mk('rect',{x,y,width:w,height:30,rx:7},g);const pw=p.length*5.9+10;mk('rect',{class:'pr',x:x+w-pw-6,y:y+7,width:pw,height:16,rx:8},g);
  const pt=mk('text',{class:'p',x:x+w-6-pw/2,y:y+18.5,'text-anchor':'middle'},g);pt.textContent=p;
  const vt=mk('text',{class:'v',x:x+10,y:y+19.5},g);vt.textContent=v;g._o=[x+w/2,y+15];g._r=rot;g._d=1.0+i*.25;return g});
 draw();
}
function draw(){
 const [gx,gy]=L.g;
 el.fr.forEach((g,i)=>{const k=ease((t-g._d)/.9),[ox,oy]=g._o,jx=Math.sin(t*2.2+i)*1.5*(1-k),jy=Math.cos(t*1.8+i*2)*1.2*(1-k);
  const x=(gx-ox)*k+jx,y=(gy-oy)*k+jy,s=1-.8*k;g.setAttribute('transform',`translate(${(ox+x).toFixed(1)} ${(oy+y).toFixed(1)}) rotate(${(g._r*(1-k)).toFixed(2)}) scale(${s.toFixed(3)}) translate(${-ox} ${-oy})`);
  g.setAttribute('opacity',(clamp(t/.6)*(1-ease((t-g._d-.55)/.35))).toFixed(2))});
 const cyc=clamp((t-3.1)/.4)*(1-ease((t-7)/.6));el.drum.setAttribute('opacity',cyc.toFixed(2));
 el.drum.setAttribute('stroke-dashoffset',(-(t*90)%2000).toFixed(1));
 el.stages.forEach((g,i)=>{g.setAttribute('opacity',(clamp((t-3.5)/.5)).toFixed(2));g.classList.toggle('on',t>=3.9+i*.75)});
 el.flow.setAttribute('opacity',(clamp((t-6.2)/.5)).toFixed(2));el.card.setAttribute('opacity',(ease((t-6.2)/.6)).toFixed(2));
 el.rows.forEach((g,i)=>{const k=ease((t-6.7-i*.38)/.45);g.setAttribute('opacity',k.toFixed(2));g.setAttribute('transform',`translate(${(8*(1-k)).toFixed(1)} 0)`);
  if(g.classList.contains('est')||g.classList.contains('rev')){const h=ease((t-9.8)/.6);g.style.filter=h>.5?'drop-shadow(0 0 6px rgba(242,193,78,.55))':''}});
 svg.style.opacity=t>CYCLE-.9?(1-clamp((t-(CYCLE-.9))/.8)).toFixed(2):1;
 const c=CAPS.reduce((a,v)=>t>=v[0]?v[1]:a,CAPS[0][1]);if(cap.textContent!==c)cap.textContent=c;
}
function ui(){pb.textContent=play?'Pause':'Play';pb.setAttribute('aria-label',play?'Pause animation':'Play animation');root.classList.toggle('paused',!play)}
function frame(now){const dt=last?Math.min((now-last)/1000,.06):0;last=now;if(play&&vis&&!document.hidden){t+=dt;if(t>=CYCLE)t=0;draw()}requestAnimationFrame(frame)}
pb.addEventListener('click',()=>{play=!play;ui()});document.getElementById('cxReplay').addEventListener('click',()=>{t=0;play=!RM.matches||true;ui();draw()});
new IntersectionObserver(e=>{vis=e[0].isIntersecting},{threshold:.15}).observe(root);
new ResizeObserver(()=>build()).observe(root);
RM.addEventListener('change',()=>{if(RM.matches){play=false;t=12}ui();draw()});
build();if(RM.matches){t=12;play=false}ui();draw();requestAnimationFrame(frame);

/* scroll reveals: before/after pairs and clue cards light in sequence (no clicks needed) */
const mess=document.getElementById('messGrid');
if(RM.matches)mess.classList.add('in');else new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){mess.classList.add('in');o.disconnect()}},{threshold:.25}).observe(mess);
const clues=[...document.querySelectorAll('#clueGrid article')];let ci=0,ct=null,cvis=false;
function lit(){clues.forEach((c,i)=>c.classList.toggle('lit',i===ci));}
function cloop(){clearTimeout(ct);if(!cvis||RM.matches||document.hidden)return;ct=setTimeout(()=>{ci=(ci+1)%clues.length;lit();cloop()},3200)}
new IntersectionObserver(e=>{cvis=e[0].isIntersecting;if(cvis){lit()}cloop()},{threshold:.3}).observe(document.getElementById('clueGrid'));
document.addEventListener('visibilitychange',cloop);
})();
      } catch (err) { console.error('[platform-analytics] page script error:', err); }
      return {  };
    }
  })(cq);
}
