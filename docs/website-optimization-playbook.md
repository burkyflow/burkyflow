# Website optimization playbook

Everything done on burkyflow.com, written as a checklist to repeat on another site. Each phase lists what to do, where it lived in the BurkyFlow repository (copy from there), and how to prove it is done. Written for a Claude Code session working in the new site's repository with the owner approving go-live.

Replace `SITE` with the new domain and `OWNER` with the person who approves releases.

---

## Phase 0: Ground rules (write these into the new repo's `CLAUDE.md` first)

Copy `CLAUDE.md` from burkyflow and adapt it. The rules that mattered most:

- Work on a feature branch, never on `main`. Going live is: open a PR, wait for the hosting preview check, merge, fast-forward the branch. Only OWNER decides when something goes live.
- Before every push: type check, lint, production build, start the built site and crawl every page in the sitemap (`scripts/check-site.py`, must report 0 errors). Stop the test server by PID, never `pkill -f`.
- Writing rules: no em dashes anywhere (grep for `—` before committing); US spelling; no invented statistics, anecdotes, case studies, or unnamed-company stories; named results only on real case-study pages; compliance topics as general principles with "counsel should review".
- Naming rules for the product (one canonical service name, URLs never renamed).
- Search title 60 characters or fewer including the ` | Brand` suffix (about 48 of text); homepage title 50 to 60 total. Meta description about 150 characters, never over 155, written as a sentence with the page's target phrase first.
- Things only the owner can do: Search Console, paid keyword research, making the repo private, go-live.
- A `docs/keywords.md` (researched targets per page) and `docs/blog-queue.md` (next posts) so research is never repeated.

Done when: `CLAUDE.md` exists, a session can read it and work without asking what the rules are.

---

## Phase 1: Technical baseline and release tooling

1. **Build hygiene.** Latest framework patch, `npm ci` clean, type check and lint green. Known gotcha on Next.js: a stale `.next` cache throws "Module not found: @vercel/turbopack-next/internal/font/google/font"; delete `.next` and rebuild.
2. **Site crawler.** Port `scripts/check-site.py`. It reads `/sitemap.xml`, follows every child sitemap, fetches every page, and reports: missing or duplicate title, title length, missing description, broken internal links, skipped heading levels, homepage title length. Fix until 0 errors and keep it in the pre-push routine.
3. **Security headers** in the framework config: Referrer-Policy, X-Content-Type-Options, X-Frame-Options, Permissions-Policy, and a report-only CSP. Do not make the CSP enforcing until every third-party host (tag manager, pixel, tracking gateway, booking widget) is listed.
4. **Redirects.** Every renamed or removed page gets a permanent redirect in the framework config and leaves the sitemap. Keep a list in `CLAUDE.md`.
5. **Images.** No file in `public/` over 100 KB without a reason; convert hero PNG/JPG to WebP (PIL or cwebp, quality 80 to 85 usually lands under 100 KB). Every image has width and height or the `fill` pattern with a `sizes` attribute. Remote images go through the framework's image optimizer with AVIF/WebP enabled.

Done when: build, lint, type check and crawler all pass; headers visible in a response; no image over 100 KB without a reason.

---

## Phase 2: Sitemap, feed, and indexing plumbing

1. **Sitemap index.** One `/sitemap.xml` that indexes section sitemaps (`/sitemaps/pages.xml`, `services`, `industries`, `case-studies`, `blog`, `bundles`, `locations`). Port `lib/sitemaps.ts` and the two route files under `app/sitemap.xml` and `app/sitemaps/[section]`. Paid landing pages (`/lp/*`) are `noindex` and stay out.
2. **Last-modified dates.** Port `scripts/lastmod.mjs`: it writes `content/lastmod.json` from git history, runs as `prebuild`, and keeps the committed file when the clone is shallow (Vercel). Run `npm run lastmod` before each release and commit the file.
3. **RSS feed** at `/blog/feed.xml` (newest 30), linked from the blog index metadata. Submit it in Search Console as a sitemap too; it got new posts crawled fastest.
4. **IndexNow.** Port `.github/workflows/indexnow.yml` and generate a new key file in `public/`. It submits changed URLs to Bing and partners after each deploy.
5. **Daily rebuild.** Port `.github/workflows/daily-rebuild.yml`: an empty commit to `main` just after midnight UTC so posts dated today go live without a manual push. Requires `contents: write`.
6. **Structured data** in `lib/seo.ts`: `pageMetadata` (title, description, canonical, Open Graph, Twitter, noindex), `localBusinessLd`, `breadcrumbLd`, `articleLd`, `faqPageLd`, `serviceDetailLd`. Breadcrumbs on every inner page; FAQPage only where the FAQ text is visible on the page and identical to the schema.

