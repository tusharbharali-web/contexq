// Generated from public/html/contexq-entity-resolution.html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      // ---- page script ----
      try {
/* HERO - many records stream into the ContexQ emblem; resolved companies stream out to the right. */
(() => {
  const stage = document.getElementById('stage3d'), cv = document.getElementById('flowCv'), ctx = cv.getContext('2d');
  const entsEl = document.getElementById('ents'), word = document.getElementById('cqWord'), stepEl = document.getElementById('h3Step');
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches, TAU = Math.PI * 2;
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v)), ease = x => { x = clamp(x); return x * x * (3 - 2 * x); };

  const ENTITIES = [
    ['per', 'John Smith', 'Bank, KYC, registry'], ['co', 'Northstar Trading', 'Registry, invoices'], ['per', 'Maria Chen', 'Cards, KYC'],
    ['co', 'Harbour Ridge Holdings', 'Registry, news'], ['co', 'Kestrel Marine Ltd', 'Customs, invoices']
  ];
  const ICONS = ['co', 'doc', 'bank', 'card', 'person', 'ship', 'news', 'globe'];
  const CYCLE = 12, T = { tiles: 0, flow: .6, word: 1.2, out: 3.4, outGap: .22, step2: 3.0, step3: 5.2, fade: 11.2 };
  const PER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="8" r="3.6"/><path d="M5 20c1-4 3.8-6.2 7-6.2s6 2.2 7 6.2"/></svg>';
  const BLD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M4 21V8l7-4v17M11 10l9 3v8M2.5 21h19M7 11h1M7 15h1M14.5 15h1M17.5 15h1"/></svg>';
  const OK = '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 6.3 5 8.6 9.6 3.6"/></svg>';
  entsEl.innerHTML = ENTITIES.map(([k, n, s]) => `<li class="ent ${k}"><span class="ic">${k === 'per' ? PER : BLD}</span><span class="tx"><b>${n}</b><small>${s}</small></span><span class="ok">${OK}</span></li>`).join('');
  const entEls = [...entsEl.children];

  let W = 0, H = 0, dpr = 1, vertical = false, tiles = [], core = { x: 0, y: 0, r: 0 }, outs = [], seed = 11;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const SPH = Array.from({ length: 700 }, (_, i) => { const y = 1 - i / 699 * 2, r = Math.sqrt(1 - y * y), th = i * 2.399963; return [Math.cos(th) * r, y, Math.sin(th) * r]; });

  function layout() {
    const r = stage.getBoundingClientRect(); dpr = Math.min(2, devicePixelRatio || 1); W = r.width; H = r.height; vertical = W < 560;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed = 11; tiles = [];
    if (!vertical) {
      core = { x: W * .4, y: H * .5, r: Math.min(W, H) * .12 };
      // a funnel of record tiles on the left: big and spread at the edge, small and tight near the core
      const cols = 6;
      for (let c = 0; c < cols; c++) {
        const f = c / (cols - 1), x = W * (.04 + f * .2), spread = H * (.3 - f * .17), n = 6 - Math.floor(f * 3.4);
        for (let k = 0; k < n; k++) { const y = core.y + (n === 1 ? 0 : (k / (n - 1) - .5) * 2 * spread) + (rnd() - .5) * 14; tiles.push({ x: x + (rnd() - .5) * 10, y, s: 24 - f * 11 + rnd() * 2, ic: ICONS[Math.floor(rnd() * ICONS.length)], ph: rnd() * 6, f }); }
      }
      const cw = Math.min(226, W * .37), ch = 46, gap = 10, top = core.y - (ch * 5 + gap * 4) / 2;
      entEls.forEach((el, i) => { el.style.width = cw + 'px'; el.style.left = (W - cw - 16) + 'px'; el.style.top = (top + i * (ch + gap)) + 'px'; });
    } else {
      core = { x: W * .5, y: H * .45, r: Math.min(W, H) * .11 };
      const rows = 4;
      for (let rr = 0; rr < rows; rr++) {
        const f = rr / (rows - 1), y = H * (.15 + f * .12), spread = W * (.42 - f * .26), n = 6 - Math.floor(f * 3.2);
        for (let k = 0; k < n; k++) { const x = core.x + (n === 1 ? 0 : (k / (n - 1) - .5) * 2 * spread); tiles.push({ x, y: y + (rnd() - .5) * 8, s: 26 - f * 11, ic: ICONS[Math.floor(rnd() * ICONS.length)], ph: rnd() * 6, f }); }
      }
      // resolved companies in a two-column grid below
      // phones: four companies in a 2 x 2 grid, rows sized to the tallest card
      const cw = (W - 34) / 2, top = core.y + core.r * 1.7 + 24;
      entEls.forEach((el, i) => { el.style.display = i < 4 ? '' : 'none'; el.style.width = cw + 'px'; });
      let y = top; for (let row = 0; row < 2; row++) { const pair = entEls.slice(row * 2, row * 2 + 2), hgt = Math.max(...pair.map(e => e.offsetHeight)); pair.forEach((el, c) => { el.style.left = (12 + c * (cw + 10)) + 'px'; el.style.top = y + 'px'; el.style.minHeight = hgt + 'px'; }); y += hgt + 8; }
    }
    // output curves end at each card
    const sr = stage.getBoundingClientRect();
    if (!vertical) entEls.forEach(el => { el.style.display = ''; el.style.minHeight = ''; });
    outs = entEls.filter(el => el.style.display !== 'none').map(el => { const r = el.getBoundingClientRect(); return vertical ? { x: r.left + r.width / 2 - sr.left, y: r.top - sr.top } : { x: r.left - sr.left, y: r.top + r.height / 2 - sr.top }; });
    word.style.left = core.x + 'px'; word.style.top = core.y + 'px';
  }

  /* --- drawing helpers --- */
  function rr(x, y, w, h, r) { ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x, y, w, h, r) : ctx.rect(x, y, w, h); }
  function icon(k, cx, cy, s) {
    ctx.save(); ctx.translate(cx - s / 2, cy - s / 2); ctx.scale(s / 24, s / 24); ctx.lineWidth = 1.8; ctx.lineCap = ctx.lineJoin = 'round'; ctx.beginPath();
    switch (k) {
      case 'co': ctx.moveTo(4, 21); ctx.lineTo(4, 8); ctx.lineTo(11, 4); ctx.lineTo(11, 21); ctx.moveTo(11, 10); ctx.lineTo(20, 13); ctx.lineTo(20, 21); ctx.moveTo(2.5, 21); ctx.lineTo(21.5, 21); break;
      case 'doc': ctx.rect(5, 3, 14, 18); ctx.moveTo(8, 8); ctx.lineTo(16, 8); ctx.moveTo(8, 12); ctx.lineTo(16, 12); ctx.moveTo(8, 16); ctx.lineTo(13, 16); break;
      case 'bank': ctx.moveTo(3, 9); ctx.lineTo(12, 4); ctx.lineTo(21, 9); ctx.closePath(); ctx.moveTo(6, 11); ctx.lineTo(6, 18); ctx.moveTo(12, 11); ctx.lineTo(12, 18); ctx.moveTo(18, 11); ctx.lineTo(18, 18); ctx.moveTo(3, 20.5); ctx.lineTo(21, 20.5); break;
      case 'card': ctx.rect(3, 6, 18, 12); ctx.moveTo(3, 10); ctx.lineTo(21, 10); ctx.moveTo(6, 14.5); ctx.lineTo(10, 14.5); break;
      case 'person': ctx.arc(12, 8, 3.6, 0, TAU); ctx.moveTo(5, 20); ctx.quadraticCurveTo(12, 10, 19, 20); break;
      case 'ship': ctx.moveTo(3, 15); ctx.lineTo(21, 15); ctx.lineTo(18, 20); ctx.lineTo(6, 20); ctx.closePath(); ctx.moveTo(8, 15); ctx.lineTo(8, 9); ctx.lineTo(16, 9); ctx.lineTo(16, 15); break;
      case 'news': ctx.rect(3, 4, 18, 16); ctx.moveTo(6, 8); ctx.lineTo(12, 8); ctx.moveTo(6, 12); ctx.lineTo(18, 12); ctx.moveTo(6, 16); ctx.lineTo(18, 16); break;
      default: ctx.arc(12, 12, 8.5, 0, TAU); ctx.moveTo(3.5, 12); ctx.lineTo(20.5, 12); ctx.moveTo(12, 3.5); ctx.quadraticCurveTo(17, 12, 12, 20.5); ctx.moveTo(12, 3.5); ctx.quadraticCurveTo(7, 12, 12, 20.5);
    }
    ctx.stroke(); ctx.restore();
  }
  const inPt = () => vertical ? { x: core.x, y: core.y - core.r * 1.12 } : { x: core.x - core.r * 1.12, y: core.y };
  const outPt = () => vertical ? { x: core.x, y: core.y + core.r * 1.12 } : { x: core.x + core.r * 1.12, y: core.y };
  function bez(a, b, q) {
    const c1 = vertical ? { x: a.x, y: a.y + (b.y - a.y) * .55 } : { x: a.x + (b.x - a.x) * .55, y: a.y };
    const c2 = vertical ? { x: b.x, y: b.y - (b.y - a.y) * .45 } : { x: b.x - (b.x - a.x) * .45, y: b.y };
    const u = 1 - q; return { x: u * u * u * a.x + 3 * u * u * q * c1.x + 3 * u * q * q * c2.x + q * q * q * b.x, y: u * u * u * a.y + 3 * u * u * q * c1.y + 3 * u * q * q * c2.y + q * q * q * b.y };
  }
  const splitPt = () => vertical ? { x: core.x, y: core.y + core.r * 1.12 + (outs.length ? (outs[0].y - core.y - core.r * 1.12) * .4 : 20) } : { x: core.x + core.r * 1.12 + (outs.length ? (outs[0].x - core.x - core.r * 1.12) * .3 : 30), y: core.y };
  function path(a, b) { ctx.beginPath(); for (let i = 0; i <= 30; i++) { const p = bez(a, b, i / 30); i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y); } }

  /* --- frame --- */
  let t = 0, last = 0, playing = !RM, inView = true;
  function draw() {
    const tc = t % CYCLE, A = 1 - ease((tc - T.fade) / .8), intro = t < CYCLE ? 1 : 0;
    ctx.clearRect(0, 0, W, H);
    // stars
    seed = 99; ctx.fillStyle = '#9CC2FF'; for (let i = 0; i < 70; i++) { const x = rnd() * W, y = rnd() * H; ctx.globalAlpha = .15 + .3 * Math.abs(Math.sin(t * .6 + i)); ctx.fillRect(x, y, 1.2, 1.2); } ctx.globalAlpha = 1;
    const IN = inPt(), OUT = outPt();
    // incoming streams from every tile into the core
    ctx.globalCompositeOperation = 'lighter';
    tiles.forEach((tl, i) => {
      const a = vertical ? { x: tl.x, y: tl.y + tl.s * .6 } : { x: tl.x + tl.s * .6, y: tl.y }, vis = ease((t - T.flow - i * .02) / .6);
      ctx.strokeStyle = `rgba(90,170,255,${.2 * vis})`; ctx.lineWidth = 1; path(a, IN); ctx.stroke();
      for (let k = 0; k < 2; k++) {
        const q = ((t * (.32 + tl.f * .2) + tl.ph * .3 + k * .5) % 1); if (t < T.flow) continue;
        for (let j = 0; j < 7; j++) { const p = bez(a, IN, Math.max(0, q - j * .018)); ctx.globalAlpha = vis * (1 - j / 7) * .85; ctx.fillStyle = j ? '#3D9BFF' : '#D9F2FF'; ctx.beginPath(); ctx.arc(p.x, p.y, j ? 1.3 : 1.9, 0, TAU); ctx.fill(); }
      }
    });
    ctx.globalAlpha = 1;
    // outgoing streams to the resolved companies
    const SP = splitPt(), trunk = ease((tc - T.out + .5) / .5) * A;
    if (trunk > 0) { ctx.strokeStyle = 'rgba(140,215,255,.75)'; ctx.lineWidth = 2; ctx.shadowColor = '#4FA8FF'; ctx.shadowBlur = 10; ctx.beginPath(); ctx.moveTo(OUT.x, OUT.y); ctx.lineTo(OUT.x + (SP.x - OUT.x) * trunk, OUT.y + (SP.y - OUT.y) * trunk); ctx.stroke(); ctx.shadowBlur = 0; }
    outs.forEach((o, i) => {
      const s0 = T.out + i * T.outGap, grow = ease((tc - s0) / .7) * A;
      if (grow <= 0) return;
      const OUT = SP;
      ctx.strokeStyle = 'rgba(110,200,255,.55)'; ctx.lineWidth = 1.6; ctx.shadowColor = '#4FA8FF'; ctx.shadowBlur = 8;
      ctx.beginPath(); for (let k = 0; k <= 30 * grow; k++) { const p = bez(OUT, o, k / 30); k ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y); } ctx.stroke(); ctx.shadowBlur = 0;
      if (grow >= 1) { const q = ((t * .45 + i * .2) % 1), p = bez(OUT, o, q); ctx.fillStyle = '#E6F7FF'; ctx.shadowColor = '#5EEAD4'; ctx.shadowBlur = 12; ctx.beginPath(); ctx.arc(p.x, p.y, 2.4, 0, TAU); ctx.fill(); ctx.shadowBlur = 0; }
      else { const p = bez(OUT, o, grow); ctx.fillStyle = '#FFFFFF'; ctx.shadowColor = '#7CC4FF'; ctx.shadowBlur = 16; ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, TAU); ctx.fill(); ctx.shadowBlur = 0; }
    });
    ctx.globalCompositeOperation = 'source-over';
    // record tiles (glass)
    tiles.forEach((tl, i) => {
      const vis = ease((t - T.tiles - i * .025) / .5), bob = Math.sin(t * .9 + tl.ph) * 2, s = tl.s, x = tl.x - s / 2, y = tl.y - s / 2 + bob;
      ctx.globalAlpha = vis * (.55 + .45 * (1 - tl.f * .6));
      ctx.shadowColor = 'rgba(80,160,255,.8)'; ctx.shadowBlur = 10; rr(x, y, s, s, s * .2);
      const g = ctx.createLinearGradient(x, y, x + s, y + s); g.addColorStop(0, 'rgba(70,130,230,.42)'); g.addColorStop(1, 'rgba(18,40,96,.55)'); ctx.fillStyle = g; ctx.fill(); ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(150,205,255,.75)'; ctx.lineWidth = 1; ctx.stroke();
      ctx.strokeStyle = '#E4F3FF'; icon(tl.ic, tl.x, tl.y + bob, s * .58);
    });
    ctx.globalAlpha = 1;
    // pedestal
    const pb = core.y + core.r * 1.45;
    ctx.globalCompositeOperation = 'lighter';
    let g = ctx.createRadialGradient(core.x, pb, 0, core.x, pb, core.r * 2.2); g.addColorStop(0, 'rgba(70,150,255,.5)'); g.addColorStop(1, 'rgba(70,150,255,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(core.x, pb, core.r * 2.2, core.r * .55, 0, 0, TAU); ctx.fill();
    [[1.55, .62, .9], [1.25, .48, .7], [.95, .36, .5]].forEach(([rx, ry, a], k) => { ctx.strokeStyle = `rgba(${k === 1 ? '120,220,255' : '90,160,255'},${a})`; ctx.lineWidth = k === 0 ? 2 : 1.2; ctx.beginPath(); ctx.ellipse(core.x, pb + k * 6, core.r * rx, core.r * ry * .5, 0, 0, TAU); ctx.stroke(); });
    g = ctx.createLinearGradient(0, core.y, 0, pb); g.addColorStop(0, 'rgba(60,140,255,0)'); g.addColorStop(1, 'rgba(60,140,255,.28)'); ctx.fillStyle = g;
    ctx.beginPath(); ctx.moveTo(core.x - core.r * .8, core.y + core.r * .4); ctx.lineTo(core.x + core.r * .8, core.y + core.r * .4); ctx.lineTo(core.x + core.r * 1.4, pb); ctx.lineTo(core.x - core.r * 1.4, pb); ctx.closePath(); ctx.fill();
    // core glow + particle sphere (the ContexQ emblem)
    const pulse = 1 + .05 * Math.sin(t * 2.2);
    g = ctx.createRadialGradient(core.x, core.y, core.r * .2, core.x, core.y, core.r * 2.1); g.addColorStop(0, 'rgba(90,170,255,.55)'); g.addColorStop(.5, 'rgba(60,120,255,.16)'); g.addColorStop(1, 'rgba(60,120,255,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(core.x, core.y, core.r * 2.1, 0, TAU); ctx.fill();
    const rot = t * .35, ca = Math.cos(rot), sa = Math.sin(rot), tl2 = .35, ct = Math.cos(tl2), st = Math.sin(tl2), R = core.r * pulse * ease(t / 1);
    for (const [px, py, pz] of SPH) { const x1 = px * ca + pz * sa, z1 = -px * sa + pz * ca, y2 = py * ct - z1 * st, z2 = py * st + z1 * ct, d = (z2 + 1) / 2; ctx.globalAlpha = .12 + d * .75; ctx.fillStyle = d > .7 ? '#DDF3FF' : '#5FA8FF'; ctx.beginPath(); ctx.arc(core.x + x1 * R, core.y + y2 * R, .6 + d * 1.2, 0, TAU); ctx.fill(); }
    ctx.globalAlpha = 1;
    // orbit ring
    ctx.strokeStyle = 'rgba(140,210,255,.55)'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.ellipse(core.x, core.y, R * 1.45, R * .42, -.25, 0, TAU); ctx.stroke();
    for (let k = 0; k < 3; k++) { const an = t * 1.1 + k * TAU / 3, ex = Math.cos(an) * R * 1.45, ey = Math.sin(an) * R * .42, c = Math.cos(-.25), s = Math.sin(-.25); ctx.fillStyle = '#CFF0FF'; ctx.shadowColor = '#5EEAD4'; ctx.shadowBlur = 10; ctx.beginPath(); ctx.arc(core.x + ex * c - ey * s, core.y + ex * s + ey * c, 2.2, 0, TAU); ctx.fill(); ctx.shadowBlur = 0; }
    ctx.globalCompositeOperation = 'source-over';
    // DOM: wordmark, cards, step
    word.style.opacity = t > T.word ? 1 : 0;
    entEls.forEach((el, i) => { const s0 = T.out + i * T.outGap + .7; const on = tc >= s0 && tc < T.fade + .2; el.classList.toggle('on', on); el.classList.toggle('flash', tc >= s0 && tc < s0 + .5); });
    const si = tc < T.step2 ? 0 : tc < T.step3 ? 1 : 2, msg = ['Records from many systems', 'Matched by ContexQ', 'People and companies, resolved'][si];
    if (stepEl.textContent !== msg) stepEl.textContent = msg;
  }
  function frame(ts) { const dt = last ? Math.min((ts - last) / 1000, .1) : 0; last = ts; if (playing && inView && !document.hidden) { t += dt; draw(); } requestAnimationFrame(frame); }
  new IntersectionObserver(e => { inView = e[0].isIntersecting; }, { threshold: .05 }).observe(stage);
  new ResizeObserver(() => { layout(); draw(); }).observe(stage);
  const pauseBtn = document.getElementById('h3Pause');
  function setPlaying(v) { playing = v; document.getElementById('h3PauseIc').style.display = v ? '' : 'none'; document.getElementById('h3PlayIc').style.display = v ? 'none' : ''; document.getElementById('h3PauseTx').textContent = v ? 'Pause' : 'Play'; pauseBtn.setAttribute('aria-label', v ? 'Pause animation' : 'Play animation'); }
  pauseBtn.addEventListener('click', () => setPlaying(!playing));
  document.getElementById('h3Replay').addEventListener('click', () => { t = 0; setPlaying(true); });
  layout();
  if (RM) { t = 8; setPlaying(false); draw(); }
  requestAnimationFrame(frame);
})();
      } catch (err) { console.error('[platform-entity] page script error:', err); }
      // ---- page script ----
      try {
(function(){
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* See it decide: short entrance only; all content is visible without waiting */
  var dec = document.getElementById('dec');
  if (dec && !reduce && 'IntersectionObserver' in window) {
    dec.classList.add('anim');
    var io = new IntersectionObserver(function(es){ if (es[0].isIntersecting) { dec.classList.add('in'); io.disconnect(); } }, {threshold:.2});
    io.observe(dec);
  }
})();
      } catch (err) { console.error('[platform-entity] page script error:', err); }
      return {  };
    }
  })(cq);
}
