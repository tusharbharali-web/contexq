// Generated from public/html/contexq-insurance-v6.html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      // ---- page script ----
      try {
    (() => {
      const connectButton = document.getElementById('connect-claims');
      const result = document.getElementById('connection-result');
      if (connectButton && result) {
        connectButton.addEventListener('click', () => {
          const isVisible = result.classList.toggle('is-visible');
          connectButton.setAttribute('aria-expanded', String(isVisible));
          connectButton.textContent = isVisible ? 'Hide possible connections' : 'Show possible connections';
        });
      }
    })();
      } catch (err) { console.error('[industry-insurance] page script error:', err); }
      // ---- page script ----
      try {
    (() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      /* Six moments policy journey */
      const journey = document.getElementById('journey');
      const track = document.getElementById('policy-track');
      if (journey && track) {
        const stages = [
          { name:'Getting a quote', wrong:'A loyal customer or their family asks for a quote and looks like a stranger, so they get a generic price and no recognition.', connects:'Their existing policies, their household, and their past claims, even when the details are spelled differently.', change:'You recognise families and long-standing customers from the first click.' },
          { name:'Checking the risk', wrong:'A business hides who really owns it, or a car is kept at a different address from the one on the form.', connects:'Company records, property and weather-risk data, and vehicle records.', change:'You price the real risk, not just the one written on the form.' },
          { name:'Starting the policy', wrong:'Cover is issued to someone on a sanctions list, or a life policy is used to move dirty money.', connects:'Sanctions lists, records of people in public office, and news coverage.', change:'Every new policyholder is checked before cover begins.' },
          { name:'Making a claim', wrong:'Honest claims wait in the same queue as suspicious ones, and repeat claimants slip through under slightly different names.', connects:'Past claims, name variations, and the people and places that keep showing up together.', change:'Genuine claims are paid quickly, and only the suspicious ones go for a closer look.' },
          { name:'Paying out', wrong:'The same repair garage, clinic, or law firm appears claim after claim, quietly pushing up costs.', connects:'Every repairer, clinic, and lawyer across all of your claims and lines of cover.', change:'You spot providers who appear too often, and pay fair costs.' },
          { name:'Recovering costs', wrong:'Another party was at fault, but nobody connected the dots in time to recover the money.', connects:'Vehicles, companies, and other insurers’ policyholders involved in the same event.', change:'You find who else should pay, with the evidence to back it up.' }
        ];
        const roleStages = { all:[0,1,2,3,4,5], claims:[3,4,5], uw:[1,2], comp:[2,3], cust:[0,3], risk:[1,4,5] };
        const done = document.getElementById('policy-done');
        const marker = document.getElementById('policy-marker');
        const dotsRoot = document.getElementById('policy-dots');
        const stopsRoot = document.getElementById('policy-stops');
        const panelTitle = document.getElementById('policy-panel-title');
        const wrong = document.getElementById('policy-wrong');
        const connects = document.getElementById('policy-connects');
        const change = document.getElementById('policy-change');
        if (done && marker && dotsRoot && stopsRoot && panelTitle && wrong && connects && change) {
          const length = track.getTotalLength();
          done.style.strokeDasharray = String(length);
          done.style.strokeDashoffset = String(length);
          const samples = [];
          for (let i=0;i<=600;i++) {
            const point = track.getPointAtLength(length*i/600);
            samples.push({ length:length*i/600, x:point.x, y:point.y });
          }
          const nearestPoint = x => samples.reduce((best,p) => Math.abs(p.x-x)<Math.abs(best.x-x)?p:best);
          const stopPoints = stages.map((_,i) => nearestPoint(1000*(i+.5)/6));
          dotsRoot.innerHTML = stopPoints.map((p,i) => `<g class="policy-dot" data-index="${i}" transform="translate(${p.x} ${p.y})"><circle r="15"/><text>${i+1}</text></g>`).join('');
          stopsRoot.innerHTML = stages.map((stage,i) => `<button class="policy-stop" type="button" data-index="${i}" aria-pressed="false"><small>${i+1}</small>${stage.name}</button>`).join('');
          const dots = [...dotsRoot.querySelectorAll('.policy-dot')];
          const stops = [...stopsRoot.querySelectorAll('.policy-stop')];
          let currentLength = 0;
          let selected = 3;
          let animationFrame = 0;
          const place = value => {
            const point = track.getPointAtLength(value);
            marker.setAttribute('transform',`translate(${point.x} ${point.y})`);
            done.style.strokeDashoffset = String(length-value);
            dots.forEach((dot,i) => dot.classList.toggle('is-lit',stopPoints[i].length<=value+1));
            currentLength = value;
          };
          const travel = (target,duration,callback) => {
            cancelAnimationFrame(animationFrame);
            if (reduceMotion) { place(target); if (callback) callback(); return; }
            const from = currentLength;
            const started = performance.now();
            const frame = now => {
              const progress = Math.min(1,(now-started)/duration);
              const eased = 1-Math.pow(1-progress,3);
              place(from+(target-from)*eased);
              if (progress<1) animationFrame=requestAnimationFrame(frame);
              else if (callback) callback();
            };
            animationFrame=requestAnimationFrame(frame);
          };
          const showStage = (index,move=true) => {
            selected = index;
            const stage = stages[index];
            panelTitle.textContent = stage.name;
            wrong.textContent = stage.wrong;
            connects.textContent = stage.connects;
            change.textContent = stage.change;
            stops.forEach((button,i) => button.setAttribute('aria-pressed',String(i===index)));
            dots.forEach((dot,i) => dot.classList.toggle('is-selected',i===index));
            if (move && window.matchMedia('(min-width: 761px)').matches) travel(stopPoints[index].length,650);
          };
          stops.forEach(button => button.addEventListener('click',() => showStage(Number(button.dataset.index))));
          document.querySelectorAll('.policy-role').forEach(button => button.addEventListener('click',() => {
            document.querySelectorAll('.policy-role').forEach(item => item.setAttribute('aria-pressed',String(item===button)));
            const relevant = roleStages[button.dataset.role] || roleStages.all;
            stops.forEach((item,i) => item.classList.toggle('is-dim',!relevant.includes(i)));
            dots.forEach((item,i) => item.classList.toggle('is-dim',!relevant.includes(i)));
            if (!relevant.includes(selected)) showStage(relevant[0]);
          }));
          place(0);
          showStage(3,false);
          if ('IntersectionObserver' in window && window.matchMedia('(min-width: 761px)').matches) {
            const observer = new IntersectionObserver(entries => {
              if (entries.some(entry => entry.isIntersecting)) {
                observer.disconnect();
                travel(length,2600,() => travel(stopPoints[selected].length,700));
              }
            },{threshold:.4});
            observer.observe(document.getElementById('policy-road'));
          }
        }
      }

      /* Four claim folders: align the names, then draw the dashed SVG links after the click. */
      const story = document.getElementById('claim-story');
      const files = document.getElementById('claim-files');
      const button = document.getElementById('claim-link-button');
      const tiePath = document.getElementById('claim-tie-path');
      let drawTimer = 0;
      let resizeTimer = 0;
      const clearAlignment = names => names.forEach(name => name.style.removeProperty('--link-shift'));
      const alignAndDraw = () => {
        if (!story || !files || !tiePath || !files.classList.contains('is-linked')) return;
        const names = [...files.querySelectorAll('.claim-name')];
        if (names.length < 2) return;
        clearAlignment(names);
        requestAnimationFrame(() => {
          const folders = [...files.querySelectorAll('.claim-folder')];
          const folderTops = folders.map(folder => folder.getBoundingClientRect().top);
          const oneRow = folderTops.length && Math.max(...folderTops)-Math.min(...folderTops) < 24;
          if (oneRow) {
            const centers = names.map(name => {
              const rect = name.getBoundingClientRect();
              return rect.top + rect.height/2;
            });
            const targetY = centers.reduce((sum,value)=>sum+value,0)/centers.length;
            names.forEach((name,index) => name.style.setProperty('--link-shift',`${targetY-centers[index]}px`));
          }
          window.clearTimeout(drawTimer);
          drawTimer = window.setTimeout(() => {
            const box = files.getBoundingClientRect();
            const rects = names.map(name => name.getBoundingClientRect());
            let path = '';
            for (let i=0;i<rects.length-1;i++) {
              const a=rects[i], b=rects[i+1];
              const sameRow = Math.abs(folders[i].getBoundingClientRect().top-folders[i+1].getBoundingClientRect().top) < 24;
              if (!sameRow) continue;
              const x1=a.right-box.left+5, y1=a.top+a.height/2-box.top;
              const x2=b.left-box.left-5, y2=b.top+b.height/2-box.top;
              if (x2 > x1) path += `M${x1} ${y1}L${x2} ${y2}`;
            }
            tiePath.setAttribute('d',path);
            const total = tiePath.getTotalLength ? tiePath.getTotalLength() : 0;
            tiePath.style.strokeDasharray = '6 6';
            tiePath.style.strokeDashoffset = total ? String(total) : '0';
            requestAnimationFrame(() => { tiePath.style.strokeDashoffset = '0'; });
          },reduceMotion?0:760);
        });
      };
      if (story && files && button) {
        const setLinked = linked => {
          story.classList.toggle('is-linked',linked);
          files.classList.toggle('is-linked',linked);
          button.setAttribute('aria-pressed',String(linked));
          button.textContent = linked ? 'Show them apart' : 'Connect the claims';
          button.classList.toggle('btn--blue',!linked);
          button.classList.toggle('btn--outline-light',linked);
          if (linked) alignAndDraw();
          else {
            window.clearTimeout(drawTimer);
            tiePath.setAttribute('d','');
          }
        };
        let userTouched = false;
        button.addEventListener('click',() => {
          userTouched = true;
          setLinked(!story.classList.contains('is-linked'));
        });
        /* Play the connection automatically the first time the folders scroll into view. */
        if ('IntersectionObserver' in window) {
          const io = new IntersectionObserver(entries => {
            if (!entries.some(e => e.isIntersecting)) return;
            io.disconnect();
            window.setTimeout(() => { if (!userTouched) setLinked(true); }, reduceMotion ? 0 : 900);
          },{threshold:0.55});
          io.observe(files);
        } else {
          setLinked(true);
        }
        window.addEventListener('resize',() => {
          if (!files.classList.contains('is-linked')) return;
          window.clearTimeout(resizeTimer);
          resizeTimer = window.setTimeout(alignAndDraw,120);
        },{passive:true});
      }
    })();
      } catch (err) { console.error('[industry-insurance] page script error:', err); }
      // ---- page script ----
      try {
    /* Hero animation: insurance data connected around each customer and shared with every team.
       All motion is CSS transitions on a step attribute; the script only changes steps. */
    (() => {
      const root=document.getElementById('insAnim'),svg=document.getElementById('hero-graph');if(!root||!svg)return;
      const NS='http://www.w3.org/2000/svg',RM=matchMedia('(prefers-reduced-motion: reduce)');
      const COPY=[['Insurance information sits apart.','Policies, claims, customer records and external data each hold part of the picture.'],
        ['ContexQ connects it around each customer.','People, households, policies, claims, providers and companies, linked with the source behind every connection.'],
        ['Every team works from the same context.','Underwriting, compliance, claims and recovery each see what matters to their decision.'],
        ['Decisions stay with your teams.','ContexQ informs pricing, screening, claims and recovery. It does not decide for them.']];
      const SRC=[['shield','POLICY SYSTEM','Policies & cover'],['doc','CLAIMS SYSTEM','Claims history'],['person','CUSTOMER RECORDS','People & households'],['globe','EXTERNAL DATA','Registries & lists']];
      const OUT=[['scale','UNDERWRITING','Price the real risk'],['check','COMPLIANCE','Screen before cover'],['doc','CLAIMS','Fast-track or review'],['coin','RECOVERY','Find who should pay']];
      const SAT=[['house','Household'],['shield','Policies'],['doc','Claims'],['wrench','Providers'],['building','Company']];
      const L={d:{W:620,H:420,src:[[12,40],[12,128],[12,216],[12,304]],sw:150,sh:56,core:[202,212],hub:[312,212],sat:[[312,124],[372,160],[372,264],[312,300],[252,276]],out:[[440,40],[440,128],[440,216],[440,304]],ow:170,oh:56},
               m:{W:360,H:520,src:[[10,12],[184,12],[10,70],[184,70]],sw:166,sh:48,core:[180,150],hub:[180,262],sat:[[110,232],[250,232],[262,300],[180,326],[98,300]],out:[[10,372],[184,372],[10,430],[184,430]],ow:166,oh:48}};
      let step=RM.matches?3:0,playing=!RM.matches,inView=true,timer=null,lay='';
      const mk=(tag,at,p)=>{const e=document.createElementNS(NS,tag);for(const k in at)e.setAttribute(k,at[k]);(p||svg).appendChild(e);return e};
      const prep=p=>{const n=p.getTotalLength();p.style.strokeDasharray=n;p.dataset.len=n;p.style.strokeDashoffset=n;return p};
      const ICON={shield:'M0 -7 L6 -4 V1 Q6 6 0 8 Q-6 6 -6 1 V-4 Z',doc:'M-5 -7 H3 L6 -4 V7 H-5 Z M-2 -1 H3 M-2 2 H3',person:'M0 -4 m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M-6 7 Q0 0 6 7',
        globe:'M0 -7 a7 7 0 1 0 0.01 0 M-7 0 H7 M0 -7 Q4 0 0 7 M0 -7 Q-4 0 0 7',scale:'M0 -7 V7 M-6 7 H6 M-7 -4 H7 M-7 -4 l-2 5 h4 z M7 -4 l-2 5 h4 z',check:'M0 -7 L6 -4 V1 Q6 6 0 8 Q-6 6 -6 1 V-4 Z M-3 0 l2 2 l4 -4',
        coin:'M0 -6 a6 6 0 1 0 0.01 0 M-2 -2 h3 a1.5 1.5 0 0 1 0 3 h-2 a1.5 1.5 0 0 0 0 3 h3',house:'M-6 0 L0 -6 L6 0 M-4 -1 V6 H4 V-1',wrench:'M-6 6 L2 -2 M2 -2 a4 4 0 1 0 4 -4 l-2 2 l-2 -2 l2 -2 a4 4 0 0 0 -2 6',building:'M-5 7 V-6 H5 V7 M-2 -3 h1 M1 -3 h1 M-2 0 h1 M1 0 h1 M-2 3 h1 M1 3 h1'};
      function card(cls,x,y,w,h,icon,k,t,col){const g=mk('g',{class:'cardg '+cls});mk('rect',{class:'bg',x,y,width:w,height:h,rx:8},g);
        mk('path',{class:'ic',d:ICON[icon],transform:`translate(${x+17} ${y+h/2})`,stroke:col||'#9fc4ec'},g);
        const a=mk('text',{class:'k',x:x+34,y:y+h/2-4},g);a.textContent=k;const b=mk('text',{class:'t',x:x+34,y:y+h/2+12},g);b.textContent=t;return g}
      function build(){
        const k=matchMedia('(max-width:640px)').matches?'m':'d';if(k===lay)return;lay=k;const c=L[k],m=k==='m';svg.innerHTML='';svg.setAttribute('viewBox',`0 0 ${c.W} ${c.H}`);
        mk('defs',{}).innerHTML='<radialGradient id="insGlow"><stop offset="0" stop-color="#4aa3ff" stop-opacity=".55"/><stop offset="1" stop-color="#4aa3ff" stop-opacity="0"/></radialGradient><pattern id="insDots" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".9" fill="#1f3c5c"/></pattern>';
        mk('rect',{width:c.W,height:c.H,fill:'url(#insDots)',opacity:.6});
        const [cx,cy]=c.core,[hx,hy]=c.hub,lines=mk('g',{});
        // sources into ContexQ
        c.src.forEach(([x,y])=>prep(mk('path',{class:'ln b s1',d:m?`M${x+c.sw/2} ${y+c.sh} C ${x+c.sw/2} ${y+c.sh+24}, ${cx} ${cy-46}, ${cx} ${cy-22}`:`M${x+c.sw} ${y+c.sh/2} C ${x+c.sw+30} ${y+c.sh/2}, ${cx-46} ${cy}, ${cx-22} ${cy}`},lines)));
        // ContexQ into the customer view, then its relationships
        prep(mk('path',{class:'ln b s1 out',d:m?`M${cx} ${cy+22} L${hx} ${hy-17}`:`M${cx+22} ${cy} L${hx-17} ${hy}`},lines));
        c.sat.forEach(([x,y],i)=>{const p=prep(mk('path',{class:'ln b s1 sat',d:`M${hx} ${hy} L${x} ${y}`},lines));p.dataset.d=(.9+i*.12).toFixed(2)});
        // shared context out to every team
        c.out.forEach(([x,y],i)=>{const p=prep(mk('path',{class:'ln a s2 o',d:m?`M${hx} ${hy+18} C ${hx} ${hy+40}, ${x+c.ow/2} ${y-26}, ${x+c.ow/2} ${y}`:`M${hx+96} ${hy} C ${hx+100} ${hy}, ${x-30} ${y+c.oh/2}, ${x} ${y+c.oh/2}`},lines));p.dataset.d=(i*.18).toFixed(2)});
        // sources
        c.src.forEach(([x,y],i)=>card('v',x,y,c.sw,c.sh,SRC[i][0],SRC[i][1],SRC[i][2]));
        // ContexQ core
        const core=mk('g',{class:'core'});mk('circle',{class:'h',cx,cy,r:50},core);mk('circle',{class:'c',cx,cy,r:22},core);const q=mk('text',{x:cx,y:cy+5,'font-size':15},core);q.innerHTML='C<tspan fill="#ff8a5c">Q</tspan>';
        // connected customer view
        const view=mk('g',{class:'fade s1'});
        if(!m)mk('circle',{cx:hx,cy:hy,r:96,fill:'none',stroke:'#4aa3ff','stroke-opacity':.25,'stroke-dasharray':'3 6'},view);
        mk('circle',{cx:hx,cy:hy,r:18,fill:'#12345c',stroke:'#8cc2ff','stroke-width':1.8},view);
        mk('path',{class:'ic',d:ICON.person,transform:`translate(${hx} ${hy})`,stroke:'#fff'},view);
        const cl=mk('text',{x:hx,y:hy+(m?-26:34),'text-anchor':'middle','font-size':12,'font-weight':600,fill:'#fff'},view);cl.textContent='Customer';
        c.sat.forEach(([x,y],i)=>{const g=mk('g',{},view);mk('circle',{cx:x,cy:y,r:13,fill:'#0d2440',stroke:'#62a8f0','stroke-width':1.3},g);mk('path',{class:'ic',d:ICON[SAT[i][0]],transform:`translate(${x} ${y}) scale(.85)`,stroke:'#9fc4ec'},g);
          const lb=m?{x:x,y:y+(y<hy?-18:26),a:'middle'}:{x:x+(x>hx?18:x<hx?-18:0),y:y+(x===hx?(y<hy?-18:28):4),a:x>hx?'start':x<hx?'end':'middle'};
          const t=mk('text',{x:lb.x,y:lb.y,'text-anchor':lb.a,'font-size':11,fill:'#b9cde2','font-weight':600},g);t.textContent=SAT[i][1]});
        if(!m){const vt=mk('text',{x:hx,y:hy-128,'text-anchor':'middle','font-size':10.5,'letter-spacing':'.08em',fill:'#8cc2ff','font-weight':600},view);vt.textContent='ONE CONNECTED VIEW'}
        // team outputs
        c.out.forEach(([x,y],i)=>card('team fade s2 d'+i,x,y,c.ow,c.oh,OUT[i][0],OUT[i][1],OUT[i][2],'#f2c98c'));
        apply();
      }
      function apply(){svg.querySelectorAll('.ln').forEach(p=>{const n=+p.dataset.len,on=(p.classList.contains('s1')&&step>=1)||(p.classList.contains('s2')&&step>=2);
        const d=p.classList.contains('out')?.55:p.dataset.d?+p.dataset.d:0;p.style.transitionDelay=on?d+'s':'0s';p.style.strokeDashoffset=on?0:n})}
      function render(){root.dataset.step=step;document.getElementById('insT').textContent=COPY[step][0];document.getElementById('insC').textContent=COPY[step][1];
        root.querySelectorAll('.ins-steps button').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.s===step)));
        document.getElementById('insPause').textContent=playing?'Pause':'Play';document.getElementById('insS').textContent=RM.matches?'Shared context shown':playing?'Playing automatically':'Paused';apply()}
      function schedule(){clearTimeout(timer);if(playing&&inView&&!document.hidden)timer=setTimeout(()=>{step=(step+1)%4;render();schedule()},[3200,4200,4600,5600][step])}
      root.querySelectorAll('.ins-steps button').forEach(b=>b.addEventListener('click',()=>{step=+b.dataset.s;render();schedule()}));
      document.getElementById('insPause').addEventListener('click',()=>{playing=!playing;render();schedule()});
      document.getElementById('insReplay').addEventListener('click',()=>{step=RM.matches?3:0;playing=!RM.matches;render();schedule()});
      document.addEventListener('visibilitychange',schedule);
      new IntersectionObserver(e=>{inView=e[0].isIntersecting;schedule()},{threshold:.2}).observe(root);
      new ResizeObserver(()=>{const b=lay;build();if(b!==lay)render()}).observe(root);
      RM.addEventListener('change',()=>{step=3;playing=false;render();schedule()});
      build();render();schedule();
    })();
      } catch (err) { console.error('[industry-insurance] page script error:', err); }
      return {  };
    }
  })(cq);
}
