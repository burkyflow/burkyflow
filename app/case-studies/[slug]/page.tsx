import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { getService } from "@/content/services";
import { getIndustry } from "@/content/industries";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return pageMetadata({ title: "Not found", description: "", path: "/case-studies" });
  return pageMetadata({
    title: `${cs.client} — ${cs.headline}`,
    description: cs.summary,
    path: `/case-studies/${cs.slug}`,
  });
}

export default async function CaseStudyDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const others = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 3);
  const relatedServices = cs.relatedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const relatedIndustries = cs.relatedIndustries
    .map((i) => getIndustry(i))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: cs.client, path: `/case-studies/${cs.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: cs.headline,
            description: cs.summary,
            author: { "@type": "Organization", name: site.legalName, url: site.url },
            publisher: { "@type": "Organization", name: site.legalName, url: site.url },
            url: `${site.url}/case-studies/${cs.slug}`,
          },
        ]}
      />

      <Breadcrumb items={crumbs} />

      {/* Hero */}
      <section className="pt-8 pb-4">
        <div className="container-page mx-auto max-w-4xl">
          <div className="text-center">
            <p className="eyebrow">
              {cs.vertical} · {cs.location}
            </p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{cs.client}</h1>
            <p className="mx-auto mt-5 max-w-3xl text-xl text-foreground">{cs.headline}</p>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">{cs.summary}</p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {cs.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-surface px-3 py-1 text-xs text-muted-foreground ring-1 ring-border/60"
                >
                  {t}
                </li>
              ))}
            </ul>
            {cs.status && (
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand">
                {cs.status}
              </p>
            )}
          </div>

          {/* Hero stats */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {cs.heroStats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white p-6 text-center shadow-soft ring-1 ring-border/60"
              >
                <p className="text-3xl font-semibold text-brand sm:text-4xl">{s.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section bg-surface">
        <div className="container-page mx-auto max-w-3xl">
          <p className="eyebrow">The challenge</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">What wasn't working</h2>
          <ul className="mt-8 space-y-4">
            {cs.challenge.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-lg leading-relaxed text-muted-foreground">
                <span className="mt-3 size-1.5 shrink-0 rounded-full bg-brand" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">The solution</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">What we built</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {cs.solution.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.06}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/60">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section bg-surface">
        <div className="container-page mx-auto max-w-4xl">
          <p className="eyebrow">The results</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">What changed</h2>

          <ul className="mt-10 space-y-3">
            {cs.results.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <Check className="mt-1 size-5 shrink-0 text-brand" />
                <span className="text-foreground">{r}</span>
              </li>
            ))}
          </ul>

          {cs.resultsTable && cs.resultsTable.length > 0 && (
            <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-border/60">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Metric</th>
                    <th className="px-4 py-3 font-semibold">Before</th>
                    <th className="px-4 py-3 font-semibold text-brand">After</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {cs.resultsTable.map((row) => (
                    <tr key={row.metric}>
                      <td className="px-4 py-3 font-medium">{row.metric}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.before}</td>
                      <td className="px-4 py-3 font-semibold text-foreground">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {cs.quote && (
            <figure className="mt-12 rounded-2xl bg-white p-8 shadow-soft ring-1 ring-border/60">
              <Quote className="size-6 text-brand" />
              <blockquote className="mt-4 text-xl leading-relaxed text-foreground">
                "{cs.quote.text}"
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">
                — {cs.quote.attribution}
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* Silo: related services + industries */}
      {(relatedServices.length > 0 || relatedIndustries.length > 0) && (
        <section className="section">
          <div className="container-page grid gap-10 lg:grid-cols-2">
            {relatedServices.length > 0 && (
              <div>
                <p className="eyebrow">Services used in this build</p>
                <h3 className="mt-3 text-2xl font-semibold">Want the same system?</h3>
                <ul className="mt-6 space-y-3">
                  {relatedServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-start justify-between gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-border/60 transition-shadow hover:shadow-soft-lg"
                      >
                        <div>
                          <p className="font-semibold">{s.name}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{s.lead}</p>
                        </div>
                        <ArrowRight className="mt-1 size-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {relatedIndustries.length > 0 && (
              <div>
                <p className="eyebrow">Built for this industry</p>
                <h3 className="mt-3 text-2xl font-semibold">See the full playbook</h3>
                <ul className="mt-6 space-y-3">
                  {relatedIndustries.map((ind) => (
                    <li key={ind.slug}>
                      <Link
                        href={`/industries/${ind.slug}`}
                        className="group flex items-start justify-between gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-border/60 transition-shadow hover:shadow-soft-lg"
                      >
                        <div>
                          <p className="font-semibold">{ind.name}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{ind.lead}</p>
                        </div>
                        <ArrowRight className="mt-1 size-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Other case studies */}
      <section className="section">
        <div className="container-page">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">
            More case studies
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/case-studies/${o.slug}`}
                className="group rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/60 transition-shadow hover:shadow-soft-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {o.vertical}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{o.client}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.headline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Read case study
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href={site.ctaHref}>
                {site.ctaLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </>
  );
}
