// Generated from public/html/contexq-kyc (2).html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-solution-kyc);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import type { CSSProperties } from "react";
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="solution-kyc" className="v-solution-kyc cq-html" lang="en" bodyClassName="cq-body">
      <main id="main">
        <span id="top" />
        {" "}
        <section className="hero" aria-labelledby="hero-title">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <h1 id="hero-title">
                  Less KYC research.
                  <br />
                  <span className="accent">Clearer risk decisions.</span>
                </h1>
                {" "}
                <p className="hero-lead">
                  Keep every customer file current, not just at the next scheduled review. ContexQ shows who really sits behind each customer and tells your team which changes need attention, so reviews take less effort and risk is seen sooner.
                </p>
                {" "}
                <div className="btn-row"><a className="btn btn-primary cq-cta" href="#scenarios">See how it works</a></div>
                {" "}
                <p className="hero-trust">Built for corporate KYC. Works with the systems and policies you already have.</p>
              </div>
              {" "}
              <div className="hero-demo">
                <div className="hero-visual" id="heroVisualStage" role="img" aria-label="Animated example: a corporate account application is combined with bank records and company-registry data into one customer.">
                  <div className="transformation-stage" id="transformationStage" aria-hidden="true">
                    <div className="paper-stage">
                      <div className="kyc-paper" id="kycPaper">
                        <div className="kyc-header">
                          <div>
                            <div className="kyc-bank-title">
                              <span className="kyc-globe">B</span>
                              CORPORATE ACCOUNT APPLICATION
                            </div>
                            {" "}
                            <div className="kyc-sub">ILLUSTRATIVE BANK · KYC / KYB INTAKE</div>
                          </div>
                          {" "}
                          <div className="kyc-seal">
                            <i>
                              COMPANY
                              <br />
                              SEAL
                            </i>
                          </div>
                        </div>
                        {" "}
                        <div className="kyc-sec-bar">Section A: Company details</div>
                        {" "}
                        <div className="kyc-row" data-frag="fragEntity">
                          <span>Registered name:</span>
                          <span className="kyc-hand" style={{ flex: "1" }}>APPLICANT COMPANY</span>
                        </div>
                        {" "}
                        <div className="kyc-row" data-frag="fragReg">
                          <span>Registration no.:</span>
                          <span className="kyc-boxes">
                            <i>2</i>
                            <i>0</i>
                            <i>1</i>
                            <i>9</i>
                            <i>0</i>
                            <i>4</i>
                            <i>4</i>
                            <i>1</i>
                            <i>7</i>
                            <i>K</i>
                          </span>
                          <span>
                            {"Incorporated: "}
                            <strong className="kyc-hand">SINGAPORE</strong>
                          </span>
                        </div>
                        {" "}
                        <div className="kyc-row" data-frag="fragAddress">
                          <span>Registered address:</span>
                          <span className="kyc-hand" style={{ flex: "1" }}>REGISTERED OFFICE, SINGAPORE</span>
                        </div>
                        {" "}
                        <div className="kyc-row">
                          <span>
                            {"Nature of business: "}
                            <span className="kyc-chk">
                              <b>✕</b>
                              {" Wholesale trade"}
                            </span>
                            {" ("}
                            <strong className="kyc-hand">{"METALS & ALLOYS"}</strong>
                            )
                          </span>
                        </div>
                        {" "}
                        <div className="kyc-sec-bar">{"Section B: Directors & authorised signatories"}</div>
                        {" "}
                        <div className="kyc-row" data-frag="fragDirector">
                          <span>Director 1:</span>
                          <span className="kyc-hand" style={{ flex: "1" }}>DIRECTOR A</span>
                          <span>
                            {"Nationality: "}
                            <strong className="kyc-hand">SINGAPOREAN</strong>
                          </span>
                        </div>
                        {" "}
                        <div className="kyc-row">
                          <span>
                            {"Authorised signatory: "}
                            <span className="kyc-chk">
                              <b>✕</b>
                              {" Same as Director 1"}
                            </span>
                          </span>
                        </div>
                        {" "}
                        <div className="kyc-sec-bar">Section C: Shareholders holding 25% or more</div>
                        {" "}
                        <div className="kyc-row" data-frag="fragParent">
                          <span>Shareholder:</span>
                          <span className="kyc-hand" style={{ flex: "1" }}>OFFSHORE PARENT</span>
                          <span>
                            {"%: "}
                            <strong className="kyc-hand">100</strong>
                          </span>
                          <span>
                            {"Jurisdiction: "}
                            <strong className="kyc-hand">BVI</strong>
                          </span>
                        </div>
                        {" "}
                        <div className="kyc-row">
                          <span>
                            {"Shareholder type: "}
                            <span className="kyc-chk">
                              <b>✕</b>
                              {" Corporate"}
                            </span>
                            {" "}
                            <span className="kyc-chk">
                              <b />
                              {" Individual"}
                            </span>
                          </span>
                        </div>
                        {" "}
                        <div className="kyc-sec-bar">Section D: Declaration</div>
                        {" "}
                        <div className="kyc-footer">
                          <div>
                            <div style={{ fontSize: "8px", color: "#444" }}>
                              {"Signed for the applicant: "}
                              <span className="kyc-sig">Director A</span>
                            </div>
                            {" "}
                            <div style={{ fontSize: "8px", color: "#444", marginTop: "4px" }}>
                              {"Date: "}
                              <strong className="kyc-hand">14/03/2025</strong>
                            </div>
                          </div>
                          {" "}
                          <div className="kyc-stamp">RECEIVED</div>
                        </div>
                      </div>
                    </div>
                    {" "}
                    <div className="fragments-stage">
                      <span className="col-chip app" id="chipApp">From the application</span>
                      {" "}
                      <span className="col-chip ext" id="chipExt">From other sources</span>
                      {" "}
                      <div className="frag-shard" id="fragEntity">
                        <small>Application · registered name</small>
                        <strong>APPLICANT COMPANY</strong>
                      </div>
                      {" "}
                      <div className="frag-shard" id="fragReg">
                        <small>Application · registration no.</small>
                        <strong>201904417K · SINGAPORE</strong>
                      </div>
                      {" "}
                      <div className="frag-shard" id="fragAddress">
                        <small>Application · registered address</small>
                        <strong>REGISTERED OFFICE</strong>
                      </div>
                      {" "}
                      <div className="frag-shard" id="fragDirector">
                        <small>Application · declared director</small>
                        <strong>DIRECTOR A</strong>
                      </div>
                      {" "}
                      <div className="frag-shard" id="fragParent">
                        <small>Application · declared shareholder</small>
                        <strong>OFFSHORE PARENT · 100% · BVI</strong>
                      </div>
                      {" "}
                      <div className="frag-shard src-ext" id="fragBank">
                        <small>Bank records · 2 existing records</small>
                        <strong>Same company, two spellings</strong>
                      </div>
                      {" "}
                      <div className="frag-shard src-ext" id="fragRegCheck">
                        <small>Company registry · applicant</small>
                        <strong>Director A · parent 100%</strong>
                      </div>
                      {" "}
                      <div className="frag-shard src-ext" id="fragRegParent">
                        <small>Company registry · parent</small>
                        <strong>Director B</strong>
                      </div>
                    </div>
                    {" "}
                    <div className="graph-stage" id="graphStage">
                      <svg className="graph-svg" viewBox="-400 -235 800 470">
                        <circle className="orbit-guide" cx="0" cy="0" r="140" />
                        <circle className="orbit-guide" cx="0" cy="0" r="262" />
                        <path className="graph-edge" id="e1" d="M 0 0 L -285 -150" />
                        <path className="graph-edge" id="e2" d="M 0 0 L 285 -150" />
                        <path className="graph-edge" id="e3" d="M 285 -150 L 285 150" />
                        <path className="graph-edge risk-line" id="e4" d="M 285 150 L -285 150" />
                        <g className="edge-badge" id="b1" transform="translate(-150,-80)">
                          <rect x="-60" y="-11" width="120" height="22" rx="4" />
                          <text x="0" y="1">DIRECTOR · CONFIRMED IN REGISTRY</text>
                        </g>
                        <g className="edge-badge" id="b2" transform="translate(150,-80)">
                          <rect x="-60" y="-11" width="120" height="22" rx="4" />
                          <text x="0" y="1">100% PARENT · DECLARED AND CONFIRMED</text>
                        </g>
                        <g className="edge-badge" id="b3" transform="translate(285,0)">
                          <rect x="-60" y="-11" width="120" height="22" rx="4" />
                          <text x="0" y="1">DIRECTOR · REGISTRY</text>
                        </g>
                        <g className="edge-badge risk" id="b4" transform="translate(0,150)">
                          <rect x="-60" y="-11" width="120" height="22" rx="4" />
                          <text x="0" y="1">POSSIBLE MATCH · NOT CONFIRMED</text>
                        </g>
                      </svg>
                      {" "}
                      <div className="graph-node-card center-customer" id="nodeCustomer">
                        <div className="node-kicker">One customer</div>
                        {" "}
                        <div className="node-title">Applicant company</div>
                        {" "}
                        <div className="node-meta">Application + 2 existing bank records</div>
                        {" "}
                        <div className="node-meta" style={{ color: "#9fd5bf" }}>Same registration number · address tidied</div>
                      </div>
                      {" "}
                      <div className="graph-node-card" id="nodeDirector">
                        <div className="node-kicker">Director</div>
                        {" "}
                        <div className="node-title">Director A</div>
                        {" "}
                        <div className="node-meta">Declared · confirmed in registry</div>
                      </div>
                      {" "}
                      <div className="graph-node-card" id="nodeParent">
                        <div className="node-kicker">Offshore parent · 100%</div>
                        {" "}
                        <div className="node-title">Offshore parent</div>
                        {" "}
                        <div className="node-meta">Declared · confirmed in registry</div>
                      </div>
                      {" "}
                      <div className="graph-node-card ext-node" id="nodeParentDir">
                        <span className="change-pill" id="changePill">Registry update · 05 Oct 2026</span>
                        {" "}
                        <span className="pulse-ring" id="pulseRing" />
                        {" "}
                        <div className="node-kicker">Parent’s director · registry</div>
                        {" "}
                        <div className="node-title swap">
                          <span className="old" id="dirOld">Director B</span>
                          <span className="new" id="dirNew">Director C</span>
                        </div>
                        {" "}
                        <div className="node-meta swap">
                          <span className="old-meta" id="metaOld">Director since 2019</span>
                          <span className="new" id="metaNew">Appointed 02 Oct 2026</span>
                        </div>
                      </div>
                      {" "}
                      <div className="graph-node-card risk-node" id="nodeExited">
                        <div className="node-kicker">Former customer · bank records</div>
                        {" "}
                        <div className="node-title">Exited company</div>
                        {" "}
                        <div className="node-meta">Left in 2021 · its director matches Director C</div>
                      </div>
                      {" "}
                      <div className="review-chip" id="reviewChip">
                        <b>Review suggested</b>
                        {" · an analyst confirms the match"}
                      </div>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="hero-story">
                  <div className="story-controls">
                    <div className="hero-steps" role="group" aria-label="Jump to a step in the example">
                      <button className="hud-step active" data-step="0" type="button">
                        <span className="hud-dot" />
                        <span className="lbl">Application</span>
                      </button>
                      {" "}
                      <button className="hud-step" data-step="1" type="button">
                        <span className="hud-dot" />
                        <span className="lbl">Evidence</span>
                      </button>
                      {" "}
                      <button className="hud-step" data-step="2" type="button">
                        <span className="hud-dot" />
                        <span className="lbl">Match</span>
                      </button>
                      {" "}
                      <button className="hud-step" data-step="3" type="button">
                        <span className="hud-dot" />
                        <span className="lbl">Owners</span>
                      </button>
                      {" "}
                      <button className="hud-step" data-step="4" type="button">
                        <span className="hud-dot" />
                        <span className="lbl">Change</span>
                      </button>
                      {" "}
                      <button className="hud-step" data-step="5" type="button">
                        <span className="hud-dot" />
                        <span className="lbl">Review</span>
                      </button>
                    </div>
                    {" "}
                    <button className="play-toggle" id="playToggle" type="button" aria-label="Pause animation" hidden={true}>
                      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                        <g id="icPause">
                          <rect x="2.5" y="2" width="3" height="10" fill="currentColor" />
                          <rect x="8.5" y="2" width="3" height="10" fill="currentColor" />
                        </g>
                        <path id="icPlay" d="M3 2l9 5-9 5z" fill="currentColor" style={{ display: "none" }} />
                      </svg>
                    </button>
                  </div>
                  {" "}
                  <p className="hero-caption" id="heroCaption" />
                  {" "}
                  <ul className="hero-legend" aria-label="Legend">
                    <li>
                      <span className="lg lg-app" />
                      From the customer’s application
                    </li>
                    {" "}
                    <li>
                      <span className="lg lg-ext" />
                      From bank records or outside sources
                    </li>
                    {" "}
                    <li>
                      <span className="lg lg-pot" />
                      Possible match, not confirmed
                    </li>
                  </ul>
                  {" "}
                  <details className="hero-text">
                    <summary>Read the example as text</summary>
                    {" "}
                    <ol id="heroTextList" />
                  </details>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="section paper" id="help" aria-labelledby="help-title">
          <div className="container">
            <div className="section-head">
              <h2 id="help-title">Turn KYC from a cost into an advantage.</h2>
              {" "}
              <p className="lead">
                Large banks spend heavily to keep customer files current, yet the picture is often out of date by the time a review is signed off. ContexQ changes where that effort goes.
              </p>
            </div>
            {" "}
            <div className="kstats">
              <div>
                <b>6+ months</b>
                <span>to refresh a single large corporate customer</span>
              </div>
              {" "}
              <div>
                <b>3-5 years</b>
                <span>between scheduled reviews, while risk keeps moving</span>
              </div>
              {" "}
              <div>
                <b>54%</b>
                <span>of KYC professionals want broader data on people and companies</span>
              </div>
            </div>
            {" "}
            <p className="knote2">Industry figures cited in ContexQ research.</p>
            {" "}
            <div className="kout">
              <article>
                <h3>Less effort per review</h3>
                <p>
                  Customer records, owners and outside sources arrive together, so analysts spend their time judging rather than searching.
                </p>
              </article>
              {" "}
              <article>
                <h3>Reviews when risk changes</h3>
                <p>
                  Reviews are triggered by real events instead of the calendar, so customers aren’t asked for the same documents again for nothing.
                </p>
              </article>
              {" "}
              <article>
                <h3>Risk seen sooner</h3>
                <p>Changes at owners, directors and parent companies are picked up when they happen, not years later.</p>
              </article>
              {" "}
              <article>
                <h3>New business from the same data</h3>
                <p>
                  The group companies, owners and partners found for KYC also show where your bank could grow the relationship.
                </p>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="section" id="risk" aria-labelledby="risk-title">
          <div className="container editorial-split">
            <div className="section-head">
              <h2 id="risk-title">See the risk around the customer, not just the customer.</h2>
              {" "}
              <p className="lead">
                A customer’s own profile rarely tells the whole story. Add ownership, trading partners and behaviour to your existing rating model, so reviews reflect the risks around the customer too.
              </p>
              {" "}
              <p className="compact-note">
                Your rating model and policies stay. ContexQ adds what sits around the customer, and shows the evidence behind every change in rating.
              </p>
            </div>
            {" "}
            <dl className="risk-perspectives">
              <div>
                <dt>
                  <span className="risk-num">1</span>
                  The customer
                </dt>
                <dd>Profile and screening results, with related parties and directors added.</dd>
              </div>
              {" "}
              <div>
                <dt>
                  <span className="risk-num">2</span>
                  The group behind them
                </dt>
                <dd>Layered or looping ownership, missing shareholder details and links to former customers.</dd>
              </div>
              {" "}
              <div>
                <dt>
                  <span className="risk-num">3</span>
                  Their partners
                </dt>
                <dd>
                  Who the customer deals with, including sanctions, politically exposed person (PEP) and negative-news signals.
                </dd>
              </div>
              {" "}
              <div>
                <dt>
                  <span className="risk-num">4</span>
                  Their behaviour
                </dt>
                <dd>
                  Activity compared with what you expected at onboarding, including shifting payment patterns and money moving within a corporate group.
                </dd>
              </div>
            </dl>
          </div>
        </section>
        {" "}
        <section className="section dark" id="scenarios" aria-labelledby="scn-title">
          <div className="container">
            <div className="section-head">
              <h2 id="scn-title">Connections that change the decision.</h2>
              {" "}
              <p className="lead">Four situations ContexQ brings to light, and the next step your team can take.</p>
            </div>
            {" "}
            <div className="kcards" id="kcards">
              <article>
                <span className="ktag2">Returning customer</span>
                {" "}
                <h3>A new applicant’s director once ran a company you exited.</h3>
                {" "}
                <svg viewBox="0 0 320 110" aria-hidden="true">
                  <path d="M78 55 H118" className="kl" />
                  <path d="M202 55 H242" className="kr" />
                  <rect x="6" y="36" width="72" height="38" rx="8" className="kn" />
                  <rect x="118" y="36" width="84" height="38" rx="8" className="kn" />
                  <rect x="242" y="36" width="72" height="38" rx="8" className="kx" />
                  <text x="42" y="59">Applicant</text>
                  <text x="160" y="59">Director</text>
                  <text x="278" y="59">Exited client</text>
                  <text x="222" y="28" className="tr">possible match</text>
                </svg>
                {" "}
                <div className="knext">
                  <small>Next step</small>
                  Pause onboarding until the match is confirmed and the exit reason reviewed.
                </div>
              </article>
              {" "}
              <article>
                <span className="ktag2">Ongoing monitoring</span>
                {" "}
                <h3>A new director at the customer’s offshore parent may be a politically exposed person.</h3>
                {" "}
                <svg viewBox="0 0 320 110" aria-hidden="true">
                  <path d="M78 55 H118" className="kl" />
                  <path d="M202 55 H242" className="kr" />
                  <rect x="6" y="36" width="72" height="38" rx="8" className="kn" />
                  <rect x="118" y="36" width="84" height="38" rx="8" className="kn" />
                  <rect x="242" y="36" width="72" height="38" rx="8" className="kx" />
                  <text x="42" y="59">Customer</text>
                  <text x="160" y="59">Parent</text>
                  <text x="278" y="59">New director</text>
                  <text x="222" y="28" className="tr">appointed this week</text>
                  <text x="278" y="92" className="tr">possible PEP</text>
                </svg>
                {" "}
                <div className="knext">
                  <small>Next step</small>
                  Bring the review forward and confirm the match before re-rating.
                </div>
              </article>
              {" "}
              <article>
                <span className="ktag2">Deeper review</span>
                {" "}
                <h3>Ownership loops back to the customer, and some owners are unknown.</h3>
                {" "}
                <svg viewBox="0 0 320 110" aria-hidden="true">
                  <path d="M78 40 H118" className="kl" />
                  <path d="M202 40 H242" className="kl" />
                  <path d="M278 60 V 90 H 42 V 60" className="kr" />
                  <rect x="6" y="22" width="72" height="38" rx="8" className="kn" />
                  <rect x="118" y="22" width="84" height="38" rx="8" className="kn" />
                  <rect x="242" y="22" width="72" height="38" rx="8" className="kx" />
                  <text x="42" y="45">Customer</text>
                  <text x="160" y="45">Holding</text>
                  <text x="278" y="45">Owner ?</text>
                  <text x="160" y="104" className="tr">owns the customer again</text>
                </svg>
                {" "}
                <div className="knext">
                  <small>Next step</small>
                  Ask the customer for the missing owners before the review is closed.
                </div>
              </article>
              {" "}
              <article className="grow">
                <span className="ktag2 g">Growth</span>
                {" "}
                <h3>Two companies in a customer’s group bank elsewhere.</h3>
                {" "}
                <svg viewBox="0 0 320 110" aria-hidden="true">
                  <path d="M118 55 H78" className="kl" />
                  <path d="M202 55 L 242 30" className="kg" />
                  <path d="M202 55 L 242 82" className="kg" />
                  <rect x="6" y="36" width="72" height="38" rx="8" className="kn" />
                  <rect x="118" y="36" width="84" height="38" rx="8" className="kn" />
                  <rect x="242" y="12" width="72" height="34" rx="8" className="kgn" />
                  <rect x="242" y="66" width="72" height="34" rx="8" className="kgn" />
                  <text x="42" y="59">Customer</text>
                  <text x="160" y="59">Parent</text>
                  <text x="278" y="33">Sister co.</text>
                  <text x="278" y="87">Sister co.</text>
                </svg>
                {" "}
                <div className="knext">
                  <small>Next step</small>
                  Share the group view with the relationship manager for an introduction.
                </div>
              </article>
            </div>
            {" "}
            <p className="kcap">Possible matches are always confirmed by your team before any decision.</p>
          </div>
        </section>
        {" "}
        <section className="section" id="perpetual" aria-labelledby="pk-title">
          <div className="container">
            <div className="section-head">
              <h2 id="pk-title">Review the changes that matter, when they happen.</h2>
              {" "}
              <p className="lead">
                New directors, ownership changes and negative news can change the picture between scheduled reviews. ContexQ checks each update for relevance, so your team follows up on what matters and always starts from current information.
              </p>
            </div>
            {" "}
            <ol className="kyc-steps">
              <li>
                <h3>Connect the change</h3>
                <p>Match each update to the right customer and the companies around them.</p>
              </li>
              {" "}
              <li>
                <h3>Judge its relevance</h3>
                <p>Check whether it affects risk or meets a review rule you have set.</p>
              </li>
              {" "}
              <li>
                <h3>Hand it to your team</h3>
                <p>Send the alert and its supporting context to your existing workflow.</p>
              </li>
            </ol>
            {" "}
            <div className="change-example">
              <p>
                <strong>For example:</strong>
                {" a change in address formatting simply updates the record. A new director at the parent who may be a PEP goes to an analyst to confirm."}
              </p>
            </div>
            {" "}
            <p className="compact-note">
              Updates depend on the sources available, and they work alongside the periodic reviews you are required to run.
            </p>
          </div>
        </section>
        {" "}
        <section className="section" id="integration" aria-labelledby="int-title">
          <div className="container">
            <div className="section-head">
              <h2 id="int-title">Works with the onboarding system you already use.</h2>
              {" "}
              <p className="lead">
                Keep your client onboarding and review system (CLM) and your workflow. ContexQ plugs into it, adding the connected customer picture and review alerts, so you can start small and grow.
              </p>
            </div>
            {" "}
            <div className="flow3">
              <div className="fbox">
                <h3>Your data</h3>
                <p>Customer, account and transaction records, plus registries, watchlists and negative news.</p>
              </div>
              {" "}
              <div className="arrowc" aria-hidden="true">→</div>
              {" "}
              <div className="fbox mid">
                <h3>ContexQ</h3>
                <p>Match records. Connect relationships. Assess risk.</p>
              </div>
              {" "}
              <div className="arrowc" aria-hidden="true">→</div>
              {" "}
              <div className="fbox">
                <h3>Your workflow</h3>
                <p>Customer records, risk context and review alerts flow straight into it.</p>
              </div>
            </div>
            {" "}
            <p className="compact-note">
              Match customer information once and reuse it across KYC reviews. The same connected view can support AML, fraud and credit teams, within the access permissions you set.
            </p>
          </div>
        </section>
        {" "}
        <section className="section dark" id="next-step" aria-labelledby="why-title">
          <div className="container">
            <div className="why-head">
              <div><h2 id="why-title">A clean profile can sit inside a risky network.</h2></div>
              {" "}
              <p className="lead">
                Look at the customer alone and the file can read clean. Add the owners, directors, partners and payments around them and the same customer may need a second look.
              </p>
            </div>
            {" "}
            <div className="graph" id="graph" data-mode="solo">
              <div className="g-toggle" role="group" aria-label="Choose what the review can see">
                <button type="button" data-mode="solo" aria-pressed="true">Customer profile only</button>
                {" "}
                <button type="button" data-mode="conn" aria-pressed="false">With connected context</button>
              </div>
              {" "}
              <div className="g-stage">
                <svg className="g-svg g-d" viewBox="0 0 900 500" role="img" aria-label="Example network around one customer: ownership, partners and behaviour signals that a profile-only check would not show.">
                  <g className="conn" style={{ "--d": ".1s" } as CSSProperties}>
                    <circle cx="407" cy="186" r="9" fill="rgba(47,134,255,.18)" stroke="rgba(140,194,255,.45)" />
                    <text x="407" y="190" textAnchor="middle" className="cap-n">1</text>
                    <text x="423" y="190" className="cap">The customer</text>
                    <circle cx="78" cy="66" r="9" fill="rgba(47,134,255,.18)" stroke="rgba(140,194,255,.45)" />
                    <text x="78" y="70" textAnchor="middle" className="cap-n">2</text>
                    <text x="94" y="70" className="cap">The group behind them</text>
                    <circle cx="701" cy="66" r="9" fill="rgba(47,134,255,.18)" stroke="rgba(140,194,255,.45)" />
                    <text x="701" y="70" textAnchor="middle" className="cap-n">3</text>
                    <text x="717" y="70" className="cap">Their partners</text>
                    <circle cx="398" cy="480" r="9" fill="rgba(47,134,255,.18)" stroke="rgba(140,194,255,.45)" />
                    <text x="398" y="484" textAnchor="middle" className="cap-n">4</text>
                    <text x="414" y="484" className="cap">Their behaviour</text>
                  </g>
                  <g className="conn edges" style={{ "--d": ".25s" } as CSSProperties}>
                    <line className="edge" x1="150" y1="125" x2="450" y2="250" />
                    <line className="edge loop" x1="150" y1="265" x2="150" y2="125" />
                    <line className="edge loop" x1="450" y1="250" x2="150" y2="265" />
                    <line className="edge" x1="150" y1="405" x2="150" y2="265" />
                    <line className="edge" x1="450" y1="52" x2="150" y2="125" />
                    <line className="edge" x1="750" y1="125" x2="450" y2="250" />
                    <line className="edge" x1="750" y1="265" x2="450" y2="250" />
                    <line className="edge" x1="450" y1="432" x2="450" y2="250" />
                  </g>
                  <g className="ghosts">
                    <rect className="ghost" x="50.0" y="97.0" width="200" height="56" rx="12" />
                    <text className="q" x="150" y="131" textAnchor="middle">?</text>
                    <rect className="ghost" x="50.0" y="237.0" width="200" height="56" rx="12" />
                    <text className="q" x="150" y="271" textAnchor="middle">?</text>
                    <rect className="ghost" x="50.0" y="377.0" width="200" height="56" rx="12" />
                    <text className="q" x="150" y="411" textAnchor="middle">?</text>
                    <rect className="ghost" x="350.0" y="24.0" width="200" height="56" rx="12" />
                    <text className="q" x="450" y="58" textAnchor="middle">?</text>
                    <rect className="ghost" x="650.0" y="97.0" width="200" height="56" rx="12" />
                    <text className="q" x="750" y="131" textAnchor="middle">?</text>
                    <rect className="ghost" x="650.0" y="237.0" width="200" height="56" rx="12" />
                    <text className="q" x="750" y="271" textAnchor="middle">?</text>
                    <rect className="ghost" x="350.0" y="404.0" width="200" height="56" rx="12" />
                    <text className="q" x="450" y="438" textAnchor="middle">?</text>
                  </g>
                  <g className="conn node ok" style={{ "--d": "0.35s" } as CSSProperties}>
                    <rect className="base" x="50.0" y="97.0" width="200" height="56" rx="12" />
                    <rect className="box" x="50.0" y="97.0" width="200" height="56" rx="12" />
                    <text className="t" x="150" y="121" textAnchor="middle">Parent company</text>
                    <text className="s" x="150" y="140" textAnchor="middle">Majority owner</text>
                  </g>
                  <g className="conn node flag" style={{ "--d": "0.43s" } as CSSProperties}>
                    <rect className="halo" x="46.0" y="233.0" width="208" height="64" rx="15" />
                    <rect className="base" x="50.0" y="237.0" width="200" height="56" rx="12" />
                    <rect className="box" x="50.0" y="237.0" width="200" height="56" rx="12" />
                    <text className="t" x="150" y="261" textAnchor="middle">Holding company</text>
                    <text className="s" x="150" y="280" textAnchor="middle">Ownership loops back</text>
                  </g>
                  <g className="conn node ok" style={{ "--d": "0.51s" } as CSSProperties}>
                    <rect className="base" x="50.0" y="377.0" width="200" height="56" rx="12" />
                    <rect className="box" x="50.0" y="377.0" width="200" height="56" rx="12" />
                    <text className="t" x="150" y="401" textAnchor="middle">Former customer</text>
                    <text className="s" x="150" y="420" textAnchor="middle">Shares a director</text>
                  </g>
                  <g className="conn node flag" style={{ "--d": "0.59s" } as CSSProperties}>
                    <rect className="halo" x="346.0" y="20.0" width="208" height="64" rx="15" />
                    <rect className="base" x="350.0" y="24.0" width="200" height="56" rx="12" />
                    <rect className="box" x="350.0" y="24.0" width="200" height="56" rx="12" />
                    <text className="t" x="450" y="48" textAnchor="middle">New director at parent</text>
                    <text className="s" x="450" y="67" textAnchor="middle">May be a PEP</text>
                  </g>
                  <g className="conn node flag" style={{ "--d": "0.67s" } as CSSProperties}>
                    <rect className="halo" x="646.0" y="93.0" width="208" height="64" rx="15" />
                    <rect className="base" x="650.0" y="97.0" width="200" height="56" rx="12" />
                    <rect className="box" x="650.0" y="97.0" width="200" height="56" rx="12" />
                    <text className="t" x="750" y="121" textAnchor="middle">Trading partner</text>
                    <text className="s" x="750" y="140" textAnchor="middle">Sanctions match</text>
                  </g>
                  <g className="conn node flag" style={{ "--d": "0.75s" } as CSSProperties}>
                    <rect className="halo" x="646.0" y="233.0" width="208" height="64" rx="15" />
                    <rect className="base" x="650.0" y="237.0" width="200" height="56" rx="12" />
                    <rect className="box" x="650.0" y="237.0" width="200" height="56" rx="12" />
                    <text className="t" x="750" y="261" textAnchor="middle">Trading partner</text>
                    <text className="s" x="750" y="280" textAnchor="middle">Negative news</text>
                  </g>
                  <g className="conn node flag" style={{ "--d": "0.83s" } as CSSProperties}>
                    <rect className="halo" x="346.0" y="400.0" width="208" height="64" rx="15" />
                    <rect className="base" x="350.0" y="404.0" width="200" height="56" rx="12" />
                    <rect className="box" x="350.0" y="404.0" width="200" height="56" rx="12" />
                    <text className="t" x="450" y="428" textAnchor="middle">Payment pattern</text>
                    <text className="s" x="450" y="447" textAnchor="middle">Shifted since onboarding</text>
                  </g>
                  <g className="cust">
                    <rect className="base" x="335.0" y="206.0" width="230" height="88" rx="14" />
                    <rect className="box" x="335.0" y="206.0" width="230" height="88" rx="14" />
                    <text className="t big" x="450" y="234" textAnchor="middle">Customer</text>
                    <text className="s" x="450" y="252" textAnchor="middle">Profile and screening</text>
                    <text className="st ok solo-only" x="450" y="277" textAnchor="middle">✓ No hits · Low risk</text>
                    <text className="st warn conn-only" x="450" y="277" textAnchor="middle">! Review · 5 signals</text>
                  </g>
                </svg>
                {" "}
                <svg className="g-svg g-m" viewBox="0 0 380 650" role="img" aria-label="Example network around one customer: ownership, partners and behaviour signals that a profile-only check would not show.">
                  <g className="conn" style={{ "--d": ".1s" } as CSSProperties}>
                    <circle cx="147" cy="262" r="9" fill="rgba(47,134,255,.18)" stroke="rgba(140,194,255,.45)" />
                    <text x="147" y="266" textAnchor="middle" className="cap-n">1</text>
                    <text x="163" y="266" className="cap">The customer</text>
                    <circle cx="118" cy="24" r="9" fill="rgba(47,134,255,.18)" stroke="rgba(140,194,255,.45)" />
                    <text x="118" y="28" textAnchor="middle" className="cap-n">2</text>
                    <text x="134" y="28" className="cap">The group behind them</text>
                    <circle cx="141" cy="424" r="9" fill="rgba(47,134,255,.18)" stroke="rgba(140,194,255,.45)" />
                    <text x="141" y="428" textAnchor="middle" className="cap-n">3</text>
                    <text x="157" y="428" className="cap">Their partners</text>
                    <circle cx="138" cy="548" r="9" fill="rgba(47,134,255,.18)" stroke="rgba(140,194,255,.45)" />
                    <text x="138" y="552" textAnchor="middle" className="cap-n">4</text>
                    <text x="154" y="552" className="cap">Their behaviour</text>
                  </g>
                  <g className="conn edges" style={{ "--d": ".25s" } as CSSProperties}>
                    <line className="edge" x1="95" y1="190" x2="190" y2="335" />
                    <line className="edge loop" x1="285" y1="190" x2="95" y2="190" />
                    <line className="edge loop" x1="190" y1="335" x2="285" y2="190" />
                    <line className="edge" x1="285" y1="75" x2="285" y2="190" />
                    <line className="edge" x1="95" y1="75" x2="95" y2="190" />
                    <line className="edge" x1="95" y1="480" x2="190" y2="335" />
                    <line className="edge" x1="285" y1="480" x2="190" y2="335" />
                    <line className="edge" x1="190" y1="600" x2="190" y2="335" />
                  </g>
                  <g className="ghosts">
                    <rect className="ghost" x="10.0" y="162.0" width="170" height="56" rx="12" />
                    <text className="q" x="95" y="196" textAnchor="middle">?</text>
                    <rect className="ghost" x="200.0" y="162.0" width="170" height="56" rx="12" />
                    <text className="q" x="285" y="196" textAnchor="middle">?</text>
                    <rect className="ghost" x="200.0" y="47.0" width="170" height="56" rx="12" />
                    <text className="q" x="285" y="81" textAnchor="middle">?</text>
                    <rect className="ghost" x="10.0" y="47.0" width="170" height="56" rx="12" />
                    <text className="q" x="95" y="81" textAnchor="middle">?</text>
                    <rect className="ghost" x="10.0" y="452.0" width="170" height="56" rx="12" />
                    <text className="q" x="95" y="486" textAnchor="middle">?</text>
                    <rect className="ghost" x="200.0" y="452.0" width="170" height="56" rx="12" />
                    <text className="q" x="285" y="486" textAnchor="middle">?</text>
                    <rect className="ghost" x="105.0" y="572.0" width="170" height="56" rx="12" />
                    <text className="q" x="190" y="606" textAnchor="middle">?</text>
                  </g>
                  <g className="conn node ok" style={{ "--d": "0.35s" } as CSSProperties}>
                    <rect className="base" x="10.0" y="162.0" width="170" height="56" rx="12" />
                    <rect className="box" x="10.0" y="162.0" width="170" height="56" rx="12" />
                    <text className="t" x="95" y="186" textAnchor="middle">Parent company</text>
                    <text className="s" x="95" y="205" textAnchor="middle">Majority owner</text>
                  </g>
                  <g className="conn node flag" style={{ "--d": "0.43s" } as CSSProperties}>
                    <rect className="halo" x="196.0" y="158.0" width="178" height="64" rx="15" />
                    <rect className="base" x="200.0" y="162.0" width="170" height="56" rx="12" />
                    <rect className="box" x="200.0" y="162.0" width="170" height="56" rx="12" />
                    <text className="t" x="285" y="186" textAnchor="middle">Holding company</text>
                    <text className="s" x="285" y="205" textAnchor="middle">Ownership loops back</text>
                  </g>
                  <g className="conn node ok" style={{ "--d": "0.51s" } as CSSProperties}>
                    <rect className="base" x="200.0" y="47.0" width="170" height="56" rx="12" />
                    <rect className="box" x="200.0" y="47.0" width="170" height="56" rx="12" />
                    <text className="t" x="285" y="71" textAnchor="middle">Former customer</text>
                    <text className="s" x="285" y="90" textAnchor="middle">Shares a director</text>
                  </g>
                  <g className="conn node flag" style={{ "--d": "0.59s" } as CSSProperties}>
                    <rect className="halo" x="6.0" y="43.0" width="178" height="64" rx="15" />
                    <rect className="base" x="10.0" y="47.0" width="170" height="56" rx="12" />
                    <rect className="box" x="10.0" y="47.0" width="170" height="56" rx="12" />
                    <text className="t" x="95" y="71" textAnchor="middle">New director at parent</text>
                    <text className="s" x="95" y="90" textAnchor="middle">May be a PEP</text>
                  </g>
                  <g className="conn node flag" style={{ "--d": "0.67s" } as CSSProperties}>
                    <rect className="halo" x="6.0" y="448.0" width="178" height="64" rx="15" />
                    <rect className="base" x="10.0" y="452.0" width="170" height="56" rx="12" />
                    <rect className="box" x="10.0" y="452.0" width="170" height="56" rx="12" />
                    <text className="t" x="95" y="476" textAnchor="middle">Trading partner</text>
                    <text className="s" x="95" y="495" textAnchor="middle">Sanctions match</text>
                  </g>
                  <g className="conn node flag" style={{ "--d": "0.75s" } as CSSProperties}>
                    <rect className="halo" x="196.0" y="448.0" width="178" height="64" rx="15" />
                    <rect className="base" x="200.0" y="452.0" width="170" height="56" rx="12" />
                    <rect className="box" x="200.0" y="452.0" width="170" height="56" rx="12" />
                    <text className="t" x="285" y="476" textAnchor="middle">Trading partner</text>
                    <text className="s" x="285" y="495" textAnchor="middle">Negative news</text>
                  </g>
                  <g className="conn node flag" style={{ "--d": "0.83s" } as CSSProperties}>
                    <rect className="halo" x="101.0" y="568.0" width="178" height="64" rx="15" />
                    <rect className="base" x="105.0" y="572.0" width="170" height="56" rx="12" />
                    <rect className="box" x="105.0" y="572.0" width="170" height="56" rx="12" />
                    <text className="t" x="190" y="596" textAnchor="middle">Payment pattern</text>
                    <text className="s" x="190" y="615" textAnchor="middle">Shifted since onboarding</text>
                  </g>
                  <g className="cust">
                    <rect className="base" x="65.0" y="289.0" width="250" height="92" rx="14" />
                    <rect className="box" x="65.0" y="289.0" width="250" height="92" rx="14" />
                    <text className="t big" x="190" y="319" textAnchor="middle">Customer</text>
                    <text className="s" x="190" y="337" textAnchor="middle">Profile and screening</text>
                    <text className="st ok solo-only" x="190" y="362" textAnchor="middle">✓ No hits · Low risk</text>
                    <text className="st warn conn-only" x="190" y="362" textAnchor="middle">! Review · 5 signals</text>
                  </g>
                </svg>
              </div>
              {" "}
              <p className="g-note" id="g-note" aria-live="polite">
                <strong>Profile only:</strong>
                {" screening finds no hits on the customer, so the file reads as low risk."}
              </p>
            </div>
            {" "}
            <div className="why-cta">
              <div>
                <h2 id="next-title">Find out how much research time your team could save.</h2>
                {" "}
                <p className="lead">
                  Start with one portfolio. Together we agree how to measure review effort, alert relevance and extra risks found, using your own data.
                </p>
              </div>
              {" "}
              <div className="cta-contact">
                <Link prefetch={false} className="btn btn-primary cq-cta" href="/contact">Talk to the team</Link>
                {" "}
                <p className="cta-email">
                  {"or mail us at "}
                  <a href={"mailto:inquiry@contexq.com?subject=KYC%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20KYC.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>inquiry@contexq.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
