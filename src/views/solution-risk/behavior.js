// Generated from public/html/contexq-risk (1).html.
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
    const $ = (s, r = document) => r.querySelector(s);
    const $$ = (s, r = document) => [...r.querySelectorAll(s)];

    // Mobile Menu Toggle
    const nav = $('#navLinks');
    const toggle = $('#menuToggle');
    const closeMenu = () => {
      if (!nav || !toggle) return;
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      document.body.classList.remove('menu-open');
    };
    if (toggle && nav) toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      document.body.classList.toggle('menu-open', open);
    });
    $$('#navLinks a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && nav && nav.classList.contains('open')) {
        closeMenu();
        toggle.focus();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) closeMenu();
    });

    // Scenario Tabs ("Where We Help")
    const tabs = $$('[role="tab"]');
    const panels = $$('[role="tabpanel"]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('aria-controls');
        tabs.forEach(t => t.setAttribute('aria-selected', String(t === tab)));
        panels.forEach(p => {
          if (p.id === target) {
            p.removeAttribute('hidden');
          } else {
            p.setAttribute('hidden', '');
          }
        });
      });
    });

    // SVG Network Graph Scroll Trigger
    const ng = $('#netGraph');
    if (ng && 'IntersectionObserver' in window) {
      ng.classList.add('anim');
      new IntersectionObserver((es, o) => {
        if (es[0].isIntersecting) {
          ng.classList.add('play');
          o.disconnect();
        }
      }, { threshold: 0.35 }).observe(ng);
    }

    // Active Section Highlight for Header
    if ('IntersectionObserver' in window) {
      const allLinks = [...$$('#navLinks a')];
      const sectionIds = [...new Set(allLinks.map(a => a.getAttribute('href').slice(1)))];
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            allLinks.forEach(l => {
              if (l.getAttribute('href') === '#' + en.target.id) {
                l.setAttribute('aria-current', 'true');
              } else {
                l.removeAttribute('aria-current');
              }
            });
          }
        });
      }, { rootMargin: '-35% 0px -55% 0px' });

      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) io.observe(el);
      });
    }
  })();
      } catch (err) { console.error('[solution-risk] page script error:', err); }
      // ---- page script ----
      try {
  (() => {
// Set to your logo file path/URL (e.g. "Contexq_logo.png") to replace the "CQ" badge.
const LOGO_SRC='';
if(LOGO_SRC){
  const hSpan=document.querySelector('#cqHub > span');
  if(hSpan)hSpan.outerHTML='<img alt="" src="'+LOGO_SRC+'">';
}
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const box=document.getElementById('cqGlobe');
const cv=document.getElementById('cqGl');
let renderer;
try{renderer=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true,powerPreference:'high-performance'});}catch(e){document.body.classList.add('nogl');return;}
const PR=Math.min(devicePixelRatio||1,2);renderer.setPixelRatio(PR);
const scene=new THREE.Scene();renderer.setClearColor(0x000000,0);
const cam=new THREE.PerspectiveCamera(40,1,.1,100);cam.position.set(0,2.5,9);
const globe=new THREE.Group();scene.add(globe);
const mobile=innerWidth<700,R=2.5,D=Math.PI/180;
const v3=(lon,lat,r)=>{const a=lon*D,b=lat*D;return new THREE.Vector3(Math.cos(b)*Math.sin(a)*r,Math.sin(b)*r,Math.cos(b)*Math.cos(a)*r);};

/* Coarse continent outlines [lon,lat] used only to weight particle density. */
const LAND=[
[[-168,66],[-140,70],[-95,72],[-65,60],[-55,50],[-70,42],[-80,25],[-97,18],[-88,15],[-80,8],[-105,20],[-118,32],[-125,48],[-150,60]],
[[-80,8],[-60,10],[-35,-6],[-40,-23],[-58,-38],[-68,-54],[-75,-45],[-72,-18],[-81,-5]],
[[-10,36],[-9,44],[0,50],[10,56],[28,70],[40,66],[40,46],[28,41],[10,38]],
[[-17,21],[-10,35],[10,37],[32,31],[43,12],[51,11],[40,-15],[32,-28],[20,-35],[12,-17],[9,4],[-8,5],[-17,14]],
[[40,46],[40,66],[70,73],[110,77],[170,68],[160,55],[140,50],[130,35],[122,28],[108,18],[103,2],[98,10],[90,22],[78,8],[68,24],[57,25],[50,30],[44,38]],
[[35,30],[48,30],[58,22],[52,13],[43,13]],
[[114,-22],[130,-12],[142,-11],[153,-27],[146,-39],[130,-32],[115,-34]],
[[-55,60],[-20,70],[-30,83],[-60,80]]];
const inside=(p,x,y)=>{let c=false;for(let i=0,j=p.length-1;i<p.length;j=i++){const a=p[i],b=p[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])c=!c;}return c;};
const isLand=(x,y)=>LAND.some(p=>inside(p,x,y));

