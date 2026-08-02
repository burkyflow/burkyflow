// Per-industry ad-funnel copy. Punchier and more direct than the SEO industry
// pages, built for cold paid traffic with a single CTA: book a call.
// Structural data (pains, offers, serviceFit, faqs) is reused from industries.ts;
// this file adds the hero, results, and framing that a landing page needs.

export type FunnelStat = { value: string; label: string };
export type FunnelFeature = { title: string; points: string[] };
export type FunnelProblem = { title: string; desc: string };

export type Funnel = {
  slug: string; // matches an industry slug
  eyebrow: string;
  headline: string;
  headlineAccent: string; // the part rendered in the brand gradient
  subheadline: string;
  heroImage?: string; // optional full-bleed hero photo (falls back to a clean dark hero)
  heroPoints: string[]; // 3 quick trust bullets under the hero
  problemHeading: string;
  problemHeadingAccent?: string; // colored second part of the problem heading
  problemLead?: string; // supporting line under the problem heading
  problems: FunnelProblem[]; // 4 pain mini-cards (short title + description)
  solves: string[]; // "BurkyFlow AI solves it all" checklist, shown opposite the problems
  results: FunnelStat[]; // 4 outcome stat cards, rendered as the hero stat bar
  featuresHeading: string;
  featuresLead: string; // one-line promise under the features heading
  features: FunnelFeature[]; // "what we run for you" checklist cards
  pills: string[]; // vertical labels shown beside the phone mockup
  testimonialsHeading?: string; // "Trusted by ... across the USA"
  testimonials?: { text: string; attribution: string; vertical?: string }[]; // funnel-specific (falls back to case studies)
  faqs?: { q: string; a: string }[]; // funnel-specific FAQ (falls back to the industry FAQ)
  bookingHeading: string;
  bookingLead: string;
};

