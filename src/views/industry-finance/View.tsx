// Generated from public/html/contexq-banking-v6.html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-industry-finance);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="industry-finance" className="v-industry-finance cq-html" lang="en" bodyClassName="cq-body">
      <svg id="sprite" width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <symbol id="i-person" viewBox="0 0 24 24">
          <path d="M12 11.5a3.75 3.75 0 1 0 0-7.5a3.75 3.75 0 1 0 0 7.5ZM4.75 20.25c.8-3.5 3.7-5.4 7.25-5.4s6.45 1.9 7.25 5.4" />
        </symbol>
        <symbol id="i-doc" viewBox="0 0 24 24"><path d="M6 3h8.25L18 6.75V21H6ZM14 3v4h4M9 11h6M9 14.5h6M9 18h3.5" /></symbol>
        <symbol id="i-bank" viewBox="0 0 24 24">
          <path d="M3 9.25 12 4l9 5.25M5.25 10.5v7M9.75 10.5v7M14.25 10.5v7M18.75 10.5v7M3 20.25h18" />
        </symbol>
        <symbol id="i-phone" viewBox="0 0 24 24">
          <path d="M8.25 3h7.5a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5h-7.5a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 8.25 3ZM10.75 18h2.5" />
        </symbol>
        <symbol id="i-building" viewBox="0 0 24 24">
          <path d="M4.5 21V5.25L13 3v18M13 8.25h6.5V21M3 21h18M7.25 8h2.75M7.25 11.5h2.75M7.25 15h2.75M15.75 11.5h1.5M15.75 15h1.5" />
        </symbol>
        <symbol id="i-hierarchy" viewBox="0 0 24 24">
          <path d="M12 3.25a2 2 0 1 1 0 4a2 2 0 1 1 0-4ZM6 16.75a2 2 0 1 1 0 4a2 2 0 1 1 0-4ZM18 16.75a2 2 0 1 1 0 4a2 2 0 1 1 0-4ZM12 7.25V12M6 16.75V12h12v4.75" />
        </symbol>
        <symbol id="i-shield" viewBox="0 0 24 24">
          <path d="M12 3 4.75 6v5.5c0 4.5 3 8.2 7.25 9.5 4.25-1.3 7.25-5 7.25-9.5V6ZM12 8.5v4.75M12 16.5v.01" />
        </symbol>
        <symbol id="i-news" viewBox="0 0 24 24">
          <path d="M4 5h12.5v13.5A2.5 2.5 0 0 0 19 21H6.5A2.5 2.5 0 0 1 4 18.5ZM16.5 9H20v9.5a2.5 2.5 0 0 1-2.5 2.5M7.25 8.5h6v3.75h-6ZM7.25 15.25h6M7.25 18h4" />
        </symbol>
        <symbol id="i-card" viewBox="0 0 24 24"><path d="M3.5 6h17v12h-17ZM3.5 9.75h17M6.75 14.5h4" /></symbol>
        <symbol id="i-alert" viewBox="0 0 24 24"><path d="M12 3.75 21.25 19.5H2.75ZM12 9.5v4.75M12 16.9v.01" /></symbol>
        <symbol id="i-flow" viewBox="0 0 24 24"><path d="M4 7h11M12 4l3 3-3 3M20 17H9M12 14l-3 3 3 3" /></symbol>
        <symbol id="i-leaf" viewBox="0 0 24 24"><path d="M5 19c0-8 5-13.5 14-14 .5 9-5 14-13 14ZM5 19l7.5-7.5" /></symbol>
        <symbol id="i-globe" viewBox="0 0 24 24">
          <path d="M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18ZM3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9S14.5 18.5 12 21M12 3C9.5 5.5 8.25 8.5 8.25 12S9.5 18.5 12 21" />
        </symbol>
        <symbol id="i-check" viewBox="0 0 24 24">
          <path d="M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18ZM8 12.25l2.75 2.75L16 9.75" />
        </symbol>
        <symbol id="i-pin" viewBox="0 0 24 24">
          <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21ZM12 7.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 1 1 0-5Z" />
        </symbol>
        <symbol id="i-replay" viewBox="0 0 24 24"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3M4.5 4.5v4h4" /></symbol>
      </svg>
      {" "}
      <a className="skip" href="#main">Skip to content</a>
      {" "}
      <main id="main">
        <section className="hero" id="top" aria-labelledby="heroTitle">
          <canvas id="heroCanvas" aria-hidden="true" />
          {" "}
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 id="heroTitle">
                Reveal hidden risk.
                <br />
                Discover new opportunity.
              </h1>
              {" "}
              <p className="lead">
                ContexQ connects your bank’s data with external intelligence to reveal the relationships that matter, helping you protect customers, focus your teams’ effort and grow valuable relationships.
              </p>
              {" "}
              <div className="hero-actions">
                <a className="btn btn-primary cq-cta" href="#challenges">
                  {"Explore the business value"}
                </a>
              </div>
            </div>
            {" "}
            <div className="hero-stage" id="heroStage" role="img" aria-label="Animation: data signals from financial centres converge on the ContexQ core and resolve into connected customers, accounts, companies, owners and counterparties.">
              <div className="hero-foot">
                <ol className="hero-steps" aria-hidden="true">
                  <li className="on">{"Bank & external signals"}</li>
                  {" "}
                  <li>Resolved in ContexQ</li>
                  {" "}
                  <li>Relationships in view</li>
                </ol>
                {" "}
                <button className="icon-btn" id="heroPause" type="button" aria-label="Pause animation">Ⅱ</button>
                {" "}
                <button className="icon-btn" id="heroReplay" type="button" aria-label="Replay animation">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <use href="#i-replay" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="challenges" id="challenges" aria-labelledby="chTitle">
          <div className="wrap">
            <div className="section-head">
              <h2 id="chTitle">Your systems are strong. ContexQ connects them.</h2>
              {" "}
              <p>
                Your AML, fraud, KYC and credit systems each see their own data. ContexQ adds what sits between them: the connections that change a decision.
              </p>
            </div>
            {" "}
            <div className="business-grid">
              <article className="business-card">
                <svg aria-hidden="true" viewBox="0 0 24 24"><use href="#i-shield" /></svg>
                <h3>Protect your bank and its customers</h3>
                <p>See the networks behind laundering, scams and mule accounts.</p>
                <div className="business-links">
                  <button className="ch-link" type="button" data-uc="0">
                    {"Financial crime "}
                    <span aria-hidden="true">↗</span>
                  </button>
                  <button className="ch-link" type="button" data-uc="2">
                    {"Money-mule detection "}
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </article>
              {" "}
              <article className="business-card">
                <svg aria-hidden="true" viewBox="0 0 24 24"><use href="#i-doc" /></svg>
                <h3>Give teams more time for judgement</h3>
                <p>Review customers when their risk really changes.</p>
                <button className="ch-link" type="button" data-uc="4">
                  {"Customer due diligence "}
                  <span aria-hidden="true">↗</span>
                </button>
              </article>
              {" "}
              <article className="business-card">
                <svg aria-hidden="true" viewBox="0 0 24 24"><use href="#i-bank" /></svg>
                <h3>Strengthen lending decisions</h3>
                <p>See stress in a borrower’s buyers, suppliers and owners early.</p>
                <button className="ch-link" type="button" data-uc="5">
                  {"Credit & portfolio risk "}
                  <span aria-hidden="true">↗</span>
                </button>
              </article>
              {" "}
              <article className="business-card">
                <svg aria-hidden="true" viewBox="0 0 24 24"><use href="#i-hierarchy" /></svg>
                <h3>Grow the relationships that matter</h3>
                <p>Find the group companies you don’t yet serve.</p>
                <button className="ch-link" type="button" data-uc="8">
                  {"Customer intelligence "}
                  <span aria-hidden="true">↗</span>
                </button>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="sources" id="sources" aria-labelledby="srcTitle">
          <div className="wrap">
            <div className="section-head">
              <h2 id="srcTitle">See the connection that changes the decision.</h2>
              {" "}
              <p>
                An ordinary customer record can hide a relationship worth investigating. Follow one example from scattered records to a clear, evidenced next step.
              </p>
            </div>
            {" "}
            <div className="cv">
              <div className="scene" id="scene">
                <div className="scene-top">
                  <span />
                  <span className="live" id="stageStatus">Bring data together</span>
                </div>
                {" "}
                <canvas id="network" role="img" aria-label="Illustrative animation: bank and external records are matched into one customer, linked to Aster Trading and Meridian Holdings, and an evidence path ends at a potential match to a listed entity." />
                {" "}
                <div className="scene-caption">
                  <div className="legend">
                    <span>Connected information</span>
                    <span>Evidence path</span>
                    <span className="lg-review">△ Needs review</span>
                  </div>
                  <span id="hint" />
                </div>
                {" "}
                <div className="node-dialog" id="dialog" hidden={true}>
                  <button id="close" type="button" aria-label="Close entity details">×</button>
                  <strong id="nodeTitle" />
                  <p id="nodeText" />
                </div>
              </div>
              {" "}
              <div className="transport" aria-label="Animation stages">
                <button className="step active" type="button" data-step="0">
                  <span>
                    <strong>Bring data together</strong>
                    <small>Bank + external sources</small>
                  </span>
                </button>
                {" "}
                <button className="step" type="button" data-step="1">
                  <span>
                    <strong>Match records</strong>
                    <small>A clearer customer view</small>
                  </span>
                </button>
                {" "}
                <button className="step" type="button" data-step="2">
                  <span>
                    <strong>Link entities</strong>
                    <small>Roles and ownership</small>
                  </span>
                </button>
                {" "}
                <button className="step" type="button" data-step="3">
                  <span>
                    <strong>Examine evidence</strong>
                    <small>Source, date, status</small>
                  </span>
                </button>
                {" "}
                <div className="controls">
                  <button className="icon-btn" type="button" id="pause" aria-label="Pause animation">Ⅱ</button>
                  <button className="icon-btn" type="button" id="replay" aria-label="Replay animation">↻</button>
                </div>
              </div>
              {" "}
              <div className="insight">
                <div aria-live="polite">
                  <span className="tag" id="insightTag">Bring data together</span>
                  <h3 id="insightTitle" />
                  <p id="insightBody" />
                </div>
                {" "}
                <div className="evidence">
                  <div className="ev-head"><strong>Evidence path</strong></div>
                  {" "}
                  <table className="ev-table">
                    <thead>
                      <tr>
                        <th scope="col">Relationship</th>
                        <th scope="col">Source · date</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {"Customer "}
                          <b>director of</b>
                          {" Aster Trading"}
                        </td>
                        <td>Corporate registry · 12 Mar 2025</td>
                        <td><span className="st ok">✓ Confirmed</span></td>
                      </tr>
                      <tr>
                        <td>
                          {"Aster Trading "}
                          <b>60% owned by</b>
                          {" Meridian Holdings"}
                        </td>
                        <td>Ownership register · 3 Jan 2025</td>
                        <td><span className="st ok">✓ Confirmed</span></td>
                      </tr>
                      <tr>
                        <td>
                          {"Meridian Holdings "}
                          <b>{"name & country match"}</b>
                          {" listed entity"}
                        </td>
                        <td>Sanctions list · 20 Sep 2026</td>
                        <td><span className="st pot">△ Potential</span></td>
                      </tr>
                    </tbody>
                  </table>
                  {" "}
                  <p className="ev-reason">
                    <b>Why review:</b>
                    {" an indirect link to a possible listed entity. An analyst confirms or rejects it; it is not a sanctions finding."}
                  </p>
                  <p className="ev-next">
                    <b>Recommended next step</b>
                    Review the possible match before the customer’s next large payment is released.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="usecases" id="use-cases" aria-labelledby="ucTitle">
          <div className="wrap">
            <div className="section-head">
              <h2 id="ucTitle">Where ContexQ makes the difference.</h2>
              {" "}
              <p>For each priority: what changes with ContexQ, why it matters, and the next step your team can take.</p>
            </div>
            {" "}
            <div className="uc-layout">
              <nav className="uc-nav" id="ucNav" aria-label="Banking use cases" />
              {" "}
              <div className="uc-select">
                <label htmlFor="ucSelect">Use case</label>
                <select id="ucSelect" />
              </div>
              {" "}
              <article className="uc-detail" aria-live="polite">
                <div className="uc-meta"><span id="ucFamily" /></div>
                {" "}
                <h3 id="ucHeadline" />
                {" "}
                <p className="uc-with" id="ucWith" />
                {" "}
                <div className="uc-diff">
                  <div className="d-today">
                    <h4>Today</h4>
                    <p id="ucToday" />
                  </div>
                  <div className="d-with">
                    <h4>With ContexQ</h4>
                    <p id="ucWq" />
                  </div>
                </div>
                {" "}
                <p className="uc-chain-label" id="ucChainLabel" />
                {" "}
                <ol className="uc-chain" id="ucChain" />
                {" "}
                <div className="uc-value-wrap">
                  <h4>Business impact</h4>
                  <p className="uc-value" id="ucValue" />
                </div>
                {" "}
                <div className="uc-act">
                  <h4>Recommended next step</h4>
                  <p id="ucAct" />
                </div>
                {" "}
                <div className="uc-foot"><p id="ucQualifier" /></div>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="bk-act" id="action" aria-labelledby="bkActTitle">
          <div className="wrap">
            <div className="section-head">
              <h2 id="bkActTitle">Every insight comes with a recommended next step.</h2>
              {" "}
              <p>
                ContexQ explains what it found, ranks it against your other work and suggests what to do, inside the systems your teams already use. Your people make the call.
              </p>
            </div>
            {" "}
            <div className="bk-act-grid" id="bkActGrid">
              <article>
                <span className="bk-tag t-r">Financial crime</span>
                <h3>A long-standing customer is linked, through two companies, to a possible listed entity.</h3>
                {" "}
                <div className="bk-rec">
                  <small>Recommended</small>
                  Review the connection before the next large payment is released.
                </div>
                <p className="bk-who">Decided by your compliance analyst</p>
              </article>
              {" "}
              <article>
                <span className="bk-tag t-a">Credit risk</span>
                <h3>A borrower’s largest buyer belongs to a group whose parent has just filed for insolvency.</h3>
                {" "}
                <div className="bk-rec">
                  <small>Recommended</small>
                  Add the borrower to the watch list and review its covenants early.
                </div>
                <p className="bk-who">Decided by your credit committee</p>
              </article>
              {" "}
              <article>
                <span className="bk-tag t-g">Growth</span>
                <h3>A corporate client’s sister company banks elsewhere, with a growing trade flow.</h3>
                {" "}
                <div className="bk-rec">
                  <small>Recommended</small>
                  Introduce the relationship manager to the sister company’s finance team.
                </div>
                <p className="bk-who">Decided by your coverage team</p>
              </article>
            </div>
            {" "}
            <p className="bk-note">ContexQ never blocks a payment, rates a borrower or contacts a client on its own.</p>
          </div>
        </section>
        {" "}
        <section className="platform" id="platform" aria-labelledby="pfTitle">
          <div className="wrap">
            <div className="section-head">
              <h2 id="pfTitle">Connected intelligence. Value across the bank.</h2>
              {" "}
              <p>
                ContexQ’s AI-powered platform turns fragmented data into connected customer and business insight that teams can use across financial crime, risk and growth.
              </p>
            </div>
            {" "}
            <div className="pf-grid">
              <ol className="layers" reversed={true} aria-label="ContexQ platform capabilities">
                <li>
                  <strong>Explainable insight</strong>
                  <span>Understand what supports a finding</span>
                </li>
                {" "}
                <li>
                  <strong>Contextual AI</strong>
                  <span>Surface patterns and risk signals</span>
                </li>
                {" "}
                <li>
                  <strong>Knowledge graph</strong>
                  <span>See how people and businesses connect</span>
                </li>
                {" "}
                <li>
                  <strong>Entity resolution</strong>
                  <span>Recognise the same customer across records</span>
                </li>
                {" "}
                <li>
                  <strong>Data fusion</strong>
                  <span>Bring bank and external sources together</span>
                </li>
              </ol>
              {" "}
              <div className="er" aria-label="Why connected intelligence matters">
                <article>
                  <svg viewBox="0 0 120 56" aria-hidden="true">
                    <g className="rec">
                      <rect x="4" y="6" width="26" height="12" rx="2" />
                      <rect x="4" y="22" width="26" height="12" rx="2" />
                      <rect x="4" y="38" width="26" height="12" rx="2" />
                    </g>
                    <path className="ln" d="M30 12 70 28M30 28h40M30 44 70 28" />
                    <circle className="ent" cx="84" cy="28" r="13" />
                  </svg>
                  {" "}
                  <div>
                    <h3>A shared customer picture</h3>
                    <p>Help teams work from connected records instead of repeatedly assembling the same background.</p>
                  </div>
                </article>
                {" "}
                <article>
                  <svg viewBox="0 0 120 56" aria-hidden="true">
                    <path className="ln" d="M20 28h40M60 28h40" />
                    <circle className="ent" cx="14" cy="28" r="9" />
                    <rect className="ent" x="51" y="19" width="18" height="18" rx="2" />
                    <rect className="ent" x="96" y="21" width="18" height="14" rx="2" />
                    <text x="40" y="20">owns</text>
                    <text x="83" y="20">holds</text>
                  </svg>
                  {" "}
                  <div>
                    <h3>Insight beyond the individual</h3>
                    <p>Reveal ownership, exposure and opportunities across the wider network.</p>
                  </div>
                </article>
                {" "}
                <article>
                  <svg viewBox="0 0 120 56" aria-hidden="true">
                    <circle className="ent" cx="40" cy="28" r="13" />
                    <path className="ok" d="M70 28l8 8 16-16" />
                  </svg>
                  {" "}
                  <div>
                    <h3>Evidence behind the insight</h3>
                    <p>Give reviewers the source and relationship behind a finding, so they can assess it with confidence.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="adoption" id="adoption" aria-labelledby="adTitle">
          <div className="wrap">
            <div className="section-head">
              <h2 id="adTitle">Build on the systems and expertise you trust.</h2>
              {" "}
              <p>
                Bring connected intelligence into your existing workflows, with evidence for your teams and decisions governed by your policies.
              </p>
            </div>
            {" "}
            <ol className="fitflow" aria-label="How ContexQ fits existing systems">
              <li>
                <span className="k">In</span>
                <strong>Your data</strong>
                <span>Bank records, plus registries, lists and media.</span>
              </li>
              {" "}
              <li className="mid">
                <span className="k">ContexQ</span>
                <strong>Connected intelligence</strong>
                <span>Customers, relationships and risk in context.</span>
              </li>
              {" "}
              <li>
                <span className="k">Out</span>
                <strong>Your workflow</strong>
                <span>Insight for investigations, customer reviews and credit decisions.</span>
              </li>
            </ol>
            {" "}
            <ul className="principles adoption-principles">
              <li>
                <h3>Keep your workflows connected</h3>
                <p>Use APIs to bring context into the tools your teams already use.</p>
              </li>
              {" "}
              <li>
                <h3>Support accountable decisions</h3>
                <p>Review the evidence behind a finding. Your people apply judgement and approve action.</p>
              </li>
              {" "}
              <li>
                <h3>Extend the value of your data</h3>
                <p>Reuse connected entities and relationships as you introduce further use cases.</p>
              </li>
            </ul>
          </div>
        </section>
        {" "}
        <section className="cta" id="demo" aria-labelledby="ctaTitle">
          <div className="wrap cta-grid">
            <div>
              <h2 id="ctaTitle">Put your data to work for your bank.</h2>
              {" "}
              <p className="lead">Explore what ContexQ could reveal for your risk, compliance or growth priorities.</p>
            </div>
            {" "}
            <div className="cta-form">
              <Link prefetch={false} className="btn btn-primary cq-cta" id="requestDemo" href="/contact">Talk to the team</Link>
              {" "}
              <small>
                {"or mail us at "}
<a href={"mailto:inquiry@contexq.com?subject=Financial%20services%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20financial%20services.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>inquiry@contexq.com</a>
              </small>
            </div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
