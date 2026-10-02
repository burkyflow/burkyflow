import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Allow crawling of paid pages so crawlers can read their noindex directives.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
