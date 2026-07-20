import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container-page mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">Last updated: July 21, 2026</p>

        <p className="mt-6">
          {site.legalName} ("we", "us", "our") operates {site.url} (the "Site"). This Privacy
          Policy explains how we collect, use, disclose, and protect personal information when you
          visit or interact with the Site.
        </p>

        <h2 className="mt-6 text-xl font-semibold">What we collect</h2>
        <ul className="mt-3 list-disc pl-6">
          <li>Contact information you provide via forms (name, email, phone, company).</li>
          <li>Communications you send to us (messages, inquiries).</li>
          <li>Automatically collected data (IP address, browser, device, pages visited, and logs).</li>
          <li>Cookies and similar technologies to enable the Site and basic analytics.</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">How we use information</h2>
        <p className="mt-3">We use the information to:</p>
        <ul className="mt-3 list-disc pl-6">
          <li>Respond to inquiries and provide services or information you request.</li>
          <li>Operate, maintain, and improve the Site and our services.</li>
          <li>Send marketing or transactional communications if you opt in or as permitted by law.</li>
          <li>Detect, investigate, and prevent fraudulent or illegal activity.</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">SMS and text messaging</h2>
        <p className="mt-3">
          If you give us your mobile number and opt in to receive text messages, we use it only to
          send the messages you asked for — such as appointment and booking confirmations,
          reminders, follow-ups, and replies to your enquiries — and to respond when you reply to
          us.
        </p>

        <div className="mt-4 rounded-2xl border border-border bg-surface p-5">
          <p className="font-semibold text-foreground">
            We never sell or share your mobile opt-in information.
          </p>
          <p className="mt-2 leading-relaxed">
            Text messaging originator opt-in data and consent are excluded from every category of
            information sharing described in this Policy. We will not sell, rent, or share mobile
            information, your phone number, or your SMS consent status with any third party —
            including our affiliates, business partners, or lead generators — for promotional or
            marketing purposes, under any circumstance. We share this information only with the
            vendors who help us deliver the messaging service itself, such as our messaging
            platform provider and telecommunications carriers, and only so that the messages you
            requested can be delivered.
          </p>
        </div>

        <ul className="mt-4 list-disc pl-6">
          <li>Message frequency varies.</li>
          <li>Message and data rates may apply.</li>
          <li>
            Reply <strong>STOP</strong> at any time to opt out, or <strong>HELP</strong> for help.
            You can also email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
          </li>
          <li>Carriers are not liable for delayed or undelivered messages.</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">How we share information</h2>
        <ul className="mt-3 list-disc pl-6">
          <li>
            <strong>SMS and mobile opt-in information.</strong> All categories of information
            sharing described in this section exclude text messaging originator opt-in data and
            consent. That information will not be sold or shared with any third party for
            promotional or marketing purposes under any circumstance, including with our affiliates
            or business partners. We will not share your SMS opt-in status with any third party for
            purposes unrelated to providing the services of that messaging campaign.
          </li>
          <li>
            <strong>With service providers.</strong> We share information with vendors who help us
            operate the Site and deliver our services (hosting, email, analytics, form providers,
            CRM, scheduling, messaging platform, and telecommunications carriers), strictly so they
            can perform those functions for us.
          </li>
          <li>
            <strong>For legal reasons.</strong> We may disclose information where required by law,
            regulation, or legal process, or to protect our rights, safety, or property.
          </li>
          <li>
            <strong>Business transfers.</strong> If we are involved in a merger, acquisition, or
            sale of assets, information may transfer as part of that transaction, subject to the
            SMS exclusion above.
          </li>
        </ul>
        <p className="mt-3">We do not sell personal information.</p>

        <h2 className="mt-6 text-xl font-semibold">Cookies and tracking</h2>
        <p className="mt-3">
          The Site uses cookies and similar technologies for essential functionality and analytics.
          You can control cookies through your browser settings; disabling certain cookies may
          affect Site functionality.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Data retention</h2>
        <p className="mt-3">
          We retain personal information only as long as necessary to provide services, comply
          with legal obligations, and resolve disputes. Specific retention periods vary by data
          type; contact us to request deletion.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Security</h2>
        <p className="mt-3">We take reasonable measures to protect personal data, but no system is perfect.</p>

        <h2 className="mt-6 text-xl font-semibold">Children</h2>
        <p className="mt-3">The Site is not intended for children under 16. We do not knowingly collect their data.</p>

        <h2 className="mt-6 text-xl font-semibold">Your rights</h2>
        <p className="mt-3">Subject to local law, you may access, correct, or delete personal data we hold about you.</p>

        <h2 className="mt-6 text-xl font-semibold">Contact</h2>
        <p className="mt-3">
          For questions or requests about this policy, email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <p className="mt-8 text-sm text-muted-foreground">
          Note: This privacy policy is a template and may need review by legal counsel to meet
          specific regulatory requirements in your jurisdiction.
        </p>
      </div>
    </section>
  );
}
