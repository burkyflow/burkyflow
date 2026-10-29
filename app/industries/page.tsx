import Link from "next/link";
import { ArrowRight, Layers, PhoneCall, Users, Workflow, CalendarCheck, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { CoverArt, tones, type CoverTone } from "@/components/CoverArt";
import { industryIcons } from "@/components/IndustryStrip";
import { industries } from "@/content/industries";
import { caseStudiesForIndustry } from "@/content/case-studies";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "AI automation built for home services, healthcare practices, real estate teams, automotive shops, auto finance, staffing firms, and professional firms.",
  path: "/industries",
});

// Rotating looks so neighboring cards differ.
const looks: { tone: CoverTone; satellites: [LucideIcon, LucideIcon] }[] = [
  { tone: "peach", satellites: [PhoneCall, CalendarCheck] },
  { tone: "green", satellites: [Users, Sparkles] },
  { tone: "blue", satellites: [Workflow, Sparkles] },
];

export default function IndustriesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title={<>Built for businesses that win on <span className="text-gradient-brand">speed and follow-up</span></>}
        lead="The mechanics are the same across industries: answer first, follow up fast, never let a lead go cold. We tune the system to how your trade actually works."
      />

      <section className="section">
        {/* A lone last card is centered on desktop. */}
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:[&>*:last-child:nth-child(3n+1)]:col-start-2">
          {industries.map((industry, i) => {
            const look = looks[i % looks.length];
            const proof = caseStudiesForIndustry(industry.slug).length;
            return (
              <Reveal key={industry.slug} delay={(i % 3) * 0.06} className="h-full">
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:ring-brand/30"
                >
                  <CoverArt
                    tone={look.tone}
                    seed={industry.slug}
                    icon={industryIcons[industry.slug] ?? Layers}
                    satellites={look.satellites}
                    className="h-40"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    {proof > 0 && (
                      <span className={cn("w-fit rounded-full px-2.5 py-1 text-xs font-semibold", tones[look.tone].tag)}>
                        {proof} case {proof === 1 ? "study" : "studies"}
                      </span>
                    )}
                    <h2 className="mt-3 text-xl font-semibold transition-colors group-hover:text-brand">
                      {industry.name}
                    </h2>
                    <p className="mt-2 text-muted-foreground">{industry.lead}</p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-brand">
                      View industry
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