/* Dark core: hides the far side and gives the globe a visible, dim rim. */
globe.add(new THREE.Mesh(new THREE.SphereGeometry(R*.992,64,48),new THREE.ShaderMaterial({
 vertexShader:'varying vec3 vN,vV;void main(){vec4 m=modelViewMatrix*vec4(position,1.);vN=normalize(normalMatrix*normal);vV=normalize(-m.xyz);gl_Position=projectionMatrix*m;}',
 fragmentShader:'varying vec3 vN,vV;void main(){float f=pow(1.-max(dot(vN,vV),0.),2.6);gl_FragColor=vec4(mix(vec3(.004,.012,.032),vec3(.05,.32,.8),f*.6),1.);}'})));

/* Particle field */
const N=mobile?12000:22000,ga=Math.PI*(3-Math.sqrt(5));
const P=[],C=[],S=[],L=[],Rn=[],land=[];
const deep=new THREE.Color(0x0649bd),blue=new THREE.Color(0x168aff),ice=new THREE.Color(0xcdeeff);
for(let i=0;i<N;i++){
 const y=1-2*(i+.5)/N,rg=Math.sqrt(1-y*y),th=ga*i,px=Math.cos(th)*rg,pz=Math.sin(th)*rg;
 const ld=isLand(Math.atan2(px,pz)/D,Math.asin(y)/D);
 if(!ld&&Math.random()>.08)continue;
 const r=R*(1+(Math.random()-.5)*.012);P.push(px*r,y*r,pz*r);
 const c=deep.clone().lerp(blue,ld?.3+Math.random()*.5:Math.random()*.25).lerp(ice,ld?Math.pow(Math.random(),5)*.6:0);
 C.push(c.r,c.g,c.b);S.push(.7+Math.random()*1.4);L.push(ld?1:0);Rn.push(Math.random());
 if(ld)land.push(new THREE.Vector3(px,y,pz));
}
const pg=new THREE.BufferGeometry();
pg.setAttribute('position',new THREE.Float32BufferAttribute(P,3));
pg.setAttribute('aColor',new THREE.Float32BufferAttribute(C,3));
pg.setAttribute('aSize',new THREE.Float32BufferAttribute(S,1));
pg.setAttribute('aLand',new THREE.Float32BufferAttribute(L,1));
pg.setAttribute('aRand',new THREE.Float32BufferAttribute(Rn,1));
const pu={uPR:{value:PR},uTime:{value:0},uReveal:{value:0},uScan:{value:1e3},uScanOn:{value:0},uTint:{value:0},uBand:{value:.6}};
globe.add(new THREE.Points(pg,new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,uniforms:pu,
 vertexShader:`attribute vec3 aColor;attribute float aSize,aLand,aRand;uniform float uPR,uTime,uReveal,uScan,uScanOn,uBand,uTint;varying vec3 vC;varying float vA;
 void main(){vec4 wp=modelMatrix*vec4(position,1.);vec4 mv=viewMatrix*wp;
 float d=(wp.y-uScan)/uBand;float band=exp(-d*d)*uScanOn;float passed=step(uScan,wp.y)*uTint;
 float rev=smoothstep(aRand,aRand+.12,uReveal);
 vC=mix(aColor,vec3(1.,.36,.18),band*.85)+band*.45+passed*vec3(0.,.04,.12);
 vA=(.2+.5*aLand)*rev*(1.+band*2.+passed*.25)*(.86+.14*sin(uTime*1.3+aRand*40.));
 gl_PointSize=clamp(aSize*uPR*(8./-mv.z)*(1.+band*.6),1.,7.);gl_Position=projectionMatrix*mv;}`,
 fragmentShader:'varying vec3 vC;varying float vA;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float a=smoothstep(.5,0.,d);gl_FragColor=vec4(vC,a*a*1.3*vA);}'})));

