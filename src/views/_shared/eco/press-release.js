// Generated from public/eco-skin/press-release.js (shared by the Ecosystem views).
/* eslint-disable */
export default function run(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
/* Reusable press release article template. Renders any entry from window.PRESS_RELEASES.
   Slug comes from ?slug=... or <main data-default-slug="...">. */
(function () {
  var releases = window.PRESS_RELEASES || [];
  var main = document.getElementById("release-root");
  var params = new URLSearchParams(location.search);
  var slug = params.get("slug") || main.getAttribute("data-default-slug");
  var idx = releases.findIndex(function (r) { return r.slug === slug; });
  var FOCUS = " focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
  var PRESS_LIST_HREF = "PressReleases.html";
  var PAGE = location.pathname.split("/").pop() || "PR_JM_joins.html";

  function el(tag, cls, attrs, children) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    (children || []).forEach(function (c) {
      if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }
  var PR_SLUG_PAGES = {
    "jean-michel-coeur-joins-contexq-co-founder-cto": "PR_JM_joins.html",
    "jean-michel-cto-speak-asia-tech-x-singapore-2026": "JMspeaksAt.html",
    "partha-dasgupta-appointed-chief-mentor": "PR_parthadasguta.html"
  };
  function releaseHref(r) {
    return PR_SLUG_PAGES[r.slug] || (PAGE + "?slug=" + encodeURIComponent(r.slug));
  }
  function setMeta(sel, create, value) {
    var m = document.head.querySelector(sel);
    if (!m) { m = create(); document.head.appendChild(m); }
    m.setAttribute(m.tagName === "LINK" ? "href" : "content", value);
  }
  function meta(attr, name) { return function () { var m = document.createElement("meta"); m.setAttribute(attr, name); return m; }; }

  if (idx < 0) {
    main.appendChild(el("p", "text-secondary py-12", {}, ["Release not found."]));
    return;
  }
  var r = releases[idx];

  /* ---------- SEO ---------- */
  var canonical = location.origin.indexOf("http") === 0 ? location.origin + location.pathname + "?slug=" + encodeURIComponent(r.slug) : location.href;
  var pageTitle = r.title + " - ContexQ";
  document.title = pageTitle;
  setMeta('meta[name="description"]', meta("name", "description"), r.excerpt);
  setMeta('link[rel="canonical"]', function () { var l = document.createElement("link"); l.rel = "canonical"; return l; }, canonical);
  setMeta('meta[property="og:title"]', meta("property", "og:title"), r.title);
  setMeta('meta[property="og:description"]', meta("property", "og:description"), r.excerpt);
  setMeta('meta[property="og:type"]', meta("property", "og:type"), "article");
  setMeta('meta[property="og:url"]', meta("property", "og:url"), canonical);
  setMeta('meta[property="og:site_name"]', meta("property", "og:site_name"), "ContexQ");
  setMeta('meta[property="article:published_time"]', meta("property", "article:published_time"), r.date);
  if (r.heroImage) setMeta('meta[property="og:image"]', meta("property", "og:image"), r.heroImage);
  var ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: r.title,
    datePublished: r.date,
    description: r.excerpt,
    mainEntityOfPage: canonical,
    image: r.heroImage || undefined,
    publisher: { "@type": "Organization", name: "ContexQ", url: "https://" + r.contact.website }
  });
  document.head.appendChild(ld);

  /* ---------- Back link ---------- */
  var wrap = el("div", "max-w-[1240px] mx-auto px-gutter md:px-gutter-desktop pt-8");
  wrap.appendChild(el("div", "mb-8", {}, [
    el("a", "inline-flex items-center gap-1.5 font-action-back text-action-back text-secondary hover:text-primary transition-colors group rounded" + FOCUS, { href: PRESS_LIST_HREF }, [
      el("span", "transition-transform duration-150 group-hover:-translate-x-0.5", { "aria-hidden": "true" }, ["←"]),
      "Back to press releases"
    ])
  ]));

  /* ---------- Header ---------- */
  wrap.appendChild(el("header", "max-w-[960px] mb-8", {}, [
    el("h1", "font-headline-section font-bold text-headline-section-mobile md:text-headline-section text-[#0B1530] tracking-tight mb-4", {}, [r.title]),
    el("p", "font-release-body text-[18px] leading-[1.6] text-secondary uppercase tracking-wide pb-4", {}, [r.dateline]),
    el("div", "w-full border-b border-surface-container-highest", { "aria-hidden": "true" })
  ]));

  var col = el("div", "max-w-[880px] mx-auto space-y-8 pb-12");

  /* Hero image: only when provided. heroPlaceholder renders a labelled stand-in when the file is missing. */
  if (r.heroImage) {
    col.appendChild(el("img", "w-full h-auto rounded-2xl border border-surface-container-highest block", { src: r.heroImage, alt: r.heroAlt || "" }));
  } else if (r.heroPlaceholder) {
    col.appendChild(el("div", "w-full aspect-[16/7] rounded-2xl border border-dashed border-outline bg-surface-container-low flex items-center justify-center text-center px-6 font-body-sm text-body-sm text-secondary", { role: "img", "aria-label": r.heroAlt || "Hero image placeholder" }, ["Hero banner image placeholder: add the file path to heroImage in press-releases-data.js"]));
  }

  /* ---------- Body card ---------- */
  var card = el("article", "bg-surface-container-lowest border border-surface-container-highest rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(11,21,48,0.08)] space-y-6");
  r.body.forEach(function (b) {
    if (b.type === "h2") card.appendChild(el("h2", "font-headline-card font-bold text-headline-card text-primary pt-2", {}, [b.text]));
    else card.appendChild(el("p", "font-release-body text-[18px] leading-[1.6] text-secondary", {}, [b.text]));
  });
  col.appendChild(card);

  /* ---------- Quote cards ---------- */
  var quotes = el("div", "space-y-6");
  (r.quotes || []).forEach(function (q) {
    var initials = q.name.split(/\s+/).map(function (w) { return w[0]; }).join("").slice(0, 2);
    var photo = q.photo
      ? el("img", "w-14 h-14 rounded-full object-cover border border-surface-container-highest flex-shrink-0", { src: q.photo, alt: "Photo of " + q.name, width: "56", height: "56" })
      : el("div", "w-14 h-14 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-lg border border-surface-container-highest flex-shrink-0", { "aria-hidden": "true" }, [initials]);
    quotes.appendChild(el("figure", "bg-surface-container-lowest border border-surface-container-highest border-l-[6px] border-l-primary-container rounded-2xl p-6 md:p-8 shadow-sm", {}, [
      el("blockquote", "font-release-body text-[18px] leading-[1.6] text-on-surface italic mb-5", {}, [q.text]),
      el("figcaption", "flex items-center gap-4", {}, [
        photo,
        el("div", "", {}, [
          el("div", "font-bold font-release-body text-[18px] leading-[1.6] text-[#0B1530]", {}, [q.name]),
          q.title ? el("div", "font-bold font-release-body text-[18px] leading-[1.6] text-secondary", {}, [q.title]) : null
        ])
      ])
    ]));
  });
  if ((r.quotes || []).length) col.appendChild(quotes);

  /* ---------- Media contact ---------- */
  var c = r.contact;
  function contactItem(icon, label, text, href, external) {
    var a = el("a", "font-release-body text-[18px] leading-[1.6] text-on-surface hover:text-primary transition-colors break-all rounded" + FOCUS, { href: href }, [text]);
    if (external) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    return el("div", "flex items-start gap-3", {}, [
      el("span", "material-symbols-outlined text-primary-container mt-0.5 text-xl", { "aria-hidden": "true" }, [icon]),
      el("div", "", {}, [el("div", "font-release-body text-[18px] leading-[1.6] text-secondary", {}, [label]), a])
    ]);
  }
  col.appendChild(el("section", "bg-surface-container-lowest border border-surface-container-highest rounded-2xl p-6 md:p-8 shadow-sm", { "aria-labelledby": "media-contact-heading" }, [
    el("h2", "font-headline-card font-bold text-headline-card text-[#0B1530] mb-6", { id: "media-contact-heading" }, ["Media Contact"]),
    el("div", "grid grid-cols-1 md:grid-cols-3 gap-6", {}, [
      contactItem("mail", "Email", c.email, "mailto:" + c.email),
      contactItem("call", "Phone", c.phone, "tel:" + c.phone.replace(/[^+\d]/g, "")),
      contactItem("language", "Website", c.website, "https://" + c.website, true)
    ])
  ]));

  /* ---------- Previous / Next (list is newest first) ---------- */
  var older = releases[idx + 1], newer = releases[idx - 1];
  if (older || newer) {
    var nav = el("nav", "border-t border-surface-container-highest pt-8 pb-16 flex justify-between items-start gap-6", { "aria-label": "More press releases" });
    var linkCls = "inline-flex items-center gap-2 font-release-body text-[18px] leading-[1.6] text-secondary hover:text-primary transition-colors group rounded" + FOCUS;
    nav.appendChild(older
      ? el("a", linkCls, { href: releaseHref(older), rel: "prev" }, [el("span", "", { "aria-hidden": "true" }, ["←"]), "Previous release"])
      : el("span"));
    nav.appendChild(newer
      ? el("a", linkCls, { href: releaseHref(newer), rel: "next" }, ["Next release", el("span", "", { "aria-hidden": "true" }, ["→"])])
      : el("span"));
    col.appendChild(nav);
  } else {
    col.appendChild(el("div", "pb-16"));
  }

  wrap.appendChild(col);
  main.appendChild(wrap);
})();
    }
  })(cq);
}
