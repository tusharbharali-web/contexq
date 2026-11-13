// Generated from public/html/contexq-ai-cleansing.html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-platform-analytics);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="platform-analytics" className="v-platform-analytics cq-html" lang="en" bodyClassName="cq-body">
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">Messy data in. Trusted information out.</h1>
              {" "}
              <p className="lede">
                Partial, inaccurate, duplicated or scattered across internal and external sources. ContexQ cleans it automatically, without mapping schemas by hand, and labels everything it changed.
              </p>
              {" "}
              <div className="ctas"><a className="btn btn-blue cq-cta" href="#mess">See what it fixes</a></div>
            </div>
            {" "}
            <div className="cx" id="cx">
              <div className="cx-stage"><svg id="cxSvg" aria-hidden="true" focusable="false" /></div>
              {" "}
              <div className="cx-ui">
                <p className="cx-cap" id="cxCap" aria-live="polite">Messy data arrives from everywhere.</p>
                <div className="cx-btns">
                  <button type="button" id="cxPause" aria-label="Pause animation">Pause</button>
                  <button type="button" id="cxReplay" aria-label="Replay animation">Replay</button>
                </div>
              </div>
              {" "}
              <p className="sr">
                Illustrative animation with a fictional customer. Fragments about John Smith arrive in different formats: a name in capitals, a misspelt name, the name in another script, an ambiguous date, an untidy address, a masked ID number, a missing mobile number and a duplicate row. They flow into the ContexQ globe, which runs a cleaning cycle: detect, standardise, repair and verify. A clean customer record comes out, field by field: name with spellings merged, a standardised date of birth and address, a mobile number filled from the bank’s own record, the ID kept masked, an income band marked as an estimate, and an occupation with conflicting values sent to a person for review.
              </p>
            </div>
          </div>
        </section>
        {" "}
        <section className="sec light" id="mess" aria-labelledby="mess-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="mess-title">Bad data rarely announces itself.</h2>
              {" "}
              <p className="lede">
                It hides in formats, spellings, gaps and copies, and quietly weakens every match, score and decision built on top of it.
              </p>
            </div>
            {" "}
            <div className="mess" id="messGrid">
              <article>
                <h3>Inconsistent formats</h3>
                <div className="ba">
                  <span className="b">01/08/81</span>
                  <span className="b">1981-08-01</span>
                  <i aria-hidden="true">→</i>
                  <span className="a">1 Aug 1981</span>
                </div>
              </article>
              {" "}
              <article>
                <h3>Misspellings and scripts</h3>
                <div className="ba">
                  <span className="b">J. Smth</span>
                  <span className="b">Джон Смит</span>
                  <i aria-hidden="true">→</i>
                  <span className="a">John Smith</span>
                </div>
              </article>
              {" "}
              <article>
                <h3>Missing details</h3>
                <div className="ba">
                  <span className="b">Mobile: -</span>
                  <i aria-hidden="true">→</i>
                  <span className="a">
                    +65 9123 4567
                    <small>from bank record</small>
                  </span>
                </div>
              </article>
              {" "}
              <article>
                <h3>Duplicates</h3>
                <div className="ba">
                  <span className="b">SMITH, JOHN</span>
                  <span className="b">John Smith</span>
                  <i aria-hidden="true">→</i>
                  <span className="a">The same customer, once</span>
                </div>
              </article>
              {" "}
              <article>
                <h3>Conflicting values</h3>
                <div className="ba">
                  <span className="b">Engineer</span>
                  <span className="b">Analyst</span>
                  <i aria-hidden="true">→</i>
                  <span className="a rev">Sent for review</span>
                </div>
              </article>
              {" "}
              <article>
                <h3>Free text</h3>
                <div className="ba">
                  <span className="b long">“…director J. Smith of the firm said…”</span>
                  <i aria-hidden="true">→</i>
                  <span className="a">Person and company named</span>
                </div>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="sec paper" id="how" aria-labelledby="how-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="how-title">A cleaning cycle that knows what it is looking for.</h2>
              {" "}
              <p className="lede">
                Load data as it is. ContexQ sniffs out what each field means, cleans it, and hands back information that is sorted and labelled.
              </p>
            </div>
            {" "}
            <ol className="cycle">
              <li>
                <span className="ci" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle cx="10" cy="10" r="6" />
                    <path d="M15 15l5 5" />
                  </svg>
                </span>
                <h3>Detect</h3>
                <p>
                  Recognises tables, fields, data types, languages and hierarchies automatically. No mapping project before you start.
                </p>
              </li>
              {" "}
              <li>
                <span className="ci" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h12M4 17h8" /></svg></span>
                <h3>Standardise</h3>
                <p>Puts names, addresses, dates, phone numbers, company names and scripts into consistent forms.</p>
              </li>
              {" "}
              <li>
                <span className="ci" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14 4l6 6-9 9H5v-6z" /></svg></span>
                <h3>Repair</h3>
                <p>Merges aliases and duplicates, fills gaps from other trusted sources, and models what is still missing.</p>
              </li>
              {" "}
              <li>
                <span className="ci" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12l4 4 10-10" /></svg></span>
                <h3>Verify</h3>
                <p>Checks the result, sends uncertain items to a person and keeps the source behind every field.</p>
              </li>
            </ol>
            {" "}
            <div className="guard">
              <b>Never guesses quietly</b>
              <span>Originals are kept</span>
              <span>Estimates are labelled</span>
              <span>Doubts go to a person</span>
            </div>
          </div>
        </section>
        {" "}
        <section className="sec dark" id="clues" aria-labelledby="clue-title">
          <div className="wrap">
            <div className="intro">
              <h2 id="clue-title">When a detail is missing, ContexQ looks for the clue.</h2>
              {" "}
              <p className="lede">
                Like an investigator, it uses what other records reveal, then shows exactly how it got there.
              </p>
            </div>
            {" "}
            <div className="clues" id="clueGrid">
              <article>
                <p className="cl">Clue</p>
                <p className="cq">The loan application has no date of birth.</p>
                <p className="cl">What ContexQ works out</p>
                <p className="cw">Once both are matched to the same John Smith, the bank’s customer record supplies it.</p>
                <span className="tag">Filled · source shown</span>
              </article>
              {" "}
              <article>
                <p className="cl">Clue</p>
                <p className="cq">Only part of an ID is visible: S••••567A.</p>
                <p className="cl">What ContexQ works out</p>
                <p className="cw">
                  It still counts as evidence when another record carries the same characters. Nothing is unmasked.
                </p>
                <span className="tag">Used, never revealed</span>
              </article>
              {" "}
              <article>
                <p className="cl">Clue</p>
                <p className="cq">A private company has not filed its accounts.</p>
                <p className="cl">What ContexQ works out</p>
                <p className="cw">Its financials are modelled from what is available, and clearly marked as such.</p>
                <span className="tag est">Estimate</span>
              </article>
              {" "}
              <article>
                <p className="cl">Clue</p>
                <p className="cq">A news report names a director in another script.</p>
                <p className="cl">What ContexQ works out</p>
                <p className="cw">The name is matched to the registry record for the same person.</p>
                <span className="tag">Linked · source shown</span>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="sec light" id="fit" aria-labelledby="fit-title">
          <div className="wrap split">
            <div className="intro">
              <h2 id="fit-title">No clean-up project before the clean-up.</h2>
              {" "}
              <ul className="checks">
                <li>
                  <b>No schema mapping up front</b>
                  <span>Different structures and field names are expected.</span>
                </li>
                {" "}
                <li>
                  <b>No golden key needed</b>
                  <span>Records connect even without a shared ID.</span>
                </li>
                {" "}
                <li>
                  <b>Tables and free text</b>
                  <span>From system exports to news articles.</span>
                </li>
                {" "}
                <li>
                  <b>Many languages and scripts</b>
                  <span>Names are read as they were written.</span>
                </li>
              </ul>
            </div>
            {" "}
            <div className="srcs">
              <div className="sg">
                <p>Your data</p>
                <span>Customer records</span>
                <span>Transactions</span>
                <span>KYC files</span>
                <span>Supplier records</span>
                <span>Products</span>
              </div>
              {" "}
              <div className="sg ext">
                <p>External data</p>
                <span>Company registries</span>
                <span>Sanctions lists</span>
                <span>News and media</span>
                <span>ESG data</span>
                <span>Trade records</span>
              </div>
              {" "}
              <div className="sink">
                <span className="sq">
                  Contex
                  <b>Q</b>
                </span>
                <p>Cleaned, standardised and labelled, ready for matching, scoring and decisions.</p>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="sec paper" id="impact" aria-labelledby="imp-title">
          <div className="wrap">
            <div className="intro"><h2 id="imp-title">Better data underneath. Better decisions on top.</h2></div>
            {" "}
            <div className="imp">
              <div>
                <h3>Use new data sooner</h3>
                <p>Bring in a new source without months of manual preparation.</p>
              </div>
              {" "}
              <div>
                <h3>Match with confidence</h3>
                <p>Fewer missed connections and fewer false ones when records are clean.</p>
              </div>
              {" "}
              <div>
                <h3>Decide on the full picture</h3>
                <p>Gaps are filled where evidence allows, and visible where it does not.</p>
              </div>
              {" "}
              <div>
                <h3>Explain every change</h3>
                <p>Each value keeps its source, so reviewers and auditors can follow it.</p>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="closing" id="book" aria-labelledby="close-title">
          <div className="wrap">
            <div>
              <h2 id="close-title">See what ContexQ makes of your data.</h2>
              {" "}
              <p>Bring a messy source and see it come back cleaned, standardised and labelled.</p>
            </div>
            {" "}
            <div className="cta-stack">
              <Link prefetch={false} className="cta cq-cta" href="/contact">Talk to the team</Link>
              {" "}
              <p className="cq-mail-line">
                {"or mail us at "}
                <a href={"mailto:inquiry@contexq.com?subject=AI%20data%20cleansing%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20clean%20and%20standardise%20our%20data.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>
                  inquiry@contexq.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