/* Data nodes: sparse points of different weight/colour that spread out from one origin. */
const startDir=v3(20,25,1).normalize(),NMAX=mobile?36:60,nodes=[];
for(let k=0;k<8000&&nodes.length<NMAX;k++){const q=land[(Math.random()*land.length)|0];if(nodes.every(n=>n.dot(q)<Math.cos(.15)))nodes.push(q);}
const NN=nodes.length,nodeLocal=[],NP=[],NC=[],NS=[],NR=[],NH=new Float32Array(NN);
const pal=[0x0a63ff,0x2aa8ff,0xcfeeff];
nodes.forEach(n=>{
 nodeLocal.push(n.clone().multiplyScalar(R*1.006));NP.push(n.x*R*1.006,n.y*R*1.006,n.z*R*1.006);
 const r=Math.random(),k=r>.86?2:r>.5?1:0,c=new THREE.Color(pal[k]);
 NC.push(c.r,c.g,c.b);NS.push([2.2,3.4,5.2][k]);
 NR.push(Math.min(1,Math.acos(Math.max(-1,Math.min(1,n.dot(startDir))))/Math.PI*.85+Math.random()*.15));
});
const ng=new THREE.BufferGeometry();
ng.setAttribute('position',new THREE.Float32BufferAttribute(NP,3));
ng.setAttribute('aColor',new THREE.Float32BufferAttribute(NC,3));
ng.setAttribute('aSize',new THREE.Float32BufferAttribute(NS,1));
ng.setAttribute('aRand',new THREE.Float32BufferAttribute(NR,1));
const hotAttr=new THREE.BufferAttribute(NH,1);ng.setAttribute('aHot',hotAttr);
const NM=new Float32Array(NN),markAttr=new THREE.BufferAttribute(NM,1);ng.setAttribute('aMark',markAttr);
const nu={uPR:{value:PR},uTime:{value:0},uSpread:{value:0},uScan:{value:1e3},uScanOn:{value:0},uTint:{value:0},uBand:{value:.6},uConnect:{value:0}};
globe.add(new THREE.Points(ng,new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,uniforms:nu,
 vertexShader:`attribute vec3 aColor;attribute float aSize,aRand,aHot,aMark;uniform float uPR,uTime,uSpread,uScan,uScanOn,uBand,uConnect,uTint;varying vec3 vC;varying float vA;
 void main(){vec4 wp=modelMatrix*vec4(position,1.);vec4 mv=viewMatrix*wp;
 float app=smoothstep(aRand*.8,aRand*.8+.2,uSpread);
 float d=(wp.y-uScan)/uBand;float band=exp(-d*d)*uScanOn;float passed=step(uScan,wp.y)*uTint;
 float hot=aHot*uConnect;float mark=aMark*step(uScan,wp.y)*uTint;float pulse=.8+.3*sin(uTime*(1.4+aRand*1.6)+aRand*30.);
 vC=mix(aColor,vec3(1.,.36,.12),max(max(hot,mark),band*.85))+band*.4+hot*.2+mark*.25+passed*vec3(0.,.08,.16);
 vA=app*pulse*(1.+passed*.3+mark*1.4);
 gl_PointSize=clamp(aSize*uPR*(8./-mv.z)*(pulse+band*.9+hot*.8+mark*2.6+passed*.15)*(.3+.7*app),1.5,36.);gl_Position=projectionMatrix*mv;}`,
 fragmentShader:'varying vec3 vC;varying float vA;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float core=smoothstep(.2,0.,d),halo=smoothstep(.5,.08,d)*.55;gl_FragColor=vec4(vC*(1.+halo*1.6),(core+halo)*vA);}'})));

