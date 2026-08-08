import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { funnels, getFunnel } from "@/content/funnels";
import { getIndustry } from "@/content/industries";
import { caseStudies } from "@/content/case-studies";
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
  });
}

// Pick up to 3 real testimonials, preferring ones tagged to this industry.
function pickTestimonials(industrySlug: string) {
  const withQuote = caseStudies.filter((c) => c.quote);
  const matched = withQuote.filter((c) => c.relatedIndustries.includes(industrySlug));
  const rest = withQuote.filter((c) => !c.relatedIndustries.includes(industrySlug));
  return [...matched, ...rest].slice(0, 3).map((c) => ({
    text: c.quote!.text,
    attribution: c.quote!.attribution,
    vertical: c.vertical,
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
        testimonials={funnel.testimonials ?? pickTestimonials(industry)}
      />
    </>
  );
}
