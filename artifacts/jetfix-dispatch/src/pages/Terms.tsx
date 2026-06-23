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

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="January 1, 2026">
      <Section title="1. Introduction">
        <p>
          Welcome to JetFix Dispatch ("JetFix," "we," "our," or "us"). JetFix Dispatch is a technician dispatch platform operated in Abuja, Federal Capital Territory (FCT), Nigeria, that connects verified technical service professionals — including licensed electricians, generator mechanics, and solar/inverter experts — with clients who require on-demand technical repair and maintenance services.
        </p>
        <p>
          By accessing or using the JetFix Dispatch website (the "Platform"), you agree to be bound by these Terms of Service ("Terms"). Please read them carefully. If you do not agree to these Terms, you may not use the Platform.
        </p>
        <p>
          These Terms constitute a legally binding agreement between you and JetFix Dispatch and are governed by the laws of the Federal Republic of Nigeria.
        </p>
      </Section>

      <Section title="2. Eligibility">
        <p>You must be at least 18 years of age to use the JetFix Dispatch Platform. By using the Platform, you represent and warrant that:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>You are 18 years of age or older.</li>
          <li>You have the legal capacity to enter into binding contracts under Nigerian law.</li>
          <li>You are accessing the Platform from within the FCT, Abuja, or for services to be rendered within the FCT.</li>
          <li>All information you provide is accurate, current, and complete.</li>
        </ul>
      </Section>

      <Section title="3. Description of Services">
        <p>JetFix Dispatch provides an on-demand technician dispatch platform that enables:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Clients to submit service requests for electrical repairs, generator servicing, solar/inverter installation and diagnostics.</li>
          <li>JetFix to match clients with a vetted, verified technician in their area within Abuja, FCT.</li>
          <li>Clients to receive prompt dispatch confirmation and technician arrival updates.</li>
        </ul>
        <p className="mt-3">
          JetFix Dispatch does not directly provide technical repair services. We are a dispatch and matching platform. The technicians dispatched through our platform are independent contractors, not employees or agents of JetFix Dispatch. JetFix exercises quality control and vetting over technicians but is not liable for the outcome of technical services rendered.
        </p>
      </Section>

      <Section title="4. User Accounts and Registration">
        <Sub title="4.1 Account Creation">
          <p>To access certain features of the Platform, you may be required to provide contact information including your name, phone number, and address. You are responsible for maintaining the confidentiality of your account credentials.</p>
        </Sub>
        <Sub title="4.2 Accuracy of Information">
          <p>You agree to provide accurate and complete information when submitting a service request, including your correct location within Abuja, FCT, the nature of the technical issue, and valid contact information.</p>
        </Sub>
        <Sub title="4.3 Account Termination">
          <p>JetFix Dispatch reserves the right to suspend or terminate your access to the Platform at any time, without notice, if we believe you have violated these Terms or misused the Platform.</p>
        </Sub>
      </Section>

      <Section title="5. Booking and Dispatch">
        <Sub title="5.1 Service Requests">
          <p>When you submit a service request on JetFix Dispatch, you are initiating a dispatch request. JetFix will attempt to match your request with the nearest available and most qualified verified technician for your specific issue.</p>
        </Sub>
        <Sub title="5.2 Dispatch Confirmation">
          <p>A service request does not constitute a guaranteed booking until confirmed by JetFix Dispatch via WhatsApp, phone call, or on-platform notification. Availability of technicians may vary.</p>
        </Sub>
        <Sub title="5.3 Cancellation">
          <p>Clients may cancel a dispatch request prior to the technician's departure. Repeated cancellations without reasonable cause may result in account suspension.</p>
        </Sub>
        <Sub title="5.4 Emergency Dispatch">
          <p>Emergency dispatch requests are treated with priority. JetFix Dispatch targets a response time of under 15 minutes for emergency requests within Abuja, FCT. Response times may vary based on technician availability and distance.</p>
        </Sub>
      </Section>

      <Section title="6. Fees and Payment">
        <p>
          Service fees are determined based on the nature of the repair, labour costs, and materials used. Clients will be provided with a fee estimate before or upon the technician's arrival. Final fees are confirmed after the technician assesses the scope of work.
        </p>
        <p>
          JetFix Dispatch may charge a platform service fee or dispatch coordination fee in addition to the technician's labour charges. All fees will be communicated transparently. JetFix Dispatch does not accept liability for overcharging or pricing disputes between the client and technician beyond its mediation role.
        </p>
      </Section>

      <Section title="7. Technician Conduct and Liability">
        <p>
          All technicians on the JetFix Dispatch network have been vetted, identity-verified, and background-checked. However, JetFix Dispatch is not liable for:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Any damage to property resulting from a technician's service, except where demonstrably caused by negligence on the part of a JetFix-dispatched technician.</li>
          <li>Losses arising from delays in service delivery.</li>
          <li>The accuracy of any diagnostic assessment made by a dispatched technician.</li>
        </ul>
        <p className="mt-3">
          If you experience an issue with a technician, you must report it to JetFix Dispatch within 24 hours of the service by contacting us via WhatsApp or email. JetFix Dispatch will investigate and mediate disputes at its sole discretion.
        </p>
      </Section>

      <Section title="8. User Conduct">
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use the Platform for any unlawful purpose or in violation of Nigerian law.</li>
          <li>Harass, threaten, or abuse any technician dispatched through JetFix Dispatch.</li>
          <li>Provide false location or issue information to obtain a dispatch.</li>
          <li>Circumvent JetFix Dispatch by directly contracting a dispatched technician outside the platform to avoid platform fees.</li>
          <li>Interfere with the operation of the Platform or its associated systems.</li>
        </ul>
        <p className="mt-3">
          Violation of these terms may result in immediate suspension of your access and, where applicable, legal action.
        </p>
      </Section>

      <Section title="9. Intellectual Property">
        <p>
          All content on the JetFix Dispatch Platform, including the name, logo, design, text, graphics, and software, is the intellectual property of JetFix Dispatch or its licensors and is protected under Nigerian copyright law. You may not reproduce, copy, distribute, or create derivative works from any content on the Platform without prior written permission from JetFix Dispatch.
        </p>
      </Section>

      <Section title="10. Limitation of Liability">
        <p>
          To the fullest extent permitted by applicable Nigerian law, JetFix Dispatch, its directors, employees, partners, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, or goodwill — arising from your use of or inability to use the Platform or our services.
        </p>
        <p>
          Our total aggregate liability to you for any claim arising from or related to the use of our services shall not exceed the total platform fee paid by you in the 30 days preceding the claim.
        </p>
      </Section>

      <Section title="11. Governing Law and Disputes">
        <p>
          These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any dispute arising from or relating to these Terms shall first be submitted to good-faith negotiation between the parties. Failing resolution within 30 days, disputes shall be subject to the exclusive jurisdiction of the courts of the Federal Capital Territory, Abuja, Nigeria.
        </p>
      </Section>

      <Section title="12. Changes to These Terms">
        <p>
          JetFix Dispatch reserves the right to update or modify these Terms at any time. Changes will be effective immediately upon posting to the Platform. Continued use of the Platform following any such changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms regularly.
        </p>
      </Section>

      <Section title="13. Contact Us">
        <p>If you have any questions about these Terms of Service, please contact us:</p>
        <ul className="list-none space-y-1 mt-2">
          <li><span className="text-white/50">Email:</span> jetfixdispatch.ng@gmail.com</li>
          <li><span className="text-white/50">WhatsApp:</span> +234 902 611 5454</li>
          <li><span className="text-white/50">Address:</span> Abuja, Federal Capital Territory, Nigeria</li>
        </ul>
      </Section>
    </LegalLayout>
  );
}
