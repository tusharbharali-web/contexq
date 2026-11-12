// Generated from public/html/contexq-kyc (2).html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      // ---- page script ----
      try {
document.documentElement.classList.add('js');
      } catch (err) { console.error('[solution-kyc] page script error:', err); }
      // ---- page script ----
      try {
      (function(){
        var g = document.getElementById('graph'), note = document.getElementById('g-note'), btns = g.querySelectorAll('.g-toggle button'), touched = false;
        var txt = {
          solo: '<strong>Profile only:</strong> screening finds no hits on the customer, so the file reads as low risk.',
          conn: '<strong>With connected context:</strong> the same customer raises five signals across ownership, partners and payments. An analyst reviews them with the evidence attached.'
        };
        function set(m) {
          g.dataset.mode = m;
          note.innerHTML = txt[m];
          btns.forEach(function(b) { b.setAttribute('aria-pressed', b.dataset.mode === m); });
        }
        btns.forEach(function(b) { b.addEventListener('click', function() { touched = true; set(b.dataset.mode); }); });
        if ('IntersectionObserver' in window) {
          var io = new IntersectionObserver(function(e) {
            if (e[0].isIntersecting) {
              io.disconnect();
              setTimeout(function() { if (!touched) set('conn'); }, 1600);
            }
          }, { threshold: 0.45 });
          io.observe(g);
        }
      })();
      } catch (err) { console.error('[solution-kyc] page script error:', err); }
      // ---- page script ----
      try {
  (()=>{
    const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
    const reduceMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reduced = () => reduceMQ.matches;

    /* Hero Animation: application → evidence → resolved entity → network → change → review */
    const heroSteps = [
      { "t": 0, "settle": 3.4, "cap": "<b>Application.</b> The customer tells us who they are and who owns them." },
      { "t": 3.8, "settle": 9.2, "cap": "<b>Evidence.</b> Bank records and company registries add context." },
      { "t": 9.4, "settle": 11.8, "cap": "<b>Match.</b> Shared details join the records into one customer." },
      { "t": 12, "settle": 16.8, "cap": "<b>Owners.</b> Directors and parent companies come into view." },
      { "t": 17, "settle": 19.8, "cap": "<b>Change.</b> A registry update shows a new director at the parent." },
      { "t": 20, "settle": 27, "cap": "<b>Review.</b> A possible link to a former customer is ready to check." }
    ];
    $('#heroTextList').innerHTML = heroSteps.map(s => `<li>${s.cap}</li>`).join('');
    const caption = $('#heroCaption'), hud = $$('.hud-step');
    let activeStep = -1;
    const setStep = i => {
      if (i === activeStep) return;
      activeStep = i;
      hud.forEach((b, j) => {
        b.classList.toggle('active', j === i);
        b.setAttribute('aria-pressed', String(j === i));
      });
      caption.innerHTML = heroSteps[i].cap;
    };
    setStep(0);

    function initHero() {
      const stage = $('#heroVisualStage'), paper = $('#kycPaper');
      const fit = () => {
        const w = stage.getBoundingClientRect().width;
        stage.style.setProperty('--stage-scale', Math.min(w / 800, 1).toFixed(3));
      };
      ('ResizeObserver' in window) ? new ResizeObserver(fit).observe(stage) : window.addEventListener('resize', fit);
      fit();

      $$('#heroVisualStage .edge-badge').forEach(g => {
        const t = g.querySelector('text'), r = g.querySelector('rect');
        try {
          const w = t.getComputedTextLength() + 20;
          r.setAttribute('width', w);
          r.setAttribute('x', -w / 2);
        } catch(e) {}
      });

      if (!window.gsap) { stage.classList.add('static'); setStep(5); return; }

      const sc = parseFloat(getComputedStyle(stage).getPropertyValue('--stage-scale')) || 1;
      gsap.set(paper, { x: 0, y: 0, rotation: 0, scale: 1 });
      const tsr = $('#transformationStage').getBoundingClientRect(), cx = tsr.left + tsr.width / 2, cy = tsr.top + tsr.height / 2;
      const rowPos = {};
      $$('#kycPaper [data-frag]').forEach(r => {
        const b = r.getBoundingClientRect();
        rowPos[r.dataset.frag] = { x: (b.left + b.width / 2 - cx) / sc, y: (b.top + b.height / 2 - cy) / sc };
      });
      const rows = $$('#kycPaper [data-frag]');

      const app = [
        { id: 'fragEntity', bx: -200, by: -125 },
        { id: 'fragReg', bx: -200, by: -62 },
        { id: 'fragAddress', bx: -200, by: 1 },
        { id: 'fragDirector', bx: -200, by: 64 },
        { id: 'fragParent', bx: -200, by: 127 }
      ];
      const ext = [
        { id: 'fragBank', bx: 205, by: -90 },
        { id: 'fragRegCheck', bx: 205, by: 0 },
        { id: 'fragRegParent', bx: 205, by: 90 }
      ];
      app.forEach(f => { const p = rowPos[f.id] || { x: 0, y: 0 }; f.rx = p.x; f.ry = p.y; });
      const NODE = { nodeCustomer: [0, 0], nodeDirector: [-285, -150], nodeParent: [285, -150], nodeParentDir: [285, 150], nodeExited: [-285, 150] };
      const nodes = Object.keys(NODE).map(k => '#' + k);
      const edges = $$('#heroVisualStage .graph-edge');
      const badges = ['#b1', '#b2', '#b3'];

      const reset = () => {
        gsap.set(paper, { x: 0, y: 8, rotation: 1.5, scale: 0.94, opacity: 1, filter: 'blur(0px)' });
        gsap.set(rows, { opacity: 1, backgroundColor: 'rgba(240,116,79,0)' });
        app.forEach(f => gsap.set('#' + f.id, { x: f.rx, y: f.ry, rotation: 0, scale: 0.9, opacity: 0 }));
        ext.forEach((f, i) => gsap.set('#' + f.id, { x: 560, y: f.by, rotation: 0, scale: 1, opacity: 0 }));
        gsap.set('#chipApp', { x: -200, y: -182, opacity: 0 });
        gsap.set('#chipExt', { x: 205, y: -152, opacity: 0 });
        Object.entries(NODE).forEach(([k, [x, y]]) => gsap.set('#' + k, { xPercent: -50, yPercent: -50, x, y, opacity: 0, scale: 0.55 }));
        gsap.set('#heroVisualStage .orbit-guide', { opacity: 0 });
        gsap.set('#heroVisualStage .edge-badge', { opacity: 0 });
        edges.forEach(e => {
          const l = e.getTotalLength ? e.getTotalLength() : 400;
          gsap.set(e, { strokeDasharray: e.classList.contains('risk-line') ? '7 6' : l, strokeDashoffset: l, opacity: 0 });
        });
        gsap.set('#dirOld', { opacity: 1, '--strike': 0 });
        gsap.set(['#dirNew', '#metaNew'], { opacity: 0 });
        gsap.set('#metaOld', { opacity: 1 });
        gsap.set('#changePill', { opacity: 0, y: 6 });
        gsap.set('#pulseRing', { opacity: 0, scale: 1 });
        gsap.set('#reviewChip', { xPercent: -50, yPercent: -50, x: 0, y: 74, opacity: 0, scale: 0.9 });
      };
      reset();

      const tl = gsap.timeline({
        repeat: -1,
        paused: true,
        onRepeat: reset,
        onUpdate: () => {
          const t = tl.time();
          let i = 0;
          heroSteps.forEach((s, j) => { if (t >= s.t) i = j; });
          if (t >= 28.6) i = 0;
          setStep(i);
        }
      });

      tl.to(paper, { y: 0, rotation: 0, scale: 1, duration: 2.2, ease: 'sine.inOut' }, 0)
        .to(rows, { backgroundColor: 'rgba(240,116,79,.16)', duration: 0.9, stagger: 0.08, ease: 'sine.inOut' }, 2.3);

      app.forEach((f, i) => {
        tl.to('#' + f.id, { opacity: 1, scale: 0.98, y: f.ry - 6, duration: 0.75, ease: 'sine.out' }, 3.85 + i * 0.12)
          .to('#' + f.id, { x: f.bx, y: f.by, scale: 1, rotation: i % 2 ? 0.8 : -0.8, duration: 1.8, ease: 'power3.out' }, 4.6 + i * 0.12)
          .to('#' + f.id, { y: f.by + (i % 2 ? 4 : -4), rotation: 0, duration: 1.4, ease: 'sine.inOut' }, 6.5 + i * 0.12);
      });

      tl.to(rows, { opacity: 0.12, backgroundColor: 'rgba(240,116,79,0)', duration: 1.1, stagger: 0.08, ease: 'sine.inOut' }, 3.95)
        .to(paper, { scale: 0.9, opacity: 0, filter: 'blur(8px)', duration: 1.7, ease: 'power2.inOut' }, 4.6)
        .to('#chipApp', { opacity: 1, duration: 0.8 }, 5.4)
        .to('#chipExt', { opacity: 1, duration: 0.8 }, 6.0);

      ext.forEach((f, i) => {
        tl.to('#' + f.id, { opacity: 1, x: f.bx, duration: 1.6, ease: 'power3.out' }, 6.1 + i * 0.22)
          .to('#' + f.id, { y: f.by + (i % 2 ? -4 : 4), duration: 1.3, ease: 'sine.inOut' }, 7.7 + i * 0.22);
      });

      tl.to(['#chipApp', '#chipExt'], { opacity: 0, duration: 0.6 }, 9.4)
        .to('#fragDirector', { x: -282, y: -40, duration: 1.3, ease: 'power2.inOut' }, 9.5)
        .to('#fragParent', { x: -262, y: 110, duration: 1.3, ease: 'power2.inOut' }, 9.55)
        .to('#fragRegCheck', { x: 282, y: -40, duration: 1.3, ease: 'power2.inOut' }, 9.6)
        .to('#fragRegParent', { x: 282, y: 110, duration: 1.3, ease: 'power2.inOut' }, 9.65);

      ['#fragEntity', '#fragReg', '#fragAddress', '#fragBank'].forEach((id, i) => {
        tl.to(id, { x: 0, y: 0, rotation: 0, scale: 0.55, opacity: 0, duration: 1.4, ease: 'power3.inOut' }, 9.5 + i * 0.12);
      });
      tl.to('#nodeCustomer', { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }, 10.4);

      [['#fragDirector', '#nodeDirector'], ['#fragRegCheck', '#nodeDirector'], ['#fragParent', '#nodeParent'], ['#fragRegParent', '#nodeParentDir']].forEach(([f, n], i) => {
        const [x, y] = NODE[n.slice(1)];
        tl.to(f, { x, y, rotation: 0, scale: 0.72, opacity: 0, duration: 1.5, ease: 'power3.inOut' }, 12.1 + i * 0.16)
          .to(n, { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }, 13.0 + i * 0.16);
      });

      tl.to('#heroVisualStage .orbit-guide', { opacity: 0.75, duration: 1.2 }, 13.2)
        .to(edges.slice(0, 3), { opacity: 1, strokeDashoffset: 0, duration: 1.4, stagger: 0.25, ease: 'power2.inOut' }, 13.5)
        .to(badges, { opacity: 1, duration: 1, stagger: 0.15, ease: 'sine.out' }, 14.4);

      tl.to('#changePill', { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(2)' }, 17.1)
        .fromTo('#pulseRing', { opacity: 0.9, scale: 1 }, { opacity: 0, scale: 1.18, duration: 1.2, ease: 'sine.out', immediateRender: false }, 17.2)
        .to('#nodeParentDir', { borderColor: '#f0744f', duration: 0.6 }, 17.2)
        .to('#dirOld', { '--strike': 1, duration: 0.5, ease: 'power2.out' }, 17.7)
        .to(['#dirOld', '#metaOld'], { opacity: 0, duration: 0.5 }, 18.3)
        .to(['#dirNew', '#metaNew'], { opacity: 1, duration: 0.6 }, 18.6)
        .fromTo('#pulseRing', { opacity: 0.9, scale: 1 }, { opacity: 0, scale: 1.18, duration: 1.2, ease: 'sine.out', immediateRender: false }, 18.7);

      tl.to('#nodeExited', { opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out' }, 20.1)
        .to('#e4', { opacity: 1, strokeDashoffset: 0, duration: 1.5, ease: 'power2.inOut' }, 20.5)
        .to('#b4', { opacity: 1, duration: 0.8 }, 21.6)
        .to('#reviewChip', { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.6)' }, 22.4);

      tl.to([...nodes, '#heroVisualStage .orbit-guide', ...edges, '#heroVisualStage .edge-badge', '#reviewChip', '#changePill'], { opacity: 0, duration: 1.1, ease: 'sine.inOut' }, 27.6)
        .to(rows, { opacity: 1, duration: 0.01 }, 28.6)
        .to(paper, { y: 8, rotation: 1.5, scale: 0.94, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'sine.out' }, 28.6)
        .to({}, { duration: 0.4 }, 29.8);

      const btn = $('#playToggle');
      btn.hidden = false;
      let userPaused = false, visible = true;
      const renderBtn = () => {
        const p = tl.paused();
        btn.setAttribute('aria-label', p ? 'Play animation' : 'Pause animation');
        $('#icPause').style.display = p ? 'none' : '';
        $('#icPlay').style.display = p ? '' : 'none';
      };
      const update = () => {
        (userPaused || !visible || document.hidden) ? tl.pause() : tl.play();
        renderBtn();
      };
      btn.addEventListener('click', () => { userPaused = !userPaused; update(); });
      hud.forEach((b, i) => b.addEventListener('click', () => {
        if (userPaused || reduced()) { tl.seek(heroSteps[i].settle, false); setStep(i); }
        else { tl.seek(heroSteps[i].t, false); }
      }));
      document.addEventListener('visibilitychange', update);
      if ('IntersectionObserver' in window) new IntersectionObserver(([e]) => { visible = e.isIntersecting; update(); }).observe(stage);

      if (reduced()) { userPaused = true; tl.seek(heroSteps[5].settle, false); setStep(5); renderBtn(); }
      else update();
      reduceMQ.addEventListener?.('change', () => {
        if (reduced()) { userPaused = true; tl.seek(heroSteps[5].settle, false); update(); }
      });
    }

    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(initHero);
  })();
      } catch (err) { console.error('[solution-kyc] page script error:', err); }
      return {  };
    }
  })(cq);
}
