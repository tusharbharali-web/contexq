// Generated from public/html/contexq-data-management (2).html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-solution-customer-intelligence);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="solution-customer-intelligence" className="v-solution-customer-intelligence cq-html" lang="en" bodyClassName="cq-body">
      <main className="page" id="home">
        <section className="hero" id="solutions" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              {"Your best next client is already in your network. "}
              <em>{"You just can't see it yet."}</em>
            </h1>
            {" "}
            <p>
              ContexQ connects the owners, directors and supply chains around every customer, so you know who to call next and how to get in the door.
            </p>
            {" "}
            <a className="explore cq-cta" href="#how-we-help">How ContexQ helps</a>
          </div>
          {" "}
          <div className="media" id="video">
            <iframe className="hero-video" srcDoc={"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">\n<title>ContexQ - From Data to Opportunity</title>\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap\" rel=\"stylesheet\">\n<style>\n:root{color-scheme:dark;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}\n*{box-sizing:border-box}\nhtml,body{height:100%;margin:0;background:#020919}\nbody{display:flex;align-items:center;justify-content:center;overflow:hidden;font-family:Montserrat,system-ui,-apple-system,\"Segoe UI\",sans-serif;\nbackground:radial-gradient(ellipse at 50% 28%,#002262 0%,#021240 42%,#01040f 100%)}\n#stage{position:relative;width:100%;height:100%;aspect-ratio:auto}\n#cv,#svg{position:absolute;inset:0;width:100%;height:100%}\n#cv{opacity:0}\n.l{fill:#fff;font-size:28px;font-weight:600;text-anchor:middle}\n.node use,.src use{stroke:#eaf4ff;fill:none;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round}\n.bs{stroke:#1e7bff;stroke-width:4.5;stroke-dasharray:1;stroke-dashoffset:1;fill:none}\n.gd{stroke:#ffb81c;stroke-width:5.5;stroke-dasharray:1;stroke-dashoffset:1;stroke-linecap:round}\n.e1,.e2{fill:#d7eeff;opacity:0}\n.bt{fill:#fff;font-size:24px;font-weight:600}\n#cap{position:absolute;left:0;right:0;bottom:3.5%;text-align:center;color:#dbe9ff;padding:0 6%}\n#cap h2{margin:0 0 4px;font-size:clamp(14px,2.1vw,26px);font-weight:700;letter-spacing:.01em}\n#cap p{margin:0;font-size:clamp(11px,1.35vw,17px);color:#8fb0e0;font-weight:500}\n#ctl{position:absolute;top:2.5%;right:2.5%;display:flex;gap:8px}\n#re,#pp{background:rgba(10,40,100,.55);color:#bcd6ff;border:1px solid #1e5bd0;border-radius:20px;\npadding:7px 14px;font:600 12px Montserrat,system-ui,sans-serif;cursor:pointer}\n#re:hover,#re:focus-visible,#pp:hover,#pp:focus-visible{background:#12449e;outline:2px solid #8bd8ff}\n@media (max-width: 600px) {\n  #cap { bottom: 1.5%; padding: 0 14%; }\n  #cap h2 { font-size: 11px; margin: 0 0 2px; line-height: 1.2; }\n  #cap p { font-size: 9px; line-height: 1.2; }\n  #ctl button { padding: 4px 8px; font-size: 10px; }\n}\n</style>\n</head>\n<body>\n<div id=\"stage\">\n<canvas id=\"cv\" aria-hidden=\"true\"></canvas>\n<svg id=\"svg\" viewBox=\"0 0 1672 941\" role=\"img\" aria-label=\"Animated story: data ingestion, entity resolution, relationship graph, risk alert, owner discovery and warm introduction\">\n<defs>\n<filter id=\"bl\" x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\"><feGaussianBlur stdDeviation=\"9\"/></filter>\n<marker id=\"ar\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"#19c8ff\"/></marker>\n<symbol id=\"i-building\" viewBox=\"0 0 24 24\"><path d=\"M5 21V8h6v13M11 21V3h8v18M3 21h18M13 7h1M16 7h1M13 11h1M16 11h1M13 15h1M16 15h1M7.500 12h1M7.500 16h1M14 21v-3h2v3\"/></symbol>\n<symbol id=\"i-factory\" viewBox=\"0 0 24 24\"><path d=\"M3 21V10l5 3V9l5 3V5h3v16M3 21h18M10 17h2M15 17h2\"/></symbol>\n<symbol id=\"i-warehouse\" viewBox=\"0 0 24 24\"><path d=\"M3 21V9l9-5 9 5v12M7 21v-7h10v7M9.500 17.500h5M10 14v3.500\"/></symbol>\n<symbol id=\"i-person\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"8\" r=\"3.600\"/><path d=\"M5 21c0-4 3-6.500 7-6.500s7 2.500 7 6.500zM12 14.800v3\"/></symbol>\n<symbol id=\"i-alert\" viewBox=\"0 0 24 24\"><path d=\"M12 3.500L2.500 20h19zM12 10v5M12 17.300v.4\"/></symbol>\n<symbol id=\"i-chart\" viewBox=\"0 0 24 24\"><path d=\"M3 21h18M5 17v-4M10 17v-6M15 17v-3M4 10l5-4 4 3 7-6M16 3h4v4\"/></symbol>\n<symbol id=\"i-doc\" viewBox=\"0 0 24 24\"><path d=\"M6 3h8l5 5v13H6zM14 3v5h5M9 12h7M9 15h7M9 18h5\"/></symbol>\n<symbol id=\"i-globe\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18\"/></symbol>\n<symbol id=\"i-shield\" viewBox=\"0 0 24 24\"><path d=\"M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z\"/></symbol>\n</defs>\n<circle id=\"orbit\" cx=\"836\" cy=\"430\" r=\"300\" fill=\"none\" stroke=\"#1e8bff\" stroke-width=\"2\" stroke-dasharray=\"2 9\" stroke-linecap=\"round\" opacity=\"0\"/>\n<g id=\"paths\" opacity=\"0\"></g>\n<g id=\"srcs\"></g>\n<g id=\"lines\"></g>\n<g id=\"nodes\"></g>\n<g id=\"dots\"></g>\n<g id=\"bw\" opacity=\"0\"><g class=\"bin\">\n<g id=\"bd-r\"><rect x=\"-180\" y=\"-40\" width=\"360\" height=\"80\" rx=\"10\" fill=\"#4a0612\" stroke=\"#ff2638\" stroke-width=\"4\"/>\n<use href=\"#i-alert\" x=\"-158\" y=\"-18\" width=\"36\" height=\"36\" stroke=\"#fff\" fill=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/>\n<text class=\"bt\" x=\"-102\" y=\"-6\">Indirect association:</text><text class=\"bt\" x=\"-102\" y=\"24\">review required</text></g>\n<g id=\"bd-g\" opacity=\"0\"><rect x=\"-190\" y=\"-40\" width=\"380\" height=\"80\" rx=\"10\" fill=\"#032b2a\" stroke=\"#19e08a\" stroke-width=\"4\"/>\n<use href=\"#i-chart\" x=\"-170\" y=\"-18\" width=\"36\" height=\"36\" stroke=\"#19e08a\" fill=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/>\n<text class=\"bt\" x=\"-118\" y=\"-6\">Private Wealth Match -</text><text class=\"bt\" x=\"-118\" y=\"24\">$85M Opportunity</text></g></g></g>\n<line id=\"bc\" stroke=\"#ff2638\" stroke-width=\"4\" stroke-dasharray=\"3 8\" stroke-linecap=\"round\" opacity=\"0\"/>\n<circle id=\"rip\" r=\"10\" fill=\"none\" stroke=\"#fff\" stroke-width=\"3\" opacity=\"0\"/>\n<g id=\"warm\" opacity=\"0\"><line id=\"wl\" stroke=\"#ffd21a\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-dasharray=\"1 13\"/>\n<polygon id=\"wa\" fill=\"#ffd21a\" opacity=\"0\"/><text id=\"wt\" fill=\"#ffd21a\" font-size=\"26\" font-weight=\"600\" text-anchor=\"middle\">Warm Introductions</text></g>\n<text id=\"wm\" x=\"836\" y=\"498\" text-anchor=\"middle\" font-size=\"84\" font-weight=\"700\" fill=\"#eaf6ff\" opacity=\"0\" letter-spacing=\"1\" style=\"filter:drop-shadow(0 0 16px #168bff)\">ContexQ</text>\n</svg>\n<div id=\"cap\" aria-live=\"polite\"><h2></h2><p></p></div>\n<div id=\"ctl\"><button id=\"pp\" type=\"button\">Pause</button><button id=\"re\" type=\"button\">↻ Replay</button></div>\n</div>\n\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js\"></script>\n<script>\n/* ---------- Globe: particle sphere from the supplied file (no connecting nodes) ---------- */\nconst stage=document.getElementById('stage'),cv=document.getElementById('cv');\nlet renderer=null,globe=null,pm=null,wire=null,GL=true;\nconst pointer={x:0,y:0};\naddEventListener('pointermove',e=>{pointer.x=(e.clientX/innerWidth-.5)*2;pointer.y=(e.clientY/innerHeight-.5)*2;},{passive:true});\ntry{\nrenderer=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true});renderer.setClearColor(0x000000,0);\nconst scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(42,16/9,.1,100);cam.position.set(0,0,10);\nglobe=new THREE.Group();scene.add(globe);\nconst R=2.55,N=innerWidth<700?4800:8200,ga=Math.PI*(3-Math.sqrt(5));\nconst blue=new THREE.Color(0x168aff),ice=new THREE.Color(0xd6f2ff),deep=new THREE.Color(0x0649bd);\nconst P=new Float32Array(N*3),C=new Float32Array(N*3),S=new Float32Array(N);\nfor(let i=0;i<N;i++){const y=1-i/(N-1)*2,r=Math.sqrt(1-y*y),t=ga*i,s=R+(Math.random()-.5)*.035;\nP[i*3]=Math.cos(t)*r*s;P[i*3+1]=y*s;P[i*3+2]=Math.sin(t)*r*s;\nconst c=deep.clone().lerp(blue,.45+Math.random()*.45).lerp(ice,Math.pow(Math.random(),4)*.72);C[i*3]=c.r;C[i*3+1]=c.g;C[i*3+2]=c.b;S[i]=.65+Math.random()*1.8;}\nconst g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(P,3));g.setAttribute('color',new THREE.BufferAttribute(C,3));g.setAttribute('aSize',new THREE.BufferAttribute(S,1));\npm=new THREE.ShaderMaterial({transparent:true,depthWrite:false,vertexColors:true,\nuniforms:{uPR:{value:1},uPulse:{value:1},uE:{value:0}},\nvertexShader:`attribute float aSize;uniform float uPR;uniform float uPulse;uniform float uE;varying vec3 vC;varying float vA;\nvoid main(){vC=color;vA=1.-uE;vec4 mv=modelViewMatrix*vec4(position*(1.+uE*.6),1.);\ngl_PointSize=clamp(aSize*uPR*(8.6/max(1.,-mv.z))*uPulse,1.,8.);gl_Position=projectionMatrix*mv;}`,\nfragmentShader:`varying vec3 vC;varying float vA;void main(){float d=length(gl_PointCoord-vec2(.5));if(d>.5)discard;\ngl_FragColor=vec4(vC,(smoothstep(.22,0.,d)+smoothstep(.5,.12,d)*.45)*vA);}`});\nglobe.add(new THREE.Points(g,pm));\nwire=new THREE.Mesh(new THREE.SphereGeometry(R*.995,32,24),new THREE.MeshBasicMaterial({color:0x0b4d9a,wireframe:true,transparent:true,opacity:.055}));globe.add(wire);\nglobe.rotation.x=-.08;globe.scale.setScalar(.82);\nconst fit=()=>{const w=stage.clientWidth,h=stage.clientHeight;renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(w,h,false);\ncam.aspect=w/h;cam.updateProjectionMatrix();pm.uniforms.uPR.value=renderer.getPixelRatio();};\nfit();addEventListener('resize',fit);\nconst clock=new THREE.Clock();\n(function loop(){const t=clock.getElapsedTime();globe.rotation.y=t*.055+pointer.x*.07;\nglobe.rotation.x+=((-pointer.y*.045)-globe.rotation.x)*.012;wire.rotation.y=-t*.018;renderer.render(scene,cam);requestAnimationFrame(loop);})();\ngsap.to(pm.uniforms.uPulse,{value:1.12,duration:1.5,yoyo:true,repeat:-1,ease:'sine.inOut'});\n}catch(err){GL=false;}\n\n/* ---------- Story graph (SVG) ---------- */\nconst $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];\nconst RAD=70,CY=[836,470];\nconst A={apex:[210,430],t1:[651,290],t2:[651,570],dir:[1035,430],par:[1462,430]};\nconst B={apex:[133,445],t1:[462,320],t2:[462,555],dir:[802,440],par:[1090,440],own:[1528,440]};\nconst D={d0:[836,170],d1:[537,430],d2:[1135,430],d3:[836,673]};\nconst BLUE='#1e90ff',GOLD='#ffb21a',RED='#ff2a3d',GREEN='#19e08a';\nconst IA='fill=\"none\" stroke=\"#eaf4ff\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"';\nconst RET='<g class=\"ret\" opacity=\"0\" fill=\"none\" stroke=\"#ffb21a\" stroke-linecap=\"round\">'+[104,124,146].map((r,i)=>`<circle class=\"rr rr${i}\" r=\"${r}\" stroke-width=\"2\" stroke-dasharray=\"1 7\" opacity=\"${.95-i*.22}\"/>`).join('')\n+[0,90,180,270].map(a=>`<g transform=\"rotate(${a})\"><line class=\"rl\" x1=\"96\" y1=\"0\" x2=\"96\" y2=\"0\" stroke-width=\"2\"/><circle class=\"rd\" cx=\"96\" r=\"6\" fill=\"#ffd36b\" stroke=\"none\"/></g>`).join('')+'</g>';\nconst defs=[['apex','building',GOLD,['Resolved customer:','Apex Industries']],['t1','factory',BLUE,['Tier-1 Supplier']],['t2','warehouse',BLUE,['Tier-2 Supplier']],\n['dir','person',BLUE,['Shared Director']],['par','building',BLUE,['Parent Group','(Unbanked)']],['own','person',GOLD,['Owner','(Existing private bank','client)']],\n['d0','doc',BLUE,['Apex Industries']],['d1','doc',BLUE,['アペックス工業']],['d2','doc',BLUE,['APEX INDUS']],['d3','doc',BLUE,['顶峰实业']]];\n$('#nodes').innerHTML=defs.map(([id,ic,col,ls])=>`<g id=\"n-${id}\" style=\"color:${col}\">${id==='apex'?RET:''}<g class=\"in\">\n<circle class=\"pulse\" r=\"${RAD}\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0\"/>\n<circle r=\"${RAD}\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" filter=\"url(#bl)\" opacity=\".75\"/>\n<circle r=\"${RAD}\" fill=\"#041a46\" fill-opacity=\".85\" stroke=\"currentColor\" stroke-width=\"5\"/>\n<use class=\"ib\" href=\"#i-${ic}\" x=\"-31\" y=\"-31\" width=\"62\" height=\"62\" ${IA}/><use class=\"ia\" href=\"#i-alert\" x=\"-31\" y=\"-31\" width=\"62\" height=\"62\" opacity=\"0\" ${IA}/>\n${ls.map((t,i)=>`<text class=\"l l${i}\" y=\"${112+i*33+(id==='apex'?52:0)}\">${t}</text>`).join('')}</g></g>`).join('');\nconst E=[['apex','t1'],['apex','t2'],['t1','dir'],['t2','dir'],['dir','par'],['par','own']];\n$('#lines').innerHTML=E.map((_,i)=>`<g id=\"L${i}\"><line class=\"bs\" pathLength=\"1\"/><line class=\"gd\" pathLength=\"1\"/><circle class=\"e1\" r=\"7\"/><circle class=\"e2\" r=\"7\"/></g>`).join('');\nconst nd={};defs.forEach(([id])=>nd[id]=$('#n-'+id));\nconst P={},prog={warm:0};\n\n/* sources for frame 1 */\nconst SRC=[{x:230,y:260,t:['KYC &','customer records'],i:'person',ly:-112},{x:1440,y:260,t:['Global','trade data'],i:'globe',ly:-112},\n{x:230,y:720,t:['Corporate','registries'],i:'building',ly:84},{x:1440,y:720,t:['Sanctions','& media'],i:'shield',ly:84}];\n$('#srcs').innerHTML=SRC.map(s=>`<g class=\"src\" opacity=\"0\" transform=\"translate(${s.x} ${s.y})\"><circle r=\"50\" fill=\"#041a46\" stroke=\"#19c8ff\" stroke-width=\"4\"/>\n<use href=\"#i-${s.i}\" x=\"-24\" y=\"-24\" width=\"48\" height=\"48\" ${IA}/><text class=\"l\" y=\"${s.ly}\" style=\"font-size:25px\">${s.t[0]}</text><text class=\"l\" y=\"${s.ly+30}\" style=\"font-size:25px\">${s.t[1]}</text></g>`).join('');\nconst pathEls=SRC.map(s=>{const dx=CY[0]-s.x,dy=CY[1]-s.y,l=Math.hypot(dx,dy),ux=dx/l,uy=dy/l;\nconst sx=s.x+ux*58,sy=s.y+uy*58,ex=CY[0]-ux*332,ey=CY[1]-uy*332,mx=(sx+ex)/2-uy*70*Math.sign(dx*dy||1),my=(sy+ey)/2+ux*70*Math.sign(dx*dy||1);\nconst p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',`M${sx} ${sy}Q${mx} ${my} ${ex} ${ey}`);\np.setAttribute('fill','none');p.setAttribute('stroke','#19c8ff');p.setAttribute('stroke-opacity','.55');p.setAttribute('stroke-width','3');p.setAttribute('marker-end','url(#ar)');\n$('#paths').appendChild(p);return p;});\nconst dotEls=[];pathEls.forEach(()=>{const a=[];for(let k=0;k<5;k++){const c=document.createElementNS('http://www.w3.org/2000/svg','circle');\nc.setAttribute('r','6');c.setAttribute('fill','#8bd8ff');c.setAttribute('opacity','0');c.style.filter='drop-shadow(0 0 6px #19c8ff)';$('#dots').appendChild(c);a.push(c);}dotEls.push(a);});\n\n/* render: positions, lines, badge, warm line */\nfunction render(){\nfor(const k in P)nd[k].setAttribute('transform',`translate(${P[k].x} ${P[k].y})`);\nE.forEach(([a,b],i)=>{const pa=P[a],pb=P[b],dx=pb.x-pa.x,dy=pb.y-pa.y,l=Math.hypot(dx,dy)||1,ux=dx/l,uy=dy/l,o=RAD+7;\nconst x1=pa.x+ux*o,y1=pa.y+uy*o,x2=pb.x-ux*o,y2=pb.y-uy*o,g=$('#L'+i);\ng.querySelectorAll('line').forEach(n=>{n.setAttribute('x1',x1);n.setAttribute('y1',y1);n.setAttribute('x2',x2);n.setAttribute('y2',y2);});\nconst e1=g.querySelector('.e1'),e2=g.querySelector('.e2');e1.setAttribute('cx',x1);e1.setAttribute('cy',y1);e2.setAttribute('cx',x2);e2.setAttribute('cy',y2);});\nconst p=P.par,bx=p.x,by=p.y-165;$('#bw').setAttribute('transform',`translate(${bx} ${by})`);\nconst c=$('#bc');c.setAttribute('x1',p.x);c.setAttribute('y1',p.y-76);c.setAttribute('x2',p.x);c.setAttribute('y2',by+42);\nconst r=$('#rip');r.setAttribute('cx',bx);r.setAttribute('cy',by);\nconst o=P.own,x1=o.x-RAD-8,tip=p.x+RAD+10,x2=x1+(tip+24-x1)*prog.warm;\nconst wl=$('#wl');wl.setAttribute('x1',x1);wl.setAttribute('y1',o.y);wl.setAttribute('x2',x2);wl.setAttribute('y2',o.y);\n$('#wa').setAttribute('points',`${tip},${o.y} ${tip+26},${o.y-15} ${tip+26},${o.y+15}`);\nconst wt=$('#wt');wt.setAttribute('x',(o.x+p.x)/2);wt.setAttribute('y',o.y-34);}\ngsap.ticker.add(render);\n\n/* captions */\nconst CAP=[['Data ingestion','Fragmented global data streams into one intelligence layer.'],\n['Cross-lingual entity resolution','English, Japanese and Chinese records merge into one resolved customer.'],\n['Graph formation','Supply chain and corporate relationships mapped around the customer.'],\n['Following the evidence','The path surfaces an indirect association with an unbanked parent group.'],\n['Owner discovery','One click reveals the ultimate owner, already a private wealth client.'],\n['Warm introduction','The risk flag becomes a relationship-led $85M opportunity.']];\nfunction cap(n){const h=$('#cap h2'),p=$('#cap p');gsap.to('#cap',{opacity:0,duration:.25,onComplete:()=>{h.textContent=CAP[n][0];p.textContent=CAP[n][1];gsap.to('#cap',{opacity:1,duration:.5});}});\n}\n/* reset to opening state */\nfunction reset(){\nconst all={...A,...D};all.apex=[836,440];all.own=[...A.par];\nfor(const id in nd)P[id]={x:all[id][0],y:all[id][1]};\nprog.warm=0;\ngsap.set('svg .in',{scale:0,svgOrigin:'0 0'});gsap.set('.bin',{scale:.6,svgOrigin:'0 0'});\ngsap.set('#n-par,#n-t1,#n-t2,#n-dir,#n-d0,#n-d1,#n-d2,#n-d3',{color:BLUE});gsap.set('#n-par',{color:BLUE});gsap.set('#n-apex,#n-own',{color:GOLD});\ngsap.set('#n-par .ib',{opacity:1});gsap.set('#n-par .ia',{opacity:0});gsap.set('#n-par .l1',{opacity:1});\ngsap.set('#n-apex .l0',{opacity:1});gsap.set('#n-apex .l1',{attr:{y:197}});\n\ngsap.set('.bs',{strokeDashoffset:1,opacity:1});gsap.set('.gd',{strokeDashoffset:1,opacity:0});gsap.set('#L5 .bs',{strokeDashoffset:0,opacity:0});\ngsap.set('.e1,.e2',{opacity:0});gsap.set('#bw,#bc,#warm,#wa,#orbit,#wm,#paths,.src,#bd-g',{opacity:0});gsap.set('#bd-r',{opacity:1});gsap.set('#bc',{attr:{stroke:RED}});\ngsap.set(cv,{opacity:0});if(GL){pm.uniforms.uE.value=0;wire.material.opacity=.055;globe.scale.setScalar(.82);}dotEls.flat().forEach(c=>c.setAttribute('opacity',0));gsap.set('#rip',{opacity:0,attr:{r:10}});gsap.set('#cap',{opacity:0});gsap.set('.ret',{opacity:0});gsap.set('.pulse',{opacity:0,attr:{r:70}});\nrender();}\n\nlet tl,again;\nfunction build(){\nconst t=gsap.timeline({onComplete:()=>{again=gsap.delayedCall(3,play);}});\nconst pop=(id,at,d=.6)=>t.to(`#n-${id} .in`,{scale:1,duration:d,ease:'back.out(1.7)'},at);\nconst draw=(i,at,d=.7,cls='.bs')=>{if(cls==='.gd')t.set(`#L${i} .gd`,{opacity:1},at);t.to(`#L${i} ${cls}`,{strokeDashoffset:0,duration:d,ease:'power2.inOut'},at);if(cls==='.bs')t.to(`#L${i} .e1,#L${i} .e2`,{opacity:1,duration:.3},at);};\n/* F1 ingestion */\nt.call(cap,[0],null,0).to(cv,{opacity:1,duration:1.2},0)\n.to(GL?globe.scale:{},{x:1,y:1,z:1,duration:1.8,ease:'power3.out'},0).to('#wm',{opacity:1,duration:.8},.6)\n.to('.src',{opacity:1,duration:.6,stagger:.15},.4).to('#paths',{opacity:1,duration:.6},1);\npathEls.forEach((p,pi)=>{const L=p.getTotalLength();dotEls[pi].forEach((c,k)=>{const o={v:0};\nt.to(o,{v:1,duration:1,repeat:1,ease:'none',onUpdate:()=>{const q=p.getPointAtLength(o.v*L);c.setAttribute('cx',q.x);c.setAttribute('cy',q.y);c.setAttribute('opacity',Math.sin(Math.PI*o.v));}},1.1+k*.3+pi*.07);});});\n/* F2 resolution */\nlet T=4.6;t.call(cap,[1],null,T).to('.src,#paths,#wm',{opacity:0,duration:.6},T).to(GL?pm.uniforms.uE:{},{value:1,duration:.9,ease:'power2.in'},T).to(GL?wire.material:{},{opacity:0,duration:.7},T).to(cv,{opacity:0,duration:.3},T+.7)\n.to('#orbit',{opacity:.5,duration:.5},T+.3);\n['d0','d1','d2','d3'].forEach((d,i)=>pop(d,T+.4+i*.12));\n['d0','d1','d2','d3'].forEach(d=>t.to(P[d],{x:836,y:440,duration:.8,ease:'power2.in'},T+1.9));\nt.to('#n-d0 .in,#n-d1 .in,#n-d2 .in,#n-d3 .in',{scale:0,duration:.35},T+2.6).to('#orbit',{opacity:0,duration:.5},T+2.4);\npop('apex',T+2.6,.8);t.to('#n-apex .in',{scale:1.35,duration:.8,ease:'back.out(1.7)'},T+2.6)\n.to('#n-apex .ret',{opacity:1,duration:.4},T+2.7)\n.fromTo('#n-apex .pulse',{attr:{r:70},opacity:.9},{attr:{r:150},opacity:0,duration:1.1,ease:'power2.out',immediateRender:false},T+2.7);\n[104,124,146].forEach((r,i)=>t.fromTo(`#n-apex .rr${i}`,{attr:{r:96}},{attr:{r:r},duration:1,ease:'power3.out',immediateRender:false},T+2.7+i*.1));\nt.fromTo('#n-apex .rl',{attr:{x2:96}},{attr:{x2:170},duration:1,ease:'power3.out',immediateRender:false},T+2.7)\n.fromTo('#n-apex .rd',{attr:{cx:96}},{attr:{cx:170},duration:1,ease:'power3.out',immediateRender:false},T+2.7);\n/* F3 graph */\nT=T+4.7;t.to('#n-apex .ret',{opacity:0,duration:.5},T-.3).call(cap,[2],null,T).to(P.apex,{x:A.apex[0],y:A.apex[1],duration:1.2,ease:'power3.inOut'},T)\n.to('#n-apex .in',{scale:1,duration:1.2,ease:'power3.inOut'},T).to('#n-apex .l0',{opacity:0,duration:.4},T).to('#n-apex .l1',{attr:{y:112},duration:1,ease:'power3.inOut'},T);\ndraw(0,T+1.2);draw(1,T+1.2);pop('t1',T+1.8);pop('t2',T+1.8);draw(2,T+2.1);draw(3,T+2.1);pop('dir',T+2.7);draw(4,T+3);pop('par',T+3.6);\n/* F4 evidence + alert */\nT=T+4.8;t.call(cap,[3],null,T);draw(0,T,.7,'.gd');draw(1,T,.7,'.gd');draw(2,T+.8,.7,'.gd');draw(3,T+.8,.7,'.gd');draw(4,T+1.6,.7,'.gd');\nt.to('#n-par',{color:RED,duration:.4},T+2.4).to('#n-par .ib',{opacity:0,duration:.3},T+2.4).to('#n-par .ia',{opacity:1,duration:.3},T+2.4)\n.fromTo('#n-par .pulse',{attr:{r:70},opacity:.9},{attr:{r:150},opacity:0,duration:0.9,repeat:2,ease:'power2.out',immediateRender:false},T+2.4)\n.to('#bw,#bc',{opacity:1,duration:.3},T+2.6).to('.bin',{scale:1,duration:.5,ease:'back.out(1.8)'},T+2.6);\n/* F5 owner */\nT=T+5.6;t.call(cap,[4],null,T)\n.fromTo('#rip',{attr:{r:10},opacity:.9},{attr:{r:70},opacity:0,duration:.8,ease:'power2.out',immediateRender:false},T+.3).to('.bin',{scale:.93,duration:.12,yoyo:true,repeat:1},T+.3);\nfor(const id in B)t.to(P[id],{x:B[id][0],y:B[id][1],duration:1.4,ease:'power3.inOut'},T+1);\nt.to('#L5 .bs',{opacity:1,duration:.5},T+1.2).to('#L5 .e1,#L5 .e2',{opacity:1,duration:.3},T+1.2);pop('own',T+1.8,.7);\nt.fromTo('#n-own .pulse',{attr:{r:70},opacity:.9},{attr:{r:150},opacity:0,duration:1,repeat:1,ease:'power2.out',immediateRender:false},T+2.5);\n/* F6 warm intro + opportunity */\nT=T+4.8;t.call(cap,[5],null,T).to('#warm',{opacity:1,duration:.3},T).to(prog,{warm:1,duration:1.6,ease:'power1.inOut'},T)\n.to('#L5 .bs,#L5 .e1,#L5 .e2',{opacity:0,duration:.4},T).to('#wa',{opacity:1,duration:.3},T+1.4)\n.set('#bd-r',{opacity:0},T+2.3).set('#bd-g',{opacity:1},T+2.3)\n.fromTo('.bin',{scale:.85},{scale:1,duration:.7,ease:'back.out(2)',immediateRender:false},T+2.3).to('#bc',{attr:{stroke:GREEN},duration:.4},T+2.1)\n.to('#n-par',{color:GREEN,duration:.5},T+2.1).to('#n-par .ia',{opacity:0,duration:.3},T+2.1).to('#n-par .ib',{opacity:1,duration:.3},T+2.1)\n.to('#n-par .l1',{opacity:0,duration:.3},T+2.1)\n.fromTo('#n-par .pulse',{attr:{r:70},opacity:.9},{attr:{r:150},opacity:0,duration:1,ease:'power2.out',immediateRender:false},T+2.2)\n.to({},{duration:3},T+3);\nt.timeScale(1.45);return t;}\nfunction play(){if(tl)tl.kill();if(again)again.kill();reset();tl=build();}\n$('#re').addEventListener('click',play);\n$('#pp').addEventListener('click',()=>{const p=!tl.paused();tl.paused(p);$('#pp').textContent=p?'Play':'Pause';});\ndocument.fonts&&document.fonts.ready?document.fonts.ready.then(play):play();\n</script>\n</body>\n</html>\n"} title="Animated ContexQ customer intelligence experience" loading="eager" allow="autoplay; fullscreen; picture-in-picture" referrerPolicy="no-referrer" />
          </div>
        </section>
        {" "}
        <section className="problem-redesign" id="the-problem" aria-labelledby="problem-title">
          <div className="pr-wrap desk-only">
            <header className="pr-heading">
              <h2 id="problem-title">
                Today you see a list.
                <br />
                {" "}
                <em>The opportunity sits just beyond it.</em>
              </h2>
              {" "}
              <p className="pr-intro">
                You see counterparties ranked by volume. The buyers, suppliers and owners behind them stay out of sight, so good opportunities arrive late, or never.
              </p>
            </header>
            {" "}
            <div className="pr-showcase" aria-label="Today compared with ContexQ">
              <section className="pr-side pr-today" aria-labelledby="today-heading">
                <h3 id="today-heading">Banks today see a flat list of unconnected counterparties.</h3>
                {" "}
                <p className="pr-subline">Top counterparties by payment volume.</p>
                {" "}
                <table className="pr-counterparty-table">
                  <thead>
                    <tr>
                      <th scope="col">Counterparty</th>
                      <th scope="col">Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Steel supplier</td>
                      <td>
                        <div className="pr-volume">
                          <span className="pr-volume-track"><span className="pr-volume-bar" style={{ width: "100%" }} /></span>
                          <span className="pr-volume-value">$41.2M</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Chemicals trader</td>
                      <td>
                        <div className="pr-volume">
                          <span className="pr-volume-track"><span className="pr-volume-bar" style={{ width: "29%" }} /></span>
                          <span className="pr-volume-value">$12.0M</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Parts maker</td>
                      <td>
                        <div className="pr-volume">
                          <span className="pr-volume-track"><span className="pr-volume-bar" style={{ width: "20%" }} /></span>
                          <span className="pr-volume-value">$8.4M</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>{"Packaging & logistics firm"}</td>
                      <td>
                        <div className="pr-volume">
                          <span className="pr-volume-track"><span className="pr-volume-bar" style={{ width: "15%" }} /></span>
                          <span className="pr-volume-value">$6.1M</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Manufacturer</td>
                      <td>
                        <div className="pr-volume">
                          <span className="pr-volume-track"><span className="pr-volume-bar" style={{ width: "14%" }} /></span>
                          <span className="pr-volume-value">$5.7M</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {" "}
                <p className="pr-panel-footer">
                  No owners. No directors. No supply chain. No wealth links. Ranked by volume only.
                </p>
              </section>
              {" "}
              <section className="pr-side pr-solution" aria-labelledby="solution-heading">
                <h3 id="solution-heading">ContexQ helps you find hidden connections.</h3>
                {" "}
                <p className="pr-subline">Ownership and relationship links reveal opportunities beyond the list.</p>
                {" "}
                <div className="pr-graph-scroll">
                  <svg className="pr-graph-svg" viewBox="0 0 1080 320" role="img" aria-label="Your borrower links to Steel supplier and Packaging firm, both link to Shared director, who links to Parent group and two new opportunities.">
                    <g aria-hidden="true">
                      <path className="pr-link-customer" d="M175 170 C205 170 205 90 235 90" />
                      <path className="pr-link-customer" d="M175 170 C205 170 205 250 235 250" />
                      <path className="pr-link-hidden" d="M390 90 C435 90 445 170 500 170" />
                      <path className="pr-link-hidden" d="M390 250 C435 250 445 170 500 170" />
                      <path className="pr-link-opportunity" d="M655 170 H755" />
                      <path className="pr-link-opportunity" d="M895 170 C910 170 910 90 915 90" />
                      <path className="pr-link-opportunity" d="M895 170 C910 170 910 250 915 250" />
                    </g>
                    <g className="pr-graph-pill pr-hidden-label">
                      <rect x="399" y="22" width="90" height="32" rx="16" />
                      <text x="444" y="38">hidden link</text>
                    </g>
                    <g className="pr-node pr-customer">
                      <rect x="20" y="140" width="155" height="60" rx="14" />
                      <text x="97.5" y="170">Your borrower</text>
                    </g>
                    <g className="pr-node pr-supplier-node">
                      <rect x="235" y="65" width="155" height="50" rx="12" />
                      <text x="312.5" y="90">Steel supplier</text>
                    </g>
                    <g className="pr-node pr-supplier-node">
                      <rect x="235" y="225" width="155" height="50" rx="12" />
                      <text x="312.5" y="250">Packaging firm</text>
                    </g>
                    <g className="pr-node pr-director">
                      <rect x="500" y="140" width="155" height="60" rx="14" />
                      <text x="577.5" y="170">Shared director</text>
                    </g>
                    <g className="pr-graph-pill">
                      <rect x="488" y="211" width="179" height="34" rx="17" />
                      <text x="577.5" y="228">Owner · wealth client</text>
                    </g>
                    <g className="pr-graph-pill pr-graph-pill-news">
                      <rect x="700" y="99" width="196" height="34" rx="17" />
                      <text x="800" y="116">Local-language news signal</text>
                    </g>
                    <g className="pr-node pr-parent">
                      <rect x="755" y="140" width="140" height="60" rx="14" />
                      <text x="825" y="170">Parent group</text>
                    </g>
                    <g className="pr-node pr-opportunity">
                      <circle className="pr-opportunity-ring" cx="990" cy="90" r="90" />
                      <rect x="908" y="65" width="168" height="60" rx="12" />
                      <text x="990" y="90">Unbanked subsidiary</text>
                    </g>
                    <g className="pr-node pr-jv">
                      <rect x="915" y="225" width="150" height="50" rx="12" />
                      <text x="990" y="250">Unbanked JV</text>
                    </g>
                  </svg>
                </div>
                {" "}
                <ul className="pr-legend" aria-label="Graph legend">
                  <li>
                    <span className="pr-legend-mark" />
                    Your customer
                  </li>
                  {" "}
                  <li>
                    <span className="pr-legend-mark pr-legend-mark-existing" />
                    Existing link
                  </li>
                  {" "}
                  <li>
                    <span className="pr-legend-mark pr-legend-mark-hidden" />
                    Hidden link
                  </li>
                  {" "}
                  <li>
                    <span className="pr-legend-mark pr-legend-mark-opportunity" />
                    New opportunity
                  </li>
                </ul>
                {" "}
                <p className="pr-panel-footer">Owners, directors, supply chain and wealth links, ranked by opportunity.</p>
              </section>
            </div>
            {" "}
            <p className="pr-close">
              Instead of chasing referrals, scanning the same lists and reading only English press, you find buyers and suppliers directly, work from a clear customer record and see hidden group links through clients you already know.
            </p>
          </div>
          {" "}
          <div className="mob-only w-full max-w-[420px] mx-auto px-5 py-16">
            <h2 className="text-[#0B1B2E] text-[28px] leading-[1.25] font-bold tracking-tight mb-4">
              {" Today you see a list. The opportunity sits just beyond it. "}
            </h2>
            {" "}
            <p className="text-slate-light text-[16px] leading-[1.6] mb-8">
              {" You see counterparties ranked by volume. The buyers, suppliers and owners behind them stay out of sight, so good opportunities arrive late, or never. "}
            </p>
            {" "}
            <div className="flex flex-col items-center w-full">
              <div className="w-full bg-navy border border-[#1C2C45] rounded-[14px] p-5 text-left text-slate-dark shadow-sm">
                <h3 className="text-white font-bold text-[18px] leading-snug mb-1">
                  {" Banks today see a flat list of unconnected counterparties. "}
                </h3>
                {" "}
                <p className="text-[14px] text-slate-dark mb-5">{" Top counterparties by payment volume. "}</p>
                {" "}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-[14px] font-medium text-white mb-1.5">
                      <span>Steel supplier</span>
                      {" "}
                      <span>$41.2M</span>
                    </div>
                    {" "}
                    <div className="w-full h-2 bg-[#12233C] rounded-full overflow-hidden">
                      <div className="h-full bg-[#758AA8] rounded-full" style={{ width: "100%" }} />
                    </div>
                  </div>
                  {" "}
                  <div>
                    <div className="flex justify-between text-[14px] font-medium text-white mb-1.5">
                      <span>Chemicals trader</span>
                      {" "}
                      <span>$12.0M</span>
                    </div>
                    {" "}
                    <div className="w-full h-2 bg-[#12233C] rounded-full overflow-hidden">
                      <div className="h-full bg-[#758AA8] rounded-full" style={{ width: "29%" }} />
                    </div>
                  </div>
                  {" "}
                  <div>
                    <div className="flex justify-between text-[14px] font-medium text-white mb-1.5">
                      <span>Parts maker</span>
                      {" "}
                      <span>$8.4M</span>
                    </div>
                    {" "}
                    <div className="w-full h-2 bg-[#12233C] rounded-full overflow-hidden">
                      <div className="h-full bg-[#758AA8] rounded-full" style={{ width: "20%" }} />
                    </div>
                  </div>
                  {" "}
                  <div>
                    <div className="flex justify-between text-[14px] font-medium text-white mb-1.5">
                      <span>{"Packaging & logistics firm"}</span>
                      {" "}
                      <span>$6.1M</span>
                    </div>
                    {" "}
                    <div className="w-full h-2 bg-[#12233C] rounded-full overflow-hidden">
                      <div className="h-full bg-[#758AA8] rounded-full" style={{ width: "15%" }} />
                    </div>
                  </div>
                  {" "}
                  <div>
                    <div className="flex justify-between text-[14px] font-medium text-white mb-1.5">
                      <span>Manufacturer</span>
                      {" "}
                      <span>$5.7M</span>
                    </div>
                    {" "}
                    <div className="w-full h-2 bg-[#12233C] rounded-full overflow-hidden">
                      <div className="h-full bg-[#758AA8] rounded-full" style={{ width: "14%" }} />
                    </div>
                  </div>
                </div>
                {" "}
                <div className="pt-3 border-t border-[#1C2C45] text-[13px] text-[#7A8EA8] leading-relaxed">
                  {" No owners. No directors. No supply chain. No wealth links. Ranked by volume only. "}
                </div>
              </div>
              {" "}
              <div className="my-4 flex flex-col items-center z-10">
                <div className="w-12 h-12 rounded-full bg-blue-accent text-white flex flex-col items-center justify-center shadow-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  {" "}
                  <span className="text-[9px] font-bold uppercase tracking-wider -mt-0.5">Reveal</span>
                </div>
              </div>
              {" "}
              <div className="w-full bg-dark-card border border-[#17273F] rounded-[14px] p-5 text-left text-slate-dark shadow-sm">
                <h3 className="text-white font-bold text-[18px] leading-snug mb-1">
                  {" ContexQ helps you find hidden connections. "}
                </h3>
                {" "}
                <p className="text-[14px] text-slate-dark mb-6">
                  {" Ownership and relationship links reveal opportunities beyond the list. "}
                </p>
                {" "}
                <div className="w-full py-2 flex flex-col items-center">
                  <div className="px-4 py-2 rounded-[14px] bg-[#102747] border border-blue-accent text-white text-[15px] font-semibold text-center shadow-sm">
                    {" Your borrower "}
                  </div>
                  {" "}
                  <div className="w-full h-8 flex justify-center items-center relative">
                    <svg className="w-[260px] h-8" viewBox="0 0 260 32" fill="none">
                      <path d="M130 0 V12 L50 20 V32" stroke="#2F80FF" strokeWidth="2" />
                      <path d="M130 0 V12 L210 20 V32" stroke="#2F80FF" strokeWidth="2" />
                    </svg>
                  </div>
                  {" "}
                  <div className="grid grid-cols-2 gap-3 w-full max-w-[310px]">
                    <div className="bg-[#112035] border border-[#233857] text-[#C2D3EB] text-[14px] font-medium py-2 px-2 text-center rounded-[12px]">
                      {" Steel supplier "}
                    </div>
                    {" "}
                    <div className="bg-[#112035] border border-[#233857] text-[#C2D3EB] text-[14px] font-medium py-2 px-2 text-center rounded-[12px]">
                      {" Packaging firm "}
                    </div>
                  </div>
                  {" "}
                  <div className="w-full h-8 flex justify-center items-center relative">
                    <svg className="w-[260px] h-8" viewBox="0 0 260 32" fill="none">
                      <path d="M60 0 V10 L130 20 V32" stroke="#F5A623" strokeWidth="2" strokeDasharray="4 3" />
                      <path d="M200 0 V10 L130 20 V32" stroke="#F5A623" strokeWidth="2" strokeDasharray="4 3" />
                    </svg>
                  </div>
                  {" "}
                  <div className="flex flex-col items-center gap-1.5 w-full">
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <div className="bg-[#2B1F0A] border border-amber-link text-[#FFD182] text-[14px] font-semibold py-1.5 px-3 rounded-[12px]">
                        {" Shared director "}
                      </div>
                      {" "}
                      <span className="text-[12px] font-medium text-amber-link bg-[#38260B] border border-[#523A12] px-2 py-0.5 rounded-full">
                        {" Owner · wealth client "}
                      </span>
                    </div>
                    {" "}
                    <span className="text-[12px] font-semibold text-amber-link tracking-wide uppercase">{" [hidden link] "}</span>
                  </div>
                  {" "}
                  <div className="w-1 h-7 bg-opportunity-green my-1" />
                  {" "}
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <div className="bg-[#0C2B1F] border border-opportunity-green text-[#A5F3D1] text-[14px] font-semibold py-1.5 px-3 rounded-[12px] shadow-green-subtle">
                      {" Parent group "}
                    </div>
                    {" "}
                    <span className="text-[12px] text-slate-dark bg-[#142339] border border-[#233A59] px-2 py-0.5 rounded-full">
                      {" Local-language news signal "}
                    </span>
                  </div>
                  {" "}
                  <div className="w-full h-8 flex justify-center items-center relative">
                    <svg className="w-[260px] h-8" viewBox="0 0 260 32" fill="none">
                      <path d="M130 0 V12 L50 20 V32" stroke="#22C58B" strokeWidth="2" />
                      <path d="M130 0 V12 L210 20 V32" stroke="#22C58B" strokeWidth="2" />
                    </svg>
                  </div>
                  {" "}
                  <div className="grid grid-cols-2 gap-3 w-full max-w-[310px] mb-6">
                    <div className="p-1 rounded-[14px] bg-[#22C58B]/15 border border-opportunity-green/40 shadow-green-subtle">
                      <div className="bg-[#0C2B1F] border border-opportunity-green text-white text-[14px] font-semibold py-2 px-2 text-center rounded-[10px]">
                        {" Unbanked subsidiary "}
                      </div>
                    </div>
                    {" "}
                    <div className="flex items-center">
                      <div className="w-full bg-[#0C2B1F] border border-opportunity-green text-[#A5F3D1] text-[14px] font-semibold py-2 px-2 text-center rounded-[12px] shadow-green-subtle">
                        {" Unbanked JV "}
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div className="w-full bg-[#0A182B] border border-[#192B45] rounded-[14px] p-3 mb-4">
                    <div className="grid grid-cols-2 gap-2 text-[13px] text-slate-dark">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-accent shrink-0" />
                        {" "}
                        <span>Your customer</span>
                      </div>
                      {" "}
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#758AA8] shrink-0" />
                        {" "}
                        <span>Existing link</span>
                      </div>
                      {" "}
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-link shrink-0" />
                        {" "}
                        <span>Hidden link</span>
                      </div>
                      {" "}
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-opportunity-green shrink-0 shadow-green-subtle" />
                        {" "}
                        <span>New opportunity</span>
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div className="w-full pt-3 border-t border-[#17273F] text-[13px] text-[#7A8EA8] leading-relaxed">
                    {" Owners, directors, supply chain and wealth links, ranked by opportunity. "}
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <p className="text-slate-light text-[16px] leading-[1.6] text-center mt-8">
              {" Instead of chasing referrals, scanning the same lists and reading only English press, you find buyers and suppliers directly, work from a clear customer record and see hidden group links through clients you already know. "}
            </p>
          </div>
        </section>
        {" "}
        <section className="scoring" id="six-domain-scoring" aria-labelledby="scoring-title">
          <div className="scoring-wrap desk-only">
            <header className="scoring-heading">
              <h2 id="scoring-title">
                {"Every customer, "}
                <em>understood from every angle.</em>
              </h2>
              {" "}
              <p className="scoring-intro">
                Once the connections are clear, ContexQ reads each customer for risk and opportunity, so you know where to act first.
              </p>
            </header>
            {" "}
            <div className="scoring-hub" aria-label="Six customer scoring domains">
              <svg className="hub-connections" viewBox="0 0 1000 620" preserveAspectRatio="none" aria-hidden="true">
                <path d="M500 310L500 60M500 310L716.5 185M500 310L716.5 435M500 310L500 560M500 310L283.5 435M500 310L283.5 185" />
              </svg>
              {" "}
              <button className="hub-spoke spoke-financial" type="button" aria-describedby="tip-financial">
                <svg className="spoke-graph" viewBox="0 0 64 34" aria-hidden="true">
                  <path d="M4 30h56M12 27V18h9v9M28 27V11h9v16M44 27V4h9v23" />
                </svg>
                {" "}
                <span className="spoke-label">Financial health</span>
                {" "}
                <span className="spoke-tip" id="tip-financial" role="tooltip">Spot stress early.</span>
              </button>
              {" "}
              <button className="hub-spoke spoke-people" type="button" aria-describedby="tip-people">
                <svg className="spoke-graph" viewBox="0 0 64 34" aria-hidden="true">
                  <circle cx="12" cy="9" r="5" />
                  <path d="M4 29v-5c0-5 3-8 8-8s8 3 8 8v5M24 17h14M38 17l8-8M38 17l8 8M50 9h8M50 25h8" />
                </svg>
                {" "}
                <span className="spoke-label">People and ownership</span>
                {" "}
                <span className="spoke-tip" id="tip-people" role="tooltip">Know who decides, and who already knows them.</span>
              </button>
              {" "}
              <button className="hub-spoke spoke-footprint" type="button" aria-describedby="tip-footprint">
                <svg className="spoke-graph" viewBox="0 0 64 34" aria-hidden="true">
                  <path d="M31 3c-8 0-14 6-14 14 0 8 14 15 14 15s14-7 14-15c0-8-6-14-14-14Z" />
                  <circle cx="31" cy="17" r="4" />
                  <circle cx="7" cy="27" r="2" />
                  <circle cx="57" cy="8" r="2" />
                </svg>
                {" "}
                <span className="spoke-label">Footprint</span>
                {" "}
                <span className="spoke-tip" id="tip-footprint" role="tooltip">See where the business really operates.</span>
              </button>
              {" "}
              <button className="hub-spoke spoke-money" type="button" aria-describedby="tip-money">
                <svg className="spoke-graph" viewBox="0 0 64 34" aria-hidden="true">
                  <path d="M3 26h11l7-3 7 2 8-16 7 13 7-3 8 2 5-4" />
                  <path d="m55 13 6 4-6 5" />
                </svg>
                {" "}
                <span className="spoke-label">Money movement</span>
                {" "}
                <span className="spoke-tip" id="tip-money" role="tooltip">Read intent in how money flows.</span>
              </button>
              {" "}
              <button className="hub-spoke spoke-sustainability" type="button" aria-describedby="tip-sustainability">
                <svg className="spoke-graph" viewBox="0 0 64 34" aria-hidden="true">
                  <circle cx="15" cy="17" r="12" />
                  <path d="M3 17h24M15 5c5 4 7 8 7 12s-2 8-7 12M15 5c-5 4-7 8-7 12s2 8 7 12M15 5v24M38 9h22v16H38zM42 17h14" />
                </svg>
                {" "}
                <span className="spoke-label">Sustainability</span>
                {" "}
                <span className="spoke-tip" id="tip-sustainability" role="tooltip">Back real progress, not greenwashing.</span>
              </button>
              {" "}
              <button className="hub-spoke spoke-news" type="button" aria-describedby="tip-news">
                <svg className="spoke-graph" viewBox="0 0 64 34" aria-hidden="true">
                  <path d="M7 3h18l7 7v21H7zM25 3v8h7M12 16h14M12 21h14M12 26h10M34 18h10M44 18l7-7M44 18l7 7" />
                  <circle cx="55" cy="9" r="3" />
                  <circle cx="55" cy="27" r="3" />
                </svg>
                {" "}
                <span className="spoke-label">News and events</span>
                {" "}
                <span className="spoke-tip" id="tip-news" role="tooltip">Know what matters before it reaches your book.</span>
              </button>
              {" "}
              <div className="hub-customer">
                <span className="customer-orbit" aria-hidden="true" />
                {" "}
                <span className="customer-core">
                  {" "}
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <circle cx="24" cy="15" r="8" />
                    <path d="M9 40c0-9 6-15 15-15s15 6 15 15M24 28v12" />
                  </svg>
                  {" "}
                </span>
                {" "}
                <strong>Your customer</strong>
                {" "}
                <span className="hub-tagline">
                  {"Risk "}
                  <b>↔</b>
                  {" Opportunity"}
                </span>
              </div>
            </div>
          </div>
          {" "}
          <div className="mob-only w-full max-w-[420px] mx-auto px-5 py-16">
            <h2 className="text-white text-[28px] leading-[1.25] font-bold tracking-tight mb-4">
              {" Every customer, understood from every angle. "}
            </h2>
            {" "}
            <p className="text-slate-dark text-[16px] leading-[1.6] mb-8">
              {" Once the connections are clear, ContexQ reads each customer for risk and opportunity, so you know where to act first. "}
            </p>
            {" "}
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#0E223D] border-2 border-blue-accent flex items-center justify-center text-blue-accent shadow-sm mb-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              {" "}
              <span className="text-white text-[15px] font-semibold mb-1">Your customer</span>
              {" "}
              <span className="px-3 py-1 bg-[#102035] border border-[#213754] text-[13px] text-slate-dark rounded-full font-medium">
                {" Risk ↔ Opportunity "}
              </span>
              {" "}
              <div className="w-0.5 h-6 bg-blue-accent/60 my-2" />
            </div>
            {" "}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-dark-card border border-[#162740] rounded-[14px] p-3.5 flex flex-col justify-start">
                <div className="w-8 h-8 rounded-[8px] bg-[#0E2038] text-blue-accent flex items-center justify-center mb-2.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                {" "}
                <h4 className="text-white font-bold text-[15px] leading-tight mb-1">Financial health</h4>
                {" "}
                <p className="text-slate-dark text-[13px] leading-snug">Spot stress early.</p>
              </div>
              {" "}
              <div className="bg-dark-card border border-[#162740] rounded-[14px] p-3.5 flex flex-col justify-start">
                <div className="w-8 h-8 rounded-[8px] bg-[#0E2038] text-blue-accent flex items-center justify-center mb-2.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                {" "}
                <h4 className="text-white font-bold text-[15px] leading-tight mb-1">People and ownership</h4>
                {" "}
                <p className="text-slate-dark text-[13px] leading-snug">Know who decides, and who already knows them.</p>
              </div>
              {" "}
              <div className="bg-dark-card border border-[#162740] rounded-[14px] p-3.5 flex flex-col justify-start">
                <div className="w-8 h-8 rounded-[8px] bg-[#0E2038] text-blue-accent flex items-center justify-center mb-2.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                {" "}
                <h4 className="text-white font-bold text-[15px] leading-tight mb-1">Footprint</h4>
                {" "}
                <p className="text-slate-dark text-[13px] leading-snug">See where the business really operates.</p>
              </div>
              {" "}
              <div className="bg-dark-card border border-[#162740] rounded-[14px] p-3.5 flex flex-col justify-start">
                <div className="w-8 h-8 rounded-[8px] bg-[#0E2038] text-blue-accent flex items-center justify-center mb-2.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                {" "}
                <h4 className="text-white font-bold text-[15px] leading-tight mb-1">Money movement</h4>
                {" "}
                <p className="text-slate-dark text-[13px] leading-snug">Read intent in how money flows.</p>
              </div>
              {" "}
              <div className="bg-dark-card border border-[#162740] rounded-[14px] p-3.5 flex flex-col justify-start">
                <div className="w-8 h-8 rounded-[8px] bg-[#0E2038] text-blue-accent flex items-center justify-center mb-2.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                {" "}
                <h4 className="text-white font-bold text-[15px] leading-tight mb-1">Sustainability</h4>
                {" "}
                <p className="text-slate-dark text-[13px] leading-snug">Back real progress, not greenwashing.</p>
              </div>
              {" "}
              <div className="bg-dark-card border border-[#162740] rounded-[14px] p-3.5 flex flex-col justify-start">
                <div className="w-8 h-8 rounded-[8px] bg-[#0E2038] text-blue-accent flex items-center justify-center mb-2.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                {" "}
                <h4 className="text-white font-bold text-[15px] leading-tight mb-1">News and events</h4>
                {" "}
                <p className="text-slate-dark text-[13px] leading-snug">Know what matters before it reaches your book.</p>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="help" id="how-we-help">
          <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
            <defs>
              <marker id="h-ar-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0L10 5L0 10z" fill="#2F86FF" />
              </marker>
              <marker id="h-ar-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0L10 5L0 10z" fill="#34D399" />
              </marker>
              <marker id="h-ar-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0L10 5L0 10z" fill="#F5A524" />
              </marker>
            </defs>
          </svg>
          {" "}
          <div className="desk-only">
            <div className="help__inner">
              <h2>
                {"How ContexQ helps you "}
                <em>win the right clients.</em>
              </h2>
              {" "}
              <p className="help__lead">
                ContexQ does the digging across records, registries and local news, so you know who to call, why it matters and who can introduce you.
              </p>
              {" "}
              <div className="help__grid">
                <article className="help__card">
                  <h3>Find clients you didn’t know existed</h3>
                  {" "}
                  <p>
                    Links the people and companies behind your customers. A quiet account’s director, for example, turns out to run several growing companies that don’t bank with you yet.
                  </p>
                  {" "}
                  <div className="help__viz">
                    <svg viewBox="0 0 560 200" role="img" aria-label="A quiet account leads to a director, who runs several companies that are not yet your clients.">
                      <g className="ic s-grey">
                        <rect x="58" y="58" width="44" height="44" rx="9" />
                        <circle cx="80" cy="80" r="9" />
                        <path d="M80 66v5M80 89v5M66 80h5M89 80h5" />
                      </g>
                      <text className="t-grey" x="80" y="132" textAnchor="middle">Quiet account</text>
                      <line className="ln s-blue" x1="114" y1="80" x2="205" y2="80" markerEnd="url(#h-ar-blue)" />
                      <g className="ic s-blue">
                        <circle cx="250" cy="70" r="9" />
                        <path d="M233 98a17 17 0 0 1 34 0" />
                      </g>
                      <text className="t-white" x="250" y="132" textAnchor="middle">Director</text>
                      <line className="ln dash s-amber" x1="288" y1="82" x2="375" y2="55" markerEnd="url(#h-ar-amber)" />
                      <line className="ln dash s-amber" x1="288" y1="82" x2="375" y2="82" markerEnd="url(#h-ar-amber)" />
                      <line className="ln dash s-amber" x1="288" y1="82" x2="375" y2="109" markerEnd="url(#h-ar-amber)" />
                      <circle className="node" cx="392" cy="55" r="9" />
                      <circle className="node" cx="392" cy="82" r="9" />
                      <circle className="node" cx="392" cy="109" r="9" />
                      <text className="t-green" x="392" y="152" textAnchor="middle">Not yet your clients</text>
                    </svg>
                  </div>
                  {" "}
                  <span className="help__chip">New clients to approach</span>
                </article>
                {" "}
                <article className="help__card">
                  <h3>Walk in through a warm door</h3>
                  {" "}
                  <p>
                    Shows who already knows whom, so you start with an introduction, not a cold call. A shared agent reveals a family group, and the founder’s daughter already banks with you.
                  </p>
                  {" "}
                  <div className="help__viz">
                    <svg viewBox="0 0 560 200" role="img" aria-label="A registered agent leads to a business group, then to the founder's daughter, who already banks with you.">
                      <g className="ic s-grey">
                        <circle cx="70" cy="70" r="9" />
                        <path d="M53 98a17 17 0 0 1 34 0" />
                      </g>
                      <text className="t-grey" x="70" y="132" textAnchor="middle">Registered agent</text>
                      <line className="ln dot s-amber" x1="100" y1="76" x2="190" y2="76" markerEnd="url(#h-ar-amber)" />
                      <g className="ic s-amber">
                        <rect x="199" y="50" width="26" height="48" rx="3" />
                        <rect x="225" y="64" width="16" height="34" rx="3" />
                        <path d="M206 62h4M214 62h4M206 72h4M214 72h4M206 82h4M214 82h4" />
                      </g>
                      <text className="t-yellow" x="215" y="132" textAnchor="middle">Business group</text>
                      <line className="ln s-green" x1="250" y1="76" x2="328" y2="76" markerEnd="url(#h-ar-green)" />
                      <g className="ic s-green">
                        <circle cx="355" cy="70" r="9" />
                        <path d="M338 98a17 17 0 0 1 34 0" />
                      </g>
                      <text className="t-green" x="355" y="132" textAnchor="middle">Founder’s daughter</text>
                      <line className="ln s-blue" x1="388" y1="76" x2="466" y2="76" markerEnd="url(#h-ar-blue)" />
                      <g className="ic s-blue">
                        <polygon points="471,66 495,50 519,66" />
                        <path d="M473 98h44M479 70v24M489 70v24M501 70v24M511 70v24" />
                      </g>
                      <text className="t-blue" x="495" y="132" textAnchor="middle">Your bank</text>
                    </svg>
                  </div>
                  {" "}
                  <span className="help__chip">A warm way in</span>
                </article>
                {" "}
                <article className="help__card">
                  <h3>Hear it before everyone else</h3>
                  {" "}
                  <p>
                    Reads local-language news and notices before they reach English media. When your borrower’s directors join a competitor, you hear about it first.
                  </p>
                  {" "}
                  <div className="help__viz">
                    <svg viewBox="0 0 560 200" role="img" aria-label="Local press reports the news first. English media follows later. The gap is your head start.">
                      <g>
                        <rect className="paper-on" x="60" y="50" width="100" height="70" rx="9" />
                        <rect x="70" y="60" width="28" height="18" rx="3" fill="#34D399" fillOpacity=".7" />
                        <path className="ic s-green" d="M106 62h44M106 70h44M70 90h80M70 100h60" />
                      </g>
                      <text className="t-green" x="110" y="152" textAnchor="middle">Local press</text>
                      <rect className="pill" x="215" y="46" width="130" height="28" rx="14" />
                      <text className="t-amber" x="280" y="65" textAnchor="middle" style={{ fontWeight: "600" }}>Your head start</text>
                      <line className="ln dash s-amber" x1="190" y1="92" x2="378" y2="92" markerEnd="url(#h-ar-amber)" />
                      <g>
                        <rect className="paper-off" x="400" y="50" width="100" height="70" rx="9" />
                        <rect x="410" y="60" width="28" height="18" rx="3" fill="#46566f" fillOpacity=".8" />
                        <path className="ic" style={{ stroke: "#46566f" }} d="M446 62h44M446 70h44M410 90h80M410 100h60" />
                      </g>
                      <text className="t-grey" x="450" y="152" textAnchor="middle">English media</text>
                    </svg>
                  </div>
                  {" "}
                  <span className="help__chip">A head start on the news</span>
                </article>
                {" "}
                <article className="help__card">
                  <h3>Be first with the right financing</h3>
                  {" "}
                  <p>
                    Connects your customers’ suppliers to contracts and tenders as they appear. A Mandarin tender leads to a supplier’s parent winning a major contract, and you offer the financing first.
                  </p>
                  {" "}
                  <div className="help__viz">
                    <svg viewBox="0 0 560 200" role="img" aria-label="A tender notice leads to a supplier, then its parent group, then a major contract.">
                      <g className="ic s-amber">
                        <rect x="56" y="52" width="28" height="40" rx="4" />
                        <path d="M62 66h16M62 74h16M62 82h10" />
                      </g>
                      <text className="t-white" x="70" y="122" textAnchor="middle">Tender notice</text>
                      <text className="t-amber" x="70" y="144" textAnchor="middle">采购公告</text>
                      <line className="ln dot s-amber" x1="100" y1="72" x2="190" y2="72" markerEnd="url(#h-ar-amber)" />
                      <g className="ic s-blue">
                        <circle cx="212" cy="64" r="8" />
                        <path d="M197 92a15 15 0 0 1 30 0" />
                        <rect x="222" y="78" width="14" height="14" rx="2" />
                      </g>
                      <text className="t-blue" x="215" y="122" textAnchor="middle">Supplier</text>
                      <line className="ln s-blue" x1="250" y1="72" x2="328" y2="72" markerEnd="url(#h-ar-blue)" />
                      <g className="ic s-blue">
                        <circle cx="346" cy="64" r="8" />
                        <path d="M331 92a15 15 0 0 1 30 0" />
                        <circle cx="368" cy="60" r="7" />
                        <path d="M364 84a12 12 0 0 1 16 8" />
                      </g>
                      <text className="t-white" x="355" y="122" textAnchor="middle">Parent group</text>
                      <line className="ln s-green" x1="388" y1="72" x2="466" y2="72" markerEnd="url(#h-ar-green)" />
                      <g className="ic s-green">
                        <rect x="481" y="52" width="28" height="40" rx="4" />
                        <path d="M487 64h16M487 72h10M488 82l5 5 9-10" />
                      </g>
                      <text className="t-green" x="495" y="122" textAnchor="middle">Major contract</text>
                    </svg>
                  </div>
                  {" "}
                  <span className="help__chip">First with the financing</span>
                </article>
              </div>
              {" "}
              <p className="help__note">Scenarios are illustrative.</p>
            </div>
          </div>
          {" "}
          <div className="mob-only w-full max-w-[420px] mx-auto px-5 py-16">
            <h2 className="text-[#0B1B2E] text-[28px] leading-[1.25] font-bold tracking-tight mb-4">
              {" How ContexQ helps you win the right clients. "}
            </h2>
            {" "}
            <p className="text-slate-light text-[16px] leading-[1.6] mb-8">
              {" ContexQ does the digging across records, registries and local news, so you know who to call, why it matters and who can introduce you. "}
            </p>
            {" "}
            <div className="space-y-6">
              <div className="bg-navy border border-[#1B2B44] rounded-[14px] p-5 text-slate-dark shadow-sm">
                <h3 className="text-white font-bold text-[18px] leading-snug mb-2">{" Find clients you didn't know existed. "}</h3>
                {" "}
                <p className="text-[15px] leading-[1.6] text-slate-dark mb-4">
                  {" Links the people and companies behind your customers. A quiet account's director, for example, turns out to run several growing companies that don't bank with you yet. "}
                </p>
                {" "}
                <div className="bg-dark-card border border-[#162740] rounded-[14px] p-4 mb-4 flex flex-col items-center">
                  <div className="px-3 py-1.5 rounded-[10px] bg-[#12233A] border border-[#273E61] text-[#B0C3DD] text-[14px] font-medium">
                    {" Quiet account "}
                  </div>
                  {" "}
                  <div className="text-[#45628A] my-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  {" "}
                  <div className="px-3.5 py-1.5 rounded-[10px] bg-[#0E2648] border border-blue-accent text-white text-[14px] font-semibold">
                    {" Director "}
                  </div>
                  {" "}
                  <div className="text-blue-accent my-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  {" "}
                  <div className="w-full flex flex-col items-center">
                    <div className="grid grid-cols-3 gap-1.5 w-full mb-1.5">
                      <div className="bg-[#0C2B1F] border border-opportunity-green text-opportunity-green text-[12px] font-semibold py-1 px-1 text-center rounded-[8px] shadow-green-subtle">
                        Company A
                      </div>
                      {" "}
                      <div className="bg-[#0C2B1F] border border-opportunity-green text-opportunity-green text-[12px] font-semibold py-1 px-1 text-center rounded-[8px] shadow-green-subtle">
                        Company B
                      </div>
                      {" "}
                      <div className="bg-[#0C2B1F] border border-opportunity-green text-opportunity-green text-[12px] font-semibold py-1 px-1 text-center rounded-[8px] shadow-green-subtle">
                        Company C
                      </div>
                    </div>
                    {" "}
                    <span className="text-[13px] font-medium text-opportunity-green">Not yet your clients</span>
                  </div>
                </div>
                {" "}
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0C2A1E] border border-opportunity-green text-opportunity-green text-[13px] font-semibold shadow-green-subtle">
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-opportunity-green" />
                  {" New clients to approach. "}
                </span>
              </div>
              {" "}
              <div className="bg-navy border border-[#1B2B44] rounded-[14px] p-5 text-slate-dark shadow-sm">
                <h3 className="text-white font-bold text-[18px] leading-snug mb-2">{" Walk in through a warm door. "}</h3>
                {" "}
                <p className="text-[15px] leading-[1.6] text-slate-dark mb-4">
                  {" Shows who already knows whom, so you start with an introduction, not a cold call. A shared agent reveals a family group, and the founder's daughter already banks with you. "}
                </p>
                {" "}
                <div className="bg-dark-card border border-[#162740] rounded-[14px] p-4 mb-4">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#12233A] border border-[#273E61] rounded-[10px] text-[#B0C3DD] text-[14px]">
                      <svg className="w-4 h-4 text-slate-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {" "}
                      <span>Registered agent</span>
                    </div>
                    {" "}
                    <div className="w-0.5 h-3 bg-[#2F4463]" />
                    {" "}
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#12233A] border border-[#273E61] rounded-[10px] text-[#B0C3DD] text-[14px]">
                      <svg className="w-4 h-4 text-slate-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {" "}
                      <span>Business group</span>
                    </div>
                    {" "}
                    <div className="w-0.5 h-3 bg-[#2F4463]" />
                    {" "}
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0C2B1F] border border-opportunity-green rounded-[10px] text-opportunity-green text-[14px] font-semibold shadow-green-subtle">
                      <svg className="w-4 h-4 text-opportunity-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {" "}
                      <span>{"Founder's daughter"}</span>
                    </div>
                    {" "}
                    <div className="w-0.5 h-3 bg-opportunity-green" />
                    {" "}
                    <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#0E2648] border border-blue-accent rounded-[10px] text-white text-[14px] font-semibold">
                      <svg className="w-4 h-4 text-blue-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                      </svg>
                      {" "}
                      <span>Your bank</span>
                    </div>
                  </div>
                </div>
                {" "}
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0C2A1E] border border-opportunity-green text-opportunity-green text-[13px] font-semibold shadow-green-subtle">
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-opportunity-green" />
                  {" A warm way in. "}
                </span>
              </div>
              {" "}
              <div className="bg-navy border border-[#1B2B44] rounded-[14px] p-5 text-slate-dark shadow-sm">
                <h3 className="text-white font-bold text-[18px] leading-snug mb-2">{" Hear it before everyone else. "}</h3>
                {" "}
                <p className="text-[15px] leading-[1.6] text-slate-dark mb-4">
                  {" Reads local-language news and notices before they reach English media. When your borrower's directors join a competitor, you hear about it first. "}
                </p>
                {" "}
                <div className="bg-dark-card border border-[#162740] rounded-[14px] p-4 mb-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col items-center p-2 rounded-[12px] bg-[#0C2B1F] border border-opportunity-green shadow-green-subtle">
                      <svg className="w-6 h-6 text-opportunity-green mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                      {" "}
                      <span className="text-opportunity-green text-[13px] font-semibold">Local press</span>
                    </div>
                    {" "}
                    <div className="flex-1 px-2 flex flex-col items-center">
                      <span className="text-[11px] font-semibold text-amber-link bg-[#2D1F08] border border-[#543A0C] px-2 py-0.5 rounded-full mb-1 whitespace-nowrap">
                        {" Your head start "}
                      </span>
                      {" "}
                      <div className="w-full flex items-center justify-center">
                        <div className="w-full border-t border-dashed border-amber-link" />
                        {" "}
                        <svg className="w-3.5 h-3.5 text-amber-link -ml-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    {" "}
                    <div className="flex flex-col items-center p-2 rounded-[12px] bg-[#122238] border border-[#243A59] opacity-70">
                      <svg className="w-6 h-6 text-[#7288A6] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                      {" "}
                      <span className="text-[#8FA5C2] text-[13px] font-medium">English media</span>
                    </div>
                  </div>
                </div>
                {" "}
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0C2A1E] border border-opportunity-green text-opportunity-green text-[13px] font-semibold shadow-green-subtle">
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-opportunity-green" />
                  {" A head start on the news. "}
                </span>
              </div>
              {" "}
              <div className="bg-navy border border-[#1B2B44] rounded-[14px] p-5 text-slate-dark shadow-sm">
                <h3 className="text-white font-bold text-[18px] leading-snug mb-2">{" Be first with the right financing. "}</h3>
                {" "}
                <p className="text-[15px] leading-[1.6] text-slate-dark mb-4">
                  {" Connects your customers' suppliers to contracts and tenders as they appear. A Mandarin tender leads to a supplier's parent winning a major contract, and you offer the financing first. "}
                </p>
                {" "}
                <div className="bg-dark-card border border-[#162740] rounded-[14px] p-4 mb-4 flex flex-col items-center">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] bg-[#2A1D07] border border-amber-link text-[#FFD68F] text-[14px] font-medium">
                    <span>Tender notice</span>
                    {" "}
                    <span className="text-amber-link font-semibold text-[13px] bg-[#3E2909] px-1.5 py-0.5 rounded">采购公告</span>
                  </div>
                  {" "}
                  <div className="text-[#45628A] my-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  {" "}
                  <div className="px-3 py-1.5 rounded-[10px] bg-[#12233A] border border-[#273E61] text-[#B0C3DD] text-[14px]">
                    {" Supplier "}
                  </div>
                  {" "}
                  <div className="text-[#45628A] my-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  {" "}
                  <div className="px-3.5 py-1.5 rounded-[10px] bg-[#0E2648] border border-blue-accent text-white text-[14px] font-semibold">
                    {" Parent group "}
                  </div>
                  {" "}
                  <div className="text-opportunity-green my-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  {" "}
                  <div className="px-3.5 py-1.5 rounded-[10px] bg-[#0C2B1F] border border-opportunity-green text-opportunity-green text-[14px] font-semibold shadow-green-subtle">
                    {" Major contract "}
                  </div>
                </div>
                {" "}
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0C2A1E] border border-opportunity-green text-opportunity-green text-[13px] font-semibold shadow-green-subtle">
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-opportunity-green" />
                  {" First with the financing. "}
                </span>
              </div>
            </div>
            {" "}
            <p className="text-[14px] text-slate-light mt-6 text-center italic">{" Scenarios are illustrative. "}</p>
          </div>
        </section>
        {" "}
        <section className="reasons" id="why-customers-stay" aria-labelledby="reasons-title">
          <div className="reasons-wrap desk-only">
            <header className="reasons-heading">
              <h2 id="reasons-title">
                Become the bank
                <br />
                <em>they can’t replace.</em>
              </h2>
              {" "}
              <p>
                When you understand a customer’s whole network, you bring more than products, and that is hard for anyone else to copy.
              </p>
            </header>
            {" "}
            <div className="reason-grid">
              <article className="reason-card">
                <div className="reason-meta"><span className="num">01</span></div>
                {" "}
                <div className="reason-copy">
                  <h3>You bring business, not just products.</h3>
                  {" "}
                  <p>Introduce customers to buyers, suppliers and funding schemes they hadn’t found.</p>
                </div>
              </article>
              {" "}
              <article className="reason-card">
                <div className="reason-meta"><span className="num">02</span></div>
                {" "}
                <div className="reason-copy">
                  <h3>You price the whole picture.</h3>
                  {" "}
                  <p>
                    Bank both sides of a supply chain and price the group together, so staying costs less than starting again elsewhere.
                  </p>
                </div>
              </article>
              {" "}
              <article className="reason-card">
                <div className="reason-meta"><span className="num">03</span></div>
                {" "}
                <div className="reason-copy">
                  <h3>You’re already trusted.</h3>
                  {" "}
                  <p>
                    Their decision-maker knows you, and your understanding of their business deepens every year. A new bank starts from nothing.
                  </p>
                </div>
              </article>
            </div>
          </div>
          {" "}
          <div className="mob-only w-full max-w-[420px] mx-auto px-5 py-16">
            <h2 className="text-white text-[28px] leading-[1.25] font-bold tracking-tight mb-4">
              {" Become the bank they can't replace. "}
            </h2>
            {" "}
            <p className="text-slate-dark text-[16px] leading-[1.6] mb-8">
              {" When you understand a customer's whole network, you bring more than products, and that is hard for anyone else to copy. "}
            </p>
            {" "}
            <div className="space-y-4">
              <div className="bg-dark-card border border-[#162740] rounded-[14px] p-5">
                <div className="text-blue-accent font-bold text-[28px] leading-none mb-2">{" 01 "}</div>
                {" "}
                <h3 className="text-white font-bold text-[18px] leading-snug mb-2">
                  {" You bring business, not just products. "}
                </h3>
                {" "}
                <p className="text-slate-dark text-[15px] leading-[1.6]">
                  {" Introduce customers to buyers, suppliers and funding schemes they hadn't found. "}
                </p>
              </div>
              {" "}
              <div className="bg-dark-card border border-[#162740] rounded-[14px] p-5">
                <div className="text-blue-accent font-bold text-[28px] leading-none mb-2">{" 02 "}</div>
                {" "}
                <h3 className="text-white font-bold text-[18px] leading-snug mb-2">{" You price the whole picture. "}</h3>
                {" "}
                <p className="text-slate-dark text-[15px] leading-[1.6]">
                  {" Bank both sides of a supply chain and price the group together, so staying costs less than starting again elsewhere. "}
                </p>
              </div>
              {" "}
              <div className="bg-dark-card border border-[#162740] rounded-[14px] p-5">
                <div className="text-blue-accent font-bold text-[28px] leading-none mb-2">{" 03 "}</div>
                {" "}
                <h3 className="text-white font-bold text-[18px] leading-snug mb-2">{" You're already trusted. "}</h3>
                {" "}
                <p className="text-slate-dark text-[15px] leading-[1.6]">
                  {" Their decision-maker knows you, and your understanding of their business deepens every year. A new bank starts from nothing. "}
                </p>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="portfolio-cta" aria-labelledby="closing-title">
          <div className="portfolio-wrap desk-only">
            <header className="portfolio-heading">
              <h2 id="closing-title">
                {"Skeptical? "}
                <em>Good. Bring your portfolio.</em>
              </h2>
              {" "}
              <div className="portfolio-actions">
                <Link prefetch={false} className="portfolio-button primary cq-cta" href="/contact">Talk to the team</Link>
                {" "}
                <span className="portfolio-email">
                  {"or mail us at "}
                  <a href={"mailto:inquiry@contexq.com?subject=Customer%20intelligence%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20customer%20intelligence.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>inquiry@contexq.com</a>
                </span>
              </div>
              {" "}
              <p>
                We resolve one portfolio, build its networks and hand your coverage team a ranked list of named,
                <br />
                sized opportunities, each with its warm path.
              </p>
            </header>
            {" "}
            <div className="engagement-steps" aria-label="Engagement steps">
              <article className="engagement-step">
                <div className="step-head">
                  <span className="step-number">1</span>
                  {" "}
                  <h3>Discovery workshop · 1-3 sessions.</h3>
                </div>
                {" "}
                <p>
                  Map your data landscape (internal books, trade data, registries, news feeds). Pick one RM portfolio and the scenarios to test.
                </p>
              </article>
              {" "}
              <span className="step-arrow" aria-hidden="true">→</span>
              {" "}
              <article className="engagement-step is-featured">
                <div className="step-head">
                  <span className="step-number">2</span>
                  {" "}
                  <h3>Proof of value · Entity resolution and networks on your data.</h3>
                </div>
                {" "}
                <p>Your coverage team receives a ranked list of named, sized opportunities, each with its warm path.</p>
              </article>
              {" "}
              <span className="step-arrow" aria-hidden="true">→</span>
              {" "}
              <article className="engagement-step">
                <div className="step-head">
                  <span className="step-number">3</span>
                  {" "}
                  <h3>Production · The full platform, portfolio-wide.</h3>
                </div>
                {" "}
                <p>
                  Six-domain scoring, an RM workbench and multi-language signals, refreshed continuously across the portfolio.
                </p>
              </article>
            </div>
          </div>
          {" "}
          <div className="mob-only w-full max-w-[420px] mx-auto px-5 py-16">
            <h2 className="text-white text-[28px] leading-[1.25] font-bold tracking-tight mb-4">
              {" Skeptical? Good. Bring your portfolio. "}
            </h2>
            {" "}
            <p className="text-[#CBD5E1] text-[16px] leading-[1.6] mb-8">
              {" We resolve one portfolio, build its networks and hand your coverage team a ranked list of named, sized opportunities, each with its warm path. "}
            </p>
            {" "}
            <div className="flex flex-col items-center space-y-3 w-full">
              <div className="w-full bg-white border border-[#DCE4F0] rounded-[14px] p-5 shadow-sm text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0" style={{ background: "#F0F5FF", color: "#2F86FF", border: "1px solid #C9D8F3" }}>
                    1
                  </span>
                  {" "}
                  <h3 className="text-[#0B1B2E] font-bold text-[17px]">Discovery workshop · 1-3 sessions</h3>
                </div>
                {" "}
                <p className="text-slate-light text-[15px] leading-[1.6]">
                  {" Map your data landscape (internal books, trade data, registries, news feeds). Pick one RM portfolio and the scenarios to test. "}
                </p>
              </div>
              {" "}
              <div className="text-[#8CA0BA]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              {" "}
              <div className="w-full bg-white border border-[#DCE4F0] rounded-[14px] p-5 shadow-sm text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0" style={{ background: "#F0F5FF", color: "#2F86FF", border: "1px solid #C9D8F3" }}>
                    2
                  </span>
                  {" "}
                  <h3 className="text-[#0B1B2E] font-bold text-[17px]">Proof of value</h3>
                </div>
                {" "}
                <p className="text-slate-light text-[15px] leading-[1.6]">
                  {" Entity resolution and networks on your data. Your coverage team receives a ranked list of named, sized opportunities, each with its warm path. "}
                </p>
              </div>
              {" "}
              <div className="text-[#8CA0BA]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              {" "}
              <div className="w-full bg-white border border-[#DCE4F0] rounded-[14px] p-5 shadow-sm text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0" style={{ background: "#F0F5FF", color: "#2F86FF", border: "1px solid #C9D8F3" }}>
                    3
                  </span>
                  {" "}
                  <h3 className="text-[#0B1B2E] font-bold text-[17px]">Production</h3>
                </div>
                {" "}
                <p className="text-slate-light text-[15px] leading-[1.6]">
                  {" The full platform, portfolio-wide. Six-domain scoring, an RM workbench and multi-language signals, refreshed continuously across the portfolio. "}
                </p>
              </div>
            </div>
            {" "}
            <div className="w-full mt-8">
              <Link prefetch={false} href="/contact" className="w-full h-[48px] bg-blue-accent hover:bg-blue-600 active:scale-[0.98] transition-all text-white font-medium text-[16px] rounded-[6px] flex items-center justify-center shadow-sm mb-3 cq-cta">
                Talk to the team
              </Link>
              {" "}
              <p className="text-center text-[14px] text-[#CBD5E1]">
                {"or mail us at "}
                <a href={"mailto:inquiry@contexq.com?subject=Customer%20intelligence%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20customer%20intelligence.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"} className="text-blue-accent hover:underline font-medium">
                  inquiry@contexq.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
