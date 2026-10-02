import Link from "next/link";
import { ArrowRight, Play, PhoneCall, Repeat2, CalendarDays, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const pills = [
  { icon: PhoneCall, label: "AI Voice Agents" },
  { icon: Repeat2, label: "Smart Follow-ups" },
  { icon: CalendarDays, label: "Calendar Booking" },
  { icon: Database, label: "CRM Integration" },
];


export function Hero() {
  return (
    // Hero, dashboard as the full-width background, copy overlaid
    <section className="relative overflow-hidden bg-white">
      {/* Desktop: full-width background dashboard, natural size, no crop, no overlay */}
      <div aria-hidden className="hero-dashboard hidden aspect-[2/1] lg:block" />

      {/* Copy, static flow on mobile, overlaid + vertically centered on desktop */}
      <div className="container-page relative pt-10 pb-10 lg:absolute lg:inset-0 lg:flex lg:items-center lg:py-0">
        <div className="max-w-xl">
          <p className="eyebrow mb-4">AI voice receptionist &amp; revenue automation</p>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            Turn missed calls and dormant leads into{" "}
            <span className="text-gradient-brand">booked revenue</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            BurkyFlow provides AI voice receptionists and revenue operations for service businesses. We quantify exactly
            where your revenue is leaking, capture every call and dormant lead, and optimise the
            follow-up that converts them, so you grow revenue without adding headcount.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link href={site.ctaHref}>
                {site.ctaLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#wedges">
                <Play className="size-4 fill-brand text-brand" />
                {site.secondaryCtaLabel}
              </Link>
            </Button>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap">
            {pills.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center justify-self-start gap-1.5 whitespace-nowrap rounded-full border border-border bg-white/70 px-3 py-1.5 text-xs font-medium text-foreground shadow-soft backdrop-blur sm:gap-2 sm:px-3.5 sm:py-2 sm:text-sm"
              >
                <Icon className="size-3.5 text-brand sm:size-4" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
