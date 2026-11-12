// Generated from public/html/contexq-public-sector-v3.html.
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
const data={spending:{label:'Public procurement',title:'Understand who you are doing business with.',copy:'Bring supplier records, corporate ownership and contract history together to help teams examine potential conflicts and relationships between bidders.',heading:'A procurement review, in context',rows:[['Submissions','Two companies bidding for the same contract'],['Ownership','A parent company shared by both bidders'],['Review','Was the relationship disclosed?']],note:'Compare ownership records with supplier declarations and the tender requirements.',result:'A more informed basis for supplier due diligence.'},revenue:{label:'Tax & customs',title:'Look beyond the individual declaration.',copy:'Connect business identities, ownership and relevant trade information to help analysts examine inconsistencies and relationships across records.',heading:'A business review, in context',rows:[['Declaration','A business named in a customs record'],['Company record','Its registered identity and related organisations'],['Review','Do the records describe a consistent business activity?']],note:'Examine discrepancies alongside the underlying records and business context.',result:'A clearer starting point for risk assessment and further enquiries.'},programmes:{label:'Grants & payments',title:'See the connections across applications.',copy:'Bring recipient, organisation and payment records together to help programme teams examine possible duplicate applications and connected recipients.',heading:'A programme review, in context',rows:[['Applications','Similar organisation names in separate submissions'],['Identity','Records linked to the same registered entity'],['Review','Are these distinct entitlements or a possible duplicate?']],note:'Check programme eligibility and entitlement before deciding whether a submission is a duplicate.',result:'More focused checks on the allocation of public funds.'},investigations:{label:'Investigations',title:'Follow the relationships that matter.',copy:'Connect people, organisations and relevant records so investigators can explore a case in context and identify the questions that need further evidence.',heading:'An investigation, in context',rows:[['Starting point','An organisation under review'],['Relationship','A director connected to other businesses'],['Next enquiry','Which connections are relevant to this case?']],note:'Follow relevant connections and gather the evidence needed to assess each enquiry.',result:'Less fragmented case preparation and a more informed direction for investigation.'}};
const prompts={spending:['Was the relationship between bidders disclosed?','Compare directorship and ownership records with supplier declarations and tender requirements.'],revenue:['Do these records describe consistent business activity?','Examine a declaration alongside the business identity, related organisations and relevant trade records.'],programmes:['Are these separate entitlements or a possible duplicate?','Link applications to the relevant recipient, then examine the programme rules and payment history.'],investigations:['Which relationship deserves the next enquiry?','Explore the people and businesses around a case and identify where supporting evidence is needed.']};
const keys=Object.keys(data);document.getElementById('public-accordion').innerHTML=keys.map((key,i)=>{const d=data[key],next=keys[(i+1)%keys.length],q=prompts[key];return `<details class="public-case" id="case-${key}" ${i===0?'open':''}><summary><span>${d.label}</span><span class="expand-sign" aria-hidden="true"></span></summary><div class="case-body"><div><h3>${d.title}</h3><p>${d.copy}</p><div class="case-purpose">${d.result}</div></div><div><div class="case-question"><h4>${q[0]}</h4><p>${q[1]}</p></div><button class="next-case" data-next="${next}"><span>Explore next: ${data[next].label}</span><b aria-hidden="true">→</b></button></div></div></details>`}).join('');
const cases=[...document.querySelectorAll('.public-case')];cases.forEach(item=>item.addEventListener('toggle',()=>{if(item.open)cases.forEach(other=>{if(other!==item)other.open=false})}));
const reduced=matchMedia('(prefers-reduced-motion: reduce)');document.querySelectorAll('[data-next]').forEach(button=>button.addEventListener('click',()=>{const target=document.getElementById('case-'+button.dataset.next);cases.forEach(item=>item.open=item===target);target.querySelector('summary').focus({preventScroll:true});target.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'})}));
/* Hero: agencies each hold a piece; ContexQ connects them and reveals shared ownership.
   All motion is CSS transitions on a step attribute; the script only changes steps. */
const art=document.getElementById('review-animation'),svg=document.getElementById('govSvg'),pause=document.getElementById('review-pause'),status=document.getElementById('animation-status'),NS='http://www.w3.org/2000/svg';
let step=reduced.matches?3:0,playing=!reduced.matches,visible=true,timer=null,layout='';
const copy=[['Each agency holds a piece.','Procurement, tax and customs, grants and investigations each record the same organisation differently.'],
 ['ContexQ connects the records.','Different names resolve to one organisation, with each source kept in view.'],
 ['Ownership comes into view.','Supplier A’s holding company is controlled by a person who also owns Supplier B, a rival bidder.'],
 ['Every agency sees the same picture.','The procurement team can ask whether the shared ownership was disclosed. Decisions remain with each agency.']];
const AG=[['Procurement','Tender bid','Supplier A Pte Ltd'],['Tax & customs','Declaration','SUPPLIER A'],['Grants','Application','Supplier-A Holdings'],['Investigations','Case file','Director: A. Tan']];
const L={d:{W:640,H:420,ag:[[86,46],[240,46],[400,46],[554,46]],rc:[[86,124],[240,124],[400,124],[554,124]],cw:140,core:[320,212],A:[214,292],HC:[426,292],O:[426,370],B:[214,370],ew:150,rev:[320,404]},
 m:{W:360,H:500,ag:[[50,40],[136,40],[224,40],[310,40]],rc:[[92,118],[268,118],[92,162],[268,162]],cw:164,core:[180,240],A:[100,318],HC:[262,318],O:[262,402],B:[100,402],ew:146,rev:[180,470]}};
const mk=(tag,at,p)=>{const e=document.createElementNS(NS,tag);for(const k in at)e.setAttribute(k,at[k]);(p||svg).appendChild(e);return e};
const draw=(p)=>{const L=p.getTotalLength();p.style.transition='none';p.style.strokeDasharray=L;p.style.strokeDashoffset=L;p.dataset.len=L;p.getBoundingClientRect();requestAnimationFrame(()=>{p.style.transition=''});return p};
function build(){
 const k=matchMedia('(max-width:640px)').matches?'m':'d';if(k===layout)return;layout=k;const c=L[k],m=k==='m';svg.innerHTML='';svg.setAttribute('viewBox',`0 0 ${c.W} ${c.H}`);
 mk('defs',{}).innerHTML='<radialGradient id="coreGlow"><stop offset="0" stop-color="#4aa3ff" stop-opacity=".55"/><stop offset="1" stop-color="#4aa3ff" stop-opacity="0"/></radialGradient><pattern id="gdots" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".9" fill="#1f3c5c"/></pattern>';
 mk('rect',{width:c.W,height:c.H,fill:'url(#gdots)',opacity:.6});
 const lines=mk('g',{}),[cx,cy]=c.core;
 // records flow into ContexQ
 c.rc.forEach(([x,y])=>{const p=mk('path',{class:'ln in',d:`M${x} ${y+17} C ${x} ${(y+cy)/2+10}, ${cx} ${cy-50}, ${cx} ${cy-28}`},lines);draw(p)});
 // ContexQ shares the connected view back with every agency
 c.ag.forEach(([x,y])=>mk('path',{class:'ln back',d:`M${cx} ${cy-28} C ${cx} ${cy-80}, ${x} ${y+60}, ${x} ${y+24}`},lines));
 // ownership chain
 const [ax,ay]=c.A,[hx,hy]=c.HC,[ox,oy]=c.O,[bx,by]=c.B,ew=c.ew,eh=34;
 draw(mk('path',{class:'ln in ent',d:`M${cx} ${cy+28} C ${cx} ${ay-30}, ${ax} ${ay-40}, ${ax} ${ay-eh/2}`},lines));
 draw(mk('path',{class:'ln own o1',d:`M${ax+ew/2} ${ay} L${hx-ew/2} ${hy}`},lines));
 draw(mk('path',{class:'ln own o2',d:`M${hx} ${hy+eh/2} L${ox} ${oy-eh/2}`},lines));
 draw(mk('path',{class:'ln own o3',d:`M${ox-ew/2} ${oy} L${bx+ew/2} ${by}`},lines));
 const el=(x,y,t,cls)=>{const e=mk('text',{x,y,class:'el '+cls});e.textContent=t};
 if(!m)el((ax+hx)/2,ay-8,'Owned by','d1');el(hx+(m?-52:46),(hy+oy)/2+4,'Controlled by','d2');if(!m)el((ox+bx)/2,oy-8,'Also owns','d3');
 // agencies (civic buildings)
 const ag=mk('g',{});c.ag.forEach(([x,y],i)=>{const g=mk('g',{class:'ag',transform:`translate(${x} ${y})`},ag),s=m?.82:1;
  mk('rect',{class:'tile',x:-26*s,y:-22*s,width:52*s,height:44*s,rx:9},g);
  mk('path',{class:'bld',d:`M${-14*s} ${-4*s} L0 ${-13*s} L${14*s} ${-4*s} Z M${-11*s} ${-2*s} V${8*s} M${-4*s} ${-2*s} V${8*s} M${4*s} ${-2*s} V${8*s} M${11*s} ${-2*s} V${8*s} M${-15*s} ${11*s} H${15*s}`},g);
  const t=mk('text',{x:0,y:(m?36:38),'font-size':m?10:11.5},g);t.textContent=m?['Procurement','Tax','Grants','Cases'][i]:AG[i][0];
  const sv=mk('text',{class:'seen',x:0,y:-28*s,'font-size':10,fill:'#f2c98c'},g);sv.textContent='Shared view';sv.style.fill='#f2c98c'});
 // record chips
 c.rc.forEach(([x,y],i)=>{const g=mk('g',{class:'rc'});const w=c.cw;mk('rect',{x:x-w/2,y:y-17,width:w,height:34,rx:8},g);
  const a=mk('text',{class:'k',x:x-w/2+10,y:y-3},g);a.textContent=AG[i][1].toUpperCase();const b=mk('text',{class:'n',x:x-w/2+10,y:y+11},g);b.textContent=AG[i][2]});
 // ContexQ core
 const core=mk('g',{class:'core'});mk('circle',{class:'halo',cx,cy,r:60},core);mk('circle',{class:'c1',cx,cy,r:26},core);
 const q=mk('text',{x:cx,y:cy+6,'font-size':17},core);q.innerHTML='C<tspan fill="#ff8a5c">Q</tspan>';
 const ql=mk('text',{class:'lbl',x:cx+(m?0:40),y:cy+(m?44:4),'text-anchor':m?'middle':'start'},core);ql.textContent='ContexQ';
 // entities
 const ent=(x,y,t,s,cls,icon)=>{const g=mk('g',{class:'en '+cls});mk('rect',{x:x-ew/2,y:y-eh/2,width:ew,height:eh,rx:8},g);
  mk('path',{d:icon==='p'?`M${x-ew/2+18} ${y-4} m-4 0 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M${x-ew/2+10} ${y+11} q8 -10 16 0`:`M${x-ew/2+10} ${y+9} V${y-3} l8 -6 l8 6 V${y+9} Z`,fill:'none',stroke:cls.includes('ow')?'#f2c98c':'#9fc4ec','stroke-width':1.3},g);
  const a=mk('text',{class:'t',x:x-ew/2+34,y:y-1},g);a.textContent=t;const b=mk('text',{class:'s',x:x-ew/2+34,y:y+12},g);b.textContent=s};
 ent(ax,ay,'Supplier A','Records connected','a','b');ent(hx,hy,'Holding company','Owns Supplier A','b d1','b');ent(ox,oy,'Owner','Controls the holding','b ow d2','p');ent(bx,by,'Supplier B','Rival bidder','b rv d3','b');
 const rv=mk('g',{class:'rev'}),[rx,ry]=c.rev,rw=m?300:330;mk('rect',{x:rx-rw/2,y:ry-13,width:rw,height:26,rx:13},rv);const rt=mk('text',{x:rx,y:ry+4},rv);rt.textContent='Review: was the shared ownership disclosed?';
 apply();
}
function apply(){
 svg.querySelectorAll('.ln:not(.back)').forEach(p=>{const L=+p.dataset.len,on=(p.classList.contains('in')&&!p.classList.contains('ent')&&step>=1)||(p.classList.contains('ent')&&step>=1)||(p.classList.contains('own')&&step>=2);
  const d=p.classList.contains('o2')?.7:p.classList.contains('o3')?1.4:0;p.style.transitionDelay=on?d+'s':'0s';p.style.strokeDashoffset=on?0:L});
}
function render(){art.dataset.step=step;document.querySelectorAll('[data-step-label]').forEach((el,i)=>{el.classList.toggle('active',i===step);el.classList.toggle('complete',i<step)});document.getElementById('finding-title').textContent=copy[step][0];document.getElementById('finding-copy').textContent=copy[step][1];pause.textContent=playing?'Pause':'Play';pause.setAttribute('aria-pressed',!playing);status.textContent=reduced.matches?'Connected view shown':playing?'Playing automatically':'Paused';art.classList.toggle('is-paused',!playing);apply()}
function schedule(){clearTimeout(timer);if(playing&&visible&&!document.hidden)timer=setTimeout(()=>{step=(step+1)%4;render();schedule()},[1500,3600,4600,6400][step])}
pause.addEventListener('click',()=>{playing=!playing;render();schedule()});document.getElementById('review-replay').addEventListener('click',()=>{step=reduced.matches?3:0;playing=!reduced.matches;render();schedule()});document.getElementById('review-next').addEventListener('click',()=>{step=(step+1)%4;render();schedule()});document.addEventListener('visibilitychange',schedule);reduced.addEventListener('change',()=>{step=3;playing=false;render();schedule()});new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule()},{threshold:.2}).observe(art);
new ResizeObserver(()=>{const before=layout;build();if(before!==layout)render()}).observe(art);
build();render();schedule();

})();
      } catch (err) { console.error('[industry-public-sector] page script error:', err); }
      return {  };
    }
  })(cq);
}
