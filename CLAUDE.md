# BurkyFlow website: working rules for Claude Code

Marketing site for BurkyFlow (burkyflow.com). Next.js 16 App Router, React 18, Tailwind 3, deployed by Vercel from `main`.

## How changes go live

1. Work on a feature branch, never on `main`.
2. Before every push: `npx tsc --noEmit -p .`, `npm run lint`, `npm run build`, then `npm run start` and `python3 scripts/check-site.py` (crawls every page in the sitemap; must report 0 errors).
3. Stop the test server by PID: `ps aux | grep next-server | grep -v grep | awk '{print $2}' | xargs -r kill`. Do not use `pkill -f "next start"`; it kills the shell.
4. Run `npm run lastmod` before committing a release, so the sitemap's last-modified dates are current (see Sitemap below).
5. Going live means: open a PR to `main`, wait for the Vercel preview check to pass, merge, fast-forward the branch to `main`. Only the owner decides when something goes live; ask first.
6. If the build fails with "Module not found: @vercel/turbopack-next/internal/font/google/font", delete `.next` and build again. It is a stale cache, not a code problem.

## Writing rules (all pages and blogs)

- No em dashes anywhere, including blog posts. Use a comma, colon, period or parentheses. `scripts/check-site.py` does not check this, so grep for `—` before committing.
- US spelling.
- No invented statistics, anecdotes, "case studies", or unnamed-company stories. Only facts from the site's own content, or general mechanisms. Named results belong only on real Case Studies pages.
- The main service is called **AI Receptionist** (not "AI Voice Receptionist"). Its URL stays `/services/ai-voice-receptionist`; do not rename slugs.
- Use "vehicle service contract" or "service contract", never "extended warranty", when describing the product. "Warranty" is only the manufacturer's coverage.
- Compliance topics (TCPA, FDCPA, consent, opt-out) are described as general principles, never as legal advice, and always say counsel should review.
- Search titles (`seoTitle`, `title` in `pageMetadata`) must be 60 characters or fewer including the " | BurkyFlow" suffix, so about 48 characters of text. The homepage title must be 50–60 characters total (`check-site.py` enforces it).
- Meta descriptions: about 150 characters, written as a sentence that uses the page's target phrase.
- Do not add team members, founding dates, or where the team works from to the About page or anywhere else; the owner has decided to leave that out for now.
- Do not reintroduce ads, content, copywriting, Shopify, or persona/clone offers. They were removed from the catalogue and bundles on purpose.

## Content files

- `content/services.ts`: the six services. `seoTitle` / `seoDescription` override the search title and description.
- `content/industries.ts`: industries. `seoTitle` and optional `trades` (per-trade sections, used by Home Services).
- `content/case-studies.ts`: `seoTitle`, `seoDescription`, `h1` overrides. The car finance case study (`auto-finance-company`) is anonymized at the client's request: never add the client's name, city, or lender names back. `case-study.txt` is the raw source and is also scrubbed.
- `content/catalogue.ts`: service packages (tiers, scope, timelines) and bundles. Bundle `components` must be exact tier names from the packages, so the bundle page can show each package's scope and timeline. Industry bundles mirror the Industries list.
- `content/photos.ts`: Unsplash cover photos per service, industry, post, and blog topic pool. Photos are picked with Claude in Chrome (this environment cannot load images); add the bare `https://images.unsplash.com/photo-...` address.
- Renaming or removing a page: add a permanent redirect in `next.config.mjs` and keep the old address out of the sitemap.

## Blog

- Posts live in `content/posts/*.mdx` (the daily automation writes here) and `content/blog/*.md`. Front matter: `title`, `date`, `description`, `slug`, `category`, optional `seoTitle`, `image`, `tags`, `keywords`, `updated`.
- A post dated after today is not published: it stays out of the list, sitemap, and feed until a build on or after its date. Builds happen on each push to `main`, so a scheduled post appears at the next deploy on or after its date.
- `category` must exactly match a topic label to get its tab and colour: "AI Agents & n8n", "Missed Calls", "CRM & Reactivation", "Search Visibility", "Dealership and Auto Finance". Topics are defined in `components/BlogCard.tsx`.
- Covers are unique per post: each post takes the next unused photo from its topic pool in `content/photos.ts`. When a pool runs out the build logs a warning; add photos rather than reusing.
- Keep one post per date. The daily automation and any scheduled series should not land on the same day.
- Quotes in a quoted YAML string must be escaped (`\"`); an unescaped quote breaks the build at the sitemap step.
- The RSS feed is `/blog/feed.xml` (30 newest). IndexNow submission runs from `.github/workflows/indexnow.yml` after each deploy; its key file is in `public/`.

## Sitemap and SEO plumbing

- `/sitemap.xml` is an index of section sitemaps built in `lib/sitemaps.ts` (`/sitemaps/pages.xml`, `services`, `industries`, `case-studies`, `blog`, `bundles`, `locations`).
- Last-modified dates come from `content/lastmod.json`, written by `scripts/lastmod.mjs` from git history. `npm run lastmod` refreshes it; `prebuild` also runs it but keeps the committed file when git history is shallow (Vercel). Commit the refreshed file with each release.
- `/lp/*` pages are paid landing pages, `noindex`, and intentionally not in the sitemap.
- Security headers (Referrer-Policy, X-Content-Type-Options, X-Frame-Options, Permissions-Policy, report-only CSP) are set in `next.config.mjs`. Do not make the CSP enforcing without listing GTM, the Meta Pixel, the Stape gateway (`cpg.burkyflow.com`), and the booking widget host.

## Things that need the owner

- Search Console (indexing requests, sitemap and feed submission, removals) is done through Claude in Chrome with a prompt from the session; this environment cannot reach google.com or burkyflow.com.
- Keyword research uses the OpenSEO connector (project "Burkyflow.com"); it spends credits, so ask before research.
- Keyword targets already researched are in `docs/keywords.md`: check it before researching again, and update it when titles change.
- New blogs come from `docs/blog-queue.md`: take the next row, follow its target phrase and points, then move the row to Done.
- The GitHub repository should be private; the owner handles that.
