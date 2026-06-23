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

export default function TechnicianAgreement() {
  return (
    <LegalLayout title="Technician Agreement" lastUpdated="January 1, 2026">
      <div className="p-5 rounded-xl bg-secondary/10 border border-secondary/30 text-sm text-white/80">
        <strong className="text-secondary">Important Notice:</strong> This Technician Agreement ("Agreement") is a legally binding contract between you ("Technician," "you," or "your") and JetFix Dispatch ("JetFix," "we," or "us"). By applying to join and operating on the JetFix Dispatch network, you agree to be fully bound by this Agreement. Please read it carefully before proceeding.
      </div>

      <Section title="1. Nature of Relationship">
        <p>
          JetFix Dispatch is a technician dispatch and matching platform. You are engaged as an <strong className="text-white/90">independent contractor</strong>, not as an employee, partner, agent, or franchise of JetFix Dispatch. Nothing in this Agreement shall be construed to create an employer-employee relationship between you and JetFix Dispatch.
        </p>
        <p>
          As an independent contractor, you are solely responsible for all applicable taxes, levies, and social contributions on income earned through the JetFix Dispatch platform, in accordance with the laws of the Federal Republic of Nigeria.
        </p>
      </Section>

      <Section title="2. Eligibility and Onboarding Requirements">
        <p>To join and remain on the JetFix Dispatch network, you must:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Be at least 18 years of age at the time of application.</li>
          <li>Reside in or be able to operate within Abuja, Federal Capital Territory, Nigeria.</li>
          <li>Hold verifiable technical qualifications or demonstrated competency in at least one of the following: electrical installations and repairs, generator servicing and repair, or solar/inverter systems.</li>
          <li>Provide a valid government-issued ID (National ID, Voter's Card, Driver's Licence, or International Passport).</li>
          <li>Submit to and pass a background verification and identity check conducted by JetFix Dispatch or its authorised verification partner.</li>
          <li>Provide two contactable professional references.</li>
          <li>Maintain a functional mobile phone with reliable mobile internet access at all times during active hours on the platform.</li>
        </ul>
        <p className="mt-3">
          JetFix Dispatch reserves the right to decline any application or revoke network membership at its sole discretion, including if any submitted information is found to be false or misleading.
        </p>
      </Section>

      <Section title="3. Verified Badge and Profile">
        <Sub title="3.1 JetFix Verified Status">
          <p>
            Upon successful completion of onboarding, you will receive a "JetFix Verified" badge on your technician profile. This badge signifies that you have met JetFix's vetting standards at the time of onboarding. The badge does not constitute an endorsement of your technical services by JetFix Dispatch.
          </p>
        </Sub>
        <Sub title="3.2 Maintaining Verified Status">
          <p>
            Your verified status may be reviewed, suspended, or revoked if you receive sustained negative client ratings, violate this Agreement, or if your submitted credentials are found to have lapsed or been falsified. JetFix Dispatch may require periodic re-verification.
          </p>
        </Sub>
      </Section>

      <Section title="4. Service Standards and Code of Conduct">
        <p>As a JetFix Dispatch technician, you agree at all times to:</p>
        <Sub title="4.1 Professionalism">
          <ul className="list-disc pl-6 space-y-1">
            <li>Arrive at the client's location within the agreed or estimated dispatch time.</li>
            <li>Dress presentably and maintain a clean, professional appearance.</li>
            <li>Introduce yourself to the client by name and confirm your JetFix Dispatch affiliation.</li>
            <li>Carry and use only appropriate, safe, and functional tools and equipment.</li>
            <li>Treat all clients, their families, and their property with respect and dignity.</li>
          </ul>
        </Sub>
        <Sub title="4.2 Quality of Work">
          <ul className="list-disc pl-6 space-y-1">
            <li>Perform all services to a professional standard consistent with industry best practices in Nigeria.</li>
            <li>Provide an honest and accurate diagnosis of the technical issue before commencing work.</li>
            <li>Obtain the client's informed consent before undertaking any repair work or incurring materials costs.</li>
            <li>Not perform unnecessary work or recommend unnecessary parts to inflate service charges.</li>
          </ul>
        </Sub>
        <Sub title="4.3 Prohibited Conduct">
          <p>You must never:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Engage in any form of harassment, intimidation, or physical altercation with a client.</li>
            <li>Charge a client more than the agreed or estimated fee without transparent justification and client consent.</li>
            <li>Enter any area of a client's property beyond what is required to perform the service.</li>
            <li>Use the client's personal information for any purpose other than completing the dispatched service.</li>
            <li>Represent yourself as an employee or permanent staff of JetFix Dispatch.</li>
            <li>Report under the influence of alcohol or controlled substances.</li>
          </ul>
        </Sub>
      </Section>

      <Section title="5. Dispatch and Availability">
        <Sub title="5.1 Accepting Dispatches">
          <p>
            You are free to set your own working hours and accept or decline dispatch requests at your discretion. However, repeated or unexplained rejection of dispatches during declared active hours may affect your dispatch priority and network standing.
          </p>
        </Sub>
        <Sub title="5.2 Response Time">
          <p>
            For non-emergency dispatches, you are expected to confirm and commence travel to the client within 10 minutes of accepting a request. For emergency dispatches, you must arrive at the client location within 15 minutes where geographically feasible within Abuja, FCT.
          </p>
        </Sub>
        <Sub title="5.3 Cancellation Policy">
          <p>
            If you are unable to fulfil a confirmed dispatch, you must notify JetFix Dispatch immediately so an alternative technician can be arranged. Repeated last-minute cancellations after confirmation will negatively affect your network standing and may result in suspension.
          </p>
        </Sub>
      </Section>

      <Section title="6. Fees, Earnings, and Payment">
        <Sub title="6.1 Platform Commission">
          <p>
            JetFix Dispatch charges a platform commission on each completed job facilitated through the network. The applicable commission rate will be communicated to you during onboarding and may be updated with 14 days' notice. The commission covers dispatch coordination, platform maintenance, client acquisition, and marketing.
          </p>
        </Sub>
        <Sub title="6.2 Payment Schedule">
          <p>
            Earnings (net of commission) are disbursed on a weekly basis directly to your registered Nigerian bank account, on every Friday for jobs completed in the preceding week. JetFix Dispatch is not responsible for delays caused by banking system downtime or incorrect account details provided by the technician.
          </p>
        </Sub>
        <Sub title="6.3 Pricing Transparency">
          <p>
            You are expected to maintain fair and transparent pricing. JetFix Dispatch may establish suggested pricing guidelines for common services. Any fees charged to a client must be agreed upon before work commences. Post-job price disputes raised by clients may result in JetFix withholding payment pending resolution.
          </p>
        </Sub>
      </Section>

      <Section title="7. Ratings and Performance">
        <p>
          Clients are able to rate your service after each job is completed. Your aggregate rating is visible on your public JetFix Dispatch profile. JetFix uses ratings, completion rates, and response times to determine dispatch priority.
        </p>
        <p>
          Technicians with a rating below 3.5 stars (on a 5-star scale) sustained over a 30-day period will be subject to a performance review. A rating below 3.0 stars may result in suspension or removal from the network.
        </p>
      </Section>

      <Section title="8. Confidentiality and Data Protection">
        <p>
          During the course of your work on the JetFix Dispatch network, you will have access to client personal information — including names, addresses, and contact details. You agree to:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use client information solely for the purpose of completing the dispatched service.</li>
          <li>Not store, share, or transfer client personal data to any third party.</li>
          <li>Not contact any client outside the JetFix Dispatch platform for personal or commercial solicitation.</li>
          <li>Comply fully with the Nigeria Data Protection Regulation (NDPR) 2019 and NDPA 2023 in your handling of client data.</li>
        </ul>
        <p className="mt-3">
          Breach of this clause constitutes a serious violation of this Agreement and will result in immediate removal from the network and may result in legal action.
        </p>
      </Section>

      <Section title="9. Non-Solicitation">
        <p>
          During your time on the JetFix Dispatch network and for a period of 6 months following termination of this Agreement, you agree not to directly solicit any client introduced to you through JetFix Dispatch for the purpose of providing competing services outside the platform. This clause is intended to protect the integrity of the JetFix client network, not to restrict your general ability to practise your trade.
        </p>
      </Section>

      <Section title="10. Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless JetFix Dispatch and its directors, officers, employees, and agents from and against any claims, damages, losses, costs, or expenses (including reasonable legal fees) arising from:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Your breach of this Agreement.</li>
          <li>Your negligence or wilful misconduct in performing services.</li>
          <li>Any damage to client property caused by your actions.</li>
          <li>Any misrepresentation of your qualifications or credentials.</li>
        </ul>
      </Section>

      <Section title="11. Termination">
        <Sub title="11.1 By You">
          <p>You may terminate your participation in the JetFix Dispatch network at any time by providing 7 days' written notice to JetFix via email or WhatsApp. All outstanding earnings at the time of termination will be disbursed in the next regular payment cycle.</p>
        </Sub>
        <Sub title="11.2 By JetFix Dispatch">
          <p>JetFix Dispatch may terminate this Agreement immediately, without notice, in cases of:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Fraud, theft, or criminal conduct.</li>
            <li>Harassment or abuse of any client or JetFix staff.</li>
            <li>Sustained poor performance or ratings.</li>
            <li>Violation of any clause of this Agreement.</li>
          </ul>
          <p className="mt-2">JetFix Dispatch may also terminate this Agreement with 14 days' notice for any other business reason.</p>
        </Sub>
      </Section>

      <Section title="12. Governing Law">
        <p>
          This Agreement is governed by the laws of the Federal Republic of Nigeria. Any disputes arising under this Agreement that cannot be resolved amicably shall be submitted to the exclusive jurisdiction of the courts of the Federal Capital Territory, Abuja.
        </p>
      </Section>

      <Section title="13. Amendments">
        <p>
          JetFix Dispatch may amend the terms of this Agreement from time to time. Amended terms will be communicated to you at least 14 days before they take effect. Continued acceptance of dispatch requests after the effective date of any amendment constitutes your agreement to the updated terms.
        </p>
      </Section>

      <Section title="14. Contact">
        <p>For questions, concerns, or to report a violation related to this Agreement, contact JetFix Dispatch:</p>
        <ul className="list-none space-y-1 mt-2">
          <li><span className="text-white/50">Email:</span> jetfixdispatch.ng@gmail.com</li>
          <li><span className="text-white/50">WhatsApp:</span> +234 902 611 5454</li>
          <li><span className="text-white/50">Address:</span> Abuja, Federal Capital Territory, Nigeria</li>
        </ul>
      </Section>
    </LegalLayout>
  );
}
