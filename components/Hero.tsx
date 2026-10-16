import Link from "next/link";
import { ArrowRight, Play, PhoneCall, Repeat2, CalendarDays, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { Typewriter } from "@/components/Typewriter";

const pills = [
  { icon: PhoneCall, label: "AI Voice Agents" },
  { icon: Repeat2, label: "Smart Follow-ups" },
  { icon: CalendarDays, label: "Calendar Booking" },
  { icon: Database, label: "CRM Integration" },
];


// Cycled by the headline typewriter. The first one is what search engines read.
const headlineLead = "Turn missed calls and dormant leads into";
const headlinePhrases = ["booked revenue", "booked jobs", "predictable growth", "revenue you already own"];

export function Hero() {
  return (
    // Copy and dashboard share the page container, so both line up with the
    // navbar at every width instead of the artwork stretching to the screen edge.
    <section className="relative overflow-hidden bg-[#fbfbfe]">
      <div className="container-page relative grid items-center gap-10 py-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12 lg:py-20 xl:py-24">
        <div className="max-w-xl">
          <p className="eyebrow mb-4">AI voice receptionist &amp; revenue automation</p>
          {/* Invisible copies of every full headline share one grid cell with the
              live one, so the heading is always as tall as its longest version and
              the content below never jumps while phrases type and delete. The
              copies are CSS-generated text, so the HTML heading reads once. */}
          <h1 className="grid text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            {headlinePhrases.map((phrase) => (
              <span
                key={phrase}
                aria-hidden
                data-text={`${headlineLead} ${phrase}`}
                className="invisible col-start-1 row-start-1 before:content-[attr(data-text)]"
              />
            ))}
            <span className="col-start-1 row-start-1">
              {headlineLead}{" "}
              <Typewriter phrases={headlinePhrases} className="text-gradient-brand" />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            BurkyFlow provides AI voice receptionists and revenue operations for service businesses. We quantify exactly
            where your revenue is leaking, capture every call and dormant lead, and optimize the
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
              <Link href="#offers">
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

        {/* Desktop only: product dashboard, set in CSS so phones never download it.
            It extends left into the column gap, where its faded margin sits. */}
        <div
          aria-hidden
          className="hero-dashboard hidden aspect-[1054/800] lg:-ml-8 lg:block lg:w-[calc(100%+2rem)] xl:-ml-24 xl:w-[calc(100%+6rem)]"
        />
      </div>
    </section>
  );
}
