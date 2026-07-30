import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { bundleGroups, bundlesFaqs } from "@/content/catalogue";
import { pageMetadata, faqPageLd, breadcrumbLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Bundles",
  description:
    "Pre-configured combinations of Branch A and Branch B offers, by client maturity, by vertical, and full-stack engagements.",
  path: "/bundles",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Bundles", path: "/bundles" },
];

export default function BundlesPage() {
  return (
    <>
      <JsonLd data={[faqPageLd(bundlesFaqs), breadcrumbLd(crumbs)]} />

      <Breadcrumb items={crumbs} />

      <section className="pt-8 pb-4">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="eyebrow">Bundles</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Pre-configured combinations, priced to compound
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Most clients don't buy one service, they buy a combination. Every bundle below carries
            a discount versus à la carte, with the exact terms shared on a short scoping call.
          </p>
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

      {bundleGroups.map((group) => (
        <section key={group.heading} className="section">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold sm:text-4xl">{group.heading}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{group.lead}</p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.bundles.map((b, i) => (
                <Reveal key={b.slug} delay={(i % 3) * 0.06}>
                  <Link
                    href={`/bundles/${b.slug}`}
                    className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/60 transition-shadow hover:shadow-soft-lg"
                  >
                    <h3 className="text-lg font-semibold">{b.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{b.tagline}</p>
                    <ul className="mt-5 space-y-2 text-sm">
                      {b.components.map((c) => (
                        <li key={c} className="flex items-start gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                          <span className="text-foreground">{c}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      View bundle
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section bg-surface">
        <div className="container-page">
          <FAQAccordion items={bundlesFaqs} heading="Bundles: common questions" />
        </div>
      </section>

    </>
  );
}
