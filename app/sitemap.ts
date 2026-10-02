import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { branches, allBundles } from "@/content/catalogue";
import { caseStudies } from "@/content/case-studies";
import { wedges } from "@/content/wedges";
import { industries } from "@/content/industries";
import { posts } from "@/content/blog";
import { knownCombos, getNiche, getCity } from "@/content/geo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticPaths = ["", "/about", "/services", "/bundles", "/case-studies", "/industries", "/blog", "/contact", "/missed-calls", "/privacy", "/terms"];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  for (const b of branches) {
    entries.push({ url: `${base}/services/${b.slug}`, priority: 0.8 });
  }
  for (const s of services) {
    entries.push({ url: `${base}/services/${s.slug}`, priority: 0.6 });
  }
  for (const i of industries) {
    entries.push({ url: `${base}/industries/${i.slug}`, priority: 0.6 });
  }
  for (const c of caseStudies) {
    entries.push({ url: `${base}/case-studies/${c.slug}`, priority: 0.7 });
  }
  for (const w of wedges) {
    entries.push({ url: `${base}/wedges/${w.slug}`, priority: 0.9 });
  }
  for (const b of allBundles) {
    entries.push({ url: `${base}/bundles/${b.slug}`, priority: 0.6 });
  }
  for (const p of posts) {
    entries.push({ url: `${base}/blog/${p.slug}`, lastModified: new Date(p.modified), priority: 0.5 });
  }
  // Organic geo pages only. Paid /lp/ routes are intentionally excluded (noindex).
  for (const c of knownCombos) {
    if (!getNiche(c.niche) || !getCity(c.city)) continue;
    entries.push({
      url: `${base}/ai-automation/${c.niche}/${c.city}`,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}
