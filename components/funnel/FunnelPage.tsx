import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Star, Phone, ShieldCheck, Clock, Quote } from "lucide-react";
import { site } from "@/lib/site";
import { funnelPricing, type Funnel } from "@/content/funnels";
import type { Industry } from "@/content/industries";
import { FAQAccordion } from "@/components/FAQAccordion";
import { BookingWidget } from "@/components/BookingWidget";

type Testimonial = { text: string; attribution: string; vertical?: string };

const BOOK_ID = "book";

function CTA({ label = "Book your free call", className = "" }: { label?: string; className?: string }) {
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
      {/* ── Minimal funnel nav ─────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-white/85 backdrop-blur-md">
        <nav className="container-page flex h-16 items-center justify-between">
          <Link href="/" className="inline-flex items-center">
            <Image src="/images/logo1.png" alt={site.name} width={3136} height={760} priority className="h-7 w-auto" />
          </Link>
          <CTA label="Book a call" className="px-5 py-2.5 text-sm" />
        </nav>
      </header>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand/[0.06] to-white">
        <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-24 top-40 size-80 rounded-full bg-brand/10 blur-3xl" aria-hidden />

        <div className="container-page relative py-16 text-center md:py-24">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand shadow-soft">
            <ShieldCheck className="size-3.5" />
            {funnel.eyebrow}
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            {funnel.headline} <span className="text-gradient-brand">{funnel.headlineAccent}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{funnel.subheadline}</p>

          <div className="mt-9 flex justify-center">
            <CTA />
          </div>

          <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-foreground">
            {funnel.heroPoints.map((p) => (
              <li key={p} className="inline-flex items-center gap-2">
                <Check className="size-4 text-accent" strokeWidth={3} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── What we run (services, on top so they see the offer) ─ */}
      <section className="container-page py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">What you get</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{funnel.featuresHeading}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We build it, run it, and keep it tuned. You get booked jobs, not another tool to manage.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {funnel.features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col rounded-3xl border border-border bg-white p-7 shadow-soft"
            >
              <h3 className="text-lg font-bold tracking-tight">{f.title}</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {f.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTA />
        </div>
      </section>

      {/* ── Results (proof) ────────────────────────────────────── */}
      <section className="container-page pb-16 md:pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {funnel.results.map((r) => (
            <div
              key={r.label}
              className="rounded-2xl bg-brand-cta p-6 text-center text-brand-cta-fg shadow-soft"
            >
              <p className="font-heading text-4xl font-bold tracking-tight">{r.value}</p>
              <p className="mt-2 text-sm font-medium text-brand-cta-fg/90">{r.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Problem (agitate) ──────────────────────────────────── */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-page mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{funnel.problemHeading}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            If any of these are true, you&apos;re paying for leads you never get to talk to.
          </p>
        </div>
        <div className="container-page mx-auto mt-10 grid max-w-3xl gap-3">
          {funnel.problems.map((p) => (
            <div
              key={p}
              className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-border/60"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Phone className="size-3.5" />
              </span>
              <p className="text-sm text-foreground">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials (proof) ───────────────────────────────── */}
      {testimonials.length > 0 && (
        <section className="bg-surface py-16 md:py-20">
          <div className="container-page mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What business owners say</h2>
          </div>
          <div className="container-page mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.attribution}
                className="flex flex-col rounded-3xl bg-white p-7 shadow-soft ring-1 ring-border/60"
              >
                <Quote className="size-6 text-accent" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 border-t border-border/60 pt-4">
                  <p className="text-sm font-bold text-foreground">{t.attribution}</p>
                  {t.vertical && <p className="text-xs text-muted-foreground">{t.vertical}</p>}
                  <div className="mt-2 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* ── Pricing ────────────────────────────────────────────── */}
      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{funnelPricing.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{funnelPricing.lead}</p>

          {funnelPricing.discount && (
            <div className="mx-auto mt-6 inline-flex flex-col items-center gap-1 rounded-2xl bg-accent/10 px-6 py-3 sm:flex-row sm:gap-3">
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent">
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
                  ? "bg-foreground text-white shadow-soft-lg ring-2 ring-accent md:-my-2"
                  : "border border-border bg-white shadow-soft"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Most popular
                </span>
              )}
              <p className={`text-sm font-bold ${tier.highlighted ? "text-accent" : "text-brand"}`}>{tier.name}</p>
              <p className={`mt-1 text-xs ${tier.highlighted ? "text-white/60" : "text-muted-foreground"}`}>
                {tier.tagline}
              </p>
              {tier.originalPrice && (
                <p className="mt-5 -mb-1 text-sm font-medium">
                  <span className={`line-through ${tier.highlighted ? "text-white/50" : "text-muted-foreground/70"}`}>
                    {tier.originalPrice}
                  </span>{" "}
                  <span className="font-bold text-accent">Summer End Discount</span>
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
                        tier.highlighted ? "bg-accent text-white" : "bg-brand/10 text-brand"
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
                    ? "bg-accent text-white hover:bg-brand-cta-hover"
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
      <section className="bg-surface py-16 md:py-24">
        <div className="container-page">
          <FAQAccordion items={industry.faqs} eyebrow="Questions" heading="Frequently asked questions" />
        </div>
      </section>

      {/* ── Booking (the conversion point) ─────────────────────── */}
      <section id={BOOK_ID} className="scroll-mt-16 bg-gradient-to-b from-brand/[0.08] to-white py-16 md:py-24">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
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
        <div className="container-page flex flex-col items-center gap-4 py-8 pb-24 text-center sm:flex-row sm:justify-between sm:pb-8 sm:text-left">
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

      {/* ── Sticky mobile CTA, booking always one tap away ────── */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 px-4 py-3 backdrop-blur md:hidden">
        <a
          href={`#${BOOK_ID}`}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-cta px-6 py-3.5 text-base font-semibold text-brand-cta-fg shadow-soft-lg active:scale-[0.98]"
        >
          Book your free call
          <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
