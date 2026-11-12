// Generated from public/customers-src/banking.html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      // ---- page script ----
      try {
window.CUSTOMERS_DATA = {
  "footnote": "Scenarios are illustrative.",
  "defaultSlug": "trading",
  "pages": [
    {
      "slug": "trading",
      "file": "Trading.html",
      "tabLabel": "Trading",
      "hero": {
        "eyebrow": "CUSTOMERS · TRADING",
        "headline": "Know who you trade with, before the deal closes.",
        "subline": "ContexQ shows who really owns and runs the companies on the other side of your trades, with the evidence behind every finding.",
        "chips": ["Ownership mapping", "Enhanced due diligence", "Evidence trail"],
        "diagram": {
          "caption": "The path surfaces a hidden link, with the evidence. (illustrative)",
          "nodes": [
            { "id": "counterparty", "label": "Counterparty", "x": 20, "y": 18 },
            { "id": "holding", "label": "Holding company", "x": 76, "y": 18 },
            { "id": "director", "label": "Director", "x": 76, "y": 60 },
            { "id": "unlinked", "label": "Unlinked company", "x": 22, "y": 82 }
          ],
          "edges": [
            { "from": "counterparty", "to": "holding", "dashed": false, "tag": null },
            { "from": "holding", "to": "director", "dashed": false, "tag": null },
            { "from": "director", "to": "unlinked", "dashed": true, "tag": "Review required" }
          ]
        }
      },
      "stories": [
        {
          "id": "trading-tata-international",
          "customerName": "Tata International",
          "customerDescriptor": null,
          "logo": "/assets/images/customers/Tata_logo.jpeg",
          "logoPlaceholder": null,
          "stage": "Customer",
          "status": null,
          "title": null,
          "description": "Provided TI KYC forensic intelligence and enhanced due diligence on potential multi billion M&A.",
          "challenge": null,
          "approach": null,
          "outcome": null,
          "diagram": null,
          "sample": false,
          "sampleFields": []
        },
        {
          "id": "trading-sg-trading-company",
          "customerName": null,
          "customerDescriptor": "A large Singapore-based trading company",
          "logo": null,
          "logoPlaceholder": null,
          "stage": "Proof of concept",
          "status": "Ongoing",
          "title": "Enhanced due diligence on a Tanzanian construction company",
          "description": "Deeper checks on a high-risk counterparty in one place: ownership down to the real people, links to other companies, and sanctions or negative news, each with its evidence.",
          "challenge": "Little visibility into who owns and controls an overseas counterparty.",
          "approach": "Build the ownership map automatically and put deeper checks on a high-risk customer in one place.",
          "outcome": "Evaluation in progress.",
          "diagram": null,
          "sample": false,
          "sampleFields": []
        }
      ],
      "process": null,
      "comingSoon": null,
      "cta": { "headline": "Skeptical? Good. Bring your counterparties.", "buttonLabel": "Talk to the team" }
    },
    {
      "slug": "banks",
      "file": "banking.html",
      "tabLabel": "Banks",
      "hero": {
        "eyebrow": "CUSTOMERS · BANKING",
        "headline": "Enhanced due diligence on SMEs with a thin file.",
        "subline": "When a small company has little public history, ContexQ builds the picture from ownership, trade and open data, and shows the evidence.",
        "chips": ["Ownership down to real people", "Evidence-checked credit view", "Always-current reviews"],
        "diagram": {
          "caption": "Ownership mapped down to the real people. (illustrative)",
          "nodes": [
            { "id": "sme", "label": "SME borrower", "x": 20, "y": 18 },
            { "id": "owner", "label": "Owner", "x": 76, "y": 18 },
            { "id": "related", "label": "Related company", "x": 76, "y": 60 },
            { "id": "verified", "label": "Verified", "x": 22, "y": 82 }
          ],
          "edges": [
            { "from": "sme", "to": "owner", "dashed": false, "tag": null },
            { "from": "sme", "to": "verified", "dashed": false, "tag": null },
            { "from": "owner", "to": "related", "dashed": true, "tag": "Review required" }
          ]
        }
      },
      "stories": [
        {
          "id": "banks-universal-bank",
          "customerName": null,
          "customerDescriptor": "A large universal bank",
          "logo": null,
          "logoPlaceholder": null,
          "stage": "Beta / proof of value",
          "status": "Ongoing",
          "title": "Enhanced due diligence on SME corporates with a thin file",
          "description": "The platform builds the ownership map automatically, puts deeper checks on high-risk customers in one place, and checks the borrower's own claims against independent sources.",
          "challenge": "Checks take hours and go stale, and thin files give little to check.",
          "approach": "Build the ownership map, run deeper checks on high-risk customers, and verify claims against independent data.",
          "outcome": "Beta in progress.",
          "diagram": null,
          "sample": false,
          "sampleFields": []
        }
      ],
      "process": [
        { "step": 1, "title": "Match", "text": "One identity across sources" },
        { "step": 2, "title": "Connect", "text": "Who owns, runs or pays whom" },
        { "step": 3, "title": "Explain", "text": "Every finding with its evidence" }
      ],
      "comingSoon": null,
      "cta": { "headline": "Skeptical? Good. Bring your portfolio.", "buttonLabel": "Talk to the team" }
    },
    {
      "slug": "manufacturing",
      "file": "Manufacturing.html",
      "tabLabel": "Manufacturing",
      "hero": {
        "eyebrow": "CUSTOMERS · MANUFACTURING",
        "headline": "Your suppliers' suppliers are your risk.",
        "subline": "ContexQ maps the supplier layers beneath your direct suppliers, so you find hidden risk and better alternatives before you negotiate.",
        "chips": ["N-tier supplier map", "Risk scoring", "Ranked alternates"],
        "diagram": {
          "caption": "Three \"independent\" suppliers, one hidden dependency. (illustrative)",
          "nodes": [
            { "id": "t1", "label": "Tier-1", "x": 17, "y": 16 },
            { "id": "t2", "label": "Tier-2", "x": 50, "y": 16 },
            { "id": "t3", "label": "Tier-3", "x": 83, "y": 16 },
            { "id": "plant", "label": "Shared plant", "x": 50, "y": 76, "tag": "Single source", "highlight": true }
          ],
          "edges": [
            { "from": "t1", "to": "plant", "dashed": false, "tag": null },
            { "from": "t2", "to": "plant", "dashed": false, "tag": null },
            { "from": "t3", "to": "plant", "dashed": false, "tag": null }
          ]
        }
      },
      "stories": [
        {
          "id": "manufacturing-manufacturer",
          "customerName": null,
          "customerDescriptor": "A manufacturing company",
          "logo": null,
          "logoPlaceholder": null,
          "stage": "Proof of concept",
          "status": "Ongoing",
          "title": "Identifying key supplier risks and alternatives to negotiate better",
          "description": "Rebuilds the supplier network layer by layer, scores each supplier for failure, fraud and geopolitical risk, and suggests better alternates.",
          "challenge": "Hidden shared dependencies behind suppliers that look independent.",
          "approach": "Map the supplier network by tier, score risk, and rank alternates.",
          "outcome": "POC in progress.",
          "diagram": null,
          "sample": false,
          "sampleFields": []
        }
      ],
      "process": [
        { "step": 1, "title": "See beyond Tier-1", "text": null },
        { "step": 2, "title": "Find better alternates", "text": null },
        { "step": 3, "title": "Negotiate with the full picture", "text": null }
      ],
      "comingSoon": null,
      "cta": { "headline": "Skeptical? Good. Bring your supplier list.", "buttonLabel": "Talk to the team" }
    },
    {
      "slug": "government",
      "file": "Government.html",
      "tabLabel": "Government",
      "hero": {
        "eyebrow": "CUSTOMERS · GOVERNMENT",
        "headline": "One view across scattered public records.",
        "subline": "Tax, customs and justice agencies work with fragmented records and hidden links. This is our direction for the public sector.",
        "chips": ["Tax", "Customs", "Justice"],
        "diagram": {
          "caption": "Illustrative: three names, one party.",
          "nodes": [
            { "id": "i1", "label": "Importer A", "x": 17, "y": 16 },
            { "id": "i2", "label": "Importer B", "x": 50, "y": 16 },
            { "id": "i3", "label": "Importer C", "x": 83, "y": 16 },
            { "id": "shared", "label": "Shared owner and address", "x": 50, "y": 76, "highlight": true }
          ],
          "edges": [
            { "from": "i1", "to": "shared", "dashed": false, "tag": null },
            { "from": "i2", "to": "shared", "dashed": false, "tag": null },
            { "from": "i3", "to": "shared", "dashed": false, "tag": null }
          ]
        }
      },
      "stories": [],
      "process": null,
      "comingSoon": {
        "title": "Coming soon"
      },
      "cta": { "headline": "Working in tax, customs or justice?", "buttonLabel": "Talk to the team" }
    }
  ]
};
      } catch (err) { console.error('[customer-banks] page script error:', err); }
      // ---- page script ----
      try {
/* Renders a Customers page from window.CUSTOMERS_DATA.
   Page shells only need: <body data-page="<slug>"> and the two scripts. No copy lives here
   except small UI labels (row names, badge text). */
(function () {
  var DATA = window.CUSTOMERS_DATA;
  var slug = document.body.getAttribute('data-page');
  var page = DATA.pages.filter(function (p) { return p.slug === slug; })[0];
  if (!page) { document.body.textContent = 'Unknown page: ' + slug; return; }

  // Sample badge: on by default; set window.SHOW_SAMPLE_BADGE = false (or serve on a production host) to hide.
  var SHOW_BADGE = window.SHOW_SAMPLE_BADGE !== false;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function icon(name, cls) { return '<span class="material-symbols-outlined ' + (cls || '') + '" data-icon="' + name + '">' + name + '</span>'; }

  var css = '.cq-industry-strip{position:sticky;top:0;z-index:50;background:#050B1A;border-bottom:1px solid rgba(255,255,255,.06);border-top:1px solid rgba(255,255,255,.06)}' +
    '.cq-industry-strip .cq-in{max-width:80rem;margin:0 auto;padding:12px 24px;display:flex;gap:12px;overflow-x:auto;scrollbar-width:none}' +
    ".cq-industry-strip a{font-family:'IBM Plex Sans',sans-serif;font-size:12px;letter-spacing:.04em;white-space:nowrap;text-decoration:none;padding:8px 18px;border-radius:9999px;color:#8FA0BF;background:#0B1629;border:1px solid rgba(255,255,255,.08);transition:color .15s,border-color .15s,background .15s}" +
    '.cq-industry-strip a:hover{color:#fff;border-color:rgba(33,150,255,.5)}' +
    '.cq-industry-strip a.active{color:#fff;font-weight:700;border-color:transparent;background:linear-gradient(90deg,#1F6BE8,#1E9BFF);box-shadow:0 0 18px rgba(30,155,255,.35)}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function tabs() {
    return '<nav class="cq-industry-strip" aria-label="Customer sectors"><div class="cq-in">' +
      DATA.pages.map(function (p) {
        var on = p.slug === page.slug;
        return '<a href="/customer-stories/' + esc(p.slug) + '"' + (on ? ' class="active" aria-current="page"' : '') + '>' + esc(p.tabLabel) + '</a>';
      }).join('') + '</div></nav>';
  }

  function diagram(d) {
    var byId = {}; d.nodes.forEach(function (n) { byId[n.id] = n; });
    var lines = '', tags = '';
    d.edges.forEach(function (e) {
      var a = byId[e.from], b = byId[e.to]; if (!a || !b) return;
      lines += '<line x1="' + a.x + '%" y1="' + a.y + '%" x2="' + b.x + '%" y2="' + b.y + '%" stroke="' + (e.dashed ? '#F2B544' : '#1F55B8') + '" stroke-width="' + (e.dashed ? 2 : 1.5) + '"' + (e.dashed ? ' stroke-dasharray="5,4"' : '') + '></line>';
      if (e.tag) {
        tags += '<span class="absolute z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-wider bg-[#F2B544] text-[#0E1B33] px-2 py-0.5 rounded" style="left:' + ((a.x + b.x) / 2) + '%;top:' + ((a.y + b.y) / 2) + '%">' + esc(e.tag) + '</span>';
      }
    });
    var nodes = d.nodes.map(function (n) {
      return '<div class="absolute z-10 -translate-x-1/2 -translate-y-1/2 text-center px-3 py-2 rounded-xl shadow-lg w-max max-w-[150px] ' +
        (n.highlight ? 'bg-[#172c54] border-2 border-[#F2B544]' : 'bg-[#0E1B33] border border-[#1F55B8]') + '" style="left:' + n.x + '%;top:' + n.y + '%">' +
        '<p class="text-xs font-semibold text-white leading-tight">' + esc(n.label) + '</p>' +
        (n.tag ? '<span class="mt-1 inline-block text-[10px] font-bold uppercase tracking-wider text-[#F2B544]">' + esc(n.tag) + '</span>' : '') + '</div>';
    }).join('');
    return '<div class="bg-[#122344]/80 border border-[#1F55B8]/40 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-md">' +
      '<div class="relative w-full h-[300px]"><svg class="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">' + lines + '</svg>' + nodes + tags + '</div>' +
      '<p class="pt-3 mt-3 border-t border-white/10 text-[12px] text-[#A9B4CB]">' + esc(d.caption) + '</p></div>';
  }

  var chipIcons = ['account_tree', 'verified_user', 'flowsheet'];
  function hero() {
    var h = page.hero;
    return '<section class="bg-[#0E1B33] text-white pt-16 pb-20 relative overflow-hidden">' +
      '<div class="absolute inset-0 opacity-[0.07] pointer-events-none" style="background-image: radial-gradient(#1F55B8 1px, transparent 1px); background-size: 28px 28px;"></div>' +
      '<div class="absolute top-1/4 right-1/4 w-96 h-96 bg-[#1F55B8]/20 rounded-full blur-3xl pointer-events-none"></div>' +
      '<div class="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">' +
      '<div class="lg:col-span-7 lg:pr-4">' +
      '<h1 class="text-headline-xl font-headline-xl text-[#EDEFF5] mb-6 max-w-2xl leading-tight">' + esc(h.headline) + '</h1>' +
      '<p class="text-body-lg font-body-lg text-[#A9B4CB] mb-8 max-w-xl leading-relaxed">' + esc(h.subline) + '</p>' +
      '<div class="flex flex-wrap items-center gap-3">' + h.chips.map(function (c, i) {
        return '<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#1F55B8]/40 text-[#EDEFF5] text-label-md font-label-md backdrop-blur-sm">' +
          icon(chipIcons[i % chipIcons.length], 'text-sm text-[#F2B544]') + '<span>' + esc(c) + '</span></div>';
      }).join('') + '</div></div>' +
      '<div class="lg:col-span-5">' + diagram(h.diagram) + '</div></div></section>';
  }

  var blockDefs = [
    ['challenge', 'Challenge', 'crisis_alert'],
    ['approach', 'Approach', 'account_tree'],
    ['outcome', 'Outcome', 'pending']
  ];
  function nameOf(s) { return s.customerName || s.customerDescriptor || ''; }
  function clamp(n) { return 'display:-webkit-box;-webkit-line-clamp:' + n + ';-webkit-box-orient:vertical;overflow:hidden'; }
  function sampleBadge(s, dark) {
    return SHOW_BADGE && s.sample ? '<span class="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ' + (dark ? 'bg-[#B3261E]/20 text-[#FFB4AB] border border-[#FFB4AB]/40' : 'bg-[#FDECEA] text-[#B3261E] border border-[#B3261E]/30') + '">Sample copy</span>' : '';
  }
  function pills(s, dark) {
    var base = dark ? 'bg-white/10 text-[#EDEFF5] border border-white/20' : 'bg-surface-container text-[#111c2d] border border-outline-variant/50';
    return '<span class="inline-flex items-center px-2.5 py-1 rounded-full text-label-sm font-label-sm ' + base + '">' + esc(s.stage) + '</span>' +
      (s.status ? '<span class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-label-sm font-label-sm ' + base + '"><span class="w-2 h-2 rounded-full bg-emerald-500"></span>' + esc(s.status) + '</span>' : '') +
      sampleBadge(s, dark);
  }

  // Summary card
  function story(s) {
    var summary = s.title
      ? '<p class="text-title-md font-title-md text-[#111c2d] font-semibold leading-snug" style="' + clamp(2) + '">' + esc(s.title) + '</p>'
      : '<p class="text-body-md font-body-md text-[#525e7a] leading-relaxed" style="' + clamp(3) + '">' + esc(s.description) + '</p>';
    return '<article id="' + esc(s.id) + '" class="bg-white rounded-2xl border border-[#E3E6EA] p-8 transition-shadow duration-200 hover:shadow-[0px_6px_24px_rgba(14,27,51,0.10)] flex flex-col gap-6">' +
      '<div class="flex items-center gap-5">' +
      (s.logo ? '<div class="w-20 h-20 flex-shrink-0 rounded-xl bg-white border border-[#E3E6EA] overflow-hidden flex items-center justify-center"><img src="' + esc(s.logo) + '" alt="' + esc(s.customerName || '') + ' logo" class="w-full h-full object-contain" style="mix-blend-mode:multiply"></div>' : '') +
      '<div class="min-w-0">' +
      '<h3 class="text-[28px] leading-9 font-light text-[#111c2d]">' + esc(nameOf(s)) + '</h3></div></div>' +
      '<div>' + summary + '</div>' +
      '<div class="flex flex-wrap items-center justify-between gap-4 pt-2">' +
      '<div class="flex flex-wrap items-center gap-2.5">' + pills(s, false) + '</div>' +
      '<button type="button" data-open-story="' + esc(s.id) + '" aria-label="Read more about ' + esc(nameOf(s)) + '" class="cq-readmore bg-transparent border-0 p-0 text-[#1F55B8] font-semibold text-body-md cursor-pointer hover:underline focus-visible:underline focus-visible:outline-none">Read more →</button>' +
      '</div></article>';
  }

  // Overlay
  var modalCss = '.cq-ov{position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(5,11,26,.72);opacity:0;transition:opacity .2s ease}' +
    '.cq-ov.cq-open{opacity:1}.cq-ov .cq-panel{transform:translateY(12px);transition:transform .2s ease}.cq-ov.cq-open .cq-panel{transform:none}' +
    '.cq-ov .cq-panel:focus{outline:none}@media (prefers-reduced-motion: reduce){.cq-ov,.cq-ov .cq-panel{transition:none}}';
  var st2 = document.createElement('style'); st2.textContent = modalCss; document.head.appendChild(st2);

  function modalBody(s) {
    var logo = s.logo
      ? '<div class="w-28 h-28 flex-shrink-0 rounded-xl bg-white border border-white/20 overflow-hidden flex items-center justify-center"><img src="' + esc(s.logo) + '" alt="' + esc(s.customerName || '') + '" class="w-full h-full object-contain" style="mix-blend-mode:multiply"></div>'
      : '<div class="w-28 h-28 flex-shrink-0 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#A9B4CB]">' + icon('domain', 'text-5xl') + '</div>';
    var blocks = blockDefs.filter(function (d) { return s[d[0]] != null; }).map(function (d) {
      return '<div class="pt-4 border-t border-white/10"><p class="text-label-md font-label-md uppercase tracking-wider text-[#F2B544] flex items-center gap-1.5 mb-1">' + icon(d[2], 'text-base') + d[1] + '</p>' +
        '<p class="text-body-md font-body-md text-[#EDEFF5] leading-relaxed">' + esc(s[d[0]]) + '</p></div>';
    }).join('');
    var nameTag = s.title ? 'p' : 'h2';
    return '<div class="flex flex-col sm:flex-row gap-6">' + logo +
      '<div class="min-w-0 flex-1 space-y-4">' +
      '<' + nameTag + (s.title ? '' : ' id="cq-ov-title"') + ' class="text-[24px] leading-8 font-light text-white">' + esc(nameOf(s)) + '</' + nameTag + '>' +
      '<div class="flex flex-wrap items-center gap-2.5">' + pills(s, true) + '</div>' +
      (s.title ? '<h2 id="cq-ov-title" class="text-headline-sm font-headline-sm text-white font-semibold">' + esc(s.title) + '</h2>' : '') +
      (s.description ? '<p class="text-body-md font-body-md text-[#A9B4CB] leading-relaxed">' + esc(s.description) + '</p>' : '') +
      (s.diagram ? diagram(s.diagram) : '') +
      (blocks ? '<div class="space-y-4">' + blocks + '</div>' : '') +
      (s.diagram ? '<p class="text-label-md font-label-md text-[#A9B4CB]">' + esc(DATA.footnote) + '</p>' : '') +
      '</div></div>';
  }

  var FOCUSABLE = 'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])';
  var overlay = null, lastTrigger = null, prevOverflow = '';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function openStory(id, trigger) {
    var s = page.stories.filter(function (x) { return x.id === id; })[0];
    if (!s || overlay) return;
    lastTrigger = trigger;
    overlay = document.createElement('div');
    overlay.className = 'cq-ov';
    overlay.innerHTML = '<div class="cq-panel relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#1F55B8]/40 p-8 text-white shadow-2xl" style="background:linear-gradient(160deg,#0E1B33 0%,#122344 100%)" role="dialog" aria-modal="true" aria-labelledby="cq-ov-title" tabindex="-1">' +
      '<button type="button" class="cq-close absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl leading-none flex items-center justify-center" aria-label="Close">×</button>' +
      modalBody(s) + '</div>';
    document.body.appendChild(overlay);
    prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    var panel = overlay.querySelector('.cq-panel');
    void overlay.offsetWidth;
    overlay.classList.add('cq-open');
    panel.focus();
    overlay.addEventListener('mousedown', function (e) { if (e.target === overlay) closeStory(); });
    overlay.querySelector('.cq-close').addEventListener('click', closeStory);
    document.addEventListener('keydown', onKey, true);
  }

  function closeStory() {
    if (!overlay) return;
    var ov = overlay, trig = lastTrigger;
    overlay = null;
    document.removeEventListener('keydown', onKey, true);
    ov.classList.remove('cq-open');
    setTimeout(function () {
      ov.remove();
      document.body.style.overflow = prevOverflow;
      if (trig && document.body.contains(trig)) trig.focus();
    }, reduce ? 0 : 200);
  }

  function onKey(e) {
    if (!overlay) return;
    if (e.key === 'Escape') { e.preventDefault(); closeStory(); return; }
    if (e.key !== 'Tab') return;
    var panel = overlay.querySelector('.cq-panel');
    var items = Array.prototype.slice.call(panel.querySelectorAll(FOCUSABLE));
    if (!items.length) { e.preventDefault(); return; }
    var first = items[0], last = items[items.length - 1], active = document.activeElement;
    if (e.shiftKey && (active === first || active === panel)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
    else if (!panel.contains(active)) { e.preventDefault(); first.focus(); }
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-open-story]');
    if (b) openStory(b.getAttribute('data-open-story'), b);
  });
  function process(items) {
    return '<div class="grid grid-cols-1 md:grid-cols-3 gap-6">' + items.map(function (it) {
      return '<div class="bg-surface-container-lowest rounded-2xl border border-[#E3E6EA] p-6"><span class="inline-flex w-8 h-8 items-center justify-center rounded-full bg-[#1F55B8] text-white text-sm font-bold mb-3">' + esc(it.step) + '</span>' +
        '<h3 class="text-title-md font-title-md text-[#111c2d] font-bold">' + esc(it.title) + '</h3>' +
        (it.text ? '<p class="text-body-md font-body-md text-[#525e7a] mt-1">' + esc(it.text) + '</p>' : '') + '</div>';
    }).join('') + '</div>';
  }

  function comingSoon(c) {
    return '<div class="bg-surface-container-lowest rounded-2xl border border-dashed border-[#C3C6D5] p-12 text-center flex flex-col items-center gap-5">' +
      icon('account_balance', 'text-4xl text-[#1F55B8]') + '<h3 class="text-headline-md font-headline-md text-[#111c2d]">' + esc(c.title) + '</h3>' +
      '</div>';
  }

  // Pre-filled enquiry email for this sector (same format as the rest of the site).
  var SECTOR = { trading: 'trading', banks: 'banking', manufacturing: 'manufacturing', government: 'government' };
  function mailDraft() {
    var area = SECTOR[page.slug] || page.tabLabel.toLowerCase();
    var subject = area.charAt(0).toUpperCase() + area.slice(1) + ' enquiry';
    var body = 'Hi ContexQ team,\n\nI\'d like to discuss how ContexQ could help us with ' + area + '.\n\nName:\nCompany:\nRole:\nWhat we\'re looking to solve:\n\nThanks,';
    return 'mailto:inquiry@contexq.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  function cta() {
    return '<section class="bg-[#0E1B33] text-white py-16 border-t border-white/10"><div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">' +
      '<h2 class="text-headline-md font-headline-md text-[#EDEFF5] leading-snug max-w-2xl">' + esc(page.cta.headline) + '</h2>' +
      '<div class="flex flex-col items-start md:items-center gap-4 flex-shrink-0">' +
      '<a href="/contact" class="cq-cta inline-flex items-center justify-center whitespace-nowrap bg-[#2F86FF] hover:bg-[#1F6BE8] text-white font-semibold rounded-lg px-8 py-3.5 transition-colors duration-150 shadow-md">' + esc(page.cta.buttonLabel) + '</a>' +
      '<p class="text-[15px] text-[#8FA0BF] whitespace-nowrap">or mail us at <a href="' + esc(mailDraft()) + '" class="text-[#3D8BFF] hover:underline">inquiry@contexq.com</a></p></div></div></section>';
  }

  var main = '<main class="py-16 bg-[#F7F8FB] flex-grow"><div class="max-w-6xl mx-auto px-6 space-y-8">' +
    page.stories.map(story).join('') +
    (page.process ? process(page.process) : '') +
    (page.comingSoon ? comingSoon(page.comingSoon) : '') +
    '<p class="text-label-md font-label-md text-[#525e7a] text-center">' + esc(DATA.footnote) + '</p></div></main>';

  document.title = 'ContexQ — Customers: ' + page.tabLabel;
  document.body.innerHTML = tabs() + hero() + main + cta();
})();
      } catch (err) { console.error('[customer-banks] page script error:', err); }
      return {  };
    }
  })(cq);
}
