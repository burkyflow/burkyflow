import Link from "next/link";
import { ArrowRight, Wrench, Megaphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { branches } from "@/content/catalogue";
import { WedgeGrid } from "@/components/WedgeGrid";
import { ServiceCardGrid } from "@/components/ServiceCardGrid";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";

const branchIcons = {
  "automation-infrastructure": Wrench,
  "sales-generation": Megaphone,
} as const;

export const metadata = pageMetadata({
  title: "Services",
  description:
    "AI voice receptionist, database reactivation, CRM and lead systems, workflow automation, answer engine optimization, and a done-for-you service model.",
  path: "/services",
});

export default function ServicesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={<>Systems that capture demand <span className="text-gradient-brand">and book it</span></>}
        lead="Each service stands alone or works as one connected system we build and run for you."
      />

      {/* Top 4 offers, surfaced first */}
      <section className="section">
        <div className="container-page">
          <WedgeGrid />
        </div>
      </section>

      {/* Two service areas */}
      <section className="section bg-surface">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Two service areas, one system</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Sales generation brings in leads. Automation handles them.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start with one service or run the full system. Every offer works on its own and
              connects cleanly to the next.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {branches.map((b) => {
              const Icon = branchIcons[b.slug];
              return (
                <Link
                  key={b.slug}
                  href={`/services/${b.slug}`}
                  className="group block h-full"
                >
                  <Card className="h-full transition-shadow duration-200 hover:shadow-soft-lg">
                    <CardHeader>
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                        <Icon className="size-5" />
                      </span>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {b.eyebrow}
                      </p>
                      <CardTitle className="mt-2">{b.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{b.lead}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {b.offers.slice(0, 6).map((o) => (
                          <li
                            key={o.slug}
                            className="rounded-full bg-surface px-3 py-1 text-xs text-muted-foreground ring-1 ring-border/60"
                          >
                            {o.name.split(" (")[0]}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                        Explore {b.name}
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Featured services</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Most popular services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The services most clients start with before expanding.
            </p>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <ServiceCardGrid />
        </div>
      </section>

    </>
  );
}
