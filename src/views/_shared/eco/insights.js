// Generated from public/eco-skin/insights.js (shared by the Ecosystem views).
/* eslint-disable */
export default function run(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
/* Insights listing: Blog (with optional filter pills), Insight Reports, closing band. Helpers live in blog-utils.js. */
(function () {
  var U = window.BlogUtils, el = U.el, svg = U.svg, DOC_SVG = U.DOC_SVG, FOCUS = U.FOCUS, card = U.card, newestFirst = U.newestFirst;

  function sectionHeader(id, title, blurb) {
    return el("div", "grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-x-8 items-baseline", {}, [
      el("div", "md:col-span-6", {}, [el("h2", "text-[28px] font-bold text-[#0B1530] tracking-tight", { id: id }, [title])]),
      el("div", "md:col-span-6", {}, [el("p", "text-base text-[#64748B] leading-relaxed", {}, [blurb])])
    ]);
  }

  var root = document.getElementById("insights-root");

  /* Page header: site hero (styles: _shared/eco/eco-hero.css) */
  function heroLink(id, title, note) {
    return el("a", "eco-hero-link", { href: "#" + id }, [
      el("span", "eco-hero-link-title", {}, [title]),
      el("span", "eco-hero-link-note", {}, [note])
    ]);
  }
  root.appendChild(el("section", "eco-hero", { "aria-labelledby": "eco-hero-title" }, [
    el("div", "eco-hero-inner", {}, [
      el("h1", "", { id: "eco-hero-title" }, ["Insights"]),
      el("p", "eco-hero-lede", {}, ["Practical thinking on decision intelligence, entity resolution and managing risk."]),
      el("nav", "eco-hero-links", { "aria-label": "On this page" }, [
        heroLink("blog", "Blog", "Articles from the ContexQ team"),
        heroLink("reports", "Insight Reports", "In-depth research and reports")
      ])
    ])
  ]));

  /* Blog */
  var posts = newestFirst(window.BLOG_POSTS || []);
  var blog = el("section", "eco-hero-target w-full max-w-[1240px] mx-auto px-gutter md:px-gutter-desktop pt-12 md:pt-16 pb-16", { id: "blog", "aria-labelledby": "blog-heading" });
  blog.appendChild(sectionHeader("blog-heading", "Blog", "Articles from the ContexQ team."));
  var grid = el("div", "grid grid-cols-1 md:grid-cols-2 gap-6 mt-8");
  function renderGrid(type) {
    grid.textContent = "";
    posts.filter(function (p) { return !type || p.contentType === type; }).forEach(function (p) { grid.appendChild(card(p)); });
  }
  var types = ["Guides", "Case Insights", "News"].filter(function (t) { return posts.some(function (p) { return p.contentType === t; }); });
  if (types.length >= 2) {
    var bar = el("div", "flex flex-wrap gap-2 mt-8", { role: "group", "aria-label": "Filter articles by type" });
    ["All"].concat(types).forEach(function (t, i) {
      var b = el("button", "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors" + FOCUS, { type: "button", "aria-pressed": i === 0 ? "true" : "false" }, [t]);
      function style(on) { b.className = "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors" + FOCUS + (on ? " bg-primary-container text-white border-primary-container" : " bg-white text-[#475569] border-[#E2E8F0] hover:bg-slate-100"); b.setAttribute("aria-pressed", on ? "true" : "false"); }
      style(i === 0);
      b.addEventListener("click", function () {
        Array.prototype.forEach.call(bar.children, function (x) { x.__style(false); });
        style(true); renderGrid(i === 0 ? null : t);
      });
      b.__style = style; bar.appendChild(b);
    });
    blog.appendChild(bar);
    grid.className += " mt-6"; grid.classList.remove("mt-8");
  }
  renderGrid(null);
  blog.appendChild(grid);
  root.appendChild(blog);

  /* Insight Reports */
  var reports = newestFirst(window.INSIGHT_REPORTS || []);
  var rs = el("section", "eco-hero-target w-full bg-[#F4F6FA] py-12 md:py-16 border-t border-slate-200/80", { id: "reports", "aria-labelledby": "reports-heading" });
  var rin = el("div", "w-full max-w-[1240px] mx-auto px-gutter md:px-gutter-desktop");
  rin.appendChild(sectionHeader("reports-heading", "Insight Reports", "In-depth research and reports."));
  if (reports.length) {
    var rg = el("div", "grid grid-cols-1 md:grid-cols-2 gap-6 mt-8");
    reports.forEach(function (p) { rg.appendChild(card(p)); });
    rin.appendChild(rg);
  } else {
    rin.appendChild(el("div", "mt-8 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm py-14 px-6 flex flex-col items-center text-center gap-5", {}, [
      svg(DOC_SVG, "w-36 h-28"),
      el("h3", "text-xl font-bold text-[#0B1530]", {}, ["Reports are coming soon"])
    ]));
  }
  rs.appendChild(rin); root.appendChild(rs);

  /* Closing banner (only dark element). The site has no newsletter backend, so the form opens the visitor's
     email app addressed to NEWSLETTER_TO with their address in the body. It does not show a fake success state. */
  var NEWSLETTER_TO = "media@contexq.com";
  var WHITE_FOCUS = " focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
  var form = el("form", "flex flex-col sm:flex-row gap-3 w-full lg:w-auto", { action: "mailto:" + NEWSLETTER_TO, method: "get", enctype: "text/plain" }, [
    el("input", "", { type: "hidden", name: "subject", value: "Newsletter subscription" }),
    el("label", "sr-only", { for: "newsletter-email" }, ["Email address"]),
    el("input", "w-full sm:w-72 rounded-[4px] bg-white text-[#0B1530] placeholder-[#64748B] px-4 py-3 text-sm border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-white", { id: "newsletter-email", type: "email", name: "body", required: "", autocomplete: "email", placeholder: "Enter your email" }),
    el("button", "inline-flex items-center justify-center bg-[#2F6BFF] hover:bg-[#1E56E3] text-white text-sm font-semibold px-6 py-3 rounded-[4px] shadow-sm transition-colors" + WHITE_FOCUS, { type: "submit" }, ["Subscribe"])
  ]);
  root.appendChild(el("section", "w-full max-w-[1240px] mx-auto px-gutter md:px-gutter-desktop py-12", { "aria-labelledby": "loop-heading" }, [
    el("div", "bg-[#0B1530] text-white rounded-2xl px-6 py-10 md:px-12 md:py-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8", {}, [
      el("div", "max-w-xl", {}, [
        el("h2", "text-[28px] md:text-[32px] font-bold tracking-tight leading-tight", { id: "loop-heading" }, ["Stay in the loop"]),
        el("p", "mt-3 text-base text-slate-300 leading-relaxed", {}, ["Get new articles on decision intelligence, entity resolution and managing risk, straight to your inbox."])
      ]),
      form
    ])
  ]));
})();
    }
  })(cq);
}
