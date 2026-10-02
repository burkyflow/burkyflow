import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GeoLandingTemplate } from "@/components/GeoLandingTemplate";
import { resolveGeo } from "@/content/geo";
import { pageMetadata } from "@/lib/seo";

// PAID-TRAFFIC ALIAS.
// Note the reversed param order: /lp/[city]/[niche] (matches ad URL convention),
// while the organic canonical is /ai-automation/[niche]/[city].
// This route is `noindex` so it never competes with the organic page for ranking.
// No structured data here on purpose; schema lives on the indexed canonical.
type Params = { city: string; niche: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { city: citySlug, niche: nicheSlug } = await params;
  const geo = resolveGeo(nicheSlug, citySlug);
  if (!geo) return pageMetadata({ title: "Not found", description: "", path: "/" });
  const { niche, city } = geo;
  return pageMetadata({
    title: `AI Automation for ${niche.name} Businesses in ${city.name}`,
    description: `Book more ${niche.name} jobs in ${city.name} with AI automation from BurkyFlow.`,
    path: `/lp/${city.slug}/${niche.slug}`,
    noindex: true,
    canonicalPath: `/ai-automation/${niche.slug}/${city.slug}`,
  });
}

export default async function PaidLandingPage({ params }: { params: Promise<Params> }) {
  const { city: citySlug, niche: nicheSlug } = await params;
  const geo = resolveGeo(nicheSlug, citySlug);
  if (!geo) notFound();
  const { niche, city, pains, offers, faqs } = geo;
  return (
    <GeoLandingTemplate
      city={city}
      niche={niche}
      pains={pains}
      offers={offers}
      faqs={faqs}
    />
  );
}
