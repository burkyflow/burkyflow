# Blog queue

Blogs to write next, ordered by search volume of the target phrase (US monthly searches from OpenSEO; see `docs/keywords.md`). Work top to bottom: the highest-volume phrases first. When a blog is published, move its row to the "Done" list at the bottom with the date.

## Rules for every blog

- Follow the writing rules in `CLAUDE.md`: no em dashes, US spelling, no invented statistics or anecdotes, "AI Receptionist" as the service name, compliance as general principles only.
- **Primary phrase:** use it in the search title (`seoTitle`, 48 characters or fewer), in the H1 where natural, in the first paragraph, in one H2, and in the description. Once or twice more in the body. No more than that.
- **Secondary phrases:** use each at least once where it reads naturally (an H2 or a sentence). They are the highest-volume phrases related to the topic; they are listed so the blog picks them up without forcing them.
- 700 to 1,000 words. Plain explanation, short sections, H2 headings, one list of questions to ask or steps to take, and a closing paragraph that links to the service page and to `/contact`.
- Front matter: `title`, `seoTitle`, `date`, `description` (about 150 characters, using the primary phrase), `slug`, `category` (exact topic label), `tags`.
- One blog per date. Do not use a date already taken in `content/posts` or `content/blog`. The Dealership and Auto Finance series occupies even dates from 2026-11-24 to 2027-02-10, so new blogs go on odd dates.
- Link to the related pages listed in the row.

## Queue

| # | Primary phrase (searches/month) | Secondary phrases | Title | Category | Must cover | Link to |
|---|---|---|---|---|---|---|
| 1 | ai receptionist (74,000) | ai answering service (5,400), ai receptionist for small business (3,600), ai virtual receptionist (2,900) | What Is an AI Receptionist? How It Answers, Books, and Follows Up | Missed Calls | Plain definition; what it does on a call; what happens after the call; who it suits; how it differs from an answering service and a phone tree; questions to ask a provider | `/services/ai-voice-receptionist`, `/blog/how-much-does-an-ai-receptionist-cost` |
| 2 | generative engine optimization (4,400) | aeo (27,100), answer engine optimization (2,400), ai search optimization (1,300) | Generative Engine Optimization for Service Businesses | Search Visibility | What GEO means versus SEO; how AI answers pick sources; entity and schema basics; reviews and citations; what to do first | `/services/answer-engine-optimization`, `/blog/cited-expert-ai-search-local-service-pros` |
| 3 | ai phone answering service (3,600) | ai answering service (5,400), 24/7 answering service (1,300), after hours answering service (1,600) | AI Phone Answering Service: What It Does and How to Set One Up in a Week | Missed Calls | What it answers and books; forwarding options (overflow, after hours, dedicated line); the setup steps; the handoff rules; what to ask a provider | `/services/ai-voice-receptionist`, `/blog/ai-answering-service-for-small-business` |
| 4 | ai receptionist for small business (3,600) | ai receptionist (74,000), ai receptionist cost (210), missed call text back (480) | AI Receptionist for Small Business: Is It Worth It at Your Call Volume? | Missed Calls | How many calls make it worthwhile; what a small business actually needs it to do; the one-line setup versus multi-location; cost structure; a simple way to count missed calls | `/services/ai-voice-receptionist`, `/missed-calls` |
| 5 | ai virtual receptionist (2,900) | ai receptionist (74,000), automated receptionist (320) | What an AI Virtual Receptionist Does, and Who It Is For | Missed Calls | Difference from a virtual receptionist service staffed by people; tasks it handles; businesses it suits; what it should never handle alone | `/services/ai-voice-receptionist`, `/blog/ai-receptionist-vs-answering-service` |
| 6 | 24/7 answering service (1,300) | after hours answering service (1,600), ai answering service (5,400) | A 24/7 Answering Service Without Night Staff | Missed Calls | Why after-hours calls matter in service trades; the options (voicemail, live service, AI); how AI covers nights and weekends; emergency routing; measuring after-hours bookings | `/missed-calls`, `/blog/book-more-jobs-after-hours-missed-calls` |
| 7 | ai search optimization (1,300) | aeo (27,100), llm seo (720), ai overviews seo (90) | AI Search Optimization: How to Get Into ChatGPT and Google AI Answers | Search Visibility | How AI search differs from the ten blue links; being the cited source; content structure AI tools quote; reviews and directories; measuring citations | `/services/answer-engine-optimization`, `/blog/get-recommended-by-chatgpt-google-ai-overviews` |
| 8 | lead management system (390) | crm for service business (170), omnichannel crm (110), old leads (110) | Lead Management System for Service Businesses: One Pipeline for Every Channel | CRM & Reactivation | Calls, forms, texts and chats in one pipeline; automatic follow-up; missed-call text-back; dispatch and calendar connections; reporting; what to ask before buying | `/services/crm-lead-systems`, `/blog/capture-every-lead-centralize-crm-channels` |
| 9 | automated receptionist (320) | ai receptionist (74,000), ai phone answering service (3,600) | Automated Receptionist vs Phone Tree: Why Callers Hang Up on Menus | Missed Calls | What a phone tree does to callers; what an automated receptionist does instead; booking versus routing; when a menu still makes sense | `/services/ai-voice-receptionist` |
| 10 | ai dental receptionist (260) | ai medical receptionist (140), ai receptionist (74,000) | AI Dental Receptionist: Booking, Recall, and the Questions It Can Answer | Missed Calls | New-patient calls; recall and hygiene booking; insurance questions it can and cannot answer; handoff to the front desk; privacy considerations in general terms | `/industries/healthcare`, `/services/ai-voice-receptionist` |
| 11 | ai receptionist for law firms (260) | ai receptionist (74,000), after hours answering service (1,600) | AI Receptionist for Law Firms: Intake After Hours Without Losing the Lead | Missed Calls | Intake calls at night; qualifying questions by practice area; conflict-check handoff; booking consultations; confidentiality in general terms | `/industries/professional-firms`, `/services/ai-voice-receptionist` |
| 12 | ai medical receptionist (140) | ai dental receptionist (260), ai receptionist (74,000) | AI Medical Receptionist: What It Handles and What Stays With Staff | Missed Calls | Appointment booking and reminders; clinical questions that must go to staff; after-hours rules; patient privacy in general terms | `/industries/healthcare` |
| 13 | ai receptionist for property management (110) | ai receptionist (74,000), 24/7 answering service (1,300) | AI Receptionist for Property Management: Maintenance Calls and Leasing Inquiries | Missed Calls | Maintenance requests at night; urgency rules (water, heat, lockouts); leasing inquiries and tour booking; logging to the property system | `/industries/real-estate`, `/services/ai-voice-receptionist` |

## Done

| Date | Title | Target phrase |
|---|---|---|
| 2026-11-21 | How Much Does an AI Receptionist Cost? | ai receptionist cost (210) |
| 2026-11-22 | AI Receptionist or AI Agent: Which Do You Need? | ai receptionist or ai agent (Search Console) |
| 2026-11-23 | AI Answering Service for Small Business | ai answering service (5,400) |
