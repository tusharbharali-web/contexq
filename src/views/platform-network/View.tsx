// Generated from public/html/contexq-knowledge-graphs-ai.html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-platform-network);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import Link from "next/link";
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="platform-network" className="v-platform-network cq-html" lang="en" bodyClassName="cq-body">
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">See the relationships behind every decision.</h1>
              {" "}
              <p className="lead">
                ContexQ turns business data and external context into knowledge graphs, revealing the relationships behind risk, exposure and opportunity.
              </p>
            </div>
            {" "}
            <figure className="hero-visual">
              <div className="stage">
                <canvas id="kg" role="img" aria-label="Animation: streams of business records flow into the ContexQ globe. The globe moves aside and releases distinct companies, people and accounts, which connect into a knowledge graph. One path comes into focus: one of your customers and one of your suppliers are owned by the same holding company." />
              </div>
              {" "}
              <figcaption className="hero-caption">
                <div className="cap-body">
                  <ol className="progress" aria-hidden="true">
                    <li><span /></li>
                    <li><span /></li>
                    <li><span /></li>
                    <li><span /></li>
                  </ol>
                  {" "}
                  <p id="stageText">Information from your own systems and external sources flows into ContexQ.</p>
                </div>
                {" "}
                <button className="icon-btn" id="playToggle" type="button" aria-label="Pause animation">
                  <svg id="icoPause" viewBox="0 0 12 12" aria-hidden="true">
                    <rect x="2" y="1.5" width="2.6" height="9" fill="currentColor" />
                    <rect x="7.4" y="1.5" width="2.6" height="9" fill="currentColor" />
                  </svg>
                  {" "}
                  <svg id="icoPlay" viewBox="0 0 12 12" aria-hidden="true" style={{ display: "none" }}>
                    <path d="M3 1.5v9l7.5-4.5z" fill="currentColor" />
                  </svg>
                </button>
              </figcaption>
            </figure>
          </div>
        </section>
        {" "}
        <section className="sec" id="picture" aria-labelledby="picture-title">
          <div className="wrap problem-grid">
            <div>
              <h2 id="picture-title">Business records contain only part of the picture.</h2>
              {" "}
              <p className="lede">An accurate record can still miss the wider picture.</p>
              {" "}
              <ul className="truths">
                <li>Two borrowers may answer to the same owner.</li>
                {" "}
                <li>Several suppliers may rely on the same upstream factory.</li>
                {" "}
                <li>Payments that look routine one by one may travel in a circle.</li>
              </ul>
            </div>
            {" "}
            <figure className="record-fig">
              <div className="record-card">
                <div className="rc-src">Customer record</div>
                {" "}
                <div className="rc-name">A logistics company</div>
                {" "}
                <dl>
                  <div>
                    <dt>Customer since</dt>
                    <dd>2019</dd>
                  </div>
                  {" "}
                  <div>
                    <dt>Sector</dt>
                    <dd>Freight and warehousing</dd>
                  </div>
                  {" "}
                  <div>
                    <dt>Internal rating</dt>
                    <dd>Low risk</dd>
                  </div>
                  {" "}
                  <div>
                    <dt>Payments</dt>
                    <dd>Up to date</dd>
                  </div>
                </dl>
              </div>
              {" "}
              <ul className="ghosts">
                <li>
                  <b>Ownership</b>
                  74% owned by a holding company
                </li>
                {" "}
                <li>
                  <b>Shared owner</b>
                  The same holding company also owns one of your key suppliers
                </li>
                {" "}
                <li>
                  <b>People</b>
                  Shares a director with a company named in adverse news
                </li>
              </ul>
              {" "}
              <figcaption>What one record shows, and what sits around it. Illustrative example.</figcaption>
            </figure>
          </div>
        </section>
        {" "}
        <section className="sec dark" id="context" aria-labelledby="context-title">
          <div className="wrap context-grid">
            <div>
              <h2 id="context-title">Bring what you know together with what surrounds it.</h2>
              {" "}
              <p className="lede">
                Your internal records meet the ContexQ Universe of external intelligence, bringing the wider ecosystem around your business into view.
              </p>
              {" "}
              <div className="sources">
                <div>
                  <h3>Your business data</h3>
                  {" "}
                  <ul>
                    <li>Customers and suppliers</li>
                    <li>Products, prices and invoices</li>
                    <li>Transactions and payments</li>
                    <li>Accounts and KYC records</li>
                  </ul>
                </div>
                {" "}
                <div className="ext">
                  <h3>External context</h3>
                  {" "}
                  <ul>
                    <li>Corporate registries and ownership</li>
                    <li>International trade</li>
                    <li>Sanctions and financial crime</li>
                    <li>Adverse news</li>
                    <li>ESG and climate risk</li>
                    <li>Geopolitical and country risk</li>
                    <li>Supply-chain relationships</li>
                  </ul>
                </div>
              </div>
              {" "}
              <div className="more">
                <details>
                  <summary>
                    {"How the information comes together "}
                    <span className="plus" aria-hidden="true" />
                  </summary>
                  {" "}
                  <div className="body">
                    <p>ContexQ standardises names, addresses and identifiers so records from different systems can be compared.</p>
                    {" "}
                    <p>Your source systems remain unchanged. Information refreshes on a schedule or as it changes.</p>
                  </div>
                </details>
              </div>
            </div>
            {" "}
            <figure className="universe" aria-label="Diagram: your customer ecosystem sits inside the much larger ContexQ Universe of external entities.">
              <svg viewBox="0 0 540 500" id="uniSvg" role="img" aria-hidden="true">
                <circle className="u-outer" cx="250" cy="262" r="214" strokeDasharray="3 5" />
                <circle className="u-inner" cx="300" cy="300" r="104" />
                <g id="uniLinks" />
                <g id="uniDots" />
                <line className="u-lead" x1="112" y1="88" x2="80" y2="40" />
                <text className="u-label" x="18" y="28">ContexQ Universe</text>
                <text className="u-sub" x="18" y="46">External companies, people and networks</text>
                <line className="u-lead" x1="380" y1="236" x2="430" y2="186" />
                <text className="u-label" x="400" y="160">Your customer</text>
                <text className="u-label" x="400" y="178">ecosystem</text>
              </svg>
            </figure>
          </div>
        </section>
        {" "}
        <section className="sec sec-pale" id="graph" aria-labelledby="graph-title">
          <div className="wrap">
            <div className="whowho-head">
              <h2 id="graph-title">First, know who is who. Then see how they relate.</h2>
            </div>
            {" "}
            <div className="panels">
              <div className="panel">
                <h3>Entity resolution</h3>
                {" "}
                <p>
                  Recognise records that belong to the same person, company or account. Keep distinct entities apart, even when they look alike.
                </p>
                {" "}
                <div className="er" aria-label="Three records from different systems resolve into one entity.">
                  <div className="chips">
                    <div className="chip">
                      Company A Ltd
                      <small>Customer system</small>
                    </div>
                    {" "}
                    <div className="chip">
                      COMPANY A LIMITED
                      <small>Company registry</small>
                    </div>
                    {" "}
                    <div className="chip">
                      Comp. A (Pty)
                      <small>Payment records</small>
                    </div>
                  </div>
                  {" "}
                  <div className="er-arrow" aria-hidden="true" />
                  {" "}
                  <div className="entity">
                    <b>Company A</b>
                    <span>One entity with its identifiers, accounts and history.</span>
                  </div>
                </div>
                {" "}
                <p className="apart-label">Kept apart: two people with the same name</p>
                {" "}
                <div className="apart">
                  <div className="chip">
                    Person 1
                    <small>Company director, born 1971</small>
                  </div>
                  {" "}
                  <span className="neq" aria-label="is not">≠</span>
                  {" "}
                  <div className="chip">
                    Person 2
                    <small>Account holder, born 1988</small>
                  </div>
                </div>
              </div>
              {" "}
              <div className="panel">
                <h3>Knowledge graph</h3>
                {" "}
                <p>Map the relationships between those entities, then follow connections beyond the first record.</p>
                {" "}
                <figure className="kg-fig">
                  <svg viewBox="0 0 520 300" role="img" aria-label="A customer connected to its holding company, a director, a bank account, a shipping partner, a buyer and a registered address.">
                    <g>
                      <line className="kg-edge" x1="260" y1="150" x2="120" y2="52" />
                      <line className="kg-edge" x1="260" y1="150" x2="410" y2="52" />
                      <line className="kg-edge" x1="260" y1="150" x2="455" y2="160" />
                      <line className="kg-edge" x1="260" y1="150" x2="390" y2="262" />
                      <line className="kg-edge" x1="260" y1="150" x2="120" y2="262" />
                      <line className="kg-edge" x1="260" y1="150" x2="62" y2="160" />
                    </g>
                    <rect className="kg-node" x="196" y="132" width="128" height="36" rx="18" style={{ fill: "var(--brand)", stroke: "none" }} />
                    <text className="kg-c" x="260" y="155" textAnchor="middle">Your customer</text>
                    <circle className="kg-node" cx="120" cy="52" r="7" />
                    <text className="kg-t" x="120" y="32" textAnchor="middle">Holding company</text>
                    <text className="kg-rel" x="176" y="92" textAnchor="middle">owned by</text>
                    <circle className="kg-node" cx="410" cy="52" r="7" />
                    <text className="kg-t" x="410" y="32" textAnchor="middle">Director</text>
                    <text className="kg-rel" x="350" y="92" textAnchor="middle">director of owner</text>
                    <circle className="kg-node" cx="455" cy="160" r="7" />
                    <text className="kg-t" x="455" y="188" textAnchor="middle">Retail buyer</text>
                    <text className="kg-rel" x="370" y="146" textAnchor="middle">supplies</text>
                    <circle className="kg-node" cx="390" cy="262" r="7" />
                    <text className="kg-t" x="390" y="290" textAnchor="middle">Bank account</text>
                    <text className="kg-rel" x="342" y="214" textAnchor="middle">holds</text>
                    <circle className="kg-node" cx="120" cy="262" r="7" />
                    <text className="kg-t" x="120" y="290" textAnchor="middle">Shipping partner</text>
                    <text className="kg-rel" x="168" y="214" textAnchor="middle">pays</text>
                    <circle className="kg-node" cx="62" cy="160" r="7" />
                    <text className="kg-t" x="62" y="188" textAnchor="middle">Registered address</text>
                    <text className="kg-rel" x="142" y="146" textAnchor="middle">registered at</text>
                  </svg>
                </figure>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="sec dark" id="capabilities" aria-labelledby="cap-title">
          <div className="wrap">
            <div className="cap-head">
              <div>
                <h2 id="cap-title">Build the graph. Analyse it. Explore it.</h2>
              </div>
              {" "}
              <p>From connected data to findings your teams can act on.</p>
            </div>
            {" "}
            <article className="cap" aria-labelledby="gen-title">
              <div>
                <h3 id="gen-title">Turn records into a connected network.</h3>
                {" "}
                <p className="cap-lead">
                  Build ownership, trading and payment networks around your business. Keep them current as new information arrives.
                </p>
                {" "}
                <div className="more">
                  <details>
                    <summary>
                      {"What the graph can include "}
                      <span className="plus" aria-hidden="true" />
                    </summary>
                    {" "}
                    <div className="body">
                      <ul>
                        <li>Ownership chains through to the ultimate beneficial owner (UBO)</li>
                        {" "}
                        <li>Supplier and customer ecosystems, including alternative suppliers</li>
                        {" "}
                        <li>Transaction and payment networks between accounts</li>
                        {" "}
                        <li>Shared directors, addresses and contact details</li>
                        {" "}
                        <li>Sanctions, adverse news and ESG signals linked to entities</li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
              {" "}
              <div className="cap-visual" aria-hidden="true">
                <svg viewBox="0 0 520 250">
                  <text className="v-t" x="0" y="14">Records</text>
                  <g fontSize="11">
                    <rect className="v-cell" x="0" y="26" width="268" height="34" rx="2" />
                    <text className="v-tb" x="12" y="47">Holding co.</text>
                    <text className="v-t" x="118" y="47">owns 74%</text>
                    <text className="v-tb" x="192" y="47">Customer</text>
                    <rect className="v-cell" x="0" y="66" width="268" height="34" rx="2" />
                    <text className="v-tb" x="12" y="87">Holding co.</text>
                    <text className="v-t" x="118" y="87">owns 61%</text>
                    <text className="v-tb" x="192" y="87">Supplier</text>
                    <rect className="v-cell" x="0" y="106" width="268" height="34" rx="2" />
                    <text className="v-tb" x="12" y="127">Director</text>
                    <text className="v-t" x="118" y="127">director of</text>
                    <text className="v-tb" x="192" y="127">Holding co.</text>
                    <rect className="v-cell" x="0" y="146" width="268" height="34" rx="2" />
                    <text className="v-tb" x="12" y="167">Customer</text>
                    <text className="v-t" x="118" y="167">pays</text>
                    <text className="v-tb" x="192" y="167">Shipper</text>
                    <rect className="v-cell" x="0" y="186" width="268" height="34" rx="2" />
                    <text className="v-tb" x="12" y="207">Supplier</text>
                    <text className="v-t" x="118" y="207">ships with</text>
                    <text className="v-tb" x="192" y="207">Shipper</text>
                  </g>
                  <path d="M276 123h22" stroke="#5d9cc7" strokeWidth="1.3" />
                  <path d="M298 118l7 5-7 5z" fill="#5d9cc7" />
                  <text className="v-t" x="318" y="14">Graph</text>
                  <line className="g-e" x1="410" y1="60" x2="350" y2="140" />
                  <line className="g-e" x1="410" y1="60" x2="480" y2="140" />
                  <line className="g-e" x1="410" y1="60" x2="410" y2="26" strokeDasharray="3 3" />
                  <line className="g-e" x1="350" y1="140" x2="416" y2="212" />
                  <line className="g-e" x1="480" y1="140" x2="416" y2="212" />
                  <circle className="g-n" cx="410" cy="60" r="7" />
                  <circle cx="410" cy="26" r="4.5" fill="#cfe6ff" />
                  <circle className="g-n" cx="350" cy="140" r="6" />
                  <circle className="g-n" cx="480" cy="140" r="6" />
                  <circle className="g-n" cx="416" cy="212" r="6" />
                  <text className="v-tb" x="424" y="64">Holding co.</text>
                  <text className="v-t" x="420" y="30">Director</text>
                  <text className="v-tb" x="300" y="162">Customer</text>
                  <text className="v-tb" x="446" y="162">Supplier</text>
                  <text className="v-tb" x="428" y="230">Shipper</text>
                </svg>
              </div>
            </article>
            {" "}
            <article className="cap" aria-labelledby="ana-title">
              <div>
                <h3 id="ana-title">Find patterns no single record reveals.</h3>
                {" "}
                <p className="cap-lead">
                  Analyse network structure, timing and flows. Prioritise findings so teams know where to investigate first.
                </p>
                {" "}
                <div className="more">
                  <details>
                    <summary>
                      {"How findings are assessed "}
                      <span className="plus" aria-hidden="true" />
                    </summary>
                    {" "}
                    <div className="body">
                      <ul>
                        <li>
                          <b>Structure:</b>
                          {" influential entities and unusual connections."}
                        </li>
                        {" "}
                        <li>
                          <b>Timing:</b>
                          {" changes in activity and transaction pace."}
                        </li>
                        {" "}
                        <li>
                          <b>Flows:</b>
                          {" the direction and sequence of movement."}
                        </li>
                      </ul>
                      {" "}
                      <p>Industry-specific scores combine network findings with financial, ESG, sanctions and operational risk.</p>
                    </div>
                  </details>
                </div>
              </div>
              {" "}
              <div>
                <div className="patterns" aria-label="Six patterns graph analytics can surface">
                  <div className="pattern">
                    <svg viewBox="0 0 120 80" aria-hidden="true">
                      <line className="g-eh" x1="60" y1="16" x2="26" y2="64" />
                      <line className="g-eh" x1="60" y1="16" x2="94" y2="64" />
                      <circle className="g-h" cx="60" cy="16" r="6" />
                      <circle className="g-n" cx="26" cy="64" r="5" />
                      <circle className="g-n" cx="94" cy="64" r="5" />
                    </svg>
                    {" "}
                    <h4>Shared ownership</h4>
                    <p>Separate customers or suppliers controlled by the same parent.</p>
                  </div>
                  {" "}
                  <div className="pattern">
                    <svg viewBox="0 0 120 80" aria-hidden="true">
                      <path className="g-e" d="M14 40H106" />
                      <circle className="g-n" cx="14" cy="40" r="5" />
                      <circle className="g-n" cx="45" cy="40" r="4" />
                      <circle className="g-n" cx="76" cy="40" r="4" />
                      <circle className="g-h" cx="106" cy="40" r="6" />
                      <path className="g-eh" d="M14 22c30-16 62-16 92 0" strokeDasharray="3 3" />
                    </svg>
                    {" "}
                    <h4>Indirect exposure</h4>
                    <p>Risk that reaches you through other companies, not a direct link.</p>
                  </div>
                  {" "}
                  <div className="pattern">
                    <svg viewBox="0 0 120 80" aria-hidden="true">
                      <defs>
                        <marker id="ah" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
                          <path d="M0 0L6 3L0 6z" fill="#faab40" />
                        </marker>
                      </defs>
                      <path className="g-eh" markerEnd="url(#ah)" d="M66 14Q96 26 97 58" />
                      <path className="g-eh" markerEnd="url(#ah)" d="M92 70Q60 80 30 70" />
                      <path className="g-eh" markerEnd="url(#ah)" d="M22 60Q22 28 52 13" />
                      <circle className="g-n" cx="60" cy="12" r="5" />
                      <circle className="g-n" cx="98" cy="66" r="5" />
                      <circle className="g-n" cx="22" cy="66" r="5" />
                    </svg>
                    {" "}
                    <h4>Circular flows</h4>
                    <p>Funds that move through several accounts and return to where they began.</p>
                  </div>
                  {" "}
                  <div className="pattern">
                    <svg viewBox="0 0 120 80" aria-hidden="true">
                      <path className="g-e" d="M12 50H108" />
                      <circle className="g-n" cx="12" cy="50" r="5" />
                      <circle className="g-h" cx="60" cy="50" r="6" />
                      <circle className="g-n" cx="108" cy="50" r="5" />
                      <circle cx="60" cy="20" r="10" fill="none" stroke="#5d9cc7" strokeWidth="1.3" />
                      <path d="M60 14v6l4 3" stroke="#faab40" strokeWidth="1.4" fill="none" />
                    </svg>
                    {" "}
                    <h4>Rapid pass-through</h4>
                    <p>Money that arrives and leaves an account within hours.</p>
                  </div>
                  {" "}
                  <div className="pattern">
                    <svg viewBox="0 0 120 80" aria-hidden="true">
                      <g className="g-e"><path d="M14 8L94 40M14 24L94 40M14 40L94 40M14 56L94 40M14 72L94 40" /></g>
                      <circle className="g-n" cx="14" cy="8" r="4" />
                      <circle className="g-n" cx="14" cy="24" r="4" />
                      <circle className="g-n" cx="14" cy="40" r="4" />
                      <circle className="g-n" cx="14" cy="56" r="4" />
                      <circle className="g-n" cx="14" cy="72" r="4" />
                      <circle className="g-h" cx="96" cy="40" r="6" />
                    </svg>
                    {" "}
                    <h4>Fan-in and fan-out</h4>
                    <p>Many senders paying one account, or one account paying many.</p>
                  </div>
                  {" "}
                  <div className="pattern">
                    <svg viewBox="0 0 120 80" aria-hidden="true">
                      <g className="g-e"><path d="M16 14L60 66M45 14L60 66M75 14L60 66M104 14L60 66" /></g>
                      <circle className="g-n" cx="16" cy="14" r="5" />
                      <circle className="g-n" cx="45" cy="14" r="5" />
                      <circle className="g-n" cx="75" cy="14" r="5" />
                      <circle className="g-n" cx="104" cy="14" r="5" />
                      <circle className="g-h" cx="60" cy="66" r="6" />
                    </svg>
                    {" "}
                    <h4>Concentrated dependency</h4>
                    <p>Several suppliers relying on the same upstream source.</p>
                  </div>
                </div>
              </div>
            </article>
            {" "}
            <article className="cap" aria-labelledby="vis-title">
              <div>
                <h3 id="vis-title">Explore the network, not a spreadsheet.</h3>
                {" "}
                <p className="cap-lead">
                  Start with a company or account. Follow its connections to see how a relationship formed and where it leads.
                </p>
              </div>
              {" "}
              <div className="cap-visual" aria-hidden="true">
                <svg viewBox="0 0 520 260">
                  <text className="v-tb" x="0" y="14">A company group, network over time</text>
                  <g transform="translate(0,40)">
                    <rect x="0" y="0" width="160" height="150" rx="3" fill="#0a1f34" stroke="#1d3a55" />
                    <line className="g-e" x1="80" y1="50" x2="44" y2="100" />
                    <line className="g-e" x1="80" y1="50" x2="118" y2="100" />
                    <circle className="g-n" cx="80" cy="50" r="6" />
                    <circle className="g-n" cx="44" cy="100" r="5" />
                    <circle className="g-n" cx="118" cy="100" r="5" />
                  </g>
                  <g transform="translate(180,40)">
                    <rect x="0" y="0" width="160" height="150" rx="3" fill="#0a1f34" stroke="#1d3a55" />
                    <line className="g-e" x1="80" y1="50" x2="44" y2="100" />
                    <line className="g-e" x1="80" y1="50" x2="118" y2="100" />
                    <line className="g-e" x1="80" y1="50" x2="80" y2="18" />
                    <line className="g-e" x1="118" y1="100" x2="140" y2="130" />
                    <line className="g-e" x1="44" y1="100" x2="22" y2="128" />
                    <circle className="g-n" cx="80" cy="50" r="6" />
                    <circle className="g-n" cx="44" cy="100" r="5" />
                    <circle className="g-n" cx="118" cy="100" r="5" />
                    <circle cx="80" cy="18" r="4" fill="#cfe6ff" />
                    <circle className="g-n" cx="140" cy="130" r="4" />
                    <circle className="g-n" cx="22" cy="128" r="4" />
                  </g>
                  <g transform="translate(360,40)">
                    <rect x="0" y="0" width="160" height="150" rx="3" fill="#0a1f34" stroke="#1d3a55" />
                    <line className="g-eh" x1="80" y1="50" x2="44" y2="100" />
                    <line className="g-eh" x1="80" y1="50" x2="118" y2="100" />
                    <line className="g-e" x1="80" y1="50" x2="80" y2="18" />
                    <line className="g-e" x1="118" y1="100" x2="140" y2="130" />
                    <line className="g-e" x1="44" y1="100" x2="22" y2="128" />
                    <line className="g-e" x1="118" y1="100" x2="100" y2="134" />
                    <line className="g-e" x1="44" y1="100" x2="62" y2="134" />
                    <line className="g-e" x1="80" y1="18" x2="130" y2="24" />
                    <circle className="g-h" cx="80" cy="50" r="6" />
                    <circle className="g-n" cx="44" cy="100" r="5" />
                    <circle className="g-n" cx="118" cy="100" r="5" />
                    <circle cx="80" cy="18" r="4" fill="#cfe6ff" />
                    <circle className="g-n" cx="140" cy="130" r="4" />
                    <circle className="g-n" cx="22" cy="128" r="4" />
                    <circle className="g-n" cx="100" cy="134" r="3.5" />
                    <circle className="g-n" cx="62" cy="134" r="3.5" />
                    <circle cx="130" cy="24" r="3.5" fill="#cfe6ff" />
                  </g>
                  <line x1="0" y1="222" x2="520" y2="222" stroke="#24476a" />
                  <circle cx="80" cy="222" r="4" fill="#5d9cc7" />
                  <circle cx="260" cy="222" r="4" fill="#5d9cc7" />
                  <circle cx="440" cy="222" r="6" fill="#faab40" />
                  <text className="v-t" x="80" y="248" textAnchor="middle">2022</text>
                  <text className="v-t" x="260" y="248" textAnchor="middle">2024</text>
                  <text className="v-tb" x="440" y="248" textAnchor="middle">Today</text>
                </svg>
              </div>
            </article>
          </div>
        </section>
        {" "}
        <section className="sec" id="applications" aria-labelledby="apps-title">
          <div className="wrap apps-grid">
            <div className="apps-intro">
              <h2 id="apps-title">Where connected context changes the decision.</h2>
              {" "}
              <p className="lede">One graph foundation. Different business decisions.</p>
            </div>
            {" "}
            <div className="apps">
              <details>
                <summary>
                  <h3>Credit and group exposure</h3>
                  <span className="q">Which borrowers share a group, and what is our combined exposure?</span>
                  <span className="plus" aria-hidden="true" />
                </summary>
                {" "}
                <div className="app-body">
                  <div>
                    <h4>What the graph shows</h4>
                    <p>Ownership chains linking seemingly separate borrowers and counterparties.</p>
                  </div>
                  {" "}
                  <div>
                    <h4>What your team can do</h4>
                    <p>Assess lending and trade exposure across the group.</p>
                  </div>
                  {" "}
                  <p className="teams">
                    <b>For</b>
                    {" credit risk, corporate banking and portfolio management"}
                  </p>
                </div>
              </details>
              {" "}
              <details>
                <summary>
                  <h3>Financial crime and fraud</h3>
                  <span className="q">Is this account part of a coordinated network?</span>
                  <span className="plus" aria-hidden="true" />
                </summary>
                {" "}
                <div className="app-body">
                  <div>
                    <h4>What the graph shows</h4>
                    <p>Payment patterns viewed alongside ownership and watchlist information.</p>
                  </div>
                  {" "}
                  <div>
                    <h4>What your team can do</h4>
                    <p>Prioritise connected activity and document the evidence behind each case.</p>
                  </div>
                  {" "}
                  <p className="teams">
                    <b>For</b>
                    {" AML, fraud and financial crime teams"}
                  </p>
                </div>
              </details>
              {" "}
              <details>
                <summary>
                  <h3>Supplier and supply-chain risk</h3>
                  <span className="q">Where do suppliers share a dependency, and what could disruption affect?</span>
                  <span className="plus" aria-hidden="true" />
                </summary>
                {" "}
                <div className="app-body">
                  <div>
                    <h4>What the graph shows</h4>
                    <p>Dependencies beyond tier 1 and exposure to climate, geopolitical and operational events.</p>
                  </div>
                  {" "}
                  <div>
                    <h4>What your team can do</h4>
                    <p>Assess potential disruption and identify alternative suppliers.</p>
                  </div>
                  {" "}
                  <p className="teams">
                    <b>For</b>
                    {" procurement, supply-chain and operations leaders"}
                  </p>
                </div>
              </details>
              {" "}
              <details>
                <summary>
                  <h3>KYC, third-party and ESG due diligence</h3>
                  <span className="q">What don’t we know about the companies we work with?</span>
                  <span className="plus" aria-hidden="true" />
                </summary>
                {" "}
                <div className="app-body">
                  <div>
                    <h4>What the graph shows</h4>
                    <p>
                      Sanctions, adverse news and ESG signals linked to the UBOs, directors and affiliates behind each counterparty.
                    </p>
                  </div>
                  {" "}
                  <div>
                    <h4>What your team can do</h4>
                    <p>Review counterparties with their ownership and affiliations in view.</p>
                  </div>
                  {" "}
                  <p className="teams">
                    <b>For</b>
                    {" compliance, KYC and sustainability teams"}
                  </p>
                </div>
              </details>
              {" "}
              <details>
                <summary>
                  <h3>Customer and market opportunity</h3>
                  <span className="q">Which businesses connected to our customers could we serve?</span>
                  <span className="plus" aria-hidden="true" />
                </summary>
                {" "}
                <div className="app-body">
                  <div>
                    <h4>What the graph shows</h4>
                    <p>Customer groups, trading partners and market context.</p>
                  </div>
                  {" "}
                  <div>
                    <h4>What your team can do</h4>
                    <p>Identify relevant prospects and approach them with context.</p>
                  </div>
                  {" "}
                  <p className="teams">
                    <b>For</b>
                    {" commercial, relationship management and strategy teams"}
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        {" "}
        <section className="trust" aria-labelledby="trust-title">
          <div className="wrap trust-grid">
            <div>
              <h2 id="trust-title">Built for regulated environments.</h2>
              {" "}
              <p className="lede">Protect sensitive data and maintain a clear decision history.</p>
            </div>
            {" "}
            <ul>
              <li>
                <b>Your own private environment</b>
                <span>Your data is kept separate from every other customer’s.</span>
              </li>
              {" "}
              <li>
                <b>Data stays where it should</b>
                <span>Your data is stored in the country or region you choose.</span>
              </li>
              {" "}
              <li>
                <b>Protected at every stage</b>
                <span>Controlled access and protection for data at rest, in transit and in use.</span>
              </li>
              {" "}
              <li>
                <b>Every step on record</b>
                <span>A history of actions for audits and reviews.</span>
              </li>
            </ul>
          </div>
        </section>
        {" "}
        <section className="closing" id="contact">
          <div className="wrap">
            <div>
              <h2>Which relationships would change your next decision?</h2>
              <p>See how ContexQ builds a knowledge graph from your own data and external context.</p>
            </div>
            <div className="cta-stack">
<Link prefetch={false} className="cta" href="/contact">Talk to the team</Link>
<p className="cq-mail-line">
  {"or mail us at "}
  <a href={"mailto:inquiry@contexq.com?subject=Knowledge%20graphs%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20discuss%20how%20ContexQ%20could%20help%20us%20with%20knowledge%20graphs.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"}>inquiry@contexq.com</a>
</p>
</div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