/* Scan ring (world space) */
const scanG=new THREE.Group();scene.add(scanG);
const tg=new THREE.TorusGeometry(1,.012,8,180);
const scanCore=new THREE.Mesh(tg,new THREE.MeshBasicMaterial({color:0xff3030,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));
const scanGlow=new THREE.Mesh(new THREE.TorusGeometry(1,.05,8,180),new THREE.MeshBasicMaterial({color:0xff1a1a,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));
[scanCore,scanGlow].forEach(m=>{m.rotation.x=Math.PI/2;scanG.add(m);});scanG.visible=false;

/* Travelling risk pulses: round glowing sprites with short trails, plus a spark at each arc tip while it draws */
const AMAX=9,TR=5,PN=AMAX*2*TR+AMAX;
const pPos=new Float32Array(PN*3),pA=new Float32Array(PN),pS=new Float32Array(PN),pC=new Float32Array(PN*3);
for(let i=0;i<PN;i++){const head=i>=AMAX*2*TR;pC.set(head?[1,.92,.8]:[1,.6,.38],i*3);}
const pg2=new THREE.BufferGeometry();
pg2.setAttribute('position',new THREE.BufferAttribute(pPos,3).setUsage(THREE.DynamicDrawUsage));
pg2.setAttribute('aA',new THREE.BufferAttribute(pA,1).setUsage(THREE.DynamicDrawUsage));
pg2.setAttribute('aS',new THREE.BufferAttribute(pS,1).setUsage(THREE.DynamicDrawUsage));
pg2.setAttribute('aC',new THREE.BufferAttribute(pC,3));
const pulseU={uPR:{value:PR},uOp:{value:0}};
const pulsePoints=new THREE.Points(pg2,new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,uniforms:pulseU,
 vertexShader:'attribute float aA,aS;attribute vec3 aC;uniform float uPR;varying float vA;varying vec3 vC;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);vA=aA;vC=aC;gl_PointSize=aS*uPR*(9./-mv.z);gl_Position=projectionMatrix*mv;}',
 fragmentShader:'uniform float uOp;varying float vA;varying vec3 vC;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float g=smoothstep(.5,0.,d);gl_FragColor=vec4(vC*(1.+g),g*g*vA*uOp);}'}));
pulsePoints.frustumCulled=false;
scene.add(pulsePoints);

/* Risk Management Context Chips (Grounded in the PDF, plain executive language) */
const CHIP_DATA=[
  {label:'Suspended from trading',badge:'Flag',type:'hot'},
  {label:'Ownership loops back',badge:'Flag',type:'hot'},
  {label:'Same business, new name',badge:'Match',type:'ok'}
];
const chipsWrap=document.getElementById('cqChips');
const chipEls=CHIP_DATA.map(d=>{
  const el=document.createElement('div');
  el.className='cq-chip '+(d.type==='hot'?'hot':'ok');
  el.innerHTML=`<span>${d.label}</span><b>${d.badge}</b>`;
  chipsWrap.appendChild(el);
  return el;
});

/* Phase HUD controls */
const tickBtns=[...document.querySelectorAll('#cqGlobe .cq-ticks button')];
const phaseText=document.getElementById('cqPhaseText');
const PHASES=[
  {html:'01 · Scattered warning signs <span>Signals sit in separate systems</span>',cls:'on'},
  {html:'02 · Connecting the clues <span>Matching identities and mapping relationships</span>',cls:'on'},
  {html:'03 · Risk flagged with evidence <span>Emerging exposure prioritised for review</span>',cls:'hot'}
];

/* Layout */
let gx=0,gy=0,S0=1,Rs=R;
function layout(){
 const w=box.clientWidth||400,h=box.clientHeight||400,asp=w/h;cam.aspect=asp;cam.updateProjectionMatrix();renderer.setSize(w,h,false);
 const dist=Math.hypot(2.5,9),hh=Math.tan(cam.fov*D/2)*dist,hw=hh*asp;
 S0=Math.min(hh*.7,hw*.8)/R;gx=0;gy=0;
 Rs=R*S0;globe.position.set(gx,gy,0);
 pu.uBand.value=nu.uBand.value=Rs*.26;
}
layout();addEventListener('resize',layout);if(window.ResizeObserver)new ResizeObserver(layout).observe(box);

