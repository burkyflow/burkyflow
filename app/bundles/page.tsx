import Link from "next/link";
import { ArrowRight, Check, Layers, Rocket, Building2, Sparkles, Workflow, Users, Megaphone, Target, MessageSquare, HeartPulse, Scale, Cloud, ShoppingBag, Crown, UserRound, Home, DatabaseZap, PhoneCall, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { bundleGroups, bundlesFaqs } from "@/content/catalogue";
import { pageMetadata, faqPageLd, breadcrumbLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/PageHeader";
import { CoverArt, tones, type CoverTone } from "@/components/CoverArt";

// Main icon per bundle, by what it is built around; the first match wins.
const bundleIcons: [RegExp, LucideIcon][] = [
  [/empire/, Crown],
  [/brand|persona|founder/, UserRound],
  [/home-services/, Home],
  [/dental|medspa/, HeartPulse],
  [/law/, Scale],
  [/real-estate/, Building2],
  [/saas/, Cloud],
  [/agenc/, Users],
  [/ecommerce|shopify/, ShoppingBag],
  [/reactivation/, DatabaseZap],
  [/inbound-starter/, MessageSquare],
  [/convert/, Rocket],
  [/demand|outbound/, Target],
  [/lead-catcher/, PhoneCall],
  [/core/, Megaphone],
];

// One look per bundle group: by maturity, by vertical, full-stack.
const groupLooks: { tone: CoverTone; icon: LucideIcon; satellites: [LucideIcon, LucideIcon] }[] = [
  { tone: "blue", icon: Rocket, satellites: [Sparkles, Workflow] },
  { tone: "peach", icon: Building2, satellites: [Users, Sparkles] },
  { tone: "green", icon: Layers, satellites: [Workflow, Sparkles] },
];

export const metadata = pageMetadata({
  title: "Bundles",
  description:
    "Pre-configured service bundles for service businesses, grouped by growth stage, by industry, and as full-stack engagements, each discounted versus à la carte.",
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

      <PageHeader
        eyebrow="Bundles"
        title={<>Pre-configured combinations, <span className="text-gradient-brand">priced to compound</span></>}
        lead="Every bundle below combines services that work better together and carries a discount versus à la carte, with the exact terms shared on a short scoping call."
      >
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href={site.ctaHref}>
              {site.ctaLabel}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </PageHeader>

      {bundleGroups.map((group, gi) => {
        const look = groupLooks[gi % groupLooks.length];
        return (
        <section key={group.heading} className={cn("section", gi % 2 === 1 && "bg-surface")}>
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
                    className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:ring-brand/30"
                  >
                    <CoverArt tone={look.tone} seed={b.slug} icon={bundleIcons.find(([re]) => re.test(b.slug))?.[1] ?? look.icon} satellites={look.satellites} className="h-32" />
                    <div className="flex flex-1 flex-col p-6">
                    <span className={cn("w-fit rounded-full px-2.5 py-1 text-xs font-semibold", tones[look.tone].tag)}>
                      {b.components.length} services
                    </span>
                    <h3 className="mt-3 text-lg font-semibold transition-colors group-hover:text-brand">{b.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{b.tagline}</p>
                    <ul className="mt-5 space-y-2 text-sm">
                      {b.components.map((c) => (
                        <li key={c} className="flex items-start gap-2">
                          <Check className={cn("mt-0.5 size-4 shrink-0", tones[look.tone].icon)} />
                          <span className="text-foreground">{c}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-brand">
                      View bundle
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        );
      })}

      <section className="section">
        <div className="container-page">
          <FAQAccordion items={bundlesFaqs} heading="Bundles: common questions" />
        </div>
      </section>

    </>
  );
}
