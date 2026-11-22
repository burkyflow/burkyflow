import { renderIndex, sitemapSections } from "@/lib/sitemaps";

export const dynamic = "force-static";

// Sitemap index: one child sitemap per section (see lib/sitemaps.ts).
export function GET() {
  return new Response(renderIndex(sitemapSections()), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