/* Scene timeline (seconds): spread -> hold -> scan -> connect -> hold -> release -> loop */
const SPEED=1.5; /* animation speed: raise for faster, lower for slower */
const T={spread:4.5,scan0:6.2,scan1:10,conn0:12.2,arcs1:15.6,hold:20.6,out:22.2,loop:4};
let spreadDone=false,pointerY=0,landT=-1,rings=[];
const ringTex=(()=>{const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d');
  const g=x.createRadialGradient(64,64,34,64,64,62);g.addColorStop(0,'rgba(255,130,80,0)');g.addColorStop(.55,'rgba(255,140,90,.9)');g.addColorStop(.62,'rgba(255,170,130,.9)');g.addColorStop(1,'rgba(255,120,70,0)');
  x.fillStyle=g;x.fillRect(0,0,128,128);return new THREE.CanvasTexture(c);})();const fArr=[],fillP=[0,0,0],CY=2.5;
let t=reduce?15:0,rotY=0,connected=false,hubW=new THREE.Vector3(),arcs=[],crossArcs=[],pickedNodes=[],curves=[],pointerX=0,lastPh=-1;
const arcMat=new THREE.LineBasicMaterial({color:0xff6a2a,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false});
const crossMat=new THREE.LineBasicMaterial({color:0x328cff,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false});
const hub=document.getElementById('cqHub');

addEventListener('pointermove',e=>{pointerX=e.clientX/innerWidth-.5;pointerY=e.clientY/innerHeight-.5;},{passive:true});
const U=(a,b)=>Math.min(1,Math.max(0,(t-a)/(b-a))),E=x=>x*x*(3-2*x);

const JUMP=[.6,T.scan0+.25,T.conn0];let phTimer=0;
function setPhaseUI(ph){
  if(ph===lastPh)return;
  lastPh=ph;
  tickBtns.forEach((b,i)=>{b.classList.toggle('cur',i===ph);b.classList.toggle('hot',ph===2&&i===2);b.setAttribute('aria-current',i===ph?'step':'false');});
  phaseText.style.opacity=0;clearTimeout(phTimer);
  phTimer=setTimeout(()=>{phaseText.innerHTML=PHASES[ph].html;phaseText.style.opacity=1;},180);
}
tickBtns.forEach((btn,i)=>btn.addEventListener('click',()=>{
  const target=JUMP[i];
  if(target<T.conn0&&connected)cleanConnections();
  if(target<T.spread)spreadDone=false;
  t=target;
}));

function cleanConnections(){
  connected=false;
  arcs.forEach(a=>{scene.remove(a);a.geometry.dispose();});
  crossArcs.forEach(a=>{scene.remove(a);a.geometry.dispose();});
  arcs=[];crossArcs=[];pickedNodes=[];curves=[];fArr.length=0;
  rings.forEach(r=>{scene.remove(r);r.material.dispose();});rings=[];NH.fill(0);hotAttr.needsUpdate=true;NM.fill(0);markAttr.needsUpdate=true;landT=-1;
  hub.classList.remove('on');
  chipEls.forEach(el=>el.classList.remove('on'));
  pulseU.uOp.value=0;
}

