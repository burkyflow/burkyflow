import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { funnels, getFunnel } from "@/content/funnels";
import { getIndustry } from "@/content/industries";
import { testimonialsFor } from "@/content/testimonials";
import { pageMetadata } from "@/lib/seo";
import { FunnelPage } from "@/components/funnel/FunnelPage";
import { MetaPixelInline } from "@/components/MetaPixelInline";

type Params = { industry: string };

// Pre-render one ad funnel per industry.
export function generateStaticParams() {
  return Object.keys(funnels).map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { industry } = await params;
  const funnel = getFunnel(industry);
  const ind = getIndustry(industry);
  if (!funnel || !ind) return pageMetadata({ title: "Not found", description: "", path: "/" });
  // Ad funnels are noindex so they never compete with the organic industry pages.
  return pageMetadata({
    title: `${ind.name}, Book a Call`,
    description: funnel.subheadline,
    path: `/for/${industry}`,
    noindex: true,
    canonicalPath: `/industries/${industry}`,
  });
}

// Up to 3 real client testimonials, preferring ones from this industry.
function pickTestimonials(industrySlug: string) {
  return testimonialsFor(industrySlug).map((t) => ({
    text: t.quote,
    attribution: [t.name, t.company].filter(Boolean).join(", "),
    vertical: [t.role, t.location].filter(Boolean).join(" · ") || undefined,
    rating: t.rating,
  }));
}

export default async function IndustryFunnel({ params }: { params: Promise<Params> }) {
  const { industry } = await params;
  const funnel = getFunnel(industry);
  const ind = getIndustry(industry);
  if (!funnel || !ind) notFound();

  return (
    <>
      {/* Meta Pixel only on the home-services landing page (ads point here). */}
      {industry === "home-services" && <MetaPixelInline />}
      <FunnelPage
        funnel={funnel}
        industry={ind}
        testimonials={pickTestimonials(industry)}
      />
    </>
  );
}
