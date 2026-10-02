# SEO, GEO, and AEO improvements

Implemented locally on October 3, 2026, using the supplied BurkyFlow SEO Audit report. The report's homepage grades were A+ for on-page SEO and GEO, F for links, B- for usability, and C- for performance. Its mobile PageSpeed score was 65, with a 10.7-second LCP. These are the report's historical measurements, not measurements of this update.

## Changes mapped to the audit

| Audit item | Implementation |
| --- | --- |
| Reduce page size and optimize images | Converted ten large PNG assets to WebP, preserving dimensions. Their combined size fell from 11,413,437 to 153,552 bytes (98.7%). Components request the new assets; originals remain available. Below-fold images load lazily with explicit dimensions and asynchronous decoding. |
| Mobile performance | Replaced the changing hero heading with stable server-rendered text. The decorative desktop dashboard is lazy-loaded and requests a minimal source on mobile. Consolidated two Inter font definitions into one. Scroll-reveal content is visible in the initial HTML. |
| Keywords in important tags | Homepage title, description, introductory content, and an answer heading describe AI voice receptionists, CRM automation, and service businesses. |
| Heading structure | Footer column labels use paragraph elements; industry and case-study index card titles use H2 after H1. |
| Image alt attributes | All rendered images have alt attributes. Decorative images use empty alt text; content images retain descriptive labels. |
| Address and telephone | The shared footer displays the registered Wyoming address, telephone, email, and remote service coverage. |
| Business schema | Organization and WebSite entities have stable IDs. Home and contact pages include ProfessionalService details with telephone, address, image, and the organization reference. City pages continue to declare remote Service coverage without claiming local offices. |
| Crawl and canonical behavior | Added omitted public pages to the sitemap. Paid routes use noindex, follow and reference their organic counterparts. Robots allows crawling so the noindex directives can be read. Added a permanent www-to-apex redirect. Sitemap timestamps no longer imply every page changed at each build. |
| Facebook Pixel | Existing Pixel remains on the home-services ad funnel; existing Google Tag Manager remains available. Avoided adding duplicate tracking just to satisfy the scanner. |
| Render-blocking resources and inline styles | Reduced font duplication and kept nonessential scripts deferred. Framework animation styles and necessary decorative styles remain; removing them merely to satisfy a scanner would not establish a performance benefit. |

## GEO and AEO

- Added a concise, server-rendered overview with service definitions, descriptive links, coverage, and scoping details.
- Added homepage FAQ and service-list JSON-LD matching the actual content.
- Added BlogPosting schema, article Open Graph metadata, publisher attribution, publication/update dates, and breadcrumb schema to blog articles.
- Expanded both articles with direct answers, implementation steps, measurement guidance, and links to relevant services. The missed-call revenue example is explicitly hypothetical and accounts for booking probability rather than treating every missed call as a lost job.
- Aligned brand name, contact email, and logo location in llms.txt, llms-full.txt, and the static service catalog. The catalog is informational; it is not an executable MCP server. Removed its unsupported schema URL.
- Escaped less-than characters in JSON-LD serialization and associated FAQ controls with their answer regions.

These changes follow [Google's AI-feature guidance](https://developers.google.com/search/docs/appearance/ai-features): make useful information crawlable and keep structured data consistent with visible content. llms.txt is a supplemental content index, not a guarantee of indexing or AI citations. FAQ markup does not guarantee rich results.

## Placeholder and link cleanup

- Removed the screenshot's TODO/source strip and its unverified numerical claims. The cards now describe call capture, lead follow-up, and revenue measurement.
- Removed the city-page placeholder reviews and implied local testimonials.
- Replaced fictional client logos with industry labels, and changed the platform strip to describe integrations rather than endorsements.
- Replaced aggregate results explicitly identified in the source as placeholders with service capabilities, including on the About page.
- Removed the newsletter form that posted to `#`; visitors can read the blog instead.
- Removed draft funnel prices, struck-through prices, and the seasonal promotion; pricing is scoped on a call.
- Replaced empty artwork slots with a decorative workflow mark. Removed source TODOs in application content.

## Validation

`npm run build` passes, including TypeScript checking and generation of 74 build routes/pages.

Run the production server with `npm run start`, then `python scripts/check-site.py`. The final crawl visited 75 resources: 64 sitemap pages, all five industry funnels, all five published paid city aliases, and the linked sitemap resource. It checked 17 image requests, 108 fragment links, page canonicals/descriptions, H1 and heading structure, JSON-LD syntax, alt attributes, empty links/forms, draft content, noindex placement, and a nonexistent service route returning 404. It returned zero errors.

LinkedIn, Instagram, Facebook, YouTube, X, the booking widget, and its embed script each returned HTTP 200 during the external check. Social platforms may gate profile content despite HTTP 200; this check establishes that the URLs responded, not that every profile detail is available anonymously.

Compressed hero artwork was inspected directly. A live browser was unavailable in this session, so viewport screenshots, interactive browser behavior, and a fresh Lighthouse/PageSpeed run were not verified. No new PageSpeed score or ranking improvement is claimed. This change has not been deployed.

## Work after deployment

1. Verify the production www-to-apex redirect is one hop and check that hosting/CDN redirects do not conflict. Confirm HTTPS and canonical behavior on actual production URLs.
2. Run PageSpeed Insights on home, a service page, and a city page on mobile and desktop. Track LCP, CLS, and INP using real traffic when enough data becomes available.
3. Submit the sitemap in Google Search Console and Bing Webmaster Tools. Inspect the main pages, confirm paid routes remain excluded, and monitor queries, conversions, and available AI citation reporting.
4. Address the report's F for backlinks through relevant earned links: complete accurate company profiles, publish documented client case studies with permission, and offer useful measurement guides to industry partners. Prioritize relevant referring domains and measurable referral traffic; a source-code edit cannot create legitimate backlinks.
5. Publish useful YouTube demonstrations and connect them to the corresponding guides. Subscriber growth requires ongoing publishing and audience development.

Use actual client evidence before adding testimonials, aggregate outcome claims, or numerical pricing. The registered address identifies the company; it does not imply walk-in service or an office in a remotely served city.
