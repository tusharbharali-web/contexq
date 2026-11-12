// Generated from public/html/contexq-composite-ai-scores.html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-platform-scores);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="platform-scores" className="v-platform-scores cq-html" lang="en" bodyClassName="cq-body">
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">Risk scores that read the network, not just the record.</h1>
              {" "}
              <p className="lede">
                Explainable scores for customers, suppliers and counterparties. Each is shaped by the entity’s connections, history and peers, breaks down into named components, and points to a clear next step.
              </p>
              {" "}
              <div className="ctas"><a className="btn btn-blue" href="#packs">Explore decision packs</a></div>
            </div>
            {" "}
            <div className="stage" id="stage" role="img" aria-label="Illustrative animation: an exposure score for a supplier is built from its financial statements, its network and its ownership structure. Each component fills in turn, the composite tier rises from Medium to High, and the breakdown stays visible.">
              <div className="comps" aria-hidden="true">
                <div className="cp cp-a">
                  <div className="cp-h">
                    <span className="cp-t">Financial statements</span>
                    <span className="cp-b" />
                  </div>
                  <div className="bar"><i /></div>
                  <p>Reported figures out of line with peers</p>
                </div>
                {" "}
                <div className="cp cp-b2">
                  <div className="cp-h">
                    <span className="cp-t">Network exposure</span>
                    <span className="cp-b" />
                  </div>
                  <div className="bar"><i /></div>
                  <p>Path to a sanctioned counterparty via a shared director</p>
                </div>
                {" "}
                <div className="cp cp-c">
                  <div className="cp-h">
                    <span className="cp-t">Ownership structure</span>
                    <span className="cp-b" />
                  </div>
                  <div className="bar"><i /></div>
                  <p>Circular ownership through an offshore holding</p>
                </div>
              </div>
              {" "}
              <svg className="flows" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path className="f f1" d="M0 22 C40 22 50 50 100 50" />
                <path className="f f2" d="M0 50 C40 50 60 50 100 50" />
                <path className="f f3" d="M0 78 C40 78 50 50 100 50" />
              </svg>
              {" "}
              <div className="ring" aria-hidden="true">
                <svg viewBox="0 0 180 180">
                  <circle className="track" cx="90" cy="90" r="70" />
                  <circle className="arc a1" cx="90" cy="90" r="70" />
                  <circle className="arc a2" cx="90" cy="90" r="70" />
                  <circle className="arc a3" cx="90" cy="90" r="70" />
                </svg>
                {" "}
                <div className="ring-in">
                  <small>Exposure score</small>
                  <b id="band">Not scored</b>
                  <span>Supplier</span>
                </div>
                {" "}
                <div className="tiers">
                  <span data-t="Medium">Medium</span>
                  <span data-t="High">High</span>
                  <span data-t="Critical">Critical</span>
                </div>
              </div>
              {" "}
              <p className="stage-step" id="step" aria-hidden="true">A supplier, not yet scored</p>
              {" "}
              <div className="stage-ui">
                <span>Illustrative example</span>
                {" "}
                <div className="ctrls">
                  <button className="ctrl" id="hPause" type="button" aria-label="Pause animation">Pause</button>
                  <button className="ctrl" id="hReplay" type="button" aria-label="Replay animation">Replay</button>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap ben" role="group" aria-label="Key benefits">
            <div>
              <b>See wider</b>
              <span>Surface risk that sits in networks and outside data, not only in your own files.</span>
            </div>
            {" "}
            <div>
              <b>Decide with confidence</b>
              <span>Scores built for specific business decisions, with the reasons attached.</span>
            </div>
            {" "}
            <div>
              <b>Adapt to every use case</b>
              <span>Prebuilt packs, tuned to your policies and risk appetite.</span>
            </div>
            {" "}
            <div>
              <b>Free up analysts</b>
              <span>Less repetitive work, more time on the cases that matter.</span>
            </div>
          </div>
          {" "}
          <p className="sr">
            Illustrative animation. A supplier’s exposure score is built in turn from its financial statements, where reported figures are out of line with peers; its network, where a shared director creates a path to a sanctioned counterparty; and its ownership structure, which is circular through an offshore holding. The composite tier rises from Medium to High, and each component remains visible as the reason.
          </p>
        </section>
        {" "}
        <section className="sec light" id="challenge" aria-labelledby="ch-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="ch-title">Risk rarely shows up in a company’s own record.</h2>
            </div>
            {" "}
            <div className="chal">
              <article>
                <h3>Scores look at the record, not the network</h3>
                <p>
                  Owners, directors, suppliers and counterparties sit outside most risk scores, so exposure that runs through them goes unseen.
                </p>
              </article>
              {" "}
              <article>
                <h3>Name checks miss how close the risk really is</h3>
                <p>
                  A match on a list says little about its authority, severity or whether the link is direct or a few steps away.
                </p>
              </article>
              {" "}
              <article>
                <h3>Black-box results stall decisions</h3>
                <p>A score without reasons is hard to challenge, approve or defend to an auditor or regulator.</p>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="sec paper" id="how" aria-labelledby="hw-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="hw-title">From scattered data to a decision you can defend.</h2>
            </div>
            {" "}
            <div className="flow">
              <article>
                <h3>Start from clean, resolved data</h3>
                <p>
                  Your records and external data are mapped and resolved to the right people and companies. Uncertain mappings go to a person, never guessed.
                </p>
              </article>
              {" "}
              <article>
                <h3>Read the network around it</h3>
                <p>
                  Owners, directors, suppliers, histories and peer groups are connected, so structural warning signs surface as the network is built.
                </p>
              </article>
              {" "}
              <article>
                <h3>Score, explain and act</h3>
                <p>
                  Decision packs score the entity, break the result into named components and map it to a next step. Your team makes the call.
                </p>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="sec light" id="packs" aria-labelledby="pk-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="pk-title">Ready-made scores for specific decisions, tuned to your policies.</h2>
              {" "}
              <p className="lede">
                Each pack brings investigative expertise for a particular risk, combining the methods that suit that risk rather than a generic approach.
              </p>
            </div>
            {" "}
            <div className="packs">
              <article>
                <h3>Fraud and exposure</h3>
                <p>
                  Combines unusual patterns in reported financials, exposure to sanctioned or high-risk counterparties through the network, and ownership that looks built to hide.
                </p>
              </article>
              {" "}
              <article>
                <h3>Financial distress</h3>
                <p>
                  Forecasts the likelihood of distress over a multi-year horizon and shows how the company compares with its peers.
                </p>
              </article>
              {" "}
              <article>
                <h3>Sanctions proximity</h3>
                <p>
                  Goes beyond name matching: weighs the authority of the list, the severity and grounds of the sanction, industry context, and whether the link is direct or through the network.
                </p>
              </article>
              {" "}
              <article>
                <h3>Ownership and control</h3>
                <p>
                  Follows ownership and control chains to the people who ultimately direct a company, including indirect forms of control.
                </p>
              </article>
              {" "}
              <article>
                <h3>Location intelligence</h3>
                <p>Assesses the risk of where a company operates and whether it has real economic substance there.</p>
              </article>
              {" "}
              <article>
                <h3>Shell detection</h3>
                <p>
                  Flags companies whose structure and connections suggest little genuine activity, as soon as the network is built.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="sec dark" id="explain" aria-labelledby="ex-title">
          <div className="wrap split">
            <div className="intro">
              <h2 id="ex-title">Every score breaks down, and points to a next step.</h2>
              {" "}
              <p className="lede">
                Analysts see which components drove the result and where each input came from. Bands translate the score into handling your teams already understand.
              </p>
              {" "}
              <ul className="ex-key">
                <li>
                  <b>Named components</b>
                  <span>The evidence trail an analyst, committee or auditor needs.</span>
                </li>
                {" "}
                <li>
                  <b>Recorded sources</b>
                  <span>Where every input came from, field by field.</span>
                </li>
                {" "}
                <li>
                  <b>Peer context</b>
                  <span>How the entity compares with similar companies.</span>
                </li>
              </ul>
            </div>
            {" "}
            <article className="bands" aria-label="Example: financial distress bands and the handling each one triggers">
              <header>
                <b>From band to handling</b>
              </header>
              {" "}
              <ol>
                <li className="b1">
                  <span>Low</span>
                  <em>Standard monitoring</em>
                </li>
                {" "}
                <li className="b2">
                  <span>Elevated</span>
                  <em>Periodic review</em>
                </li>
                {" "}
                <li className="b3 on">
                  <span>High</span>
                  <em>Enhanced due diligence</em>
                </li>
                {" "}
                <li className="b4">
                  <span>Severe</span>
                  <em>Immediate exposure review</em>
                </li>
              </ol>
              {" "}
              <p className="bnote">
                Example handling shown for the financial distress pack. Your policies set the response for each band.
              </p>
            </article>
          </div>
        </section>
        <section className="sec light" id="teams" aria-labelledby="tm-title">
          <div className="wrap split">
            <div className="intro">
              <h2 id="tm-title">A shared view of risk across teams.</h2>
              {" "}
              <p className="lede">
                The same resolved data and network sit behind every pack, so each team works from consistent evidence.
              </p>
            </div>
            {" "}
            <ul className="teams">
              <li>
                <b>Credit and risk</b>
                <span>Early warning of distress in borrowers and their groups.</span>
              </li>
              {" "}
              <li>
                <b>Financial crime and compliance</b>
                <span>Sanctions proximity, ownership and control, and shell indicators.</span>
              </li>
              {" "}
              <li>
                <b>Fraud</b>
                <span>Alerts that reflect real risk, not noise.</span>
              </li>
              {" "}
              <li>
                <b>Procurement and supply chain</b>
                <span>Supplier exposure, structure and location risk before onboarding.</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="sec paper" id="why" aria-labelledby="wy-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="wy-title">Built for decisions that have to stand up to scrutiny.</h2>
            </div>
            {" "}
            <div className="why">
              <article>
                <h3>Context, not isolation</h3>
                <p>Risk is read from networks, histories and peers, so connected warning signs are not missed.</p>
              </article>
              {" "}
              <article>
                <h3>Hard to fool</h3>
                <p>Structural signals in the network sit underneath the models, making risk harder to disguise.</p>
              </article>
              {" "}
              <article>
                <h3>Explainable by design</h3>
                <p>Reasons are built into every score from the start, not reconstructed later for the auditor.</p>
              </article>
              {" "}
              <article>
                <h3>People stay in charge</h3>
                <p>Repetitive work is automated; judgement stays with your analysts and approvers.</p>
              </article>
              {" "}
              <article>
                <h3>Tunable to your policies</h3>
                <p>Packs are prebuilt where that saves time and adjustable where your organisation differs.</p>
              </article>
              {" "}
              <article>
                <h3>Enterprise ready</h3>
                <p>
                  Batch and real-time runs give the same results, with role-based access and deployment on premises or in the cloud.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="closing" id="contact" aria-labelledby="cl-title">
          <div className="wrap">
            <div>
              <h2 id="cl-title">Which decision needs a score you can explain?</h2>
              <p>See how a decision pack would read your customers, suppliers or counterparties.</p>
            </div>
            <div className="cta-stack">
<Link prefetch={false} className="cta" href="/contact">Talk to the team</Link>
<p className="cq-mail-line">
  {"or mail us at "}
  <a href={"mailto:inquiry@contexq.com?subject=Composite%20AI%20scores%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20composite%20AI%20scores.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>inquiry@contexq.com</a>
</p>
</div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
