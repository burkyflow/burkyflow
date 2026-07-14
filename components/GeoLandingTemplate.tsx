import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlternatingFeatureBlock } from "@/components/AlternatingFeatureBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Reveal } from "@/components/Reveal";
import type { City, Niche, Offer, GeoFaq } from "@/content/geo";
import { industryForNiche } from "@/content/industries";
import { getService } from "@/content/services";

export type GeoLandingTemplateProps = {
  city: City;
  niche: Niche;
  pains: string[];
  offers: Offer[];
  faqs: GeoFaq[];
};

// Core services every geo page links to (silo: geo -> service).
const GEO_SERVICE_SLUGS = [
  "ai-voice-receptionist",
  "database-reactivation",
  "crm-lead-systems",
];

export function GeoLandingTemplate({
  city,
  niche,
  pains,
  offers,
  faqs,
}: GeoLandingTemplateProps) {
  const h1 = `AI automation for ${niche.name} businesses in ${city.name}`;
  const parentIndustry = industryForNiche(niche.slug);
  const relatedServices = GEO_SERVICE_SLUGS.map((s) => getService(s)).filter(
    (s): s is NonNullable<ReturnType<typeof getService>> => Boolean(s)
  );

  return (
    <>
      {/* Hero */}
      <section className="section bg-surface">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-sm font-medium text-muted-foreground shadow-soft">
              <MapPin className="size-4 text-brand" />
              Serving {city.name}, {city.stateAbbr} remotely
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">{h1}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Stop losing jobs to missed calls and cold leads. We capture every call, wake up
              your existing customer list, and book the work, so {city.name} {niche.plural}{" "}
              grow without adding front-desk headcount.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={site.ctaHref}>
                  {site.ctaLabel}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#offers">See what we automate</Link>
              </Button>
            </div>
          </div>

          {/* Local pain points */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-3">
            {pains.map((pain, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="h-full rounded-2xl bg-white p-4 text-sm text-muted-foreground shadow-soft">
                  {pain}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Three offer cards */}
      <section id="offers" className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Three ways we help</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Where {city.name} {niche.plural} win the most revenue, fastest
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {offers.map((offer, i) => (
              <Reveal key={offer.title} delay={i * 0.08}>
                <Card className="h-full">
                  <CardHeader>
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-brand/10 text-sm font-semibold text-brand">
                      {i + 1}
                    </span>
                    <CardTitle className="mt-3">{offer.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{offer.detail}</p>
                    <ul className="mt-5 space-y-2">
                      {offer.proof.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                          <span className="text-foreground">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* One alternating feature block per offer */}
      <section className="section bg-surface">
        <div className="container-page flex flex-col gap-20 md:gap-28">
          {offers.map((offer, i) => (
            <AlternatingFeatureBlock
              key={offer.title}
              eyebrow={`${niche.name} in ${city.name}`}
              heading={offer.title}
              lead={offer.detail}
              steps={offer.proof.map((p, idx) => ({
                title: ["Set up", "Run it", "Track it"][idx] ?? "Step",
                detail: p,
              }))}
              whyItMatters={`In ${city.name}, the ${niche.name.toLowerCase()} business that responds first usually wins the job.`}
              side={i % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>
      </section>

      {/* Local trust strip (placeholder) */}
      <section className="section">
        <div className="container-page">
          {/* TODO(you): replace with real local reviews / testimonials. */}
          <div className="rounded-3xl bg-surface px-6 py-12 text-center sm:px-12">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Trusted by {niche.plural} in {city.name} and across {city.state}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white p-6 text-left shadow-soft"
                >
                  <p className="text-muted-foreground">
                    &ldquo;Placeholder review. Add a real {city.name} client quote here.&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-semibold text-foreground">
                    Owner, {city.name} {niche.name} business
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="section bg-surface">
        <div className="container-page">
          <FAQAccordion
            items={faqs}
            heading={`${niche.name} automation in ${city.name}: common questions`}
          />
        </div>
      </section>

      {/* Silo links: up to parent industry and across to core services */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Explore the services behind this
            </h2>
            <p className="mt-3 text-muted-foreground">
              The systems we deploy for {city.name} {niche.plural}.
            </p>
          </div>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-medium shadow-soft ring-1 ring-border/60 transition-colors hover:text-brand"
              >
                {s.name}
                <ArrowRight className="size-4 text-brand" />
              </Link>
            ))}
            {parentIndustry && (
              <Link
                href={`/industries/${parentIndustry.slug}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-brand/10 px-4 py-2 text-sm font-medium text-brand ring-1 ring-brand/20 transition-colors hover:bg-brand/15"
              >
                All {parentIndustry.name}
                <ArrowRight className="size-4" />
              </Link>
            )}
          </div>
        </div>
      </section>


      {/* Sticky mobile CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/90 p-3 backdrop-blur-md md:hidden">
        <Button asChild className="w-full" size="lg">
          <Link href={site.ctaHref}>
            {site.ctaLabel} for {city.name} {niche.name}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
      {/* Spacer so the sticky bar never covers footer content on mobile */}
      <div className="h-20 md:hidden" aria-hidden />
    </>
  );
}
