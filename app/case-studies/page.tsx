import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { CoverArt, tones, type CoverTone } from "@/components/CoverArt";
import { caseStudies } from "@/content/case-studies";
import { getIndustry } from "@/content/industries";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

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

// Cover color by industry.
const toneFor: Record<string, CoverTone> = {
  "home-services": "peach",
  healthcare: "green",
  "real-estate": "blue",
  automotive: "peach",
  "auto-finance": "blue",
  staffing: "green",
  "professional-firms": "blue",
};

export default function CaseStudiesIndex() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs)]} />
      <Breadcrumb items={crumbs} />

      <PageHeader
        eyebrow="Case studies"
        title={<>Production systems, <span className="text-gradient-brand">not prototypes</span></>}
        lead="Live deployments across the US, UK, Australia, New Zealand, and Europe. Each system is running in client environments today, handling calls, booking jobs, and tracking revenue."
      />

      <section className="section">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => {
            const industrySlug = cs.relatedIndustries[0];
            const tone = toneFor[industrySlug] ?? "blue";
            const lead = cs.heroStats[0];
            return (
              <Reveal key={cs.slug} delay={(i % 3) * 0.06} className="h-full">
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:ring-brand/30"
                >
                  {/* Headline result */}
                  <CoverArt tone={tone} seed={cs.slug} className="aspect-[16/9]">
                    {lead && (
                      <div className="text-center">
                        <p className={cn("text-4xl font-bold tracking-tight sm:text-5xl", tones[tone].text)}>
                          {lead.value}
                        </p>
                        <p className="mx-auto mt-2 max-w-[16rem] text-sm font-medium text-foreground/80">
                          {lead.label}
                        </p>
                      </div>
                    )}
                  </CoverArt>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
                      <span className={cn("rounded-full px-2.5 py-1 font-semibold", tones[tone].tag)}>
                        {getIndustry(industrySlug)?.name ?? cs.vertical}
                      </span>
                      <span className="inline-flex items-center gap-1 text-muted-foreground">
                        <MapPin className="size-3.5" aria-hidden />
                        {cs.location}
                      </span>
                    </div>
                    <h2 className="mt-4 text-lg font-semibold transition-colors group-hover:text-brand">
                      {cs.client}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">{cs.headline}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {cs.tags.slice(0, 3).map((t) => (
                        <li
                          key={t}
                          className="rounded-full bg-surface px-2.5 py-0.5 text-[11px] text-muted-foreground ring-1 ring-border/60"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-brand">
                      Read case study
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
