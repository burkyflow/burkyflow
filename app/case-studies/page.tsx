import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { caseStudies } from "@/content/case-studies";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies",
  description:
    "Live client deployments from BurkyFlow, AI voice receptionists, GoHighLevel automation, outbound AI, and unified operations systems shipping real results.",
  path: "/case-studies",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Case Studies", path: "/case-studies" },
];

export default function CaseStudiesIndex() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs)]} />
      <Breadcrumb items={crumbs} />

      <section className="section bg-surface">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="eyebrow">Case studies</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Production systems, not prototypes
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Live deployments across the US, UK, Australia, New Zealand, and Europe. Each system is
            running in client environments today, handling calls, booking jobs, and tracking
            revenue.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={(i % 3) * 0.06}>
              <Link href={`/case-studies/${cs.slug}`} className="group block h-full">
                <Card className="h-full transition-shadow duration-200 hover:shadow-soft-lg">
                  <CardHeader>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                      {cs.vertical}
                    </p>
                    <CardTitle className="mt-2">{cs.client}</CardTitle>
                    <p className="mt-1 text-xs text-muted-foreground">{cs.location}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground font-medium">{cs.headline}</p>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {cs.heroStats.slice(0, 3).map((s) => (
                        <div key={s.label} className="rounded-xl bg-surface p-2 text-center">
                          <p className="text-sm font-semibold text-brand">{s.value}</p>
                        </div>
                      ))}
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {cs.tags.slice(0, 4).map((t) => (
                        <li
                          key={t}
                          className="rounded-full bg-surface px-2.5 py-0.5 text-[11px] text-muted-foreground ring-1 ring-border/60"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      Read case study
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

    </>
  );
}
