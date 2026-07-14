import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { faqPageLd, breadcrumbLd, serviceDetailLd } from "@/lib/seo";
import { site } from "@/lib/site";
import type { Branch } from "@/content/catalogue";

export function BranchPage({ branch }: { branch: Branch }) {
  const url = `${site.url}/services/${branch.slug}`;
  const allFaqs = [
    ...branch.faqs,
    ...branch.offers.flatMap((o) =>
      o.faqs.map((f) => ({ q: `${o.name}: ${f.q}`, a: f.a }))
    ),
  ];
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: branch.name, path: `/services/${branch.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceDetailLd({ name: branch.name, description: branch.lead, url }),
          faqPageLd(allFaqs),
          breadcrumbLd(crumbs),
        ]}
      />

      <Breadcrumb items={crumbs} />

      {/* Hero */}
      <section className="pt-8 pb-4">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="eyebrow">{branch.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{branch.h1}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{branch.lead}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href={site.ctaHref}>
                {site.ctaLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/bundles">See bundles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section pt-6">
        <div className="container-page mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
          <p>{branch.intro}</p>
        </div>
      </section>

      {/* Jump-nav */}
      <section className="border-y border-border bg-surface">
        <div className="container-page flex flex-wrap gap-x-6 gap-y-2 py-4 text-sm">
          {branch.offers.map((o) => (
            <a
              key={o.slug}
              href={`#${o.slug}`}
              className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {o.name}
            </a>
          ))}
        </div>
      </section>

      {/* Offers */}
      <section className="section">
        <div className="container-page flex flex-col gap-20">
          {branch.offers.map((offer, i) => (
            <Reveal key={offer.slug}>
              <article id={offer.slug} className="scroll-mt-24">
                <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                      0{i + 1}
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{offer.name}</h2>
                    <p className="mt-5 text-lg text-foreground">{offer.pitch}</p>
                    <p className="mt-4 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Best fit: </span>
                      {offer.bestFit}
                    </p>
                    {offer.addOns && offer.addOns.length > 0 && (
                      <div className="mt-6 rounded-2xl bg-surface p-5 ring-1 ring-border/60">
                        <p className="text-xs font-semibold uppercase tracking-wide">Add-ons</p>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                          {offer.addOns.map((a) => (
                            <li key={a} className="flex items-start gap-2">
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {offer.packages.map((pkg) => (
                      <div
                        key={pkg.tier}
                        className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/60"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                          {pkg.tier}
                        </p>
                        <p className="mt-3 text-sm text-foreground">{pkg.scope}</p>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          {pkg.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2">
                              <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                        {pkg.timeline && (
                          <p className="mt-5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Timeline · {pkg.timeline}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Per-offer FAQs */}
                <div className="mt-12 rounded-2xl bg-surface p-8 ring-1 ring-border/60">
                  <FAQAccordion items={offer.faqs} heading={`${offer.name}: common questions`} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Branch-level FAQs */}
      <section className="section bg-surface">
        <div className="container-page">
          <FAQAccordion items={branch.faqs} heading={`${branch.name}: how it works`} />
        </div>
      </section>

    </>
  );
}
