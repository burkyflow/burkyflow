import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${site.name}`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container-page mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold">Terms of Service</h1>
        <p className="mt-4 text-muted-foreground">Last updated: July 21, 2026</p>

        <p className="mt-6">
          These Terms of Service ("Terms") govern your use of {site.legalName} ("we", "us", "our")
          website at {site.url} (the "Site"). By accessing or using the Site you agree to be bound
          by these Terms.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Use of the Site</h2>
        <p className="mt-3">You may use the Site for lawful purposes only. You agree not to misuse the Site or interfere with its operation.</p>

        <h2 className="mt-6 text-xl font-semibold">SMS and text messaging program</h2>
        <p className="mt-3">
          By providing your mobile number and opting in, you agree to receive text messages from{" "}
          {site.legalName} relating to the service you requested — for example appointment and
          booking confirmations, reminders, follow-ups, and replies to your enquiries. Consent to
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

        <h2 className="mt-6 text-xl font-semibold">Disclaimers</h2>
        <p className="mt-3">The Site and services are provided "as is" and "as available" without warranties of any kind. We do not guarantee outcomes from using our services.</p>

        <h2 className="mt-6 text-xl font-semibold">Limitation of liability</h2>
        <p className="mt-3">To the maximum extent permitted by law, {site.legalName} will not be liable for indirect, incidental, or consequential damages arising from your use of the Site.</p>

        <h2 className="mt-6 text-xl font-semibold">Governing law</h2>
        <p className="mt-3">These Terms are governed by the laws applicable where {site.legalName} is registered. Please consult a lawyer if you need a specific governing jurisdiction clause.</p>

        <h2 className="mt-6 text-xl font-semibold">Changes</h2>
        <p className="mt-3">We may update these Terms from time to time. Continued use of the Site after changes constitutes acceptance of the updated Terms.</p>

        <h2 className="mt-6 text-xl font-semibold">Contact</h2>
        <p className="mt-3">If you have questions about these Terms, contact us at <a href={`mailto:${site.email}`}>{site.email}</a>.</p>

        <p className="mt-8 text-sm text-muted-foreground">Note: These Terms are a general template and do not constitute legal advice. Consider having them reviewed by legal counsel.</p>
      </div>
    </section>
  );
}
