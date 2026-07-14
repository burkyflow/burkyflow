import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StatBlock } from "@/components/StatBlock";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { industries, getIndustry } from "@/content/industries";
import { getService } from "@/content/services";
import { caseStudiesForIndustry } from "@/content/case-studies";
import { geoCombosForNiches } from "@/content/geo";
import {
  pageMetadata,
  serviceItemListLd,
  faqPageLd,
  breadcrumbLd,
} from "@/lib/seo";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry)
    return pageMetadata({ title: "Not found", description: "", path: "/industries" });
  return pageMetadata({
    title: industry.name,
    description: industry.lead,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const fits = industry.serviceFit
    .map((f) => ({ service: getService(f.service), why: f.why }))
    .filter((f): f is { service: NonNullable<ReturnType<typeof getService>>; why: string } =>
      Boolean(f.service)
    );
  const geoPages = geoCombosForNiches(industry.geoNiches);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.name, path: `/industries/${industry.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceItemListLd({
            name: `AI automation services for ${industry.name}`,
            services: fits.map((f) => ({
              name: f.service.name,
              url: `${site.url}/services/${f.service.slug}`,
              description: f.why,
            })),
          }),
          faqPageLd(industry.faqs),
          breadcrumbLd(crumbs),
        ]}
      />

      <Breadcrumb items={crumbs} />

      <section className="pt-8 pb-4">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="eyebrow">Industries</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{industry.h1}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{industry.lead}</p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href={site.ctaHref}>
                {site.ctaLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="section pt-10">
        <div className="container-page mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          {industry.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Pains vs offers */}
      <section className="section pt-0">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-semibold sm:text-3xl">Where revenue leaks</h2>
            <ul className="mt-6 space-y-4">
              {industry.pains.map((pain) => (
                <li key={pain} className="rounded-2xl bg-surface p-4 text-muted-foreground">
                  {pain}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-2xl font-semibold sm:text-3xl">What we put in place</h2>
            <ul className="mt-6 space-y-4">
              {industry.offers.map((offer) => (
                <li key={offer} className="flex items-start gap-3">
                  <Check className="mt-1 size-5 shrink-0 text-brand" />
                  <span className="text-foreground">{offer}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {industry.stat && (
        <section className="pb-20">
          <div className="container-page">
            <StatBlock stats={[industry.stat]} />
          </div>
        </section>
      )}

      {/* Silo core: which AI services we provide for this industry, and why */}
      <section className="section bg-surface">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">AI services for this industry</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              What we automate for {industry.name.toLowerCase()}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {fits.map((f, i) => {
              const Icon = f.service.icon;
              return (
                <Reveal key={f.service.slug} delay={(i % 2) * 0.06}>
                  <Link href={`/services/${f.service.slug}`} className="group block h-full">
                    <Card className="h-full transition-shadow duration-200 hover:shadow-soft-lg">
                      <CardHeader>
                        <span className="flex size-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                          <Icon className="size-5" />
                        </span>
                        <CardTitle className="mt-3">{f.service.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{f.why}</p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                          Explore {f.service.name}
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Silo: location pages for this industry */}
      {geoPages.length > 0 && (
        <section className="section">
          <div className="container-page">
            <h2 className="text-center text-2xl font-semibold sm:text-3xl">
              {industry.name} automation by location
            </h2>
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
              {geoPages.map(({ niche, city }) => (
                <Link
                  key={`${niche.slug}-${city.slug}`}
                  href={`/ai-automation/${niche.slug}/${city.slug}`}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-medium shadow-soft ring-1 ring-border/60 transition-colors hover:text-brand"
                >
                  <MapPin className="size-4 text-brand" />
                  {niche.name} in {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Silo: case studies for this industry */}
      {(() => {
        const cases = caseStudiesForIndustry(industry.slug);
        if (cases.length === 0) return null;
        return (
          <section className="section">
            <div className="container-page">
              <div className="mx-auto max-w-2xl text-center">
                <p className="eyebrow">Proof in this industry</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Live builds for {industry.name.toLowerCase()}
                </h2>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cases.slice(0, 3).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/case-studies/${c.slug}`}
                    className="group rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/60 transition-shadow hover:shadow-soft-lg"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                      {c.location}
                    </p>
                    <h3 className="mt-2 font-semibold">{c.client}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.headline}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      Read case study
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* FAQ */}
      <section className="section bg-surface">
        <div className="container-page">
          <FAQAccordion items={industry.faqs} heading={`${industry.name}: common questions`} />
        </div>
      </section>

    </>
  );
}