Done when: Search Console shows the sitemap index with all children "Success", the feed is accepted, and `check-site.py` passes.

---

## Phase 3: Keyword research and on-page targets

1. Ask OWNER before spending research credits (OpenSEO or whichever tool is connected). Check `docs/keywords.md` first.
2. For each page type, find one primary phrase and two or three secondary phrases with real US volume; prefer phrases where the site can plausibly rank (service + audience + intent).
3. Write the targets into `docs/keywords.md` as a table: page, primary phrase (volume), secondary phrases, current title. Update it whenever a title changes.
4. Apply to content: `seoTitle` and `seoDescription` fields on services, industries, case studies (overrides that leave the H1 and page copy alone); page titles and descriptions in `pageMetadata` for static pages; the primary phrase at the start of the title, in the H1 where natural, in the first paragraph, and in at least one H2.
5. Add intro paragraphs that carry the trade or audience phrases (for example per-trade sections on an industry page).

Done when: every indexable page has a target in `docs/keywords.md`, titles 30 to 60 characters, descriptions 100 to 155.

---

## Phase 4: Page-level audit (the Screaming Frog pass)

Run a local crawl after the build (the audit script in the burkyflow session: fetch every sitemap page, parse title, description, H1s, body word count, images) and fix:

- Titles over 60 or under 30 characters.
- Descriptions over 155.
- H1 over 70 characters, or more than one H1 (watch for a Markdown `#` inside a blog body that duplicates the title).
- Pages under 300 words of body text: add specific copy (what is included, who it is for, how setup works, 2 to 3 FAQs), never filler, never invented numbers.
- Images missing dimensions.

Done when: the crawl reports zero items in each list and `check-site.py` is clean.

---

## Phase 5: Content catalogue and bundles

- Services in `content/services.ts` (name, slug, lead, intro paragraphs, FAQs, `seoTitle`, `seoDescription`).
- Industries in `content/industries.ts` (`seoTitle`, `seoDescription`, optional per-trade sections, FAQs).
- Packages and bundles in `content/catalogue.ts`: bundle `components` are exact tier names so the page can show each package's scope and timeline; `setupTime`, `bestFor`, `whyThisBundle`, `outcomes`, `howItWorks` (4 steps), `faqs` (3). Industry bundles mirror the Industries list exactly.
- Case studies in `content/case-studies.ts` with `seoTitle`, `seoDescription`, `h1`. Anonymize on request and scrub every raw source file too.
- Remove offers the owner does not sell any more and add redirects for their old URLs.

Done when: every bundle page is over 300 words with FAQPage schema and links to the packages it contains.

---

## Phase 6: Blog system

1. **Loader** (`content/blog.ts`): reads `content/blog/*.md` and `content/posts/*.mdx`; front matter `title`, `date`, `description`, `slug`, `category`, optional `seoTitle`, `image`, `tags`, `keywords`, `updated`, `faqs`. Posts dated after today are hidden from the list, sitemap and feed until a build on or after that date. Headings are shifted so the title is the only H1. Escape quotes inside quoted YAML strings.
2. **Topics** (`components/BlogCard.tsx`): a fixed set of categories, each with label, color tone, pill class, icon, and the service page it links to. `category` must match a label exactly. Keep the set small (six on burkyflow).
3. **Covers** (`content/photos.ts`): one Unsplash pool per topic; each post takes the next unused photo from its pool, so covers never repeat. Keep each pool larger than the number of posts expected in that topic; the build warns when a pool is empty. Review photos visually before adding (free `photo-` addresses, landscape, no text or logos). Cloud sessions need `images.unsplash.com` allowed in the environment to look at them.
4. **Index page**: topic tabs plus an "All posts" view that rotates topics round-robin so one subject never runs in a block.
5. **Post page**: cover, topic pill, date and read time, body, FAQ section (H2 "Frequently asked questions", H3 per question) with matching FAQPage JSON-LD, "Related service" link, "Recommended reading" (same topic first).
6. **FAQs on every post**: 4 or 5, phrased as a business owner would type into Google or ChatGPT, answers 2 to 3 sentences each, only facts from the post or service pages, no question repeated across posts.
7. **Schedule** (`content/BLOG_SCHEDULE.md`, `scripts/blog-schedule.mjs`, `npm run blog:schedule`): pre-written posts on fixed weekdays (Monday and Friday on burkyflow), one weekday reserved for the automation, never two posts on one date, never weekends. The script lists upcoming posts and fails on a violation. Run it before committing any dated post.
8. **Queue** (`docs/blog-queue.md`): 30 keyword-led topics ordered by volume with primary and secondary phrases, title, category, must-cover points, and internal links. Move rows to Done as posts publish.
9. **Automation prompt** (n8n plus Gemini on burkyflow): the full prompt is in the session notes; its rules are the writing rules above plus the exact front matter format, the exact category strings, the `faqs` block, the allowed internal link paths, 1,200 to 1,600 words, and a ban on `< > { }` characters in MDX bodies. Add two guard nodes before the commit: reject em dashes or stray angle brackets, reject invalid front matter or a missing `faqs` list.

