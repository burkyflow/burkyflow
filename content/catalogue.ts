// Service Catalogue data, Branch A (Automation & Infrastructure) and Branch B
// (Sales Generation & GTM). Pricing intentionally omitted from public pages;
// only tier names + scope + deliverables surface here.

export type Package = {
  tier: string; // e.g. "Lite", "Pro", "Enterprise"
  scope: string;
  deliverables: string[];
  timeline?: string;
};

export type Offer = {
  slug: string;
  name: string;
  bestFit: string;
  pitch: string;
  packages: Package[];
  addOns?: string[];
  faqs: { q: string; a: string }[];
};

export type Branch = {
  slug: "automation-infrastructure" | "sales-generation";
  eyebrow: string;
  name: string;
  h1: string;
  lead: string;
  intro: string;
  offers: Offer[];
  faqs: { q: string; a: string }[];
};

// ── Branch A ──────────────────────────────────────────────────────────────

export const automationBranch: Branch = {
  slug: "automation-infrastructure",
  eyebrow: "Branch A, Ops",
  name: "Automation & Infrastructure",
  h1: "The systems that handle every lead, customer, and internal hand-off",
  lead: "Voice, chat, CRM, workflows, booking, and the managed layer that keeps it all running. Pick one wedge or run the whole stack.",
  intro:
    "Branch A is the operating layer of your business. Every offer below is deployable on its own, plugs cleanly into the next, and comes with a managed-services tail so it keeps working after launch.",
  offers: [
    {
      slug: "ai-voice-receptionist",
      name: "AI Voice Receptionist",
      bestFit: "Home services, dental, medspa, law firms, real estate, anyone losing leads to missed calls or after-hours inquiries.",
      pitch: "You will never lose a lead to a missed call again, and you will book appointments while you sleep.",
      packages: [
        {
          tier: "Voice Lite",
          scope: "Single-number AI receptionist with basic qualification and missed-call text-back.",
          deliverables: [
            "1 Vapi agent and 1 dedicated number",
            "3–5 question qualification script",
            "SMS fallback for missed calls",
            "Calendly hand-off",
          ],
          timeline: "5–7 days",
        },
        {
          tier: "Voice Pro",
          scope: "Full intake, booking, emergency routing, and CRM sync.",
          deliverables: [
            "Everything in Voice Lite",
            "GHL or CRM integration",
            "Hot / warm / cold routing",
            "Live-tech transfer",
            "Conversation logging and intent tagging",
          ],
          timeline: "10–14 days",
        },
        {
          tier: "Voice Enterprise",
          scope: "Multi-location, multi-language, custom logic, and outbound voice.",
          deliverables: [
            "Everything in Voice Pro",
            "Multi-number routing",
            "Language switching",
            "Outbound callback flows",
            "Custom analytics dashboard",
          ],
          timeline: "3–4 weeks",
        },
      ],
      addOns: [
        "Outbound voice campaigns for reactivation and confirmations",
        "Custom voice clone for the agent",
        "After-hours emergency dispatch workflow",
      ],
      faqs: [
        { q: "Will the AI voice sound robotic?", a: "No. It is configured to match how your business talks, handles real back-and-forth, and hands off to a human when a call needs one." },
        { q: "What happens with an emergency call?", a: "Urgency cues such as no heat, burst pipe, or lockout are detected and the call is routed to your on-call person immediately." },
        { q: "Does it work with my phone setup?", a: "Yes. We route your existing number, or just your after-hours and overflow line, to the AI voice. No new hardware." },
        { q: "What are the performance standards?", a: "Sub-60-second response time, 20–40% booking rate on qualified leads, 30%+ missed-call recovery, and 99.5% uptime." },
      ],
    },
    {
      slug: "ai-chatbot",
      name: "Website Chatbot & Multi-Channel AI Chat",
      bestFit: "Any business with web traffic or active social DMs that go unanswered.",
      pitch: "The lower-friction companion to the voice stack, capture, qualify, and book from the site and DMs.",
      packages: [
        {
          tier: "Chat Starter",
          scope: "One website widget for FAQ and lead capture.",
          deliverables: ["Pre-built widget framework", "20-question knowledge base", "Form hand-off"],
          timeline: "3–5 days",
        },
        {
          tier: "Chat Multi-Channel",
          scope: "Website plus Instagram DM, Facebook Messenger, and WhatsApp.",
          deliverables: ["Everything in Starter", "Three additional channels", "Unified inbox routing"],
          timeline: "7–10 days",
        },
        {
          tier: "Chat + Booking",
          scope: "Multi-channel chat with appointment booking and CRM sync.",
          deliverables: [
            "Everything in Multi-Channel",
            "Calendly or GHL integration",
            "Qualification logic",
            "Human hand-off fallback",
          ],
          timeline: "10–14 days",
        },
      ],
      faqs: [
        { q: "Will the bot answer questions it shouldn't?", a: "No. Every tier includes a human-handoff fallback the moment a conversation exceeds the bot's scope." },
        { q: "Which channels can you cover?", a: "Website, Instagram DM, Facebook Messenger, and WhatsApp, unified into one inbox so nothing slips." },
        { q: "Can it book appointments end-to-end?", a: "Yes. The Chat + Booking tier qualifies the visitor and books the appointment directly into your calendar or CRM." },
      ],
    },
    {
      slug: "crm-lead-systems",
      name: "CRM & Lead Systems (GoHighLevel build-outs)",
      bestFit: "Sales Directors and SMB owners whose leads go cold in 5 minutes.",
      pitch: "A standardised, templated CRM environment built for rapid deployment with an aggressive 5-day follow-up cadence.",
      packages: [
        {
          tier: "CRM Foundation",
          scope: "GHL sub-account, pipeline, and the basic automations every business needs.",
          deliverables: ["5-stage pipeline", "Lead capture forms", "Instant SMS and email response", "Calendar sync"],
          timeline: "5–7 days",
        },
        {
          tier: "CRM Velocity",
          scope: "Foundation plus the 5-day aggressive follow-up engine and missed-call text-back.",
          deliverables: [
            "Everything in Foundation",
            "Multi-step SMS and email sequences",
            "Missed-call automation",
            "Lead scoring",
            "Reporting dashboard",
          ],
          timeline: "10–14 days",
        },
        {
          tier: "CRM Multi-Brand",
          scope: "White-label CRM rollout for agencies and multi-location operators.",
          deliverables: [
            "Everything in Velocity",
            "Sub-account templating",
            "Snapshot library",
            "Agency dashboard",
            "Client onboarding automation",
          ],
          timeline: "3–4 weeks",
        },
      ],
      faqs: [
        { q: "Do I have to switch to GoHighLevel?", a: "GHL is the default because deployment is fast. Equivalent platforms are accepted when there is a real reason." },
        { q: "What does the standard pipeline look like?", a: "New Lead → Contacted → Qualified → Booked → Closed. We adapt the stage labels to your sales motion." },
        { q: "Can you support multiple brands or locations?", a: "Yes. The Multi-Brand tier is designed for agencies and multi-location operators with sub-account templates and a snapshot library." },
      ],
    },
    {
      slug: "business-process-automation",
      name: "Business Process Automation (n8n / Custom)",
      bestFit: "Operators bleeding hours on manual data entry between tools.",
      pitch: "Replaces 'Zapier almost works' and manual copy-paste between GHL, Twilio, Supabase, Sheets, and Airtable.",
      packages: [
        {
          tier: "Automation Audit",
          scope: "Full stack review, automation roadmap, and ROI sizing.",
          deliverables: [
            "90-minute discovery",
            "Written audit",
            "Prioritised automation backlog",
            "ROI estimate per workflow",
          ],
          timeline: "1 week",
        },
        {
          tier: "Workflow Pack (3)",
          scope: "Build three production workflows from the audit backlog.",
          deliverables: ["3 fully tested n8n workflows", "Error handling and Slack alerts", "Documentation"],
          timeline: "2 weeks",
        },
        {
          tier: "Workflow Pack (10)",
          scope: "Full ops automation engagement.",
          deliverables: [
            "10 production workflows",
            "Integration library",
            "Monitoring and runbook",
            "Team training",
          ],
          timeline: "4–6 weeks",
        },
        {
          tier: "Custom Build",
          scope: "Bespoke automation, dispatch engines, internal tools, marketplaces, scoped per project.",
          deliverables: ["Discovery sprint", "Fixed-scope SOW", "Build, test, and hand-over"],
        },
      ],
      faqs: [
        { q: "Which integrations are in scope?", a: "Standard library covers GHL, Twilio, Vapi, Calendly, Slack, Supabase, Sheets, Airtable, Apollo, Clay, Stripe, Shopify, Meta Ads, OpenAI and Anthropic." },
        { q: "What if a workflow breaks?", a: "Every workflow ships with error handling, Slack alerts, and an owner. Failures are caught before they reach a customer." },
        { q: "Can I start with an audit only?", a: "Yes. The Audit fee is credited toward the first build, so there is no waste if you proceed." },
      ],
    },
    {
      slug: "booking-scheduling",
      name: "Booking & Scheduling Infrastructure",
      bestFit: "Add-on to Voice / Chat / CRM, or standalone for clients with a working CRM but a broken booking flow.",
      pitch: "A calendar and scheduling stack integrated and tested before launch, including no-show recovery.",
      packages: [
        {
          tier: "Booking Setup",
          scope: "Calendar integration with reminders and self-service rescheduling.",
          deliverables: [
            "Google Calendar or GHL Calendar integration",
            "24-hour and 2-hour reminders",
            "Self-service reschedule and cancel",
          ],
        },
        {
          tier: "Booking + No-Show Recovery",
          scope: "Booking Setup plus an automated no-show win-back sequence and show-rate reporting.",
          deliverables: [
            "Everything in Booking Setup",
            "No-show win-back sequence",
            "Show-rate reporting",
          ],
        },
      ],
      faqs: [
        { q: "Will reminders reduce no-shows?", a: "Yes. 24-hour and 2-hour reminders meaningfully cut no-show rates, and the win-back sequence recovers the ones that still slip." },
        { q: "Does it sit on top of my existing calendar?", a: "Yes. We integrate Google Calendar or GHL Calendar, your existing booking surface stays the source of truth." },
      ],
    },
    {
      slug: "aeo-geo",
      name: "AEO & GEO (AI Search Visibility)",
      bestFit: "Professional firms, B2B SaaS, and any business whose buyers ask AI for recommendations.",
      pitch: "Get your business cited inside ChatGPT, Perplexity, Claude, and Google AI Overviews, the new SEO.",
      packages: [
        {
          tier: "AEO Baseline",
          scope: "Entity build-out, schema deployment, and foundational citations.",
          deliverables: [
            "Audit",
            "Schema deployment",
            "10 high-authority citations",
            "Prompt-surface baseline report",
          ],
          timeline: "2–3 weeks",
        },
        {
          tier: "AEO Growth",
          scope: "Ongoing citation seeding and prompt-surface tracking.",
          deliverables: [
            "Everything in Baseline",
            "10 citations per month",
            "Monthly prompt-surface tracking",
            "AI Overview monitoring",
          ],
        },
      ],
      faqs: [
        { q: "How is this different from SEO?", a: "SEO targets ranked links. AEO targets being cited inside the answer AI assistants generate, a different and increasingly important surface." },
        { q: "How do you measure it?", a: "We track how AI engines describe your business, which prompts surface you, and which competitors are mentioned alongside." },
      ],
    },
    {
      slug: "digital-clone-studio",
      name: "Digital Clone Studio",
      bestFit: "Agency owners, founders, and personal brands.",
      pitch: "Founder voice and likeness cloned for content production, outreach video, and inbound coverage.",
      packages: [
        {
          tier: "Voice Clone",
          scope: "ElevenLabs voice clone, training, and integration into Vapi and outbound.",
          deliverables: ["Trained ElevenLabs voice", "Integration into Vapi", "Outbound voice ready"],
        },
        {
          tier: "Avatar Clone",
          scope: "HeyGen or Synthesia avatar with five starter scripts.",
          deliverables: ["Trained avatar", "5 starter scripts produced"],
        },
        {
          tier: "Full Persona Studio",
          scope: "Voice plus avatar plus scripted content engine with monthly drops.",
          deliverables: [
            "Voice and avatar clones",
            "Scripted content engine",
            "Monthly content drops",
          ],
        },
      ],
      faqs: [
        { q: "Do I own the clone?", a: "Yes. Your voice, likeness, and the underlying assets remain yours. We operate the studio on your behalf." },
        { q: "How is it used in sales?", a: "Voice clones power outbound voice and personalised follow-up; avatar clones power outreach video and inbound content." },
      ],
    },
    {
      slug: "web-app-saas-shopify",
      name: "Web / App / SaaS / Shopify Development",
      bestFit: "Agency owners and SMBs that cannot build in-house.",
      pitch: "Custom funnels, mobile apps, SaaS builds, and Shopify, delivered against a fixed-scope SOW.",
      packages: [
        {
          tier: "Conversion Funnel",
          scope: "1–3 page funnel with copy, design, build, and A/B-ready setup.",
          deliverables: ["Copy", "Design", "Build", "A/B-ready instrumentation"],
        },
        {
          tier: "Marketing Site",
          scope: "5–8 page site with CMS and integrations.",
          deliverables: ["Design system", "CMS setup", "Integrations"],
        },
        {
          tier: "Shopify Store Setup",
          scope: "Theme build, products loaded, payments, and email flows.",
          deliverables: ["Theme build", "Products", "Payments", "Email flows"],
        },
        {
          tier: "Custom Shopify Dev",
          scope: "Bespoke apps, checkout extensions, and headless builds.",
          deliverables: ["Discovery", "Build", "QA and launch"],
        },
        {
          tier: "Mobile App (MVP)",
          scope: "iOS and Android via React Native or Flutter, scoped to MVP.",
          deliverables: ["Scoped MVP feature set", "Cross-platform build", "Launch support"],
        },
        {
          tier: "SaaS Build (MVP)",
          scope: "Full-stack web app with auth, billing, and core feature set.",
          deliverables: ["Auth and billing", "Core features", "Deployment"],
        },
      ],
      faqs: [
        { q: "How are dev engagements scoped?", a: "Every dev engagement starts with a discovery sprint and lands on a fixed-scope SOW before the build begins." },
        { q: "Do you handle design as well as build?", a: "Yes. Copy, design, and build are part of every package, you do not need to source separate vendors." },
      ],
    },
    {
      slug: "managed-services",
      name: "Managed Services (Retainer Layer)",
      bestFit: "Every Branch A client at the point of build hand-off. Default attach: Care.",
      pitch: "Monitoring, optimisation, and ongoing support, the MRR layer that sits on top of every build.",
      packages: [
        {
          tier: "Care",
          scope: "Uptime monitoring, incident response (next business day), and monthly health report.",
          deliverables: ["Uptime monitoring", "Incident response", "Monthly health report"],
        },
        {
          tier: "Optimise",
          scope: "Care plus monthly optimisation pass on flows and copy, and a quarterly strategy call.",
          deliverables: [
            "Everything in Care",
            "Monthly optimisation pass",
            "Quarterly strategy call",
          ],
        },
        {
          tier: "Partner",
          scope: "Optimise plus dedicated Slack channel, 4-hour incident SLA, and unlimited minor changes.",
          deliverables: [
            "Everything in Optimise",
            "Dedicated Slack channel",
            "4-hour incident SLA",
            "Unlimited minor changes",
          ],
        },
      ],
      faqs: [
        { q: "Is managed services required?", a: "It is not required, but every Branch A build is offered a Managed Services tier at hand-off. Default attach is Care." },
        { q: "What does the Partner tier include that the others do not?", a: "A dedicated Slack channel, a 4-hour incident SLA, and unlimited minor changes, for clients who want BurkyFlow embedded in the team." },
      ],
    },
    {
      slug: "ai-consulting",
      name: "AI Consulting",
      bestFit: "Larger SMBs and professional firms not yet ready for a full build.",
      pitch: "Strategy, automation audits, stack evaluation, ROI modelling, and roadmap.",
      packages: [
        {
          tier: "Strategy Sprint",
          scope: "2-week engagement covering discovery, stack audit, 12-month automation roadmap, and ROI model.",
          deliverables: [
            "Discovery interviews",
            "Stack audit",
            "12-month automation roadmap",
            "ROI model",
          ],
        },
        {
          tier: "Fractional AI Lead",
          scope: "Ongoing advisory with two calls per week, async Slack support, and vendor selection.",
          deliverables: ["2 calls / week", "Async Slack support", "Vendor selection"],
        },
        {
          tier: "Workshop / Training",
          scope: "Half-day or full-day onsite or virtual workshop for the client team.",
          deliverables: ["Tailored agenda", "Live workshop", "Follow-up materials"],
        },
      ],
      faqs: [
        { q: "Is the Strategy Sprint credited toward a build?", a: "It is positioned as a standalone engagement, but the roadmap directly informs any subsequent build and scope is preserved." },
        { q: "What is the minimum for Fractional AI Lead?", a: "Three months. It is built for executives who want a senior partner on call as they roll out internal AI initiatives." },
      ],
    },
  ],
  faqs: [
    { q: "Do I have to buy the whole branch?", a: "No. Every offer in Branch A is deployable standalone. Most clients start with one wedge, usually Voice or CRM, then expand." },
    { q: "Is there a managed-services tail on every build?", a: "Yes. Every Branch A build is offered a Managed Services tier at hand-off. The default attach is Care." },
    { q: "How fast can you launch?", a: "Most Branch A offers go live within 1–4 weeks. The Workflow Pack (10) and Voice Enterprise are the longest at 4–6 weeks." },
  ],
};