function pick(){
 globe.updateMatrixWorld(true);
 const c=globe.position.clone(),camDir=cam.position.clone().sub(c).normalize();
 hubW.copy(c).add(camDir.clone().multiplyScalar(Rs*1.012));
 const cand=[];
 for(let i=0;i<NN;i++){
  const p=nodeLocal[i].clone().applyMatrix4(globe.matrixWorld),n=p.clone().sub(c).normalize();
  if(n.dot(camDir)>.32)cand.push({i,p,n});
 }
 const seeds=[camDir],want=mobile?4:5;
 for(let k=0;k<want&&cand.length;k++){
  let bi=-1,bs=9;cand.forEach((o,j)=>{if(o.used)return;const s=Math.max(...seeds.map(q=>q.dot(o.n)));if(s<bs){bs=s;bi=j;}});
  if(bi<0)break;const o=cand[bi];o.used=true;seeds.push(o.n);
  pickedNodes.push(o);NM[o.i]=1;
  const rg=new THREE.Sprite(new THREE.SpriteMaterial({map:ringTex,transparent:true,depthTest:false,depthWrite:false,blending:THREE.AdditiveBlending,opacity:0}));
  rg.position.copy(o.p);rg.scale.setScalar(Rs*.12);rg.renderOrder=6;scene.add(rg);rings.push(rg);
  const mid=hubW.clone().add(o.p).multiplyScalar(.5),ctl=c.clone().add(mid.sub(c).normalize().multiplyScalar(Rs*1.24));
  const curve=new THREE.QuadraticBezierCurve3(hubW.clone(),ctl,o.p);
  curves.push(curve);
  const pts=curve.getPoints(64);
  const g=new THREE.BufferGeometry().setFromPoints(pts);g.setDrawRange(0,0);
  const ln=new THREE.Line(g,arcMat);scene.add(ln);arcs.push(ln);
 }
 /* Secondary multi-hop links between outer nodes (circular ownership / supply chain mesh) */
 for(let k=0;k<pickedNodes.length-1&&crossArcs.length<1;k+=2){
  const a=pickedNodes[k].p,b=pickedNodes[k+1].p;
  const mid=a.clone().add(b).multiplyScalar(.5),ctl=c.clone().add(mid.sub(c).normalize().multiplyScalar(Rs*1.16));
  const pts=new THREE.QuadraticBezierCurve3(a,ctl,b).getPoints(48);
  const g=new THREE.BufferGeometry().setFromPoints(pts);g.setDrawRange(0,0);
  const ln=new THREE.Line(g,crossMat);scene.add(ln);crossArcs.push(ln);
 }

 hotAttr.needsUpdate=true;markAttr.needsUpdate=true;
}

function reset(){
 cleanConnections();
 t=T.loop;
}

