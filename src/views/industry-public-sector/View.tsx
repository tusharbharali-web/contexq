// Converted from public/html/contexq-public-sector-v3.html, then restyled by hand to the
// telecom page's design (see the "Telecom design system" block in ./styles.css).
// Maintained by hand: the converter no longer regenerates this view.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-industry-public-sector);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="industry-public-sector" className="v-industry-public-sector cq-html" lang="en" bodyClassName="cq-body">
      <a className="skip" href="#main">Skip to content</a>
      {" "}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", width: "0", height: "0", overflow: "hidden" }} aria-hidden="true">
        <defs>
          <symbol id="building" viewBox="0 0 24 24"><path d="M3 21h18M5 21V8h14v13M3 8l9-5 9 5M9 11v7m6-7v7" /></symbol>
          <symbol id="link" viewBox="0 0 24 24">
            <path d="m9 15 6-6m-5-3 2-2a5 5 0 0 1 7 7l-2 2M7 11l-2 2a5 5 0 0 0 7 7l2-2" />
          </symbol>
          <symbol id="doc" viewBox="0 0 24 24"><path d="M5 3h9l5 5v13H5zM14 3v6h5M8 13h8m-8 4h6" /></symbol>
          <symbol id="focus" viewBox="0 0 24 24">
            <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />
            <circle cx="12" cy="12" r="4" />
          </symbol>
          <symbol id="shield" viewBox="0 0 24 24"><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6zM8 12l3 3 5-6" /></symbol>
          <symbol id="people" viewBox="0 0 24 24">
            <circle cx="9" cy="7" r="3" />
            <path d="M3 21v-4a6 6 0 0 1 12 0v4M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3" />
          </symbol>
        </defs>
      </svg>
      {" "}
      {" "}
      <main id="main">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="wrap hero refined-hero">
            <div className="hero-copy">
              <h1 id="hero-title">
                Connected information.
                <br />
                <span>Better public decisions.</span>
              </h1>
              <p>
                Bring relevant records and relationships together to protect public funds, focus investigations and strengthen programme oversight.
              </p>
              <a className="inline-link cq-cta" href="#missions">
                {"Explore where we can help"}
              </a>
              <div className="hero-detail">
                Across procurement, tax and customs,
                <br />
                public programmes and investigations.
              </div>
            </div>
            {" "}
            <div className="review-animation gov-anim" id="review-animation" data-step="0" role="region" aria-label="Animated example: four agencies each hold a record about the same supplier. ContexQ connects the records, reveals that the supplier's holding company is controlled by a person who also owns a rival bidder, and gives every agency the same connected view.">
              <div className="motion-steps" aria-label="Animation progress">
                <span data-step-label="0" className="active">
                  Separate records
                  <i />
                </span>
                <span data-step-label="1">
                  Connect
                  <i />
                </span>
                <span data-step-label="2">
                  Reveal ownership
                  <i />
                </span>
                <span data-step-label="3">
                  Shared view
                  <i />
                </span>
              </div>
              {" "}
              <div className="gov-stage"><svg id="govSvg" aria-hidden="true" focusable="false" /></div>
              {" "}
              <div className="review-finding">
                <svg className="icon" aria-hidden="true"><use href="#focus" /></svg>
                <div>
                  <strong id="finding-title">Each agency holds a piece.</strong>
                  <p id="finding-copy">
                    Procurement, tax and customs, grants and investigations each record the same organisation differently.
                  </p>
                </div>
              </div>
              <div className="animation-footer">
                <span id="animation-status">Playing automatically</span>
                <div>
                  <button id="review-pause" aria-pressed="false">Pause</button>
                  <button id="review-replay">Replay</button>
                  <button id="review-next" aria-label="Next animation stage">Next →</button>
                </div>
              </div>
              {" "}
              <p className="sr-only">
                Illustrative example with fictional names. Four agencies, procurement, tax and customs, grants and investigations, each hold a record about the same organisation under a different name. ContexQ connects them into one organisation, Supplier A, keeping each source in view. Its holding company is controlled by a person who also owns Supplier B, a rival bidder. Every agency then sees the same connected picture. The procurement team reviews whether the shared ownership was disclosed; decisions remain with each agency.
              </p>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="section opportunity white" id="opportunity">
          <div className="wrap">
            <div className="intro">
              <div>
                <h2>
                  Important decisions.
                  <br />
                  Incomplete connections.
                </h2>
              </div>
              <p>
                An agency may hold the information it needs across several systems. Inconsistent identities and disconnected records make it harder to see which relationships matter.
              </p>
            </div>
            <div className="outcomes">
              <article>
                <svg className="icon" aria-hidden="true"><use href="#doc" /></svg>
                <h3>Less time reconciling records</h3>
                <p>Help teams recognise the same person or organisation across different sources.</p>
              </article>
              <article>
                <svg className="icon" aria-hidden="true"><use href="#link" /></svg>
                <h3>More context around a review</h3>
                <p>Bring relevant ownership, directorship and payment relationships into view.</p>
              </article>
              <article>
                <svg className="icon" aria-hidden="true"><use href="#focus" /></svg>
                <h3>A clearer next step</h3>
                <p>Focus specialist attention on the questions and supporting records that need examination.</p>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="section mission-section" id="missions">
          <div className="wrap">
            <div className="intro">
              <div>
                <h2>
                  Support the decisions
                  <br />
                  behind your agency’s mission.
                </h2>
              </div>
              <p>Explore a use case to see the information it brings together and the outcome it can support.</p>
            </div>
            <div id="public-accordion" className="public-accordion" />
          </div>
        </section>
        {" "}
        <section className="section context evidence-section" id="context">
          <div className="wrap context-grid">
            <div>
              <h2>
                Your records.
                <br />
                A wider perspective.
              </h2>
              <p className="lead">
                Connect information your agency holds with relevant external sources. See how people, organisations and events relate to the decision under review.
              </p>
              <p className="context-emphasis">Keep the source behind the connection in view.</p>
            </div>
            <div className="data-sources">
              <div className="data-group">
                <div className="data-group-title">
                  <svg className="icon" aria-hidden="true"><use href="#doc" /></svg>
                  <h3>Agency records</h3>
                </div>
                <div className="data-tags">
                  <span>{"Contracts & payments"}</span>
                  <span>{"Tax & customs records"}</span>
                  <span>{"Applications & recipients"}</span>
                  <span>Case records</span>
                </div>
              </div>
              <div className="source-join">
                <svg className="icon" aria-hidden="true"><use href="#link" /></svg>
              </div>
              <div className="data-group">
                <div className="data-group-title">
                  <svg className="icon" aria-hidden="true"><use href="#building" /></svg>
                  <h3>Relevant external information</h3>
                </div>
                <div className="data-tags">
                  <span>Company registries</span>
                  <span>{"Ownership & directorships"}</span>
                  <span>{"Sanctions & watchlists"}</span>
                  <span>{"News & public notices"}</span>
                </div>
              </div>
              <p className="source-scope">Sources are selected for the agency’s purpose and authorised access.</p>
            </div>
          </div>
        </section>
        {" "}
        <section className="section approach" id="approach">
          <div className="wrap">
            <div className="intro">
              <div>
                <h2>
                  Build around the question.
                  <br />
                  Work with what you have.
                </h2>
              </div>
              <p>
                ContexQ is designed to complement existing systems. Begin with a defined use case, the relevant records and the decision your team needs to support.
              </p>
            </div>
            <div className="approach-list">
              <article className="approach-item">
                <svg className="icon" aria-hidden="true"><use href="#focus" /></svg>
                <h3>Define the review</h3>
                <p>Agree the business question, available information and evidence needed to assess the result.</p>
              </article>
              <article className="approach-item">
                <svg className="icon" aria-hidden="true"><use href="#shield" /></svg>
                <h3>Set the access requirements</h3>
                <p>Determine the permitted sources and deployment requirements with your data and security teams.</p>
              </article>
              <article className="approach-item">
                <svg className="icon" aria-hidden="true"><use href="#people" /></svg>
                <h3>Support professional judgment</h3>
                <p>Use connected context to inform further enquiries. Decisions remain with the responsible agency.</p>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="closing" id="contact">
          <div className="wrap">
            <div>
              <h2>
                What could a clearer picture
                <br />
                help your agency achieve?
              </h2>
              <p>Explore a public-sector use case with the ContexQ team.</p>
            </div>
            <div className="cta-stack">
<Link prefetch={false} className="button cq-cta" href="/contact">Talk to the team</Link>
<p className="cq-mail-line">
  {"or mail us at "}
  <a href={"mailto:inquiry@contexq.com?subject=Public%20sector%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20the%20public%20sector.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>inquiry@contexq.com</a>
</p>
</div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
