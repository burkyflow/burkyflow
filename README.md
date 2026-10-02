# BurkyFlow

Marketing site for BurkyFlow, an AI automation agency for service businesses. Light theme, trust-driven, modeled on the Marketing 360 alternating-section pattern with BurkyFlow branding.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS (design tokens in `app/globals.css`)
- shadcn/ui-style primitives (`components/ui/*`) on Radix
- Framer Motion for subtle scroll reveals only
- Lucide icons
- Deploy target: Vercel

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Project structure

```
app/
  page.tsx                          Home
  about/  services/  industries/    Main pages (index + dynamic [slug])
  blog/                             Blog index + [slug]
  contact/                          Contact (carries LocalBusiness JSON-LD)
  ai-automation/[niche]/[city]/     Organic geo landing pages (indexed)
  lp/[city]/[niche]/                Paid alias of the same template (noindex)
  sitemap.ts  robots.ts             Generated /sitemap.xml and /robots.txt
components/                         The 10 building blocks + ui primitives
content/                            All copy/data: services, industries, geo, blog, stats
lib/                                site config, seo + JSON-LD helpers, utils
public/                             mcp.json, llms.txt, llms-full.txt
```

All copy lives in `content/` and `lib/site.ts`. You should not need to touch component code to change words or add pages.

## Design tokens / rebranding

The brand colors are defined as CSS tokens. To rebrand, edit two pairs in
`app/globals.css`:

```css
--brand: 199 89% 48%;          /* main accent (HSL channels) */
--brand-cta: 199 89% 48%;      /* CTA color, can differ */
```

Everything (buttons, eyebrows, CTA bands, icons) reads from these. Type uses one shared Inter family via `next/font`.

## Adding a new geo landing page

Geo pages are data-driven from `content/geo.ts`.

1. Add the city to `cities` (if new) and the niche to `niches` (if new). Each niche carries default `pains`.
2. (Optional) Add an override to `combos` keyed `"niche/city"` to customize pains, offers, or FAQs. Skip it and the template renders sensible defaults plus auto-generated, locally phrased FAQs.
3. Add the pair to `knownCombos` so it pre-renders and lands in the sitemap.

The organic URL is `/ai-automation/[niche]/[city]` (keyword in path, indexed,
`Service` + `FAQPage` JSON-LD). The paid alias `/lp/[city]/[niche]` renders the
same template but is `noindex` and excluded from the sitemap, so paid traffic
never competes with organic ranking.

Example reference page: `/ai-automation/hvac/houston`.

## Adding a new industry or service

- Service: append to `content/services.ts`. It automatically appears on the
  homepage sections, `/services`, the footer, and gets its own
  `/services/[slug]` page.
- Industry: append to `content/industries.ts`. Appears in the industry strip,
  `/industries`, the footer, and gets `/industries/[slug]`.

## SEO and schema notes

Organization and WebSite JSON-LD are global. Home and Contact include the registered business details. City pages use Service.areaServed and describe remote coverage.

The site has llms.txt, llms-full.txt, and an informational service catalog at mcp.json. These resources describe published services and contact options.

For the audit implementation, verification results, and post-deployment work, see [SEO improvements](docs/seo-improvements.md).

To crawl a running production build:

```bash
npm run build
npm run start
python scripts/check-site.py
```