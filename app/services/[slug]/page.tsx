import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AlternatingFeatureBlock } from "@/components/AlternatingFeatureBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { services, getService } from "@/content/services";
import { industries, getIndustry } from "@/content/industries";
import { caseStudiesForService } from "@/content/case-studies";
import {
  pageMetadata,
  serviceDetailLd,
  faqPageLd,
  breadcrumbLd,
} from "@/lib/seo";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return pageMetadata({ title: "Not found", description: "", path: "/services" });
  return pageMetadata({
    title: service.name,
    description: service.lead,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${site.url}/services/${service.slug}`;
  const related = service.relatedIndustries
    .map((slug) => getIndustry(slug))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));
  const relatedCases = caseStudiesForService(service.slug);
  const others = services.filter((s) => s.slug !== service.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceDetailLd({ name: service.name, description: service.lead, url }),
          faqPageLd(service.faqs),
          breadcrumbLd(crumbs),
        ]}
      />

      <Breadcrumb items={crumbs} />

      <section className="pt-8 pb-4">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="eyebrow">{service.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{service.h2}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{service.lead}</p>
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

      {/* How it works — illustrated */}
      <section className="section">
        <div className="container-page">
          <AlternatingFeatureBlock
            eyebrow={service.eyebrow}
            heading="How it works"
            lead={service.intro[0]}
            steps={service.steps}
            whyItMatters={service.whyItMatters}
            illustration={service.illustration}
            side="right"
          />
        </div>
      </section>

      {/* Narrative + benefits */}
      <section className="section bg-surface">
        <div className="container-page">
          <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            {service.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {service.benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 0.06}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/60">
                  <h3 className="text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-muted-foreground">{b.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/60">
            <p className="text-sm font-semibold uppercase tracking-wide">What you can expect</p>
            <ul className="mt-4 space-y-3">
              {service.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <Check className="mt-1 size-5 shrink-0 text-brand" />
                  <span className="text-foreground">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Silo: industries this service is built for */}
      {related.length > 0 && (
        <section className="section">
          <div className="container-page">
            <h2 className="text-center text-2xl font-semibold sm:text-3xl">
              Built for these industries
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {related.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/60 transition-shadow hover:shadow-soft-lg"
                >
                  <h3 className="font-semibold">{industry.name}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    See use cases
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Silo: real client builds of this service */}
      {relatedCases.length > 0 && (
        <section className="section">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Live deployments</p>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                {service.name} — in production today
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedCases.slice(0, 3).map((c) => (
                <Link
                  key={c.slug}
                  href={`/case-studies/${c.slug}`}
                  className="group rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/60 transition-shadow hover:shadow-soft-lg"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                    {c.vertical}
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
      )}

      {/* FAQ */}
      <section className="section bg-surface">
        <div className="container-page">
          <FAQAccordion items={service.faqs} heading={`${service.name}: common questions`} />
        </div>
      </section>

      {/* Other services */}
      <section className="section">
        <div className="container-page">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Explore more services</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {others.slice(0, 3).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/60 transition-shadow hover:shadow-soft-lg"
              >
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.lead}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
