import { Mail, MapPin, Phone } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { BookingWidget } from "@/components/BookingWidget";
import { localBusinessLd } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Book a call with BurkyFlow. Tell us what you run today and we will map where revenue is leaking and what we would automate first.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* LocalBusiness lives ONLY here, where the real registered address sits. */}
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

          {/* Booking widget — full width so the two-column scheduler shows */}
          <div className="mx-auto mt-10 max-w-6xl">
            <BookingWidget />
          </div>
        </div>
      </section>
    </>
  );
}
