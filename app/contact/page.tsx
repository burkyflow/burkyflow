import { Mail, MapPin, Phone } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { BookingWidget } from "@/components/BookingWidget";
import { localBusinessLd, pageMetadata, faqPageLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Us: Book an AI Automation Call",
  description:
    "Contact BurkyFlow to book a call about an AI receptionist, missed call recovery, database reactivation, or CRM automation, by phone, email, or calendar.",
  path: "/contact",
});

const callSteps = [
  { title: "You describe today", body: "How calls are answered, where leads come from, what follow-up looks like, and which tools you run. Rough numbers are fine." },
  { title: "We find the leak", body: "Together we work out where revenue is slipping: unanswered calls, quotes nobody chased, past customers nobody contacted." },
  { title: "You get a plan", body: "A short written scope with the components, the launch timeline, and the numbers we would report. No obligation." },
];

const faqs = [
  { q: "How long is the call?", a: "About thirty minutes. Bring whoever handles the phones and the follow-up, because their answers shape the plan." },
  { q: "Do I need to prepare anything?", a: "No. If you have a rough count of weekly calls, how many go unanswered, and the tools you use for booking and leads, the call is more useful, but we can work it out together." },
  { q: "What if we are not ready to buy?", a: "That is fine. Many businesses book the call to understand where the leaks are first. You keep the written scope either way." },
  { q: "Can we talk about one problem only, such as missed calls?", a: "Yes. Most engagements start with one leak, usually unanswered calls or quotes that were never followed up, and grow from there once the first numbers are in." },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqPageLd(faqs)} />
      {/* Registered business details; service cities are served remotely. */}
      <JsonLd data={localBusinessLd()} />

      <section className="section bg-surface">
        <div className="container-page">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Book a call</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Tell us what you run today. We will map exactly where revenue is leaking and what we
              would automate first. No pitch decks, just the numbers.
            </p>
          </div>

          {/* Contact details row */}
          <div className="mx-auto mt-8 flex max-w-4xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-soft ring-1 ring-border/60 transition-colors hover:text-brand"
            >
              <Mail className="size-5 shrink-0 text-brand" />
              <span className="text-sm font-medium">{site.email}</span>
            </a>
            <a
              href={site.phone.href}
              className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-soft ring-1 ring-border/60 transition-colors hover:text-brand"
            >
              <Phone className="size-5 shrink-0 text-brand" />
              <span className="text-sm font-medium">{site.phone.display}</span>
            </a>
            <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 text-muted-foreground shadow-soft ring-1 ring-border/60">
              <MapPin className="size-5 shrink-0 text-brand" />
              <span className="text-sm">
                {site.address.streetAddress}, {site.address.addressLocality},{" "}
                {site.address.addressRegion} {site.address.postalCode}
              </span>
            </div>
          </div>

          {/* Visible even when the third-party calendar is slow or blocked */}
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
            Pick a time in the calendar below. If it does not load, call{" "}
            <a href={site.phone.href} className="font-semibold text-brand hover:underline">
              {site.phone.display}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand hover:underline">
              {site.email}
            </a>
            .
          </p>

          {/* Booking widget, full width so the two-column scheduler shows */}
          <div className="mx-auto mt-6 max-w-6xl">
            <BookingWidget />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">What happens on the call</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Three steps, no pitch</h2>
            <p className="mt-4 text-muted-foreground">
              The call is a working session, not a demo. We look at your real call volume, your
              lead sources, and the follow-up that happens today, then say plainly what we would
              build first and what it should produce.
            </p>
            <ol className="mt-6 space-y-5">
              {callSteps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-foreground/80">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="eyebrow">Before you book</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Common questions</h2>
            <div className="mt-6 divide-y divide-border/60">
              {faqs.map((f) => (
                <div key={f.q} className="py-4">
                  <h3 className="font-semibold text-foreground">{f.q}</h3>
                  <p className="mt-2 text-foreground/80">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
