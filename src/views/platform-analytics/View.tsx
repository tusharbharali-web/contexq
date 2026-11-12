// Generated from public/html/contexq-advanced-analytics.html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-platform-analytics);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="platform-analytics" className="v-platform-analytics cq-html" lang="en" bodyClassName="cq-body">
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <h1 className="hero-words">
              <span className="word">
                Analytics
                <span className="dot">.</span>
              </span>
              {" "}
              <span className="word">
                In context
                <span className="dot">.</span>
              </span>
            </h1>
            {" "}
            <p className="hero-quote">
              {" On rows, models "}
              <em>guess.</em>
              {" On networks, models know the difference between a transaction and a "}
              <span className="accent">relationship.</span>
            </p>
            {" "}
            <p className="hero-sub">
              {" Once entities are resolved and connected, advanced analytics works differently. Risk scores carry causal evidence. Anomalies have explanations. Propensity sees relationships, not just behaviour. ContexQ delivers "}
              <strong>five families of analytics on top of one shared context.</strong>
            </p>
            <a className="text-link cq-cta" href="#families">
              {"Explore the five families"}
            </a>
          </div>
          {" "}
          <div className="hero-visual">
            <div className="stage">
              <svg viewBox="0 0 540 600" xmlns="http://www.w3.org/2000/svg">
                <defs><clipPath id="aaClip"><rect x="0" y="0" width="540" height="600" rx="8" /></clipPath></defs>
                <g clipPath="url(#aaClip)">
                  <rect x="0" y="0" width="540" height="600" fill="#081A2E" />
                  <text x="20" y="32" fontFamily="Geist Mono, monospace" fontSize="10" letterSpacing="1.8" fill="#93A4BF">
                    FOUR ANALYTICS, ONE SHARED CONTEXT
                  </text>
                  <rect x="20" y="52" width="245" height="180" rx="6" fill="#0C2038" stroke="#1E2D42" />
                  <text x="36" y="74" fontFamily="Geist Mono, monospace" fontSize="9" letterSpacing="1.2" fill="#F4647A">
                    FORENSIC RISK
                  </text>
                  <path d="M 60 180 A 80 80 0 0 1 220 180" fill="none" stroke="#1E2D42" strokeWidth="14" />
                  <path d="M 60 180 A 80 80 0 0 1 175 110" fill="none" stroke="#2F86FF" strokeWidth="14" strokeLinecap="round" />
                  <text x="142" y="170" textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="36" fontWeight="500" fill="#FFFFFF">
                    23
                  </text>
                  <text x="142" y="195" textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="9" fill="#93A4BF">
                    / 100 · LOW
                  </text>
                  <text x="36" y="220" fontFamily="Geist Mono, monospace" fontSize="8" fill="#93A4BF">
                    7 features · 0 sanctions hit · 1 ESG flag
                  </text>
                  <rect x="275" y="52" width="245" height="180" rx="6" fill="#0C2038" stroke="#1E2D42" />
                  <text x="291" y="74" fontFamily="Geist Mono, monospace" fontSize="9" letterSpacing="1.2" fill="#8B7CF6">
                    NETWORK CENTRALITY
                  </text>
                  <circle cx="397" cy="150" r="20" fill="#8B7CF6" />
                  <circle cx="350" cy="115" r="6" fill="#081A2E" stroke="#8B7CF6" />
                  <circle cx="450" cy="115" r="6" fill="#081A2E" stroke="#8B7CF6" />
                  <circle cx="320" cy="160" r="6" fill="#081A2E" stroke="#8B7CF6" />
                  <circle cx="475" cy="160" r="6" fill="#081A2E" stroke="#8B7CF6" />
                  <circle cx="350" cy="195" r="6" fill="#081A2E" stroke="#8B7CF6" />
                  <circle cx="450" cy="195" r="6" fill="#081A2E" stroke="#8B7CF6" />
                  <line x1="397" y1="150" x2="350" y2="115" stroke="#8B7CF6" strokeWidth="0.8" />
                  <line x1="397" y1="150" x2="450" y2="115" stroke="#8B7CF6" strokeWidth="0.8" />
                  <line x1="397" y1="150" x2="320" y2="160" stroke="#8B7CF6" strokeWidth="0.8" />
                  <line x1="397" y1="150" x2="475" y2="160" stroke="#8B7CF6" strokeWidth="0.8" />
                  <line x1="397" y1="150" x2="350" y2="195" stroke="#8B7CF6" strokeWidth="0.8" />
                  <line x1="397" y1="150" x2="450" y2="195" stroke="#8B7CF6" strokeWidth="0.8" />
                  <text x="291" y="220" fontFamily="Geist Mono, monospace" fontSize="8" fill="#93A4BF">
                    betweenness 0.87 · top decile in sector
                  </text>
                  <rect x="20" y="248" width="245" height="180" rx="6" fill="#0C2038" stroke="#1E2D42" />
                  <text x="36" y="270" fontFamily="Geist Mono, monospace" fontSize="9" letterSpacing="1.2" fill="#F4647A">
                    ANOMALY DETECTION
                  </text>
                  <polyline points="36,380 60,375 84,378 108,372 132,376 156,360 180,378 204,330 228,374 252,378" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle cx="204" cy="330" r="5" fill="#F4647A" />
                  <line x1="204" y1="335" x2="204" y2="395" stroke="#F4647A" strokeWidth="0.6" strokeDasharray="2 2" />
                  <text x="204" y="408" textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="8" fill="#F4647A">
                    3.2σ deviation
                  </text>
                  <text x="36" y="290" fontFamily="IBM Plex Sans, sans-serif" fontSize="11" fill="#FFFFFF">
                    monthly USD outflow
                  </text>
                  <rect x="275" y="248" width="245" height="180" rx="6" fill="#0C2038" stroke="#1E2D42" />
                  <text x="291" y="270" fontFamily="Geist Mono, monospace" fontSize="9" letterSpacing="1.2" fill="#F5A524">
                    PROPENSITY
                  </text>
                  <text x="291" y="290" fontFamily="IBM Plex Sans, sans-serif" fontSize="11" fill="#FFFFFF">
                    next likely product
                  </text>
                  <rect x="291" y="305" width="180" height="14" fill="#1E2D42" />
                  <rect x="291" y="305" width="158" height="14" fill="#2F86FF" />
                  <text x="291" y="333" fontFamily="Geist Mono, monospace" fontSize="9" fill="#FFFFFF">Green-linked SCF</text>
                  <text x="478" y="316" textAnchor="end" fontFamily="Geist Mono, monospace" fontSize="9" fill="#2F86FF">88%</text>
                  <rect x="291" y="343" width="180" height="14" fill="#1E2D42" />
                  <rect x="291" y="343" width="115" height="14" fill="#F5A524" />
                  <text x="291" y="371" fontFamily="Geist Mono, monospace" fontSize="9" fill="#FFFFFF">FX hedging</text>
                  <text x="478" y="354" textAnchor="end" fontFamily="Geist Mono, monospace" fontSize="9" fill="#F5A524">64%</text>
                  <rect x="291" y="381" width="180" height="14" fill="#1E2D42" />
                  <rect x="291" y="381" width="56" height="14" fill="#93A4BF" />
                  <text x="291" y="409" fontFamily="Geist Mono, monospace" fontSize="9" fill="#FFFFFF">Cash management upgrade</text>
                  <text x="478" y="392" textAnchor="end" fontFamily="Geist Mono, monospace" fontSize="9" fill="#93A4BF">31%</text>
                  <rect x="20" y="448" width="500" height="76" rx="6" fill="#050F1C" stroke="#2F86FF" strokeOpacity="0.45" />
                  <text x="36" y="470" fontFamily="Geist Mono, monospace" fontSize="9" letterSpacing="1.5" fill="#22C3E6">
                    SHARED CONTEXT
                  </text>
                  <text x="36" y="492" fontFamily="IBM Plex Sans, sans-serif" fontSize="14" fill="#FFFFFF">
                    resolved entities · knowledge graph · live signals
                  </text>
                  <text x="36" y="510" fontFamily="Geist Mono, monospace" fontSize="8.5" fill="#93A4BF">
                    every score above traces back to the same entities, the same relationships, the same evidence
                  </text>
                  <line x1="142" y1="232" x2="142" y2="448" stroke="#475873" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.6" />
                  <line x1="397" y1="232" x2="397" y2="448" stroke="#475873" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.6" />
                  <line x1="142" y1="428" x2="142" y2="448" stroke="#475873" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.6" />
                  <line x1="397" y1="428" x2="397" y2="448" stroke="#475873" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.6" />
                  <rect x="0" y="540" width="540" height="60" fill="#050F1C" />
                  <text x="20" y="563" fontFamily="Geist Mono, monospace" fontSize="10" letterSpacing="1.5" fill="#E1E7F0">
                    ONE CUSTOMER · FOUR LENSES · ONE EVIDENCE BASE
                  </text>
                  <text x="20" y="582" fontFamily="Geist Mono, monospace" fontSize="8.5" fill="#93A4BF">
                    no model conflicts. no lineage gaps. one explanation everywhere.
                  </text>
                </g>
                <rect x="0" y="0" width="540" height="600" rx="8" fill="none" stroke="#1E2D42" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="section" id="families">
        <div className="container">
          <h2 className="section-h">
            {" One context. "}
            <em>Five lenses.</em>
          </h2>
          {" "}
          <p className="section-lede">
            {" Analytics that share the same resolved entities and the same graph never disagree about who they’re talking about. Risk, network, behaviour, propensity, anomaly, all read from the same source of truth. "}
          </p>
          {" "}
          <div className="cats-grid">
            <div className="cat-card">
              <div className="cat-num">01</div>
              {" "}
              <div className="cat-name">Forensic Risk</div>
              {" "}
              <p className="cat-text">
                Sanctions, PEP, adverse media, fraud, financial crime, scored against the resolved entity and its full network, not against the row.
              </p>
            </div>
            {" "}
            <div className="cat-card">
              <div className="cat-num">02</div>
              {" "}
              <div className="cat-name">Network Analytics</div>
              {" "}
              <p className="cat-text">
                Centrality, community detection, layering rings, circular ownership, broker patterns, computed natively on the typed graph.
              </p>
            </div>
            {" "}
            <div className="cat-card">
              <div className="cat-num">03</div>
              {" "}
              <div className="cat-name">Behavioral</div>
              {" "}
              <p className="cat-text">
                Transaction patterns, channel preference, seasonality, peer-relative behaviour, benchmarked against true peers, not segment averages.
              </p>
            </div>
            {" "}
            <div className="cat-card">
              <div className="cat-num">04</div>
              {" "}
              <div className="cat-name">Propensity</div>
              {" "}
              <p className="cat-text">
                Next product, next channel, next move, predicted from features that include the customer’s relationships, not just their history.
              </p>
            </div>
            {" "}
            <div className="cat-card">
              <div className="cat-num">05</div>
              {" "}
              <div className="cat-name">Anomaly</div>
              {" "}
              <p className="cat-text">
                Unusual flows, structural breaks, concealment indicators, with the network context that explains why something is unusual.
              </p>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="section pale">
        <div className="container">
          <h2 className="section-h">
            {" A model is only as smart as the "}
            <em>data underneath it.</em>
          </h2>
          {" "}
          <p className="section-lede">
            {" Run the same risk model on raw rows and on a graph-resolved network. The features the model has access to are different. The answers it can reach are different. The story it can tell is different. "}
          </p>
          {" "}
          <div className="same-grid">
            <div className="same-side">
              <div className="same-tag">Trained on rows</div>
              {" "}
              <h3 className="same-h">{"\"This transaction is unusual.\""}</h3>
              {" "}
              <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="30" width="320" height="20" fill="#E1E7F0" />
                <text x="32" y="44" fontFamily="Geist Mono, monospace" fontSize="9" fill="#5B6B86">
                  SENDER · RECEIVER · AMOUNT · TIMESTAMP
                </text>
                <line x1="20" y1="60" x2="340" y2="60" stroke="#E1E7F0" />
                <text x="32" y="78" fontFamily="Geist Mono, monospace" fontSize="10" fill="#0B1B2E">
                  Acct A · Acct B · $4.2M · 03:14 UTC
                </text>
                <line x1="20" y1="92" x2="340" y2="92" stroke="#E1E7F0" />
                <text x="32" y="110" fontFamily="Geist Mono, monospace" fontSize="10" fill="#F4647A">
                  FLAG · 3.1σ
                </text>
                <text x="32" y="148" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fill="#475873">
                  Result: alert with no story.
                </text>
              </svg>
              {" "}
              <div className="same-out">
                {" Output: "}
                <strong>flag</strong>
                .
                <br />
                {" Reason: amount + time outside historical range."}
                <br />
                {" Investigator next step: "}
                <strong>cold start.</strong>
              </div>
            </div>
            {" "}
            <div className="same-arrow">→</div>
            {" "}
            <div className="same-side right">
              <div className="same-tag">Trained on the network</div>
              {" "}
              <h3 className="same-h">
                {"\"This transaction is unusual "}
                <span className="because">because…</span>
                {"\""}
              </h3>
              {" "}
              <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="80" r="22" fill="#0C2038" />
                <text x="80" y="78" textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="10" fill="#FFFFFF">
                  Acct A
                </text>
                <text x="80" y="89" textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="7" fill="#22C3E6">
                  customer
                </text>
                <circle cx="280" cy="80" r="22" fill="#8B7CF6" />
                <text x="280" y="78" textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="10" fill="#FFFFFF">
                  Acct B
                </text>
                <text x="280" y="89" textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="7" fill="#E6F0FF">
                  non-cust
                </text>
                <line x1="102" y1="80" x2="258" y2="80" stroke="#F4647A" strokeWidth="2" />
                <text x="180" y="72" textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="9" fill="#F4647A">
                  $4.2M · 03:14
                </text>
                <path d="M 80 102 Q 180 145 280 102" stroke="#8B7CF6" strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
                <text x="180" y="155" textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="9" fill="#8B7CF6">
                  same UBO · 2 hops
                </text>
              </svg>
              {" "}
              <div className="same-out">
                {" Output: "}
                <strong>flag with cause.</strong>
                <br />
                {" Reason: amount + time outside range, "}
                <strong>and</strong>
                {" sender / receiver share UBO 2 hops away."}
                <br />
                {" Investigator next step: "}
                <strong>case is half-built.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="closing" id="contact">
        <div className="container">
          <div>
            <h2>Which decision needs analytics with context?</h2>
            <p>See how ContexQ scores, explains and connects the entities behind your data.</p>
          </div>
          <div className="cta-stack">
<Link prefetch={false} className="cta cq-cta" href="/contact">Talk to the team</Link>
<p className="cq-mail-line">
  {"or mail us at "}
  <a href={"mailto:inquiry@contexq.com?subject=Advanced%20analytics%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20advanced%20analytics.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>inquiry@contexq.com</a>
</p>
</div>
        </div>
      </section>
    </ViewShell>
  );
}
export default View;
