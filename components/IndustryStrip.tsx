import Link from "next/link";
import { ArrowRight, ArrowUpRight, Home, HeartPulse, Building2, Car, Briefcase, Layers, type LucideIcon } from "lucide-react";
import { industries } from "@/content/industries";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

// Icon per industry slug (falls back to a generic mark).
const icons: Record<string, LucideIcon> = {
  "home-services": Home,
  healthcare: HeartPulse,
  "real-estate": Building2,
  automotive: Car,
  "professional-firms": Briefcase,
};

// Soft palette tint per card position (blue tint / peach / grey), rotated.
const tints = [
  { card: "bg-brand/[0.06]", icon: "text-brand", link: "text-brand" },
  { card: "bg-accent-soft/50", icon: "text-accent", link: "text-accent" },
  { card: "bg-surface", icon: "text-foreground", link: "text-foreground" },
  { card: "bg-accent-soft/50", icon: "text-accent", link: "text-accent" },
  { card: "bg-brand/[0.06]", icon: "text-brand", link: "text-brand" },
];

export function IndustryStrip({
  eyebrow = "Industries",
  heading = "Built for service businesses like yours",
  lead = "We work across the industries where speed-to-lead and follow-up decide who wins the job.",
}: {
  eyebrow?: string;
  heading?: string;
  lead?: string;
}) {
  return (
    <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* Intro block — deliberately NOT a card (no box), so it reads as the heading */}
      <div className="flex flex-col justify-center p-2 sm:p-4 lg:pr-8">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lead}</p>
        <Button asChild className="mt-7 w-fit">
          <Link href={site.ctaHref}>
            {site.ctaLabel}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      {/* Industry cards */}
      {industries.map((industry, i) => {
        const Icon = icons[industry.slug] ?? Layers;
        const t = tints[i % tints.length];
        return (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className={`group relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg ${t.card}`}
          >
            <ArrowUpRight
              className="absolute right-6 top-6 size-5 text-muted-foreground/50 transition-all duration-300 group-hover:right-5 group-hover:top-5 group-hover:text-foreground"
            />

            <span className={`flex size-11 items-center justify-center rounded-2xl bg-white shadow-soft ${t.icon}`}>
              <Icon className="size-5" strokeWidth={1.9} />
            </span>

            <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground">
              {industry.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {industry.lead.split(".")[0]}.
            </p>

            <span className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${t.link}`}>
              Explore industry
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
