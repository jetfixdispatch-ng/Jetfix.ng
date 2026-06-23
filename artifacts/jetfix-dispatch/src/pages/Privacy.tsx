import React from "react";
import LegalLayout from "./LegalLayout";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-white font-[Space_Grotesk] mb-4 pb-2 border-b border-white/10">{title}</h2>
      <div className="space-y-3 text-white/75">{children}</div>
    </section>
  );
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-white/90 mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="January 1, 2026">
      <Section title="1. Introduction">
        <p>
          JetFix Dispatch ("we," "our," or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our website and technician dispatch platform (the "Platform").
        </p>
        <p>
          This Privacy Policy is compliant with the Nigeria Data Protection Regulation (NDPR) 2019 and the Nigeria Data Protection Act (NDPA) 2023. By using JetFix Dispatch, you consent to the data practices described in this policy.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <Sub title="2.1 Information You Provide Directly">
          <p>When you use JetFix Dispatch, you may provide us with:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-white/90">Identity Data:</strong> Full name, phone number, and email address.</li>
            <li><strong className="text-white/90">Location Data:</strong> Your street address or GPS coordinates (if you permit location access) within Abuja, FCT.</li>
            <li><strong className="text-white/90">Service Data:</strong> Nature of your technical issue, service type requested, and any additional details provided in your dispatch request.</li>
            <li><strong className="text-white/90">Communication Data:</strong> Any messages, feedback, or correspondence you send to us via WhatsApp, email, or our Platform.</li>
          </ul>
        </Sub>
        <Sub title="2.2 Information We Collect Automatically">
          <p>When you access our Platform, we may automatically collect:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>IP address and device information.</li>
            <li>Browser type and version.</li>
            <li>Pages visited and time spent on each page.</li>
            <li>Referring URLs.</li>
            <li>General geographic location (city/region level).</li>
          </ul>
        </Sub>
        <Sub title="2.3 Location Data">
          <p>
            If you use our location auto-detection feature, we temporarily access your device's GPS coordinates via your browser to identify your street address. We do not store raw GPS coordinates beyond the duration of your service request. All location data is processed securely and only used to dispatch a technician to your location.
          </p>
        </Sub>
      </Section>

      <Section title="3. How We Use Your Information">
        <p>We use the personal information we collect to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Process and manage your technician dispatch requests.</li>
          <li>Match you with the most appropriate available technician in Abuja, FCT.</li>
          <li>Communicate with you about your service request via WhatsApp, phone, or email.</li>
          <li>Improve the quality and performance of our Platform and services.</li>
          <li>Send you service updates, confirmations, and follow-up messages.</li>
          <li>Investigate complaints and disputes related to our services.</li>
          <li>Comply with applicable Nigerian laws and regulatory obligations.</li>
          <li>Protect the safety and security of our clients and technicians.</li>
        </ul>
        <p className="mt-3">
          We will never use your personal information for purposes incompatible with those stated above without your explicit consent.
        </p>
      </Section>

      <Section title="4. Sharing Your Information">
        <Sub title="4.1 With Technicians">
          <p>
            When a dispatch request is confirmed, we share your name, phone number, and service location with the matched technician solely for the purpose of completing the service. Technicians are bound by our Technician Agreement and are prohibited from using your data for any other purpose.
          </p>
        </Sub>
        <Sub title="4.2 With Service Providers">
          <p>
            We may share your data with trusted third-party service providers who assist us in operating our Platform (e.g., hosting, SMS delivery, reverse geocoding services). These providers are contractually obligated to protect your data and use it only as directed by JetFix Dispatch.
          </p>
        </Sub>
        <Sub title="4.3 Legal Obligations">
          <p>
            We may disclose your personal information if required to do so by law, court order, or a government authority under the laws of the Federal Republic of Nigeria, including but not limited to the Nigerian Communications Commission or law enforcement agencies.
          </p>
        </Sub>
        <Sub title="4.4 No Sale of Data">
          <p>
            JetFix Dispatch does not sell, rent, or trade your personal information to any third party for marketing or commercial purposes.
          </p>
        </Sub>
      </Section>

      <Section title="5. Data Retention">
        <p>
          We retain your personal data for as long as necessary to fulfil the purposes outlined in this Policy and to comply with our legal obligations. Service request records are retained for a period of 24 months. You may request the deletion of your data at any time (see Section 7: Your Rights).
        </p>
      </Section>

      <Section title="6. Data Security">
        <p>
          We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These measures include:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>HTTPS encryption for all Platform communications.</li>
          <li>Restricted access to personal data on a need-to-know basis.</li>
          <li>Regular security assessments of our systems.</li>
        </ul>
        <p className="mt-3">
          While we take every reasonable precaution to protect your data, no method of internet transmission or electronic storage is 100% secure. In the event of a data breach that affects your personal information, we will notify affected users as required under the NDPA 2023.
        </p>
      </Section>

      <Section title="7. Your Rights Under NDPR/NDPA">
        <p>Under Nigerian data protection law, you have the following rights regarding your personal data:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong className="text-white/90">Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong className="text-white/90">Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
          <li><strong className="text-white/90">Right to Erasure:</strong> Request deletion of your personal data, subject to legal retention obligations.</li>
          <li><strong className="text-white/90">Right to Object:</strong> Object to the processing of your data for specific purposes.</li>
          <li><strong className="text-white/90">Right to Data Portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
          <li><strong className="text-white/90">Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time, without affecting the lawfulness of prior processing.</li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, contact us at <span className="text-primary">jetfixdispatch.ng@gmail.com</span> or via WhatsApp at +234 902 611 5454.
        </p>
      </Section>

      <Section title="8. Cookies and Tracking">
        <p>
          Our Platform uses minimal cookies and local browser storage to improve your experience, such as remembering form input preferences. We do not use tracking cookies for advertising purposes. You can disable cookies in your browser settings, though this may affect certain features of the Platform.
        </p>
      </Section>

      <Section title="9. Third-Party Links">
        <p>
          Our Platform may contain links to third-party websites (e.g., WhatsApp, social media profiles). JetFix Dispatch is not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>
      </Section>

      <Section title="10. Children's Privacy">
        <p>
          JetFix Dispatch does not knowingly collect personal information from individuals under the age of 18. If you believe we have inadvertently collected data from a minor, please contact us immediately and we will delete the information promptly.
        </p>
      </Section>

      <Section title="11. Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. Updates will be posted on this page with a revised "Last Updated" date. Continued use of the Platform after any update constitutes your acceptance of the revised Policy.
        </p>
      </Section>

      <Section title="12. Contact Us">
        <p>For privacy-related queries, complaints, or to exercise your data rights, please contact:</p>
        <ul className="list-none space-y-1 mt-2">
          <li><span className="text-white/50">Data Controller:</span> JetFix Dispatch</li>
          <li><span className="text-white/50">Email:</span> jetfixdispatch.ng@gmail.com</li>
          <li><span className="text-white/50">WhatsApp:</span> +234 902 611 5454</li>
          <li><span className="text-white/50">Address:</span> Abuja, Federal Capital Territory, Nigeria</li>
        </ul>
      </Section>
    </LegalLayout>
  );
}