const tmp=new THREE.Vector3(),c01=x=>Math.min(1,Math.max(0,x)),BOUNDS=[[0,T.scan0],[T.scan0,T.conn0],[T.conn0,T.hold]];
let last=performance.now();
let visible=true;
if(window.IntersectionObserver)new IntersectionObserver(es=>{visible=es[0].isIntersecting;},{threshold:0}).observe(box);
function frame(now){
 requestAnimationFrame(frame);
 const dt=Math.min(.05,(now-last)/1000);last=now;
 if(!visible)return;
 if(!reduce)t+=dt*SPEED;
 if(t>=T.out)reset();
 if(t>=T.spread)spreadDone=true;
 pu.uTime.value=nu.uTime.value=now/1000;
 pu.uReveal.value=E(U(0,2.8));nu.uSpread.value=spreadDone?1:U(.5,T.spread);

 setPhaseUI(t<T.scan0?0:(t<T.conn0?1:2));
 tickBtns.forEach((b,i)=>{const q=Math.round(c01((t-BOUNDS[i][0])/(BOUNDS[i][1]-BOUNDS[i][0]))*50)/50;if(q!==fillP[i]){fillP[i]=q;b.firstElementChild.style.setProperty('--p',q);}});

 /* Scan: eased sweep; scanned tint fades in and back out so the loop never pops */
 let scanY=1e3,on=0;
 if(t>=T.scan0){
  const raw=U(T.scan0,T.scan1),k=E(raw);scanY=gy+Rs*1.1-k*Rs*2.2;on=t<T.scan1?1:0;
  const dy=scanY-gy,r=Math.sqrt(Math.max(0,Rs*Rs-dy*dy))*1.03+.04,o=.95*Math.min(1,raw*10,(1-raw)*10);
  scanG.visible=on>0;scanG.position.set(gx,scanY,0);
  scanCore.scale.set(r,r,Rs*.9);scanGlow.scale.set(r,r,Rs*.9);
  scanCore.material.opacity=o;scanGlow.material.opacity=o*.22;
 }else scanG.visible=false;
 pu.uScan.value=nu.uScan.value=scanY;pu.uScanOn.value=nu.uScanOn.value=on;
 pu.uTint.value=nu.uTint.value=t<T.scan0?0:t<T.hold?1:1-E(U(T.hold,T.out));

 /* Connect: arcs draw with eased growth; each node lights up as its arc arrives */
 if(t>=T.scan0&&!connected){pick();connected=true;}
 let conn=0;
 if(t>=T.conn0)conn=t<T.hold?E(U(T.conn0,T.conn0+.9)):1-E(U(T.hold,T.out));
 nu.uConnect.value=conn;
 /* Chosen nodes stand out after the scan: pulsing rings until the lines take over */
 const rv=E(U(T.scan1-1.4,T.scan1+.2))*nu.uTint.value;
 rings.forEach((r,i)=>{const w=.5+.5*Math.sin(nu.uTime.value*3.6+i*1.3);r.material.opacity=rv*(.55+.4*w)*(1-.45*conn);r.scale.setScalar(Rs*(.1+.045*w)*(.7+.3*rv));});
 hub.classList.toggle('on',t>T.conn0+.3&&t<T.hold+.3);
 const prog=U(T.conn0+.9,T.arcs1),fade=t<T.hold?1:1-U(T.hold,T.out);
 arcMat.opacity=.95*fade;crossMat.opacity=.48*fade;
 arcs.forEach((a,i)=>{const f=E(c01(prog*1.6-i*.06));fArr[i]=f;a.geometry.setDrawRange(0,Math.floor(f*65));NH[pickedNodes[i].i]=c01((f-.85)/.15);});
 crossArcs.forEach((a,i)=>a.geometry.setDrawRange(0,Math.floor(E(c01(prog*1.4-.2-i*.08))*49)));
 if(connected){hotAttr.needsUpdate=true;markAttr.needsUpdate=true;}

 if(connected){
  tmp.copy(hubW).project(cam);
  const bw=box.clientWidth,bh=box.clientHeight,hx=(tmp.x*.5+.5)*bw,hy=(-tmp.y*.5+.5)*bh;
  hub.style.translate=hx.toFixed(1)+'px '+hy.toFixed(1)+'px';

  /* Pulses flow node -> hub only along the part of the arc already drawn */
  for(let i=0;i<AMAX;i++){
   const cv=curves[i],f=fArr[i]||0;
   for(let j=0;j<1;j++){
    const u0=1-((t*.26+i*.37+j*.5)%1),env=Math.min(1,u0*8,(1-u0)*8);
    for(let q=0;q<TR;q++){
     const n=(i*2+j)*TR+q,ok=cv&&!reduce&&f>=1;
     if(ok){cv.getPoint(Math.min(1,u0+q*.024),tmp);pPos[n*3]=tmp.x;pPos[n*3+1]=tmp.y;pPos[n*3+2]=tmp.z;}
     pA[n]=ok?(1-q/TR)*env:0;pS[n]=ok?13*(1-q*.14):0;
    }
   }
   const h=AMAX*2*TR+i,drawing=cv&&f>.02&&f<.995;
   if(drawing){cv.getPoint(f,tmp);pPos[h*3]=tmp.x;pPos[h*3+1]=tmp.y;pPos[h*3+2]=tmp.z;}
   pA[h]=drawing?1:0;pS[h]=drawing?17:0;
  }
  pg2.attributes.position.needsUpdate=pg2.attributes.aA.needsUpdate=pg2.attributes.aS.needsUpdate=true;
  pulseU.uOp.value=.95*fade;

  /* Labels appear once all lines have reached the CQ */
  if(landT<0&&arcs.length&&fArr.length>=arcs.length&&fArr.every(f=>f>=.99))landT=t;
  const maxChips=mobile?2:chipEls.length;
  const placed=[[hx-48,hy-48,96,96],[hx-62,hy+46,124,28]];
  chipEls.forEach((el,idx)=>{
   if(idx>=maxChips||idx>=pickedNodes.length){el.classList.remove('on');return;}
   const show=landT>=0&&t>=landT+idx*.4&&t<(T.hold-.15);
   el.classList.toggle('on',show);
   if(show){
    tmp.copy(pickedNodes[idx].p).project(cam);
    const nx=(tmp.x*.5+.5)*bw,ny=(-tmp.y*.5+.5)*bh,cw=el.offsetWidth,ch=el.offsetHeight;
    let x=nx>=hx?nx+14:nx-14-cw;
    if(x<4||x+cw>bw-4)x=nx>=hx?nx-14-cw:nx+14; /* flip inward when there is no room outside */
    x=Math.min(Math.max(4,x),bw-4-cw);
    let y=Math.min(Math.max(4,ny-12),bh-46-ch);
    /* keep labels clear of each other and of the CQ badge */
    const dir=ny>=hy?1:-1,hit=r=>x<r[0]+r[2]+6&&x+cw+6>r[0]&&y<r[1]+r[3]+6&&y+ch+6>r[1];
    for(let g=0;g<8;g++){const r=placed.find(hit);if(!r)break;y=dir>0?r[1]+r[3]+6:r[1]-ch-6;y=Math.min(Math.max(4,y),bh-46-ch);}
    placed.push([x,y,cw,ch]);
    el.style.transform='translate3d('+x.toFixed(1)+'px,'+y.toFixed(1)+'px,0)';
   }
  });
 }

 const spin=t<T.scan0-.9?1:t<T.scan0?1-(t-(T.scan0-.9))/.9:t<T.hold?0:Math.pow(U(T.hold,T.out),2);
 if(!reduce)rotY+=dt*.12*spin*SPEED;
 globe.rotation.set(.1,-.35+rotY,0);
 globe.scale.setScalar(S0*(.9+.1*E(U(0,2.2))));
 const kk=1-Math.exp(-dt*2.2);
 cam.position.x+=(pointerX*.6-cam.position.x)*kk;
 cam.position.y+=(CY-pointerY*.35-cam.position.y)*kk;
 cam.lookAt(0,0,0);
 globe.updateMatrixWorld(true);
 renderer.render(scene,cam);
}
requestAnimationFrame(frame);
})();
      } catch (err) { console.error('[solution-risk] page script error:', err); }
      // ---- page script ----
      try {
  (() => {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    document.documentElement.classList.add('motion-ready');

    const groups = [
      ['.section-head', 'cq-reveal'],
      ['.kyc-steps > li', 'cq-reveal'],
      ['.tl3-list > li', 'cq-reveal'],
      ['.signal-tile', 'cq-reveal cq-reveal-scale'],
      ['.metric-card', 'cq-reveal cq-reveal-scale'],
      ['.shift-grid > *', 'cq-reveal'],
      ['.solve-viz', 'cq-reveal'],
      ['.solve-card', 'cq-reveal cq-reveal-scale'],
      ['.work-flow > li', 'cq-reveal'],
      ['.after-flag-intro', 'cq-reveal cq-reveal-left'],
      ['.alert-card', 'cq-reveal'],
      ['.view-card', 'cq-reveal cq-reveal-scale'],
      ['.scenario-grid > *', 'cq-reveal'],
      ['.layer', 'cq-reveal'],
      ['.why-cta', 'cq-reveal'],
      ['.site-footer-grid > *', 'cq-reveal']
    ];
    const seen = new Set();
    groups.forEach(([selector, classes]) => {
      document.querySelectorAll(selector).forEach((el, index) => {
        if (seen.has(el)) return;
        seen.add(el);
        classes.split(' ').forEach(cls => el.classList.add(cls));
        el.style.setProperty('--cq-delay', `${Math.min(index % 5, 4) * 85}ms`);
      });
    });

    const revealItems = document.querySelectorAll('.cq-reveal');
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    revealItems.forEach(el => observer.observe(el));

    // Small scroll progress indicator, injected without changing the page markup.
    const progress = document.createElement('div');
    progress.setAttribute('aria-hidden', 'true');
    Object.assign(progress.style, {
      position: 'fixed', top: '0', left: '0', height: '3px', width: '0%',
      zIndex: '9999', pointerEvents: 'none', background: 'linear-gradient(90deg, #328CFF, #8CC2FF)',
      boxShadow: '0 0 10px rgba(50,140,255,.35)', transition: 'width .08s linear'
    });
    document.body.appendChild(progress);
    let ticking = false;
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { window.requestAnimationFrame(updateProgress); ticking = true; }
    }, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    updateProgress();

    // Header gains a subtle depth cue after leaving the top of the page.
    const header = document.querySelector('.header');
    if (header) {
      const updateHeader = () => header.classList.toggle('cq-scrolled', window.scrollY > 12);
      window.addEventListener('scroll', updateHeader, { passive: true });
      updateHeader();
    }
  })();
      } catch (err) { console.error('[solution-risk] page script error:', err); }
      return {  };
    }
  })(cq);
}
