import { site } from "@/lib/site";
import { services } from "@/content/services";
import { branches, allBundles } from "@/content/catalogue";
import { caseStudies } from "@/content/case-studies";
import { wedges } from "@/content/wedges";
import { industries } from "@/content/industries";
import { posts } from "@/content/blog";
import { knownCombos, getNiche, getCity } from "@/content/geo";
import lastmodJson from "@/content/lastmod.json";

// Sitemap index at /sitemap.xml, one child sitemap per section at
// /sitemaps/<section>.xml. Search Console then reports indexing per section.
//
// Each page's lastmod is the newest git change among the files that produce it
// (see scripts/lastmod.mjs). Priority ranks pages within this site only.

export type SitemapEntry = { url: string; lastmod?: string; priority: number };
export type SitemapSection = { id: string; entries: SitemapEntry[] };

const fileDates = lastmodJson as Record<string, string>;

// Newest date among the given source files, if any are recorded.
function newest(...sources: (string | undefined)[]): string | undefined {
  const dates = sources.filter((d): d is string => Boolean(d)).sort();
  return dates.length ? dates[dates.length - 1] : undefined;
}
const fileDate = (...files: string[]) => newest(...files.map((f) => fileDates[f]));

// Shared templates and data per page family.
const HOME = ["app/page.tsx", "components/Hero.tsx", "components/TrustedBy.tsx", "components/AutomationExplainer.tsx", "components/ServiceCardGrid.tsx", "components/IndustryStrip.tsx", "components/LogoWall.tsx"];
const SERVICE = ["app/services/[slug]/page.tsx", "content/services.ts"];
const BRANCH = ["components/BranchPage.tsx", "content/catalogue.ts"];
const INDUSTRY = ["app/industries/[slug]/page.tsx", "content/industries.ts"];
const CASE = ["app/case-studies/[slug]/page.tsx", "content/case-studies.ts"];
const WEDGE = ["app/wedges/[slug]/page.tsx", "content/wedges.ts"];
const BUNDLE = ["app/bundles/[slug]/page.tsx", "content/catalogue.ts"];
const GEO = ["app/ai-automation/[niche]/[city]/page.tsx", "components/GeoLandingTemplate.tsx", "content/geo.ts"];

const postFile = (slug: string) =>
  Object.keys(fileDates).find((f) => /^content\/(blog|posts)\//.test(f) && (f.includes(`/${slug}.`) || f.includes(slug)));

export function sitemapSections(): SitemapSection[] {
  const u = (path: string) => `${site.url}${path}`;
  const newestPost = newest(...posts.map((p) => newest(p.modified, fileDate(postFile(p.slug) ?? ""))));

  const pages: SitemapEntry[] = [
    { url: u("/"), lastmod: fileDate(...HOME), priority: 1 },
    { url: u("/services"), lastmod: fileDate("app/services/page.tsx", "content/services.ts", "content/wedges.ts"), priority: 0.9 },
    { url: u("/industries"), lastmod: fileDate("app/industries/page.tsx", "content/industries.ts"), priority: 0.9 },
    { url: u("/missed-calls"), lastmod: fileDate("app/missed-calls/page.tsx"), priority: 0.9 },
    { url: u("/case-studies"), lastmod: fileDate("app/case-studies/page.tsx", "content/case-studies.ts"), priority: 0.8 },
    { url: u("/blog"), lastmod: newest(fileDate("app/blog/page.tsx"), newestPost), priority: 0.8 },
    { url: u("/bundles"), lastmod: fileDate("app/bundles/page.tsx", "content/catalogue.ts"), priority: 0.6 },
    { url: u("/about"), lastmod: fileDate("app/about/page.tsx"), priority: 0.6 },
    { url: u("/contact"), lastmod: fileDate("app/contact/page.tsx"), priority: 0.6 },
    { url: u("/privacy"), lastmod: fileDate("app/privacy/page.tsx"), priority: 0.3 },
    { url: u("/terms"), lastmod: fileDate("app/terms/page.tsx"), priority: 0.3 },
    { url: u("/refund-policy"), lastmod: fileDate("app/refund-policy/page.tsx"), priority: 0.3 },
  ];

  const serviceEntries: SitemapEntry[] = [
    ...services.map((s) => ({ url: u(`/services/${s.slug}`), lastmod: fileDate(...SERVICE), priority: 0.9 })),
    ...branches.map((b) => ({ url: u(`/services/${b.slug}`), lastmod: fileDate(`app/services/${b.slug}/page.tsx`, ...BRANCH), priority: 0.8 })),
    ...wedges.map((w) => ({ url: u(`/wedges/${w.slug}`), lastmod: fileDate(...WEDGE), priority: 0.6 })),
  ];

  const industryEntries = industries.map((i) => ({ url: u(`/industries/${i.slug}`), lastmod: fileDate(...INDUSTRY), priority: 0.8 }));
  const caseEntries = caseStudies.map((c) => ({ url: u(`/case-studies/${c.slug}`), lastmod: fileDate(...CASE), priority: 0.8 }));
  const blogEntries = posts.map((p) => ({
    url: u(`/blog/${p.slug}`),
    lastmod: newest(p.modified, fileDate(postFile(p.slug) ?? "")),
    priority: 0.7,
  }));
  const bundleEntries = allBundles.map((b) => ({ url: u(`/bundles/${b.slug}`), lastmod: fileDate(...BUNDLE), priority: 0.5 }));
  // Organic geo pages only. Paid /lp/ routes are intentionally excluded (noindex).
  const locationEntries = knownCombos
    .filter((c) => getNiche(c.niche) && getCity(c.city))
    .map((c) => ({ url: u(`/ai-automation/${c.niche}/${c.city}`), lastmod: fileDate(...GEO), priority: 0.7 }));

  return [
    { id: "pages", entries: pages },
    { id: "services", entries: serviceEntries },
    { id: "industries", entries: industryEntries },
    { id: "case-studies", entries: caseEntries },
    { id: "blog", entries: blogEntries },
    { id: "bundles", entries: bundleEntries },
    { id: "locations", entries: locationEntries },
  ];
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const day = (iso?: string) => (iso ? iso.slice(0, 10) : undefined);

export function renderUrlset(entries: SitemapEntry[]): string {
  const body = entries
    .map((e) => {
      const lm = day(e.lastmod);
      return `  <url>\n    <loc>${esc(e.url)}</loc>\n${lm ? `    <lastmod>${lm}</lastmod>\n` : ""}    <priority>${e.priority.toFixed(1)}</priority>\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export function renderIndex(sections: SitemapSection[]): string {
  const body = sections
    .map((s) => {
      const lm = day(newest(...s.entries.map((e) => e.lastmod)));
      return `  <sitemap>\n    <loc>${esc(`${site.url}/sitemaps/${s.id}.xml`)}</loc>\n${lm ? `    <lastmod>${lm}</lastmod>\n` : ""}  </sitemap>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>\n`;
}
