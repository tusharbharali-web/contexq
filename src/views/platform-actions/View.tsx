// Generated from public/html/contexq-decision-intelligence.html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-platform-actions);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="platform-actions" className="v-platform-actions cq-html" lang="en" bodyClassName="cq-body">
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">From a finding to a decision your team can stand behind.</h1>
              {" "}
              <p className="lede">
                ContexQ puts the evidence behind a finding in one place, sets out the possible responses with their reasoning, and records the next step your team agrees, ready to hand to the people and systems that carry it out.
              </p>
              {" "}
              <div className="ctas"><a className="btn btn-blue cq-cta" href="#walk">See it in action</a></div>
            </div>
            {" "}
            <div className="hv" id="hv" data-s="0">
              <div className="hv-top">
                <span>FROM DATA TO DECISION</span>
                <span>How ContexQ works</span>
              </div>
              {" "}
              <div className="hv-scene" aria-hidden="true"><svg id="hvSvg" focusable="false" /></div>
              {" "}
              <p className="hv-cap" id="hvCap" aria-live="polite">
                Data from your systems and outside sources flows into ContexQ.
              </p>
              {" "}
              <div className="hv-ctl">
                <div className="hv-steps" role="group" aria-label="Animation stages">
                  <button type="button" data-s="0" aria-pressed="true">Data in</button>
                  <button type="button" data-s="1" aria-pressed="false">Graph</button>
                  <button type="button" data-s="2" aria-pressed="false">Recommendations</button>
                  <button type="button" data-s="3" aria-pressed="false">Action</button>
                </div>
                <div className="hv-btns">
                  <button type="button" id="hvPause">Pause</button>
                  <button type="button" id="hvReplay">Replay</button>
                </div>
              </div>
              {" "}
              <p className="sr">
                Illustration of how ContexQ works. Data from internal sources, such as customer records and transactions, and external sources, such as company registries, news and watchlists, flows into the ContexQ globe. ContexQ resolves the people and companies in it and builds a connected graph. From the graph it suggests ranked next steps, each with the evidence behind it: examine connected entities, ask for missing information, or reassess on new evidence. A person approves the top step, and it is handed to the owning team.
              </p>
            </div>
          </div>
        </section>
        {" "}
        <section className="sec light" id="gap" aria-labelledby="gap-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="gap-title">Noticing a problem is not the same as knowing what to do about it.</h2>
            </div>
            {" "}
            <div className="gaps">
              <article>
                <span className="gq">Is this real?</span>
                <p>
                  An alert or early warning arrives on its own. Before anyone can act, they need the records, relationships and history that explain it.
                </p>
              </article>
              {" "}
              <article>
                <span className="gq">Where is the evidence?</span>
                <p>
                  It sits across internal systems and outside sources, in different formats. Gathering it by hand is slow, and the picture is often incomplete.
                </p>
              </article>
              {" "}
              <article>
                <span className="gq">What should we do?</span>
                <p>
                  Several responses may be reasonable. Without the reasoning laid out, teams decide inconsistently or wait for more certainty.
                </p>
              </article>
              {" "}
              <article>
                <span className="gq">Can we explain it later?</span>
                <p>
                  When a decision is reviewed, the evidence and judgement behind it need to be clear, not reconstructed from emails.
                </p>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="sec dark" id="walk" aria-labelledby="walk-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="walk-title">One early warning, from evidence to action.</h2>
            </div>
            {" "}
            <div className="fc" id="fc" data-s="0">
              <ol className="fc-rail" aria-label="Stages">
                <li>
                  <button type="button" data-s="0" aria-current="step">
                    <span className="fc-n">1</span>
                    <span className="fc-t">
                      <b>Investigate</b>
                      <small>See the evidence, already connected</small>
                    </span>
                    <i className="fc-bar"><i /></i>
                  </button>
                </li>
                {" "}
                <li>
                  <button type="button" data-s="1">
                    <span className="fc-n">2</span>
                    <span className="fc-t">
                      <b>Recommend</b>
                      <small>A next step, with its reasons</small>
                    </span>
                    <i className="fc-bar"><i /></i>
                  </button>
                </li>
                {" "}
                <li>
                  <button type="button" data-s="2">
                    <span className="fc-n">3</span>
                    <span className="fc-t">
                      <b>Act</b>
                      <small>A person approves, a team follows through</small>
                    </span>
                    <i className="fc-bar"><i /></i>
                  </button>
                </li>
                {" "}
                <li className="fc-ctl">
                  <button type="button" id="fcPause">Pause</button>
                  <span>Plays automatically · click a stage to jump</span>
                </li>
              </ol>
              {" "}
              <div className="fc-card" aria-live="polite">
                <div className="fc-alert">
                  <span className="fc-ai" aria-hidden="true">!</span>
                  <div>
                    <small>Early warning</small>
                    <b>Key supplier of a borrower named in insolvency news</b>
                  </div>
                </div>
                {" "}
                <div className="fc-p p0">
                  <ul className="fc-ev">
                    <li>
                      <span className="ok" aria-hidden="true">✓</span>
                      <b>Payments to that supplier are rising</b>
                      <em>Your transactions</em>
                    </li>
                    {" "}
                    <li>
                      <span className="ok" aria-hidden="true">✓</span>
                      <b>The two companies share a director</b>
                      <em>Company registry</em>
                    </li>
                    {" "}
                    <li>
                      <span className="ok" aria-hidden="true">✓</span>
                      <b>The supplier has filed for insolvency</b>
                      <em>News report</em>
                    </li>
                    {" "}
                    <li className="gap">
                      <span className="ok" aria-hidden="true">?</span>
                      <b>Latest accounts not received yet</b>
                      <em>Still missing</em>
                    </li>
                  </ul>
                </div>
                {" "}
                <div className="fc-p p1">
                  <div className="fc-rec">
                    <small>Suggested next step</small>
                    <b>Bring the credit review forward and ask for updated accounts</b>
                    <span>
                      Because payments are rising, a director is shared and the supplier has filed for insolvency. May change when the accounts arrive.
                    </span>
                  </div>
                  {" "}
                  <div className="fc-alt">
                    <span>Other options considered</span>
                    <em>Keep monitoring</em>
                    <em>Escalate now</em>
                  </div>
                </div>
                {" "}
                <div className="fc-p p2">
                  <ol className="fc-do">
                    <li>
                      <span className="ok" aria-hidden="true">✓</span>
                      <b>Approved by the credit officer</b>
                    </li>
                    {" "}
                    <li>
                      <span className="ok" aria-hidden="true">✓</span>
                      <b>Handed to the credit risk team</b>
                    </li>
                    {" "}
                    <li className="now">
                      <span className="ok" aria-hidden="true">•</span>
                      <b>Waiting for updated accounts</b>
                    </li>
                  </ol>
                  {" "}
                  <p className="fc-note">Decision and evidence are saved together for later review.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="sec light" id="value" aria-labelledby="val-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="val-title">What changes for the organisation.</h2>
            </div>
            {" "}
            <div className="vals">
              <article>
                <h3>Investigations start further ahead</h3>
                <p>
                  Analysts begin with connected records, relationships and chronology instead of assembling them, and spend their time on judgement.
                </p>
              </article>
              {" "}
              <article>
                <h3>More consistent decisions</h3>
                <p>
                  Seeing the options and the reasoning side by side helps different people reach comparable decisions on comparable cases.
                </p>
              </article>
              {" "}
              <article>
                <h3>Earlier, better-informed action</h3>
                <p>
                  Teams can act on an early warning while making clear what is still unknown, rather than waiting for complete certainty.
                </p>
              </article>
              {" "}
              <article>
                <h3>Decisions you can explain</h3>
                <p>Evidence, reasoning and approval are kept together for committees, auditors and regulators.</p>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="sec paper" id="fit" aria-labelledby="fit-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="fit-title">ContexQ informs. Your people decide. Your systems carry it out.</h2>
            </div>
            {" "}
            <div className="lanes">
              <div className="lane l1">
                <h3>ContexQ provides</h3>
                <ul>
                  <li>Connected evidence from your records and outside sources</li>
                  <li>A workspace to investigate relationships and chronology</li>
                  <li>Suggested next steps with their reasoning and open questions</li>
                  <li>A record of what was decided and why</li>
                </ul>
              </div>
              {" "}
              <div className="arrow" aria-hidden="true" />
              {" "}
              <div className="lane l2">
                <h3>Your people decide</h3>
                <ul>
                  <li>Review the evidence and add what they know</li>
                  <li>Choose or adjust the response</li>
                  <li>Approve within their authority</li>
                </ul>
              </div>
              {" "}
              <div className="arrow" aria-hidden="true" />
              {" "}
              <div className="lane l3">
                <h3>Your systems carry it out</h3>
                <ul>
                  <li>Case management and workflow tools</li>
                  <li>Compliance systems</li>
                  <li>Notifications to the teams involved</li>
                </ul>
                <p className="lnote">Connected as agreed with your technology teams.</p>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="closing" id="contact" aria-labelledby="closing-title">
          <div className="wrap">
            <div>
              <h2 id="closing-title">Which decision should your team be able to stand behind?</h2>
              <p>See how ContexQ takes a finding from evidence to an agreed next step.</p>
            </div>
            <div className="cta-stack">
<Link prefetch={false} className="cta cq-cta" href="/contact">Talk to the team</Link>
<p className="cq-mail-line">
  {"or mail us at "}
  <a href={"mailto:inquiry@contexq.com?subject=Investigation%2C%20recommendation%20and%20action%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20investigation%2C%20recommendation%20and%20action.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>inquiry@contexq.com</a>
</p>
</div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