// ── Branch B ──────────────────────────────────────────────────────────────

export const demandBranch: Branch = {
  slug: "sales-generation",
  eyebrow: "Branch B, Demand",
  name: "Sales Generation & GTM",
  h1: "The engines that fill the pipe with booked meetings",
  lead: "Outbound, ads, content, reactivation, and referral, every offer designed to land qualified meetings on the calendar.",
  intro:
    "Branch B generates the demand. Branch A handles it. Every offer below is built to land qualified meetings on the calendar, with reporting that maps spend to booked revenue.",
  offers: [
    {
      slug: "gtm-as-a-service",
      name: "GTM-as-a-Service (Flagship Demand Offer)",
      bestFit: "SMBs with a product but no pipeline; agencies that want a turnkey outbound engine without hiring SDRs.",
      pitch: "End-to-end go-to-market engine: ICP → enrichment → outbound playbook → booked meetings.",
      packages: [
        {
          tier: "GTM Foundation",
          scope: "ICP definition, data build, and single-channel sequence.",
          deliverables: [
            "ICP doc",
            "2,500-account list (Apollo + Clay enriched)",
            "1-channel sequence (email or SMS)",
            "Reply handling",
          ],
          timeline: "3 weeks setup",
        },
        {
          tier: "GTM Multi-Channel",
          scope: "Foundation plus email, SMS, and LinkedIn orchestration.",
          deliverables: [
            "Everything in Foundation",
            "5,000 accounts / month",
            "3-channel orchestrated sequences",
            "A/B testing",
            "Weekly reporting",
          ],
          timeline: "4 weeks setup",
        },
        {
          tier: "GTM Full-Stack",
          scope: "Multi-Channel plus outbound voice and a dedicated SDR layer.",
          deliverables: [
            "Everything in Multi-Channel",
            "Vapi outbound voice",
            "Qualified-meeting hand-off",
            "Slack alerts",
            "Dedicated account strategist",
          ],
          timeline: "5–6 weeks setup",
        },
      ],
      faqs: [
        { q: "What reply rates should I expect?", a: "Cold reply rates of 4–8% are typical, with 10–30 booked meetings per month at the Multi-Channel tier." },
        { q: "What's the cost per booked meeting?", a: "Targeted below $300 per booked meeting once the engine is tuned, which is consistently cheaper than building an in-house SDR team." },
        { q: "Do you handle the data?", a: "Yes. Lists are built in Apollo, enriched in Clay, and reply handling is run inside our team, meetings land on your calendar." },
        { q: "Will outbound time itself to my prospects' hours?", a: "Yes. Sends are timed to your prospects' working hours regardless of where the delivery team sits." },
      ],
    },
    {
      slug: "sms-email-copy",
      name: "SMS & Email Copy (Hyper-Personalised)",
      bestFit: "Clients who already have lists and infrastructure and need the copy that converts them.",
      pitch: "AI-generated, Clay-enriched SMS and email copy built for 5-minute lead-response windows and 5-day follow-up sequences.",
      packages: [
        {
          tier: "Sequence Pack",
          scope: "One sequence, 5–7 touches, on one channel, fully written and loaded.",
          deliverables: ["5–7 touch sequence", "Single channel", "Loaded into your stack"],
        },
        {
          tier: "Multi-Channel Pack",
          scope: "Three sequences across email, SMS, and LinkedIn.",
          deliverables: ["3 sequences", "Email + SMS + LinkedIn", "Loaded and tested"],
        },
        {
          tier: "Copy Retainer",
          scope: "Ongoing copy production, four sequences per month plus iteration.",
          deliverables: ["4 sequences / month", "Iteration on performance", "Reporting"],
        },
      ],
      faqs: [
        { q: "Will the copy sound like a template?", a: "No. Personalisation is generated per account using Clay enrichment, not just first-name swaps." },
        { q: "How long until I see replies?", a: "First sequences typically begin landing within days, with cadence and copy tuned weekly from there." },
      ],
    },
    {
      slug: "meeting-booking-engine",
      name: "Meeting Booking Engine",
      bestFit: "Teams that need qualified leads landing directly on the founder or rep's calendar.",
      pitch: "Outbound and inbound qualification flows that push qualified leads straight into your calendar with a Slack alert.",
      packages: [
        {
          tier: "Booking Engine",
          scope: "Lead screening logic, calendar routing, Slack alert, and no-show recovery.",
          deliverables: [
            "Screening logic",
            "Calendar routing (GHL or Calendly)",
            "Slack alert",
            "No-show recovery flow",
          ],
        },
        {
          tier: "Booking Engine + Dashboard",
          scope: "Booking Engine plus an Airtable command-centre dashboard with daily digest and reporting.",
          deliverables: [
            "Everything in Booking Engine",
            "Airtable command-centre",
            "Daily digest",
            "Reporting dashboard",
          ],
        },
      ],
      faqs: [
        { q: "Why not just use Calendly?", a: "Calendly is the booking surface. The engine is the qualification, routing, alerting, and no-show recovery that make sure the right person actually shows up." },
        { q: "Will it integrate with our CRM?", a: "Yes. Bookings sync to your CRM with the lead context, and the Slack alert gives reps the brief before the meeting starts." },
      ],
    },
    {
      slug: "referral-marketing",
      name: "Referral Marketing Systems",
      bestFit: "SMBs with an existing customer base ready to compound word-of-mouth.",
      pitch: "Automated post-purchase / post-service SMS and email referral loops wired into your CRM.",
      packages: [
        {
          tier: "Referral Lite",
          scope: "Single trigger (post-purchase), SMS and email with a share link.",
          deliverables: ["Post-purchase trigger", "SMS + email", "Share link"],
        },
        {
          tier: "Referral Engine",
          scope: "Multi-trigger flows with incentive tracking, leaderboard, and reporting.",
          deliverables: [
            "Multi-trigger flows",
            "Incentive tracking",
            "Referral leaderboard",
            "Reporting",
          ],
        },
      ],
      faqs: [
        { q: "What incentive structures work?", a: "Two-sided incentives (giver + receiver) consistently outperform one-sided, and the Engine tier tracks redemptions automatically." },
        { q: "Does it work without an existing customer base?", a: "Referral is a retention compounding play. If you do not yet have a customer base, start with a Branch B demand offer first." },
      ],
    },
    {
      slug: "social-content-autopilot",
      name: "Social Content Autopilot",
      bestFit: "Top-of-funnel air cover so outbound lands on a warm brand.",
      pitch: "Automated branded content generation and posting across LinkedIn, Instagram, TikTok, and Facebook.",
      packages: [
        {
          tier: "Content Lite",
          scope: "3 posts per week on 1 channel.",
          deliverables: ["3 posts / week", "1 channel", "AI-assisted + human editorial"],
        },
        {
          tier: "Content Standard",
          scope: "5 posts per week on 2 channels.",
          deliverables: ["5 posts / week", "2 channels", "AI-assisted + human editorial"],
        },
        {
          tier: "Content Pro",
          scope: "Daily posting across 4 channels with reels and shorts repurposing.",
          deliverables: [
            "Daily posts",
            "4 channels",
            "Reels / shorts repurposing",
            "AI-assisted + human editorial",
          ],
        },
      ],
      faqs: [
        { q: "Is it just AI slop?", a: "No. Generation is AI-assisted but every post is reviewed against your brand guidelines by a human editor before it goes live." },
        { q: "Will it create the content for me from scratch?", a: "Yes. You provide brand inputs and target topics; we handle production, scheduling, and reporting." },
      ],
    },
    {
      slug: "meta-ads-management",
      name: "Meta Ads (Facebook + Instagram) Management",
      bestFit: "Clients ready to funnel paid social into the same AI voice + SMS + GHL pipeline Branch A runs.",
      pitch: "Paid social creative, campaign build, audience targeting, and optimisation, funnelled into your operating system.",
      packages: [
        {
          tier: "Ads Starter",
          scope: "Up to $3K/month ad spend, 1 campaign, 3 creatives per month.",
          deliverables: [
            "1 campaign",
            "3 creatives / month",
            "Weekly optimisation",
            "Monthly report",
          ],
        },
        {
          tier: "Ads Growth",
          scope: "$3K–$15K/month ad spend, 3 campaigns, 8 creatives per month.",
          deliverables: [
            "3 campaigns",
            "8 creatives / month",
            "A/B testing",
            "Landing-page integration",
          ],
        },
        {
          tier: "Ads Scale",
          scope: "$15K+ /month ad spend, full-funnel campaigns with a dedicated strategist.",
          deliverables: [
            "Full-funnel campaigns",
            "Dedicated strategist",
            "Weekly reporting calls",
          ],
        },
      ],
      faqs: [
        { q: "How is ad spend handled?", a: "Ad spend is invoiced separately, paid directly by the client, and capped to your stated budget." },
        { q: "Do the ads feed into my CRM and voice agent?", a: "Yes. That is the point, ads funnel into the same AI voice and CRM pipeline Branch A builds, so spend converts to booked jobs." },
      ],
    },
    {
      slug: "database-reactivation",
      name: "Database Reactivation",
      bestFit: "SMBs sitting on thousands of old leads. The fastest ROI proof-offer.",
      pitch: "Revenue-engine campaigns against dormant CRM lists via SMS, email, and voice.",
      packages: [
        {
          tier: "Reactivation Sprint",
          scope: "Up to 2,500 records via SMS and email.",
          deliverables: ["Segmentation", "SMS + email sequences", "Reporting"],
        },
        {
          tier: "Reactivation Multi-Channel",
          scope: "Up to 10,000 records via SMS, email, and outbound voice.",
          deliverables: ["Segmentation", "SMS + email + Vapi voice", "Reporting"],
        },
        {
          tier: "Reactivation Engine",
          scope: "Ongoing monthly campaigns across the full multi-channel stack.",
          deliverables: ["Monthly campaigns", "Full multi-channel", "Performance reporting"],
        },
      ],
      faqs: [
        { q: "Is it compliant?", a: "Yes. We message in your tone with appropriate consent handling, sensible cadence, and clear opt-out." },
        { q: "How fast do results show?", a: "Reactivation typically produces replies and bookings within the first days of sending, you are contacting people who already know you." },
        { q: "How is revshare structured?", a: "Performance components are passed through at standard catalogue rates and tracked transparently in the reporting dashboard." },
      ],
    },
  ],
  faqs: [
    { q: "Do I need Branch A to use Branch B?", a: "No, but it is recommended. Branch B fills the pipe; Branch A processes what comes through it. Without Branch A, qualified leads can still leak." },
    { q: "Which Branch B offer should I start with?", a: "If you have a dormant list, start with Reactivation. If you have no pipeline, start with GTM Foundation. If you have traffic, start with Ads or Content." },
    { q: "Do you guarantee meetings?", a: "We guarantee the system. Reply and meeting targets are stated up-front and reported against weekly; performance components align incentives where applicable." },
  ],
};

