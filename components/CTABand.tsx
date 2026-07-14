import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

// Centered pre-footer CTA. Rendered by <Footer /> on its shared gradient — no box.
export function CTABand({
  heading = "Ready to grow revenue without growing headcount?",
  lead = "Book a short call and we will quantify exactly how much revenue you are leaking today, and show you the highest-value gap to close first.",
  primaryHref = site.ctaHref,
  primaryLabel = site.ctaLabel,
  secondaryHref = "/services",
  secondaryLabel = site.secondaryCtaLabel,
}: {
  heading?: string;
  lead?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {heading}
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">{lead}</p>
      <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href={primaryHref}>
            {primaryLabel}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href={secondaryHref}>{secondaryLabel}</Link>
        </Button>
      </div>
    </div>
  );
}
