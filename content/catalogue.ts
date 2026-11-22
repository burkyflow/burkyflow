// Service Catalogue data: Automation & Infrastructure and Sales Generation. Pricing intentionally omitted from public pages;
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
  /** Optional "where to start" guide: a common problem and the offer that solves it. */
  guide?: { heading: string; intro: string; items: { problem: string; offer: string; detail: string }[] };
  offers: Offer[];
  faqs: { q: string; a: string }[];
};

// ── Automation & Infrastructure ──────────────────────────────────────────────────────────────

export const automationBranch: Branch = {
  slug: "automation-infrastructure",
  eyebrow: "Automation & Infrastructure",
  name: "Automation & Infrastructure",
  h1: "The systems that handle every lead, customer, and internal hand-off",
  lead: "Voice, chat, CRM, workflows, booking, and the managed layer that keeps it all running. Start with one service or run the full system.",
  intro:
    "These are the systems that run your business day to day. Every offer below works on its own, connects cleanly to the next, and comes with ongoing managed support so it keeps working after launch.",
  guide: {
    heading: "Where to start",
    intro: "Most businesses start with the one problem costing them the most work, then connect the next piece once it is running. Find the problem that sounds most like yours:",
    items: [
      { problem: "Calls go unanswered when the team is busy or after hours", offer: "ai-voice-receptionist", detail: "An AI receptionist answers every call, qualifies the caller, and books the appointment." },
      { problem: "Website visitors leave without getting in touch", offer: "ai-chatbot", detail: "A website and messaging chat answers questions and captures the lead while the visitor is still on the page." },
      { problem: "Leads are scattered across inboxes, spreadsheets, and texts", offer: "crm-lead-systems", detail: "A GoHighLevel CRM puts every lead in one pipeline with automatic follow-up." },
      { problem: "Staff retype the same information between tools", offer: "business-process-automation", detail: "n8n or custom workflows move the data for you and alert the right person." },
      { problem: "No-shows and back-and-forth scheduling", offer: "booking-scheduling", detail: "Online booking with reminders and rescheduling built in." },
      { problem: "Your business does not show up in ChatGPT or Google AI answers", offer: "aeo-geo", detail: "AEO and GEO make your site easy for AI search tools to read, trust, and cite." },
    ],
  },
  offers: [
    {
      slug: "ai-voice-receptionist",
      name: "AI Receptionist",
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
            "GoHighLevel or CRM integration",
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
        { q: "What are the performance standards?", a: "Calls are answered within seconds, 24 hours a day, against a 99.5% uptime target. Booking and recovery targets are set from your own call data during setup and reported to you. In client deployments, average answer time fell from 45 seconds to 2 (Troy Plumbing) and call capture rose from 55% to 100% (EZ Cribs)." },
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
            "Calendly or GoHighLevel integration",
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
      pitch: "A standardized, templated CRM environment built for rapid deployment with an aggressive 5-day follow-up cadence.",
      packages: [
        {
          tier: "CRM Foundation",
          scope: "CRM account setup, pipeline, and the basic automations every business needs.",
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
        { q: "Do I have to switch to GoHighLevel?", a: "GoHighLevel is the default because deployment is fast. Equivalent platforms are accepted when there is a real reason." },
        { q: "What does the standard pipeline look like?", a: "New Lead → Contacted → Qualified → Booked → Closed. We adapt the stage labels to your sales motion." },
        { q: "Can you support multiple brands or locations?", a: "Yes. The Multi-Brand tier is designed for agencies and multi-location operators with sub-account templates and a snapshot library." },
      ],
    },
    {
      slug: "business-process-automation",
      name: "Business Process Automation (n8n / Custom)",
      bestFit: "Operators bleeding hours on manual data entry between tools.",
      pitch: "Replaces 'Zapier almost works' and manual copy-paste between your CRM, phone system, spreadsheets, and databases.",
      packages: [
        {
          tier: "Automation Audit",
          scope: "Full stack review, automation roadmap, and ROI sizing.",
          deliverables: [
            "90-minute discovery",
            "Written audit",
            "Prioritized automation backlog",
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
          deliverables: ["Discovery sprint", "Fixed-scope statement of work", "Build, test, and hand-over"],
        },
      ],
      faqs: [
        { q: "Which integrations are in scope?", a: "Standard library covers GoHighLevel, Twilio, Vapi, Calendly, Slack, Supabase, Sheets, Airtable, Apollo, Clay, Stripe, Shopify, Meta Ads, OpenAI and Anthropic." },
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
            "Google Calendar or GoHighLevel Calendar integration",
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
        { q: "Does it sit on top of my existing calendar?", a: "Yes. We integrate Google Calendar or GoHighLevel Calendar, and your existing calendar stays the source of truth." },
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
      slug: "managed-services",
      name: "Managed Services (Retainer Layer)",
      bestFit: "Every automation client at build hand-off. Most start with Care.",
      pitch: "Monitoring, optimization, and ongoing support that keeps every build working after launch.",
      packages: [
        {
          tier: "Care",
          scope: "Uptime monitoring, incident response (next business day), and monthly health report.",
          deliverables: ["Uptime monitoring", "Incident response", "Monthly health report"],
        },
        {
          tier: "Optimize",
          scope: "Care plus monthly optimization pass on flows and copy, and a quarterly strategy call.",
          deliverables: [
            "Everything in Care",
            "Monthly optimization pass",
            "Quarterly strategy call",
          ],
        },
        {
          tier: "Partner",
          scope: "Optimize plus dedicated Slack channel, 4-hour incident SLA, and unlimited minor changes.",
          deliverables: [
            "Everything in Optimize",
            "Dedicated Slack channel",
            "4-hour incident SLA",
            "Unlimited minor changes",
          ],
        },
      ],
      faqs: [
        { q: "Is managed services required?", a: "It is not required, but every automation build is offered a Managed Services tier at hand-off. Most clients choose Care." },
        { q: "What does the Partner tier include that the others do not?", a: "A dedicated Slack channel, a 4-hour incident SLA, and unlimited minor changes, for clients who want BurkyFlow embedded in the team." },
      ],
    },
    {
      slug: "ai-consulting",
      name: "AI Consulting",
      bestFit: "Larger SMBs and professional firms not yet ready for a full build.",
      pitch: "Strategy, automation audits, stack evaluation, ROI modeling, and roadmap.",
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
    { q: "Do I have to buy everything?", a: "No. Every automation service works on its own. Most clients start with one, usually the AI receptionist or CRM, then expand." },
    { q: "Is ongoing support included with every build?", a: "Every automation build is offered a Managed Services tier at hand-off. Most clients choose Care." },
    { q: "How fast can you launch?", a: "Most automation services go live within 1–4 weeks. The Workflow Pack (10) and Voice Enterprise are the longest at 4–6 weeks." },
  ],
};

// ── Sales Generation ──────────────────────────────────────────────────────────────

export const demandBranch: Branch = {
  slug: "sales-generation",
  eyebrow: "Sales Generation",
  name: "Sales Generation",
  h1: "The engines that fill the pipe with booked meetings",
  lead: "Outbound, reactivation, booking, and referral, every offer designed to land qualified meetings on the calendar.",
  intro:
    "These services bring in new leads and meetings, and our automation services handle them once they arrive. Every offer below is built to put qualified meetings on your calendar, with reporting that ties spend to booked revenue.",
  offers: [
    {
      slug: "gtm-as-a-service",
      name: "Done-for-You Outbound (Flagship Offer)",
      bestFit: "Small businesses with a strong offer but no steady pipeline, and agencies that want outbound without hiring sales reps.",
      pitch: "We define your ideal customer, build a researched prospect list, run the outreach, and book the meetings.",
      packages: [
        {
          tier: "Outbound Foundation",
          scope: "Ideal-customer definition, prospect list, and a single-channel sequence.",
          deliverables: [
            "Ideal-customer profile",
            "2,500-company researched prospect list",
            "1-channel sequence (email or SMS)",
            "Reply handling",
          ],
          timeline: "3 weeks setup",
        },
        {
          tier: "Outbound Multi-Channel",
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
          tier: "Outbound Full-Stack",
          scope: "Multi-Channel plus outbound AI voice and a dedicated sales development rep.",
          deliverables: [
            "Everything in Multi-Channel",
            "Outbound AI voice calls",
            "Qualified-meeting hand-off",
            "Slack alerts",
            "Dedicated account strategist",
          ],
          timeline: "5–6 weeks setup",
        },
      ],
      faqs: [
        { q: "What reply rates should I expect?", a: "It depends on your market, offer, and list. We agree reply and meeting targets during setup and report against them every week." },
        { q: "What's the cost per booked meeting?", a: "We set a cost-per-meeting target during setup and report against it, so you can compare it directly with the cost of hiring in-house." },
        { q: "Do you handle the data?", a: "Yes. We build and research the prospect lists using data tools such as Apollo and Clay, our team handles replies, and meetings land on your calendar." },
        { q: "Will outbound time itself to my prospects' hours?", a: "Yes. Sends are timed to your prospects' working hours regardless of where the delivery team sits." },
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
            "Calendar routing (GoHighLevel or Calendly)",
            "Slack alert",
            "No-show recovery flow",
          ],
        },
        {
          tier: "Booking Engine + Dashboard",
          scope: "Booking Engine plus an Airtable command-center dashboard with daily digest and reporting.",
          deliverables: [
            "Everything in Booking Engine",
            "Airtable command-center",
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
        { q: "Does it work without an existing customer base?", a: "Referrals grow from happy existing customers. If you do not yet have a customer base, start with one of our lead generation services first." },
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
        { q: "How do performance fees work?", a: "Any performance-based fees are charged at our standard rates and tracked transparently in the reporting dashboard." },
      ],
    },
  ],
  faqs: [
    { q: "Do I need your automation services too?", a: "No, but it is recommended. Sales generation brings leads in; automation answers, follows up, and books them. Without it, qualified leads can still slip through." },
    { q: "Which sales generation service should I start with?", a: "If you have a dormant list, start with Reactivation. If you have no pipeline, start with Outbound Foundation. If leads already arrive but do not book, start with the Booking Engine." },
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
  // Search-result snippet, kept under ~160 characters.
  metaDescription?: string;
  components: string[];
  /** Typical time from kickoff to live, from the longest package timeline in the bundle. */
  setupTime?: string;
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
        tagline: "Just starting, the simplest way in",
        metaDescription: "The Lead Catcher bundle: an AI receptionist on one number plus a CRM pipeline, so every call is answered and every lead is logged. Live in about a week.",
        components: ["Voice Lite", "CRM Foundation"],
        setupTime: "About 1 week",
        bestFor: "A business whose calls roll to voicemail and whose leads live in a notebook or an inbox. One phone number, one pipeline, no extra staff.",
        whyThisBundle: "Answering the phone and writing the lead down are the two things that stop revenue leaking on day one. Voice Lite answers every call and texts back missed ones; CRM Foundation gives those calls a pipeline so nothing is forgotten.",
        outcomes: ["Every call answered, with missed-call text-back", "Every caller logged as a lead with the call summary", "A pipeline your team can work from the first week"],
      },
      {
        slug: "inbound-starter",
        name: "Inbound Starter",
        tagline: "Just starting, capture web visitors",
        metaDescription: "The Inbound Starter bundle: a website chat widget that captures leads plus calendar booking with reminders, so visitors book instead of leaving.",
        components: ["Chat Starter", "Booking Setup"],
        setupTime: "About 1 week",
        bestFor: "A business with website traffic that does not turn into appointments, and no front desk to answer chat.",
        whyThisBundle: "Visitors who have a question and nowhere to ask it leave. Chat Starter answers common questions and captures the lead; Booking Setup lets the visitor pick a time, with reminders and self-service rescheduling built in.",
        outcomes: ["Website questions answered and captured as leads", "Appointments booked from the site without a call", "Fewer no-shows from automatic reminders"],
      },
      {
        slug: "reactivation-quick-win",
        name: "Reactivation Quick Win",
        tagline: "Just starting, wake up an old list",
        metaDescription: "The Reactivation Quick Win bundle: an SMS and email reactivation campaign to up to 2,500 past customers, plus a CRM pipeline to book the replies.",
        components: ["Reactivation Sprint", "CRM Foundation"],
        setupTime: "1 to 2 weeks",
        bestFor: "A business with a list of past customers or old leads that nobody has contacted in a year or more.",
        whyThisBundle: "The cheapest revenue is from people who already know you. The Reactivation Sprint texts and emails up to 2,500 contacts in your voice; CRM Foundation gives the replies a pipeline so each one is booked, not lost.",
        outcomes: ["Replies and bookings within the first days of sending", "A clean, segmented list you can run again next quarter", "Revenue from contacts you already paid to acquire"],
      },
      {
        slug: "service-business-core",
        name: "Service Business Core",
        tagline: "Growing, install a real system",
        metaDescription: "The Service Business Core bundle: AI receptionist with booking and emergency routing, a CRM with 5-day follow-up, and no-show recovery. Live in 2 to 3 weeks.",
        components: ["Voice Pro", "CRM Velocity", "Booking + No-Show Recovery"],
        setupTime: "2 to 3 weeks",
        bestFor: "A service business past the startup stage that is losing jobs to slow follow-up and no-shows, and wants one connected system instead of three tools.",
        whyThisBundle: "Voice Pro answers, qualifies, routes emergencies, and books. CRM Velocity follows up every lead for five days and texts back missed calls. No-Show Recovery wins back the appointments that fall through. Together they cover the whole path from ring to completed job.",
        outcomes: ["Calls answered and booked around the clock", "Every lead followed up automatically for five days", "No-shows recovered and show rate reported"],
      },
      {
        slug: "the-demand-engine",
        name: "The Demand Engine",
        tagline: "Growing, turn on pipeline",
        metaDescription: "The Demand Engine bundle: multi-channel outbound to a researched prospect list, a booking engine that screens and schedules replies, and a CRM to work them.",
        components: ["Outbound Multi-Channel", "Booking Engine", "CRM Velocity"],
        setupTime: "About 4 weeks",
        bestFor: "A business with a strong offer and no steady source of new conversations, ready to run outbound without hiring sales reps.",
        whyThisBundle: "Outbound Multi-Channel builds the prospect list and runs email, SMS, and LinkedIn outreach. The Booking Engine screens replies and puts meetings on the calendar. CRM Velocity keeps every conversation moving after the meeting is set.",
        outcomes: ["A researched prospect list and live outreach across three channels", "Replies screened and booked without manual back-and-forth", "Weekly reporting on replies, meetings, and pipeline"],
      },
      {
        slug: "inbound-outbound-combo",
        name: "Inbound + Outbound Combo",
        tagline: "Growing, both sides of the funnel",
        metaDescription: "The Inbound + Outbound Combo bundle: an AI receptionist and multi-channel chat for the leads you get, plus outbound outreach for the ones you don't.",
        components: ["Voice Pro", "Chat + Booking", "Outbound Foundation"],
        setupTime: "About 3 weeks",
        bestFor: "A business that wants to capture every inbound lead and start generating outbound ones in the same engagement.",
        whyThisBundle: "Voice Pro and Chat + Booking make sure nothing inbound is lost, by phone or by message. Outbound Foundation adds a single-channel outreach sequence to a researched list, so the pipeline no longer depends on who happens to call.",
        outcomes: ["Every call and chat answered and booked", "A first outbound sequence running to a defined ideal customer", "One pipeline for inbound and outbound leads"],
      },
      {
        slug: "demand-and-convert",
        name: "Demand + Convert",
        tagline: "Scaling, end-to-end coverage",
        metaDescription: "The Demand + Convert bundle: multi-channel outbound, an AI receptionist, a CRM with aggressive follow-up, and a booking engine, covering demand through to booked work.",
        components: ["Outbound Multi-Channel", "Voice Pro", "CRM Velocity", "Booking Engine"],
        setupTime: "About 4 weeks",
        bestFor: "A scaling business that wants pipeline generation and conversion handled as one system, with reporting that ties outreach to booked revenue.",
        whyThisBundle: "Outbound creates the conversations. Voice Pro answers the calls that follow. CRM Velocity follows up everything for five days. The Booking Engine turns replies into scheduled meetings. Each piece feeds the next, and the reporting shows the whole chain.",
        outcomes: ["Outbound, inbound, and follow-up on one system", "Meetings booked from replies without manual scheduling", "Reporting from first touch to booked revenue"],
      },
    ],
  },
  {
    heading: "By industry",
    lead: "Industry bundles, pre-scoped around how your trade actually works, so the conversation goes straight to scope.",
    bundles: [
      {
        slug: "home-services-bundle",
        name: "Home Services",
        tagline: "HVAC, plumbing, electrical, roofing",
        metaDescription: "The Home Services bundle: an AI receptionist for emergency and after-hours calls, CRM follow-up, reactivation of past customers, and no-show recovery for HVAC, plumbing, electrical, and roofing companies.",
        components: ["Voice Pro", "CRM Velocity", "Reactivation Multi-Channel", "Booking + No-Show Recovery"],
        setupTime: "2 to 3 weeks",
        bestFor: "Home service companies with steady inbound calls, a database of past customers, and a dispatch board that needs bookings written into it.",
        whyThisBundle: "Catches every emergency call and routes it to the on-call tech, follows up every quote, wakes the install base with seasonal reactivation across SMS, email, and voice, and recovers the appointments that fall through.",
        outcomes: ["After-hours and overflow calls answered and booked", "Past customers reactivated each season", "Quotes followed up and no-shows recovered"],
      },
      {
        slug: "healthcare",
        name: "Healthcare and Practices",
        tagline: "Dental, medspa, and clinics",
        metaDescription: "The Healthcare bundle: an AI receptionist and multi-channel chat for patient calls and messages, a CRM with follow-up, and recall reactivation for dental, medspa, and medical practices.",
        components: ["Voice Pro", "Chat + Booking", "CRM Velocity", "Reactivation Sprint"],
        setupTime: "2 to 3 weeks",
        bestFor: "Practices where the front desk cannot answer every call and message, and where recall lists and consult requests sit unworked.",
        whyThisBundle: "Voice Pro and Chat + Booking answer patient calls and messages and book the chair. CRM Velocity follows up consult requests. The Reactivation Sprint re-engages overdue recall patients. Handoff rules send clinical questions to staff.",
        outcomes: ["Patient calls and messages answered and booked", "Consult requests followed up automatically", "Overdue recall patients re-engaged and rebooked"],
      },
      {
        slug: "real-estate",
        name: "Real Estate",
        tagline: "Lead capture + dormant-database revenue",
        metaDescription: "The Real Estate bundle: an AI receptionist for inquiries, a CRM with 5-day follow-up, reactivation of cold buyer and seller leads, and AI search visibility for the team.",
        components: ["Voice Pro", "CRM Velocity", "Reactivation Sprint", "AEO Baseline"],
        setupTime: "2 to 3 weeks",
        bestFor: "Teams sitting on hundreds of cold buyer and seller leads, with agents too busy to follow up and a brand that should show up in AI search answers.",
        whyThisBundle: "Voice Pro captures and qualifies inquiries. CRM Velocity follows up every lead for five days. The Reactivation Sprint re-engages the cold database and books the warm ones. AEO Baseline builds the entity and schema foundation so the team is cited in AI answers.",
        outcomes: ["Inquiries answered and qualified at any hour", "Cold leads re-engaged and appointments set", "A foundation for AI search visibility"],
      },
      {
        slug: "automotive",
        name: "Automotive and Repair",
        tagline: "Service calls, declined work, overdue customers",
        metaDescription: "The Automotive bundle: an AI receptionist for service calls, CRM follow-up on declined estimates, reactivation of overdue customers, and no-show recovery for repair shops and dealership service departments.",
        components: ["Voice Pro", "CRM Velocity", "Reactivation Multi-Channel", "Booking + No-Show Recovery"],
        setupTime: "2 to 3 weeks",
        bestFor: "Repair shops and service departments where advisors cannot answer the phone at the write-up counter, and where overdue customers drift to other shops.",
        whyThisBundle: "Voice Pro answers service calls and books against the shop schedule. CRM Velocity follows up declined estimates. Reactivation Multi-Channel texts, emails, and calls customers overdue for service. No-Show Recovery keeps the bays full.",
        outcomes: ["Service calls answered and booked at every hour", "Declined estimates followed up with a payment option", "Overdue customers brought back before they switch shops"],
      },
      {
        slug: "auto-finance",
        name: "Auto Finance and Lending",
        tagline: "Speed to lead, documents, and portfolio triggers",
        metaDescription: "The Auto Finance bundle: an AI receptionist for applicant calls, a CRM with 5-day follow-up, three custom workflows for document collection and lender routing, and portfolio reactivation.",
        components: ["Voice Pro", "CRM Velocity", "Workflow Pack (3)", "Reactivation Sprint"],
        setupTime: "2 to 3 weeks",
        bestFor: "Lenders, brokers, and dealership finance teams where applications arrive at all hours, documents are chased by hand, and the portfolio is never re-marketed.",
        whyThisBundle: "Voice Pro answers applicant calls in seconds. CRM Velocity follows up every application. The Workflow Pack automates document collection, lender submission tracking, and escalation alerts. The Reactivation Sprint runs refinance and equity triggers against the existing portfolio.",
        outcomes: ["First response to every application in seconds", "Documents collected and lender submissions tracked automatically", "Refinance-ready customers contacted from your own portfolio"],
      },
      {
        slug: "staffing",
        name: "Staffing and Recruiting",
        tagline: "Candidates, clients, and placements in one system",
        metaDescription: "The Staffing bundle: an AI receptionist for candidate and client calls, a CRM with follow-up, outbound outreach to target employers, and a booking engine for interviews and client meetings.",
        components: ["Voice Pro", "CRM Velocity", "Outbound Foundation", "Booking Engine"],
        setupTime: "About 3 weeks",
        bestFor: "Staffing and recruiting firms juggling candidate screening, client development, and interview scheduling across spreadsheets and inboxes.",
        whyThisBundle: "Voice Pro screens candidate calls and takes client inquiries. CRM Velocity keeps candidates and clients moving through one pipeline. Outbound Foundation runs outreach to target employers. The Booking Engine schedules interviews and client meetings without the back-and-forth.",
        outcomes: ["Candidate and client calls answered and logged", "A steady outreach sequence to target employers", "Interviews and meetings booked automatically"],
      },
      {
        slug: "professional-firms",
        name: "Professional Firms",
        tagline: "Intake, follow-up, and AI search visibility",
        metaDescription: "The Professional Firms bundle: a multi-location AI receptionist for intake calls, multi-channel chat with booking, a CRM with follow-up, and ongoing AI search visibility for law, accounting, and consulting firms.",
        components: ["Voice Enterprise", "CRM Velocity", "Chat + Booking", "AEO Growth"],
        setupTime: "3 to 4 weeks",
        bestFor: "Law, accounting, and consulting firms where intake calls cluster after hours, every inquiry is valuable, and being cited in AI search answers matters.",
        whyThisBundle: "Voice Enterprise handles intake across offices and practice areas with custom routing. Chat + Booking captures web inquiries and books consultations. CRM Velocity follows up every inquiry. AEO Growth keeps the firm visible in ChatGPT, Gemini, and Google AI answers.",
        outcomes: ["Intake calls qualified and routed at any hour", "Consultations booked from the website", "Ongoing citations in AI search answers"],
      },
    ],
  },
  {
    heading: "Full-stack",
    lead: "For businesses that want the whole system built, run, and reported on by one team.",
    bundles: [
      {
        slug: "full-stack-burkyflow",
        name: "Full-Stack BurkyFlow",
        tagline: "The complete operating system",
        metaDescription: "The Full-Stack BurkyFlow bundle: multi-location AI receptionist, CRM with follow-up, multi-channel outbound, booking engine with dashboard, ongoing reactivation, and managed care. One team runs it all.",
        components: ["Voice Enterprise", "CRM Velocity", "Outbound Multi-Channel", "Booking Engine + Dashboard", "Reactivation Engine", "Care"],
        setupTime: "4 to 6 weeks, in phases",
        bestFor: "An established business that wants inbound, outbound, follow-up, reactivation, and reporting handled as one system with one accountable partner.",
        whyThisBundle: "Every revenue path is covered: calls answered by Voice Enterprise, leads followed up by CRM Velocity, new pipeline from Outbound Multi-Channel, meetings scheduled by the Booking Engine with a live dashboard, the database worked monthly by the Reactivation Engine, and Care keeping it all running after launch. Rolled out in phases so each part is tested before the next starts.",
        outcomes: ["One connected system from first call to booked revenue", "A live dashboard the owner actually reads", "Monitoring, incident response, and a monthly health report"],
      },
      {
        slug: "the-empire-package",
        name: "The Empire Package",
        tagline: "Full-stack plus strategy and a partner-level team",
        metaDescription: "The Empire Package: everything in Full-Stack BurkyFlow plus a strategy sprint, ongoing AI search visibility, and partner-level managed services with a dedicated Slack channel and 4-hour incident response.",
        components: ["Everything in Full-Stack BurkyFlow", "Strategy Sprint", "AEO Growth", "Partner Managed Services"],
        setupTime: "6 to 8 weeks, in phases",
        bestFor: "Multi-location or multi-brand operators who want a roadmap first, the full system second, and BurkyFlow embedded in the team afterwards.",
        whyThisBundle: "The Strategy Sprint audits the stack and sets a 12-month roadmap before anything is built. The full system follows. AEO Growth keeps the brand visible in AI search. Partner Managed Services adds a dedicated Slack channel, a 4-hour incident SLA, and unlimited minor changes.",
        outcomes: ["A 12-month automation roadmap and ROI model before the build", "The complete system, built in phases against the roadmap", "A dedicated channel and 4-hour response for the life of the engagement"],
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

// Finds the package a bundle component refers to, by tier name, across both branches.
export function findPackage(tier: string) {
  for (const branch of branches) {
    for (const offer of branch.offers) {
      const pkg = offer.packages.find((p) => p.tier === tier);
      if (pkg) return { offer, pkg, branch };
    }
  }
  return undefined;
}

export const bundlesFaqs = [
  {
    q: "How are bundles priced?",
    a: "Bundles always carry a discount versus à la carte, 10% on 2 services, scaling to 25% on full-stack. Exact pricing is shared after a short scoping call so quotes match the result you want.",
  },
  {
    q: "Can I build my own combo?",
    a: "Yes. Any combination of automation and sales generation services can be bundled. Discount tier applies automatically based on the number of services selected.",
  },
  {
    q: "Are bundles a lock-in?",
    a: "No. Setup fees are one-time and monthlies cancel with standard notice. Bundle discounts are preserved as long as the services remain active together.",
  },
  {
    q: "Where does Managed Services fit?",
    a: "Every automation build is offered a Managed Services tier at hand-off (most clients choose Care). Managed Services is excluded from bundle discounts but always available standalone.",
  },
];
