import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: `The terms for using the ${site.name} website and services, including SMS messaging, disclaimers, and limitations of liability.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container-page mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold">Terms of Service</h1>
        <p className="mt-4 text-muted-foreground">Last updated: October 23, 2026</p>

        <p className="mt-6">
          These Terms of Service (“Terms”) govern your use of the {site.legalName} (“we”, “us”,
          “our”) website at {site.url} (the “Site”) and of any services we provide to you. By
          accessing or using the Site you agree to be bound by these Terms.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Acceptance of these Terms</h2>
        <p className="mt-3">
          You accept these Terms in full, including our <a href="/refund-policy">Refund Policy</a>,
          when you do any of the following, whichever happens first:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            sign a proposal, order form, statement of work, or service agreement with us,
            including by electronic signature;
          </li>
          <li>pay any invoice or fee to us; or</li>
          <li>start using our services.</li>
        </ul>
        <p className="mt-3">
          If you accept on behalf of a business, you confirm that you have the authority to bind
          that business. If a signed agreement between you and us conflicts with these Terms, the
          signed agreement takes precedence for the matters it specifically covers.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Use of the Site</h2>
        <p className="mt-3">You may use the Site for lawful purposes only. You agree not to misuse the Site or interfere with its operation.</p>

        <h2 className="mt-6 text-xl font-semibold">SMS and text messaging program</h2>
        <p className="mt-3">
          By providing your mobile number and opting in, you agree to receive text messages from{" "}
          {site.legalName} relating to the service you requested, for example appointment and
          booking confirmations, reminders, follow-ups, and replies to your inquiries. Consent to
          receive text messages is not a condition of any purchase.
        </p>
        <ul className="mt-3 list-disc pl-6">
          <li>
            <strong>Message frequency:</strong> message frequency varies depending on your
            interaction with us.
          </li>
          <li>
            <strong>Cost:</strong> message and data rates may apply, charged by your mobile carrier.
          </li>
          <li>
            <strong>Opt out:</strong> reply <strong>STOP</strong> to any message to stop receiving
            texts. You will receive a single confirmation and no further messages.
          </li>
          <li>
            <strong>Help:</strong> reply <strong>HELP</strong> for assistance, or contact us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone.display}.
          </li>
          <li>
            <strong>Carriers:</strong> mobile carriers are not liable for delayed or undelivered
            messages.
          </li>
        </ul>
        <p className="mt-3">
          We do not sell or share mobile opt-in data or SMS consent with third parties, affiliates,
          or lead generators for marketing or promotional purposes. See our{" "}
          <a href="/privacy">Privacy Policy</a> for full details on how we handle this information.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Intellectual property</h2>
        <p className="mt-3">All content on the Site, including text, images, and code, is owned or licensed by {site.legalName}. You may not reproduce or redistribute Site content without permission.</p>

        <h2 className="mt-6 text-xl font-semibold">Links to third parties</h2>
        <p className="mt-3">The Site may contain links to third-party sites. We are not responsible for their content or practices.</p>

        <h2 className="mt-6 text-xl font-semibold">Payments, refunds, and chargebacks</h2>
        <p className="mt-3">
          Fees for our services are non-refundable. Our <a href="/refund-policy">Refund Policy</a>{" "}
          forms part of these Terms and explains how payments, cancellations, and chargebacks are
          handled.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Disclaimers</h2>
        <p className="mt-3">The Site and services are provided “as is” and “as available” without warranties of any kind. We do not guarantee outcomes from using our services.</p>

        <h2 className="mt-6 text-xl font-semibold">Limitation of liability</h2>
        <p className="mt-3">To the maximum extent permitted by law, {site.legalName} will not be liable for indirect, incidental, or consequential damages arising from your use of the Site.</p>

        <h2 className="mt-6 text-xl font-semibold">Governing law</h2>
        <p className="mt-3">These Terms, including our Refund Policy, and any dispute arising from them or from our services are governed by the laws of the State of Wyoming, United States, without regard to its conflict-of-law rules.</p>

        <h2 className="mt-6 text-xl font-semibold">Changes</h2>
        <p className="mt-3">We may update these Terms from time to time. Continued use of the Site after changes constitutes acceptance of the updated Terms.</p>

        <h2 className="mt-6 text-xl font-semibold">Contact</h2>
        <p className="mt-3">
          If you have questions about these Terms, contact us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
          <a href={site.phone.href}>{site.phone.display}</a>.
        </p>
        <p className="mt-4">
          {site.legalName}
          <br />
          {site.address.streetAddress}
          <br />
          {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}
        </p>
      </div>
    </section>
  );
}
