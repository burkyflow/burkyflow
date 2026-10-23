import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Refund Policy",
  description: `${site.name} fees are non-refundable. How setup fees, monthly services, pay-per-booking fees, pilots, cancellations, and chargebacks are handled.`,
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <section className="section">
      <div className="container-page mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold">Refund Policy</h1>
        <p className="mt-4 text-muted-foreground">Last updated: October 23, 2026</p>

        <p className="mt-6">
          This Refund Policy applies to every service {site.legalName} (“we”, “us”, “our”) sells,
          including setup and build work, monthly and managed services, pay-per-booked-job
          campaigns, pilots, and bundles. It forms part of our{" "}
          <a href="/terms">Terms of Service</a>. By paying for any service, you agree to this policy.
        </p>

        <h2 className="mt-6 text-xl font-semibold">All payments are final</h2>
        <p className="mt-3">
          All fees paid to us are non-refundable, in whole or in part, for any reason. This includes
          setup and build fees, monthly fees, pilot fees, per-booking fees, and bundle fees. It
          applies whether or not work has started, whether or not you use the service, and whatever
          results the service produces.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Why we do not offer refunds</h2>
        <p className="mt-3">
          Our services are custom work built for your business. From the moment you pay, we commit
          staff time and reserve capacity for you, and we buy third-party software, phone numbers,
          call minutes, and messaging on your behalf. None of that can be recovered, so we do not
          offer refunds.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Setup and build fees</h2>
        <p className="mt-3">
          Setup and build fees cover discovery, configuration, call scripts, integrations, and
          launch. They are earned when paid and are non-refundable, including if you cancel before
          work begins or before launch.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Monthly and managed services</h2>
        <p className="mt-3">
          Monthly services are billed in advance. You can cancel at any time by emailing{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>. Cancellation takes effect at the end
          of the billing period you have already paid for, and you will not be charged again after
          that. We do not refund or prorate the current period, unused time, or unused minutes or
          messages.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Pay-per-booked-job services</h2>
        <p className="mt-3">
          Before launch, we agree with you in writing what counts as a booked job. A fee is earned
          when a booking meets that definition, and it is final and non-refundable, even if the
          customer later cancels, reschedules, or does not show up, or the job is not completed.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Pilots</h2>
        <p className="mt-3">
          Pilot fees are non-refundable, including if the pilot does not reach its target. The only
          commitment attached to a pilot is that you are under no obligation to continue after it
          ends.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Advertising spend and third-party costs</h2>
        <p className="mt-3">
          Advertising spend is paid to the ad platform, such as Meta or Google, for ads that have
          already run, and we cannot refund it. The same applies to third-party costs such as
          software subscriptions, phone numbers, call minutes, and text messages. Any refund from
          those providers is governed by their own policies.
        </p>

        <h2 className="mt-6 text-xl font-semibold">No guaranteed results</h2>
        <p className="mt-3">
          We do not guarantee specific outcomes, such as a number of calls, bookings, leads, or
          revenue. Targets, estimates, and examples on this Site or in proposals are not promises,
          and missing them is not grounds for a refund.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Billing questions and chargebacks</h2>
        <p className="mt-3">
          If you have a question about a charge, contact us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
          <a href={site.phone.href}>{site.phone.display}</a> before contacting your bank or card
          issuer. We respond to every billing question.
        </p>
        <p className="mt-3">If you file a chargeback or payment dispute for a charge covered by this policy:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            We will contest it and give your bank or card issuer evidence of our agreement and our
            work, including your acceptance of this policy and our Terms, signed proposals or
            agreements, invoices, communications, and service delivery records.
          </li>
          <li>We may pause or stop all services while the dispute is open.</li>
          <li>
            Any amount reversed through a dispute remains owed to us, together with any dispute
            fees we are charged, and we may use lawful means to recover it.
          </li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">Changes</h2>
        <p className="mt-3">
          We may update this policy from time to time. The version in effect on the date of a
          payment applies to that payment.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Contact</h2>
        <p className="mt-3">
          If you have questions about this policy, contact us at{" "}
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
