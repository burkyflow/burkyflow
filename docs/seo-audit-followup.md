# Second SEO audit: fixes and remaining work

Reviewed October 3, 2026. Source: the supplied `burkyflow seo 2.pdf`.

The report grades the site A- overall, with A+ for on-page SEO, GEO, and performance, C for usability, and F for backlinks. Its PageSpeed figures are 83 mobile and 99 desktop. Homepage weight is 0.46 MB. These are the report's measurements, not a guarantee about other runs.

## Implemented in this follow-up

| Finding | Change |
| --- | --- |
| Homepage title only 48 characters | A 59-character title includes the full AI voice receptionist phrase, CRM automation, and the brand. Metadata uses explicit absolute titles so root-layout template behavior cannot silently omit the brand. |
| Seven images reported as missing alt text | These were decorative backgrounds with empty alt text. The dashboard, problem cards, and result cards now use CSS backgrounds. Informative images retain descriptive alt text. The dashboard background only loads at desktop widths. |
| Unused JavaScript | Scroll reveals now use progressive CSS animations, with visible server-rendered content and reduced-motion support. Static capability labels no longer hydrate a number-counting component. This removes the animation library from the homepage's active component tree. |
| Mobile LCP/rendering | Inter uses optional display to avoid a late font swap. Existing GTM initialization waits until browser idle after load. Header/footer logo artwork is resized and compressed to a 5.8 KB WebP instead of asking the image optimizer for a 3,840-pixel-wide logo. |
| Inline styling | Homepage chart heights, waveform bars, decorative patterns, and hidden tracking-frame styles moved to CSS classes. |
| Hidden mobile menu | Closed drawer markup is absent, so keyboard focus cannot enter invisible links. The open menu has dialog semantics, Escape handling, focus containment, and restores focus when closed. A skip-to-content link is available. |
| Contrast failures found by Lighthouse | Darkened coral buttons and small accent text, improved muted text and blue contrast on tinted surfaces, and removed low-contrast transparency from industry labels. Reveal animation no longer fades text. |

The implementation follows [Next.js metadata behavior](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) and [Google's treatment of decorative images](https://developers.google.com/style/images). Font behavior is informed by [web.dev's font-loading guidance](https://web.dev/learn/performance/optimize-web-fonts).

## Recommendations requiring a different kind of work

- **Backlinks (F):** The report shows one referring domain and no dofollow backlinks. Fixing navigation or schema cannot create external editorial links. Start with a documented client case study and a practical missed-call revenue guide, then seek relevant references from real clients, partners, and industry publications. The existing two guides and case-study pages are suitable landing pages. Track referring domains and qualified referral traffic, rather than purchasing bulk links. No outreach or third-party account changes were made.
- **YouTube:** Publish real product demonstrations, booking-workflow walkthroughs, and client-approved examples. Link each demonstration to the matching service or guide. Subscriber count changes require publishing and audience development.
- **Facebook Pixel:** The configured Pixel already tracks the home-services ad funnel. Adding tracking to every page is a marketing measurement decision, not an SEO requirement, and adds third-party script cost. Existing tracking scope remains intact.
- **Plain-text email:** The published business email remains usable and consistent with business schema. Hiding it in an image would reduce accessibility and make the contact details less useful to customers and answer engines. No email image or fake contact destination was added.
- **Redirects:** The canonical host is `https://www.burkyflow.com`. Audit this exact HTTPS URL to avoid including the existing bare-domain and HTTP redirects in a page-load test. Hosting already redirects the bare domain to www; application code does not redirect in the opposite direction.
- **CSS rendering:** Essential stylesheet loading can still appear as a render-blocking request. A stylesheet is not inherently an optimization failure; the relevant test is whether it materially delays visible content. Loading primary styles asynchronously can cause an unstyled initial page and layout shifts.

## Validation

The production build passes with TypeScript checks. `scripts/check-site.py` verifies public and paid routes, links, anchors, image requests, canonical/noindex behavior, structured data syntax, headings, and the homepage title and content-image descriptions. The full local crawl passed across 75 resources.

Lighthouse is run with mobile emulation and simulated throttling on the canonical production URL before and after deployment. Localhost runs support debugging but are not used as proof of production speed improvements. Scores vary with network conditions, Chrome, Lighthouse versions, and third-party activity; compare the metrics alongside the score.

## Production results

Verified on the live canonical URL after deployment of commit `c028e7e`, using Lighthouse 12.8.2 on October 3, 2026:

| Category | Mobile before this follow-up | Mobile after | Desktop after |
| --- | --- | --- | --- |
| Performance | 85 | 94 | 100 |
| Accessibility | 93 | 100 | 100 |
| SEO | 100 | 100 | 100 |

The mobile after-run recorded a 2.7-second LCP, 1.5-second first contentful paint, 110 ms total blocking time, and zero layout shift. Desktop recorded a 0.7-second LCP, zero total blocking time, and zero layout shift. These are individual lab runs on the canonical HTTPS URL, not field Core Web Vitals or new SEOptimer grades.

The production crawl visited 75 resources, checked 13 image requests and 182 fragment links, and returned zero errors. The homepage title contains 59 characters. The bare domain returns a single 308 redirect to the canonical www URL, which returns HTTP 200.

To reproduce the mobile Lighthouse run in PowerShell:

```powershell
npx --yes lighthouse https://www.burkyflow.com --output=json --output-path=lighthouse.json "--only-categories=performance,seo,accessibility" --chrome-flags="--headless --no-sandbox" --quiet
```

Add `--preset=desktop` for the desktop run. Audit the canonical URL when comparing page rendering; audit the bare domain separately when checking redirects.
