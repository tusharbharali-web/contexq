// Generated from public/html/contexq-insurance-v6.html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-industry-health);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="industry-health" className="v-industry-health cq-html" lang="en" bodyClassName="cq-body">
      <a className="skip-link" href="#main">Skip to content</a>
      {" "}
      <main id="main">
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>See the connections behind every policy and claim.</h1>
              {" "}
              <p>
                Bring together customer, policy, claims and external information to reveal how records relate, and give your teams clearer context for the decisions they already make.
              </p>
              {" "}
              <div className="hero-actions"><a className="btn btn--blue" href="#example">See how it works</a></div>
              {" "}
              <div className="hero-proof">
                Most insurance records sit apart. ContexQ brings the wider picture into view, so people can decide in context.
              </div>
            </div>
            {" "}
            <div className="hero-visual ins-anim" id="insAnim" data-step="0" role="region" aria-label="Animated overview: policy, claims, customer and external data are connected by ContexQ around each customer, giving underwriting, compliance, claims and recovery teams the same context.">
              <div className="ins-top">
                <span>ACROSS THE POLICY LIFECYCLE</span>
                <span className="ins-brand">
                  CONTEX
                  <b>Q</b>
                </span>
              </div>
              {" "}
              <div className="ins-steps">
                <button type="button" data-s="0" aria-pressed="true">Records apart</button>
                <button type="button" data-s="1" aria-pressed="false">Connected view</button>
                <button type="button" data-s="2" aria-pressed="false">Shared context</button>
                <button type="button" data-s="3" aria-pressed="false">Your decisions</button>
              </div>
              {" "}
              <div className="ins-stage"><svg id="hero-graph" aria-hidden="true" focusable="false" /></div>
              {" "}
              <div className="ins-cap">
                <strong id="insT">Insurance information sits apart.</strong>
                <p id="insC">Policies, claims, customer records and external data each hold part of the picture.</p>
              </div>
              {" "}
              <div className="ins-ctl">
                <span id="insS">Playing automatically</span>
                <div>
                  <button type="button" id="insPause">Pause</button>
                  <button type="button" id="insReplay">Replay</button>
                </div>
              </div>
              {" "}
              <p className="sr-only">
                Illustrative overview. Policy systems, claims systems, customer records and external data each hold part of the picture. ContexQ connects them around each customer: their household, policies, claims, the providers involved and related companies. Underwriting, compliance, claims and recovery teams then work from the same connected context to price risk, screen before cover, fast-track or review claims and find who else should pay. Decisions stay with each team.
              </p>
            </div>
          </div>
        </section>
        {" "}
        <section className="section section--white" id="challenges">
          <div className="wrap problem-grid">
            <div>
              <div className="section-head">
                <h2>An isolated record rarely tells the whole story.</h2>
                {" "}
                <p className="intro">
                  {"A customer, policy or claim can look ordinary on its own. The wider picture is often spread across systems, teams and lines of cover — and it's what sits between those records that matters."}
                </p>
              </div>
              {" "}
              <div className="problem-list">
                <article className="problem-row">
                  <span className="problem-index">01</span>
                  <div>
                    <h3>Related claims are easy to miss</h3>
                    <p>The same person, contact detail or service provider may appear in different cases.</p>
                  </div>
                </article>
                {" "}
                <article className="problem-row">
                  <span className="problem-index">02</span>
                  <div>
                    <h3>Records sit in different places</h3>
                    <p>Claims, policy and customer information may be held by separate teams and systems.</p>
                  </div>
                </article>
                {" "}
                <article className="problem-row">
                  <span className="problem-index">03</span>
                  <div>
                    <h3>Investigators have to join the dots</h3>
                    <p>Time is spent searching across records before a team can understand the wider situation.</p>
                  </div>
                </article>
                {" "}
                <article className="problem-row">
                  <span className="problem-index">04</span>
                  <div>
                    <h3>Decisions need more than one record</h3>
                    <p>Without context, it can be harder to decide which cases need a closer review.</p>
                  </div>
                </article>
              </div>
            </div>
            {" "}
            <aside className="problem-aside">
              <p>It is not just about what is in a claim. It is about what else is connected to it.</p>
              {" "}
              <span>That wider context can give an investigator a better place to start.</span>
            </aside>
          </div>
        </section>
        {" "}
        <section className="section policy-journey" id="journey" aria-labelledby="journey-title">
          <div className="wrap">
            <div className="policy-head">
              <h2 id="journey-title">Six moments in the life of a policy</h2>
              {" "}
              <p className="policy-lead">
                Pick a moment to see what goes wrong today, and what changes when every record points to the real people involved.
              </p>
            </div>
            {" "}
            <div className="policy-roles" role="group" aria-label="Highlight the moments for your role">
              <span>Show what matters if you look after</span>
              {" "}
              <button className="policy-role" type="button" aria-pressed="true" data-role="all">Everything</button>
              {" "}
              <button className="policy-role" type="button" aria-pressed="false" data-role="claims">Claims and fraud</button>
              {" "}
              <button className="policy-role" type="button" aria-pressed="false" data-role="uw">Underwriting</button>
              {" "}
              <button className="policy-role" type="button" aria-pressed="false" data-role="comp">Compliance</button>
              {" "}
              <button className="policy-role" type="button" aria-pressed="false" data-role="cust">Customers</button>
              {" "}
              <button className="policy-role" type="button" aria-pressed="false" data-role="risk">Risk and finance</button>
            </div>
            {" "}
            <svg className="policy-road" id="policy-road" viewBox="0 0 1000 150" role="img" aria-label="An animated path through six stages of an insurance policy">
              <path className="policy-track" id="policy-track" d="M20 95 C 120 40, 220 40, 320 80 S 520 130, 620 85 S 820 35, 980 70" />
              <path className="policy-lane" d="M20 95 C 120 40, 220 40, 320 80 S 520 130, 620 85 S 820 35, 980 70" />
              <path className="policy-done" id="policy-done" d="M20 95 C 120 40, 220 40, 320 80 S 520 130, 620 85 S 820 35, 980 70" />
              <g id="policy-dots" />
              <g className="policy-marker" id="policy-marker">
                <rect x="-11" y="-36" width="22" height="28" rx="3" />
                <path d="M-6 -28h12M-6 -22h12M-6 -16h8" />
              </g>
            </svg>
            {" "}
            <div className="policy-stops" id="policy-stops" aria-label="Choose a policy moment" />
            {" "}
            <div className="policy-panel" id="policy-panel" aria-live="polite">
              <h3 id="policy-panel-title" />
              {" "}
              <div className="policy-panel-grid">
                <div className="policy-before">
                  <h4>What goes wrong today</h4>
                  <p id="policy-wrong" />
                </div>
                {" "}
                <div>
                  <h4>What ContexQ connects</h4>
                  <p id="policy-connects" />
                </div>
                {" "}
                <div className="policy-after">
                  <h4>What changes</h4>
                  <p id="policy-change" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="section claim-story-section" id="example" aria-labelledby="claim-story-title">
          <div className="wrap claim-story" id="claim-story">
            <div className="claim-story-head">
              <h2 id="claim-story-title">Four claims. One name, spelled four ways.</h2>
              {" "}
              <p className="claim-story-lead">
                They arrive weeks apart, for different kinds of cover, and land with different handlers. On their own, none of them looks unusual.
              </p>
            </div>
            {" "}
            <div className="claim-files" id="claim-files">
              <svg className="claim-ties" id="claim-ties" aria-hidden="true" focusable="false"><path id="claim-tie-path" /></svg>
              {" "}
              <article className="claim-folder">
                <div className="claim-kind">Car accident</div>
                {" "}
                <div className="claim-meta">Reported 14 March · Handler A</div>
                {" "}
                <div className="claim-name-row"><span className="claim-name">J. Patel</span></div>
                {" "}
                <p className="claim-summary">Rear-end collision, whiplash</p>
              </article>
              {" "}
              <article className="claim-folder">
                <div className="claim-kind">Water damage at home</div>
                {" "}
                <div className="claim-meta">Reported 22 March · Handler B</div>
                {" "}
                <div className="claim-name-row"><span className="claim-name">Jay Patel</span></div>
                {" "}
                <p className="claim-summary">Burst pipe, kitchen repairs</p>
              </article>
              {" "}
              <article className="claim-folder">
                <div className="claim-kind">Second car accident</div>
                {" "}
                <div className="claim-meta">Reported 8 April · Handler C</div>
                {" "}
                <div className="claim-name-row"><span className="claim-name">Jaiveer P.</span></div>
                {" "}
                <p className="claim-summary">Side collision, car written off</p>
              </article>
              {" "}
              <article className="claim-folder">
                <div className="claim-kind">Back injury at work</div>
                {" "}
                <div className="claim-meta">Reported 19 April · Handler A</div>
                {" "}
                <div className="claim-name-row"><span className="claim-name">J.V. Patel</span></div>
                {" "}
                <p className="claim-summary">Lifting injury, time off work</p>
              </article>
            </div>
            {" "}
            <div className="claim-actions">
              <button className="btn btn--blue" id="claim-link-button" type="button" aria-pressed="false" aria-controls="claim-shared claim-flag">
                Connect the claims
              </button>
              {" "}
              <span className="claim-note">
                An illustrative example. Shared details are a reason to review, not proof of wrongdoing.
              </span>
            </div>
            {" "}
            <div className="claim-shared" id="claim-shared" aria-live="polite">
              <p>Once the names line up, the same people and details appear across the claims.</p>
              {" "}
              <div className="claim-chips">
                <div className="claim-chip">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" /></svg>
                  Same doctor
                </div>
                {" "}
                <div className="claim-chip">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16M6 8h12M8 8l-3 6h6zM16 8l-3 6h6z" /></svg>
                  Same lawyer
                </div>
                {" "}
                <div className="claim-chip">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14 6a4 4 0 0 0-5 5l-5 5 3 3 5-5a4 4 0 0 0 5-5l-2 2-2-1-1-2z" />
                  </svg>
                  Same repair garage
                </div>
                {" "}
                <div className="claim-chip">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
                  </svg>
                  Same witness
                </div>
              </div>
            </div>
            {" "}
            <div className="claim-flag" id="claim-flag">
              <h3>Why these claims were flagged</h3>
              {" "}
              <ul>
                <li>Four spellings of one name share the same phone number and address.</li>
                {" "}
                <li>The same doctor, lawyer, repair garage and witness appear across the claims.</li>
                {" "}
                <li>The claims came in close together, through different teams, so nobody saw the pattern.</li>
              </ul>
              {" "}
              <p className="claim-sent">
                The related records are presented together for an investigator to review, with each link visible.
              </p>
            </div>
          </div>
        </section>
        {" "}
        <section className="section section--white" id="approach">
          <div className="wrap">
            <div className="section-head">
              <h2>How ContexQ works: resolve, infer, explain.</h2>
              {" "}
              <p className="intro">
                Three steps used across every insurance scenario — the same method behind the four-claim example above.
              </p>
            </div>
            {" "}
            <div className="steps">
              <article className="step">
                <div className="step-number">01 / RESOLVE</div>
                <h3>Who is this, really?</h3>
                <p>
                  Match name variations, contact details and identifiers across your records to recognise the same person or business, while keeping genuinely different ones apart.
                </p>
              </article>
              {" "}
              <article className="step">
                <div className="step-number">02 / INFER</div>
                <h3>How are they connected?</h3>
                <p>
                  Surface the relationships between policyholders, claimants, service providers and payees — across claims, policies and lines of cover.
                </p>
              </article>
              {" "}
              <article className="step">
                <div className="step-number">03 / EXPLAIN</div>
                <h3>Why does it matter?</h3>
                <p>
                  Present the connections, the records that support them and the reason for attention — so a person makes the final decision, with the evidence visible.
                </p>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="section section--dark" id="applications">
          <div className="wrap">
            <div className="section-head">
              <h2>Three areas where the connected view pays back.</h2>
              {" "}
              <p className="intro">
                Across the policy lifecycle, the same connected information supports distinct kinds of decision.
              </p>
            </div>
            {" "}
            <div className="value-grid">
              <article className="value-card">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 5h16v14H4zM8 9h8M8 13h5" />
                    <path d="m15 16 2 2 4-5" />
                  </svg>
                </div>
                {" "}
                <h3>Claims and investigations</h3>
                {" "}
                <p>
                  Surface relationships across claims, claimants, service providers and payment recipients — so investigators start with the wider picture already assembled.
                </p>
              </article>
              {" "}
              <article className="value-card">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3 20 7v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
                    <path d="m8.5 12 2.2 2.2 4.8-5" />
                  </svg>
                </div>
                {" "}
                <h3>Underwriting context</h3>
                {" "}
                <p>
                  {"Bring an applicant's existing policies, prior claims history and related parties into view at the point of quote — so the risk is priced on what is known, not only on what is declared."}
                </p>
              </article>
              {" "}
              <article className="value-card">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="9" cy="8" r="3" />
                    <path d="M3 20c.5-3.5 2.5-5 6-5s5.5 1.5 6 5M16 5a3 3 0 0 1 0 6M18 15c1.8.6 2.8 2.1 3 5" />
                  </svg>
                </div>
                {" "}
                <h3>Customer and household view</h3>
                {" "}
                <p>
                  Understand how policies and customer records relate across a household or small business — while keeping distinct people distinct — so renewals, cross-sell and service decisions see the whole relationship.
                </p>
              </article>
            </div>
            {" "}
            <p className="value-note">
              The examples above describe potential applications. Fit depends on the data available, the use case and how each insurer operates. We are happy to discuss which apply to your environment.
            </p>
          </div>
        </section>
        {" "}
        <section className="section section--soft" id="data">
          <div className="wrap data-layout">
            <div className="data-copy">
              <h2>Fits with how you already work.</h2>
              {" "}
              <p>
                ContexQ is designed to work alongside existing claims, policy and fraud systems — not to replace them. It uses information you already hold, and keeps people in the final decision.
              </p>
              {" "}
              <p>
                Relevant details often sit across claims, policy, customer and payment records, along with information about repairers and other service providers.
              </p>
              {" "}
              <p className="data-note">
                The sources shown are examples, not a statement of confirmed integrations. What can be connected depends on your systems, permissions and project scope.
              </p>
            </div>
            {" "}
            <div className="data-sources" aria-label="Example insurance information sources">
              <div className="data-source">
                <span className="data-source-icon">▤</span>
                Claims records
              </div>
              {" "}
              <div className="data-source">
                <span className="data-source-icon">▧</span>
                Policy information
              </div>
              {" "}
              <div className="data-source">
                <span className="data-source-icon">◎</span>
                Customer records
              </div>
              {" "}
              <div className="data-source">
                <span className="data-source-icon">₹</span>
                Payment records
              </div>
              {" "}
              <div className="data-source">
                <span className="data-source-icon">⌂</span>
                Repair and service providers
              </div>
              {" "}
              <div className="data-source">
                <span className="data-source-icon">＋</span>
                Other approved sources
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="contact" id="contact">
          <div className="wrap contact-panel">
            <div className="contact-copy">
              <h2>What could your insurance data reveal?</h2>
              {" "}
              <p>
                {"Bring us an insurance scenario you're working on. We'll walk through how connecting the relevant information could give your team a clearer picture."}
              </p>
            </div>
            {" "}
            <div className="contact-action">
              <Link prefetch={false} className="btn btn--blue" href="/contact">Talk to the team</Link>
              {" "}
              <div className="contact-email">
                {"or mail us at "}
                <a href={"mailto:inquiry@contexq.com?subject=Insurance%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20insurance.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>inquiry@contexq.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
