// Generated from public/html/contexq-entity-resolution.html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-platform-entity);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="platform-entity" className="v-platform-entity cq-html" lang="en" bodyClassName="cq-body">
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">Many records. One entity.</h1>
              {" "}
              <p className="lede">
                ContexQ connects the records your systems hold about each person and company, so you know who you are dealing with and how they are connected.
              </p>
            </div>
            {" "}
            <div className="stage" id="stage3d">
              <canvas id="flowCv" aria-hidden="true" />
              {" "}
              <p className="stage-step" id="h3Step" aria-live="polite">Records from many systems</p>
              {" "}
              <div className="cq-word" id="cqWord" aria-hidden="true">
                Contex
                <span>Q</span>
              </div>
              {" "}
              <ul className="ents" id="ents" aria-hidden="true" />
              {" "}
              <div className="stage-ui">
                <span>Illustrative example with fictional records</span>
                {" "}
                <div className="ctrls">
                  <button className="ctrl" id="h3Pause" type="button" aria-label="Pause animation">
                    <svg id="h3PauseIc" viewBox="0 0 12 12" aria-hidden="true">
                      <rect x="1.5" y="1" width="3" height="10" fill="currentColor" />
                      <rect x="7.5" y="1" width="3" height="10" fill="currentColor" />
                    </svg>
                    {" "}
                    <svg id="h3PlayIc" viewBox="0 0 12 12" aria-hidden="true" style={{ display: "none" }}>
                      <path d="M2 1 L11 6 L2 11 Z" fill="currentColor" />
                    </svg>
                    {" "}
                    <span id="h3PauseTx">Pause</span>
                  </button>
                  {" "}
                  <button className="ctrl" id="h3Replay" type="button" aria-label="Replay animation">
                    <svg viewBox="0 0 12 12" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M2.2 6.5 A4 4 0 1 0 3.4 3.1" />
                      <path d="M2 1 V4 H5" />
                    </svg>
                    {" "}
                    <span>Replay</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {" "}
          <p className="sr">
            Illustrative animation with fictional records. Small record tiles from registries, invoices, bank and card records, shipping documents, news and the web stream into the ContexQ globe. A line then branches out to resolved entities, people and companies together, such as John Smith with his records linked.
          </p>
        </section>
        {" "}
        <section className="sec light" id="what" aria-labelledby="what-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="what-title">Scattered records. One John Smith. And one who isn’t.</h2>
              {" "}
              <p className="lede">
                Entity resolution answers one question across all your data: do these records describe the same real-world person or company? Records that do are linked. Records that don’t are kept apart.
              </p>
            </div>
            {" "}
            <div className="what">
              <div className="what-recs" aria-label="Four records">
                <div className="wr">
                  <small>Retail banking</small>
                  <b>John Smith</b>
                  <span>Born 1 Aug 1981</span>
                </div>
                {" "}
                <div className="wr">
                  <small>Corporate banking</small>
                  <b>John A. Smith</b>
                  <span>Born 01/08/1981</span>
                </div>
                {" "}
                <div className="wr">
                  <small>KYC file</small>
                  <b>SMITH, JOHN</b>
                  <span>Mobile •••• 4567</span>
                </div>
                {" "}
                <div className="wr">
                  <small>Supplier list</small>
                  <b>J. Smith</b>
                  <span>Director, Northstar Trading</span>
                </div>
              </div>
              {" "}
              <div className="what-arrow" aria-hidden="true">
                <svg viewBox="0 0 60 24">
                  <path d="M2 12h50M44 5l8 7-8 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {" "}
              <div className="what-out">
                <div className="wo-one">
                  <small>One person</small>
                  <b>John Smith</b>
                  <span>Every record linked, each with its source</span>
                </div>
                {" "}
                <div className="wo-sep">
                  <small>A different person</small>
                  <b>John Smith</b>
                  <span>Card system · born 14 Mar 1972 · different ID. Kept separate.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="sec paper" id="why" aria-labelledby="why-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="why-title">When records don’t connect, decisions are made on half the picture.</h2>
            </div>
            {" "}
            <div className="probs">
              <article>
                <h3>Duplicate customers and suppliers</h3>
                <p>The same John Smith is onboarded again, checked again and rated differently each time.</p>
              </article>
              {" "}
              <article>
                <h3>Risk that never reaches the file</h3>
                <p>
                  An adverse news story or a past exit is recorded under a different spelling, so the right reviewer never sees it.
                </p>
              </article>
              {" "}
              <article>
                <h3>Two people treated as one</h3>
                <p>Two different John Smiths share one file, and one inherits the other’s missed payments or risk rating.</p>
              </article>
              {" "}
              <article>
                <h3>Exposure no one can total</h3>
                <p>Lending, spend or limits with one group are spread across systems that each see only a part.</p>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="sec light" id="hard" aria-labelledby="hard-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="hard-title">Real data hides John Smith in ways simple matching misses.</h2>
              {" "}
              <p className="lede">
                Exact matching and name comparison each catch part of the problem. ContexQ is designed to handle every one of these.
              </p>
            </div>
            {" "}
            <div className="hard">
              <article>
                <span className="hk">Names change form</span>
                <p className="hx">John Smith · SMITH, JOHN · J. A. Smith · Джон Смит</p>
                <p>Initials, word order and other scripts break simple name comparisons.</p>
              </article>
              {" "}
              <article>
                <span className="hk">Identifiers are partial</span>
                <p className="hx">S1234567A · S••••567A · not recorded</p>
                <p>Masked or missing IDs still carry evidence, without unmasking anything.</p>
              </article>
              {" "}
              <article>
                <span className="hk">Details change over time</span>
                <p className="hx">2019: Orchard Road · 2024: Marina Bay</p>
                <p>A new address, phone or employer should extend his history, not start a new one.</p>
              </article>
              {" "}
              <article>
                <span className="hk">Same name, same home</span>
                <p className="hx">John Smith, 73 · John Smith, 45</p>
                <p>Father and son share an address and a phone. They stay separate, linked as a household.</p>
              </article>
              {" "}
              <article>
                <span className="hk">Companies rename</span>
                <p className="hx">Northstar Trading · formerly Polaris Trading · “Northstar Group”</p>
                <p>Former, registered and trading names all belong to one company history.</p>
              </article>
              {" "}
              <article>
                <span className="hk">Identifiers are shared</span>
                <p className="hx">+65 9123 4567 on several unrelated accounts</p>
                <p>A phone or email reused across customers can point to one person in control.</p>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="sec dark" id="example" aria-labelledby="ex-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="ex-title">Same name. Different answers.</h2>
              {" "}
              <p className="lede">A name alone proves nothing. The evidence around it decides.</p>
            </div>
            {" "}
            <div className="dec" id="dec">
              <article className="dc dc-same">
                <div className="dc-recs">
                  <div className="mr">
                    <small>Retail banking</small>
                    <b>John Smith</b>
                    <span>Born 1 Aug 1981</span>
                  </div>
                  {" "}
                  <span className="dc-vs" aria-hidden="true">?</span>
                  {" "}
                  <div className="mr">
                    <small>Corporate banking</small>
                    <b>John A. Smith</b>
                    <span>Born 01/08/1981</span>
                  </div>
                </div>
                {" "}
                <ul className="dc-ev">
                  <li className="y">Same birth date, written differently</li>
                  {" "}
                  <li className="y">His mobile is the second contact on the corporate file</li>
                  {" "}
                  <li className="y">His two companies share a director</li>
                </ul>
                {" "}
                <p className="dc-v v-same">
                  <b>Same person</b>
                  Linked, with the evidence attached
                </p>
              </article>
              {" "}
              <article className="dc dc-two">
                <div className="dc-recs">
                  <div className="mr">
                    <small>Retail banking</small>
                    <b>John Smith</b>
                    <span>Born 1 Aug 1981</span>
                  </div>
                  {" "}
                  <span className="dc-vs" aria-hidden="true">?</span>
                  {" "}
                  <div className="mr">
                    <small>Deposits</small>
                    <b>John Smith</b>
                    <span>Born 3 May 1953</span>
                  </div>
                </div>
                {" "}
                <ul className="dc-ev">
                  <li className="y">Same address and phone</li>
                  {" "}
                  <li className="n">Born 28 years apart</li>
                  {" "}
                  <li className="n">Different ID numbers</li>
                </ul>
                {" "}
                <p className="dc-v v-two">
                  <b>Two people</b>
                  Father and son, kept apart and linked as a household
                </p>
              </article>
            </div>
            {" "}
            <p className="note">
              Fictional records. How much evidence is needed is set per use case, and borderline cases go to an analyst.
            </p>
          </div>
        </section>
        {" "}
        <section className="sec paper" id="network" aria-labelledby="net-title">
          <div className="wrap net-grid">
            <div className="intro">
              <h2 id="net-title">Matching finds John Smith. Relationships show who he is connected to.</h2>
              {" "}
              <p className="lede">
                His companies and co-directors are separate entities, never merged into his profile. Linking them shows risk and opportunity that no single record holds.
              </p>
              {" "}
              <ul className="net-key">
                <li>
                  <i className="k-risk" />
                  <span>
                    <b>Risk:</b>
                    {" his co-director at Northstar Trading also directs a firm named in adverse news."}
                  </span>
                </li>
                {" "}
                <li>
                  <i className="k-opp" />
                  <span>
                    <b>Opportunity:</b>
                    {" his second company banks elsewhere."}
                  </span>
                </li>
              </ul>
            </div>
            {" "}
            <figure className="net" aria-label="Network around John Smith: he directs Northstar Trading and Harbour Ridge Holdings. His co-director at Northstar Trading also directs Kestrel Ltd, a firm named in adverse news. Harbour Ridge banks elsewhere.">
              <svg className="net-wide" viewBox="0 40 520 300" role="img" aria-hidden="true">
                <g className="edges">
                  <path d="M260 190 L120 90" />
                  <path d="M260 190 L400 90" />
                  <path d="M260 190 L260 276" />
                  <path d="M330 300 L390 300" className="e-risk" />
                </g>
                <g className="elab">
                  <text x="170" y="128">Director of</text>
                  <text x="338" y="128">Director of</text>
                  <text x="300" y="244">Co-director</text>
                  <text x="362" y="268" className="er">Director of</text>
                </g>
                <g className="n n-main">
                  <circle cx="260" cy="190" r="34" />
                  <text x="260" y="186">John</text>
                  <text x="260" y="202">Smith</text>
                </g>
                <g className="n n-opp">
                  <rect x="50" y="66" width="140" height="48" rx="10" />
                  <text x="120" y="86">Harbour Ridge</text>
                  <text x="120" y="102" className="s">Banks elsewhere</text>
                </g>
                <g className="n">
                  <rect x="330" y="66" width="140" height="48" rx="10" />
                  <text x="400" y="86">Northstar Trading</text>
                  <text x="400" y="102" className="s">Customer</text>
                </g>
                <g className="n">
                  <rect x="190" y="276" width="140" height="48" rx="10" />
                  <text x="260" y="296">Wei Ling Tan</text>
                  <text x="260" y="312" className="s">Co-director</text>
                </g>
                <g className="n n-risk">
                  <rect x="390" y="276" width="110" height="48" rx="10" />
                  <text x="445" y="296">Kestrel Ltd</text>
                  <text x="445" y="312" className="s">Adverse news</text>
                </g>
              </svg>
              {" "}
              <svg className="net-tall" viewBox="0 0 340 420" aria-hidden="true">
                <g className="edges">
                  <path d="M170 160 L90 74" />
                  <path d="M170 160 L250 74" />
                  <path d="M170 160 L170 262" />
                  <path d="M170 310 L170 352" className="e-risk" />
                </g>
                <g className="elab">
                  <text x="104" y="124">Director of</text>
                  <text x="236" y="124">Director of</text>
                  <text x="214" y="218">Co-director</text>
                  <text x="226" y="336" className="er">Director of</text>
                </g>
                <g className="n n-main">
                  <circle cx="170" cy="160" r="36" />
                  <text x="170" y="156">John</text>
                  <text x="170" y="173">Smith</text>
                </g>
                <g className="n n-opp">
                  <rect x="10" y="22" width="150" height="54" rx="10" />
                  <text x="85" y="44">Harbour Ridge</text>
                  <text x="85" y="63" className="s">Banks elsewhere</text>
                </g>
                <g className="n">
                  <rect x="180" y="22" width="150" height="54" rx="10" />
                  <text x="255" y="44">Northstar Trading</text>
                  <text x="255" y="63" className="s">Customer</text>
                </g>
                <g className="n">
                  <rect x="95" y="262" width="150" height="50" rx="10" />
                  <text x="170" y="283">Wei Ling Tan</text>
                  <text x="170" y="301" className="s">Co-director</text>
                </g>
                <g className="n n-risk">
                  <rect x="95" y="352" width="150" height="50" rx="10" />
                  <text x="170" y="373">Kestrel Ltd</text>
                  <text x="170" y="391" className="s">Adverse news</text>
                </g>
              </svg>
            </figure>
          </div>
        </section>
        {" "}
        <section className="sec light" id="impact" aria-labelledby="imp-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="imp-title">What changes for each team.</h2>
            </div>
            {" "}
            <div className="uses">
              <article>
                <h3>KYC and onboarding</h3>
                <p>
                  Recognise existing, related or previously exited customers at the door, and stop repeating checks on the same person.
                </p>
              </article>
              {" "}
              <article>
                <h3>Financial crime and fraud</h3>
                <p>
                  Start investigations with the subject’s records, aliases and adverse news already linked, and spot accounts controlled by one person.
                </p>
              </article>
              {" "}
              <article>
                <h3>Credit and risk</h3>
                <p>See total exposure to a customer and its group across products, systems and countries.</p>
              </article>
              {" "}
              <article>
                <h3>Procurement and suppliers</h3>
                <p>Find duplicate vendors and suppliers that share directors, addresses or owners.</p>
              </article>
              {" "}
              <article>
                <h3>Customer and growth</h3>
                <p>See the companies and connections around a customer, and where the relationship can grow.</p>
              </article>
              {" "}
              <article>
                <h3>Audit and regulators</h3>
                <p>Answer “why were these records linked?” with the sources behind every decision.</p>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="sec dark" id="engineering" aria-labelledby="eng-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="eng-title">How it fits into your data estate.</h2>
            </div>
            {" "}
            <ol className="pipe" aria-label="Pipeline">
              <li>
                <b>Connect</b>
                <span>Your systems and trusted external sources</span>
              </li>
              {" "}
              <li>
                <b>Catalogue</b>
                <span>Schemas and field types detected automatically</span>
              </li>
              {" "}
              <li>
                <b>Standardise</b>
                <span>Names, addresses, dates and phone numbers cleaned</span>
              </li>
              {" "}
              <li>
                <b>Match and cluster</b>
                <span>Deterministic and probabilistic matching at scale</span>
              </li>
              {" "}
              <li>
                <b>Resolve</b>
                <span>People and companies, with links, evidence and history</span>
              </li>
              {" "}
              <li>
                <b>Deliver</b>
                <span>Alerts, on-demand insights, and your case and compliance systems</span>
              </li>
            </ol>
            {" "}
            <div className="eng">
              <article>
                <h3>Works with data as it is</h3>
                <p>
                  Structured records and unstructured text such as news, in different schemas and languages. No single golden key is required.
                </p>
              </article>
              {" "}
              <article>
                <h3>Explainable output</h3>
                <p>Every link, and every decision not to link, carries its evidence. Borderline pairs go to a review queue.</p>
              </article>
              {" "}
              <article>
                <h3>Deployed under your controls</h3>
                <p>
                  A dedicated single-tenant environment, least-privilege access, encryption at rest and in transit, and audit logs.
                </p>
              </article>
              {" "}
              <article>
                <h3>Privacy-preserving option</h3>
                <p>
                  Resolve your records against external data through encrypted computation, so neither side’s plain-text records are exposed; only the resolved result is returned.
                </p>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="closing" id="contact" aria-labelledby="close-title">
          <div className="wrap">
            <div>
              <h2 id="close-title">Which records should be one entity?</h2>
              <p>Bring a customer, supplier or investigation use case and see how ContexQ resolves it.</p>
            </div>
            <div className="cta-stack">
<Link prefetch={false} className="cta" href="/contact">Talk to the team</Link>
<p className="cq-mail-line">
  {"or mail us at "}
  <a href={"mailto:inquiry@contexq.com?subject=Entity%20resolution%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20entity%20resolution.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>inquiry@contexq.com</a>
</p>
</div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
