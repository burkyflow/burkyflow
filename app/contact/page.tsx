import { Mail, MapPin, Phone } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
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
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Book a call</h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Tell us what you run today. We will map exactly where revenue is leaking and what we
              would automate first. No pitch decks, just the numbers.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-foreground transition-colors hover:text-brand"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft">
                  <Mail className="size-5 text-brand" />
                </span>
                {site.email}
              </a>
              <a
                href={site.phone.href}
                className="flex items-center gap-3 text-foreground transition-colors hover:text-brand"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft">
                  <Phone className="size-5 text-brand" />
                </span>
                {site.phone.display}
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft">
                  <MapPin className="size-5 text-brand" />
                </span>
                <span className="leading-relaxed">
                  {site.address.streetAddress}
                  <br />
                  {site.address.addressLocality}, {site.address.addressRegion}{" "}
                  {site.address.postalCode}, USA
                </span>
              </div>
            </div>
          </div>

          {/* Calendly scheduler */}
          <iframe
            src={`${site.calendly}?hide_gdpr_banner=1&background_color=ffffff&primary_color=f16b4d`}
            title="Book a call with BurkyFlow"
            className="h-[720px] w-full"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
