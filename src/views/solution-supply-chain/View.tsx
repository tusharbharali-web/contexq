// Generated from public/html/contexq-supply-chain (5).html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-solution-supply-chain);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import type { CSSProperties } from "react";
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="solution-supply-chain" className="v-solution-supply-chain cq-html" lang="en" bodyClassName="cq-body">
      <a className="skip-link" href="#main">Skip to content</a>
      {" "}
      <header className="nav">
        <div className="wrap">
          <a className="brand" href="#top" aria-label="ContexQ, back to top">
            <b>
              CONTEX
              <span>Q</span>
            </b>
            <small>Context in every decision</small>
          </a>
          {" "}
          <nav aria-label="Primary">
            <ul>
              <li><a href="#teams">How it works</a></li>
              {" "}
              <li><a href="#problem">Business value</a></li>
              {" "}
              <li><a href="#answers">Where we help</a></li>
              {" "}
              <li><a href="#integrity">Procurement fraud</a></li>
              {" "}
              <li><a href="#action">Next steps</a></li>
            </ul>
          </nav>
          {" "}
          <Link prefetch={false} className="btn sm primary" href="/contact">Talk to the team</Link>
        </div>
      </header>
      {" "}
      <main id="main">
        <section id="top" className="hero" aria-labelledby="heroTitle">
          <div className="wrap hero-head">
            <div className="hero-grid">
              <div className="hero-copy">
                <h1 id="heroTitle">See the suppliers behind your suppliers.</h1>
                {" "}
                <div className="hero-copy-body">
                  <p className="hero-lede">
                    Disruption and fraud often start beyond the suppliers you pay. ContexQ helps you see them early and act with confidence.
                  </p>
                  {" "}
                  <div className="hero-actions"><a className="btn" href="#teams">See how it works</a></div>
                  {" "}
                  <p className="hero-proof"><span>Works alongside your ERP and sourcing tools</span></p>
                </div>
              </div>
              {" "}
              <div className="hero-visual">
                <div className="m-hero" id="mHero" data-phase="0" aria-label="Animated supply network: three suppliers turn out to depend on one producer; a disruption there could reach all three; alternative producers are identified.">
                  <div className="mh-head">
                    <span className="mh-eb">Global supply network</span>
                    <span className="mh-tag">Illustrative network</span>
                  </div>
                  {" "}
                  <p className="mh-cap" id="mhCap" aria-live="polite">Suppliers A, B and C appear to rely on separate companies.</p>
                  {" "}
                  <svg className="mh-svg" viewBox="0 0 360 380" aria-hidden="true">
                    <defs>
                      <radialGradient id="mhGlow">
                        <stop offset="0" stopColor="#2F86FF" stopOpacity=".22" />
                        <stop offset="1" stopColor="#2F86FF" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="180" cy="190" r="190" fill="url(#mhGlow)" />
                    <g className="mh-base">
                      <path id="mhE1" className="mh-l" d="M180 46 C180 80 60 80 60 118" />
                      <path id="mhE2" className="mh-l" d="M180 46 L180 118" />
                      <path id="mhE3" className="mh-l" d="M180 46 C180 80 300 80 300 118" />
                      <path id="mhE4" className="mh-l" d="M60 132 L60 206" />
                      <path id="mhE5" className="mh-l" d="M180 132 L180 206" />
                      <path id="mhE6" className="mh-l" d="M300 132 L300 206" />
                    </g>
                    <g className="mh-shared">
                      <path id="mhS1" className="mh-a" d="M60 220 C60 260 180 260 180 300" />
                      <path id="mhS2" className="mh-a" d="M180 220 L180 300" />
                      <path id="mhS3" className="mh-a" d="M300 220 C300 260 180 260 180 300" />
                    </g>
                    <g className="mh-alt">
                      <path className="mh-g" d="M60 220 C40 260 40 290 52 318" />
                      <path className="mh-g" d="M300 220 C320 260 320 290 308 318" />
                      <circle cx="56" cy="330" r="12" className="mh-ng" />
                      <circle cx="304" cy="330" r="12" className="mh-ng" />
                      <text x="56" y="360" className="mh-t g">Alternative</text>
                      <text x="304" y="360" className="mh-t g">Alternative</text>
                    </g>
                    <circle cx="180" cy="34" r="13" className="mh-you" />
                    <text x="180" y="14" className="mh-t w">Your company</text>
                    <g className="mh-n">
                      <circle cx="60" cy="125" r="9" />
                      <circle cx="180" cy="125" r="9" />
                      <circle cx="300" cy="125" r="9" />
                    </g>
                    <text x="60" y="152" className="mh-t">Supplier A</text>
                    <text x="180" y="152" className="mh-t">Supplier B</text>
                    <text x="300" y="152" className="mh-t">Supplier C</text>
                    <g className="mh-n">
                      <circle cx="60" cy="213" r="8" />
                      <circle cx="180" cy="213" r="8" />
                      <circle cx="300" cy="213" r="8" />
                    </g>
                    <text x="60" y="238" className="mh-t m">Component maker</text>
                    <text x="180" y="238" className="mh-t m">Sub-assembler</text>
                    <text x="300" y="238" className="mh-t m">Distributor</text>
                    <g className="mh-prod">
                      <circle className="mh-ring" cx="180" cy="312" r="13" />
                      <circle className="mh-np" cx="180" cy="312" r="13" />
                      <text x="180" y="344" className="mh-t p">Shared producer</text>
                    </g>
                    <g className="mh-haz">
                      <rect x="214" y="290" width="92" height="22" rx="11" />
                      <text x="260" y="305" className="mh-t r">⚠ Flood warning</text>
                    </g>
                    <g className="mh-dots c">
                      <circle r="3"><animateMotion dur="2.4s" repeatCount="indefinite"><mpath href="#mhE1" /></animateMotion></circle>
                      <circle r="3">
                        <animateMotion dur="2.4s" begin="-.8s" repeatCount="indefinite"><mpath href="#mhE2" /></animateMotion>
                      </circle>
                      <circle r="3">
                        <animateMotion dur="2.4s" begin="-1.6s" repeatCount="indefinite"><mpath href="#mhE3" /></animateMotion>
                      </circle>
                    </g>
                    <g className="mh-dots r">
                      <circle r="3.4">
                        <animateMotion dur="1.8s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                          <mpath href="#mhS1" />
                        </animateMotion>
                      </circle>
                      <circle r="3.4">
                        <animateMotion dur="1.8s" begin="-.6s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                          <mpath href="#mhS2" />
                        </animateMotion>
                      </circle>
                      <circle r="3.4">
                        <animateMotion dur="1.8s" begin="-1.2s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                          <mpath href="#mhS3" />
                        </animateMotion>
                      </circle>
                    </g>
                  </svg>
                  {" "}
                  <div className="mh-tabs" role="tablist" aria-label="Animation steps">
                    <button type="button" role="tab" aria-selected="true">Your suppliers</button>
                    {" "}
                    <button type="button" role="tab" aria-selected="false">Shared dependency</button>
                    {" "}
                    <button type="button" role="tab" aria-selected="false">Disruption</button>
                    {" "}
                    <button type="button" role="tab" aria-selected="false">Alternatives</button>
                  </div>
                </div>
                {" "}
                <div id="mapSec" aria-label="Animated global supply network">
                  <div className="cqstage" id="stage" aria-label="Animated global supply chain network">
                    <img className="map" id="map" alt="" decoding="async" src="/views/solution-supply-chain/inline-1.webp" />
                    {" "}
                    <div className="shade" />
                    {" "}
                    <canvas id="nodes" className="nodes" />
                    {" "}
                    <svg className="link-to-globe" id="globeLinks" viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true" />
                    {" "}
                    <div className="globe-wrap" id="globeWrap" aria-label="Animated ContexQ particle globe">
                      <canvas id="particleGlobe" className="particle-globe" aria-label="Animated blue particle globe" />
                      {" "}
                      <div className="globe-brand" id="globeBrand">
                        contex
                        <span>q</span>
                      </div>
                      {" "}
                      <div className="globe-caption">CONNECTED INTELLIGENCE</div>
                    </div>
                    {" "}
                    <div id="relationshipPanel" className="relationship-panel" aria-label="Supply chain relationship graph">
                      <div className="relationship-tabs" role="tablist" aria-label="Supply chain graph views">
                        <button className="relationship-tab active" role="tab" aria-selected="true" data-view="tiers">
                          <span>Your suppliers</span>
                          <small>Who you buy from, and who they buy from</small>
                        </button>
                        {" "}
                        <button className="relationship-tab" role="tab" aria-selected="false" data-view="hidden">
                          <span>Shared dependency</span>
                          <small>Where separate suppliers converge</small>
                        </button>
                        {" "}
                        <button className="relationship-tab" role="tab" aria-selected="false" data-view="impact">
                          <span>Disruption</span>
                          <small>Which relationships it could reach</small>
                        </button>
                        {" "}
                        <button className="relationship-tab" role="tab" aria-selected="false" data-view="alternates">
                          <span>Alternatives</span>
                          <small>Where to look next</small>
                        </button>
                      </div>
                      {" "}
                      <div className="relationship-body">
                        <div className="relationship-visual">
                          <svg id="relationshipSvg" viewBox="0 0 650 410" role="img" aria-label="Interactive supplier relationship network" />
                        </div>
                      </div>
                      {" "}
                      <div className="relationship-foot">Illustrative network and suppliers</div>
                    </div>
                    {" "}
                    <div className="hazard-layer" id="hazardLayer" aria-label="Illustrative natural hazard markers">
                      <div className="hazard" style={{ "--x": "24%", "--y": "37%", "--delay": "0ms" } as CSSProperties} data-hazard="">
                        <span className="pin" />
                        <span className="tag">
                          <strong>STORM</strong>
                          <em>{" Caribbean Sea"}</em>
                        </span>
                      </div>
                      {" "}
                      <div className="hazard" style={{ "--x": "69%", "--y": "49%", "--delay": "180ms" } as CSSProperties} data-hazard="">
                        <span className="pin" />
                        <span className="tag">
                          <strong>CYCLONE</strong>
                          <em>{" Bay of Bengal"}</em>
                        </span>
                      </div>
                      {" "}
                      <div className="hazard" style={{ "--x": "85%", "--y": "34%", "--delay": "360ms" } as CSSProperties} data-hazard="">
                        <span className="pin" />
                        <span className="tag">
                          <strong>TYPHOON</strong>
                          <em>{" Western Pacific"}</em>
                        </span>
                      </div>
                      {" "}
                      <div className="hazard" style={{ "--x": "81%", "--y": "53%", "--delay": "540ms" } as CSSProperties} data-hazard="">
                        <span className="pin" />
                        <span className="tag">
                          <strong>FLOOD</strong>
                          <em>{" Maritime SE Asia"}</em>
                        </span>
                      </div>
                      {" "}
                      <div className="hazard left-tag" style={{ "--x": "17%", "--y": "33%", "--delay": "720ms" } as CSSProperties} data-hazard="">
                        <span className="pin" />
                        <span className="tag">
                          <strong>WILDFIRE</strong>
                          <em>{" Western N. America"}</em>
                        </span>
                      </div>
                      {" "}
                      <div className="hazard" style={{ "--x": "58%", "--y": "68%", "--delay": "900ms" } as CSSProperties} data-hazard="">
                        <span className="pin" />
                        <span className="tag">
                          <strong>DROUGHT</strong>
                          <em>{" Southern Africa"}</em>
                        </span>
                      </div>
                      {" "}
                      <div className="hazard left-tag" style={{ "--x": "73%", "--y": "42%", "--delay": "1080ms" } as CSSProperties} data-hazard="">
                        <span className="pin" />
                        <span className="tag">
                          <strong>HEAT</strong>
                          <em>{" South Asia"}</em>
                        </span>
                      </div>
                      {" "}
                      <div className="hazard" style={{ "--x": "90%", "--y": "67%", "--delay": "1260ms" } as CSSProperties} data-hazard="">
                        <span className="pin" />
                        <span className="tag">
                          <strong>STORM</strong>
                          <em>{" South Pacific"}</em>
                        </span>
                      </div>
                      {" "}
                      <div className="hazard-legend">
                        <b>HAZARD SIGNALS</b>
                        <br />
                        Illustrative locations for demo purposes — not live alerts or forecasts.
                      </div>
                    </div>
                    {" "}
                    <div className="cq-ov cq-tl">
                      <div className="eb">Global supply network</div>
                      <div className="sb">Suppliers, sites and events</div>
                    </div>
                    {" "}
                    <div className="cq-ov cq-tr">
                      <div className="sb">Illustrative network</div>
                      <span hidden={true}>
                        <span id="count" />
                        <span id="total" />
                      </span>
                    </div>
                    {" "}
                    <div className="cq-ov cq-bl">
                      <i />
                      {"Geographic signals "}
                      <b id="status">Initialising</b>
                    </div>
                    {" "}
                    <div className="cq-ctl">
                      <button id="cqReplay" type="button">↻ Replay</button>
                      <button id="cqPause" type="button">Ⅱ Pause</button>
                    </div>
                  </div>
                  {" "}
                  <div className="cq-prog"><span id="progress" /></div>
                </div>
              </div>
            </div>
          </div>
          {" "}
          <div className="story" aria-label="What the animation shows">
            <div className="wrap">
              <ol id="cqStory">
                <li data-step="1">
                  <b>Map your network</b>
                  <span>Your suppliers and the companies they rely on, placed where they operate.</span>
                </li>
                {" "}
                <li data-step="2">
                  <b>Watch for disruption</b>
                  <span>Weather, climate and geopolitical events set against the sites that matter.</span>
                </li>
                {" "}
                <li data-step="3">
                  <b>Connect the evidence</b>
                  <span>Your records and outside sources linked to the right supplier.</span>
                </li>
                {" "}
                <li data-step="4">
                  <b>Reveal what’s shared</b>
                  <span>Separate suppliers traced to a common dependency, with alternatives to assess.</span>
                </li>
              </ol>
              {" "}
              <div className="story-foot">
                <span>Network, events and suppliers shown are illustrative, not live data.</span>
                <span>Use the tabs on the network to revisit each view.</span>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section id="problem" className="sec lt cq-value" aria-labelledby="pbTitle">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="pbTitle">
                Clearer supplier intelligence.
                <br />
                Better business decisions.
              </h2>
              <p>
                ContexQ connects fragmented supplier information to help you protect continuity, assess sourcing options and understand where your spend goes.
              </p>
            </div>
            <div className="cq-value-grid">
              <article>
                <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6zM8 12l3 3 5-6" />
                </svg>
                <h3>Protect supply continuity</h3>
                <p>Uncover shared dependencies and supplier warning signs.</p>
                <div className="cq-value-result">Focus contingency planning where disruption could affect production.</div>
              </article>
              <article>
                <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5h6v6H4zM14 13h6v6h-6zM7 11v7h7M10 8h7v5" />
                </svg>
                <h3>Make better sourcing choices</h3>
                <p>Assess alternatives alongside ownership, site exposure and qualification needs.</p>
                <div className="cq-value-result">Reduce the risk of replacing a supplier with the same underlying exposure.</div>
              </article>
              <article>
                <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 3h6v6H9zM3 16h6v6H3zM15 16h6v6h-6zM12 9v4M6 16v-3h12v3" />
                </svg>
                <h3>Strengthen procurement decisions</h3>
                <p>Connect supplier ownership with your purchasing history.</p>
                <div className="cq-value-result">Understand group-level spend and relationships behind competing bids.</div>
              </article>
              <article>
                <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3h10l4 4v14H5zM14 3v5h5M8 12h8M8 16h5" />
                </svg>
                <h3>Reduce manual investigation</h3>
                <p>Bring supplier records and relevant external evidence together.</p>
                <div className="cq-value-result">Spend less effort reconciling names and more time assessing the findings.</div>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section id="teams" className="sec dk pz-sec" aria-labelledby="tmTitle">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="tmTitle">Connect the information behind your suppliers.</h2>
              {" "}
              <p>
                ContexQ links your supplier and purchasing records with company, ownership, trade and risk information. Teams can assess the same supplier in context, with evidence behind the connections.
              </p>
            </div>
            {" "}
            <figure className="pz" id="pz" aria-labelledby="pzCap">
              <svg className="pz-svg" viewBox="0 0 1200 620" aria-hidden="true">
                <defs>
                  <linearGradient id="pzIn1" x1="0" x2="1">
                    <stop offset="0" stopColor="#4C8DF6" stopOpacity=".15" />
                    <stop offset="1" stopColor="#7DB4FF" />
                  </linearGradient>
                  <linearGradient id="pzIn2" x1="0" x2="1">
                    <stop offset="0" stopColor="#22B8A6" stopOpacity=".15" />
                    <stop offset="1" stopColor="#5FE0CF" />
                  </linearGradient>
                  <linearGradient id="pzBody" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#1D3B70" />
                    <stop offset=".55" stopColor="#0E2247" />
                    <stop offset="1" stopColor="#091833" />
                  </linearGradient>
                  <linearGradient id="pzRay" x1="0" x2="1">
                    <stop offset="0" stopColor="#EAF4FF" stopOpacity=".9" />
                    <stop offset="1" stopColor="#EAF4FF" stopOpacity=".15" />
                  </linearGradient>
                  <filter id="pzGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" /></filter>
                  <linearGradient id="pzO1" x1="0" x2="1">
                    <stop offset="0" stopColor="#FF5A54" />
                    <stop offset="1" stopColor="#FF5A54" stopOpacity=".25" />
                  </linearGradient>
                  <linearGradient id="pzO2" x1="0" x2="1">
                    <stop offset="0" stopColor="#F7B23B" />
                    <stop offset="1" stopColor="#F7B23B" stopOpacity=".25" />
                  </linearGradient>
                  <linearGradient id="pzO3" x1="0" x2="1">
                    <stop offset="0" stopColor="#2FD08C" />
                    <stop offset="1" stopColor="#2FD08C" stopOpacity=".25" />
                  </linearGradient>
                  <linearGradient id="pzO4" x1="0" x2="1">
                    <stop offset="0" stopColor="#4E95FF" />
                    <stop offset="1" stopColor="#4E95FF" stopOpacity=".25" />
                  </linearGradient>
                  <linearGradient id="pzO5" x1="0" x2="1">
                    <stop offset="0" stopColor="#A98BFF" />
                    <stop offset="1" stopColor="#A98BFF" stopOpacity=".25" />
                  </linearGradient>
                </defs>
                <g className="pz-in" transform="translate(0 30)">
                  <path className="pz-b1" pathLength="1" d="M250 170 C380 170 400 272 462 272" stroke="url(#pzIn1)" />
                  <path className="pz-b2" pathLength="1" d="M250 382 C380 382 400 272 462 272" stroke="url(#pzIn2)" />
                  <path className="pz-m" pathLength="1" d="M462 272 L532 272" />
                  <path className="pz-m-glow" d="M462 272 L532 272" filter="url(#pzGlow)" />
                </g>
                <g className="pz-prism" transform="translate(0 30)">
                  <polygon className="pz-halo" points="600,118 452,420 748,420" filter="url(#pzGlow)" />
                  <polygon className="pz-body" points="600,130 465,410 735,410" />
                  <polygon className="pz-ray" points="532,269 532,275 668,282 668,262" />
                  <polyline className="pz-edge" points="465,410 600,130 735,410" />
                  <text x="600" y="352" textAnchor="middle" className="pz-name">ContexQ</text>
                </g>
                <g className="pz-out">
                  <g className="o1">
                    <polygon points="668,297 668,303 838,94 838,76" fill="url(#pzO1)" />
                    <circle cx="838" cy="85" r="5" />
                  </g>
                  <g className="o2">
                    <polygon points="668,298 668,304 838,204 838,186" fill="url(#pzO2)" />
                    <circle cx="838" cy="195" r="5" />
                  </g>
                  <g className="o3">
                    <polygon points="668,299 668,305 838,314 838,296" fill="url(#pzO3)" />
                    <circle cx="838" cy="305" r="5" />
                  </g>
                  <g className="o4">
                    <polygon points="668,300 668,306 838,424 838,406" fill="url(#pzO4)" />
                    <circle cx="838" cy="415" r="5" />
                  </g>
                  <g className="o5">
                    <polygon points="668,301 668,307 838,534 838,516" fill="url(#pzO5)" />
                    <circle cx="838" cy="525" r="5" />
                  </g>
                </g>
              </svg>
              {" "}
              <div className="pz-ins">
                <div className="pz-src s1">
                  <b>Your systems</b>
                  <span>ERP, sourcing, planning and logistics. Connected read-only.</span>
                </div>
                {" "}
                <div className="pz-src s2">
                  <b>The outside world</b>
                  <span>Companies and owners, trade flows, sanctions, news and hazards.</span>
                </div>
              </div>
              {" "}
              <ol className="pz-steps" aria-label="What the engine does, in order">
                <li>
                  <b>Recognise</b>
                  each supplier
                </li>
                {" "}
                <li>
                  <b>Connect</b>
                  relationships
                </li>
                {" "}
                <li>
                  <b>Assess</b>
                  where risk applies
                </li>
                {" "}
                <li>
                  <b>Explain</b>
                  with evidence
                </li>
              </ol>
              {" "}
              <ul className="pz-outs" aria-label="What each team gets">
                <li className="o1" style={{ "--c": "#FF5A54" } as CSSProperties}>
                  <small>Risk and finance</small>
                  <b>Supplier health</b>
                  <span>Warning signs a delivery scorecard may not show.</span>
                </li>
                {" "}
                <li className="o2" style={{ "--c": "#F7B23B" } as CSSProperties}>
                  <small>Supply chain and continuity</small>
                  <b>Concentrated exposure</b>
                  <span>Where separate suppliers rely on a shared source.</span>
                </li>
                {" "}
                <li className="o3" style={{ "--c": "#2FD08C" } as CSSProperties}>
                  <small>Sourcing</small>
                  <b>Sourcing options</b>
                  <span>Alternative suppliers to assess, with the evidence behind them.</span>
                </li>
                {" "}
                <li className="o4" style={{ "--c": "#4E95FF" } as CSSProperties}>
                  <small>Planning and operations</small>
                  <b>Disruption impact</b>
                  <span>Which supplier sites and parts may be exposed.</span>
                </li>
                {" "}
                <li className="o5" style={{ "--c": "#A98BFF" } as CSSProperties}>
                  <small>Procurement</small>
                  <b>Relationship view</b>
                  <span>Vendors that belong to the same group, for better-informed negotiations.</span>
                </li>
              </ul>
              {" "}
              <figcaption className="vh" id="pzCap">
                Your systems and outside information enter ContexQ, which recognises suppliers, connects their relationships, assesses risk and explains its findings, then serves the questions different teams ask.
              </figcaption>
            </figure>
            {" "}
            <div className="m-pz" id="mPz" aria-label="Your systems and outside information enter ContexQ, which recognises suppliers, connects their relationships, assesses risk and explains its findings, then serves the questions different teams ask.">
              <div className="mp-ins">
                <div className="mp-src s1">
                  <b>Your systems</b>
                  <span>ERP, sourcing, planning and logistics. Connected read-only.</span>
                </div>
                {" "}
                <div className="mp-src s2">
                  <b>The outside world</b>
                  <span>Companies and owners, trade flows, sanctions, news and hazards.</span>
                </div>
              </div>
              {" "}
              <svg className="mp-svg" viewBox="0 0 360 250" aria-hidden="true">
                <defs>
                  <linearGradient id="mpIn1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#4E95FF" stopOpacity=".2" />
                    <stop offset="1" stopColor="#9FD0FF" />
                  </linearGradient>
                  <linearGradient id="mpIn2" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#2FD0C0" stopOpacity=".2" />
                    <stop offset="1" stopColor="#9FE8E0" />
                  </linearGradient>
                  <linearGradient id="mpTri" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#1D3B70" />
                    <stop offset="1" stopColor="#091833" />
                  </linearGradient>
                </defs>
                <path className="mp-in" d="M90 0 C90 50 170 60 176 108" stroke="url(#mpIn1)" />
                <path className="mp-in" d="M270 0 C270 50 190 60 184 108" stroke="url(#mpIn2)" />
                <polygon className="mp-tri" points="180,92 262,236 98,236" fill="url(#mpTri)" />
                <circle className="mp-core" cx="180" cy="150" r="6" />
                <text x="180" y="206" className="mp-name">ContexQ</text>
              </svg>
              {" "}
              <ol className="mp-steps">
                <li>
                  <b>Recognise</b>
                  each supplier
                </li>
                <li>
                  <b>Connect</b>
                  relationships
                </li>
                <li>
                  <b>Assess</b>
                  where risk applies
                </li>
                <li>
                  <b>Explain</b>
                  with evidence
                </li>
              </ol>
              {" "}
              <div className="mp-beams" aria-hidden="true">
                <i style={{ "--c": "#FF5A54" } as CSSProperties} />
                <i style={{ "--c": "#F7B23B" } as CSSProperties} />
                <i style={{ "--c": "#2FD08C" } as CSSProperties} />
                <i style={{ "--c": "#4E95FF" } as CSSProperties} />
                <i style={{ "--c": "#A98BFF" } as CSSProperties} />
              </div>
              {" "}
              <ul className="mp-outs">
                <li style={{ "--c": "#FF5A54" } as CSSProperties}>
                  <small>Risk and finance</small>
                  <b>Supplier health</b>
                  <span>Warning signs a delivery scorecard may not show.</span>
                </li>
                {" "}
                <li style={{ "--c": "#F7B23B" } as CSSProperties}>
                  <small>Supply chain and continuity</small>
                  <b>Concentrated exposure</b>
                  <span>Where separate suppliers rely on a shared source.</span>
                </li>
                {" "}
                <li style={{ "--c": "#2FD08C" } as CSSProperties}>
                  <small>Sourcing</small>
                  <b>Sourcing options</b>
                  <span>Alternative suppliers to assess, with the evidence behind them.</span>
                </li>
                {" "}
                <li style={{ "--c": "#4E95FF" } as CSSProperties}>
                  <small>Planning and operations</small>
                  <b>Disruption impact</b>
                  <span>Which supplier sites and parts may be exposed.</span>
                </li>
                {" "}
                <li style={{ "--c": "#A98BFF" } as CSSProperties}>
                  <small>Procurement</small>
                  <b>Relationship view</b>
                  <span>Vendors that belong to the same group, for better-informed negotiations.</span>
                </li>
              </ul>
            </div>
            {" "}
            <p className="cq-data-note">
              Works alongside your existing systems. Connections and exposure analysis depend on the data available.
            </p>
          </div>
        </section>
        {" "}
        <section id="risks" className="sec lt cq-risk-section" aria-labelledby="rkTitle">
          <div className="wrap">
            <div className="cq-risk-profile">
              <div className="cq-profile-intro">
                <span className="cq-eyebrow">A clearer supplier picture</span>
                <h2 id="rkTitle">Understand what is driving supplier risk.</h2>
                <p>
                  Financial health, ownership, sanctions, conduct and site exposure need different responses. Review the relevant evidence before choosing a supplier.
                </p>
              </div>
              {" "}
              <div className="cq-profile-card">
                <div className="cq-profile-head">
                  <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 21V9l8-5 8 5v12M8 21v-6h8v6M8 10h1m6 0h1M8 12h1m6 0h1" />
                  </svg>
                  <div>
                    <strong>Potential supplier</strong>
                    <span>Illustrative assessment</span>
                  </div>
                </div>
                {" "}
                <div className="cq-profile-findings">
                  <div>
                    <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 20V4h16v16zM8 8h8M8 12h8M8 16h4" />
                    </svg>
                    <div>
                      <strong>Financial health</strong>
                      <b className="cq-stable">Stable, with thin margins</b>
                      <p>Review the financial position alongside other exposures.</p>
                    </div>
                  </div>
                  {" "}
                  <div>
                    <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21V10l6 3V8l6 4V3h4l2 18zM7 17h1m4 0h1m4 0h1" />
                    </svg>
                    <div>
                      <strong>Site exposure</strong>
                      <b className="cq-caution">Flood risk identified</b>
                      <p>The production site is in a flood-risk area.</p>
                    </div>
                  </div>
                  {" "}
                  <div>
                    <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 3h6v6H9zM3 16h6v6H3zM15 16h6v6h-6zM12 9v4M6 16v-3h12v3" />
                    </svg>
                    <div>
                      <strong>Ownership</strong>
                      <b className="cq-linked">Shared parent company</b>
                      <p>Connected to an existing supplier through ownership.</p>
                    </div>
                  </div>
                </div>
                <p className="cq-profile-action">
                  <strong>Before selecting an alternative</strong>
                  Assess site exposure and shared ownership alongside capability and qualification.
                </p>
              </div>
            </div>
            {" "}
            <p className="cq-data-note light">
              Site exposure and part-level analysis require your location and purchasing data. Missing information and inferred relationships are identified.
            </p>
          </div>
        </section>
        {" "}
        <section id="answers" className="sec lt cq-examples" aria-labelledby="ansTitle">
          <div className="wrap">
            <div className="cq-section-intro">
              <span className="cq-eyebrow">Where connected information helps</span>
              <h2 id="ansTitle">See what ContexQ helps you uncover.</h2>
              <p>From hidden dependencies to procurement exposure, turn connected information into a clearer next step.</p>
            </div>
            <article className="cq-story">
              <div className="cq-story-copy">
                <span className="cq-eyebrow">Supplier health</span>
                <h3>Reliable deliveries can hide emerging supplier risk.</h3>
                <p>ContexQ connects supplier records with financial and trade information to bring warning signs into view.</p>
                <div className="cq-takeaway">
                  <strong>Why it matters</strong>
                  <p>Focus supplier reviews and start contingency planning where warning signs warrant it.</p>
                </div>
                <small className="cq-illustrative">Illustrative example</small>
              </div>
              <div className="cq-story-visual cq-health" role="img" aria-label="A supplier delivers on schedule, while financial and trade information indicate a need for review.">
                <div className="cq-supplier-title">
                  <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 21V9l8-5 8 5v12M8 21v-6h8v6M8 10h1m6 0h1M8 12h1m6 0h1" />
                  </svg>
                  <div>
                    <strong>Your supplier</strong>
                    <span>Looking beyond delivery performance</span>
                  </div>
                </div>
                {" "}
                <div className="cq-signal">
                  <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                  <span>Deliveries</span>
                  <strong>On schedule</strong>
                </div>
                {" "}
                <div className="cq-signal cq-warning">
                  <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3 10 18H2zM12 9v5m0 3v1" />
                  </svg>
                  <span>Financial information</span>
                  <strong>Signs of pressure</strong>
                </div>
                {" "}
                <div className="cq-signal cq-warning">
                  <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3 10 18H2zM12 9v5m0 3v1" />
                  </svg>
                  <span>Trade activity</span>
                  <strong>Declining</strong>
                </div>
                {" "}
                <div className="cq-finding">Supplier review recommended</div>
              </div>
            </article>
            <article className="cq-story">
              <div className="cq-story-copy">
                <span className="cq-eyebrow">Supply continuity</span>
                <h3>Different suppliers can share the same dependency.</h3>
                <p>ContexQ traces upstream relationships to reveal where seemingly separate sources converge.</p>
                <div className="cq-takeaway">
                  <strong>Why it matters</strong>
                  <p>Prioritize qualification of alternatives that reduce shared exposure.</p>
                </div>
                <small className="cq-illustrative">Illustrative example</small>
              </div>
              <div className="cq-story-visual">
                <div className="cq-network cq-dependency" role="img" aria-label="Separate suppliers depend on a shared production site that supplies your component.">
                  <svg className="cq-connectors" viewBox="0 0 500 330" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M125 71 V110 Q125 125 145 125 H230 Q250 125 250 145M375 71 V110 Q375 125 355 125 H270 Q250 125 250 145M250 198 V255" />
                  </svg>
                  {" "}
                  <div className="cq-node cq-left">
                    <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 21V9l8-5 8 5v12M8 21v-6h8v6M8 10h1m6 0h1M8 12h1m6 0h1" />
                    </svg>
                    <strong>Supplier</strong>
                  </div>
                  <div className="cq-node cq-right">
                    <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 21V9l8-5 8 5v12M8 21v-6h8v6M8 10h1m6 0h1M8 12h1m6 0h1" />
                    </svg>
                    <strong>Alternative supplier</strong>
                  </div>
                  {" "}
                  <span className="cq-edge-label">Both rely on</span>
                  {" "}
                  <div className="cq-node cq-shared">
                    <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21V10l6 3V8l6 4V3h4l2 18zM7 17h1m4 0h1m4 0h1" />
                    </svg>
                    <strong>Shared production site</strong>
                  </div>
                  {" "}
                  <div className="cq-node cq-component">
                    <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3 9 5v9l-9 5-9-5V8zM3 8l9 5 9-5M12 13v9" />
                    </svg>
                    <strong>Your component</strong>
                  </div>
                </div>
                <div className="cq-finding">A shared dependency can affect supply</div>
              </div>
            </article>
            <article className="cq-story">
              <div className="cq-story-copy">
                <span className="cq-eyebrow">Procurement value</span>
                <h3>See the ownership behind your supplier relationships.</h3>
                <p>ContexQ links vendor records to their parent companies, revealing relationships across your supplier base.</p>
                <div className="cq-takeaway">
                  <strong>Why it matters</strong>
                  <p>Bring group-level spend into negotiations and assess concentration before committing more volume.</p>
                </div>
                <small className="cq-illustrative">Illustrative example</small>
              </div>
              <div className="cq-story-visual">
                <div className="cq-network cq-ownership" role="img" aria-label="Separate component, tooling, and logistics vendors are linked to a common parent company.">
                  <svg className="cq-connectors" viewBox="0 0 500 270" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M250 85 V130 M80 185 V145 Q80 130 95 130 H405 Q420 130 420 145 V185 M250 130 V185" />
                  </svg>
                  {" "}
                  <div className="cq-node cq-parent">
                    <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 3h6v6H9zM3 16h6v6H3zM15 16h6v6h-6zM12 9v4M6 16v-3h12v3" />
                    </svg>
                    <strong>Parent company</strong>
                  </div>
                  <span className="cq-owner-label">Ownership connections</span>
                  {" "}
                  <div className="cq-node cq-vendor cq-vendor-left">
                    <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3 9 5v9l-9 5-9-5V8zM3 8l9 5 9-5M12 13v9" />
                    </svg>
                    <strong>Component vendor</strong>
                  </div>
                  {" "}
                  <div className="cq-node cq-vendor cq-vendor-middle">
                    <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21V10l6 3V8l6 4V3h4l2 18zM7 17h1m4 0h1m4 0h1" />
                    </svg>
                    <strong>Tooling vendor</strong>
                  </div>
                  {" "}
                  <div className="cq-node cq-vendor cq-vendor-right">
                    <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 21V9l8-5 8 5v12M8 21v-6h8v6M8 10h1m6 0h1M8 12h1m6 0h1" />
                    </svg>
                    <strong>Logistics vendor</strong>
                  </div>
                </div>
                <div className="cq-finding">See the group behind your supplier spend</div>
              </div>
            </article>
            <article className="cq-story">
              <div className="cq-story-copy">
                <span className="cq-eyebrow">Disruption and alternatives</span>
                <h3>Find out what a disruption could mean for your supply.</h3>
                <p>
                  ContexQ connects weather and geopolitical signals to supplier locations and dependencies. Compare potential alternatives by exposure and qualification needs.
                </p>
                <div className="cq-takeaway">
                  <strong>Why it matters</strong>
                  <p>Focus supplier checks on relevant exposure and prepare sourcing options that support continuity.</p>
                </div>
                <small className="cq-illustrative">
                  Illustrative example. Exposure needs verification; alternative sources need qualification.
                </small>
              </div>
              <div className="cq-story-visual cq-event-visual" role="img" aria-label="A storm warning is connected to an exposed supplier site and the component that depends on it. Verify the impact with the supplier and assess alternative sources.">
                <div className="cq-event-flow">
                  <div>
                    <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 15a5 5 0 1 1 1-10 6 6 0 0 1 11 5 3 3 0 0 1-1 6M12 12l-4 6h5l-2 5 6-8h-5z" />
                    </svg>
                    <strong>Storm warning</strong>
                    <span>External event</span>
                  </div>
                  <span className="cq-flow-arrow" aria-hidden="true">↓</span>
                  <div className="cq-exposed">
                    <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21V10l6 3V8l6 4V3h4l2 18zM7 17h1m4 0h1m4 0h1" />
                    </svg>
                    <strong>Supplier site</strong>
                    <span>Potential exposure</span>
                  </div>
                  <span className="cq-flow-arrow" aria-hidden="true">↓</span>
                  <div>
                    <svg className="cq-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3 9 5v9l-9 5-9-5V8zM3 8l9 5 9-5M12 13v9" />
                    </svg>
                    <strong>Your component</strong>
                    <span>Connected dependency</span>
                  </div>
                </div>
                <div className="cq-finding">Verify impact. Assess alternative sources.</div>
              </div>
            </article>
          </div>
        </section>
        {" "}
        <section id="integrity" className="sec dk pi-sec" aria-labelledby="piTitle">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="cq-eyebrow pi-eb">Procurement fraud</span>
                <h2 id="piTitle">Uncover procurement fraud before it costs you.</h2>
              </div>
              {" "}
              <p>
                Procurement fraud hides in relationships and buying patterns that look normal one invoice at a time. ContexQ connects vendor, employee, ownership and purchasing records to bring them to light.
              </p>
            </div>
            {" "}
            <ul className="risks8" id="risks8">
              <li>
                <small>Conflict of interest</small>
                <b>An employee is quietly connected to a vendor.</b>
                <p>Vendor and employee records are compared for shared bank accounts, addresses and phone numbers.</p>
              </li>
              {" "}
              <li>
                <small>Ghost vendors</small>
                <b>A vendor with no real business behind it.</b>
                <p>Company records reveal home addresses, no trading history or a newly formed company.</p>
              </li>
              {" "}
              <li>
                <small>Bid rigging</small>
                <b>Competing bidders that aren’t really competing.</b>
                <p>Bidders owned by the same parent, or sharing directors or addresses, are linked.</p>
              </li>
              {" "}
              <li>
                <small>Favouritism</small>
                <b>One vendor keeps winning without competition.</b>
                <p>Repeated single-bid awards and unbroken invoice sequences stand out.</p>
              </li>
              {" "}
              <li>
                <small>Split purchases</small>
                <b>Orders broken up to avoid approval.</b>
                <p>Orders clustering just below a limit, from the same requester and vendor, are flagged.</p>
              </li>
              {" "}
              <li>
                <small>Buying after the fact</small>
                <b>Purchases approved after the work is done.</b>
                <p>Requests dated after the invoice are found, across every document, not a sample.</p>
              </li>
              {" "}
              <li>
                <small>Payment diversion</small>
                <b>Bank details changed just before a payment run.</b>
                <p>New details are checked against employee records and other vendors before money leaves.</p>
              </li>
              {" "}
              <li>
                <small>Sanctions and reputation</small>
                <b>Paying a sanctioned or high-risk owner without knowing it.</b>
                <p>Ownership is traced to the real owner and screened against sanctions lists and adverse news.</p>
              </li>
            </ul>
            {" "}
            <h3 className="pi-sub">How two of these come to light</h3>
            {" "}
            <div className="pi-grid" id="piGrid">
              <article className="pi-card">
                <h3>Conflict of interest</h3>
                {" "}
                <div className="pi-fig">
                  <svg viewBox="0 0 420 220" aria-hidden="true">
                    <g className="pi-base">
                      <circle cx="70" cy="110" r="26" className="n" />
                      <text x="70" y="160" className="w">Vendor</text>
                      <circle cx="350" cy="110" r="26" className="n" />
                      <text x="350" y="160" className="w">Employee</text>
                      <g className="ic">
                        <rect x="61" y="100" width="18" height="20" rx="2" />
                        <path d="M65 105h3M72 105h3M65 110h3M72 110h3M68 120v-4h4v4" />
                      </g>
                      <g className="ic">
                        <circle cx="350" cy="104" r="5" />
                        <path d="M341 121c1-6 5-9 9-9s8 3 9 9" />
                      </g>
                    </g>
                    <g className="pi-rev">
                      <path d="M96 110 L 184 110" className="l1" />
                      <path d="M324 110 L 236 110" className="l1" />
                      <rect x="184" y="88" width="52" height="44" rx="8" className="hit" />
                      <g className="ic2">
                        <path d="M198 106l12-7 12 7z" />
                        <path d="M201 109v10M207 109v10M213 109v10M219 109v10M198 121h24" />
                      </g>
                      <text x="210" y="70" className="am">Same bank account</text>
                      <path d="M70 84 L 160 40" className="l2" />
                      <path d="M350 84 L 260 40" className="l2" />
                      <text x="210" y="34" className="mt">Same address</text>
                    </g>
                  </svg>
                </div>
                {" "}
                <p className="pi-cap">
                  A vendor and an employee turn out to share a bank account and an address. On their own, both records look normal.
                </p>
              </article>
              {" "}
              <article className="pi-card">
                <h3>Split purchases</h3>
                {" "}
                <div className="pi-fig">
                  <svg viewBox="0 0 420 220" aria-hidden="true">
                    <path d="M30 186 H 400" className="ax" />
                    <g className="bars">
                      <rect x="40" y="160" width="26" height="26" />
                      <rect x="74" y="148" width="26" height="38" />
                      <rect x="108" y="140" width="26" height="46" />
                      <rect x="142" y="132" width="26" height="54" />
                      <rect x="176" y="138" width="26" height="48" />
                      <rect x="210" y="128" width="26" height="58" />
                      <rect x="244" y="58" width="26" height="128" className="hot" />
                      <rect x="278" y="76" width="26" height="110" className="hot" />
                      <rect x="320" y="170" width="26" height="16" />
                      <rect x="354" y="174" width="26" height="12" />
                    </g>
                    <path d="M312 30 V 190" className="lim" />
                    <text x="316" y="26" className="rd" textAnchor="start">Approval limit</text>
                    <text x="196" y="46" className="am" textAnchor="middle">Orders just below the limit</text>
                    <text x="215" y="208" className="mt">Order value →</text>
                  </svg>
                </div>
                {" "}
                <p className="pi-cap">
                  Orders pile up just below the approval limit. Legitimate framework orders are set aside first, so only the unusual ones remain.
                </p>
              </article>
            </div>
            {" "}
            <div className="pi-foot">
              <p>
                <b>With ContexQ, every document is checked, not a sample.</b>
                {" Each finding arrives as a clear case: the vendor, the purchases, who approved them and when, with a suggested next step."}
              </p>
              <p>
                <b>Fair and careful.</b>
                {" A pattern is a reason to look, not proof. Documents are reviewed before anyone is named, and holding a payment is always a person’s decision."}
              </p>
            </div>
          </div>
        </section>
        {" "}
        <section id="action" className="sec lt ac-sec" aria-labelledby="acTitle">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="cq-eyebrow">From insight to action</span>
                <h2 id="acTitle">Every finding comes with a recommended next step.</h2>
              </div>
              {" "}
              <p>
                ContexQ prepares the evidence and the options, in the tools your teams already use. The person accountable makes the call.
              </p>
            </div>
            {" "}
            <div className="ac-grid" id="acGrid">
              <article className="ac-card">
                <span className="ac-tag t-dis">Disruption</span>
                <h3>A storm is heading for a port several of your suppliers use.</h3>
                {" "}
                <p className="ac-know">
                  Already identified: the exposed sites, materials and shipments, and approved alternatives for some parts.
                </p>
                {" "}
                <div className="ac-rec">
                  <small>Recommended</small>
                  Re-route the shipments at risk and pre-approve an alternative for the most exposed parts.
                </div>
                {" "}
                <p className="ac-who">Decided by your head of supply chain</p>
              </article>
              {" "}
              <article className="ac-card">
                <span className="ac-tag t-aw">Supplier selection</span>
                <h3>A new candidate looks strong, but its only site is in a flood-risk area.</h3>
                {" "}
                <p className="ac-know">It also shares a parent company with one of your existing suppliers.</p>
                {" "}
                <div className="ac-rec">
                  <small>Recommended</small>
                  Keep it on the shortlist, with a site-risk condition that follows it into onboarding.
                </div>
                {" "}
                <p className="ac-who">Decided by your category manager</p>
              </article>
              {" "}
              <article className="ac-card">
                <span className="ac-tag t-in">Procurement integrity</span>
                <h3>A vendor’s bank details changed just before a payment run.</h3>
                {" "}
                <p className="ac-know">The new account also appears on an employee record.</p>
                {" "}
                <div className="ac-rec">
                  <small>Recommended</small>
                  Hold the payment and verify the change by calling the vendor on a known number.
                </div>
                {" "}
                <p className="ac-who">Decided by your accounts payable reviewer</p>
              </article>
            </div>
            {" "}
            <p className="ac-note">ContexQ never blocks a supplier, makes an award or holds a payment on its own.</p>
          </div>
        </section>
        {" "}
        <section id="trust" className="sec dk cq-trust-final" aria-labelledby="trTitle">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="trTitle">
                Understand the findings.
                <br />
                Stay in control.
              </h2>
              <p>
                ContexQ provides evidence to support your decisions. Your team decides which suppliers to use and what action to take.
              </p>
            </div>
            <ul className="tr-pr">
              <li>
                <h3>See the supporting evidence</h3>
                <p>Review the sources behind supplier connections and risk assessments, with gaps and assumptions identified.</p>
              </li>
              <li>
                <h3>Control access</h3>
                <p>Give teams access to the information their roles require.</p>
              </li>
              <li>
                <h3>Keep control of your data</h3>
                <p>Access and export your data using open formats.</p>
              </li>
            </ul>
          </div>
        </section>
        {" "}
        <section id="demo" className="sec cta cq-demo" aria-labelledby="ctaTitle">
          <div className="wrap cq-demo-row">
            <div className="cq-demo-copy">
              <span className="cq-eyebrow">Explore ContexQ</span>
              <h2 id="ctaTitle">See what connected supply chain intelligence can reveal.</h2>
              <p>Explore how ContexQ can help your team protect supply continuity and make better-informed sourcing and procurement decisions.</p>
            </div>
            <div className="cq-demo-act">
              <Link prefetch={false} className="btn primary" href="/contact">Talk to the team</Link>
              <p className="cq-mail-line">
                {"or mail us at "}
                <a href={"mailto:inquiry@contexq.com?subject=Supply%20chain%20intelligence%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20supply%20chain%20intelligence.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>inquiry@contexq.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