Done when: a test post with `faqs` renders the FAQ section and schema, `blog:schedule` passes, the feed lists it, and the cover is unique.

---

## Phase 7: Search Console and indexing (owner, through Claude in Chrome)

The cloud session cannot reach google.com or the live site, so give the owner a prompt for Claude in Chrome each time:

1. Verify the property, submit `/sitemap.xml` and `/blog/feed.xml`.
2. After the first release, request indexing for the homepage, each service, each industry, the blog index, and the three or four highest-value posts.
3. Export the Pages report; for "Discovered, currently not indexed" pages add internal links from the homepage or the relevant index page and request again.
4. Re-check two weeks after each content release; request indexing for pages whose titles or descriptions changed.

Done when: every page in the sitemap is indexed or has a documented reason.

---

## Phase 8: Release routine (every time)

1. `npx tsc --noEmit -p .`, `npm run lint`, `rm -rf .next && npm run build`.
2. `npm run start`, `python3 scripts/check-site.py` (0 errors), stop the server by PID.
3. `npm run blog:schedule` if any post changed. Grep for `—`.
4. `npm run lastmod`, commit with a message that says what changed and why, push the branch.
5. Open the PR to `main`, wait for the preview check, merge, fast-forward the branch, confirm the production deployment succeeded.
6. If `main` moved underneath (the daily rebuild commit or another session), merge `main` into the branch first; on date conflicts keep the agreed schedule.

---

## Files to copy from the burkyflow repository

| Purpose | Path |
|---|---|
| Working rules | `CLAUDE.md` |
| Crawler | `scripts/check-site.py` |
| Last-modified dates | `scripts/lastmod.mjs`, `content/lastmod.json` (regenerate) |
| Blog schedule check | `scripts/blog-schedule.mjs`, `content/BLOG_SCHEDULE.md` |
| Sitemap index | `lib/sitemaps.ts`, `app/sitemap.xml/route.ts`, `app/sitemaps/[section]/route.ts` |
| Feed | `app/blog/feed.xml/route.ts` |
| SEO helpers | `lib/seo.ts`, `components/JsonLd.tsx`, `components/Breadcrumb.tsx` |
| Blog loader, cards, covers | `content/blog.ts`, `components/BlogCard.tsx`, `components/CoverArt.tsx`, `components/BlogGrid.tsx`, `content/photos.ts`, `app/blog/*` |
| Workflows | `.github/workflows/indexnow.yml` (new key), `.github/workflows/daily-rebuild.yml` |
| Keyword and blog planning | `docs/keywords.md` (template), `docs/blog-queue.md` (template) |

---

## Order of work that proved efficient

1. Rules and tooling (Phases 0 to 2) in the first session, one release.
2. Keyword targets and titles (Phase 3), one release, then Search Console submissions.
3. Catalogue cleanup and thin-page copy (Phases 4 and 5), one release.
4. Blog system, FAQs, schedule, photo pools (Phase 6), one release, then the automation prompt.
5. Audit pass (Phase 4 again) after everything else, one release, then the two-week Search Console check.

Each release: show the owner the before and after, wait for the OK, then commit, push, PR, merge.