export const funnels: Record<string, Funnel> = {
  "home-services": {
    slug: "home-services",
    eyebrow: "For HVAC, plumbing, roofing & home services",
    headline: "Stop losing jobs to a",
    headlineAccent: "missed call.",
    subheadline:
      "An AI voice agent answers every call 24/7, books the job onto your dispatch board, and wakes up the past customers already in your CRM, so no lead ever goes to the contractor who picked up second.",
    heroImage: "/plumbing_hero.png",
    heroPoints: [
      "Every after-hours & overflow call answered",
      "Jobs booked straight to your dispatch board",
      "No new staff, live in under 2 weeks",
    ],
    problemHeading: "Stop losing",
    problemHeadingAccent: "customers to missed calls",
    problemLead:
      "Every missed call is a lost job. BurkyFlow makes sure your business never misses a customer again.",
    problems: [
      { title: "Missed Calls", desc: "Customers call and get no answer" },
      { title: "Lost Leads", desc: "Opportunities slip away" },
      { title: "After Hours", desc: "You can't answer 24/7" },
      { title: "Busy Staff", desc: "Your team can't handle every call" },
    ],
    solves: [
      "AI answers every call, 24/7",
      "Books appointments automatically",
      "Qualifies leads and filters spam",
      "Sends details to your phone and CRM",
      "Helps you grow revenue",
    ],
    results: [
      { value: "100%", label: "Of calls answered by an AI voice, day or night" },
      { value: "24/7", label: "After-hours & overflow coverage" },
      { value: "< 60s", label: "To first response on every lead" },
      { value: "0", label: "Jobs lost to voicemail" },
    ],
    featuresHeading: "Powerful AI automation for home service businesses",
    featuresLead: "More calls. More bookings. More revenue.",
    pills: ["Plumbing", "HVAC", "Electrical", "Roofing", "Cleaning", "& more"],
    testimonialsHeading: "Trusted by home service businesses across the USA",
    testimonials: [
      {
        text: "BurkyFlow booked 37 extra jobs in our first month. It's like having a 24/7 receptionist!",
        attribution: "Mike Reynolds, HVAC Contractor, Texas",
      },
      {
        text: "We haven't missed a call since using BurkyFlow. Our business has grown 40%.",
        attribution: "Sarah Collins, Plumbing Company, Florida",
      },
      {
        text: "Super easy to set up and the AI sounds natural. Highly recommend!",
        attribution: "Jason Miller, Electrician, California",
      },
    ],
    faqs: [
      {
        q: "How quickly can BurkyFlow be set up?",
        a: "Most setups go live in under 2 weeks. We handle the build, call scripts, and integrations for you, so there is nothing technical on your end.",
      },
      {
        q: "Does it work with my CRM?",
        a: "Yes. BurkyFlow pushes every call, booking, and lead into your CRM or dispatch software, so nothing sits in a separate tool.",
      },
      {
        q: "Will it sound like a real person?",
        a: "It does. The AI voice holds natural, human-like conversations and greets callers in your business name. Most callers cannot tell the difference.",
      },
      {
        q: "What happens after hours?",
        a: "BurkyFlow answers 24/7, including nights, weekends, and holidays. Emergency calls are detected and routed to your on-call line, everything else is booked or captured.",
      },
      {
        q: "Can I use my existing phone number?",
        a: "Yes. We forward your existing number to BurkyFlow, so customers keep calling the same line and you keep your number.",
      },
      {
        q: "How much does it cost?",
        a: "Plans start at $497/mo with a one-time setup. We confirm exact scope and pricing on your free call, with no obligation.",
      },
    ],
    features: [
      { title: "Smart Call Answering", points: ["Natural, human-like conversations, available 24/7"] },
      { title: "Automated Booking", points: ["Schedules appointments instantly"] },
      { title: "Lead Qualification", points: ["Focus on serious customers, not tire-kickers"] },
      { title: "CRM Integration", points: ["All leads and bookings in one place"] },
    ],
    bookingHeading: "See how many jobs you're leaving on the table",
    bookingLead:
      "Book a 30-minute call. We'll audit your missed-call log and show you exactly how much revenue is walking out the door, and what we'd automate first.",
  },

  healthcare: {
    slug: "healthcare",
    eyebrow: "For dental, medspa & healthcare practices",
    headline: "Fill the chair from the patients you",
    headlineAccent: "already have.",
    subheadline:
      "We re-engage your recall and hygiene list, verify insurance on the call, and book consults the moment a lead comes in, written straight into your practice software, with zero extra front-desk load.",
    heroPoints: [
      "Recall & hygiene lists worked automatically",
      "Insurance verified before the visit",
      "Consults booked into your practice software",
    ],
    problemHeading: "Stop losing",
    problemHeadingAccent: "patients you already have",
    problemLead:
      "Every unworked recall is revenue you already paid for. BurkyFlow makes sure no patient slips through.",
    problems: [
      { title: "Cold Recalls", desc: "Hygiene lists sit untouched" },
      { title: "Lost Consults", desc: "Requests die in a form" },
      { title: "Slow Intake", desc: "Insurance questions stall bookings" },
      { title: "Busy Front Desk", desc: "Can't chase recalls and run the office" },
    ],
    solves: [
      "Re-engages your recall and hygiene list",
      "Answers every consult request instantly",
      "Verifies insurance on the call",
      "Books consults into your practice software",
      "Runs 24/7 with zero extra front-desk load",
    ],
    results: [
      { value: "500–800", label: "Patients on a typical untouched recall list" },
      { value: "100%", label: "Of consult requests answered instantly" },
      { value: "24/7", label: "Booking, insurance capture & intake" },
      { value: "0", label: "Extra front-desk hours added" },
    ],
    featuresHeading: "Powerful AI automation for busy practices",
    featuresLead: "More booked chairs. Less front-desk load.",
    pills: ["Dental", "Medspa", "Chiropractic", "Optometry", "Veterinary", "& more"],
    features: [
      {
        title: "Recall & Reactivation",
        points: [
          "Re-engages overdue hygiene & recall patients",
          "Insurance verified on the call",
          "Books the chair automatically",
          "Runs in your practice's tone",
        ],
      },
      {
        title: "AI Voice for Consults",
        points: [
          "Books consults the moment a lead clicks",
          "Handles routine insurance & intake",
          "Answers after-hours and overflow",
          "Secure summary to your team",
        ],
      },
      {
        title: "Practice-Software Sync",
        points: [
          "Bookings written into your PMS",
          "Patient details attached to each visit",
          "Consistent follow-up on every inquiry",
          "One pipeline for the whole team",
        ],
      },
    ],
    bookingHeading: "Turn your recall list into booked chairs",
    bookingLead:
      "Book a 30-minute call. We'll show you how many patients on your recall list are reachable today, and how we'd book them without adding front-desk load.",
  },

  "real-estate": {
    slug: "real-estate",
    eyebrow: "For real estate teams & brokerages",
    headline: "Turn your dead lead list into",
    headlineAccent: "booked appointments.",
    subheadline:
      "We re-engage the hundreds of cold buyer and seller leads sitting in your CRM, qualify the warm ones by timeline, motivation, and financing with an AI voice, and drop the appointment straight onto your team calendar.",
    heroPoints: [
      "Dormant buyer & seller leads re-engaged",
      "Qualified on timeline, motivation & financing",
      "Appointments booked to your team calendar",
    ],
    problemHeading: "Stop losing",
    problemHeadingAccent: "deals to slow follow-up",
    problemLead:
      "Hundreds of leads sit cold in your CRM. BurkyFlow makes sure the ready ones never slip away.",
    problems: [
      { title: "Cold Leads", desc: "Follow-up was too slow" },
      { title: "Wasted Time", desc: "Agents chase unqualified leads" },
      { title: "Dead Lists", desc: "Expired leads never worked" },
      { title: "Slow Response", desc: "Buyers go with whoever calls first" },
    ],
    solves: [
      "Re-engages dormant buyer and seller leads",
      "Answers every new lead in under 60 seconds",
      "Qualifies on timeline, motivation and financing",
      "Books appointments onto your team calendar",
      "Runs 24/7 so no lead goes cold again",
    ],
    results: [
      { value: "~1 in 6", label: "Cold leads still transact, capture yours" },
      { value: "100%", label: "Of new leads get an instant first touch" },
      { value: "< 60s", label: "Speed-to-lead on every inquiry" },
      { value: "24/7", label: "Re-engagement & qualification" },
    ],
    featuresHeading: "Powerful AI automation for real estate teams",
    featuresLead: "More appointments. Less time on dead leads.",
    pills: ["Buyers", "Sellers", "Brokerages", "Teams", "Investors", "& more"],
    features: [
      {
        title: "Database Reactivation",
        points: [
          "Wakes up dormant buyer & seller leads",
          "Works expired & transplant-buyer lists",
          "Runs on leads you already paid for",
          "In your team's voice",
        ],
      },
      {
        title: "AI Voice Qualification",
        points: [
          "Qualifies on timeline & motivation",
          "Confirms financing status",
          "Books the warm ones automatically",
          "Only ready buyers reach your agents",
        ],
      },
      {
        title: "Instant Lead Routing",
        points: [
          "New leads answered in seconds",
          "Routed to the right agent",
          "Appointments on the team calendar",
          "No lead goes cold again",
        ],
      },
    ],
    bookingHeading: "See how many appointments are hiding in your CRM",
    bookingLead:
      "Book a 30-minute call. We'll show you the reachable-lead count in your database and how we'd turn it into appointments on your calendar.",
  },

  automotive: {
    slug: "automotive",
    eyebrow: "For auto repair & service shops",
    headline: "Bring customers back before they",
    headlineAccent: "switch shops.",
    subheadline:
      "We text the customers overdue for service and book them back in, while an AI voice answers the calls your team can't during busy bay hours, every booking logged into your shop software.",
    heroPoints: [
      "Overdue customers texted & rebooked",
      "Calls answered during busy bay hours",
      "Bookings logged into your shop software",
    ],
    problemHeading: "Stop losing",
    problemHeadingAccent: "customers to the next shop",
    problemLead:
      "Most customers switch shops within 18 months. BurkyFlow makes sure yours keep coming back.",
    problems: [
      { title: "Lost Customers", desc: "They switch to another shop" },
      { title: "No Reminders", desc: "Service reminders never go out" },
      { title: "Missed Calls", desc: "Phones ring during bay hours" },
      { title: "Voicemail", desc: "Callers dial the next shop" },
    ],
    solves: [
      "Texts customers overdue for service",
      "Books them back before they switch shops",
      "Answers calls during busy bay hours",
      "Logs every booking into your shop software",
      "Runs 24/7 with no missed calls or busy signals",
    ],
    results: [
      { value: "~60%", label: "Of customers switch shops in 18 months, keep yours" },
      { value: "100%", label: "Of calls answered during bay hours" },
      { value: "24/7", label: "Booking & service reminders" },
      { value: "< 60s", label: "To answer every inbound call" },
    ],
    featuresHeading: "Powerful AI automation for service shops",
    featuresLead: "More cars in the bay. Fewer missed calls.",
    pills: ["Auto Repair", "Tire & Service", "Body Shops", "Detailing", "Fleet", "& more"],
    features: [
      {
        title: "Overdue-Customer Reactivation",
        points: [
          "Texts customers due for service",
          "Books them back before they switch",
          "Uses service history & intervals",
          "Runs automatically every week",
        ],
      },
      {
        title: "AI Voice Receptionist",
        points: [
          "Answers calls during busy bay hours",
          "Books the service slot",
          "No missed calls, no busy signals",
          "Full call summary to your team",
        ],
      },
      {
        title: "Shop-Software Sync",
        points: [
          "Bookings logged into your system",
          "Customer & vehicle history in one place",
          "Timely, relevant outreach",
          "Nothing handled manually",
        ],
      },
    ],
    bookingHeading: "See how many customers you can win back",
    bookingLead:
      "Book a 30-minute call. We'll show you how many of your past customers are overdue for service, and how we'd rebook them automatically.",
  },

  "professional-firms": {
    slug: "professional-firms",
    eyebrow: "For law firms & professional services",
    headline: "Never lose another intake call to",
    headlineAccent: "voicemail.",
    subheadline:
      "High-intent intake calls cluster at night, exactly when your office line rolls to voicemail. A compliance-first AI voice captures matter type and urgency, delivers a secure summary to the partner, and holds a slot for next-morning follow-up.",
    heroPoints: [
      "After-hours intake captured & qualified",
      "Compliance-first, matter type & urgency logged",
      "Secure summary to the partner, slot held",
    ],
    problemHeading: "Stop losing",
    problemHeadingAccent: "matters to voicemail",
    problemLead:
      "High-intent intake calls cluster after hours. BurkyFlow makes sure none of them reach a voicemail.",
    problems: [
      { title: "Missed Intake", desc: "After-hours calls hit voicemail" },
      { title: "Overflow", desc: "Inquiries arrive faster than staff" },
      { title: "Manual Intake", desc: "Inconsistent and hard to audit" },
      { title: "Lost Matters", desc: "Motivated callers hang up at 9pm" },
    ],
    solves: [
      "Captures every after-hours intake call",
      "Logs matter type and urgency on the call",
      "Runs basic conflict-check prompts",
      "Sends a secure summary to the partner",
      "Holds a slot for next-morning follow-up",
    ],
    results: [
      { value: "7–11pm", label: "When high-intent intake calls cluster" },
      { value: "100%", label: "Of after-hours calls captured & qualified" },
      { value: "24/7", label: "Compliance-first intake coverage" },
      { value: "0", label: "Inquiries lost to voicemail" },
    ],
    featuresHeading: "Powerful AI automation for professional firms",
    featuresLead: "More matters captured. Less after-hours leakage.",
    pills: ["Law Firms", "Accounting", "Consulting", "Agencies", "Financial", "& more"],
    features: [
      {
        title: "After-Hours AI Intake",
        points: [
          "Captures matter type & urgency",
          "Basic conflict-check prompts",
          "Holds a slot for next-morning follow-up",
          "Secure summary to the responsible attorney",
        ],
      },
      {
        title: "Auditable Lead Pipeline",
        points: [
          "Every inquiry logged consistently",
          "One pipeline, easy to review",
          "High-intent matters followed up",
          "No inquiry falls through",
        ],
      },
      {
        title: "Intake Workflow Automation",
        points: [
          "Summaries routed to the right person",
          "Automatic follow-up scheduling",
          "Consistent, professional first touch",
          "Less manual admin for staff",
        ],
      },
    ],
    bookingHeading: "Stop losing after-hours matters",
    bookingLead:
      "Book a 30-minute call. We'll show you how a compliance-first AI voice captures the intake calls you're currently sending to voicemail.",
  },
};

