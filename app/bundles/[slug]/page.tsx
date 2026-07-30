import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { allBundles, getBundle } from "@/content/catalogue";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return allBundles.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const found = getBundle(slug);
  if (!found) return pageMetadata({ title: "Not found", description: "", path: "/bundles" });
  return pageMetadata({
    title: `${found.bundle.name} bundle`,
    description: found.bundle.tagline,
    path: `/bundles/${found.bundle.slug}`,
  });
}

export default async function BundleDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const found = getBundle(slug);
  if (!found) notFound();
  const { bundle, group } = found;

  const others = group.bundles.filter((b) => b.slug !== bundle.slug).slice(0, 3);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Bundles", path: "/bundles" },
    { name: bundle.name, path: `/bundles/${bundle.slug}` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs)]} />
      <Breadcrumb items={crumbs} />

      {/* Hero */}
      <section className="pt-8 pb-4">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="eyebrow">{group.heading}</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{bundle.name}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{bundle.tagline}</p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href={site.ctaHref}>
                Get a quote for {bundle.name}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What's included + why */}
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-soft ring-1 ring-border/60">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">
              What's included
            </p>
            <h2 className="mt-2 text-2xl font-semibold">The full stack</h2>
            <ul className="mt-6 space-y-3">
              {bundle.components.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <Check className="mt-1 size-5 shrink-0 text-brand" />
                  <span className="text-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {bundle.whyThisBundle && (
              <div className="rounded-2xl bg-surface p-6 ring-1 ring-border/60">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  Why this bundle
                </p>
                <p className="mt-2 text-foreground">{bundle.whyThisBundle}</p>
              </div>
            )}
            {bundle.bestFor && (
              <div className="rounded-2xl bg-surface p-6 ring-1 ring-border/60">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  Best for
                </p>
                <p className="mt-2 text-foreground">{bundle.bestFor}</p>
              </div>
            )}
            {bundle.outcomes && bundle.outcomes.length > 0 && (
              <div className="rounded-2xl bg-surface p-6 ring-1 ring-border/60">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  What you can expect
                </p>
                <ul className="mt-3 space-y-2">
                  {bundle.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing context */}
      <section className="section bg-surface">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Bundle discount applied automatically
          </h2>
          <p className="mt-4 text-muted-foreground">
            Bundles carry a tiered discount versus à la carte, 10% on 2 services scaling to 25% on
            full-stack. Exact pricing is shared on a short scoping call so the quote matches the
            result you want.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href={site.ctaHref}>
                Get my quote
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/bundles">See all bundles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Other bundles in this group */}
      {others.length > 0 && (
        <section className="section">
          <div className="container-page">
            <h2 className="text-center text-2xl font-semibold sm:text-3xl">
              More in {group.heading}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {others.map((b) => (
                <Link
                  key={b.slug}
                  href={`/bundles/${b.slug}`}
                  className="group rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/60 transition-shadow hover:shadow-soft-lg"
                >
                  <h3 className="font-semibold">{b.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.tagline}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    View bundle
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </>
  );
}
