// Generated from public/html/contexq-knowledge-graphs-ai.html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      // ---- page script ----
      try {
/* ---------- Universe diagram dots ---------- */
(function(){
  var dots=document.getElementById('uniDots'),links=document.getElementById('uniLinks');
  if(!dots) return;
  var s=11;function r(){s=(s*16807)%2147483647;return (s-1)/2147483646;}
  var NS='http://www.w3.org/2000/svg',inner=[];
  function dot(x,y,rad,cls){var c=document.createElementNS(NS,'circle');c.setAttribute('cx',x.toFixed(1));c.setAttribute('cy',y.toFixed(1));c.setAttribute('r',rad);c.setAttribute('class','u-dot '+cls);dots.appendChild(c);}
  for(var i=0;i<150;i++){var a=r()*Math.PI*2,d=Math.sqrt(r())*204,x=250+Math.cos(a)*d,y=262+Math.sin(a)*d;
    var di=Math.hypot(x-300,y-300); if(di<112) continue; dot(x,y,1.6+r()*1.4,'');}
  for(var j=0;j<34;j++){var a2=r()*Math.PI*2,d2=Math.sqrt(r())*88,x2=300+Math.cos(a2)*d2,y2=300+Math.sin(a2)*d2;inner.push([x2,y2]);}
  inner.forEach(function(p,k){var best=[],m;for(m=0;m<inner.length;m++){if(m!==k)best.push([Math.hypot(inner[m][0]-p[0],inner[m][1]-p[1]),m]);}
    best.sort(function(a,b){return a[0]-b[0]});for(var q=0;q<2;q++){if(best[q][1]>k){var l=document.createElementNS(NS,'line');var o=inner[best[q][1]];l.setAttribute('x1',p[0]);l.setAttribute('y1',p[1]);l.setAttribute('x2',o[0]);l.setAttribute('y2',o[1]);l.setAttribute('class','u-link');links.appendChild(l);}}});
  inner.forEach(function(p,k){dot(p[0],p[1],k%4===0?4:2.8,k%3===0?'ext':'in');});
})();

/* ---------- Hero knowledge-graph animation ---------- */
/* Story: information streams flow INTO the ContexQ globe -> the globe glides aside and
   emits resolved entities -> relationships grow into a knowledge graph -> one path comes into focus. */
(function(){
  var cv=document.getElementById('kg'); if(!cv||!cv.getContext) return;
  var ctx=cv.getContext('2d');
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var W=0,H=0,dpr=1,CX=0,CY=0,S=1,small=false;
  var T=28;
  var FONT='"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif';

  var seed=19;function rnd(){seed=(seed*16807)%2147483647;return (seed-1)/2147483646;}
  function clamp(v){return v<0?0:v>1?1:v;}
  function ease(v){v=clamp(v);return v<.5?2*v*v:1-Math.pow(-2*v+2,2)/2;}
  function easeOut(v){v=clamp(v);return 1-Math.pow(1-v,3);}
  function easeOut4(v){v=clamp(v);return 1-Math.pow(1-v,4);}
  function back(v){v=clamp(v);var c=1.5;return 1+(c+1)*Math.pow(v-1,3)+c*Math.pow(v-1,2);}
  function lerp(a,b,u){return a+(b-a)*u;}

  /* ---------------- timeline ---------------- */
  var TL={
    globeForm:.7,          // globe starts forming
    glide:5.9, glideDur:1.3,// globe moves aside
    focus:16.0,
    fadeOut:T-1.8
  };
  var stageBounds=[0,5.9,9.4,16.0,T];
  var captions=[
    'Information from your own systems and external sources flows into ContexQ.',
    'ContexQ resolves it into distinct companies, people and accounts.',
    'Relationships connect them into a knowledge graph.',
    'One path stands out: your customer and a key supplier are owned by the same company.'
  ];

  /* ---------------- graph model ---------------- */
  var nodes=[],edges=[],byId={};
  function addNode(o){o.i=nodes.length;nodes.push(o);if(o.id)byId[o.id]=o;return o;}
  var key=[
    {id:'C',label:'Bank account',kind:'acct',x:-.36,y:.66,z:-.2,appear:7.0},
    {id:'A',label:'Your customer',kind:'co',x:-.56,y:.14,z:-.08,appear:7.25,role:'Owned by the same group'},
    {id:'H',label:'Holding company',kind:'co',x:-.02,y:-.44,z:.04,appear:7.5,role:'Owns both'},
    {id:'M',label:'Your supplier',kind:'co',x:.5,y:.18,z:-.12,appear:7.8,role:'Owned by the same group'},
    {id:'P',label:'Director',kind:'person',x:-.58,y:-.66,z:.3,appear:8.05},
    {id:'E',label:'Shipping partner',kind:'co',x:.86,y:-.3,z:.32,appear:null},
    {id:'V',label:'Lender',kind:'co',x:.34,y:.74,z:.26,appear:null}
  ];
  key.forEach(function(k){k.tier=0;if(k.appear!=null)k.emit=true;addNode(k);});
  var emitted=key.filter(function(k){return k.emit;});
  var path=['A','H','M'];
  var ROLE_T={A:16.5,H:17.5,M:18.6};
  function addEdge(a,b,birth,o){var e={a:a,b:b,birth:birth,dur:o&&o.dur||.9,path:!!(o&&o.path),tier:o&&o.tier!=null?o.tier:1};edges.push(e);return e;}
  addEdge(byId.H,byId.A,9.4,{path:true,tier:0});
  addEdge(byId.H,byId.M,9.7,{path:true,tier:0});
  addEdge(byId.P,byId.H,10.0,{tier:0});
  addEdge(byId.A,byId.C,9.6,{tier:0});
  addEdge(byId.M,byId.E,10.3,{tier:0});
  addEdge(byId.A,byId.V,10.7,{tier:0});
  addEdge(byId.V,byId.M,11.1,{tier:0});
  byId.E.appear=10.3+.9; byId.V.appear=10.7+.9;

  var tier1=[];
  key.forEach(function(k){
    var n=k.id==='A'||k.id==='M'||k.id==='H'?7:5;
    var base=(k.appear||10)+3.0+rnd()*.4;
    for(var j=0;j<n;j++){
      var a=rnd()*Math.PI*2,d=.18+rnd()*.26;
      var c=addNode({tier:1,x:k.x+Math.cos(a)*d,y:k.y+Math.sin(a)*d*.8,z:k.z+(rnd()-.5)*.6});
      var b=Math.max(10.0,base+j*.26+rnd()*.5); if(b>13.0)b=13.0-rnd()*.6;
      addEdge(k,c,b,{dur:.8});c.appear=b+.8;tier1.push(c);
      if(rnd()<.7){
        var m=1+(rnd()<.35?1:0);
        for(var q=0;q<m;q++){
          var a2=a+(rnd()-.5)*1.4,d2=.13+rnd()*.14;
          var g=addNode({tier:1,x:c.x+Math.cos(a2)*d2,y:c.y+Math.sin(a2)*d2*.8,z:c.z+(rnd()-.5)*.4,small:true});
          var b2=c.appear+.15+rnd()*.7; addEdge(c,g,b2,{dur:.7}); g.appear=b2+.7; tier1.push(g);
        }
      }
    }
  });
  for(var i=0,made=0;i<tier1.length&&made<22;i++){
    for(var j=i+1;j<tier1.length;j++){
      var p=tier1[i],o=tier1[j];
      var d=Math.hypot(p.x-o.x,p.y-o.y,p.z-o.z);
      if(d<.3&&d>.12&&rnd()<.35){addEdge(p,o,Math.max(p.appear,o.appear)+.3+rnd()*.6,{dur:.8});made++;break;}
    }
  }
  var bg=[];
  for(var b=0;b<120;b++){bg.push(addNode({tier:2,x:(rnd()-.5)*3.9,y:(rnd()-.5)*2.5,z:.6+rnd()*1.9,ph:rnd()*6.28}));}
  bg.forEach(function(n){
    var best=bg.map(function(o){return [Math.hypot(o.x-n.x,o.y-n.y,(o.z-n.z)*.6),o];}).filter(function(v){return v[1]!==n;}).sort(function(a,b){return a[0]-b[0]});
    for(var k=0;k<2;k++) if(best[k][1].i>n.i) edges.push({a:n,b:best[k][1],tier:2});
  });

  /* ---------------- streams + data fragments ---------------- */
  var streams=[
    {label:'Sanctions and adverse news',col:[207,230,255],chips:['Adverse news: director','Watchlist check']},
    {label:'Company registries',col:[157,180,255],chips:['Registered company record','Director appointment']},
    {label:'Customer records',col:[108,216,245],chips:['Customer profile','Supplier profile']},
    {label:'Ownership filings',col:[95,211,192],chips:['UBO filing: 74% stake','Holding company owns 61%']},
    {label:'Transactions',col:[78,163,230],chips:['Payment to shipping partner','Account activity']}
  ];
  streams.forEach(function(s,k){
    s.strands=[];for(var i=0;i<7;i++)s.strands.push({o:i-3+(rnd()-.5)*.6,ph:rnd(),sp:.16+rnd()*.08});
    s.frags=s.chips.map(function(txt,w){return {t:txt,start:.9+k*.27+w*1.85,dur:2.1};});
  });

  /* ---------------- ContexQ particle globe ---------------- */
  var GN=2400,golden=Math.PI*(3-Math.sqrt(5)),gpts=[];
  for(var gi=0;gi<GN;gi++){
    var gy=1-gi/(GN-1)*2,ring=Math.sqrt(1-gy*gy),th=golden*gi,grr=1+(rnd()-.5)*.012;
    var bucket=rnd()>.91?3:(rnd()<.35?0:(rnd()<.6?1:2));
    gpts.push({x:Math.cos(th)*ring*grr,y:gy*grr,z:Math.sin(th)*ring*grr,b:bucket,s:rnd()>.95?2.2+rnd()*1.1:.6+rnd()*.85});
  }
  // brighter accent particles sitting just above the surface
  for(var ai=0;ai<90;ai++){
    var ay=rnd()*2-1,at=rnd()*Math.PI*2,ar=Math.sqrt(1-ay*ay)*1.01;
    gpts.push({x:Math.cos(at)*ar,y:ay*1.01,z:Math.sin(at)*ar,b:rnd()>.25?4:3,s:1.7+rnd()*1.6,acc:true});
  }
  function makeSprite(r,g,b){
    var c=document.createElement('canvas');c.width=c.height=32;var x=c.getContext('2d');
    var gr=x.createRadialGradient(16,16,0,16,16,16);
    gr.addColorStop(0,'rgba('+r+','+g+','+b+',1)');gr.addColorStop(.22,'rgba('+r+','+g+','+b+',.85)');
    gr.addColorStop(.45,'rgba('+r+','+g+','+b+',.22)');gr.addColorStop(1,'rgba('+r+','+g+','+b+',0)');
    x.fillStyle=gr;x.fillRect(0,0,32,32);return c;
  }
  var sprites=[makeSprite(10,80,200),makeSprite(22,120,240),makeSprite(40,150,255),makeSprite(205,240,255),makeSprite(61,165,255)];

  var G={x:0,y:0,r:1,rot:0};
  var lay={};
  function layout(){
    if(small){
      lay.g1={x:W*.5,y:H*.58,r:Math.min(W,H)*.27};
      lay.g2={x:W*.5,y:H*.115,r:Math.min(W,H)*.105};
      CX=W*.5;CY=H*.6;S=Math.min(W*.4,H*.4);
    } else {
      lay.g1={x:W*.64,y:H*.47,r:Math.min(W,H)*.25};
      lay.g2={x:W*.15,y:H*.47,r:Math.min(W,H)*.155};
      CX=W*.61;CY=H*.47;S=Math.min(W*.33,H*.6);
    }
  }
  function globeAt(t){
    var u=ease((t-TL.glide)/TL.glideDur);
    var form=easeOut4((t-TL.globeForm)/2.6);
    G.x=lerp(lay.g1.x,lay.g2.x,u);G.y=lerp(lay.g1.y,lay.g2.y,u);
    G.r=lerp(lay.g1.r,lay.g2.r,u)*lerp(.08,1,form);
    G.form=form;G.move=u;
  }
  function drawGlobe(t,clock,alpha){
    if(G.form<=0.001||alpha<=0.01)return;
    var R=G.r,rev=clamp(G.form*1.25);
    // settle rotation like a reveal, then a slow constant spin
    var yaw=clock*.12+(1-G.form)*-.65, tilt=-.22*(1-G.form)+.18;
    var cy=Math.cos(yaw),sy=Math.sin(yaw),ct=Math.cos(tilt),st=Math.sin(tilt);
    // body: dark sphere so the globe reads as a solid object
    var body=ctx.createRadialGradient(G.x-R*.35,G.y-R*.4,R*.05,G.x,G.y,R);
    body.addColorStop(0,'rgba(20,60,100,'+(.55*alpha*rev)+')');body.addColorStop(.55,'rgba(6,24,44,'+(.75*alpha*rev)+')');body.addColorStop(1,'rgba(2,8,18,'+(.9*alpha*rev)+')');
    ctx.fillStyle=body;ctx.beginPath();ctx.arc(G.x,G.y,R,0,6.283);ctx.fill();
    // atmosphere
    var atm=ctx.createRadialGradient(G.x,G.y,R*.92,G.x,G.y,R*1.28);
    atm.addColorStop(0,'rgba(26,164,255,'+(.16*alpha*rev)+')');atm.addColorStop(1,'rgba(26,164,255,0)');
    ctx.fillStyle=atm;ctx.beginPath();ctx.arc(G.x,G.y,R*1.28,0,6.283);ctx.fill();
    ctx.save();ctx.globalCompositeOperation='lighter';
    var scaleSz=Math.max(.55,Math.min(1.5,R/120));
    for(var i=0;i<gpts.length;i++){
      var p=gpts[i];
      var x1=p.x*cy-p.z*sy, z1=p.x*sy+p.z*cy;
      var y1=p.y*ct-z1*st, z2=p.y*st+z1*ct;      // z2>0 faces the viewer
      var front=(z2+1)/2;
      var pulse=.82+.22*Math.sin(clock*1.4+p.x*2.1+p.y*3);
      var a=(.18+.82*front*front)*pulse*alpha*rev*(p.acc?(.72+.4*Math.sin(clock*2+p.x*5)):1);
      if(a<.02)continue;
      var sz=p.s*(2.6+2.2*front)*scaleSz*(p.acc?1.25:1);
      ctx.globalAlpha=Math.min(1,a);
      ctx.drawImage(sprites[p.b],G.x+x1*R-sz/2,G.y+y1*R-sz/2,sz,sz);
    }
    ctx.restore();ctx.globalAlpha=1;
    // rim
    ctx.strokeStyle='rgba(97,214,255,'+(.42*alpha*rev)+')';ctx.lineWidth=1;ctx.beginPath();ctx.arc(G.x,G.y,R,0,6.283);ctx.stroke();
    // wordmark
    var wm=clamp((G.form-.55)/.35)*alpha;
    if(wm>0){
      var fs=Math.max(11,R*.2);
      ctx.save();ctx.globalAlpha=wm;ctx.font='500 '+fs+'px '+FONT;
      if('letterSpacing' in ctx)ctx.letterSpacing=(fs*.16).toFixed(1)+'px';
      var w1=ctx.measureText('contex').width,w2=ctx.measureText('q').width,x0=G.x-(w1+w2)/2;
      ctx.shadowColor='rgba(53,202,255,.6)';ctx.shadowBlur=14;ctx.textBaseline='middle';
      ctx.fillStyle='#eaf6ff';ctx.fillText('contex',x0,G.y);ctx.fillStyle='#faab40';ctx.fillText('q',x0+w1,G.y);
      ctx.restore();
    }
  }
  // rim landing point for stream k (no crossings: ordered by start position)
  function rimIn(k,n){
    var ang;
    if(small){ang=(-150+120*(k/(n-1)))*Math.PI/180;}
    else {ang=(230-100*(k/(n-1)))*Math.PI/180;}
    return {x:G.x+Math.cos(ang)*G.r*1.01,y:G.y+Math.sin(ang)*G.r*1.01,ang:ang};
  }

  /* ---------------- projection ---------------- */
  var yaw=0,pitch=0;
  function proj(n){
    var cy=Math.cos(yaw),sy=Math.sin(yaw);
    var x1=n.x*cy-n.z*sy, z1=n.x*sy+n.z*cy;
    var cp=Math.cos(pitch),sp=Math.sin(pitch);
    var y1=n.y*cp-z1*sp, z2=n.y*sp+z1*cp;
    var f=3.4, s=f/(f+z2);
    return {x:CX+x1*s*S, y:CY+y1*s*S, s:s, z:z2};
  }
  var dirty=true,lastStage=-1;
  function resize(){
    var r=cv.getBoundingClientRect();
    dpr=Math.min(2,window.devicePixelRatio||1);
    W=r.width;H=r.height;
    cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    small=W<600;layout();dirty=true;
  }

  /* ---------------- helpers ---------------- */
  function hex(x,y,r){ctx.beginPath();for(var k=0;k<6;k++){var a=Math.PI/6+k*Math.PI/3;var px=x+Math.cos(a)*r,py=y+Math.sin(a)*r;k?ctx.lineTo(px,py):ctx.moveTo(px,py);}ctx.closePath();}
  function diamond(x,y,r){ctx.beginPath();ctx.moveTo(x,y-r);ctx.lineTo(x+r,y);ctx.lineTo(x,y+r);ctx.lineTo(x-r,y);ctx.closePath();}
  function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
  function bez(p0,p1,p2,p3,u){var m=1-u;return {x:m*m*m*p0.x+3*m*m*u*p1.x+3*m*u*u*p2.x+u*u*u*p3.x,y:m*m*m*p0.y+3*m*m*u*p1.y+3*m*u*u*p2.y+u*u*u*p3.y};}
  function pill(text,x,y,a,opt){
    opt=opt||{};
    if(a<=.01) return;
    var fs=opt.fs||(small?11.5:12.5);
    ctx.font='500 '+fs+'px '+FONT;
    var tw=ctx.measureText(text).width, rw=tw;
    var sub=opt.sub, sfs=small?10:10.5;
    if(sub){ctx.font='500 '+sfs+'px '+FONT;rw=Math.max(tw,ctx.measureText(sub).width);}
    var padX=opt.padX||8,h=sub?(fs+sfs+14):(fs+10),w=rw+padX*2;
    var bx=x,by=y-h/2;
    if(opt.align==='center'){bx=x-w/2;}
    else if(opt.align==='left'){bx=x-w;}
    if(!opt.free){if(bx<4)bx=4; if(bx+w>W-4)bx=W-4-w; if(by<4)by=4; if(by+h>H-4)by=H-4-h;}
    ctx.globalAlpha=a;
    rr(bx,by,w,h,4);
    ctx.fillStyle=opt.hl?'rgba(32,22,8,.86)':'rgba(6,21,37,.84)';ctx.fill();
    ctx.strokeStyle=opt.hl?'rgba(250,171,64,.65)':(opt.stroke||'rgba(108,216,245,.28)');
    ctx.lineWidth=1;ctx.stroke();
    ctx.textBaseline='alphabetic';
    if(sub){
      ctx.font='500 '+sfs+'px '+FONT;ctx.fillStyle='#faab40';ctx.fillText(sub,bx+padX,by+5+sfs);
      ctx.font='500 '+fs+'px '+FONT;ctx.fillStyle='#eef6fd';ctx.fillText(text,bx+padX,by+h-7);
    } else {
      ctx.font=(opt.light?'400 ':'500 ')+fs+'px '+FONT;ctx.fillStyle=opt.color||'#e6f2fc';ctx.fillText(text,bx+padX,by+h-6-(fs*.12));
    }
    ctx.globalAlpha=1;
  }

  /* ---------------- frame ---------------- */
  function draw(t,clock){
    ctx.clearRect(0,0,W,H);
    yaw=-.12+.24*Math.sin(clock*.085);
    pitch=.1+.05*Math.sin(clock*.06+1);
    globeAt(t);
    var gA=1-clamp((t-TL.fadeOut)/1.5);
    var focus=ease((t-TL.focus)/1.3);
    var dim=1-.62*focus;
    var P={};nodes.forEach(function(n){P[n.i]=proj(n);});

    // faint background universe (strengthens as the graph forms)
    var bgA=(.28+.5*ease((t-9)/4))*gA*(1-.35*focus);
    ctx.lineWidth=.6;
    edges.forEach(function(e){
      if(e.tier!==2)return;var a=P[e.a.i],b=P[e.b.i];
      ctx.strokeStyle='rgba(110,160,210,'+(.13*bgA*a.s)+')';
      ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
    });
    bg.forEach(function(n){var p=P[n.i];var tw=.75+.25*Math.sin(clock*.6+n.ph);
      ctx.fillStyle='rgba(140,185,225,'+(.5*bgA*tw*p.s)+')';ctx.beginPath();ctx.arc(p.x,p.y,1.5*p.s+.3,0,6.283);ctx.fill();});

    /* ---- 1. information streams flowing INTO the globe ---- */
    var sA=clamp(t/1.0)*(1-clamp((t-TL.glide+.3)/1.2))*gA;
    var arrivals=[];
    if(sA>0){
      var n=streams.length;
      streams.forEach(function(s,k){
        var end=rimIn(k,n);
        var reveal=easeOut((t-k*.18)/2.0);
        var start=small?{x:W*(.1+k*.2),y:-6}:{x:-6,y:H*(.14+k*.17)};
        var dirx=Math.cos(end.ang),diry=Math.sin(end.ang);
        s._geo=[];
        s.strands.forEach(function(st,i){
          var o=st.o*(small?2.6:4.2);
          var p0=small?{x:start.x+o,y:start.y}:{x:start.x,y:start.y+o};
          var p3={x:end.x+o*.08,y:end.y+o*.08};
          var L=Math.max(40,Math.hypot(p3.x-p0.x,p3.y-p0.y)*.42);
          var p1=small?{x:p0.x,y:p0.y+H*.16}:{x:p0.x+(p3.x-p0.x)*.45,y:p0.y};
          var p2={x:p3.x+dirx*L,y:p3.y+diry*L};
          s._geo.push([p0,p1,p2,p3]);
          var c=s.col, grad=ctx.createLinearGradient(p0.x,p0.y,p3.x,p3.y);
          grad.addColorStop(0,'rgba('+c+',0)');grad.addColorStop(.3,'rgba('+c+','+(.24*sA)+')');grad.addColorStop(1,'rgba('+c+','+(.62*sA)+')');
          ctx.strokeStyle=grad;ctx.lineWidth=.8;ctx.beginPath();
          var N=30,lim=Math.max(1,Math.floor(N*reveal));
          for(var q=0;q<=lim;q++){var pt=bez(p0,p1,p2,p3,q/N);q?ctx.lineTo(pt.x,pt.y):ctx.moveTo(pt.x,pt.y);}
          ctx.stroke();
          // particles riding the stream into the globe
          for(var m=0;m<2;m++){var u=(t*st.sp+st.ph+m*.5)%1;if(u>reveal)continue;var pt2=bez(p0,p1,p2,p3,u);
            ctx.fillStyle='rgba('+c+','+(sA*(.35+.65*u))+')';ctx.beginPath();ctx.arc(pt2.x,pt2.y,1.5,0,6.283);ctx.fill();}
        });
        if(!small){var la=sA*clamp((t-.3-k*.18)/.8)*.95;
          ctx.globalAlpha=la;ctx.font='400 12px '+FONT;ctx.fillStyle='#9cbdd6';ctx.fillText(s.label,12,start.y-17);ctx.globalAlpha=1;}
      });
    }

    /* ---- 2. the ContexQ globe ---- */
    drawGlobe(t,clock,gA*(1-.4*focus));

    // data fragments (record chips) travelling along the streams and absorbed by the globe
    if(sA>0){
      streams.forEach(function(s,k){
        if(!s._geo)return;var g=s._geo[3];
        s.frags.forEach(function(f){
          var u=(t-f.start)/f.dur;
          if(u>=1&&u<1.5){arrivals.push({x:g[3].x,y:g[3].y,a:1-(u-1)*2});return;}
          if(u<=0||u>=1)return;
          var e=.22+.78*ease(u),pt=bez(g[0],g[1],g[2],g[3],e);
          var a=clamp(u/.12)*(1-clamp((u-.82)/.18))*gA;
          if(small){ctx.globalAlpha=a;ctx.fillStyle='#dff4ff';ctx.beginPath();ctx.arc(pt.x,pt.y,2.4,0,6.283);ctx.fill();ctx.globalAlpha=1;return;}
          var fs=11*(1-.35*clamp((u-.7)/.3));
          pill(f.t,pt.x,pt.y,a*.95,{align:'center',fs:fs,light:true,color:'#cfe5f5',stroke:'rgba(160,210,240,.38)',free:true,padX:7});
        });
      });
    }
    // absorption flashes on the globe rim
    arrivals.forEach(function(f){
      var a=clamp(f.a)*gA;ctx.strokeStyle='rgba(150,225,255,'+(.8*a)+')';ctx.lineWidth=1.2;
      ctx.beginPath();ctx.arc(f.x,f.y,4+(1-a)*12,0,6.283);ctx.stroke();
      ctx.fillStyle='rgba(220,245,255,'+a+')';ctx.beginPath();ctx.arc(f.x,f.y,2.2,0,6.283);ctx.fill();
    });

    /* ---- 3. bridges: entities emerge from the globe ---- */
    emitted.forEach(function(n){
      var p=P[n.i],e0=n.appear-1.15,pr=easeOut((t-e0)/1.15);
      if(t<e0)return;
      var dx=p.x-G.x,dy=p.y-G.y,ang=Math.atan2(dy,dx);
      var p0={x:G.x+Math.cos(ang)*G.r*1.02,y:G.y+Math.sin(ang)*G.r*1.02};
      var L=G.r*.9;
      var p1={x:p0.x+Math.cos(ang)*L,y:p0.y+Math.sin(ang)*L};
      var p2=small?{x:p.x,y:p.y-(p.y-p0.y)*.45}:{x:p.x-(p.x-p0.x)*.45,y:p.y};
      var p3={x:p.x,y:p.y};
      var onPath=path.indexOf(n.id)>=0;
      var al=(pr<1?.6:.26)*gA*(1-.6*focus);
      ctx.strokeStyle='rgba(53,202,255,'+al+')';ctx.lineWidth=1;
      ctx.beginPath();var N=26,lim=Math.max(1,Math.round(N*pr));
      for(var q=0;q<=lim;q++){var pt=bez(p0,p1,p2,p3,q/N*pr*N/lim);q?ctx.lineTo(pt.x,pt.y):ctx.moveTo(pt.x,pt.y);}
      ctx.stroke();
      if(pr<1){ // travelling entity
        var hd=bez(p0,p1,p2,p3,pr);
        var g=ctx.createRadialGradient(hd.x,hd.y,0,hd.x,hd.y,12);g.addColorStop(0,'rgba(200,240,255,'+(.95*gA)+')');g.addColorStop(1,'rgba(53,202,255,0)');
        ctx.fillStyle=g;ctx.beginPath();ctx.arc(hd.x,hd.y,12,0,6.283);ctx.fill();
      } else if(focus<.5){ // gentle pulse along the bridge
        var u=((t-n.appear)*.35+n.i*.17)%1,pp=bez(p0,p1,p2,p3,u);
        ctx.fillStyle='rgba(160,230,255,'+(.7*gA*(1-focus*2))+')';ctx.beginPath();ctx.arc(pp.x,pp.y,1.6,0,6.283);ctx.fill();
      }
    });

    /* ---- 4. network edges ---- */
    var visEdges=edges.filter(function(e){return e.tier!==2&&t>=e.birth;});
    visEdges.sort(function(a,b){return (P[b.a.i].z+P[b.b.i].z)-(P[a.a.i].z+P[a.b.i].z);});
    visEdges.forEach(function(e){
      var a=P[e.a.i],b=P[e.b.i],pr=easeOut((t-e.birth)/e.dur);
      var ex=lerp(a.x,b.x,pr),ey=lerp(a.y,b.y,pr);
      var depth=clamp(1.25-((a.z+b.z)/2+.6)*.55);
      var al=(e.tier===0?.5:.32)*depth*gA*(e.path?1-.4*focus:dim);
      ctx.strokeStyle='rgba(108,216,245,'+al+')';
      ctx.lineWidth=(e.tier===0?1.1:.8)*(a.s+b.s)/2;
      ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(ex,ey);ctx.stroke();
      if(pr<1){ctx.fillStyle='rgba(180,236,255,'+(.8*gA)+')';ctx.beginPath();ctx.arc(ex,ey,1.6,0,6.283);ctx.fill();}
    });

    /* ---- 5. focus path ---- */
    var segs=[[byId.A,byId.H,16.5],[byId.H,byId.M,17.6]];
    if(focus>0){
      segs.forEach(function(sg){
        var a=P[sg[0].i],b=P[sg[1].i],pr=ease((t-sg[2])/1.0);if(pr<=0)return;
        var ex=lerp(a.x,b.x,pr),ey=lerp(a.y,b.y,pr);
        ctx.lineCap='round';
        ctx.strokeStyle='rgba(250,171,64,'+(.16*gA)+')';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(ex,ey);ctx.stroke();
        ctx.strokeStyle='rgba(250,171,64,'+(.95*gA)+')';ctx.lineWidth=1.8;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(ex,ey);ctx.stroke();
        ctx.lineCap='butt';
      });
      if(t>18.8){var u=((t-18.8)*.32)%1,a0=P[byId.A.i],h0=P[byId.H.i],m0=P[byId.M.i];
        var pp=u<.5?{x:lerp(a0.x,h0.x,u*2),y:lerp(a0.y,h0.y,u*2)}:{x:lerp(h0.x,m0.x,(u-.5)*2),y:lerp(h0.y,m0.y,(u-.5)*2)};
        var g=ctx.createRadialGradient(pp.x,pp.y,0,pp.x,pp.y,10);g.addColorStop(0,'rgba(255,214,150,'+(.9*gA)+')');g.addColorStop(1,'rgba(250,171,64,0)');
        ctx.fillStyle=g;ctx.beginPath();ctx.arc(pp.x,pp.y,10,0,6.283);ctx.fill();}
    }

    /* ---- 6. nodes ---- */
    var vis=nodes.filter(function(n){return n.tier!==2&&n.appear!=null&&t>=n.appear;});
    vis.sort(function(a,b){return P[b.i].z-P[a.i].z;});
    vis.forEach(function(n){
      var p=P[n.i],k=back((t-n.appear)/.55);
      var onPath=path.indexOf(n.id)>=0, hl=onPath&&focus>0&&t>=ROLE_T[n.id];
      var depth=clamp(1.3-(p.z+.6)*.5);
      var al=gA*(onPath?1:dim)*(n.tier===0?1:depth);
      if(n.tier===1){
        var r=(n.small?2.1:3)*p.s*k;
        ctx.fillStyle='rgba(108,216,245,'+(.8*al)+')';ctx.beginPath();ctx.arc(p.x,p.y,r,0,6.283);ctx.fill();
        return;
      }
      var R=(n.kind==='person'?6:n.kind==='acct'?6.5:8.5)*p.s*k*(small?.85:1);
      var col=hl?'250,171,64':'108,216,245';
      var g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,R*4.2);g.addColorStop(0,'rgba('+col+','+(.22*al)+')');g.addColorStop(1,'rgba('+col+',0)');
      ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,R*4.2,0,6.283);ctx.fill();
      var pa=(t-n.appear)/1.1; if(pa>0&&pa<1){ctx.strokeStyle='rgba('+col+','+(.55*(1-pa)*al)+')';ctx.lineWidth=1;ctx.beginPath();ctx.arc(p.x,p.y,R+pa*22,0,6.283);ctx.stroke();}
      ctx.lineWidth=1.5;ctx.strokeStyle='rgba('+col+','+al+')';ctx.fillStyle='rgba(9,34,58,'+al+')';
      if(n.kind==='co'){hex(p.x,p.y,R);ctx.fill();ctx.stroke();hex(p.x,p.y,R*.42);ctx.fillStyle='rgba('+col+','+al+')';ctx.fill();}
      else if(n.kind==='acct'){diamond(p.x,p.y,R);ctx.fill();ctx.stroke();}
      else {ctx.beginPath();ctx.arc(p.x,p.y,R,0,6.283);ctx.fillStyle='rgba(219,234,247,'+al+')';ctx.fill();}
    });

    /* ---- 7. labels ---- */
    var labelIds=small?['A','H','M']:['A','H','M','P','C','E','V'];
    labelIds.forEach(function(id){
      var n=byId[id],p=P[n.i];if(n.appear==null||t<n.appear+.25)return;
      var la=clamp((t-n.appear-.25)/.5)*gA;
      var onPath=path.indexOf(id)>=0;
      var showRole=onPath&&t>=ROLE_T[id];
      if(!onPath) la*=(1-.7*focus);
      var sub=showRole?n.role:null;
      var R=10*p.s;
      if(small){pill(n.label,p.x,p.y+R+(sub?24:16),la,{align:'center',sub:sub,hl:showRole});}
      else{
        ctx.font='500 12.5px '+FONT;var lw=ctx.measureText(n.label).width+26;
        if(id==='M'&&p.x+R+lw>W){pill(n.label,p.x,p.y+R+(sub?26:18),la,{align:'center',sub:sub,hl:showRole});}
        else{var right=p.x+R+lw<W;pill(n.label,right?p.x+R+6:p.x-R-6,p.y,la,{align:right?'right':'left',sub:sub,hl:showRole});}
      }
      if(id==='A'&&t>n.appear+.3&&t<11.2){
        var ra=clamp((t-n.appear-.3)/.5)*(1-clamp((t-10.6)/.6))*gA;
        ctx.globalAlpha=ra;ctx.font='400 11px '+FONT;ctx.fillStyle='#9cc4de';
        if(small)ctx.fillText('3 records, 1 company',p.x-44,p.y+R+40);else ctx.fillText('3 records matched to 1 company',p.x+R+14,p.y+26);
        ctx.globalAlpha=1;
      }
    });
    if(focus>0){
      [[byId.A,byId.H,17.4,'owns 74%'],[byId.H,byId.M,18.5,'owns 61%']].forEach(function(e){
        var a=P[e[0].i],b=P[e[1].i],la=clamp((t-e[2])/.5)*gA;
        var mx=(a.x+b.x)/2,my=(a.y+b.y)/2;
        pill(e[3],mx+(e[0].id==='A'?-12:12),my,la,{align:e[0].id==='A'?'left':'right',fs:small?10.5:11.5,hl:true});
      });
    }

    var st=0;for(var s2=0;s2<4;s2++){if(t>=stageBounds[s2])st=s2;}
    if(st!==lastStage){lastStage=st;setCaption(captions[st]);}
    progSpans.forEach(function(sp,k){var v=clamp((t-stageBounds[k])/(stageBounds[k+1]-stageBounds[k]));sp.style.width=(v*100).toFixed(1)+'%';});
  }

  var capEl=document.getElementById('stageText');
  var progSpans=[].slice.call(document.querySelectorAll('.progress span'));
  var capTimer;
  function setCaption(txt){
    if(reduce||!playing){capEl.textContent=txt;return;}
    capEl.style.opacity=0;clearTimeout(capTimer);
    capTimer=setTimeout(function(){capEl.textContent=txt;capEl.style.opacity=1;},300);
  }

  /* ---------------- loop & controls ---------------- */
  var t=0,clock=0,last=0,playing=!reduce,inView=true;
  var btn=document.getElementById('playToggle'),icoP=document.getElementById('icoPause'),icoG=document.getElementById('icoPlay');
  function syncBtn(){icoP.style.display=playing?'':'none';icoG.style.display=playing?'none':'';btn.setAttribute('aria-label',playing?'Pause animation':'Play animation');}
  btn.addEventListener('click',function(){playing=!playing;if(playing&&t>=T-.1)t=0;syncBtn();dirty=true;});
  if(reduce){t=21;clock=4;}
  syncBtn();
  function frame(now){
    var dt=last?Math.min(.05,(now-last)/1000):0;last=now;
    var run=playing&&inView&&!document.hidden;
    if(run){t+=dt;clock+=dt;if(t>=T){t=0;lastStage=-1;}}
    if(run||dirty){draw(t,clock);dirty=false;}
    requestAnimationFrame(frame);
  }
  if('IntersectionObserver' in window){new IntersectionObserver(function(en){inView=en[0].isIntersecting;}).observe(cv);}
  window.addEventListener('resize',resize);
  resize();
  if(document.fonts&&document.fonts.ready){document.fonts.ready.then(function(){dirty=true;});}
  requestAnimationFrame(frame);
})();
      } catch (err) { console.error('[platform-knowledge-graph] page script error:', err); }
      return {  };
    }
  })(cq);
}
