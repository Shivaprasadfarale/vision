/**
 * Legal pages (legal notice, privacy policy): title, sticky table of contents and
 * sections. Each section's title doubles as its anchor id. Bodies are rich HTML.
 * Keyed by "<page>/<section-index>".
 */
export type LegalSection = { title: string; body: string };
export type LegalPageProps = { title: string; sections: LegalSection[] };

export const legalPage: Record<string, LegalPageProps> = {
  "legal-notice/01": {
    title: "Legal Notice",
    sections: [
      {
        title: "Website Publisher",
        body: `
          <p>This website is published by:</p>
          <p> RONNSQUARE<br> Share capital: €1,000,000.00<br> RCS PARIS: 444 996 268<br> SIRET : 44499626800033<br> EU VAT number: FR29444996268 </p>
          <p> Registered office:<br> 25 rue du 4 Septembre<br> 75002 Paris – France </p>
          <p>Publication Director: Daniel Roncoroni</p>
        `,
      },
      {
        title: "Web Hosting",
        body: `
          <p>This website is hosted by:</p>
          <p>
          <a href="https://www.o2switch.fr?utm_source=chatgpt.com">o2switch</a><br> 222 Boulevard Gustave Flaubert<br> 63000 Clermont-Ferrand – France </p>
        `,
      },
      {
        title: "Website Design and Management",
        body: `
          <p>This website was created and is managed by:</p>
          <p> Colibrity Agency<br> Website: <strong><a href="https://colibrity.com/">colibrity.com</a></strong>
          </p>
        `,
      },
      {
        title: "Third-Party Tools and Services",
        body: `
          <p>This website uses the following third-party tools:</p>
          <ul>
          <li> Google Analytics – audience analytics tool (Google LLC, United States)audience analytics tool (Google LLC, United States)<br> • Google Tag Manager – tag management system (Google LLC, United States)<br> • Microsoft Clarity – outil dbehavioural analytics tool (Microsoft Corporation, United States)<br> • Axeptio – cookie consent management platform (Axeptio SAS, France) </li>
          </ul>
          <p> These tools are governed by their own privacy policies. User consent is collected via Axeptio in compliance with the GDPR prior to any non-essential cookie being placed. </p>
        `,
      },
      {
        title: "Intellectual Property",
        body: `
          <p> All content on this website (text, images, videos, logos, graphics, documents and visual elements) is the exclusive property of Ronnsquare or its partners. </p>
          <p>Any reproduction, distribution or use, in whole or in part, without prior written authorisation is strictly prohibited.</p>
        `,
      },
      {
        title: "Liability",
        body: `
          <p> Ronnsquare makes every effort to ensure the accuracy of the information published on this website. However, no guarantee is given as to its completeness or continuous updating. </p>
          <p> Ronnsquare shall not be held liable for any direct or indirect damages arising from the use of this website<strong>.</strong>
          </p>
        `,
      },
    ],
  },
  "privacy-policy/01": {
    title: "Privacy Policy",
    sections: [
      {
        title: "1. Data Controller",
        body: `
          <p>The data controller for personal data collected through this website is:</p>
          <p> RONNSQUARE<br> Share capital: €1,000,000.00<br> RCS PARIS: 444 996 268<br> SIRET: 44499626800033<br> 25 rue du 4 Septembre, 75002 Paris – France<br> Email: <strong><a href="mailto:contact@ronnsquare.com">contact@ronnsquare.com</a></strong><br> Tel: <strong><a href="tel:01 83 68 00 04">01 83 68 00 04</a></strong>
          </p>
        `,
      },
      {
        title: "2. Personal Data Collected",
        body: `
          <p>We collect the following data:</p>
          <ul>
          <li>Via contact forms: first name, last name, email address, phone number, message.</li>
          <li> Browsing data: IP address, pages visited, session duration, browser and device type (via Google Analytics and Microsoft Clarity). </li>
          <li>Behavioural data: session recordings and heatmaps (via Microsoft Clarity, with consent).</li>
          <li>Cookie preferences: consent recorded via Axeptio.</li>
          </ul>
        `,
      },
      {
        title: "3. Purposes and Legal Bases",
        body: `
          <p>Your data is processed for the following purposes:</p>
          <p><strong>Processing contact requests</strong> – Legal basis: legitimate interest / pre-contractual execution.</p>
          <p><strong>Audience analysis and website improvement</strong> (Google Analytics, Microsoft Clarity) – Legal basis: consent.</p>
          <p><strong>Marketing and analytics tag management</strong> (Google Tag Manager) – Legal basis: consent.</p>
          <p><strong>Cookie consent management</strong> (Axeptio) – Legal basis: legal obligation (GDPR, ePrivacy Directive).</p>
        `,
      },
      {
        title: "4. Cookies and Similar Technologies",
        body: `
          <p> This website uses cookies. On your first visit, a consent banner managed by Axeptio allows you to accept or decline non-essential cookies. </p>
          <p><strong>Cookies in use:</strong></p>
          <ul>
          <li>Strictly necessary cookies: website operation, consent preference storage (Axeptio). No consent required.</li>
          <li> Analytics cookies – Google Analytics: audience measurement and traffic statistics (Google LLC, United States). Consent required. </li>
          <li> Tag management cookies – Google Tag Manager: conditional script activation based on consent (Google LLC). Consent required. </li>
          <li> Behavioural cookies – Microsoft Clarity: session recordings and heatmaps (Microsoft Corporation, United States). Consent required. </li>
          </ul>
          <p>You may update your cookie preferences at any time by clicking <a href="#cookies">this link</a>.</p>
        `,
      },
      {
        title: "5. International Data Transfers",
        body: `
          <p> Some providers (Google LLC, Microsoft Corporation) are based in the United States. These transfers are governed by the European Commission’s Standard Contractual Clauses and/or the EU-US Data Privacy Framework. Axeptio is a French provider; consent data remains within the European Union. </p>
        `,
      },
      {
        title: "6. Data Retention",
        body: `
          <ul>
          <li>Contact data: 3 years from the last contact.</li>
          <li>Analytics data (Google Analytics): up to 26 months.</li>
          <li>Session recordings (Microsoft Clarity): 30 days.</li>
          <li>Cookie consent (Axeptio): 13 months.</li>
          </ul>
        `,
      },
      {
        title: "7. Your Rights",
        body: `
          <p>In accordance with the GDPR (Regulation (EU) 2016/679), you have the following rights:</p>
          <ul>
          <li>Right of access to your personal data.</li>
          <li>Right to rectification of inaccurate or incomplete data.</li>
          <li>Right to erasure (“right to be forgotten”).</li>
          <li>Right to restriction of processing.</li>
          <li>Right to object to processing.</li>
          <li>Right to data portability.</li>
          <li> Right to withdraw consent at any time, without affecting the lawfulness of processing carried out prior to withdrawal. </li>
          </ul>
          <p>To exercise your rights, please contact us:</p>
          <ul>
          <li> By email: <strong><a href="mailto:contact@ronnsquare.com">contact@ronnsquare.com</a></strong>
          </li>
          <li>By post: RONNSQUARE, 25 rue du 4 Septembre, 75002 Paris – France</li>
          </ul>
          <p>You also have the right to lodge a complaint with the CNIL (French data protection authority): www.cnil.fr</p>
        `,
      },
      {
        title: "8. Website Design and Management",
        body: `
          <p> This website was designed and is managed by Colibrity Agency (colibrity.com). As a technical service provider, Colibrity Agency acts as a data processor within the meaning of the GDPR and processes data solely in accordance with RONNSQUARE’s instructions. </p>
        `,
      },
      {
        title: "9. Security",
        body: `
          <p> We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss, accidental destruction or disclosure. The website is hosted by o2switch (Clermont-Ferrand, France), a certified hosting provider subject to French law. </p>
        `,
      },
      {
        title: "10. Updates to this Policy",
        body: `
          <p> We reserve the right to update this Privacy Policy at any time, in particular to comply with changes in law or our data practices. The date of the last update is shown at the top of this document. </p>
          <p><strong>Contact</strong></p>
          <p>
          <a href="tel:01 83 68 00 04"><strong>01 83 68 00 04</strong></a>
          </p>
          <p>
          <a href="mailto:contact@ronnsquare.com"><strong>contact@ronnsquare.com</strong></a>
          </p>
          <p><strong>25 rue du 4 Septembre – 75002 Paris</strong></p>
        `,
      },
    ],
  },
};
