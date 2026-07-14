import Link from "next/link";
import { ArrowRight, Wrench, Megaphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/services";
import { branches } from "@/content/catalogue";
import { WedgeGrid } from "@/components/WedgeGrid";
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
      <section className="section bg-surface">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="eyebrow">Services</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Systems that capture demand and book it
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Each service stands alone or works as one connected system we build and run for you.
          </p>
        </div>
      </section>

      {/* Top 4 wedge offers — surface first */}
      <section className="section">
        <div className="container-page">
          <WedgeGrid />
        </div>
      </section>

      {/* Two branches */}
      <section className="section bg-surface">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Two branches, one system</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Demand fills the pipe. Ops processes it.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pick one wedge or run the full stack. Every offer is deployable on its own and
              plugs cleanly into the next.
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
              Most popular wedges
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The standalone offers most clients enter through before expanding.
            </p>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <Card className="h-full transition-shadow duration-200 hover:shadow-soft-lg">
                    <CardHeader>
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                        <Icon className="size-5" />
                      </span>
                      <CardTitle className="mt-3">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.lead}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                        Learn more
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

    </>
  );
}
