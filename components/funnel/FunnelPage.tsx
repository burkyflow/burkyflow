import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Star,
  Phone,
  PhoneCall,
  PhoneOff,
  PhoneMissed,
  Moon,
  ShieldCheck,
  Clock,
  Play,
  Rocket,
  CalendarCheck,
  Users,
  Database,
  Zap,
  Wrench,
  Fan,
  Home,
  Sparkles,
  MoreHorizontal,
  User,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/lib/site";
import { funnelPricing, type Funnel } from "@/content/funnels";
import type { Industry } from "@/content/industries";
import { FAQAccordion } from "@/components/FAQAccordion";
import { BookingWidget } from "@/components/BookingWidget";
import { FunnelNav } from "@/components/funnel/FunnelNav";
import { UsFlag } from "@/components/UsFlag";

type Testimonial = { text: string; attribution: string; vertical?: string };

const BOOK_ID = "book";
const FEATURES_ID = "how-it-works";

// Icons cycled through the feature cards and stat bar.
const FEATURE_ICONS: LucideIcon[] = [PhoneCall, CalendarCheck, Users, Database];
const STAT_ICONS: LucideIcon[] = [PhoneCall, Clock, Zap, ShieldCheck];
const PROBLEM_ICONS: LucideIcon[] = [PhoneMissed, Clock, Moon, Users];
// Cycled through the vertical pills. Order matches the home-services pills
// (Plumbing, HVAC, Electrical, Roofing, Cleaning, & more); generic-but-tidy elsewhere.
const PILL_ICONS: LucideIcon[] = [Wrench, Fan, Zap, Home, Sparkles, MoreHorizontal];

// Fixed waveform bar heights (no randomness so SSR is deterministic).
const WAVE = [34, 60, 82, 46, 68, 92, 52, 72, 40, 86, 58, 36, 78, 50, 94, 56, 42, 70, 48, 80, 62, 38, 54, 66];

// Integrations we actually have logos for. Matches the "works with your stack" pitch.
const INTEGRATIONS = [
  { src: "/images/hubspot.png", alt: "HubSpot" },
  { src: "/images/twilio.png", alt: "Twilio" },
  { src: "/images/google.png", alt: "Google Calendar" },
  { src: "/images/zapier.png", alt: "Zapier" },
  { src: "/images/salesforce.webp", alt: "Salesforce" },
  { src: "/images/slack.png", alt: "Slack" },
];

function PrimaryCTA({ label = "Book your free demo", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={`#${BOOK_ID}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-cta px-7 py-3.5 text-base font-semibold text-brand-cta-fg shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-cta-hover hover:shadow-soft-lg active:translate-y-0 active:scale-[0.98] ${className}`}
    >
      {label}
      <ArrowRight className="size-4" />
    </a>
  );
}

