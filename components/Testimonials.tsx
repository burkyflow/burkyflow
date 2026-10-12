import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { Testimonial } from "@/content/testimonials";

export function Testimonials({
  items,
  eyebrow = "Client results",
  heading = "What our clients say",
}: {
  items: Testimonial[];
  eyebrow?: string;
  heading?: string;
}) {
  if (items.length === 0) return null;

  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{heading}</h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((t, i) => {
          const byline = [t.role, t.company].filter(Boolean).join(", ");
          return (
            <Reveal key={`${t.name}-${i}`} delay={(i % 3) * 0.06}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-soft ring-1 ring-border/60">
                {t.rating ? (
                  <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="size-4 fill-amber-400 text-amber-400" aria-hidden />
                    ))}
                  </div>
                ) : (
                  <Quote className="size-6 text-brand" aria-hidden />
                )}
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border/60 pt-4 text-sm">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  {(byline || t.location) && (
                    <p className="mt-0.5 text-muted-foreground">
                      {[byline, t.location].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  {t.caseStudySlug && (
                    <Link
                      href={`/case-studies/${t.caseStudySlug}`}
                      className="mt-3 inline-flex items-center gap-1 font-semibold text-brand hover:underline"
                    >
                      Read the case study
                      <ArrowRight className="size-4" />
                    </Link>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
