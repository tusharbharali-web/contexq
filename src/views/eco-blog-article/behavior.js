// Generated from public/eco-skin/ER_blog.html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */
import ecoEcosystemShared from '../_shared/eco/ecosystem-shared.js';
import ecoBlogUtils from '../_shared/eco/blog-utils.js';
import ecoBlogsData from '../_shared/eco/blogs-data.js';
import ecoBlogArticle from '../_shared/eco/blog-article.js';

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      ecoEcosystemShared(cq);
      ecoBlogUtils(cq);
      ecoBlogsData(cq);
      ecoBlogArticle(cq);
      return {  };
    }
  })(cq);
}
