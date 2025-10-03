
import React from 'react';
import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.privacyContainer}>
      <header className={styles.header}>
        <h1>Privacy Policy</h1>
        <p className={styles.effectiveDate}>Effective Date: October 3, 2025</p>
      </header>

      <section className={styles.section}>
        <p>
          At Neuro Lift.Ai, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our web application (the “Service”). By accessing or using the Service, you agree to the terms described in this policy. If you do not agree, please discontinue use of the Service.
        </p>
      </section>

      <section className={styles.section}>
        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information when you interact with the Service:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Information you provide when registering or logging in, such as your name, email address, and profile picture, obtained through third-party authentication services (e.g., Google, Facebook, GitHub).
          </li>
          <li>
            <strong>Usage Data:</strong> Information about your interactions with the Service, including pages visited, features used, time spent, and other activity metrics.
          </li>
          <li>
            <strong>Technical Data:</strong> Information about your device and connection, such as IP address, browser type, operating system, device identifiers, and network information.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>2. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Provide, operate, and maintain the Service.</li>
          <li>Personalize your experience and enhance the Service’s functionality and performance.</li>
          <li>Communicate with you, including sending service-related updates, responding to inquiries, and, with your consent, delivering promotional content.</li>
          <li>Monitor and analyze usage trends to improve the Service.</li>
          <li>Ensure the security of the Service, prevent fraud, and comply with applicable laws and regulations.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>3. Sharing and Disclosure of Information</h2>
        <p>We do not sell, rent, or trade your personal information. We may share your information in the following cases:</p>
        <ul>
          <li>
            <strong>Service Providers:</strong> With trusted third-party service providers who assist in operating the Service (e.g., hosting, analytics), under strict confidentiality agreements.
          </li>
          <li>
            <strong>Legal Obligations:</strong> When required to comply with applicable laws, regulations, or legal processes, or to protect the rights, property, or safety of Neuro Lift.Ai, our users, or others.
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, where your information may be transferred with appropriate safeguards.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>4. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies, web beacons, and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You may manage cookie preferences through your browser settings, but disabling cookies may affect the Service’s functionality.
        </p>
      </section>

      <section className={styles.section}>
        <h2>5. Data Retention</h2>
        <p>
          We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law. When no longer needed, we securely delete or anonymize your data.
        </p>
      </section>

      <section className={styles.section}>
        <h2>6. Data Security</h2>
        <p>
          We implement industry-standard security measures, including encryption and access controls, to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className={styles.section}>
        <h2>7. Your Privacy Rights</h2>
        <p>Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
        <ul>
          <li><strong>Access:</strong> Request access to the personal data we hold about you.</li>
          <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
          <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal requirements.</li>
          <li><strong>Restriction:</strong> Request restriction of data processing in certain circumstances.</li>
          <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
          <li><strong>Objection:</strong> Object to the processing of your data for specific purposes, such as marketing.</li>
          <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time, where applicable.</li>
        </ul>
        <p>
          To exercise these rights, please contact us at <a href="mailto:privacy@neurolift.ai">privacy@neurolift.ai</a>. We will respond within the timeframes required by applicable law.
        </p>
      </section>

      <section className={styles.section}>
        <h2>8. Third-Party Services</h2>
        <p>
          The Service integrates with third-party authentication providers (e.g., Google, Facebook, GitHub). These providers have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of these third parties.
        </p>
      </section>

      <section className={styles.section}>
        <h2>9. International Data Transfers</h2>
        <p>
          Your information may be processed in countries outside your country of residence, including the United States. We ensure that such transfers comply with applicable data protection laws, using mechanisms such as Standard Contractual Clauses where required.
        </p>
      </section>

      <section className={styles.section}>
        <h2>10. Children’s Privacy</h2>
        <p>
          The Service is not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected data from a child, please contact us immediately at <a href="mailto:privacy@neurolift.ai">privacy@neurolift.ai</a>.
        </p>
      </section>

      <section className={styles.section}>
        <h2>11. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of significant changes via the Service or by email (if provided). Your continued use of the Service after such changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section className={styles.section}>
        <h2>12. Contact Us</h2>
        <p>
          If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:privacy@neurolift.ai">privacy@neurolift.ai</a><br />
          <strong>Address:</strong> Neuro Lift.Ai, 123 Innovation Drive, Tech City, TC 12345, USA
        </p>
      </section>
    </div>
  );
}
