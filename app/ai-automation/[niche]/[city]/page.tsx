import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GeoLandingTemplate } from "@/components/GeoLandingTemplate";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { resolveGeo, knownCombos } from "@/content/geo";
import { site } from "@/lib/site";
import { pageMetadata, serviceLd, faqPageLd, breadcrumbLd } from "@/lib/seo";

type Params = { niche: string; city: string };

// Pre-render known organic combinations.
export function generateStaticParams() {
  return knownCombos;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { niche: nicheSlug, city: citySlug } = await params;
  const geo = resolveGeo(nicheSlug, citySlug);
  if (!geo) return pageMetadata({ title: "Not found", description: "", path: "/" });
  const { niche, city } = geo;
  return pageMetadata({
    title: `AI Automation for ${niche.name} in ${city.name}, ${city.stateAbbr}`,
    description: `BurkyFlow helps ${city.name} ${niche.plural} capture every call, reactivate dormant leads, and book more jobs with AI automation. Serving ${city.name} and ${city.state} remotely.`,
    path: `/ai-automation/${niche.slug}/${city.slug}`,
  });
}

export default async function GeoPage({ params }: { params: Promise<Params> }) {
  const { niche: nicheSlug, city: citySlug } = await params;
  const geo = resolveGeo(nicheSlug, citySlug);
  if (!geo) notFound();
  const { niche, city, pains, offers, faqs } = geo;
  const url = `${site.url}/ai-automation/${niche.slug}/${city.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "AI Automation", path: "/services" },
    { name: `${niche.name} in ${city.name}`, path: `/ai-automation/${niche.slug}/${city.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceLd({
            serviceName: `AI Automation for ${niche.name} Businesses in ${city.name}`,
            description: `AI voice receptionist, database reactivation, and after-hours call capture for ${city.name} ${niche.plural}.`,
            cityName: city.name,
            state: city.state,
            url,
          }),
          faqPageLd(faqs),
          breadcrumbLd(crumbs),
        ]}
      />
      <Breadcrumb items={crumbs} />
      <GeoLandingTemplate
        city={city}
        niche={niche}
        pains={pains}
        offers={offers}
        faqs={faqs}
      />
    </>
  );
}
