// Generated from public/eco-skin/blog-utils.js (shared by the Ecosystem views).
/* eslint-disable */
export default function run(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
/* Shared helpers for the Insights listing and the blog article template. */
(function () {
  var FOCUS = " focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
  var ARTICLE_PAGE = "ER_blog.html"; // generic article template page: ER_blog.html?slug=<slug>
  var SLUG_PAGES = {
    "entity-resolution-business-intelligence": "ER_blog.html",
    "data-driven-decision-intelligence": "DecisionIntell_blog.html",
    "future-proofing-modern-supply-chains": "SCI_blog.html"
  };
  function postHref(post) {
    if (post && post.slug && SLUG_PAGES[post.slug]) {
      return SLUG_PAGES[post.slug];
    }
    return ARTICLE_PAGE + "?slug=" + encodeURIComponent((post && post.slug) || "");
  }
  var NEWSLETTER_TO = "media@contexq.com";

  function el(tag, cls, attrs, children) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    (children || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function svg(html, cls) {
    var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("viewBox", "0 0 160 120"); s.setAttribute("aria-hidden", "true"); s.setAttribute("class", cls || "");
    s.innerHTML = html; return s;
  }
  var DOC_SVG = '<rect x="38" y="14" width="76" height="96" rx="8" fill="#fff" stroke="#C7D2E5" stroke-width="2"/>' +
    '<rect x="50" y="30" width="36" height="6" rx="3" fill="#2F6BFF"/><rect x="50" y="46" width="52" height="5" rx="2.5" fill="#DDE3EF"/>' +
    '<rect x="50" y="58" width="44" height="5" rx="2.5" fill="#DDE3EF"/><rect x="50" y="76" width="14" height="22" rx="2" fill="#BFD0FF"/>' +
    '<rect x="70" y="68" width="14" height="30" rx="2" fill="#8FADFF"/><rect x="90" y="82" width="14" height="16" rx="2" fill="#2F6BFF"/>';

  function fmtDate(iso) {
    return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  }
  function stripInline(s) { return s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, ""); }
  /* Plain text of a body block, for word counts and meta descriptions. */
  function blockText(b) {
    if (b.type === "list") return b.items.map(function (i) { return i.lead + ": " + stripInline(i.text); }).join(" ");
    if (b.type === "leadp") return b.lead + ": " + stripInline(b.text);
    if (b.type === "divider") return "";
    return stripInline(b.text || "");
  }
  function readTime(post) {
    if (!post.body || !post.body.length) return null;
    var words = post.body.map(blockText).join(" ").trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 220)) + " min read";
  }
  function newestFirst(list) { return list.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; }); }

  function coverTile(post, cls) {
    return el("div", cls + " bg-[#F4F6FA] flex items-center justify-center", { role: "img", "aria-label": post.coverAlt || "" }, [svg(DOC_SVG, "w-24 h-24 opacity-80")]);
  }
  function card(post) {
    var cover = post.coverImage
      ? el("img", "w-full h-full object-cover", { src: post.coverImage, alt: post.coverAlt || "", loading: "lazy" })
      : coverTile(post, "w-full h-full");
    var rt = readTime(post);
    return el("a", "group flex flex-col bg-white border border-[#E2E8F0] rounded-2xl shadow-sm overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" + FOCUS,
      { href: postHref(post) }, [
        el("div", "aspect-video overflow-hidden", {}, [cover]),
        el("div", "p-6 flex flex-col gap-3 flex-1", {}, [
          el("span", "self-start px-2.5 py-0.5 rounded-full bg-[#EAF0FF] text-primary text-xs font-semibold", {}, [post.contentType]),
          el("h3", "text-xl font-bold text-[#0B1530] leading-snug", {}, [post.title]),
          el("p", "text-sm text-[#64748B]", {}, [el("time", "", { datetime: post.date }, [fmtDate(post.date)]), rt ? " · " + rt : ""]),
          el("p", "text-base text-[#64748B] leading-relaxed line-clamp-2", {}, [post.excerpt])
        ])
      ]);
  }

  /* Newsletter: the site has no newsletter backend, so the form opens the visitor's email app
     addressed to NEWSLETTER_TO with the typed address in the body. No fake success state. */
  function newsletterForm(id) {
    return el("form", "flex flex-col sm:flex-row gap-3 w-full lg:w-auto", { action: "mailto:" + NEWSLETTER_TO, method: "get", enctype: "text/plain" }, [
      el("input", "", { type: "hidden", name: "subject", value: "Newsletter subscription" }),
      el("label", "sr-only", { for: id }, ["Email address"]),
      el("input", "w-full sm:w-72 rounded-[4px] bg-white text-[#0B1530] placeholder-[#64748B] px-4 py-3 text-sm border border-[#CBD5E1] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary", { id: id, type: "email", name: "body", required: "", autocomplete: "email", placeholder: "Enter your email" }),
      el("button", "inline-flex items-center justify-center bg-[#2F6BFF] hover:bg-[#1E56E3] text-white text-sm font-semibold px-6 py-3 rounded-[4px] shadow-sm transition-colors" + FOCUS, { type: "submit" }, ["Subscribe"])
    ]);
  }

  window.BlogUtils = { el: el, svg: svg, DOC_SVG: DOC_SVG, FOCUS: FOCUS, fmtDate: fmtDate, readTime: readTime, blockText: blockText,
    newestFirst: newestFirst, card: card, coverTile: coverTile, newsletterForm: newsletterForm, ARTICLE_PAGE: ARTICLE_PAGE, postHref: postHref };
})();
    }
  })(cq);
}
