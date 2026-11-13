// Generated from public/eco-skin/ecosystem-shared.js (shared by the Ecosystem views).
/* eslint-disable */
export default function run(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
/* Shared Ecosystem chrome: slim header + sticky pill tab bar. Used by every Ecosystem page.
   Usage: <div id="ecosystem-chrome" data-active="Press"></div> then load this script. */
(function () {
  /* Prevent layout jump when switching between pages with differing scroll heights */
  if (!document.getElementById("ecosystem-scrollbar-stable")) {
    var scrollStyle = document.createElement("style");
    scrollStyle.id = "ecosystem-scrollbar-stable";
    scrollStyle.textContent = "html { scrollbar-gutter: stable; }";
    document.head.appendChild(scrollStyle);
  }

  /* When embedded inside the Next.js site: smooth the visual transitions
     (soften the stark dark bands, breathing room at top/bottom, cleaner section
     separations) so the light-theme content doesn't feel cluttered against the
     site's dark chrome. */
  if (false) { // embed skin is now part of the scoped view CSS
    var skin = document.createElement("style");
    skin.id = "ecosystem-embed-skin";
    skin.textContent = [
      /* Clean light theme with Hanken Grotesk - matches site typography without clashing */
      "@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&display=swap');",
      "body, body * { font-family: 'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif !important; }",
      "body { background: #ffffff !important; color: #0B1B2E; }",
      "main { padding-top: 0 !important; padding-bottom: 0 !important; }",
      "main > section { padding-top: 72px !important; padding-bottom: 72px !important; }",
      /* Dark-navy sections the HTML carried in - flatten to a subtle paper-gray */
      "section.bg-\\[\\#0B1530\\] { background: #F3F6FB !important; color: #0B1B2E !important; border-color: #E1E7F0 !important; }",
      "section.bg-\\[\\#0B1530\\] h1, section.bg-\\[\\#0B1530\\] h2, section.bg-\\[\\#0B1530\\] h3 { color: #0B1B2E !important; }",
      "section.bg-\\[\\#0B1530\\] p, section.bg-\\[\\#0B1530\\] span:not(.px-3) { color: #475873 !important; }",
      /* Safe top-gap so first section/div isn't under the site header */
      "body > main > :first-child { padding-top: 96px !important; }",
      "body > main#insights-root > div:first-child, body > main#release-root > div:first-child { padding-top: 96px !important; padding-bottom: 24px !important; }",
    ].join("\n");
    document.head.appendChild(skin);
  }

  // When embedded in Next.js, tabs navigate the parent window to real routes.
  // Detect embed via iframe nesting OR explicit ?embed=1 query (belt-and-suspenders
  // so same-origin iframe cases that fail the nesting check still suppress chrome).
  var EMBEDDED = (function () {
    try {
      if (window.self !== window.top) return true;
    } catch (e) { return true; } // cross-origin access throws → embedded
    try {
      if (/[?&]embed=1\b/.test(window.location.search)) return true;
    } catch (e) {}
    return false;
  })();
  var TABS = [
    { label: "Insights", href: EMBEDDED ? "/Ecosystem/blogs" : "insights.html" },
    { label: "Awards", href: EMBEDDED ? "/Ecosystem/awards" : "Awards.html" },
    { label: "Press", href: EMBEDDED ? "/Ecosystem/press-releases" : "PressReleases.html" },
    { label: "Affiliations", href: EMBEDDED ? "/Ecosystem/affiliations" : "Affiliations.html" },
    { label: "FAQs", href: EMBEDDED ? "/Ecosystem/faq" : "FAQs.html" }
  ];
  var HOME_HREF = "index.html";
  var GET_STARTED_HREF = "/contact";
  window.ECOSYSTEM = { getStartedHref: GET_STARTED_HREF };

  function el(tag, cls, attrs, children) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    (children || []).forEach(function (c) {
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }

  var FOCUS = " focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6BFF]";

  function build(active) {
    var frag = document.createDocumentFragment();

    var logo = el("a", "inline-flex items-center gap-2 font-bold text-[#0B1530] tracking-tight text-xl rounded-lg" + FOCUS,
      { href: HOME_HREF, "aria-label": "ContexQ home" },
      [el("span", "w-8 h-8 rounded-lg bg-[#2F6BFF] flex items-center justify-center text-white font-bold text-base", { "aria-hidden": "true" }, ["C"]), "CONTEXQ"]);
    var back = el("a", "inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-[#0B1530] transition-colors rounded" + FOCUS,
      { href: HOME_HREF },
      [el("span", "", { "aria-hidden": "true" }, ["←"]), "Back to pie"]);
    var cta = el("a", "inline-flex items-center justify-center text-sm font-semibold bg-[#2F6BFF] text-white hover:bg-[#1E56E3] transition-colors px-4 py-2 rounded-lg shadow-sm" + FOCUS,
      { href: GET_STARTED_HREF }, ["Get Started"]);

    var header = el("header", "w-full bg-white border-b border-[#E2E8F0] shadow-xs sticky top-0 z-40", {}, [
      el("div", "max-w-[1240px] mx-auto px-gutter md:px-gutter-desktop h-14 flex items-center justify-between gap-4", {}, [
        el("div", "flex items-center gap-4 sm:gap-6", {}, [logo, back]),
        cta
      ])
    ]);

    var list = el("div", "inline-flex items-center gap-2", {});
    TABS.forEach(function (t) {
      var isActive = t.label === active;
      var attrs = { href: t.href };
      if (EMBEDDED) attrs.target = "_top";
      var a = el("a",
        "px-4 py-1.5 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-colors" + FOCUS + " " +
        (isActive ? "bg-[#2F6BFF] text-white font-semibold shadow-sm" : "text-slate-600 hover:text-[#0B1530] hover:bg-slate-100"),
        attrs, [t.label]);
      if (isActive) a.setAttribute("aria-current", "page");
      list.appendChild(a);
    });
    var navSticky = EMBEDDED
      ? "w-full bg-[#F8FAFC] border-b border-[#E2E8F0] shadow-xs"
      : "w-full bg-[#F8FAFC] border-b border-[#E2E8F0] sticky top-14 z-30 shadow-xs";
    var nav = el("nav", navSticky,
      { "aria-label": "Ecosystem" }, [
        el("div", "max-w-[1240px] mx-auto px-gutter md:px-gutter-desktop py-2.5 overflow-x-auto whitespace-nowrap flex items-center gap-2", {}, [list])
      ]);

    // Suppress the duplicated top header AND the secondary tab nav when embedded
    // (Next.js site already provides navigation via the pie). Keep both when the
    // HTML file is opened standalone.
    if (!EMBEDDED) {
      frag.appendChild(header);
      frag.appendChild(nav);
    }
    return frag;
  }

  var mount = document.getElementById("ecosystem-chrome");
  if (mount) mount.replaceWith(build(mount.getAttribute("data-active") || ""));
})();
    }
  })(cq);
}
