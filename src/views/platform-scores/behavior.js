// Generated from public/html/contexq-composite-ai-scores.html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      // ---- page script ----
      try {
(function(){
  var stage = document.getElementById('stage'), step = document.getElementById('step'), pause = document.getElementById('hPause'), band = document.getElementById('band'), ring = stage.querySelector('.ring');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cps = stage.querySelectorAll('.cp'), fl = stage.querySelectorAll('.f');
  var BANDS = [['Medium','b-mod'],['High','b-ele'],['High','b-ele']]; var tiers = stage.querySelectorAll('.tiers span');
  var STATES = [['A supplier, not yet scored',1800],['Its financial statements',2200],['Its network',2200],['Its ownership structure',2200],['A banded score that keeps its breakdown',5000]];
  var i = 0, timer = null, playing = !reduce, inView = true;
  function show(k){
    i = k; for (var j = 1; j <= 4; j++) stage.classList.toggle('s' + j, j <= k);
    cps.forEach(function(c, n){ c.classList.toggle('on', n < k); c.querySelector('.cp-b').textContent = n < k ? ['Moderate','Strong','Strong'][n] : ''; });
    fl.forEach(function(f, n){ f.classList.toggle('on', n < k && k < 4); });
    ring.classList.remove('b-low','b-mod','b-ele');
    var cur = k === 0 ? '' : BANDS[Math.min(k, 3) - 1][0];
    if (k === 0) band.textContent = 'Not scored'; else { var b = BANDS[Math.min(k, 3) - 1]; band.textContent = b[0]; ring.classList.add(b[1]); }
    tiers.forEach(function(t){ t.classList.toggle('on', t.dataset.t === cur); t.classList.toggle('was', k >= 2 && t.dataset.t === 'Medium'); });
    step.textContent = STATES[k][0];
  }
  function tick(){ clearTimeout(timer); if (!playing || !inView) return; timer = setTimeout(function(){ show((i + 1) % STATES.length); tick(); }, STATES[i][1]); }
  pause.addEventListener('click', function(){ playing = !playing; pause.textContent = playing ? 'Pause' : 'Play'; pause.setAttribute('aria-label', playing ? 'Pause animation' : 'Play animation'); tick(); });
  document.getElementById('hReplay').addEventListener('click', function(){ playing = true; pause.textContent = 'Pause'; show(0); tick(); });
  if ('IntersectionObserver' in window) new IntersectionObserver(function(es){ inView = es[0].isIntersecting; tick(); }, {threshold:.2}).observe(stage);
  if (reduce) { show(4); pause.textContent = 'Play'; } else { show(0); tick(); }
})();
      } catch (err) { console.error('[platform-scores] page script error:', err); }
      return {  };
    }
  })(cq);
}
