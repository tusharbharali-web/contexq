'use client';

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function PrivacyPolicyPage() {
  const privacyContent = `<p class="wp-block-paragraph"><strong>General Information</strong></p>
<p class="wp-block-paragraph">This Privacy Policy covers the processing of your personal data when using the site <a href="https://contexq.com/">https://contexq.com/</a> (hereinafter, the "Site") by "ContexQ", as well as the services offered therein (the "Services"). "Personal Data" means any information relating to an identified or identifiable natural person. Please carefully read this Privacy Policy before using or accessing the Site.</p>
<p class="wp-block-paragraph"><strong>Data Controller</strong></p>
<figure class="wp-block-table"><table class="has-fixed-layout"><tbody><tr><td><strong>NAME</strong></td><td>ContexQ Pte Ltd</td></tr><tr><td><strong>ADDRESS</strong></td><td>23 Keppel Bay View, 25-73, 098414 Singapore</td></tr><tr><td><strong>EMAIL</strong></td><td><a href="mailto:inquiry@contexq.com">inquiry@contexq.com</a></td></tr></tbody></table></figure>
<p class="wp-block-paragraph">If you would like to obtain information about how the joint controllership operates and its essential arrangements, please contact us at the details above.</p>
<p class="wp-block-paragraph"><strong>Personal data we collect</strong></p>
<p class="wp-block-paragraph">We will collect personal data about you from a variety of sources, including information we collect from you directly (e.g. when you register and use the Site); from third parties (e.g. from your employer) or automatically (e.g. through cookies):</p>
<ul class="wp-block-list">
<li>Personal data we may collect directly from you:
<ul class="wp-block-list">
<li>Identification data (e.g. name, surname, email address, and telephone number);</li>
<li>Login information (e.g. user name and password);</li>
<li>Internet profiles (e.g. IP address, web browser, use of the Site and device information);</li>
<li>Economic and financial data (e.g. users' selected portfolio and preferences);</li>
<li>Employment data (e.g. employer and position);</li>
<li>Behavioural information (data collected using cookies and other device identifying technologies); and other information provided at your discretion from time to time.</li>
</ul>
</li>
<li>Personal data we may collect from third parties: we may obtain from your employer certain information, such as your professional contact details (e.g. name, surname, email address, and telephone number).</li>
<li>Personal data we may collect automatically from you: when using the Site we automatically collect certain information from you which may include personal data. Further information about our use of cookies and tracking technologies is available in our Cookie Policy.</li>
</ul>
<p class="wp-block-paragraph"><strong>How we use your personal data and on what legal basis</strong></p>
<p class="wp-block-paragraph">We use and subsequently process personal data we collect about you on the following legal basis and for the purposes identified below:</p>
<ol start="1" class="wp-block-list">
<li>We will process your personal data for managing and controlling your registration and use of the Site on the basis of the execution of the Legal Notice.</li>
<li>We will process your personal data on the basis of our legitimate interest, for the following purposes:
<ul class="wp-block-list">
<li>To manage the contractual relationship entered into with your employer, by which you have access to the Site;</li>
<li>To manage the Site, including the protection of the security and/or integrity of the Site and our IT infrastructure;</li>
<li>To deal with your enquiries and requests;</li>
<li>To understand how you use our Services and to enable us to improve and further develop the features, performance and support available on the Site, which may entail the provision of anonymous statistical information about our visitors (however, without it being used to identify any individual user);</li>
<li>To contact you with promotional e-mails relating to products and services offered by ContexQ, unless you have expressly manifested your desire to opt out of such communications, or we are otherwise legally prevented from doing so; and</li>
<li>For internal administrative purposes with regard to ContexQ.</li>
</ul>
</li>
</ol>
<p class="wp-block-paragraph">Where ContexQ processes personal data in fulfillment of its own legitimate interests, it shall always balance such interests against the data subjects’ fundamental rights and freedoms, and implement robust safeguards to ensure that their privacy is protected accordingly. You may obtain information on the balancing test upon request.</p>
<ol start="3" class="wp-block-list">
<li>We will process your personal data in order to comply with Singapore laws, which may include the disclosure of your personal data and other complementary information to comply with requests received from Singapore authorities and/or bodies with compelling power.</li>
</ol>
<p class="wp-block-paragraph"><strong>How do we share your personal data and with whom?</strong></p>
<p class="wp-block-paragraph">ContexQ will be able to share your personal data with service providers. Our service providers support our IT infrastructure and other services and may need to access and process your data on our behalf, to the extent necessary to provide the service. For more information on the appropriate safeguards in place, please contact us at the details above.</p>
<p class="wp-block-paragraph"><strong>For how long do we store your personal data?</strong></p>
<p class="wp-block-paragraph">We will keep your personal data for as long as we have a relationship with you and insofar as the agreement with your employer is in force. Afterwards, we will retain your personal data for a period of time that enables us to defend ourselves against potential legal and contractual actions (during their expiration period). Finally, once these actions expire, we will proceed to delete your information. Notwithstanding the above, logs will be retained for one (1) year for security purposes.</p>
<p class="wp-block-paragraph"><strong>What rights do you have over your personal data?</strong></p>
<p class="wp-block-paragraph">You have certain rights regarding your personal data. These include the following rights:</p>
<ul class="wp-block-list">
<li>To know how we are processing your personal data and to access your personal data held by ContexQ;</li>
<li>To request the rectification of inaccurate or incomplete personal data;</li>
<li>To request the erasure of your personal data when, among other circumstances, such data is no longer necessary for the initial purposes for which it was initially collected, in accordance with applicable law;</li>
<li>To restrict our processing of your personal data, under certain circumstances (in which case we will only retain the personal data for the exercise and/or defence of ContexQ's rights);</li>
<li>To object to our processing of your personal data, having regard to the given circumstances and for reasons related to your particular situation (in which case we will only retain the personal data for imperative legitimate reasons or the exercise and/or defence of ContexQ's rights);</li>
<li>To request the portability of your personal data, which will allow you to obtain and reuse the personal data in a usable electronic format for your own purposes and across different services without hindrance to usability, including its transmission to another third party;</li>
<li>To withdraw the consent you may have granted to a specific processing activity, at any time; and</li>
<li>To make a complaint to the Personal Data Protection Commission (PDPC) of Singapore.</li>
</ul>
<p class="wp-block-paragraph">In order to exercise any of these rights, please send a letter or an e-mail using any of the postal or email addresses included in Section 2.</p>`;

  return (
    <div className="bg-[#0d1526] min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="mb-12 pb-8 border-b border-cyan-400/30">
            <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
            <p className="text-gray-400 text-sm">Last updated: May 2026</p>
          </div>

          {/* Content with custom styling */}
          <style>{`
            .privacy-content p {
              color: #d1d5db;
              line-height: 1.8;
              margin-bottom: 1.25rem;
            }

            .privacy-content strong {
              color: #06b6d4;
              font-weight: 600;
            }

            .privacy-content h2 {
              color: #06b6d4;
              font-size: 1.5rem;
              font-weight: 600;
              margin-top: 2rem;
              margin-bottom: 1rem;
              padding-bottom: 0.75rem;
              border-bottom: 2px solid rgba(6, 182, 212, 0.2);
            }

            .privacy-content ul {
              list-style-type: disc;
              margin: 1.5rem 0 1.5rem 2.5rem;
              display: block;
            }

            .privacy-content ol {
              list-style-type: decimal;
              margin: 1.5rem 0 1.5rem 2.5rem;
              display: block;
            }

            .privacy-content li {
              color: #d1d5db;
              margin-bottom: 0.75rem;
              line-height: 1.7;
              display: list-item;
              margin-left: 0.5rem;
            }

            .privacy-content ul ul {
              list-style-type: circle;
              margin: 0.75rem 0 0.75rem 2rem;
              display: block;
            }

            .privacy-content ol ol {
              list-style-type: lower-alpha;
              margin: 0.75rem 0 0.75rem 2rem;
              display: block;
            }

            .privacy-content ul ul li, .privacy-content ol ol li {
              color: #9ca3af;
              font-size: 0.95rem;
              display: list-item;
            }

            .privacy-content a {
              color: #06b6d4;
              text-decoration: none;
              transition: all 0.3s ease;
            }

            .privacy-content a:hover {
              color: #22d3ee;
              text-decoration: underline;
            }

            .privacy-content table {
              width: 100%;
              border-collapse: collapse;
              margin: 2rem 0;
              background: rgba(6, 182, 212, 0.05);
              border: 1px solid rgba(6, 182, 212, 0.2);
              border-radius: 0.5rem;
              overflow: hidden;
            }

            .privacy-content table td {
              padding: 1rem;
              border-bottom: 1px solid rgba(6, 182, 212, 0.1);
              color: #d1d5db;
            }

            .privacy-content table td:first-child {
              background: rgba(6, 182, 212, 0.1);
              font-weight: 600;
              color: #06b6d4;
              width: 30%;
            }

            .privacy-content table tr:last-child td {
              border-bottom: none;
            }

            .privacy-content figure {
              margin: 2rem 0;
            }
          `}</style>

          <div className="privacy-content">
            <div dangerouslySetInnerHTML={{ __html: privacyContent }} />
          </div>

          {/* Contact CTA */}
          <div className="mt-16 pt-8 border-t border-cyan-400/30">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Questions?</h3>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <a
                href="mailto:inquiry@contexq.com"
                className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                inquiry@contexq.com
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
