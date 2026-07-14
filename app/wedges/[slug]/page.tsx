import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { wedges, getWedge } from "@/content/wedges";
import { getService } from "@/content/services";
import { caseStudiesForService } from "@/content/case-studies";
import { pageMetadata, breadcrumbLd, faqPageLd, serviceDetailLd } from "@/lib/seo";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return wedges.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const w = getWedge(slug);
  if (!w) return pageMetadata({ title: "Not found", description: "", path: "/wedges" });
  return pageMetadata({
    title: w.name,
    description: w.pitch,
    path: `/wedges/${w.slug}`,
  });
}

export default async function WedgeDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const w = getWedge(slug);
  if (!w) notFound();

  const url = `${site.url}/wedges/${w.slug}`;
  const services = w.underlyingServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  // Pull case studies from any of the underlying services.
  const caseSet = new Map<string, ReturnType<typeof caseStudiesForService>[number]>();
  for (const s of w.underlyingServices) {
    for (const c of caseStudiesForService(s)) caseSet.set(c.slug, c);
  }
  const cases = Array.from(caseSet.values()).slice(0, 3);

  const others = wedges.filter((x) => x.slug !== w.slug);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Wedge offers", path: "/services" },
    { name: w.shortName, path: `/wedges/${w.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceDetailLd({ name: w.name, description: w.pitch, url }),
          faqPageLd(w.faqs),
          breadcrumbLd(crumbs),
        ]}
      />

      <Breadcrumb items={crumbs} />

      {/* Hero */}
      <section className="pt-8 pb-4">
        <div className="container-page mx-auto max-w-3xl text-center">
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand/10 text-xl font-semibold text-brand">
            {w.letter}
          </span>
          <p className="eyebrow mt-4">{w.shortName}</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{w.name}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{w.tagline}</p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground">{w.pitch}</p>
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

      {/* Risk reversal banner */}
      <section className="section pt-6">
        <div className="container-page mx-auto max-w-3xl">
          <div className="flex items-start gap-3 rounded-2xl bg-surface p-5 ring-1 ring-border/60">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-brand" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                Risk reversal
              </p>
              <p className="mt-1 text-foreground">{w.riskReversal}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="section pt-8">
        <div className="container-page mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          {w.pitchLong.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Best for */}
      <section className="section bg-surface">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Best for</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Where this wedge lands hardest</h2>
            <ul className="mt-6 space-y-3">
              {w.bestFor.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="mt-1 size-5 shrink-0 text-brand" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">What you can expect</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Proof points</h2>
            <ul className="mt-6 space-y-3">
              {w.proofPoints.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <Check className="mt-1 size-5 shrink-0 text-brand" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Underlying services */}
      {services.length > 0 && (
        <section className="section">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Under the hood</p>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                The services powering this wedge
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/60 transition-shadow hover:shadow-soft-lg"
                >
                  <h3 className="font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.lead}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    See service
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Live deployments */}
      {cases.length > 0 && (
        <section className="section bg-surface">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Live deployments</p>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">In production today</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {cases.map((c) => (
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
      <section className="section">
        <div className="container-page">
          <FAQAccordion items={w.faqs} heading={`${w.shortName}: common questions`} />
        </div>
      </section>

      {/* Other wedges */}
      <section className="section bg-surface">
        <div className="container-page">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Other wedge offers</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Reveal key={o.slug}>
                <Link
                  href={`/wedges/${o.slug}`}
                  className="group block h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/60 transition-shadow hover:shadow-soft-lg"
                >
                  <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand/10 text-sm font-semibold text-brand">
                    {o.letter}
                  </span>
                  <h3 className="mt-3 font-semibold">{o.shortName}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{o.tagline}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Read
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
