// Generated from public/eco-skin/PR_JM_joins.html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */
import ecoEcosystemShared from '../_shared/eco/ecosystem-shared.js';
import ecoPressReleasesData from '../_shared/eco/press-releases-data.js';
import ecoPressRelease from '../_shared/eco/press-release.js';

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      ecoEcosystemShared(cq);
      ecoPressReleasesData(cq);
      ecoPressRelease(cq);
      return {  };
    }
  })(cq);
}
