import {
  PhoneCall,
  DatabaseZap,
  Workflow,
  Users,
  Search,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";

export type ServiceStep = { title: string; detail: string };
export type Benefit = { title: string; detail: string };
export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  icon: LucideIcon;
  eyebrow: string;
  name: string; // nav / card label
  h2: string; // section + detail headline
  lead: string; // short summary (homepage + cards)
  intro: string[]; // longer narrative for the detail page
  steps: [ServiceStep, ServiceStep, ServiceStep];
  benefits: Benefit[];
  outcomes: string[]; // bullet outcomes
  faqs: FAQ[];
  whyItMatters: string;
  relatedIndustries: string[]; // industry slugs, powers the silo
  illustration: string; // matches ServiceIllustration variant
};

export const services: Service[] = [
  {
    slug: "ai-voice-receptionist",
    icon: PhoneCall,
    eyebrow: "Never miss a call",
    name: "AI Voice Receptionist",
    h2: "An AI receptionist that answers every call, day or night",
    lead: "Most missed calls go to a competitor who picked up second. A human-sounding AI voice answers on the first ring, qualifies the caller, and books the job straight into your calendar.",
    intro: [
      "Research across more than a thousand contractors shows the average small service business loses tens of thousands of dollars a year to calls nobody answered. Most of those callers do not leave a voicemail. They simply dial the next business on the list.",
      "Our AI voice receptionist removes that leak. It answers instantly, every hour of every day, speaks in your tone, handles the back-and-forth a real caller expects, and books qualified jobs directly onto your calendar. When a call genuinely needs a person, it routes to one.",
    ],
    steps: [
      {
        title: "Connect your line",
        detail: "We route your existing number or after-hours line to the AI voice. No new hardware.",
      },
      {
        title: "Train it on your business",
        detail: "Services, pricing guardrails, booking rules, and tone are configured to match how you talk.",
      },
      {
        title: "Calls become booked jobs",
        detail: "Every call is captured, qualified, logged, and pushed to your CRM or scheduler.",
      },
    ],
    benefits: [
      {
        title: "Answers 24/7, including overflow",
        detail: "Nights, weekends, holidays, and the moments your team is on a job or already on another line.",
      },
      {
        title: "Detects emergencies",
        detail: "Urgency cues like burst pipe, no heat, or lockout are flagged and escalated to a human immediately.",
      },
      {
        title: "Books straight into your calendar",
        detail: "Qualified callers are scheduled into your existing booking tool or dispatch board, not a callback queue.",
      },
      {
        title: "Costs a fraction of a hire",
        detail: "Round-the-clock coverage without the salary, benefits, training, or sick days of a front desk.",
      },
    ],
    outcomes: [
      "Zero unanswered calls during peak demand and after hours",
      "Every call captured, transcribed, and logged to a dashboard",
      "More booked jobs from the same call volume you already get",
    ],
    faqs: [
      {
        q: "Will the AI voice sound robotic?",
        a: "No. It is configured to match how your business talks, handles real back-and-forth, and hands off to a human when a call needs one.",
      },
      {
        q: "What happens with an emergency call?",
        a: "The AI detects urgency cues such as no heat, burst pipe, or lockout, and routes those calls to your on-call person immediately instead of trying to handle them.",
      },
      {
        q: "Does it work with my phone setup?",
        a: "Yes. We route your existing number, or just your after-hours and overflow line, to the AI voice. There is no new hardware to install.",
      },
      {
        q: "Where do the bookings go?",
        a: "Straight into your scheduler, CRM, or dispatch board, with the call summary attached so your team has full context.",
      },
    ],
    whyItMatters:
      "A single missed emergency call can be a four-figure job handed to the shop that answered.",
    relatedIndustries: ["home-services", "healthcare", "professional-firms", "automotive"],
    illustration: "ai-voice-receptionist",
  },
  {
    slug: "database-reactivation",
    icon: DatabaseZap,
    eyebrow: "Revenue you already paid for",
    name: "Database Reactivation",
    h2: "Wake up the customers already sitting in your CRM",
    lead: "You already paid to acquire every past customer and dead lead in your database. We re-engage them by SMS in your tone, and the AI voice books the ones who are ready.",
    intro: [
      "Most service businesses sit on hundreds or thousands of past customers and dead leads. They already trust you, they are already in your system, and almost none of them are being contacted. Meanwhile you keep buying new clicks at a premium.",
      "Database reactivation turns that dormant list into booked revenue. We text the list in your voice, the AI voice handles replies and qualifies intent, and ready customers land on your calendar. You see the reachable-contact count before anything ever sends.",
    ],
    steps: [
      {
        title: "Count the list",
        detail: "We pull a reachable-contact count from your CRM so you see the opportunity before anything sends.",
      },
      {
        title: "Re-engage by text",
        detail: "A short, on-brand SMS sequence reaches past customers and dormant leads at the right cadence.",
      },
      {
        title: "Book the warm ones",
        detail: "Replies are handled by AI voice, qualified, and dropped onto your calendar.",
      },
    ],
    benefits: [
      {
        title: "No new ad spend",
        detail: "Revenue comes from contacts you already paid to acquire, not a bigger media budget.",
      },
      {
        title: "Higher trust, faster yes",
        detail: "Past customers already know you, so they convert faster and cheaper than cold traffic.",
      },
      {
        title: "On-brand, not spammy",
        detail: "Messaging is written in your tone with sensible cadence and clear opt-out, so your reputation stays intact.",
      },
      {
        title: "You approve before send",
        detail: "You see the count, the segments, and the copy before a single message goes out.",
      },
    ],
    outcomes: [
      "A booked-job pipeline from contacts that were sitting idle",
      "A repeatable reactivation play you can run each quarter",
      "Clear reporting on replies, bookings, and revenue per campaign",
    ],
    faqs: [
      {
        q: "Is this compliant and safe for my brand?",
        a: "Yes. We message in your tone with appropriate consent handling, sensible cadence, and clear opt-out, so reactivation strengthens your reputation rather than risking it.",
      },
      {
        q: "How do you know who to contact?",
        a: "We segment your CRM by recency, service history, and reachability, then prioritize the contacts most likely to book. You approve the segments first.",
      },
      {
        q: "What if my data is messy?",
        a: "That is normal. Part of the setup is cleaning and de-duplicating the list so the campaign reaches real, reachable people.",
      },
      {
        q: "How fast do results show?",
        a: "Reactivation campaigns tend to produce replies and bookings within the first days of sending, because you are contacting people who already know you.",
      },
    ],
    whyItMatters:
      "Reactivating an existing list costs a fraction of buying new clicks, and those people already trust you.",
    relatedIndustries: ["home-services", "healthcare", "real-estate", "automotive"],
    illustration: "database-reactivation",
  },
  {
    slug: "crm-lead-systems",
    icon: Users,
    eyebrow: "One source of truth",
    name: "CRM and Lead Systems",
    h2: "A CRM and lead system that actually gets used",
    lead: "Leads leak when they live across a phone, an inbox, and three apps. We build one pipeline where every lead is captured, routed, and followed up automatically.",
    intro: [
      "When leads are scattered across a phone, an inbox, sticky notes, and three different apps, follow-up depends on someone remembering. That is how good leads go cold and why most teams cannot tell which source actually drives revenue.",
      "We build one pipeline that captures every lead from every source, attaches where it came from, routes it to the right person, and triggers fast, automatic follow-up. You get a system your team will actually use and reporting you can trust.",
    ],
    steps: [
      {
        title: "Map your pipeline",
        detail: "We model your real sales stages, sources, and hand-off points instead of a generic template.",
      },
      {
        title: "Wire up capture",
        detail: "Forms, calls, ads, and chats all flow into one place with the source attached.",
      },
      {
        title: "Automate follow-up",
        detail: "Speed-to-lead texts, reminders, and reactivation run without anyone remembering to.",
      },
    ],
    benefits: [
      {
        title: "Every lead in one place",
        detail: "Calls, forms, ads, and chats land in a single pipeline with the source attached.",
      },
      {
        title: "Speed-to-lead automation",
        detail: "New leads get an instant first touch, the window when they are most likely to convert.",
      },
      {
        title: "Nothing slips",
        detail: "Reminders, tasks, and follow-up sequences run automatically so no lead is forgotten.",
      },
      {
        title: "Reporting you can trust",
        detail: "See which sources, stages, and campaigns actually produce booked revenue.",
      },
    ],
    outcomes: [
      "A single, reliable pipeline your whole team works from",
      "Faster first response on every inbound lead",
      "Clear visibility into cost per booked job by source",
    ],
    faqs: [
      {
        q: "Do I have to switch CRMs?",
        a: "Not necessarily. We work with the common service-business CRMs. If your current tool fits, we build on it; if it is holding you back, we will tell you.",
      },
      {
        q: "Will my team actually use it?",
        a: "That is the point. We model your real workflow rather than a generic template, so the system fits how your team already works.",
      },
      {
        q: "Can it connect to my ads and forms?",
        a: "Yes. We wire up capture from your website forms, ad platforms, call tracking, and chat so every lead flows into one pipeline.",
      },
      {
        q: "What about speed-to-lead?",
        a: "New leads receive an automatic first touch within seconds, which is the window when they are most likely to respond and book.",
      },
    ],
    whyItMatters:
      "Most leads are won or lost in the first five minutes, long before a busy team can react manually.",
    relatedIndustries: ["real-estate", "home-services", "professional-firms", "automotive"],
    illustration: "crm-lead-systems",
  },
  {
    slug: "workflow-automation",
    icon: Workflow,
    eyebrow: "Stop doing it by hand",
    name: "Workflow Automation",
    h2: "Automate the busywork between your tools",
    lead: "The repetitive copy-paste between your booking app, CRM, invoicing, and inbox is where hours and accuracy disappear. We connect them into reliable workflows.",
    intro: [
      "Every service business has a set of small manual steps that repeat all day: copying a booking into the CRM, sending the reminder, raising the invoice, updating the spreadsheet. Each one is minor on its own. Together they cost hours and quietly drop customers who fall between two systems.",
      "We document those handoffs, connect your tools into reliable automated workflows, and monitor them so failures get caught early. The result is fewer manual steps, fewer mistakes, and a business that runs the same whether you are watching it or not.",
    ],
    steps: [
      {
        title: "Audit the manual steps",
        detail: "We document the handoffs your team repeats every day and where they break.",
      },
      {
        title: "Build the automations",
        detail: "Each workflow is connected, tested, and given a clear owner and fallback.",
      },
      {
        title: "Monitor and refine",
        detail: "We watch the workflows, catch failures early, and tune them as you grow.",
      },
    ],
    benefits: [
      {
        title: "Hours back every week",
        detail: "Repetitive copy-paste between tools is handled automatically instead of by your team.",
      },
      {
        title: "Fewer dropped customers",
        detail: "Reliable handoffs mean no one falls through the cracks between two systems.",
      },
      {
        title: "Consistent every time",
        detail: "Reminders, confirmations, and follow-ups fire the same way for every job.",
      },
      {
        title: "Monitored, not fragile",
        detail: "We watch the workflows and catch failures before they cost you a customer.",
      },
    ],
    outcomes: [
      "Manual admin time cut across booking, invoicing, and follow-up",
      "A documented, monitored set of workflows you can rely on",
      "More capacity to take on work without adding overhead",
    ],
    faqs: [
      {
        q: "Which tools can you connect?",
        a: "We connect the common service-business stack: scheduling, CRM, invoicing, messaging, and your inbox. Tell us what you run and we confirm fit.",
      },
      {
        q: "What happens if an automation fails?",
        a: "Each workflow has an owner and a fallback, and we monitor them so failures are caught and fixed before they reach a customer.",
      },
      {
        q: "Is this hard for my team to manage?",
        a: "No. We build and maintain the workflows for you. Your team sees the result, not the plumbing.",
      },
      {
        q: "Can you start small?",
        a: "Yes. We usually begin with the one or two handoffs costing the most time, prove the value, then expand.",
      },
    ],
    whyItMatters:
      "Manual handoffs do not just cost time, they quietly drop the customer who fell between two systems.",
    relatedIndustries: ["home-services", "professional-firms", "healthcare", "automotive"],
    illustration: "workflow-automation",
  },
  {
    slug: "answer-engine-optimization",
    icon: Search,
    eyebrow: "Be the answer",
    name: "Answer Engine Optimization",
    h2: "Get recommended by AI search, not just ranked on Google",
    lead: "Buyers now ask ChatGPT, Gemini, and AI search for a recommendation. We structure your site and content so answer engines cite you as the trusted local choice.",
    intro: [
      "Search behavior is shifting. More buyers ask an AI assistant for a recommendation than ever before, and the assistant answers with a short list of named providers. If you are not on that list, you are invisible, no matter how you rank on a traditional results page.",
      "Answer engine optimization makes your business easy for AI to understand, trust, and cite. We structure your site with clean schema and entity data, shape content into the answers these engines look for, and build consistent factual coverage so you become the recommended choice.",
    ],
    steps: [
      {
        title: "Audit your answer surface",
        detail: "We check how AI engines currently describe your business and where you are invisible.",
      },
      {
        title: "Structure for machines",
        detail: "Schema, clear entity data, and answer-shaped content make you easy to cite correctly.",
      },
      {
        title: "Build authority",
        detail: "Consistent, factual coverage across the web reinforces you as the answer over time.",
      },
    ],
    benefits: [
      {
        title: "Show up in AI answers",
        detail: "Be one of the named providers an assistant recommends, not the business it never mentions.",
      },
      {
        title: "Accurate, structured data",
        detail: "Clean schema and entity data mean engines describe your services and areas correctly.",
      },
      {
        title: "Answer-shaped content",
        detail: "Content built around the real questions buyers ask is what these engines pull from.",
      },
      {
        title: "Compounding authority",
        detail: "Consistent coverage across the web reinforces you as the trusted source over time.",
      },
    ],
    outcomes: [
      "Visibility in AI-generated recommendations and answers",
      "Correct, structured information about your services and service areas",
      "A durable content and schema foundation that compounds",
    ],
    faqs: [
      {
        q: "How is this different from SEO?",
        a: "Traditional SEO targets ranked links. Answer engine optimization targets being cited inside the answer an AI assistant generates, which is a different and increasingly important surface.",
      },
      {
        q: "How do you know if AI engines mention me?",
        a: "We audit how assistants currently describe your business and where you are missing, then track changes as we build your answer surface.",
      },
      {
        q: "Does my website need rebuilding?",
        a: "Usually not. Most of the work is adding structured data, clarifying entity information, and shaping content, which we can layer onto your existing site.",
      },
      {
        q: "How long until it works?",
        a: "Structured data and content improvements compound over time. It is an investment in durable visibility rather than an overnight switch.",
      },
    ],
    whyItMatters:
      "If an AI assistant names three local providers, being left off that list is the new page two.",
    relatedIndustries: ["home-services", "healthcare", "real-estate", "professional-firms"],
    illustration: "answer-engine-optimization",
  },
  {
    slug: "done-for-you",
    icon: PackageCheck,
    eyebrow: "We run it for you",
    name: "Done For You Service Model",
    h2: "One team that owns the whole system, not another tool to manage",
    lead: "You do not want six logins and a learning curve. We build, run, and maintain the entire automation stack so you get the outcome without the operations.",
    intro: [
      "Most automation fails not because the tools are bad, but because nobody has the time to set them up, connect them, and keep them running. You end up with half-configured software and another login to ignore.",
      "Our done-for-you model removes that burden entirely. We scope the outcome you want, build the receptionist, reactivation, CRM, and workflows as one connected system, then operate and report on it. You get a single team, a single dashboard, and a single point of contact.",
    ],
    steps: [
      {
        title: "Scope the outcome",
        detail: "We agree on the result you want, in your numbers, before anything is built.",
      },
      {
        title: "Build and launch",
        detail: "We stand up the receptionist, reactivation, CRM, and workflows as one connected system.",
      },
      {
        title: "Operate and report",
        detail: "One team, one dashboard, one point of contact. You see the bookings, we handle the rest.",
      },
    ],
    benefits: [
      {
        title: "No tools to manage",
        detail: "We build, run, and maintain everything. You see outcomes, not a stack of logins.",
      },
      {
        title: "One connected system",
        detail: "Receptionist, reactivation, CRM, and workflows work together instead of as separate apps.",
      },
      {
        title: "One point of contact",
        detail: "A single team and a single dashboard, not five vendors pointing at each other.",
      },
      {
        title: "Accountable to your numbers",
        detail: "We agree on the outcome up front and report against it, every month.",
      },
    ],
    outcomes: [
      "A fully operated automation system with nothing for you to maintain",
      "One dashboard showing calls captured and jobs booked",
      "A single accountable partner instead of a pile of disconnected tools",
    ],
    faqs: [
      {
        q: "What do I actually have to do?",
        a: "Agree on the outcome and give us access to the tools involved. We handle the build, the running, and the maintenance.",
      },
      {
        q: "How is this priced?",
        a: "Pricing depends on the system and the outcome you want. We scope it with you on a short call so the terms match the result.",
      },
      {
        q: "Do I keep ownership of my systems and data?",
        a: "Yes. Your accounts, data, and customer relationships remain yours. We operate the system on your behalf.",
      },
      {
        q: "Can you start with one piece?",
        a: "Yes. Many clients start with after-hours call capture or a reactivation campaign, then expand into the full system.",
      },
    ],
    whyItMatters:
      "A pile of disconnected tools is fragile. One owned system is something you can actually rely on.",
    relatedIndustries: ["home-services", "healthcare", "real-estate", "automotive", "professional-firms"],
    illustration: "done-for-you",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
