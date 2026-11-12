// Generated from public/eco-skin/blog-article.js (shared by the Ecosystem views).
/* eslint-disable */
export default function run(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
/* Reusable blog article template. Renders any post from window.BLOG_POSTS (blogs-data.js).
   Slug comes from ?slug=... or <main data-default-slug="...">. */
(function () {
  var U = window.BlogUtils, el = U.el, FOCUS = U.FOCUS;
  var posts = window.BLOG_POSTS || [];
  var root = document.getElementById("article-root");
  var slug = new URLSearchParams(location.search).get("slug") || root.getAttribute("data-default-slug");
  var post = posts.filter(function (p) { return p.slug === slug; })[0];
  var INSIGHTS_HREF = "insights.html";
  var GET_STARTED = (window.ECOSYSTEM && window.ECOSYSTEM.getStartedHref) || "#";
  var LINK_CLS = "text-primary underline underline-offset-2 hover:text-[#003cac] rounded" + FOCUS;

  if (!post) { root.appendChild(el("p", "text-[#64748B] py-12 text-center", {}, ["Article not found."])); return; }

  /* Inline markup: **bold** and [label](url) (label may itself contain **bold**). */
  function inline(text) {
    var frag = document.createDocumentFragment();
    var re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g, last = 0, m;
    while ((m = re.exec(text))) {
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      if (m[1] !== undefined) frag.appendChild(el("a", LINK_CLS, { href: m[2] }, [inline(m[1])]));
      else frag.appendChild(el("strong", "font-semibold text-[#0B1530]", {}, [m[3]]));
      last = re.lastIndex;
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    return frag;
  }

  /* ---------- SEO ---------- */
  function setMeta(sel, make, value) {
    var m = document.head.querySelector(sel);
    if (!m) { m = make(); document.head.appendChild(m); }
    m.setAttribute(m.tagName === "LINK" ? "href" : "content", value);
  }
  function meta(attr, name) { return function () { var m = document.createElement("meta"); m.setAttribute(attr, name); return m; }; }
  var firstPara = (post.body || []).filter(function (b) { return b.type === "p"; })[0];
  var firstSentence = firstPara ? (U.blockText(firstPara).match(/^.*?[.!?](?=\s|$)/) || [post.excerpt])[0] : post.excerpt;
  var canonical = "https://www.contexq.com/Ecosystem/insights/" + post.slug;
  document.title = post.title + " — ContexQ";
  setMeta('meta[name="description"]', meta("name", "description"), firstSentence);
  setMeta('link[rel="canonical"]', function () { var l = document.createElement("link"); l.rel = "canonical"; return l; }, canonical);
  setMeta('meta[property="og:title"]', meta("property", "og:title"), post.title);
  setMeta('meta[property="og:description"]', meta("property", "og:description"), firstSentence);
  setMeta('meta[property="og:type"]', meta("property", "og:type"), "article");
  setMeta('meta[property="og:url"]', meta("property", "og:url"), canonical);
  setMeta('meta[property="og:site_name"]', meta("property", "og:site_name"), "ContexQ");
  if (post.coverImage) setMeta('meta[property="og:image"]', meta("property", "og:image"), post.coverImage);
  var ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org", "@type": "Article",
    headline: post.title, datePublished: post.date, description: firstSentence,
    mainEntityOfPage: canonical, image: post.coverImage || undefined,
    publisher: { "@type": "Organization", name: "ContexQ", url: "https://www.contexq.com" }
  });
  document.head.appendChild(ld);

  /* ---------- Layout ---------- */
  var wrap = el("div", "max-w-[960px] mx-auto px-gutter md:px-gutter-desktop pt-8 pb-16");

  wrap.appendChild(el("div", "mb-6", {}, [
    el("a", "inline-flex items-center gap-1.5 text-[13px] font-medium text-[#545d7c] hover:text-primary transition-colors group rounded" + FOCUS, { href: INSIGHTS_HREF }, [
      el("span", "transition-transform duration-150 group-hover:-translate-x-0.5", { "aria-hidden": "true" }, ["←"]), "Back to Insights"
    ])
  ]));

  var coverFrame = post.coverImage
    ? el("img", "w-full h-full object-cover", { src: post.coverImage, alt: post.coverAlt || "" })
    : U.coverTile(post, "w-full h-full");
  wrap.appendChild(el("div", "rounded-2xl overflow-hidden aspect-video border border-[#E2E8F0] bg-white mb-8", {}, [coverFrame]));

  var rt = U.readTime(post);
  wrap.appendChild(el("header", "mb-8", {}, [
    el("h1", "text-[28px] md:text-[40px] leading-tight font-bold text-[#0B1530] tracking-tight mb-5", {}, [post.title]),
    el("div", "flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#64748B] pb-5", {}, [
      el("span", "px-2.5 py-0.5 rounded-full bg-[#EAF0FF] text-primary text-xs font-semibold", {}, [post.contentType]),
      el("time", "", { datetime: post.date }, [U.fmtDate(post.date)]),
      rt ? el("span", "", {}, ["· " + rt]) : null
    ]),
    el("div", "w-full border-b border-[#DDE3EF]", { "aria-hidden": "true" })
  ]));

  /* ---------- Article body ---------- */
  var bodyCls = "text-[17px] leading-[1.75] text-[#475569]";
  if (post.body && post.body.length) {
    var card = el("article", "bg-white rounded-2xl shadow-[0_4px_24px_rgba(11,21,48,0.08)] border border-[#E2E8F0] p-6 sm:p-8 md:p-12 space-y-6");
    post.body.forEach(function (b) {
      if (b.type === "h2") card.appendChild(el("h2", "text-[26px] leading-snug font-bold text-[#0B1530] tracking-tight pt-4", {}, [b.text]));
      else if (b.type === "h3") card.appendChild(el("h3", "text-xl leading-snug font-bold text-[#0B1530] pt-2", {}, [b.text]));
      else if (b.type === "divider") card.appendChild(el("hr", "h-px border-0 bg-gradient-to-r from-transparent via-[#2F6BFF]/40 to-transparent my-2", { "aria-hidden": "true" }));
      else if (b.type === "leadp") card.appendChild(el("p", bodyCls, {}, [el("strong", "font-bold text-[#0B1530]", {}, [b.lead]), ": ", inline(b.text)]));
      else if (b.type === "list") {
        var ul = el("ul", "space-y-4 list-none p-0");
        b.items.forEach(function (it) {
          ul.appendChild(el("li", bodyCls + " pl-5 border-l-[3px] border-[#2F6BFF]/40", {}, [el("strong", "font-bold text-[#0B1530]", {}, [it.lead]), ": ", inline(it.text)]));
        });
        card.appendChild(ul);
      } else card.appendChild(el("p", bodyCls, {}, [inline(b.text)]));
    });
    wrap.appendChild(card);
  }

  /* ---------- Newsletter + Talk to the team ---------- */
  wrap.appendChild(el("section", "mt-10 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6", { "aria-labelledby": "nl-heading" }, [
    el("div", "max-w-md", {}, [
      el("h2", "text-xl font-bold text-[#0B1530]", { id: "nl-heading" }, ["Stay in the loop"]),
      el("p", "mt-2 text-[15px] text-[#64748B] leading-relaxed", {}, ["Get new articles on decision intelligence, entity resolution and managing risk, straight to your inbox."])
    ]),
    U.newsletterForm("article-newsletter-email")
  ]));

  /* ---------- More articles ---------- */
  var others = U.newestFirst(posts.filter(function (p) { return p.slug !== post.slug; }));
  if (others.length) {
    var more = el("section", "mt-14", { "aria-labelledby": "more-heading" }, [
      el("h2", "text-[28px] font-bold text-[#0B1530] tracking-tight mb-6", { id: "more-heading" }, ["More articles"])
    ]);
    var g = el("div", "grid grid-cols-1 md:grid-cols-2 gap-6");
    others.forEach(function (p) { g.appendChild(U.card(p)); });
    more.appendChild(g);
    wrap.appendChild(more);
  }

  /* ---------- Have a question? (after More articles) ---------- */
  wrap.appendChild(el("section", "mt-14 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6", { "aria-labelledby": "talk-heading" }, [
    el("div", "", {}, [
      el("h2", "text-xl font-bold text-[#0B1530]", { id: "talk-heading" }, ["Have a question?"]),
      el("p", "mt-2 text-[15px] text-[#64748B] leading-relaxed", {}, ["Speak with the ContexQ team about your data challenges."])
    ]),
    el("div", "flex flex-col items-start md:items-center gap-3 shrink-0", {}, [
      el("a", "inline-flex items-center justify-center bg-[#2F6BFF] hover:bg-[#1E56E3] text-white text-sm font-semibold px-6 py-3 rounded-[4px] shadow-sm transition-colors shrink-0" + FOCUS, { href: GET_STARTED }, ["Talk to the team"]),
      el("p", "text-[13px] text-[#64748B]", {}, ["or mail us at ", el("a", "underline" + FOCUS, { href: "mailto:inquiry@contexq.com?subject=" + encodeURIComponent("Question about: " + post.title) + "&body=" + encodeURIComponent("Hi ContexQ team,\n\nI've just read \u201c" + post.title + "\u201d on the ContexQ blog and would like to discuss it with your team.\n\nName:\nCompany:\nRole:\nWhat we're looking to solve:\n\nThanks,"), style: "color:#2F6BFF;text-underline-offset:2px" }, ["inquiry@contexq.com"])])
    ])
  ]));

  root.appendChild(wrap);
})();
    }
  })(cq);
}
