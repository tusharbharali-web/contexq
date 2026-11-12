// Generated from public/html/contexq-data-management (2).html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      // ---- page script ----
      try {
document.querySelectorAll('#six-domain-scoring .hub-spoke').forEach(function(spoke) {
  spoke.addEventListener('click', function() {
    var active = spoke.classList.contains('is-active');
    document.querySelectorAll('#six-domain-scoring .hub-spoke.is-active').forEach(function(other) {
      other.classList.remove('is-active');
    });
    if (!active) spoke.classList.add('is-active');
  });
});
      } catch (err) { console.error('[solution-customer-intelligence] page script error:', err); }
      return {  };
    }
  })(cq);
}