export function getFunnel(slug: string) {
  return funnels[slug];
}

// ── Pricing shown on every funnel ─────────────────────────────────────────
// TODO(you): set your real prices here. Amounts are indicative and the note
// makes clear that exact scope + pricing is confirmed on the call.
export type PriceTier = {
  name: string;
  price: string; // discounted / current price
  originalPrice?: string; // struck-through pre-discount price
  period: string;
  setup: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
};

export const funnelPricing: {
  heading: string;
  lead: string;
  note: string;
  discount?: { label: string; sub: string };
  tiers: PriceTier[];
} = {
  heading: "Pricing built around booked revenue",
  lead: "Start with one system or run the whole engine. Every plan is done-for-you, we build it, run it, and report the numbers.",
  note: "Indicative pricing. We confirm exact scope and pricing on your call, no obligation.",
  // TODO(you): update the offer + prices. Remove `discount` to hide the sale.
  discount: { label: "Summer End Discount", sub: "Save up to 33%, for a limited time" },
  tiers: [
    {
      name: "Starter",
      originalPrice: "$697",
      price: "$497",
      period: "/mo",
      setup: "+ one-time setup",
      tagline: "One system, live fast",
      features: [
        "24/7 AI Voice Receptionist",
        "Bookings into your calendar",
        "Call summaries & smart routing",
        "Live in ~2 weeks",
      ],
    },
    {
      name: "Growth",
      originalPrice: "$1,497",
      price: "$997",
      period: "/mo",
      setup: "+ one-time setup",
      tagline: "Capture + reactivate",
      highlighted: true,
      features: [
        "Everything in Starter",
        "Database reactivation campaigns",
        "CRM & lead pipeline",
        "Automated follow-up & reminders",
      ],
    },
    {
      name: "Full System",
      price: "Custom",
      period: "",
      setup: "Scoped to you",
      tagline: "The whole revenue engine",
      features: [
        "Everything in Growth",
        "Multi-channel outbound",
        "Answer Engine Optimisation",
        "Dedicated support & reporting",
      ],
    },
  ],
};
