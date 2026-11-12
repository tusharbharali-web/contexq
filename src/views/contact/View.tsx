// Generated from public/html/contact (2).html.
// Markup of the page as JSX. Styling lives in ./styles.css (scoped to .v-contact);
// interactive behaviour lives in ./behavior.js and is started by <ViewShell>.
import ViewShell from "../_runtime/ViewShell";
import "./styles.css";
export function View() {
  return (
    <ViewShell viewId="contact" className="v-contact cq-html" lang="en" bodyClassName="cq-body">
      <main id="top">
        <section className="hero">
          <div className="hero-streaks" aria-hidden="true" />
          <svg className="hero-frame" viewBox="0 0 720 300" fill="none" aria-hidden="true">
            <rect x="1" y="80" width="600" height="300" rx="28" transform="rotate(-12 1 80)" stroke="url(#fr)" strokeWidth="1.2" />
            <defs>
              <linearGradient id="fr" x1="0" y1="0" x2="720" y2="0">
                <stop stopColor="#fff" stopOpacity="0" />
                <stop offset=".5" stopColor="#CFE0FF" />
                <stop offset="1" stopColor="#fff" stopOpacity=".1" />
              </linearGradient>
            </defs>
          </svg>
          <div className="hero-in">
            <div className="hero-copy">
              <h1>See the connections behind your data.</h1>
              <p>
                Bring fragmented information together, reveal the relationships that matter, and give your teams the context to make more confident decisions.
              </p>
              <div className="hero-points">
                <div className="point">
                  <span className="check">✓</span>
                  <span>Connect data across silos</span>
                </div>
                <div className="point">
                  <span className="check">✓</span>
                  <span>Uncover hidden relationships</span>
                </div>
                <div className="point">
                  <span className="check">✓</span>
                  <span>Understand risk in context</span>
                </div>
                <div className="point">
                  <span className="check">✓</span>
                  <span>Turn insight into action</span>
                </div>
              </div>
            </div>
            {" "}
            <div className="form-card" id="request">
              <h2>See ContexQ in action</h2>
              <p className="form-intro">Request a personalised walkthrough built around your business challenges.</p>
              <form id="contact-form" action="https://formsubmit.co/45791dc9c5f43aa4241e9a4b07578d3e" method="POST" target="_top">
                <input type="hidden" name="_subject" defaultValue="New ContexQ contact form submission" />
                {" "}
                <input type="hidden" name="_template" defaultValue="table" />
                {" "}
                <input type="hidden" name="_captcha" defaultValue="true" />
                {" "}
                <input type="hidden" name="_cc" defaultValue="inquiry@contexq.com,ajay.kakarania@contexq.com" />
                {" "}
                <input type="hidden" name="_next" id="next-url" defaultValue="" />
                {" "}
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                {" "}
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="first">First name</label>
                    <input id="first" name="first" autoComplete="given-name" required={true} />
                  </div>
                  {" "}
                  <div className="field">
                    <label htmlFor="last">Last name</label>
                    <input id="last" name="last" autoComplete="family-name" required={true} />
                  </div>
                  {" "}
                  <div className="field full">
                    <label htmlFor="email">Business email</label>
                    <input id="email" name="email" type="email" autoComplete="email" required={true} />
                  </div>
                  {" "}
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" autoComplete="organization" required={true} />
                  </div>
                  {" "}
                  <div className="field">
                    <label htmlFor="country">Country</label>
                    <select id="country" name="country" required={true} defaultValue="">
                      <option value="" disabled={true}>Select country</option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                      <option>Andorra</option>
                      <option>Angola</option>
                      <option>Antigua and Barbuda</option>
                      <option>Argentina</option>
                      <option>Armenia</option>
                      <option>Australia</option>
                      <option>Austria</option>
                      <option>Azerbaijan</option>
                      <option>Bahamas</option>
                      <option>Bahrain</option>
                      <option>Bangladesh</option>
                      <option>Barbados</option>
                      <option>Belarus</option>
                      <option>Belgium</option>
                      <option>Belize</option>
                      <option>Benin</option>
                      <option>Bhutan</option>
                      <option>Bolivia</option>
                      <option>Bosnia and Herzegovina</option>
                      <option>Botswana</option>
                      <option>Brazil</option>
                      <option>Brunei</option>
                      <option>Bulgaria</option>
                      <option>Burkina Faso</option>
                      <option>Burundi</option>
                      <option>Cabo Verde</option>
                      <option>Cambodia</option>
                      <option>Cameroon</option>
                      <option>Canada</option>
                      <option>Central African Republic</option>
                      <option>Chad</option>
                      <option>Chile</option>
                      <option>China</option>
                      <option>Colombia</option>
                      <option>Comoros</option>
                      <option>Congo (Brazzaville)</option>
                      <option>Congo (Kinshasa)</option>
                      <option>Costa Rica</option>
                      <option>{"Côte d'Ivoire"}</option>
                      <option>Croatia</option>
                      <option>Cuba</option>
                      <option>Cyprus</option>
                      <option>Czechia</option>
                      <option>Denmark</option>
                      <option>Djibouti</option>
                      <option>Dominica</option>
                      <option>Dominican Republic</option>
                      <option>Ecuador</option>
                      <option>Egypt</option>
                      <option>El Salvador</option>
                      <option>Equatorial Guinea</option>
                      <option>Eritrea</option>
                      <option>Estonia</option>
                      <option>Eswatini</option>
                      <option>Ethiopia</option>
                      <option>Fiji</option>
                      <option>Finland</option>
                      <option>France</option>
                      <option>Gabon</option>
                      <option>Gambia</option>
                      <option>Georgia</option>
                      <option>Germany</option>
                      <option>Ghana</option>
                      <option>Greece</option>
                      <option>Grenada</option>
                      <option>Guatemala</option>
                      <option>Guinea</option>
                      <option>Guinea-Bissau</option>
                      <option>Guyana</option>
                      <option>Haiti</option>
                      <option>Honduras</option>
                      <option>Hungary</option>
                      <option>Iceland</option>
                      <option>India</option>
                      <option>Indonesia</option>
                      <option>Iran</option>
                      <option>Iraq</option>
                      <option>Ireland</option>
                      <option>Israel</option>
                      <option>Italy</option>
                      <option>Jamaica</option>
                      <option>Japan</option>
                      <option>Jordan</option>
                      <option>Kazakhstan</option>
                      <option>Kenya</option>
                      <option>Kiribati</option>
                      <option>Kuwait</option>
                      <option>Kyrgyzstan</option>
                      <option>Laos</option>
                      <option>Latvia</option>
                      <option>Lebanon</option>
                      <option>Lesotho</option>
                      <option>Liberia</option>
                      <option>Libya</option>
                      <option>Liechtenstein</option>
                      <option>Lithuania</option>
                      <option>Luxembourg</option>
                      <option>Madagascar</option>
                      <option>Malawi</option>
                      <option>Malaysia</option>
                      <option>Maldives</option>
                      <option>Mali</option>
                      <option>Malta</option>
                      <option>Marshall Islands</option>
                      <option>Mauritania</option>
                      <option>Mauritius</option>
                      <option>Mexico</option>
                      <option>Micronesia</option>
                      <option>Moldova</option>
                      <option>Monaco</option>
                      <option>Mongolia</option>
                      <option>Montenegro</option>
                      <option>Morocco</option>
                      <option>Mozambique</option>
                      <option>Myanmar</option>
                      <option>Namibia</option>
                      <option>Nauru</option>
                      <option>Nepal</option>
                      <option>Netherlands</option>
                      <option>New Zealand</option>
                      <option>Nicaragua</option>
                      <option>Niger</option>
                      <option>Nigeria</option>
                      <option>North Korea</option>
                      <option>North Macedonia</option>
                      <option>Norway</option>
                      <option>Oman</option>
                      <option>Pakistan</option>
                      <option>Palau</option>
                      <option>Palestine</option>
                      <option>Panama</option>
                      <option>Papua New Guinea</option>
                      <option>Paraguay</option>
                      <option>Peru</option>
                      <option>Philippines</option>
                      <option>Poland</option>
                      <option>Portugal</option>
                      <option>Qatar</option>
                      <option>Romania</option>
                      <option>Russia</option>
                      <option>Rwanda</option>
                      <option>Saint Kitts and Nevis</option>
                      <option>Saint Lucia</option>
                      <option>Saint Vincent and the Grenadines</option>
                      <option>Samoa</option>
                      <option>San Marino</option>
                      <option>São Tomé and Príncipe</option>
                      <option>Saudi Arabia</option>
                      <option>Senegal</option>
                      <option>Serbia</option>
                      <option>Seychelles</option>
                      <option>Sierra Leone</option>
                      <option>Singapore</option>
                      <option>Slovakia</option>
                      <option>Slovenia</option>
                      <option>Solomon Islands</option>
                      <option>Somalia</option>
                      <option>South Africa</option>
                      <option>South Korea</option>
                      <option>South Sudan</option>
                      <option>Spain</option>
                      <option>Sri Lanka</option>
                      <option>Sudan</option>
                      <option>Suriname</option>
                      <option>Sweden</option>
                      <option>Switzerland</option>
                      <option>Syria</option>
                      <option>Taiwan</option>
                      <option>Tajikistan</option>
                      <option>Tanzania</option>
                      <option>Thailand</option>
                      <option>Timor-Leste</option>
                      <option>Togo</option>
                      <option>Tonga</option>
                      <option>Trinidad and Tobago</option>
                      <option>Tunisia</option>
                      <option>Türkiye</option>
                      <option>Turkmenistan</option>
                      <option>Tuvalu</option>
                      <option>Uganda</option>
                      <option>Ukraine</option>
                      <option>United Arab Emirates</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Uruguay</option>
                      <option>Uzbekistan</option>
                      <option>Vanuatu</option>
                      <option>Vatican City</option>
                      <option>Venezuela</option>
                      <option>Vietnam</option>
                      <option>Yemen</option>
                      <option>Zambia</option>
                      <option>Zimbabwe</option>
                      <option>Other</option>
                    </select>
                  </div>
                  {" "}
                  <div className="field" id="country-other-field" hidden={true}>
                    <label htmlFor="country-other">Please specify your country</label>
                    <input id="country-other" name="country_other" type="text" placeholder="Enter country name" />
                  </div>
                  {" "}
                  <div className="field full">
                    <label htmlFor="interest">What would you like to explore?</label>
                    <select id="interest" name="interest">
                      <option>{"Fraud & Money Mule Detection"}</option>
                      <option>Financial Crime Compliance</option>
                      <option>Supply Chain Intelligence</option>
                      <option>Enterprise Risk Management</option>
                      <option>Other</option>
                    </select>
                  </div>
                  {" "}
                  <div className="field full" id="interest-other-field" hidden={true}>
                    <label htmlFor="interest-other">{"Please specify what you'd like to explore"}</label>
                    <input id="interest-other" name="interest_other" type="text" placeholder="Tell us what you'd like to explore" />
                  </div>
                </div>
                <div className="cf-turnstile" data-sitekey="0x4AAAAAADKKF2ByP4CS0doK" data-theme="dark" style={{ margin: "14px 0" }} />
                {" "}
                <button className="submit" type="submit">Submit</button>
                <p className="form-foot">
                  By submitting, you agree that ContexQ may contact you about your enquiry. Protected by Cloudflare Turnstile.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </ViewShell>
  );
}
export default View;
