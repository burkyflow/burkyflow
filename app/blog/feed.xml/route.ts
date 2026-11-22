import { posts } from "@/content/blog";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// RSS feed of the newest published blogs. Search engines read feeds often, so new
// blogs are discovered quickly; readers and newsletter tools can subscribe too.
export function GET() {
  const items = posts.slice(0, 30).map((p) => {
    const url = `${site.url}/blog/${p.slug}`;
    return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${p.date}T12:00:00Z`).toUTCString()}</pubDate>
      ${p.category ? `<category>${esc(p.category)}</category>\n      ` : ""}<description>${esc(p.excerpt)}</description>
    </item>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(site.name)} Blog</title>
    <link>${site.url}/blog</link>
    <atom:link href="${site.url}/blog/feed.xml" rel="self" type="application/rss+xml" />
    <description>Practical guides on AI call answering, missed-call recovery, CRM follow-up, and dealership revenue recovery for service businesses.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items.join("\n")}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
