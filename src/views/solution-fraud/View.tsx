// Generated from public/html/contexq-mule-merged (1).html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-solution-fraud);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="solution-fraud" className="v-solution-fraud cq-html" lang="en" bodyClassName="cq-body">
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
        <symbol id="i-hierarchy" viewBox="0 0 24 24">
          <path d="M12 3.25a2 2 0 1 1 0 4a2 2 0 1 1 0-4ZM6 16.75a2 2 0 1 1 0 4a2 2 0 1 1 0-4ZM18 16.75a2 2 0 1 1 0 4a2 2 0 1 1 0-4ZM12 7.25V12M6 16.75V12h12v4.75" />
        </symbol>
        <symbol id="i-alert" viewBox="0 0 24 24"><path d="M12 3.75 21.25 19.5H2.75ZM12 9.5v4.75M12 16.9v.01" /></symbol>
        <symbol id="i-flow" viewBox="0 0 24 24"><path d="M4 7h11M12 4l3 3-3 3M20 17H9M12 14l-3 3 3 3" /></symbol>
        <symbol id="i-card" viewBox="0 0 24 24"><path d="M3.5 6h17v12h-17ZM3.5 9.75h17M6.75 14.5h4" /></symbol>
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
              <h1 id="heroTitle">Stop the fraud network, not just the account.</h1>
              {" "}
              <p className="lead">
                ContexQ adds context to your fraud detection. It connects accounts, devices, people and payments, so your team sees the whole mule ring behind a scam, shuts it down as one case, and catches the next new account on day one.
              </p>
              {" "}
              <div className="hero-actions"><a className="btn btn-ghost" href="#fit">See where ContexQ fits</a></div>
              {" "}
              <p className="hero-note">
                <span aria-hidden="true" />
                Works alongside your existing fraud engine.
              </p>
            </div>
            {" "}
            <div className="hero-stage" id="heroStage" role="img" aria-label="Animation showing fraud payments flowing and ContexQ connecting the underlying mule ring.">
              <div className="hero-foot">
                <div className="hero-key" aria-hidden="true">
                  <span>
                    <i className="k-pay" />
                    Money
                  </span>
                  {" "}
                  <span>
                    <i className="k-rec" />
                    Record into ContexQ
                  </span>
                  {" "}
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
                        <strong>Money splits</strong>
                        <small>Across new accounts</small>
                      </button>
                    </li>
                    {" "}
                    <li>
                      <button className="hstep" type="button">
                        <span className="bar" />
                        <strong>ContexQ connects</strong>
                        <small>Devices and sign-ups</small>
                      </button>
                    </li>
                    {" "}
                    <li>
                      <button className="hstep" type="button">
                        <span className="bar" />
                        <strong>Ring revealed</strong>
                        <small>One phone, one controller</small>
                      </button>
                    </li>
                    {" "}
                    <li>
                      <button className="hstep" type="button">
                        <span className="bar" />
                        <strong>Next account caught</strong>
                        <small>Flagged on day one</small>
                      </button>
                    </li>
                  </ol>
                  {" "}
                  <div className="hero-btns">
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
            </div>
          </div>
        </section>
        {" "}
        <section className="light" id="challenge" aria-labelledby="chTitle">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="kicker">Why it matters</span>
                <h2 id="chTitle">Scams are now a cost on your balance sheet.</h2>
              </div>
              {" "}
              <p>
                Fraudsters no longer break in. They persuade customers to pay, then move the money through mule accounts faster than account-by-account checks can react.
              </p>
            </div>
            {" "}
            <div className="stats">
              <div>
                <b>80%+</b>
                <span>of scam payments are made by the victims themselves, so nothing looks hacked</span>
              </div>
              {" "}
              <div>
                <b>48 hours</b>
                <span>is a typical life for a mule account before it is dropped</span>
              </div>
              {" "}
              <div>
                <b>{"Your P&L"}</b>
                <span>Regulators are moving scam reimbursement onto banks</span>
              </div>
            </div>
            {" "}
            <p className="note">From public industry and enforcement reporting.</p>
          </div>
        </section>
        {" "}
        <section id="fit" aria-labelledby="fitTitle">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="kicker">Where ContexQ fits</span>
                <h2 id="fitTitle">Keep your fraud engine. Add the missing context.</h2>
              </div>
              {" "}
              <p>
                ContexQ doesn’t replace anything. It adds what a single-account view can’t give: how accounts, people, phones and payments connect.
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
                {" "}
                <h3>Account opening</h3>
                {" "}
                <p className="today">
                  <b>Today</b>
                  A new account has no history to judge.
                </p>
                {" "}
                <p className="with">
                  <b>With ContexQ</b>
                  Checked against known mule accounts: shared phones, recruiters and sign-up details.
                </p>
              </li>
              {" "}
              <li>
                <span className="s-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <use href="#i-flow" />
                  </svg>
                </span>
                {" "}
                <h3>Payment monitoring</h3>
                {" "}
                <p className="today">
                  <b>Today</b>
                  Each payment is scored alone, and mules stay under the limits.
                </p>
                {" "}
                <p className="with">
                  <b>With ContexQ</b>
                  Each payment seen in context: where the money goes next, and how fast.
                </p>
              </li>
              {" "}
              <li>
                <span className="s-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <use href="#i-alert" />
                  </svg>
                </span>
                {" "}
                <h3>Alert review</h3>
                {" "}
                <p className="today">
                  <b>Today</b>
                  Each account alert is worked separately; most are false alarms.
                </p>
                {" "}
                <p className="with">
                  <b>With ContexQ</b>
                  Related alerts grouped into one case; false alarms cleared with reasons.
                </p>
              </li>
              {" "}
              <li>
                <span className="s-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <use href="#i-doc" />
                  </svg>
                </span>
                {" "}
                <h3>Investigation</h3>
                {" "}
                <p className="today">
                  <b>Today</b>
                  Analysts piece the links together by hand, case by case.
                </p>
                {" "}
                <p className="with">
                  <b>With ContexQ</b>
                  Cases arrive with the links mapped and the evidence attached.
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
                A mule account looks innocent on its own. It only looks suspicious alongside the others. ContexQ joins the data up once, and every check you run can use it.
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
                <path d="M0 30 H1200" stroke="url(#hwg)" strokeWidth="2" fill="none" />
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
                  {" "}
                  <h3>Bring the data together</h3>
                  {" "}
                  <p>Accounts, payments, devices and sign-up records from your fraud engine and other systems.</p>
                </li>
                {" "}
                <li>
                  <span className="hw-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <use href="#i-person" />
                    </svg>
                  </span>
                  {" "}
                  <h3>Recognise the real people</h3>
                  {" "}
                  <p>The same person behind different accounts, apps, phones and spellings.</p>
                </li>
                {" "}
                <li>
                  <span className="hw-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <use href="#i-hierarchy" />
                    </svg>
                  </span>
                  {" "}
                  <h3>Map the connections</h3>
                  {" "}
                  <p>Recruiters, shared phones, money flows and cash-out points linked into one view.</p>
                </li>
                {" "}
                <li>
                  <span className="hw-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <use href="#i-alert" />
                    </svg>
                  </span>
                  {" "}
                  <h3>Score and explain</h3>
                  {" "}
                  <p>Risk judged on everyone involved, with the reasons behind every alert.</p>
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
              <p>Six patterns, and what each looks like with and without ContexQ.</p>
            </div>
            {" "}
            <div className="exs" id="exs">
              <article className="exc">
                <span className="ctag">Mule accounts</span>
                {" "}
                <h3>Money split across many apps</h3>
                {" "}
                <div className="exfig" data-x="0" />
                {" "}
                <div className="rows">
                  <p className="r-wo">
                    <b>Without ContexQ</b>
                    Each app sees a few normal payments.
                  </p>
                  {" "}
                  <p className="r-wi">
                    <b>With ContexQ</b>
                    One chain across apps, emptied in minutes.
                  </p>
                </div>
              </article>
              {" "}
              <article className="exc">
                <span className="ctag">Mule accounts</span>
                {" "}
                <h3>One operator, dozens of accounts</h3>
                {" "}
                <div className="exfig" data-x="1" />
                {" "}
                <div className="rows">
                  <p className="r-wo">
                    <b>Without ContexQ</b>
                    Ordinary accounts, opened with real IDs.
                  </p>
                  {" "}
                  <p className="r-wi">
                    <b>With ContexQ</b>
                    One phone and SIM batch behind them all.
                  </p>
                </div>
              </article>
              {" "}
              <article className="exc">
                <span className="ctag">Mule accounts</span>
                {" "}
                <h3>Small shops turned mule hubs</h3>
                {" "}
                <div className="exfig" data-x="2" />
                {" "}
                <div className="rows">
                  <p className="r-wo">
                    <b>Without ContexQ</b>
                    Shops with genuine sales history.
                  </p>
                  {" "}
                  <p className="r-wi">
                    <b>With ContexQ</b>
                    The same wallets at night, paying one holding company.
                  </p>
                </div>
              </article>
              {" "}
              <article className="exc">
                <span className="ctag">Mule accounts</span>
                {" "}
                <h3>The same business, reborn</h3>
                {" "}
                <div className="exfig" data-x="3" />
                {" "}
                <div className="rows">
                  <p className="r-wo">
                    <b>Without ContexQ</b>
                    A new small business, nothing unusual.
                  </p>
                  {" "}
                  <p className="r-wi">
                    <b>With ContexQ</b>
                    Same formation agent and wallets as earlier fronts.
                  </p>
                </div>
              </article>
              {" "}
              <article className="exc">
                <span className="ctag pf">Payment fraud</span>
                {" "}
                <h3>Card testing</h3>
                {" "}
                <div className="exfig" data-x="4" />
                {" "}
                <div className="rows">
                  <p className="r-wo">
                    <b>Without ContexQ</b>
                    Tiny payments that look like everyday noise.
                  </p>
                  {" "}
                  <p className="r-wi">
                    <b>With ContexQ</b>
                    One test point and a batch of exposed cards.
                  </p>
                </div>
              </article>
              {" "}
              <article className="exc">
                <span className="ctag pf">Payment fraud</span>
                {" "}
                <h3>Refunds to other cards</h3>
                {" "}
                <div className="exfig" data-x="5" />
                {" "}
                <div className="rows">
                  <p className="r-wo">
                    <b>Without ContexQ</b>
                    Refunds that look like customer service.
                  </p>
                  {" "}
                  <p className="r-wi">
                    <b>With ContexQ</b>
                    Refunds to other cards, one shared back office.
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
                ContexQ doesn’t just raise an alert. It explains why, ranks it against your other work, and suggests what to do, inside the case manager your team already uses.
              </p>
              {" "}
              <ul className="act-pts">
                <li>
                  <b>Prioritised</b>
                  The cases most likely to cause loss come first.
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
            <div className="case" id="caseCard" aria-label="Example case: a mule ring with its reasons and suggested next steps">
              <div className="case-h">
                <span className="pri">High priority</span>
                <b>Mule ring · 5 linked accounts</b>
              </div>
              {" "}
              <div className="case-sec">
                <small>Why it was raised</small>
                {" "}
                <div className="why-chips">
                  <span>{"Same phone & SIM batch"}</span>
                  {" "}
                  <span>Matching timing</span>
                  {" "}
                  <span>Money out in minutes</span>
                  {" "}
                  <span>Linked to a known controller</span>
                </div>
              </div>
              {" "}
              <div className="case-sec">
                <small>Suggested next steps</small>
                {" "}
                <ol className="next">
                  <li>
                    <i />
                    Hold outgoing payments on the linked accounts while you review
                  </li>
                  {" "}
                  <li>
                    <i />
                    Add extra checks to the new account opened this week
                  </li>
                  {" "}
                  <li>
                    <i />
                    Prepare a suspicious-activity report with the evidence attached
                  </li>
                </ol>
              </div>
              {" "}
              <p className="case-f">Your analyst reviews and decides. Nothing happens automatically.</p>
            </div>
          </div>
        </section>
        {" "}
        <section id="ladder" aria-labelledby="ldTitle">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="kicker">Why ContexQ</span>
                <h2 id="ldTitle">Make every control you run stronger.</h2>
              </div>
              {" "}
              <p>
                ContexQ doesn’t replace your fraud controls. It feeds each one the connections behind an account, so every control catches more, earlier.
              </p>
            </div>
            {" "}
            <ol className="sees" id="ldr">
              <li>
                <svg viewBox="0 0 140 90" aria-hidden="true">
                  <g className="ctx">
                    <path d="M70 58 L28 26 M70 58 L112 26 M70 58 L30 84 M70 58 L110 84" />
                    <circle cx="28" cy="26" r="6" />
                    <circle cx="112" cy="26" r="6" />
                    <circle cx="30" cy="84" r="6" />
                    <circle cx="110" cy="84" r="6" />
                  </g>
                  <path d="M18 40 H122" className="lim" />
                  <circle cx="70" cy="58" r="12" className="acc" />
                </svg>
                {" "}
                <b>Rules and limits</b>
                {" "}
                <span className="s">+ who is behind the payment</span>
                {" "}
                <span className="m">
                  Payments judged together with the accounts they link to, so small transfers that add up stand out.
                </span>
              </li>
              {" "}
              <li>
                <svg viewBox="0 0 140 90" aria-hidden="true">
                  <g className="ctx">
                    <path d="M92 45 L40 20 M92 45 L40 70 M92 45 L28 45" />
                    <circle cx="40" cy="20" r="6" />
                    <circle cx="40" cy="70" r="6" />
                    <circle cx="28" cy="45" r="6" />
                  </g>
                  <circle cx="58" cy="45" r="12" className="acc" />
                  <rect x="84" y="30" width="18" height="30" rx="4" className="dev" />
                </svg>
                {" "}
                <b>Device checks</b>
                {" "}
                <span className="s">+ every account on that device</span>
                {" "}
                <span className="m">One phone behind many accounts is spotted, even with fresh SIMs.</span>
              </li>
              {" "}
              <li>
                <svg viewBox="0 0 140 90" aria-hidden="true">
                  <g className="ctx">
                    <path d="M50 45 L22 18 M50 45 L22 72" />
                    <circle cx="22" cy="18" r="6" />
                    <circle cx="22" cy="72" r="6" />
                  </g>
                  <circle cx="50" cy="45" r="12" className="acc" />
                  <rect x="78" y="24" width="38" height="44" rx="5" className="dev" />
                  <path d="M86 36 H108 M86 46 H108 M86 56 H100" className="ln" />
                </svg>
                {" "}
                <b>Lists of known mules</b>
                {" "}
                <span className="s">+ accounts linked to them</span>
                {" "}
                <span className="m">Accounts connected to a known mule are flagged too, not just the listed ones.</span>
              </li>
              {" "}
              <li>
                <svg viewBox="0 0 140 90" aria-hidden="true">
                  <g className="ctx">
                    <path d="M46 45 L18 18 M46 45 L18 72" />
                    <circle cx="18" cy="18" r="6" />
                    <circle cx="18" cy="72" r="6" />
                  </g>
                  <circle cx="46" cy="45" r="12" className="acc" />
                  <rect x="74" y="40" width="48" height="10" rx="5" className="bar0" />
                  <rect x="74" y="40" width="42" height="10" rx="5" className="bar1" />
                </svg>
                {" "}
                <b>AI alert scoring</b>
                {" "}
                <span className="s">+ connection-based inputs</span>
                {" "}
                <span className="m">Your models get richer signals to score with, so real risk stands out more clearly.</span>
              </li>
            </ol>
            {" "}
            <p className="sees-f">The result: one connected view that every control, team and decision draws on.</p>
          </div>
        </section>
        {" "}
        <section className="light" id="change" aria-labelledby="chgTitle">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="kicker">What your bank gains</span>
                <h2 id="chgTitle">Act sooner, with less effort.</h2>
              </div>
              {" "}
              <p>
                Start with the alerts your fraud engine already raises. Each step is proven on your own data before the next.
              </p>
            </div>
            {" "}
            <ol className="gains g4">
              <li>
                <span className="g-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <use href="#i-hierarchy" />
                  </svg>
                </span>
                {" "}
                <h3>Rings become cases</h3>
                {" "}
                <p>One case with every linked account mapped, instead of dozens of separate alerts across analysts.</p>
              </li>
              {" "}
              <li>
                <span className="g-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <use href="#i-card" />
                  </svg>
                </span>
                {" "}
                <h3>New accounts caught on day one</h3>
                {" "}
                <p>
                  An account that shares a phone, recruiter or pattern with a known ring is flagged before it builds any history.
                </p>
              </li>
              {" "}
              <li>
                <span className="g-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <use href="#i-person" />
                  </svg>
                </span>
                {" "}
                <h3>One view across scam types</h3>
                {" "}
                <p>The same controller behind different kinds of scams shows up as one case, not separate files.</p>
              </li>
              {" "}
              <li>
                <span className="g-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <use href="#i-doc" />
                  </svg>
                </span>
                {" "}
                <h3>Evidence ready to report</h3>
                {" "}
                <p>
                  Every case comes with the reasons and records behind it, ready for suspicious-activity reports and regulators.
                </p>
              </li>
            </ol>
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
                <b>Works with your fraud engine</b>
                <span>Keep your rules, models, case manager and workflow.</span>
              </li>
              {" "}
              <li>
                <b>Every alert explained</b>
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
              <h2 id="ctaTitle">Bring us one payment corridor or product.</h2>
              {" "}
              <p className="lead">
                We replay a year of your data and show you the mule rings it contains, including ones your rules missed.
              </p>
            </div>
            {" "}
            <div className="cta-act">
              <Link prefetch={false} className="btn btn-primary" href="/contact">Talk to the team</Link>
              {" "}
              <small>
                {"or mail us at "}
<a href={"mailto:inquiry@contexq.com?subject=Fraud%20detection%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20fraud%20detection.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>inquiry@contexq.com</a>
              </small>
            </div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
