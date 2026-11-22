import { notFound } from "next/navigation";
import { renderUrlset, sitemapSections } from "@/lib/sitemaps";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return sitemapSections().map((s) => ({ section: `${s.id}.xml` }));
}

// One section of the sitemap, e.g. /sitemaps/blog.xml.
export async function GET(_req: Request, { params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const match = sitemapSections().find((s) => `${s.id}.xml` === section);
  if (!match) notFound();
  return new Response(renderUrlset(match.entries), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
