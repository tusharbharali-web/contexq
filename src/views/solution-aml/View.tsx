// Generated from public/html/contexq-aml (3).html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-solution-aml);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="solution-aml" className="v-solution-aml cq-html" lang="en" bodyClassName="cq-body">
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
        <section className="hero" id="top" aria-labelledby="heroTitle" style={{ padding: "0" }}>
          <canvas id="heroCanvas" aria-hidden="true" />
          {" "}
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 id="heroTitle">See the network behind every alert.</h1>
              {" "}
              <p className="lead">
                ContexQ works alongside your existing AML systems and adds the context they need: who customers and their counterparties really are, and how they link. Your team spends less time clearing alerts and more time on real risk.
              </p>
              {" "}
              <div className="hero-actions"><a className="btn btn-primary cq-cta" href="#fit">See where ContexQ fits</a></div>
              {" "}
              <p className="hero-note">
                <span aria-hidden="true" />
                No replacement of your current systems.
              </p>
            </div>
            {" "}
            <div className="hero-stage" id="heroStage" role="img" aria-label="Illustrative animation. Money moves from cash deposits through a personal account, a shell company, another account and a trading company to a final beneficiary across several countries: placement, layering and integration. Two alerts each see one step and are closed as normal. ContexQ takes in customer, registry and watchlist records and traces the whole trail. It finds that the two companies share a hidden owner and that the final beneficiary is a relative of a sanctioned person. The result is one case covering the full money trail.">
              <div className="hero-foot">
                <div className="hero-key" aria-hidden="true">
                  <span>
                    <i className="k-pay" />
                    Money
                  </span>
                  <span>
                    <i className="k-rec" />
                    Record into ContexQ
                  </span>
                  <span>
                    <i className="k-rel" />
                    Hidden link
                  </span>
                </div>
                {" "}
                <div className="hero-ctl">
                  <ol className="hsteps">
                    <li>
                      <button className="hstep" type="button">
                        <span className="bar" />
                        <strong>Money moves</strong>
                        <small>Each alert sees one step</small>
                      </button>
                    </li>
                    {" "}
                    <li>
                      <button className="hstep" type="button">
                        <span className="bar" />
                        <strong>ContexQ connects</strong>
                        <small>Records joined up</small>
                      </button>
                    </li>
                    {" "}
                    <li>
                      <button className="hstep" type="button">
                        <span className="bar" />
                        <strong>Trail revealed</strong>
                        <small>Hidden owner, sanctioned link</small>
                      </button>
                    </li>
                    {" "}
                    <li>
                      <button className="hstep" type="button">
                        <span className="bar" />
                        <strong>One case</strong>
                        <small>Ready for review</small>
                      </button>
                    </li>
                  </ol>
                  {" "}
                  <div className="hero-btns">
                    <button className="icon-btn" id="heroPause" type="button" aria-label="Pause animation">Ⅱ</button>
                    <button className="icon-btn" id="heroReplay" type="button" aria-label="Replay animation">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <use href="#i-replay" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="light" id="challenge" aria-labelledby="chTitle">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="kicker">Why it matters</span>
                <h2 id="chTitle">AML effort keeps rising. Context makes it count.</h2>
              </div>
              {" "}
              <p>
                Teams review alerts one at a time and gather information by hand across many systems. With the right context, every step can focus on the cases that matter.
              </p>
            </div>
            {" "}
            <div className="stats">
              <div>
                <b>90%+</b>
                <span>of alerts are typically closed with no action</span>
              </div>
              {" "}
              <div>
                <b>60 to 80%</b>
                <span>of investigator time goes on gathering information</span>
              </div>
              {" "}
              <div>
                <b>{"<1%"}</b>
                <span>of laundered money worldwide is estimated to be seized</span>
              </div>
            </div>
            {" "}
            <p className="note">Commonly cited industry estimates.</p>
          </div>
        </section>
        {" "}
        <section id="fit" aria-labelledby="fitTitle">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="kicker">Where ContexQ fits</span>
                <h2 id="fitTitle">Keep your AML systems. Make every step stronger.</h2>
              </div>
              {" "}
              <p>
                ContexQ doesn’t replace anything. It joins your data with outside sources once, and every step you already run benefits.
              </p>
            </div>
            {" "}
            <ol className="steps4" id="steps4">
              <li>
                <span className="s-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <use href="#i-person" />
                  </svg>
                </span>
                <h3>Customer checks</h3>
                {" "}
                <p className="today">
                  <b>Today</b>
                  Ownership is taken as declared.
                </p>
                <p className="with">
                  <b>With ContexQ</b>
                  Real owners and links to sanctioned people are surfaced.
                </p>
              </li>
              {" "}
              <li>
                <span className="s-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <use href="#i-shield" />
                  </svg>
                </span>
                <h3>Screening</h3>
                {" "}
                <p className="today">
                  <b>Today</b>
                  Name matches on lists and news create many hits to clear.
                </p>
                <p className="with">
                  <b>With ContexQ</b>
                  News read in any language and matched on more than a name.
                </p>
              </li>
              {" "}
              <li>
                <span className="s-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <use href="#i-alert" />
                  </svg>
                </span>
                <h3>Monitoring</h3>
                {" "}
                <p className="today">
                  <b>Today</b>
                  Alerts are reviewed one at a time.
                </p>
                <p className="with">
                  <b>With ContexQ</b>
                  Related alerts grouped and ranked by risk.
                </p>
              </li>
              {" "}
              <li>
                <span className="s-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <use href="#i-doc" />
                  </svg>
                </span>
                <h3>Investigation</h3>
                {" "}
                <p className="today">
                  <b>Today</b>
                  Evidence is gathered by hand across systems.
                </p>
                <p className="with">
                  <b>With ContexQ</b>
                  Ownership, payments and news in one place, ready to review.
                </p>
              </li>
            </ol>
          </div>
        </section>
        {" "}
        <section className="light" id="how" aria-labelledby="howTitle">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="kicker">How it works</span>
                <h2 id="howTitle">Built once. Used by every check.</h2>
              </div>
              {" "}
              <p>
                ContexQ joins up your customer, payment and outside data once. Every check you already run can then draw on it.
              </p>
            </div>
            {" "}
            <div className="hw" id="hw">
              <svg className="hw-line" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="hwg" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1200" y2="0">
                    <stop offset="0" stopColor="#486AAE" stopOpacity=".25" />
                    <stop offset=".7" stopColor="#3FC8F2" />
                    <stop offset="1" stopColor="#F2B84B" />
                  </linearGradient>
                </defs>
                <path id="hwp" d="M0 30 H1200" stroke="url(#hwg)" strokeWidth="2" fill="none" />
                <g fill="#0F1F72">
                  <circle r="4"><animateMotion dur="4s" repeatCount="indefinite" path="M0 30 H1200" /></circle>
                  <circle r="4"><animateMotion dur="4s" begin="-1.3s" repeatCount="indefinite" path="M0 30 H1200" /></circle>
                  <circle r="4"><animateMotion dur="4s" begin="-2.6s" repeatCount="indefinite" path="M0 30 H1200" /></circle>
                </g>
              </svg>
              {" "}
              <ol className="hw-steps">
                <li>
                  <span className="hw-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <use href="#i-doc" />
                    </svg>
                  </span>
                  <h3>Bring the data together</h3>
                  <p>Your customer, account and payment records, joined with company registries, watchlists and news.</p>
                </li>
                {" "}
                <li>
                  <span className="hw-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <use href="#i-person" />
                    </svg>
                  </span>
                  <h3>Recognise the real parties</h3>
                  <p>The same person or company identified across systems, spellings and languages.</p>
                </li>
                {" "}
                <li>
                  <span className="hw-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <use href="#i-hierarchy" />
                    </svg>
                  </span>
                  <h3>Map the connections</h3>
                  <p>Owners, directors, shared addresses and money flows linked into one view.</p>
                </li>
                {" "}
                <li>
                  <span className="hw-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <use href="#i-alert" />
                    </svg>
                  </span>
                  <h3>Score and explain</h3>
                  <p>Risk judged on everyone involved, with the reason behind every alert.</p>
                </li>
              </ol>
              {" "}
              <p className="hw-loop">
                <span aria-hidden="true">↻</span>
                {" Your investigators’ decisions feed back in, so results improve over time."}
              </p>
            </div>
          </div>
        </section>
        {" "}
        <section id="scenarios" aria-labelledby="scTitle">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="kicker">See the difference</span>
                <h2 id="scTitle">What an alert sees. What ContexQ reveals.</h2>
              </div>
              {" "}
              <p>Four patterns, and what each looks like with and without ContexQ.</p>
            </div>
            {" "}
            <div className="exs" id="exs" data-view="rule">
              <article className="exc">
                <h3>Money in, straight out</h3>
                <div className="exfig" data-x="0" />
                <div className="rows">
                  <p className="r-wo">
                    <b>Without ContexQ</b>
                    Payments from several countries reach a fund. Each looks normal.
                  </p>
                  <p className="r-wi">
                    <b>With ContexQ</b>
                    The money leaves the next day, to the fund CEO’s personal account.
                  </p>
                </div>
              </article>
              {" "}
              <article className="exc">
                <h3>A hidden connection</h3>
                <div className="exfig" data-x="1" />
                <div className="rows">
                  <p className="r-wo">
                    <b>Without ContexQ</b>
                    A company pays a person abroad. No list match.
                  </p>
                  <p className="r-wi">
                    <b>With ContexQ</b>
                    That person’s business partners are related to a sanctioned individual.
                  </p>
                </div>
              </article>
              {" "}
              <article className="exc">
                <h3>Customers acting together</h3>
                <div className="exfig" data-x="2" />
                <div className="rows">
                  <p className="r-wo">
                    <b>Without ContexQ</b>
                    Many customers buy and sell currency, each raising an alert.
                  </p>
                  <p className="r-wi">
                    <b>With ContexQ</b>
                    Three share a director and address: one real case to review.
                  </p>
                </div>
              </article>
              {" "}
              <article className="exc">
                <h3>Is this news about your customer?</h3>
                <div className="exfig" data-x="3" />
                <div className="rows">
                  <p className="r-wo">
                    <b>Without ContexQ</b>
                    A news article mentions a similar name.
                  </p>
                  <p className="r-wi">
                    <b>With ContexQ</b>
                    Matched in its own language on places, business and associates: a strong hit.
                  </p>
                </div>
              </article>
            </div>
            {" "}
            <p className="ex-ctl"><button type="button" id="exReplay" className="btn-link">↻ Replay</button></p>
          </div>
        </section>
        {" "}
        <section className="light" id="action" aria-labelledby="acTitle">
          <div className="wrap act">
            <div>
              <span className="kicker">From insight to action</span>
              {" "}
              <h2 id="acTitle">Every case arrives with a recommended next step.</h2>
              {" "}
              <p className="act-lead">
                ContexQ explains why a case was raised, ranks it against your other work, and suggests what to do next, inside the case manager your team already uses.
              </p>
              {" "}
              <ul className="act-pts">
                <li>
                  <b>Prioritised</b>
                  The highest-risk cases come first.
                </li>
                {" "}
                <li>
                  <b>Explained</b>
                  Plain reasons, each linked to the records behind it.
                </li>
                {" "}
                <li>
                  <b>Actionable</b>
                  Suggested steps your team can approve, edit or dismiss.
                </li>
              </ul>
            </div>
            {" "}
            <div className="case" id="caseCard" aria-label="Example case: possible layering through an investment fund, with its reasons and suggested next steps">
              <div className="case-h">
                <span className="pri">High priority</span>
                <b>Possible layering through a fund</b>
              </div>
              {" "}
              <div className="case-sec">
                <small>Why it was raised</small>
                {" "}
                <div className="why-chips">
                  <span>Inflows from several countries</span>
                  <span>Paid out the next day</span>
                  <span>To the CEO’s personal account</span>
                  <span>Same total in and out</span>
                </div>
              </div>
              {" "}
              <div className="case-sec">
                <small>Suggested next steps</small>
                {" "}
                <ol className="next">
                  <li>
                    <i />
                    Review the fund’s inflows and outflows together
                  </li>
                  {" "}
                  <li>
                    <i />
                    Ask the customer for the source of funds
                  </li>
                  {" "}
                  <li>
                    <i />
                    Prepare a suspicious-transaction report with the evidence attached
                  </li>
                </ol>
              </div>
              {" "}
              <p className="case-f">Your investigator reviews and decides. Nothing happens automatically.</p>
            </div>
          </div>
        </section>
        {" "}
        <section id="detection" aria-labelledby="detTitle">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="kicker">Detection</span>
                <h2 id="detTitle">Three layers of risk, not one.</h2>
              </div>
              {" "}
              <p>Keep the checks your regulator already knows, and add what outside data and connections reveal.</p>
            </div>
            {" "}
            <div className="layers" id="layers">
              <svg className="rings" viewBox="0 0 320 320" aria-hidden="true">
                <circle className="rg r3" cx="160" cy="160" r="150" />
                <circle className="rg r2" cx="160" cy="160" r="104" />
                <circle className="rg r1" cx="160" cy="160" r="58" />
                <text x="160" y="165" textAnchor="middle" className="rt1">Your data</text>
                <text x="160" y="84" textAnchor="middle" className="rt2">+ Outside data</text>
                <text x="160" y="34" textAnchor="middle" className="rt3">+ The network</text>
              </svg>
              {" "}
              <ol className="lv">
                <li className="l1">
                  <small>Layer one · what you check today</small>
                  <h3>Your transactions</h3>
                  <p>Money moving fast through an account, payments split to stay under limits, unusual cash.</p>
                </li>
                {" "}
                <li className="l2">
                  <small>Layer two · adds outside data</small>
                  <h3>Who you are dealing with</h3>
                  <p>Payments to companies that have closed, links to watchlists, one person behind dozens of companies.</p>
                </li>
                {" "}
                <li className="l3">
                  <small>Layer three · adds connections</small>
                  <h3>Who they are connected to</h3>
                  <p>Risky parties two or more steps away, and money funnelled through linked accounts.</p>
                </li>
              </ol>
            </div>
            {" "}
            <p className="code-note">
              <b>Built to grow with you.</b>
              {" Detection is written as tested, version-controlled code, so your team can add new checks without waiting for a product release."}
            </p>
          </div>
        </section>
        {" "}
        <section className="light" id="change" aria-labelledby="chgTitle">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="kicker">What your bank gains</span>
                <h2 id="chgTitle">Fewer false alarms. Faster cases. Hidden risk found.</h2>
              </div>
              {" "}
              <p>Start with the alerts you already have. Each step is proven on your own data before the next.</p>
            </div>
            {" "}
            <ol className="gains" id="phases">
              <li>
                <span className="g-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <use href="#i-check" />
                  </svg>
                </span>
                <h3>Fewer false alarms</h3>
                <p>Low-risk alerts are closed with clear reasons, so teams focus on what matters.</p>
                <p className="fig">
                  <b>Up to 60–90%</b>
                  {" fewer alerts to review"}
                  <sup>*</sup>
                </p>
              </li>
              {" "}
              <li>
                <span className="g-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <use href="#i-doc" />
                  </svg>
                </span>
                <h3>Faster investigations</h3>
                <p>Investigators start from a ready-made picture of who is involved, not a blank page.</p>
                <p className="fig">
                  <b>10%+</b>
                  {" of alerts worth working, from under 1%"}
                  <sup>*</sup>
                </p>
              </li>
              {" "}
              <li>
                <span className="g-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <use href="#i-hierarchy" />
                  </svg>
                </span>
                <h3>Hidden risk found</h3>
                <p>Links to risky parties through companies, owners and other accounts come to light.</p>
                <p className="fig">
                  <b>New cases</b>
                  {" that only show when records are linked"}
                </p>
              </li>
            </ol>
            {" "}
            <p className="note">
              <sup>*</sup>
              Projections, not customer results. A pilot confirms each figure on your data.
            </p>
          </div>
        </section>
        {" "}
        <section id="trust" aria-labelledby="trTitle">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="kicker">Built for regulated banks</span>
                <h2 id="trTitle">Explainable, secure and easy to start.</h2>
              </div>
              {" "}
              <p>Designed for the scrutiny of your regulator, auditors and security team.</p>
            </div>
            {" "}
            <ul className="trust">
              <li>
                <b>Works with your systems</b>
                <span>Keep your monitoring, case management and reporting.</span>
              </li>
              {" "}
              <li>
                <b>Every decision explained</b>
                <span>Each case shows why it was raised, traced to its source.</span>
              </li>
              {" "}
              <li>
                <b>Your data stays with you</b>
                <span>Runs inside your bank’s environment.</span>
              </li>
              {" "}
              <li>
                <b>Your team decides</b>
                <span>ContexQ ranks and explains. People make the call.</span>
              </li>
            </ul>
          </div>
        </section>
        {" "}
        <section className="cta" id="demo" aria-labelledby="ctaTitle">
          <div className="wrap cta-grid">
            <div>
              <h2 id="ctaTitle">See what ContexQ finds in your alerts.</h2>
              {" "}
              <p className="lead">A short session with your financial crime team to agree a pilot.</p>
            </div>
            {" "}
            <div className="cta-act">
              <Link prefetch={false} className="btn btn-primary cq-cta" href="/contact">Talk to the team</Link>
              {" "}
              <small>
                {"or mail us at "}
<a href={"mailto:inquiry@contexq.com?subject=AML%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20anti-money%20laundering%20%28AML%29.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>inquiry@contexq.com</a>
              </small>
            </div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
