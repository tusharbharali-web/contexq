// Generated from public/html/contexq-telecom-v4.html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-industry-telco);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="industry-telco" className="v-industry-telco cq-html" lang="en" bodyClassName="cq-body">
      <a className="skip" href="#main">Skip to content</a>
      {" "}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <symbol id="phone" viewBox="0 0 32 32">
            <rect x="8" y="2" width="16" height="28" rx="3" />
            <path d="M13 6h6m-5 20h4" />
          </symbol>
          <symbol id="house" viewBox="0 0 32 32"><path d="m3 15 13-11 13 11M7 12v17h18V12m-13 17V19h8v10" /></symbol>
          <symbol id="office" viewBox="0 0 32 32"><path d="M6 29V4h15v25M21 13h7v16H3m8-19h5m-5 6h5m-5 6h5" /></symbol>
          <symbol id="person" viewBox="0 0 32 32">
            <circle cx="16" cy="10" r="5" />
            <path d="M6 29v-4a10 10 0 0 1 20 0v4" />
          </symbol>
          <symbol id="network" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="4" />
            <circle cx="5" cy="5" r="3" />
            <circle cx="27" cy="7" r="3" />
            <circle cx="24" cy="27" r="3" />
            <path d="m7 7 6 6m7 0 5-4m-6 11 4 5" />
          </symbol>
        </defs>
      </svg>
      {" "}
      <main id="main">
        <div className="dark">
          <section className="hero">
            <div className="wrap">
              <div className="hero-grid">
                <div className="hero-copy">
                  <h1>
                    {"Understand the relationships "}
                    <span>behind your telecom business.</span>
                  </h1>
                  <p>
                    Know who you serve. See related activity worth investigating. Understand the exposure behind your suppliers and partners.
                  </p>
                  <a className="text-link" href="#help">
                    {"Explore where we can help "}
                    <span>↓</span>
                  </a>
                  <div className="hero-footnote">Identity and relationship intelligence for your existing records.</div>
                </div>
                {" "}
                <div className="hero-visual" id="hero-visual">
                  <div className="cq-stage tq-stage" id="cq-stage" data-step="0" role="img" aria-label="Animated overview of ContexQ in telecom: a night-time city on a mobile network, with the ContexQ globe above it. ContexQ connects three kinds of telecom records in turn. Customers: mobile and broadband records for John Smith resolve to one subscriber with two services. Investigations: separate applications that share a dealer and a device form a connected group to review. Partners: a supplier and its parent company bring ownership and dependencies into view.">
                    <svg id="tq-svg" aria-hidden="true" focusable="false" />
                  </div>
                  {" "}
                  <p className="cq-caption" id="tq-cap">
                    Subscriber, application and supplier records each answer a different question.
                  </p>
                  {" "}
                  <div className="cq-controls">
                    <div className="cq-steps" role="group" aria-label="Animation stages">
                      <button className="cq-step" data-stage="0" aria-pressed="true">Know the customer</button>
                      <button className="cq-step" data-stage="1" aria-pressed="false">Investigate activity</button>
                      <button className="cq-step" data-stage="2" aria-pressed="false">Assess partners</button>
                      <button className="cq-step" data-stage="3" aria-pressed="false">One view</button>
                    </div>
                    <div className="cq-buttons">
                      <button id="cq-pause" aria-pressed="false">Ⅱ Pause</button>
                      <button id="cq-replay">↺ Replay</button>
                    </div>
                    <span className="cq-status" id="cq-status" aria-live="polite" />
                  </div>
                </div>
              </div>
              {" "}
              <div className="hero-outcomes">
                <div>
                  <strong>Know the customer</strong>
                  <span>See services and account roles together.</span>
                </div>
                <div>
                  <strong>Focus the review</strong>
                  <span>Examine related activity with its evidence.</span>
                </div>
                <div>
                  <strong>Understand exposure</strong>
                  <span>Look beyond the direct business relationship.</span>
                </div>
              </div>
            </div>
          </section>
        </div>
        {" "}
        <section className="section" id="opportunity">
          <div className="wrap">
            <div className="section-head">
              <div>
                <h2>
                  Better decisions start
                  <br />
                  with the whole relationship.
                </h2>
              </div>
              <p>
                Subscriber, service, dealer and supplier records answer different questions. ContexQ brings the relevant identity and relationship evidence into the same view.
              </p>
            </div>
            <div className="questions">
              <article className="question">
                <div className="question-icon"><svg className="icon" width="32" height="32"><use href="#person" /></svg></div>
                <h3>What do we already know about this customer?</h3>
                <p>
                  See existing services and account relationships before a service enquiry or the next commercial conversation.
                </p>
              </article>
              <article className="question">
                <div className="question-icon"><svg className="icon" width="32" height="32"><use href="#network" /></svg></div>
                <h3>Which activities should we examine together?</h3>
                <p>Look across applications and dealer activity to find a connected group that an isolated review may miss.</p>
              </article>
              <article className="question">
                <div className="question-icon"><svg className="icon" width="32" height="32"><use href="#office" /></svg></div>
                <h3>What sits behind this business relationship?</h3>
                <p>Understand relevant ownership and dependencies when assessing a supplier or channel partner.</p>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="section white" id="help">
          <div className="wrap">
            <div className="section-head">
              <div>
                <h2>
                  From a business question
                  <br />
                  to a more informed decision.
                </h2>
              </div>
              <p>Explore how identity and relationship intelligence can support telecom teams.</p>
            </div>
            <div className="use-list" id="use-list" />
          </div>
        </section>
        {" "}
        <section className="section walkthrough dark" id="investigate">
          <div className="wrap">
            <div className="section-head">
              <div>
                <h2>
                  See the group behind
                  <br />
                  separate applications.
                </h2>
              </div>
              <p>
                A shared detail becomes useful when teams can examine who is connected, how they are connected and what happened.
              </p>
            </div>
            <div className="walkthrough-grid">
              <div className="risk-scene" id="risk-scene" data-step="0">
                <svg viewBox="0 0 560 320" role="img" aria-label="Three distinct subscriber applications. Reveal shared device and dealer relationships, then inspect the evidence.">
                  <g>
                    <path className="risk-link" d="M92 95C92 155 205 140 205 205M280 95C280 150 205 150 205 205M468 95C468 150 205 140 205 205M92 95C92 170 390 160 390 205M280 95C280 150 390 150 390 205" />
                  </g>
                  <g>
                    <rect className="risk-node selected" x="17" y="32" width="150" height="63" rx="7" />
                    <rect className="risk-node selected" x="205" y="32" width="150" height="63" rx="7" />
                    <rect className="risk-node selected" x="393" y="32" width="150" height="63" rx="7" />
                    <text className="risk-text" x="92" y="58" textAnchor="middle">Application A</text>
                    <text className="risk-text" x="280" y="58" textAnchor="middle">Application B</text>
                    <text className="risk-text" x="468" y="58" textAnchor="middle">Application C</text>
                    <text className="risk-sub" x="92" y="79" textAnchor="middle">Subscriber record</text>
                    <text className="risk-sub" x="280" y="79" textAnchor="middle">Subscriber record</text>
                    <text className="risk-sub" x="468" y="79" textAnchor="middle">Subscriber record</text>
                  </g>
                  <g className="risk-shared">
                    <rect className="risk-node" x="127" y="205" width="156" height="62" rx="7" />
                    <rect className="risk-node" x="312" y="205" width="156" height="62" rx="7" />
                    <text className="risk-text" x="205" y="233" textAnchor="middle">Same dealer</text>
                    <text className="risk-sub" x="205" y="253" textAnchor="middle">Activation relationship</text>
                    <text className="risk-text" x="390" y="233" textAnchor="middle">Shared device</text>
                    <text className="risk-sub" x="390" y="253" textAnchor="middle">Observed signal</text>
                  </g>
                  <text x="280" y="305" textAnchor="middle" className="risk-sub">Distinct applicants · Relationships to assess</text>
                </svg>
                <div className="risk-steps">
                  <button data-risk="0" aria-pressed="true">Separate records</button>
                  <button data-risk="1" aria-pressed="false">Reveal connections</button>
                  <button data-risk="2" aria-pressed="false">Review evidence →</button>
                </div>
              </div>
              <div className="risk-copy" aria-live="polite">
                <div className="audience">{"Fraud & investigation teams"}</div>
                <h3 id="risk-title">Begin with the application in front of you.</h3>
                <p id="risk-description">
                  Each subscriber record can appear ordinary on its own. Explore the connections to see what a wider review could include.
                </p>
                <div className="evidence" id="evidence">
                  <div>
                    <span>↗</span>
                    {" Original application details"}
                  </div>
                  <div>
                    <span>↗</span>
                    {" Available device and activation records"}
                  </div>
                  <div>
                    <span>↗</span>
                    {" Dealer and channel information"}
                  </div>
                </div>
                <p className="review-note">A shared device or dealer is a clue to assess, not proof of fraud.</p>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="section" id="fit">
          <div className="wrap fit-layout">
            <div>
              <h2>
                Your existing systems.
                <br />
                A more complete basis
                <br />
                for the next decision.
              </h2>
              <p>
                ContexQ adds identity and relationship context to information from your customer, billing, fraud and partner systems. Start with the decision your team needs to improve.
              </p>
            </div>
            <div className="fit-steps">
              <article>
                <i>+</i>
                <div>
                  <h3>Bring the relevant records into view</h3>
                  <p>Use the customer, account, application or business records available for the chosen use case.</p>
                </div>
              </article>
              <article>
                <i>⌘</i>
                <div>
                  <h3>Distinguish identity from relationships</h3>
                  <p>
                    Identify records that describe the same entity while preserving links between different people and organisations.
                  </p>
                </div>
              </article>
              <article>
                <i>✓</i>
                <div>
                  <h3>Put evidence behind the next action</h3>
                  <p>
                    Give teams the source records and surrounding context to assess a finding. Add external information where relevant and permitted.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="closing" id="contact">
          <div className="wrap">
            <div>
              <h2>
                Which telecom decision
                <br />
                needs a clearer picture?
              </h2>
              <p>Explore a customer, investigation or partner use case with ContexQ.</p>
            </div>
            <div className="cta-stack">
<Link prefetch={false} className="cta" href="/contact">Talk to the team</Link>
<p className="cq-mail-line">
  {"or mail us at "}
  <a href={"mailto:inquiry@contexq.com?subject=Telecommunications%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20telecommunications.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>inquiry@contexq.com</a>
</p>
</div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
