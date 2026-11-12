// Generated from public/html/contexq-risk (1).html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-solution-risk);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import type { CSSProperties } from "react";
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="solution-risk" className="v-solution-risk cq-html" lang="en" bodyClassName="cq-body">
      <a className="sr-only" href="#main">Skip to content</a>
      {" "}
      <main id="main">
        <span id="top" />
        {" "}
        <section aria-labelledby="hero-title" className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <h1 id="hero-title">See the warning signs. Understand the risk. Act sooner.</h1>
                {" "}
                <p className="hero-lead">
                  ContexQ brings together information about your customers, their owners, their payments and the news around them, so your team spots risk early and sees the evidence behind every alert.
                </p>
                {" "}
                <div className="btn-row"><a className="btn btn-primary cq-cta" href="#how-we-work">See how we work</a></div>
                {" "}
                <p className="hero-trust">Not just a list of risks. The evidence, the priority and the next step.</p>
              </div>
              {" "}
              <div className="hero-demo">
                <div className="hero-globe" id="cqGlobe">
                  <canvas aria-label="Animated connected risk network globe" id="cqGl" role="img" />
                  {" "}
                  <div aria-hidden="true" id="cqChips" />
                  {" "}
                  <div aria-hidden="true" id="cqHub">
                    <span>CQ</span>
                    {" "}
                    <div className="cq-hub-tag">Customer profile</div>
                  </div>
                  {" "}
                  <div aria-label="Animation stage" className="cq-phase" role="region">
                    <div aria-label="Jump to stage" className="cq-ticks" role="tablist">
                      <button aria-label="Stage 1: Scattered warning signs" data-jump="0" type="button"><i /></button>
                      {" "}
                      <button aria-label="Stage 2: Connecting risk signals" data-jump="1" type="button"><i /></button>
                      {" "}
                      <button aria-label="Stage 3: Risk flagged with evidence" data-jump="2" type="button"><i /></button>
                    </div>
                    {" "}
                    <div id="cqPhaseText">
                      {"01 · Scattered warning signs "}
                      <span>Signals sit in separate systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <ul aria-label="What you can rely on" className="trust-row">
              <li>
                <strong>
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <rect x="5" y="10.5" width="14" height="10" rx="2" />
                    <path d="M8 10.5V7.5a4 4 0 018 0v3" />
                  </svg>
                  {" Stays in your systems"}
                </strong>
                {" Customer records never leave your environment. "}
              </li>
              {" "}
              <li>
                <strong>
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M6 3h8l4 4v14H6z" />
                    <path d="M14 3v4h4" />
                    <path d="M9 12h6M9 16h4" />
                  </svg>
                  {" Every alert shows its proof"}
                </strong>
                {" Each flag links back to the original document, record or payment. "}
              </li>
              {" "}
              <li>
                <strong>
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12.5l2.7 2.7L16 9.5" />
                  </svg>
                  {" Same case, same answer"}
                </strong>
                {" Clear written rules mean two analysts reach the same conclusion. "}
              </li>
              {" "}
              <li>
                <strong>
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M12 3l9 5-9 5-9-5z" />
                    <path d="M3 13l9 5 9-5" />
                    <path d="M3 17.5l9 5 9-5" opacity=".5" />
                  </svg>
                  {" Works with your current scores"}
                </strong>
                {" Your existing ratings stay, so past comparisons still hold. "}
              </li>
            </ul>
          </div>
        </section>
        {" "}
        <section aria-labelledby="challenge-title" className="section" id="challenge">
          <div className="container">
            <div className="section-head">
              <h2 id="challenge-title">Spotting risk is only the beginning.</h2>
              {" "}
              <p className="lead">
                A warning is only useful if your team knows what caused it, who else is affected and what to do next. Checks that work in isolation often find the problem too late.
              </p>
            </div>
            {" "}
            <ol className="kyc-steps">
              <li>
                <div className="ic-box warm">
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>
                {" "}
                <h3>Warnings come late.</h3>
                {" "}
                <p>Problems show up after payments have already slipped.</p>
              </li>
              {" "}
              <li>
                <div className="ic-box">
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="2.5" />
                    <circle cx="5" cy="19" r="2.5" />
                    <circle cx="19" cy="19" r="2.5" />
                    <path d="M11 7.2L6 16.8M13 7.2l5 9.6M7.5 19h9" />
                  </svg>
                </div>
                {" "}
                <h3>Clues are scattered.</h3>
                {" "}
                <p>Ownership, payments and news sit in different places, so related risks look unrelated.</p>
              </li>
              {" "}
              <li>
                <div className="ic-box">
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M9 6h11M9 12h11M9 18h11" />
                    <path d="M3.5 6l1.2 1.2L6.8 5M3.5 12l1.2 1.2L6.8 11M3.5 18l1.2 1.2L6.8 17" />
                  </svg>
                </div>
                {" "}
                <h3>More work, not more clarity.</h3>
                {" "}
                <p>Analysts still verify matches, trace links and decide what to look at first.</p>
              </li>
            </ol>
            {" "}
            <div aria-labelledby="timeline-heading" className="timeline-block">
              <div className="timeline-head">
                <div><h3 id="timeline-heading">Risk leaves clues before the first missed payment.</h3></div>
              </div>
              {" "}
              <div className="tl3">
                <div aria-hidden="true" className="tl3-brackets">
                  <div className="br br-help"><span>Where ContexQ helps</span></div>
                  {" "}
                  <div className="br br-trad"><span>Where traditional checks start</span></div>
                </div>
                {" "}
                <ol className="tl3-list">
                  <li>
                    <span className="tl3-dot" />
                    {" "}
                    <span className="tl3-tag">Where ContexQ helps</span>
                    {" "}
                    <div className="ic-box">
                      <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="12" cy="12" r="5.5" />
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </div>
                    {" "}
                    <h4>Pressure builds</h4>
                    {" "}
                    <p>Income or employer stability weakens.</p>
                  </li>
                  {" "}
                  <li>
                    <span className="tl3-dot" />
                    {" "}
                    <span className="tl3-tag">Where ContexQ helps</span>
                    {" "}
                    <div className="ic-box">
                      <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M4 7h14a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
                        <path d="M4 7l11-3v3" />
                        <circle cx="16" cy="13.5" r="1" />
                      </svg>
                    </div>
                    {" "}
                    <h4>Habits change</h4>
                    {" "}
                    <p>Cash gets tighter and payment patterns shift.</p>
                  </li>
                  {" "}
                  <li>
                    <span className="tl3-dot" />
                    {" "}
                    <span className="tl3-tag">Where traditional checks start</span>
                    {" "}
                    <div className="ic-box">
                      <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M5 21V4" />
                        <path d="M5 4h12l-2 4 2 4H5" />
                      </svg>
                    </div>
                    {" "}
                    <h4>A payment is missed</h4>
                    {" "}
                    <p>Traditional checks finally notice.</p>
                  </li>
                </ol>
              </div>
              {" "}
              <div className="signals">
                <h4>Early signs a connected view can catch</h4>
                {" "}
                <ul className="signal-tiles">
                  <li className="signal-tile">
                    <div className="ic-box">
                      <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M4 7h14a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
                        <path d="M4 7l11-3v3" />
                        <circle cx="16" cy="13.5" r="1" />
                      </svg>
                    </div>
                    {" "}
                    <b>Hidden pay-later borrowing</b>
                    {" "}
                    <span>Short-term debt that normal affordability checks don’t show.</span>
                  </li>
                  {" "}
                  <li className="signal-tile">
                    <div className="ic-box">
                      <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M5 21V4h9v17" />
                        <path d="M14 10h5v11" />
                        <path d="M8 8h3M8 12h3M8 16h3M3 21h18" />
                      </svg>
                    </div>
                    {" "}
                    <b>Strain at a shared employer</b>
                    {" "}
                    <span>When one employer struggles, many customers can be affected.</span>
                  </li>
                  {" "}
                  <li className="signal-tile">
                    <div className="ic-box">
                      <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                        <rect x="7" y="2.5" width="10" height="19" rx="2" />
                        <path d="M11 18.5h2" />
                      </svg>
                    </div>
                    {" "}
                    <b>Smaller, more frequent top-ups</b>
                    {" "}
                    <span>A sign that cash is getting tighter.</span>
                  </li>
                  {" "}
                  <li className="signal-tile">
                    <div className="ic-box">
                      <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                    </div>
                    {" "}
                    <b>Payments slipping slightly later</b>
                    {" "}
                    <span>A small delay that often comes before a missed payment.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section aria-labelledby="shift-title" className="section paper" id="impact">
          <div className="container">
            <div className="section-head">
              <h2 id="shift-title">From finding risk late to acting earlier.</h2>
              {" "}
              <p className="lead">
                Turn early signals into prioritised cases, with the connections and evidence behind each one.
              </p>
            </div>
            {" "}
            <div aria-label="What you gain" className="impact-metrics">
              <div className="metric-card">
                <div className="ic-box">
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>
                {" "}
                <strong>Earlier warnings</strong>
                {" "}
                <span>Spot strain while there is still time to help or step in.</span>
              </div>
              {" "}
              <div className="metric-card">
                <div className="ic-box">
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                {" "}
                <strong>Fewer blind spots</strong>
                {" "}
                <span>See risks that single-customer checks miss.</span>
              </div>
              {" "}
              <div className="metric-card">
                <div className="ic-box">
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M12 3l9 5-9 5-9-5z" />
                    <path d="M3 13l9 5 9-5" />
                    <path d="M3 17.5l9 5 9-5" opacity=".5" />
                  </svg>
                </div>
                {" "}
                <strong>A deeper view</strong>
                {" "}
                <span>Understand who really sits behind and around each customer.</span>
              </div>
              {" "}
              <div className="metric-card">
                <div className="ic-box">
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M12 3l7 3v5.5c0 4.5-3 7.5-7 9.5-4-2-7-5-7-9.5V6z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                {" "}
                <strong>Decisions you can defend</strong>
                {" "}
                <span>Every conclusion shows its evidence.</span>
              </div>
            </div>
            {" "}
            <div className="shift-grid split">
              <div className="panel today">
                <div className="panel-h">TODAY</div>
                {" "}
                <div className="panel-b">
                  <svg aria-label="Grey dots scattered with no connections between them" className="dots-svg" role="img" viewBox="0 0 360 300">
                    <g fill="#9AA9B8">
                      <circle cx="40" cy="48" r="9" opacity=".7" />
                      <circle cx="120" cy="30" r="6" opacity=".55" />
                      <circle cx="215" cy="62" r="10" opacity=".7" />
                      <circle cx="310" cy="38" r="7" opacity=".55" />
                      <circle cx="75" cy="120" r="7" opacity=".6" />
                      <circle cx="165" cy="125" r="11" opacity=".7" />
                      <circle cx="262" cy="130" r="6" opacity=".55" />
                      <circle cx="330" cy="112" r="9" opacity=".65" />
                      <circle cx="30" cy="196" r="10" opacity=".7" />
                      <circle cx="112" cy="214" r="6" opacity=".55" />
                      <circle cx="195" cy="205" r="8" opacity=".6" />
                      <circle cx="285" cy="215" r="11" opacity=".7" />
                      <circle cx="65" cy="268" r="7" opacity=".55" />
                      <circle cx="160" cy="272" r="9" opacity=".65" />
                      <circle cx="245" cy="275" r="6" opacity=".55" />
                      <circle cx="332" cy="272" r="8" opacity=".6" />
                    </g>
                  </svg>
                  {" "}
                  <p className="panel-text">
                    Each customer is checked on their own. Warnings often come after payments are late. Shared pressure, ownership loops and stacked borrowing are missed.
                  </p>
                </div>
              </div>
              {" "}
              <div className="panel net">
                <div className="panel-h">With ContexQ</div>
                {" "}
                <div className="panel-b">
                  <svg aria-label="One customer connected to employer, spending, loans, pay-later, device and phone signals, with the employer highlighted as the warning" className="net-svg" id="netGraph" role="img" viewBox="0 0 360 330">
                    <g fill="none" stroke="#9AA9B8" strokeWidth="2">
                      <path className="edge" d="M180 165 L275 110" pathLength="1" style={{ "--d": ".35s" } as CSSProperties} />
                      <path className="edge" d="M180 165 L275 220" pathLength="1" style={{ "--d": ".5s" } as CSSProperties} />
                      <path className="edge" d="M180 165 L180 275" pathLength="1" style={{ "--d": ".65s" } as CSSProperties} />
                      <path className="edge" d="M180 165 L85 220" pathLength="1" style={{ "--d": ".8s" } as CSSProperties} />
                      <path className="edge" d="M180 165 L85 110" pathLength="1" style={{ "--d": ".95s" } as CSSProperties} />
                      <path className="edge" d="M180 165 L180 55" pathLength="1" stroke="#C9551F" strokeWidth="3" style={{ "--d": ".2s" } as CSSProperties} />
                    </g>
                    <g aria-hidden="true" className="pulses">
                      <circle cx="180" cy="165" fill="none" r="24" stroke="#0B1B2D" strokeWidth="2">
                        <animate attributeName="r" dur="3s" repeatCount="indefinite" values="24;52" />
                        <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values=".45;0" />
                      </circle>
                      <circle fill="#C9551F" r="5">
                        <animateMotion begin="0s" dur="2.2s" path="M180 55 L180 165" repeatCount="indefinite" />
                        <animate attributeName="opacity" dur="2.2s" repeatCount="indefinite" values="0;1;1;0" />
                      </circle>
                      <circle fill="#C9551F" r="5">
                        <animateMotion begin="1.1s" dur="2.2s" path="M180 55 L180 165" repeatCount="indefinite" />
                        <animate attributeName="opacity" begin="1.1s" dur="2.2s" repeatCount="indefinite" values="0;1;1;0" />
                      </circle>
                    </g>
                    <g aria-hidden="true">
                      <circle cx="180" cy="55" fill="none" r="17" stroke="#C9551F" strokeWidth="2">
                        <animate attributeName="r" dur="2.2s" repeatCount="indefinite" values="17;32" />
                        <animate attributeName="opacity" dur="2.2s" repeatCount="indefinite" values=".6;0" />
                      </circle>
                    </g>
                    <g fill="#fff" fontFamily="Manrope,system-ui,sans-serif" fontSize="13" fontWeight="800" textAnchor="middle">
                      <g className="nd" style={{ "--d": "0s" } as CSSProperties}>
                        <circle cx="180" cy="165" fill="#0B1B2D" r="24" />
                        <text fontSize="16" x="180" y="170">C</text>
                      </g>
                      <g className="nd" style={{ "--d": ".5s" } as CSSProperties}>
                        <circle cx="180" cy="55" fill="#C9551F" r="17" />
                        <text x="180" y="60">E</text>
                      </g>
                      <g className="nd" style={{ "--d": ".65s" } as CSSProperties}>
                        <circle cx="275" cy="110" fill="#2C8A66" r="17" />
                        <text x="275" y="115">S</text>
                      </g>
                      <g className="nd" style={{ "--d": ".8s" } as CSSProperties}>
                        <circle cx="275" cy="220" fill="#2C8A66" r="17" />
                        <text x="275" y="225">L</text>
                      </g>
                      <g className="nd" style={{ "--d": ".95s" } as CSSProperties}>
                        <circle cx="180" cy="275" fill="#2C8A66" r="17" />
                        <text x="180" y="280">B</text>
                      </g>
                      <g className="nd" style={{ "--d": "1.1s" } as CSSProperties}>
                        <circle cx="85" cy="220" fill="#2C8A66" r="17" />
                        <text x="85" y="225">D</text>
                      </g>
                      <g className="nd" style={{ "--d": "1.25s" } as CSSProperties}>
                        <circle cx="85" cy="110" fill="#2C8A66" r="17" />
                        <text x="85" y="115">P</text>
                      </g>
                    </g>
                    <g aria-hidden="true">
                      <text className="lbl" x="180" y="26" textAnchor="middle">Employer · warning</text>
                      <text className="lbl" x="298" y="114">Spending</text>
                      <text className="lbl" x="298" y="224">Loans</text>
                      <text className="lbl" x="180" y="312" textAnchor="middle">Pay-later</text>
                      <text className="lbl" x="62" y="224" textAnchor="end">Device</text>
                      <text className="lbl" x="62" y="114" textAnchor="end">Phone</text>
                    </g>
                  </svg>
                  {" "}
                  <p className="panel-text">
                    Customer, employer, borrowing, device and phone signals are connected. Pressure at an employer is linked to the customers it affects. You see patterns no single record can show.
                  </p>
                </div>
              </div>
            </div>
            {" "}
            <div className="clm-table-wrap">
              <h3 className="clm-sub">What changes day to day.</h3>
              {" "}
              <table className="clm-table">
                <thead>
                  <tr>
                    <th><span className="sr-only">Topic</span></th>
                    <th>Today</th>
                    <th>With ContexQ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>What you look at</td>
                    <td>One customer record at a time</td>
                    <td>The customer and everything around them</td>
                  </tr>
                  <tr>
                    <td>When you hear</td>
                    <td>After a missed payment</td>
                    <td>Well before one</td>
                  </tr>
                  <tr>
                    <td>Shared problems</td>
                    <td>Hidden across separate accounts</td>
                    <td>A struggling employer or parent flags every connected customer</td>
                  </tr>
                  <tr>
                    <td>Hidden debts</td>
                    <td>Pay-later loans and circular billing sit outside checks</td>
                    <td>Short-term borrowing links back to the same customer</td>
                  </tr>
                  <tr>
                    <td>What your team gets</td>
                    <td>A score that needs manual digging</td>
                    <td>A ranked action list with the evidence attached</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {" "}
            <p className="compact-note">Results depend on your own data and history.</p>
          </div>
        </section>
        {" "}
        <section aria-labelledby="solve-title" className="section dark" id="how-we-solve-it">
          <div className="container">
            <div className="section-head">
              <h2 id="solve-title">Connect the clues behind the risk.</h2>
              {" "}
              <p className="lead">
                ContexQ links records, relationships and changing signals, so you see the full picture and can check the evidence yourself.
              </p>
            </div>
            {" "}
            <div className="solve-layout">
              <div className="solve-viz">
                <div className="viz-head">
                  <span className="viz-title">
                    <i className="live" />
                    Connection map
                  </span>
                  <em>Illustrative example</em>
                </div>
                {" "}
                <svg aria-label="Ownership map: two companies in different countries are each owned through a holding company by the same person. A glowing line marks the hidden link." role="img" viewBox="0 0 480 420" fontFamily="DM Sans, system-ui, sans-serif">
                  <defs>
                    <pattern id="dotgrid" width="22" height="22" patternUnits="userSpaceOnUse">
                      <circle cx="1.5" cy="1.5" r="1.1" fill="rgba(255,255,255,.07)" />
                    </pattern>
                  </defs>
                  <rect width="480" height="420" fill="url(#dotgrid)" />
                  <g stroke="rgba(143,166,189,.35)" strokeWidth="1.3" fill="none">
                    <path d="M52 108 L140 170" />
                    <path d="M428 108 L340 170" />
                    <path d="M240 356 L90 290" />
                    <path d="M240 356 L390 290" />
                  </g>
                  <path className="glow-under" d="M90 290 L140 170 L240 70 L340 170 L390 290" />
                  <path className="glow-line" d="M90 290 L140 170 L240 70 L340 170 L390 290" />
                  <g>
                    <circle cx="52" cy="108" r="13" fill="#0F2442" stroke="#2F5FA8" strokeWidth="1.3" />
                    <text x="52" y="136" textAnchor="middle" fill="#8FA6BD" fontSize="9.5">Director</text>
                    <circle cx="428" cy="108" r="13" fill="#0F2442" stroke="#2F5FA8" strokeWidth="1.3" />
                    <text x="428" y="136" textAnchor="middle" fill="#8FA6BD" fontSize="9.5">Shared address</text>
                    <rect x="206" y="342" width="68" height="28" rx="8" fill="#0F2442" stroke="#2F5FA8" strokeWidth="1.3" />
                    <text x="240" y="360" textAnchor="middle" fill="#B4C4D6" fontSize="10.5" fontWeight="700">Supplier</text>
                  </g>
                  <rect x="83.0" y="220" width="64" height="20" rx="10" fill="#0B1B2E" stroke="rgba(143,166,189,.5)" />
                  <text x="115" y="234" textAnchor="middle" fill="#B4C4D6" fontSize="10.5" fontWeight="700">Owns 60%</text>
                  <rect x="333.0" y="220" width="64" height="20" rx="10" fill="#0B1B2E" stroke="rgba(143,166,189,.5)" />
                  <text x="365" y="234" textAnchor="middle" fill="#B4C4D6" fontSize="10.5" fontWeight="700">Owns 60%</text>
                  <rect x="78.0" y="151.0" width="124" height="38" rx="10" fill="#0F2442" stroke="#2F5FA8" strokeWidth="1.4" />
                  <g className="ni" fill="none" stroke="#9CC4F5" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" transform="translate(98.0 162.5) scale(.62)">
                    <path d="M5 21V4h9v17" />
                    <path d="M14 10h5v11" />
                    <path d="M8 8h3M8 12h3M8 16h3M3 21h18" />
                  </g>
                  <text x="122.0" y="168" fill="#fff" fontSize="11.5" fontWeight="700">Holding Ltd</text>
                  <text x="122.0" y="182" fill="#8FA6BD" fontSize="9.5">Layer 1</text>
                  <rect x="278.0" y="151.0" width="124" height="38" rx="10" fill="#0F2442" stroke="#2F5FA8" strokeWidth="1.4" />
                  <g className="ni" fill="none" stroke="#9CC4F5" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" transform="translate(298.0 162.5) scale(.62)">
                    <path d="M5 21V4h9v17" />
                    <path d="M14 10h5v11" />
                    <path d="M8 8h3M8 12h3M8 16h3M3 21h18" />
                  </g>
                  <text x="322.0" y="168" fill="#fff" fontSize="11.5" fontWeight="700">Holding Inc</text>
                  <text x="322.0" y="182" fill="#8FA6BD" fontSize="9.5">Layer 1</text>
                  <rect x="26.0" y="267.0" width="128" height="46" rx="10" fill="#2A1710" stroke="#FF9B73" strokeWidth="1.4" />
                  <g className="ni" fill="none" stroke="#FFB594" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" transform="translate(36.0 282.5) scale(.62)">
                    <path d="M5 21V4h9v17" />
                    <path d="M14 10h5v11" />
                    <path d="M8 8h3M8 12h3M8 16h3M3 21h18" />
                  </g>
                  <text x="60.0" y="288" fill="#fff" fontSize="11.5" fontWeight="700">Company A</text>
                  <text x="60.0" y="302" fill="#8FA6BD" fontSize="9.5">Country 1</text>
                  <rect x="326.0" y="267.0" width="128" height="46" rx="10" fill="#2A1710" stroke="#FF9B73" strokeWidth="1.4" />
                  <g className="ni" fill="none" stroke="#FFB594" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" transform="translate(336.0 282.5) scale(.62)">
                    <path d="M5 21V4h9v17" />
                    <path d="M14 10h5v11" />
                    <path d="M8 8h3M8 12h3M8 16h3M3 21h18" />
                  </g>
                  <text x="360.0" y="288" fill="#fff" fontSize="11.5" fontWeight="700">Company B</text>
                  <text x="360.0" y="302" fill="#8FA6BD" fontSize="9.5">Country 2</text>
                  <circle cx="240" cy="70" r="27" fill="#C9551F" stroke="#FF9B73" strokeWidth="2" />
                  <circle cx="240" cy="70" r="27" fill="none" stroke="#FF7A4D" strokeWidth="2">
                    <animate attributeName="r" dur="2.4s" repeatCount="indefinite" values="27;46" />
                    <animate attributeName="opacity" dur="2.4s" repeatCount="indefinite" values=".6;0" />
                  </circle>
                  <g fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" transform="translate(228 56) scale(1)">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" transform="translate(0 -1)" />
                  </g>
                  <text x="240" y="114" textAnchor="middle" fill="#fff" fontSize="11.5" fontWeight="700" opacity="0">Owner</text>
                  <rect x="194.0" y="124" width="92" height="20" rx="10" fill="#FF7A4D" stroke="none" />
                  <text x="240" y="138" textAnchor="middle" fill="#1B0B05" fontSize="10.5" fontWeight="700">Same owner</text>
                </svg>
                {" "}
                <div className="viz-find">
                  <div className="ic-box warm">
                    <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                      <path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1" />
                      <path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1" />
                    </svg>
                  </div>
                  {" "}
                  <div>
                    <b>Hidden link found</b>
                    <span>Company A and Company B are owned by the same person, through two holding companies.</span>
                  </div>
                </div>
              </div>
              {" "}
              <div className="solve-grid compact">
                <article className="solve-card">
                  <div className="ic-box">
                    <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                      <circle cx="9" cy="8" r="3.2" />
                      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
                      <circle cx="17" cy="9" r="2.4" />
                      <path d="M17 14.5c2.4 0 4 1.7 4 4.5" />
                    </svg>
                  </div>
                  {" "}
                  <h3>Know who is who</h3>
                  {" "}
                  <p>
                    The same person or business can appear under different names, spellings and languages. We recognise them as one.
                  </p>
                </article>
                {" "}
                <article className="solve-card">
                  <div className="ic-box">
                    <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                      <rect x="9" y="3" width="6" height="4" rx="1" />
                      <rect x="3" y="17" width="6" height="4" rx="1" />
                      <rect x="15" y="17" width="6" height="4" rx="1" />
                      <path d="M12 7v5M6 17v-5h12v5" />
                    </svg>
                  </div>
                  {" "}
                  <h3>See who owns and controls whom</h3>
                  {" "}
                  <p>Trace ownership through layers of companies, including structures that loop back on themselves.</p>
                </article>
                {" "}
                <article className="solve-card">
                  <div className="ic-box">
                    <svg className="ic" aria-hidden="true" viewBox="0 0 24 24"><path d="M3 12h4l3-7 4 14 3-7h4" /></svg>
                  </div>
                  {" "}
                  <h3>Put behaviour in context</h3>
                  {" "}
                  <p>Link payments, leadership and supply chains so unusual activity stands out.</p>
                </article>
                {" "}
                <article className="solve-card">
                  <div className="ic-box">
                    <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="12" cy="12" r="5.5" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  {" "}
                  <h3>Catch risk as it spreads</h3>
                  {" "}
                  <p>When a connected business runs into trouble, you see who else could be affected.</p>
                </article>
              </div>
            </div>
            {" "}
            <details className="expander">
              <summary>
                <div>
                  <h3>Find the connections that change the risk.</h3>
                  {" "}
                  <p className="exp-sub">Examples of what the connections reveal</p>
                </div>
                {" "}
                <span className="exp-btn">See what we connect</span>
              </summary>
              {" "}
              <ul className="conn-grid">
                <li>
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <rect x="9" y="3" width="6" height="4" rx="1" />
                    <rect x="3" y="17" width="6" height="4" rx="1" />
                    <rect x="15" y="17" width="6" height="4" rx="1" />
                    <path d="M12 7v5M6 17v-5h12v5" />
                  </svg>
                  {" Who owns what, across companies and countries"}
                </li>
                {" "}
                <li>
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M4 8h14M14 4l4 4-4 4" />
                    <path d="M20 16H6M10 12l-4 4 4 4" />
                  </svg>
                  {" Unusual patterns between businesses that trade with or pay each other"}
                </li>
                {" "}
                <li>
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" />
                    <circle cx="7" cy="18" r="1.8" />
                    <circle cx="17" cy="18" r="1.8" />
                  </svg>
                  {" Which customers rely on the same supplier"}
                </li>
                {" "}
                <li>
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <circle cx="8" cy="8" r="3" />
                    <circle cx="16" cy="8" r="3" />
                    <path d="M2.5 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
                    <path d="M13.5 15.3c.8-.2 1.600-.3 2.500-.3 3 0 5.500 2 5.500 5" />
                  </svg>
                  {" Shared directors and overlapping boards"}
                </li>
                {" "}
                <li>
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M12 21s7-6 7-11.5A7 7 0 005 9.5C5 15 12 21 12 21z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                  {" Businesses that share an address or registration agent"}
                </li>
                {" "}
                <li>
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M5 4h12v16H7a2 2 0 01-2-2z" />
                    <path d="M17 8h3v10a2 2 0 01-2 2" />
                    <path d="M8.5 8h5M8.5 12h5M8.5 16h3" />
                  </svg>
                  {" News and events that affect the people and companies you work with"}
                </li>
              </ul>
            </details>
          </div>
        </section>
        {" "}
        <section aria-labelledby="work-title" className="section paper" id="how-we-work">
          <div className="container">
            <div className="section-head">
              <h2 id="work-title">From signal to action.</h2>
              {" "}
              <p className="lead">
                ContexQ does more than list risks. It connects the evidence, prioritises the warning and gives your team a clear place to start.
              </p>
            </div>
            {" "}
            <ol aria-label="How ContexQ turns signals into action" className="work-flow">
              <li>
                <div className="ic-box">
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />
                    <path d="M4.5 5.5v13c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-13" />
                    <path d="M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8" />
                  </svg>
                </div>
                {" "}
                <h3>Bring data together</h3>
                {" "}
                <p>Internal and external records in one view</p>
              </li>
              {" "}
              <li>
                <div className="ic-box">
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <circle cx="9" cy="8" r="3.2" />
                    <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
                    <circle cx="17" cy="9" r="2.4" />
                    <path d="M17 14.5c2.4 0 4 1.7 4 4.5" />
                  </svg>
                </div>
                {" "}
                <h3>Recognise who is who</h3>
                {" "}
                <p>The same person or business across all records</p>
              </li>
              {" "}
              <li>
                <div className="ic-box">
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="2.5" />
                    <circle cx="5" cy="19" r="2.5" />
                    <circle cx="19" cy="19" r="2.5" />
                    <path d="M11 7.2L6 16.8M13 7.2l5 9.6M7.5 19h9" />
                  </svg>
                </div>
                {" "}
                <h3>Connect the dots</h3>
                {" "}
                <p>Owners, partners and shared dependencies</p>
              </li>
              {" "}
              <li>
                <div className="ic-box">
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24"><path d="M3 12h4l3-7 4 14 3-7h4" /></svg>
                </div>
                {" "}
                <h3>Spot what’s changing</h3>
                {" "}
                <p>Signals scored and exposure assessed</p>
              </li>
              {" "}
              <li className="highlight">
                <div className="ic-box">
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M9 6h11M9 12h11M9 18h11" />
                    <path d="M3.5 6l1.2 1.2L6.8 5M3.5 12l1.2 1.2L6.8 11M3.5 18l1.2 1.2L6.8 17" />
                  </svg>
                </div>
                {" "}
                <h3>Know what to do first</h3>
                {" "}
                <p>Cases ranked, with evidence attached</p>
              </li>
            </ol>
            {" "}
            <div aria-labelledby="after-flag-heading" className="after-flag">
              <div className="after-flag-intro">
                <h3 id="after-flag-heading">A warning should lead to a decision, not another list.</h3>
                {" "}
                <p className="help-lead">Every alert helps your team:</p>
                {" "}
                <ul className="help-list">
                  <li>
                    <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>
                      <b>Understand it:</b>
                      {" see what changed, who is connected and the evidence behind the flag."}
                    </span>
                  </li>
                  {" "}
                  <li>
                    <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                      <path d="M9 6h11M9 12h11M9 18h11" />
                      <path d="M3.5 6l1.2 1.2L6.8 5M3.5 12l1.2 1.2L6.8 11M3.5 18l1.2 1.2L6.8 17" />
                    </svg>
                    <span>
                      <b>Prioritise it:</b>
                      {" the most relevant, confirmed risks rise to the top of the queue."}
                    </span>
                  </li>
                  {" "}
                  <li>
                    <svg className="ic" aria-hidden="true" viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></svg>
                    <span>
                      <b>Act in time:</b>
                      {" investigate, escalate, monitor or step in before the loss grows."}
                    </span>
                  </li>
                </ul>
              </div>
              {" "}
              <div aria-label="Example alert card" className="alert-card" role="group">
                <div className="alert-top">
                  <span>Alert · High priority</span>
                  <span className="tag">Example</span>
                </div>
                {" "}
                <div className="alert-sec">
                  <h5>What happened</h5>
                  {" "}
                  <p>Payments from several customers who work for the same employer are slipping later each month.</p>
                </div>
                {" "}
                <div className="alert-sec">
                  <h5>Why it matters</h5>
                  {" "}
                  <p>The employer shows signs of strain, and the customers connected to it could be affected next.</p>
                  {" "}
                  <div className="chips">
                    <span className="chip">
                      <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M6 3h8l4 4v14H6z" />
                        <path d="M14 3v4h4" />
                        <path d="M9 12h6M9 16h4" />
                      </svg>
                      {" Payment records"}
                    </span>
                    {" "}
                    <span className="chip">
                      <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M5 21V4h9v17" />
                        <path d="M14 10h5v11" />
                        <path d="M8 8h3M8 12h3M8 16h3M3 21h18" />
                      </svg>
                      {" Employer filing"}
                    </span>
                    {" "}
                    <span className="chip">
                      <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                        <circle cx="12" cy="5" r="2.5" />
                        <circle cx="5" cy="19" r="2.5" />
                        <circle cx="19" cy="19" r="2.5" />
                        <path d="M11 7.2L6 16.8M13 7.2l5 9.6M7.5 19h9" />
                      </svg>
                      {" Shared lender"}
                    </span>
                  </div>
                </div>
                {" "}
                <div className="alert-sec">
                  <h5>What to do next</h5>
                  {" "}
                  <p>Review the connected customers and decide whether to contact, monitor or escalate.</p>
                </div>
                {" "}
                <div className="alert-foot">
                  <span>Evidence attached</span>
                  <a className="btn btn-primary" href="#next-step">Review now</a>
                </div>
              </div>
            </div>
            {" "}
            <div className="fuller-head">
              <h3>A fuller picture of every risk.</h3>
              {" "}
              <p>Keep your existing checks. We add the connections they miss.</p>
            </div>
            {" "}
            <div className="views">
              <div aria-hidden="true" className="views-hub">
                One
                <br />
                customer
              </div>
              {" "}
              <article className="view-card">
                <h4>
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                  </svg>
                  {" The customer"}
                </h4>
                {" "}
                <p className="vc-row">
                  <b>Normal checks</b>
                  Product, channel, industry, location and screening alerts.
                </p>
                {" "}
                <p className="vc-row plus">
                  <b>ContexQ adds</b>
                  Links to risky industries, restricted directors or unusual shared addresses.
                </p>
              </article>
              {" "}
              <article className="view-card">
                <h4>
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <rect x="9" y="3" width="6" height="4" rx="1" />
                    <rect x="3" y="17" width="6" height="4" rx="1" />
                    <rect x="15" y="17" width="6" height="4" rx="1" />
                    <path d="M12 7v5M6 17v-5h12v5" />
                  </svg>
                  {" The group behind them"}
                </h4>
                {" "}
                <p className="vc-row">
                  <b>Normal checks</b>
                  Declared ownership layers and high-risk countries.
                </p>
                {" "}
                <p className="vc-row plus">
                  <b>ContexQ adds</b>
                  Ties to closed companies, ownership that circles back and missing filings.
                </p>
              </article>
              {" "}
              <article className="view-card">
                <h4>
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M4 8h14M14 4l4 4-4 4" />
                    <path d="M20 16H6M10 12l-4 4 4 4" />
                  </svg>
                  {" Their partners"}
                </h4>
                {" "}
                <p className="vc-row">
                  <b>Normal checks</b>
                  Direct payment alerts, watchlists and bad news about partners.
                </p>
                {" "}
                <p className="vc-row plus">
                  <b>ContexQ adds</b>
                  Hidden owners or disqualified directors behind the businesses they trade with.
                </p>
              </article>
              {" "}
              <article className="view-card">
                <h4>
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24"><path d="M3 12h4l3-7 4 14 3-7h4" /></svg>
                  {" Their financial behaviour"}
                </h4>
                {" "}
                <p className="vc-row">
                  <b>Normal checks</b>
                  Expected transaction volumes, cash ratios and high-risk payment routes.
                </p>
                {" "}
                <p className="vc-row plus">
                  <b>ContexQ adds</b>
                  Payments that don’t match filings, activity that differs from similar businesses, and money moving in circles within a group.
                </p>
              </article>
            </div>
            {" "}
            <details className="score-panel">
              <summary>
                <h3>A score that keeps up with change.</h3>
                {" "}
                <span className="exp-btn">Show how</span>
              </summary>
              {" "}
              <p>
                Scores update as new evidence appears and trigger a review when they reach limits your team sets. Every score can be explained, and serious confirmed risks always escalate.
              </p>
            </details>
          </div>
        </section>
        {" "}
        <section aria-labelledby="help-title" className="section" id="where-we-help">
          <div className="container">
            <div className="section-head">
              <h2 id="help-title">What can your team do after a risk is flagged?</h2>
              {" "}
              <p className="lead">Understand the risk, decide what to review first and explain the decision.</p>
            </div>
            {" "}
            <div aria-label="Ways your team can use ContexQ" className="tabs" role="tablist">
              <button aria-controls="panel-1" aria-selected="true" className="tab" data-tab="1" id="tab-1" role="tab">
                <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                </svg>
                {" Full customer view"}
              </button>
              {" "}
              <button aria-controls="panel-2" aria-selected="false" className="tab" data-tab="2" id="tab-2" role="tab">
                <svg className="ic" aria-hidden="true" viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></svg>
                {" Unusual trade and industry patterns"}
              </button>
              {" "}
              <button aria-controls="panel-3" aria-selected="false" className="tab" data-tab="3" id="tab-3" role="tab">
                <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="M15.5 15.5L21 21" />
                </svg>
                {" High-risk case reviews"}
              </button>
              {" "}
              <button aria-controls="panel-4" aria-selected="false" className="tab" data-tab="4" id="tab-4" role="tab">
                <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M5 4h12v16H7a2 2 0 01-2-2z" />
                  <path d="M17 8h3v10a2 2 0 01-2 2" />
                  <path d="M8.5 8h5M8.5 12h5M8.5 16h3" />
                </svg>
                {" News monitoring"}
              </button>
            </div>
            {" "}
            <div aria-labelledby="tab-1" className="scenario-panel" id="panel-1" role="tabpanel">
              <div className="scenario-grid">
                <div className="scenario-copy">
                  <h3>One profile. The evidence around it.</h3>
                  {" "}
                  <p>See everything connected to a customer in one place.</p>
                  {" "}
                  <ul className="scenario-points">
                    <li>
                      <strong>Ownership and links</strong>
                      {" Who owns them, who they are linked to and shared addresses. "}
                    </li>
                    {" "}
                    <li>
                      <strong>Financial and peer signals</strong>
                      {" Strain, debt pressure and how they compare to similar customers. "}
                    </li>
                    {" "}
                    <li>
                      <strong>Payments and public records</strong>
                      {" Transactions and records that support or challenge the picture. "}
                    </li>
                  </ul>
                </div>
                {" "}
                <div className="scenario-visual">
                  <h4>Example: a customer profile</h4>
                  {" "}
                  <div className="profile-card">
                    <div className="profile-head">
                      <span className="av">
                        <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                        </svg>
                      </span>
                      {" "}
                      <div>
                        <b>Example customer</b>
                        <span>Profile with connected evidence</span>
                      </div>
                    </div>
                    {" "}
                    <div className="pflags">
                      <span className="pflag hot">Suspended from trading</span>
                      {" "}
                      <span className="pflag hot">Offshore tax haven link</span>
                      {" "}
                      <span className="pflag">Accounting anomaly</span>
                      {" "}
                      <span className="pflag">Intercompany billing pattern</span>
                    </div>
                    {" "}
                    <svg aria-label="Small network map: the customer’s owner is linked to a company in liquidation, which shares a lender with several of your customers" className="mini-map" role="img" viewBox="0 0 380 150">
                      <g stroke="rgba(255,255,255,.28)" strokeWidth="1.5" fill="none">
                        <path d="M40 75 L118 75" />
                        <path d="M196 75 L274 75" />
                        <path d="M274 75 L338 36" />
                        <path d="M274 75 L338 114" />
                      </g>
                      <path d="M118 75 L196 75" stroke="#FF7A4D" strokeWidth="2.5" fill="none" />
                      <g fill="#16314F" stroke="#5AA2FF" strokeWidth="1.5">
                        <circle cx="40" cy="75" r="13" />
                        <circle cx="118" cy="75" r="10" />
                        <circle cx="274" cy="75" r="10" />
                        <circle cx="338" cy="36" r="8" />
                        <circle cx="338" cy="114" r="8" />
                      </g>
                      <circle cx="196" cy="75" r="12" fill="#C9551F" stroke="#FF9B73" strokeWidth="2" />
                      <g textAnchor="middle">
                        <text x="40" y="105">Customer</text>
                        <text x="118" y="100">Owner</text>
                        <text x="196" y="100">In liquidation</text>
                        <text x="274" y="100">Shared lender</text>
                        <text x="338" y="18">Your customers</text>
                        <text x="338" y="140">Your customers</text>
                      </g>
                    </svg>
                  </div>
                  {" "}
                  <div className="visual-summary">
                    <strong>What the connection reveals:</strong>
                    {" The owner is linked to a company in liquidation, which also shares a lender with several of your customers. "}
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div aria-labelledby="tab-2" className="scenario-panel" hidden={true} id="panel-2" role="tabpanel">
              <div className="scenario-grid">
                <div className="scenario-copy">
                  <h3>Are these trading partners a credible match?</h3>
                  {" "}
                  <p>
                    Compare real trading relationships to flag unusual buyer-seller pairs, even when industry codes are missing or unreliable.
                  </p>
                  {" "}
                  <ul className="scenario-points">
                    <li>
                      <strong>Infer business activity</strong>
                      {" Use company records and trade history. "}
                    </li>
                    {" "}
                    <li>
                      <strong>Find unusual trade pairs</strong>
                      {" Learn normal patterns and flag rare buyer-seller pairs. "}
                    </li>
                    {" "}
                    <li>
                      <strong>Rank by confidence and impact</strong>
                      {" Rank each outlier by confidence and business share. "}
                    </li>
                  </ul>
                </div>
                {" "}
                <div className="scenario-visual">
                  <h4>Importer-Exporter Industry Pair Matrix (Example)</h4>
                  {" "}
                  <div className="flag-list">
                    <span className="flag-chip">
                      {"Agri Wholesale → Food Producer "}
                      <b>Expected (847 trades)</b>
                    </span>
                    {" "}
                    <span className="flag-chip">
                      {"Textiles → Apparel Retail "}
                      <b>Expected (239 trades)</b>
                    </span>
                    {" "}
                    <span className="flag-chip">
                      {"IT Wholesale → Crop Farming "}
                      <b>Rare Outlier (2 trades)</b>
                    </span>
                  </div>
                  {" "}
                  <div className="visual-summary">
                    <strong>Why network context beats static keyword rules:</strong>
                    {" A few trades between mismatched industries may deserve more attention than hundreds of routine keyword alerts. "}
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div aria-labelledby="tab-3" className="scenario-panel" hidden={true} id="panel-3" role="tabpanel">
              <div className="scenario-grid">
                <div className="scenario-copy">
                  <h3>Give analysts the evidence, not another data hunt.</h3>
                  {" "}
                  <p>Start each case with ranked, cross-checked evidence.</p>
                  {" "}
                  <ul className="scenario-points">
                    <li>
                      <strong>Triage screening alerts</strong>
                      {" Check each alert against the customer and connected network. "}
                    </li>
                    {" "}
                    <li>
                      <strong>Verify true ownership</strong>
                      {" Verify beneficial owners and related-party exposure against official records. "}
                    </li>
                    {" "}
                    <li>
                      <strong>Build the case summary</strong>
                      {" Bring payment history and counterparties into one evidence-backed summary. "}
                    </li>
                  </ul>
                </div>
                {" "}
                <div className="scenario-visual">
                  <h4>Analyst Investigation Workbench</h4>
                  {" "}
                  <div className="flag-list">
                    <span className="flag-chip">
                      {"Alert triage "}
                      <b>Pre-checked in network</b>
                    </span>
                    {" "}
                    <span className="flag-chip">
                      {"Ownership chart "}
                      <b>Registry verified</b>
                    </span>
                    {" "}
                    <span className="flag-chip">
                      {"Year-over-year flows "}
                      <b>Consolidated</b>
                    </span>
                    {" "}
                    <span className="flag-chip">
                      {"Case narrative "}
                      <b>Auto-drafted with citations</b>
                    </span>
                  </div>
                  {" "}
                  <div className="visual-summary">
                    <strong>{"Consistent decisions driven by the customer's true risk:"}</strong>
                    {" Every analyst starts with the same ownership links, transaction history, and ranked evidence, which makes reviews more consistent. "}
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div aria-labelledby="tab-4" className="scenario-panel" hidden={true} id="panel-4" role="tabpanel">
              <div className="scenario-grid">
                <div className="scenario-copy">
                  <h3>Turn news into facts your team can verify.</h3>
                  {" "}
                  <p>Extract people, companies, relationships and allegations, rather than relying only on name matches.</p>
                  {" "}
                  <ul className="scenario-points">
                    <li>
                      <strong>{"Global & local news at scale"}</strong>
                      {" Combine licensed news, public reports, and internal intelligence in supported languages. "}
                    </li>
                    {" "}
                    <li>
                      <strong>Extract facts and relationships, not just names</strong>
                      {" Link each entity, relationship, and allegation to its source sentence. "}
                    </li>
                    {" "}
                    <li>
                      <strong>Evidence-weighted matching into the network</strong>
                      {" Cross-check findings against customer and payment records; prioritise corroborated matches. "}
                    </li>
                  </ul>
                </div>
                {" "}
                <div className="scenario-visual">
                  <h4>Private, Source-Cited Media Intelligence</h4>
                  {" "}
                  <div className="flag-list">
                    <span className="flag-chip">
                      {"Deployment "}
                      <b>100% inside your perimeter</b>
                    </span>
                    {" "}
                    <span className="flag-chip">
                      {"Data privacy "}
                      <b>Zero external vendor leakage</b>
                    </span>
                    {" "}
                    <span className="flag-chip">
                      {"Audit trail "}
                      <b>Exact text span cited</b>
                    </span>
                  </div>
                  {" "}
                  <div className="visual-summary">
                    <strong>Explainable to model governance and internal audit:</strong>
                    {" Show the source sentence and the shared address, director, or other link connecting the article to your portfolio. "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section aria-labelledby="why-title" className="section dark why" id="why-contexq">
          <div className="container">
            <div className="why-head">
              <div><h2 id="why-title">Every check helps. Only the connected view sees the pattern.</h2></div>
              {" "}
              <p className="lead">
                Teams build up their defences in stages. Each one catches more, but the first four still judge one customer at a time. ContexQ adds the fifth, on top of what you already run.
              </p>
            </div>
            {" "}
            <div aria-hidden="true" className="layers-brackets">
              <div className="lb lb-single"><span>Each check judges one customer at a time</span></div>
              {" "}
              <div className="lb lb-cq"><span>ContexQ adds the connections</span></div>
            </div>
            {" "}
            <ol className="layers" aria-label="How risk defences build up, and where ContexQ fits">
              <li className="layer">
                <span className="layers-tag">One customer at a time</span>
                {" "}
                <div className="ic-box">
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></svg>
                </div>
                {" "}
                <h3>Credit scores and limits</h3>
                {" "}
                <p>Show a customer’s history, not what is changing now.</p>
              </li>
              {" "}
              <li className="layer">
                <span className="layers-tag">One customer at a time</span>
                {" "}
                <div className="ic-box">
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M4 7h14a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
                    <path d="M4 7l11-3v3" />
                    <circle cx="16" cy="13.5" r="1" />
                  </svg>
                </div>
                {" "}
                <h3>Affordability checks</h3>
                {" "}
                <p>Miss pay-later debt and strain at a shared employer.</p>
              </li>
              {" "}
              <li className="layer">
                <span className="layers-tag">One customer at a time</span>
                {" "}
                <div className="ic-box">
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24">
                    <circle cx="10.5" cy="10.5" r="6.5" />
                    <path d="M15.5 15.5L21 21" />
                  </svg>
                </div>
                {" "}
                <h3>Watchlists and screening</h3>
                {" "}
                <p>Only catch names that are already flagged.</p>
              </li>
              {" "}
              <li className="layer">
                <span className="layers-tag">One customer at a time</span>
                {" "}
                <div className="ic-box">
                  <svg className="ic" aria-hidden="true" viewBox="0 0 24 24"><path d="M3 12h4l3-7 4 14 3-7h4" /></svg>
                </div>
                {" "}
                <h3>AI risk scoring</h3>
                {" "}
                <p>Ranks the same single-customer signals better.</p>
              </li>
              {" "}
              <li className="layer layer-cq">
                <span className="layers-tag">ContexQ adds the connections</span>
                {" "}
                <svg aria-hidden="true" className="layer-net" viewBox="0 0 220 120">
                  <g stroke="rgba(140,194,255,.5)" strokeWidth="1.5" fill="none">
                    <path d="M110 60L36 26M110 60L190 30M110 60L30 94M110 60L196 96M110 60L110 12M36 26L30 94M190 30L196 96" />
                  </g>
                  <g fill="#8CC2FF">
                    <circle cx="36" cy="26" r="6" />
                    <circle cx="190" cy="30" r="6" />
                    <circle cx="30" cy="94" r="6" />
                    <circle cx="196" cy="96" r="6" />
                    <circle cx="110" cy="12" r="5" />
                  </g>
                  <circle cx="110" cy="60" r="13" fill="#FF7A4D" stroke="#fff" strokeWidth="2" />
                  <circle cx="110" cy="60" r="13" fill="none" stroke="#FF7A4D" strokeWidth="2">
                    <animate attributeName="r" dur="2.4s" repeatCount="indefinite" values="13;30" />
                    <animate attributeName="opacity" dur="2.4s" repeatCount="indefinite" values=".7;0" />
                  </circle>
                </svg>
                {" "}
                <h3>The connected view</h3>
                {" "}
                <p>Links customers by employer, owner, lender and payment flow: the pattern, not the record.</p>
              </li>
            </ol>
            {" "}
            <div className="why-cta" id="next-step">
              <div>
                <h2 id="next-title">Find out what your team could catch earlier.</h2>
                {" "}
                <p className="lead">See how connected information becomes clear, prioritised cases your team can explain.</p>
              </div>
              {" "}
              <div className="why-cta-action">
                <Link prefetch={false} className="btn btn-primary cq-cta" href="/contact">Talk to the team</Link>
                {" "}
                <p className="why-cta-mail">
                  {"or mail us at "}
                  <a href={"mailto:inquiry@contexq.com?subject=Risk%20management%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20risk%20management.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>inquiry@contexq.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
