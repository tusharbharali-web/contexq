// Generated from public/eco-skin/Awards.html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */
import ecoEcosystemShared from '../_shared/eco/ecosystem-shared.js';

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      // ---- page script ----
  function toggleFinalists(btn) {
    const item = document.getElementById('finalist-item-3');
    const isNowHidden = item.classList.toggle('hidden');
    const textSpan = btn.querySelector('span.btn-text');
    const iconSpan = btn.querySelector('.material-symbols-outlined');
    if (textSpan) textSpan.textContent = isNowHidden ? 'Show all finalists' : 'Show less';
    if (iconSpan) iconSpan.textContent = isNowHidden ? 'expand_more' : 'expand_less';
  }

      ecoEcosystemShared(cq);
      return { toggleFinalists: typeof toggleFinalists === 'function' ? toggleFinalists : undefined };
    }
  })(cq);
}