// The phone mockup used in the features section.
function PhoneMockup({ avatar }: { avatar?: string }) {
  return (
    <div className="relative mx-auto w-[13rem]">
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-brand/10 blur-3xl" aria-hidden />
      <div className="relative rounded-[2.5rem] border-[6px] border-foreground/90 bg-foreground p-3 shadow-2xl">
        <div className="rounded-[1.9rem] bg-gradient-to-b from-[#0b1220] to-[#101a30] p-5 text-center text-white">
          <p className="text-sm font-bold">
            BurkyFlow <span className="text-brand-cta">AI</span>
          </p>
          <div className="relative mx-auto mt-5 size-16 overflow-hidden rounded-full ring-2 ring-white/20">
            {avatar ? (
              <Image src={avatar} alt="" fill sizes="64px" className="object-cover object-[70%_18%]" />
            ) : (
              <span className="flex h-full w-full items-center justify-center bg-white/10 text-white/70">
                <User className="size-7" />
              </span>
            )}
          </div>
          <p className="mt-4 text-base font-bold">Customer Call</p>
          <p className="text-xs text-white/60">AI answering…</p>
          <div className="mt-5 flex h-8 items-end justify-center gap-[3px]">
            {WAVE.slice(0, 16).map((h, i) => (
              <span
                key={i}
                className="w-[3px] animate-pulse rounded-full bg-brand-cta"
                style={{ height: `${h}%`, animationDelay: `${(i % 6) * 100}ms`, animationDuration: "1.1s" }}
              />
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-6">
            <span className="flex size-10 items-center justify-center rounded-full bg-red-500">
              <PhoneOff className="size-4" />
            </span>
            <span className="flex size-10 items-center justify-center rounded-full bg-green-500">
              <Phone className="size-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FunnelPage({
  funnel,
  industry,
  testimonials,
}: {
  funnel: Funnel;
  industry: Industry;
  testimonials: Testimonial[];
}) {
  return (
    <div className="bg-white">
      {/* ── Funnel nav (transparent over hero, solid on scroll) ── */}
      <FunnelNav />

      {/* ── Hero (dark, brand-themed) ──────────────────────────── */}
      <section id="top" className="relative overflow-hidden bg-[#0b1220] text-white">
        {funnel.heroImage ? (
          /* full-bleed hero photo (e.g. a real home-service tech) */
          <div aria-hidden className="absolute inset-0">
            <Image
              src={funnel.heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[75%_top] lg:object-[right_top]"
            />
            {/* left-to-right dark gradient keeps the copy legible over the photo */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220]/70 to-transparent" />
            {/* light scrim on small screens where the copy sits over the person */}
            <div className="absolute inset-0 bg-[#0b1220]/30 lg:hidden" />
            {/* blend the bottom edge into the stat bar */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0b1220] to-transparent" />
          </div>
        ) : (
          /* clean dark hero (soft grid + brand glows) when there's no photo */
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)",
              }}
            />
            <div className="pointer-events-none absolute -right-24 bottom-0 size-[26rem] rounded-full bg-brand-cta/20 blur-[100px]" aria-hidden />
          </>
        )}
        {/* subtle brand glow behind the copy */}
        <div className="pointer-events-none absolute -left-32 top-10 size-[30rem] rounded-full bg-brand/20 blur-[110px]" aria-hidden />

        <div className="container-page relative pb-16 pt-52 md:py-28 lg:py-36">
          {/* copy */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur">
              <UsFlag className="h-3.5 w-5 shrink-0 rounded-[2px] ring-1 ring-black/10" />
              {funnel.testimonialsHeading ?? "Trusted by businesses across the USA"}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl">
              {funnel.headline}{" "}
              <span className="bg-gradient-to-r from-[#7ba7e8] via-[#a9c4f0] to-white bg-clip-text text-transparent">
                {funnel.headlineAccent}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-snug text-white/70">{funnel.subheadline}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryCTA />
              <a
                href={`#${FEATURES_ID}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                <Play className="size-4 fill-white" />
                See how it works
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5">
              {funnel.heroPoints.map((p) => (
                <li key={p} className="inline-flex items-center gap-2 text-sm font-medium text-white/85">
                  <Check className="size-4 text-brand-cta" strokeWidth={3} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Stat bar (overlaps hero) ───────────────────────────── */}
      <div className="container-page relative z-10 -mt-10 md:-mt-14">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border/50 shadow-soft-lg ring-1 ring-border/60 sm:grid-cols-4">
          {funnel.results.map((r, i) => {
            const Icon = STAT_ICONS[i % STAT_ICONS.length];
            return (
              <div key={r.label} className="flex items-center justify-center gap-3 bg-white px-4 py-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-cta/10 text-brand-cta">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="font-heading text-2xl font-bold leading-none tracking-tight text-foreground">
                    {r.value}
                  </p>
                  <p className="mt-1.5 max-w-[10rem] text-xs leading-snug text-muted-foreground">{r.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Problem + Solves (two-column) ──────────────────────── */}
      <section id="benefits" className="container-page scroll-mt-20 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          {/* problems */}
          <div>
            <h2 className="text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl">
              {funnel.problemHeading}
              {funnel.problemHeadingAccent && (
                <>
                  {" "}
                  <span className="text-brand">{funnel.problemHeadingAccent}</span>
                </>
              )}
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              {funnel.problemLead ??
                "If any of these are true, you're paying for leads you never get to talk to."}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {funnel.problems.map((p, i) => {
                const Icon = PROBLEM_ICONS[i % PROBLEM_ICONS.length];
                return (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-border bg-white p-4 text-center shadow-soft"
                  >
                    <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-brand-cta/10 text-brand-cta">
                      <Icon className="size-5" />
                    </span>
                    <p className="mt-3 text-sm font-bold tracking-tight text-foreground">{p.title}</p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* solves */}
          <div className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-brand/[0.07] to-accent-soft/20 p-8 ring-1 ring-brand/10 md:p-10">
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <Check className="size-5" strokeWidth={3} />
              </span>
              <h3 className="text-xl font-bold tracking-tight text-brand sm:text-2xl">
                BurkyFlow AI solves it all
              </h3>
            </div>
            <ul className="mt-6 flex flex-col gap-3.5">
              {funnel.solves.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm font-medium text-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
            <PrimaryCTA label="Book your free demo" className="mt-8 w-full sm:w-auto sm:self-start" />
          </div>
        </div>
      </section>

      {/* ── Features: Powerful AI automation ───────────────────── */}
      <section id={FEATURES_ID} className="scroll-mt-16 bg-surface py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">What you get</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{funnel.featuresHeading}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{funnel.featuresLead}</p>
          </div>

          {/* features (one row, left) + phone & pills (right), all on one line on desktop */}
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            {/* feature cards, single row on desktop */}
            <div
              className={`grid grid-cols-2 gap-x-5 gap-y-10 ${
                funnel.features.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
              }`}
            >
              {funnel.features.map((f, i) => {
                const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
                return (
                  <div key={f.title} className="text-center">
                    <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-4 text-sm font-bold tracking-tight sm:text-base">{f.title}</h3>
                    <p className="mx-auto mt-2 max-w-[13rem] text-sm leading-relaxed text-muted-foreground">
                      {f.points[0]}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* phone + vertical pills */}
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:gap-4">
              <PhoneMockup avatar={funnel.heroImage} />
              <ul className="flex flex-wrap justify-center gap-2 lg:flex-col lg:items-stretch">
                {funnel.pills.map((p, i) => {
                  const Icon = PILL_ICONS[i % PILL_ICONS.length];
                  return (
                    <li
                      key={p}
                      className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3.5 py-1.5 text-xs font-semibold text-foreground ring-1 ring-brand/10"
                    >
                      <span className="flex size-5 items-center justify-center rounded-full bg-white text-brand shadow-soft">
                        <Icon className="size-3" />
                      </span>
                      {p}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="mt-14 text-center">
            <PrimaryCTA />
          </div>
        </div>
      </section>

      {/* ── Testimonials (trusted by) ──────────────────────────── */}
      {testimonials.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <div className="container-page flex justify-center">
            <span className="inline-flex items-center gap-2.5 rounded-full bg-brand/5 px-5 py-2.5 text-center text-xs font-bold leading-tight text-foreground ring-1 ring-brand/10 sm:text-sm">
              <UsFlag className="h-3.5 w-5 shrink-0 rounded-[2px] ring-1 ring-black/5" />
              {funnel.testimonialsHeading ?? "Trusted by businesses across the USA"}
            </span>
          </div>
          <div className="container-page mx-auto mt-12 grid max-w-6xl gap-x-10 gap-y-12 md:grid-cols-3">
            {testimonials.map((t) => {
              const name = t.attribution.split(",")[0].trim();
              const initials = name
                .split(" ")
                .filter(Boolean)
                .slice(0, 2)
                .map((w) => w[0])
                .join("")
                .toUpperCase();
              return (
                <figure key={t.attribution} className="flex flex-col">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                      {initials}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-foreground">{t.attribution}</p>
                      {t.vertical && <p className="text-xs text-muted-foreground">{t.vertical}</p>}
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Works-with logos ───────────────────────────────────── */}
      <section className="border-y border-border/60 bg-surface py-12">
        <div className="container-page">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Works with the tools you already use
          </p>
          <div className="mt-7 grid grid-cols-6 items-center gap-x-3 sm:gap-x-10">
            {INTEGRATIONS.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="mx-auto h-5 w-auto max-w-full object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-7"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA band ──────────────────────────────────── */}
      <section className="container-page py-10 md:py-14">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#141d3d] to-brand px-8 py-10 shadow-soft-lg md:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-white/5 blur-2xl" aria-hidden />
          <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-4">
              <span className="hidden size-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white sm:flex">
                <Rocket className="size-7" />
              </span>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Ready to never miss another customer?
                </h2>
                <p className="mt-1.5 text-white/80">
                  Book your free demo today and see how BurkyFlow can grow your business.
                </p>
              </div>
            </div>
            <a
              href={`#${BOOK_ID}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft-lg active:translate-y-0"
            >
              Book Your Free Demo
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Pricing ────────────────────────────────────────────── */}
      <section id="pricing" className="container-page scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{funnelPricing.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{funnelPricing.lead}</p>

          {funnelPricing.discount && (
            <div className="mx-auto mt-6 inline-flex flex-col items-center gap-1 rounded-2xl bg-brand-cta/10 px-6 py-3 sm:flex-row sm:gap-3">
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-cta">
                <Clock className="size-4" />
                {funnelPricing.discount.label}
              </span>
              <span className="text-sm font-medium text-foreground">{funnelPricing.discount.sub}</span>
            </div>
          )}
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-6 md:grid-cols-3">
          {funnelPricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl p-7 transition-all duration-300 ${
                tier.highlighted
                  ? "bg-foreground text-white shadow-soft-lg ring-2 ring-brand-cta md:-my-2"
                  : "border border-border bg-white shadow-soft"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-cta px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Most popular
                </span>
              )}
              <p className={`text-sm font-bold ${tier.highlighted ? "text-brand-cta" : "text-brand"}`}>{tier.name}</p>
              <p className={`mt-1 text-xs ${tier.highlighted ? "text-white/60" : "text-muted-foreground"}`}>
                {tier.tagline}
              </p>
              {tier.originalPrice && (
                <p className="mt-5 -mb-1 text-sm font-medium">
                  <span className={`line-through ${tier.highlighted ? "text-white/50" : "text-muted-foreground/70"}`}>
                    {tier.originalPrice}
                  </span>{" "}
                  <span className="font-bold text-brand-cta">{funnelPricing.discount?.label ?? "Save"}</span>
                </p>
              )}
              <div className={`flex items-end gap-1 ${tier.originalPrice ? "mt-1" : "mt-5"}`}>
                <span className="font-heading text-4xl font-bold tracking-tight">{tier.price}</span>
                {tier.period && (
                  <span className={tier.highlighted ? "text-white/60" : "text-muted-foreground"}>{tier.period}</span>
                )}
              </div>
              <p className={`mt-1 text-xs ${tier.highlighted ? "text-white/60" : "text-muted-foreground"}`}>
                {tier.setup}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                        tier.highlighted ? "bg-brand-cta text-white" : "bg-brand/10 text-brand"
                      }`}
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span className={tier.highlighted ? "text-white/90" : "text-muted-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`#${BOOK_ID}`}
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${
                  tier.highlighted
                    ? "bg-brand-cta text-white hover:bg-brand-cta-hover"
                    : "bg-brand-cta text-brand-cta-fg hover:bg-brand-cta-hover"
                }`}
              >
                Book a call
                <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">{funnelPricing.note}</p>
      </section>

      {/* ── FAQ (handle objections) ────────────────────────────── */}
      <section id="faq" className="scroll-mt-20 bg-surface py-16 md:py-24">
        <div className="container-page">
          <FAQAccordion
            items={funnel.faqs ?? industry.faqs}
            eyebrow=""
            heading="Frequently asked questions"
            lead={`Everything you need to know about ${site.name}.`}
            columns={2}
          />
        </div>
      </section>

      {/* ── Booking (the conversion point) ─────────────────────── */}
      <section id={BOOK_ID} className="scroll-mt-16 bg-gradient-to-b from-brand/[0.08] to-white py-16 md:py-24">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-cta/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-cta">
            <Clock className="size-3.5" />
            Free · 30 minutes · no obligation
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
            {funnel.bookingHeading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{funnel.bookingLead}</p>
        </div>

        <div className="container-page mx-auto mt-10 max-w-5xl">
          <BookingWidget />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Prefer to talk now? Call{" "}
            <a href={site.phone.href} className="font-semibold text-brand hover:underline">
              {site.phone.display}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Minimal footer ─────────────────────────────────────── */}
      <footer className="border-t border-border/60 bg-white">
        <div className="container-page flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <Image src="/images/logo1.png" alt={site.name} width={3136} height={760} className="h-7 w-auto" />
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