export const branches = [automationBranch, demandBranch];

export function getBranch(slug: string) {
  return branches.find((b) => b.slug === slug);
}

// ── Bundles ───────────────────────────────────────────────────────────────

export type Bundle = {
  slug: string;
  name: string;
  tagline: string;
  components: string[];
  bestFor?: string;
  whyThisBundle?: string;
  outcomes?: string[];
};

export type BundleGroup = {
  heading: string;
  lead: string;
  bundles: Bundle[];
};

export const bundleGroups: BundleGroup[] = [
  {
    heading: "By client maturity",
    lead: "Most clients don't buy one service, they buy a combination. These bundles map to where you are right now.",
    bundles: [
      {
        slug: "lead-catcher",
        name: "Lead Catcher",
        tagline: "Just starting, smallest viable wedge",
        components: ["Voice Lite", "CRM Foundation"],
        bestFor: "SMBs taking their first step into AI automation with the lowest possible commitment.",
        whyThisBundle:
          "Catches the call, captures the lead. The two most expensive leaks in any service business, closed for less than the cost of a part-time receptionist.",
        outcomes: [
          "Every inbound call answered, 24/7",
          "Every lead in one pipeline with source attached",
          "A real system you can build on, not a stack of disconnected tools",
        ],
      },
      {
        slug: "inbound-starter",
        name: "Inbound Starter",
        tagline: "Just starting, capture web visitors",
        components: ["Chat Starter", "Booking Setup"],
        bestFor: "Businesses with web traffic where inquiries die in a contact form.",
        whyThisBundle:
          "Site visitors are already on the page, they shouldn't bounce because the form is too slow. Chat + booking turns intent into a scheduled appointment.",
        outcomes: [
          "Web visitors converted to qualified inquiries on-page",
          "Appointments booked into the calendar without staff back-and-forth",
          "Reminders and rescheduling automated end-to-end",
        ],
      },
      {
        slug: "reactivation-quick-win",
        name: "Reactivation Quick Win",
        tagline: "Just starting, wake up an old list",
        components: ["Reactivation Sprint", "CRM Foundation"],
        bestFor: "SMBs sitting on a CRM full of past customers and dormant leads.",
        whyThisBundle:
          "The fastest proof-of-value engagement we run. The list is already paid for, we just need to talk to it again.",
        outcomes: [
          "Booked revenue from contacts that were sitting idle",
          "A clean, segmented CRM ready for the next play",
          "A repeatable reactivation campaign you can run each quarter",
        ],
      },
      {
        slug: "the-wedge-service-business",
        name: "The Wedge (Service Business)",
        tagline: "Growing, install a real system",
        components: ["Voice Pro", "CRM Velocity", "Booking + No-Show Recovery"],
        bestFor: "Home services, dental, medspa, and any service business losing leads to missed calls and slow follow-up.",
        whyThisBundle:
          "The standard kit for service businesses that want to stop losing money to operations. Captures every call, follows up aggressively, and recovers no-shows automatically.",
        outcomes: [
          "Zero unanswered calls during peak and after hours",
          "5-day aggressive follow-up cadence on every lead",
          "No-show rate cut sharply via automated win-back",
        ],
      },
      {
        slug: "the-demand-engine",
        name: "The Demand Engine",
        tagline: "Growing, turn on pipeline",
        components: ["GTM Multi-Channel", "Booking Engine", "Sequence Pack"],
        bestFor: "B2B SMBs with a product but no pipeline.",
        whyThisBundle:
          "Replaces hiring SDRs. Builds the list, runs the sequences, qualifies the replies, and lands qualified meetings on the calendar.",
        outcomes: [
          "10–30 booked meetings per month at the target tier",
          "Cold reply rates of 4–8% on personalised outreach",
          "Cost per booked meeting under $300 once tuned",
        ],
      },
      {
        slug: "inbound-outbound-combo",
        name: "Inbound + Outbound Combo",
        tagline: "Growing, both sides of the funnel",
        components: ["Voice Pro", "Chat + Booking", "GTM Foundation"],
        bestFor: "Businesses that need to fix inbound leaks and turn on outbound at the same time.",
        whyThisBundle:
          "Covers both halves of the revenue equation. Every paid lead, organic visitor, and outbound prospect lands in the same booking flow.",
        outcomes: [
          "One booking pipeline for inbound and outbound",
          "Consistent qualification across every source",
          "Reporting that maps spend to booked revenue",
        ],
      },
      {
        slug: "demand-and-convert",
        name: "Demand + Convert",
        tagline: "Scaling, end-to-end coverage",
        components: ["GTM Multi-Channel", "Voice Pro", "CRM Velocity", "Booking Engine"],
        bestFor: "Funded SMBs ready to install the full revenue engine.",
        whyThisBundle:
          "The complete demand-to-conversion stack. Outbound fills the pipe; voice and CRM convert it.",
        outcomes: [
          "End-to-end visibility from prospect to booked meeting",
          "Booked meetings sourced by BurkyFlow, qualified by BurkyFlow",
          "A single accountable team across demand and conversion",
        ],
      },
      {
        slug: "brand-and-demand",
        name: "Brand + Demand",
        tagline: "Scaling, air cover plus outbound",
        components: ["Content Standard", "Meta Ads Growth", "GTM Foundation", "AEO Baseline"],
        bestFor: "Businesses where outbound lands cold because the brand has no surface area.",
        whyThisBundle:
          "Warms the brand before outbound hits. Content, paid social, AI-search visibility, and outbound work together so the prospect already recognises you.",
        outcomes: [
          "Outbound prospects who already know who you are",
          "Paid traffic landing on a credible, populated brand",
          "Compounding visibility across social, paid, and AI search",
        ],
      },
      {
        slug: "founder-persona-stack",
        name: "Founder Persona Stack",
        tagline: "Scaling, built around the founder brand",
        components: ["Full Persona Studio", "Content Pro", "LinkedIn outbound", "Care"],
        bestFor: "Agency owners, coaches, and founders selling on personal brand.",
        whyThisBundle:
          "Productises the founder. Voice clone, avatar, daily content, and LinkedIn outbound, all in the founder's voice, without the founder being on camera all day.",
        outcomes: [
          "Daily content drops in the founder's voice and likeness",
          "Outbound that lands on a warm, recognised brand",
          "The founder's time freed from production",
        ],
      },
    ],
  },
  {
    heading: "By vertical",
    lead: "Industry-specific bundles, pre-scoped so the conversation goes straight to scope.",
    bundles: [
      {
        slug: "home-services-bundle",
        name: "Home Services",
        tagline: "HVAC, plumbing, electrical, roofing",
        components: ["Voice Pro", "CRM Velocity", "Reactivation Multi-Channel", "Meta Ads Starter"],
        bestFor: "Home services operators with steady inbound, a dormant database, and budget for paid acquisition.",
        whyThisBundle: "Catches every emergency call, follows up aggressively, wakes the old list, and funnels paid traffic into the same pipeline.",
      },
      {
        slug: "dental-medspa",
        name: "Dental / Medspa",
        tagline: "High-trust local conversion",
        components: ["Voice Pro", "Chat + Booking", "CRM Velocity", "Content Standard", "Meta Ads Starter"],
        bestFor: "Dental practices and medspas competing on trust and local visibility.",
        whyThisBundle: "Every channel a new patient might use, call, web, social, wired into one booking flow.",
      },
      {
        slug: "law-firms",
        name: "Law Firms",
        tagline: "Inbound qualification + AI search visibility",
        components: ["Voice Enterprise", "CRM Velocity", "AEO Growth", "Content Lite"],
        bestFor: "Law firms where intake quality matters as much as volume.",
        whyThisBundle: "Enterprise-grade voice for sensitive intake, plus the AI search surface that drives buyers in the first place.",
      },
      {
        slug: "real-estate",
        name: "Real Estate",
        tagline: "Lead capture + dormant-database revenue",
        components: ["Voice Pro", "CRM Velocity", "Reactivation Sprint", "Content Pro"],
        bestFor: "Real estate teams sitting on years of past-client and buyer-lead data.",
        whyThisBundle: "Captures the new lead, reactivates the old one, and keeps the brand visible to both.",
      },
      {
        slug: "b2b-saas",
        name: "B2B SaaS",
        tagline: "Outbound pipeline + AI discoverability",
        components: ["GTM Multi-Channel", "Booking Engine", "AEO Growth", "Content Standard"],
        bestFor: "B2B SaaS teams that need pipeline and presence at the same time.",
        whyThisBundle: "Outbound delivers meetings now; AEO and content compound the brand so future outbound lands warmer.",
      },
      {
        slug: "agencies-white-label",
        name: "Agencies (white-label)",
        tagline: "AAA backend, your brand on the front",
        components: ["CRM Multi-Brand", "Workflow Pack (10)", "GTM Foundation", "Partner Managed"],
        bestFor: "AI and marketing agencies who want to resell production capacity under their own brand.",
        whyThisBundle: "Multi-brand CRM and a workflow library means you onboard new clients in minutes, not weeks.",
      },
      {
        slug: "ecommerce-shopify",
        name: "E-commerce / Shopify",
        tagline: "Acquisition + retention engine",
        components: ["Shopify Setup", "Meta Ads Growth", "Copy Retainer", "Reactivation Engine"],
        bestFor: "Shopify and DTC brands building both customer acquisition and lifetime value.",
        whyThisBundle: "Paid acquisition feeds the store; the retention engine compounds revenue from every customer acquired.",
      },
    ],
  },
  {
    heading: "Full-stack",
    lead: "For clients who want BurkyFlow to run the entire revenue function.",
    bundles: [
      {
        slug: "full-stack-unitzero",
        name: "Full-Stack BurkyFlow",
        tagline: "The complete operating system",
        components: [
          "Voice Enterprise",
          "CRM Velocity",
          "GTM Multi-Channel",
          "Meta Ads Growth",
          "Content Standard",
          "Booking Engine + Dashboard",
          "Care",
        ],
        bestFor: "Funded SMBs and agencies that want BurkyFlow running the entire revenue function.",
        whyThisBundle: "One team, one dashboard, one accountability line, across demand generation, inbound capture, conversion, and reporting.",
      },
      {
        slug: "full-stack-plus-reactivation",
        name: "Full-Stack + Reactivation",
        tagline: "Add the dormant-database revenue engine",
        components: ["Everything in Full-Stack BurkyFlow", "Reactivation Engine"],
        bestFor: "Full-Stack clients sitting on years of CRM data.",
        whyThisBundle: "Layers the ongoing reactivation play on top of full-stack so dormant revenue compounds month after month.",
      },
      {
        slug: "full-stack-plus-brand",
        name: "Full-Stack + Brand",
        tagline: "Add founder brand and AI discoverability",
        components: ["Everything in Full-Stack BurkyFlow", "Full Persona Studio", "AEO Growth"],
        bestFor: "Founders who want BurkyFlow running the revenue engine and the brand engine.",
        whyThisBundle: "Founder persona content and AEO visibility make every outbound and ad touchpoint land on a warmer brand.",
      },
      {
        slug: "the-empire-package",
        name: "The Empire Package",
        tagline: "Everything plus custom dev and strategy",
        components: [
          "Everything in Full-Stack BurkyFlow",
          "Custom Web / App build",
          "Strategy Sprint",
          "Partner Managed Services",
        ],
        bestFor: "Operators building a defensible, technology-led business with BurkyFlow as the long-term partner.",
        whyThisBundle: "Full revenue engine, custom product surface, ongoing strategy, and the Partner-tier SLA. The whole company on one team.",
      },
    ],
  },
];

export function getBundle(slug: string) {
  for (const g of bundleGroups) {
    const b = g.bundles.find((x) => x.slug === slug);
    if (b) return { bundle: b, group: g };
  }
  return undefined;
}

export const allBundles = bundleGroups.flatMap((g) => g.bundles);

export const bundlesFaqs = [
  {
    q: "How are bundles priced?",
    a: "Bundles always carry a discount versus à la carte, 10% on 2 services, scaling to 25% on full-stack. Exact pricing is shared after a short scoping call so quotes match the result you want.",
  },
  {
    q: "Can I build my own combo?",
    a: "Yes. Any combination of offers across Branch A and Branch B can be bundled. Discount tier applies automatically based on the number of services selected.",
  },
  {
    q: "Are bundles a lock-in?",
    a: "No. Setup fees are one-time and monthlies cancel with standard notice. Bundle discounts are preserved as long as the services remain active together.",
  },
  {
    q: "Where does Managed Services fit?",
    a: "Every Branch A build is offered a Managed Services tier at hand-off (default: Care). Managed Services is excluded from bundle discounts but always available standalone.",
  },
];
