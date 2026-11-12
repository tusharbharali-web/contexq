// Converted from public/html/contexq-ecommerce-v4.html, then restyled by hand to the
// telecom page's design (see the "Telecom design system" block in ./styles.css).
// Maintained by hand: the converter no longer regenerates this view.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-industry-goods);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="industry-goods" className="v-industry-goods cq-html" lang="en" bodyClassName="cq-body">
      <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
        <defs>
          <symbol id="person" viewBox="0 0 24 24">
            <circle cx="12" cy="7" r="3.2" />
            <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
          </symbol>
          <symbol id="bag" viewBox="0 0 24 24"><path d="M5 7h14l1 14H4L5 7zM8 8V6a4 4 0 0 1 8 0v2" /></symbol>
          <symbol id="store" viewBox="0 0 24 24">
            <path d="M3 9l2-6h14l2 6M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0M5 12v9h14v-9M10 21v-6h5v6" />
          </symbol>
          <symbol id="device" viewBox="0 0 24 24">
            <rect x="6" y="2" width="12" height="20" rx="2" />
            <path d="M10 18h4M10 5h4" />
          </symbol>
          <symbol id="wallet" viewBox="0 0 24 24">
            <path d="M4 6h15v15H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13v2M15 11h7v6h-7z" />
            <path d="M18 14h1" />
          </symbol>
          <symbol id="network" viewBox="0 0 24 24">
            <circle cx="5" cy="5" r="3" />
            <circle cx="19" cy="7" r="3" />
            <circle cx="10" cy="20" r="3" />
            <path d="M8 5l8 2M6 8l3 9M17 10l-6 7" />
          </symbol>
          <symbol id="focus" viewBox="0 0 24 24">
            <path d="M3 8V3h5M16 3h5v5M21 16v5h-5M8 21H3v-5" />
            <circle cx="12" cy="12" r="4" />
          </symbol>
          <symbol id="doc" viewBox="0 0 24 24"><path d="M5 2h9l5 5v15H5zM14 2v6h5M8 12h8M8 16h8" /></symbol>
        </defs>
      </svg>
      {" "}
      <a className="skip" href="#main">Skip to content</a>
      {" "}
      <main id="main">
        <section className="hero">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <h1>
                  See the network
                  <br />
                  <em>behind the orders.</em>
                </h1>
                <p>
                  Connect purchase, payment and delivery records to uncover coordinated activity, and give investigators the context behind individual transactions.
                </p>
                <a className="text-link" href="#help">
                  {"Explore where we can help "}
                  <span aria-hidden="true">↓</span>
                </a>
                <div className="hero-note">
                  A second screen behind your checkout fraud engine: it finds the networks a single transaction cannot show.
                </div>
              </div>
              {" "}
              <div className="motion cq-motion" id="commerce-motion" data-stage="0" role="region" aria-label="Animated example of a card-not-present reshipping ring found after checkout">
                <div className="cq-scene" id="cqScene"><svg id="cqSvg" aria-hidden="true" focusable="false" /></div>
                {" "}
                <div className="motion-caption">
                  <strong id="scene-title">Each order passes checkout.</strong>
                  <p id="scene-copy">
                    Your fraud engine approves every purchase on its own: different buyers, cards from different markets, plausible addresses.
                  </p>
                </div>
                {" "}
                <div className="stages" aria-label="Animation stages">
                  <button data-stage="0" className="active" aria-pressed="true">Orders approved</button>
                  <button data-stage="1" aria-pressed="false">ContexQ connects</button>
                  <button data-stage="2" aria-pressed="false">Signals align</button>
                  <button data-stage="3" aria-pressed="false">One case</button>
                </div>
                {" "}
                <div className="motion-controls">
                  <span id="motion-state">Playing automatically</span>
                  <button id="pause" type="button" aria-label="Pause animation">Ⅱ Pause</button>
                  <button id="replay" type="button" aria-label="Replay animation">↻ Replay</button>
                </div>
                {" "}
                <p className="sr-only">
                  Illustrative example of a card-not-present reshipping ring. Three online orders arrive from different buyers, paid with cards from different markets. Each order passes the existing checkout fraud check. ContexQ, working as a second screen, connects the delivery records: all three orders ship to the same reshipping hub. Two of the orders also share session and location patterns. Other orders with their own addresses stay unconnected. The connected orders, cards and hub are reviewed as one case. ContexQ does not block payments, and a shared hub is a lead to investigate, not proof.
                </p>
              </div>
            </div>
            <div className="hero-bottom">
              <strong>Built for the teams behind your platform</strong>
              <span>{"Fraud & risk"}</span>
              <span>Payments</span>
              <span>Marketplace integrity</span>
              <span>Investigations</span>
            </div>
          </div>
        </section>
        {" "}
        <section className="section" id="problem">
          <div className="wrap">
            <div className="intro reveal">
              <div>
                <h2>
                  Each event looks legitimate
                  <br />
                  on its own.
                </h2>
              </div>
              <p>
                Payment, merchant and delivery systems each review their own records. Coordinated activity is designed to stay below each system’s view: small amounts, separate accounts, different merchants.
              </p>
            </div>
            <div className="impact">
              <article className="reveal">
                <svg className="icon"><use href="#network" /></svg>
                <h3>Spread below thresholds</h3>
                <p>Many small purchases across many cards and stores never trigger a single alert.</p>
              </article>
              <article className="reveal">
                <svg className="icon"><use href="#doc" /></svg>
                <h3>Split across systems</h3>
                <p>The issuer, the merchant and the delivery partner each hold a fragment of the same operation.</p>
              </article>
              <article className="reveal">
                <svg className="icon"><use href="#person" /></svg>
                <h3>Hidden in routine activity</h3>
                <p>Test payments, refunds and new storefronts look like everyday business until they are seen together.</p>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="section pale" id="help">
          <div className="wrap">
            <div className="intro reveal">
              <div>
                <h2>
                  Patterns that only appear
                  <br />
                  when events are connected.
                </h2>
              </div>
              <p>
                Illustrative scenarios from ContexQ’s payment-fraud and mule-network work. Each shows what is examined and why it matters.
              </p>
            </div>
            <div className="cases" id="cases" />
          </div>
        </section>
        {" "}
        <section className="section dark" id="gain">
          <div className="wrap">
            <div className="intro reveal">
              <div>
                <h2>
                  Context to decide
                  <br />
                  what needs attention.
                </h2>
              </div>
              <p>
                ContexQ is an additional screening and investigation layer. It does not approve, decline or block transactions; your teams and systems make those decisions.
              </p>
            </div>
            <div className="gains">
              <article className="reveal">
                <h3>Connected evidence</h3>
                <p>Orders, payments, deliveries and merchants side by side, with the records behind every link.</p>
              </article>
              <article className="reveal">
                <h3>A clearer investigation scope</h3>
                <p>See which orders, cards, accounts and merchants belong to the same case, and which do not.</p>
              </article>
              <article className="reveal">
                <h3>A stronger basis for priorities</h3>
                <p>
                  Focus review on activity that is connected. A shared address or payment link is a reason to look closer, not proof on its own.
                </p>
              </article>
            </div>
            <p className="gain-note reveal">
              Losses spread across many small, separate events are hard to address one at a time. Seeing them as one case lets teams act on the pattern.
            </p>
          </div>
        </section>
        {" "}
        <section className="section" id="data">
          <div className="wrap">
            <div className="intro reveal">
              <div>
                <h2>
                  Start with your records.
                  <br />
                  Add context where it helps.
                </h2>
              </div>
              <p>
                ContexQ works alongside your checkout, payment and fraud systems, using the records you already hold and agreed external sources.
              </p>
            </div>
            <div className="sources">
              <article className="source-group reveal">
                <h3>From your existing systems</h3>
                <div className="chips">
                  <span>{"Orders & refunds"}</span>
                  <span>Payment records</span>
                  <span>{"Merchant & seller records"}</span>
                  <span>Delivery details</span>
                  <span>Customer accounts</span>
                  <span>{"Device & session data from your tools"}</span>
                </div>
                <p>Connected subject to the access and use permissions in place.</p>
              </article>
              <article className="source-group reveal">
                <h3>External context, where appropriate</h3>
                <div className="chips">
                  <span>Company registries</span>
                  <span>Ownership information</span>
                  <span>{"Sanctions & watchlists"}</span>
                  <span>{"News & public notices"}</span>
                </div>
                <p>Useful for seller and business reviews, selected to suit your market and requirements.</p>
              </article>
            </div>
            <div className="fit reveal">
              <strong>
                Your systems keep running.
                <br />
                Your teams get the connections.
              </strong>
              <p>
                Define the use case, agree the relevant records and review the connected findings with your team. Deployment and access are agreed with your technology and security teams.
              </p>
            </div>
          </div>
        </section>
        {" "}
        <section className="closing" id="contact">
          <div className="wrap">
            <div>
              <h2>
                What are your orders
                <br />
                not telling you?
              </h2>
              <p>Bring a use case and a sample of your data. We’ll explore the connections with you.</p>
            </div>
            <div className="cta-stack">
<Link prefetch={false} className="button" href="/contact">Talk to the team</Link>
<p className="cq-mail-line">
  {"or mail us at "}
  <a href={"mailto:inquiry@contexq.com?subject=E-commerce%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20e-commerce.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>inquiry@contexq.com</a>
</p>
</div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
