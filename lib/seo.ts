import type { Metadata } from "next";
import { site } from "./site";

export function pageMetadata({
  title,
  description,
  path = "/",
  noindex = false,
  canonicalPath = path,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
  canonicalPath?: string;
}): Metadata {
  const url = `${site.url}${path}`;
  const ogImage = {
    url: "/images/logo.png",
    width: 502,
    height: 502,
    alt: site.name,
  };
  return {
    title,
    description,
    alternates: { canonical: `${site.url}${canonicalPath}` },
    robots: noindex ? { index: false, follow: true } : {
      index: true, follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}

// ── JSON-LD builders ─────────────────────────────────────────────────────

// Organization with the REAL registered address. Use on Contact + as provider.
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    logo: { "@type": "ImageObject", url: `${site.url}/images/logo.png` },
    telephone: site.phone.href.replace("tel:", ""),
    address: { "@type": "PostalAddress", ...site.address },
    contactPoint: { "@type": "ContactPoint", telephone: site.phone.href.replace("tel:", ""), email: site.email, contactType: "sales", availableLanguage: "English" },
    url: site.url,
    description: site.tagline,
    email: site.email,
    sameAs: Object.values(site.social),
    areaServed: site.serviceAreas,
  };
}

// Registered business details on home and contact; no fabricated city offices.
export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#business`,
    name: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phone.href.replace("tel:", ""),
    image: `${site.url}/images/logo.png`,
    parentOrganization: { "@id": `${site.url}/#organization` },
    address: {
      "@type": "PostalAddress",
      ...site.address,
    },
    areaServed: site.serviceAreas,
  };
}

// Service schema for geo pages. Declares a remotely served area honestly via
// areaServed + provider. NO LocalBusiness, no fabricated local address.
export function serviceLd({
  serviceName,
  description,
  cityName,
  state,
  url,
}: {
  serviceName: string;
  description: string;
  cityName: string;
  state: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    serviceType: "AI automation for service businesses",
    provider: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.legalName,
      url: site.url,
    },
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: { "@type": "State", name: state },
    },
    url,
  };
}

// BreadcrumbList — reinforces the silo structure for crawlers.
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

// ItemList of the AI services offered for a given industry — lets crawlers see
// exactly what we provide per industry.
export function serviceItemListLd({
  name,
  services,
}: {
  name: string;
  services: { name: string; url: string; description: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        url: s.url,
        provider: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url },
        areaServed: site.serviceAreas,
      },
    })),
  };
}

// Service schema for a single service detail page.
export function serviceDetailLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "AI automation for service businesses",
    provider: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url },
    areaServed: site.serviceAreas,
    url,
  };
}

export function faqPageLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "en-US",
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function articleLd(post: { slug: string; title: string; excerpt: string; date: string; modified: string }) {
  const url = `${site.url}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.modified,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: `${site.url}/about` },
    publisher: { "@id": `${site.url}/#organization` },
    image: `${site.url}/images/logo.png`,
    inLanguage: "en-US",
  };
}
