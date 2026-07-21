// Per-industry ad-funnel copy. Punchier and more direct than the SEO industry
// pages — built for cold paid traffic with a single CTA: book a call.
// Structural data (pains, offers, serviceFit, faqs) is reused from industries.ts;
// this file adds the hero, results, and framing that a landing page needs.

export type FunnelStat = { value: string; label: string };
export type FunnelFeature = { title: string; points: string[] };

export type Funnel = {
  slug: string; // matches an industry slug
  eyebrow: string;
  headline: string;
  headlineAccent: string; // the part rendered in the brand gradient
  subheadline: string;
  heroPoints: string[]; // 3 quick trust bullets under the hero
  problemHeading: string;
  problems: string[];
  results: FunnelStat[]; // 4 outcome stat cards
  featuresHeading: string;
  features: FunnelFeature[]; // "what we run for you" checklist cards
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
      "An AI voice agent answers every call 24/7, books the job onto your dispatch board, and wakes up the past customers already in your CRM — so no lead ever goes to the contractor who picked up second.",
    heroPoints: [
      "Every after-hours & overflow call answered",
      "Jobs booked straight to your dispatch board",
      "No new staff, live in under 2 weeks",
    ],
    problemHeading: "Sound familiar?",
    problems: [
      "Emergency calls after hours go straight to a competitor.",
      "Past maintenance customers are never contacted again until they've rebooked elsewhere.",
      "Your front desk can't answer, dispatch, and follow up at the same time.",
      "Ad spend brings calls that nobody's there to pick up.",
    ],
    results: [
      { value: "100%", label: "Of calls answered by an AI voice, day or night" },
      { value: "24/7", label: "After-hours & overflow coverage" },
      { value: "< 60s", label: "To first response on every lead" },
      { value: "0", label: "Jobs lost to voicemail" },
    ],
    featuresHeading: "What we run for your shop",
    features: [
      {
        title: "24/7 AI Voice Receptionist",
        points: [
          "Answers every call on the first ring",
          "Detects emergencies & routes to on-call",
          "Books the job into your scheduler",
          "Sends you the full call summary",
        ],
      },
      {
        title: "Database Reactivation",
        points: [
          "Texts past maintenance customers",
          "Books overdue service back in",
          "Runs on the list you already paid for",
          "No new ad spend required",
        ],
      },
      {
        title: "Dispatch & Follow-up Automation",
        points: [
          "Bookings drop onto the dispatch board",
          "Automatic confirmations & reminders",
          "Every quote & callback tracked",
          "Nothing forgotten in a busy week",
        ],
      },
    ],
    bookingHeading: "See how many jobs you're leaving on the table",
    bookingLead:
      "Book a 30-minute call. We'll audit your missed-call log and show you exactly how much revenue is walking out the door — and what we'd automate first.",
  },

  healthcare: {
    slug: "healthcare",
    eyebrow: "For dental, medspa & healthcare practices",
    headline: "Fill the chair from the patients you",
    headlineAccent: "already have.",
    subheadline:
      "We re-engage your recall and hygiene list, verify insurance on the call, and book consults the moment a lead comes in — written straight into your practice software, with zero extra front-desk load.",
    heroPoints: [
      "Recall & hygiene lists worked automatically",
      "Insurance verified before the visit",
      "Consults booked into your practice software",
    ],
    problemHeading: "Sound familiar?",
    problems: [
      "Your hygiene and recall list sits untouched while you buy new-patient clicks.",
      "Consult requests die in a form that someone means to call back tomorrow.",
      "Insurance and intake questions slow every booking to a crawl.",
      "The front desk can't chase recalls and run the office at the same time.",
    ],
    results: [
      { value: "500–800", label: "Patients on a typical untouched recall list" },
      { value: "100%", label: "Of consult requests answered instantly" },
      { value: "24/7", label: "Booking, insurance capture & intake" },
      { value: "0", label: "Extra front-desk hours added" },
    ],
    featuresHeading: "What we run for your practice",
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
      "Book a 30-minute call. We'll show you how many patients on your recall list are reachable today — and how we'd book them without adding front-desk load.",
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
    problemHeading: "Sound familiar?",
    problems: [
      "Hundreds of buyer leads went cold because follow-up was too slow.",
      "Agents burn time on unqualified leads while ready buyers slip away.",
      "Expired and transplant-buyer lists never get worked.",
      "About 1 in 6 cold leads still transacts — usually with whoever calls second.",
    ],
    results: [
      { value: "~1 in 6", label: "Cold leads still transact — capture yours" },
      { value: "100%", label: "Of new leads get an instant first touch" },
      { value: "< 60s", label: "Speed-to-lead on every inquiry" },
      { value: "24/7", label: "Re-engagement & qualification" },
    ],
    featuresHeading: "What we run for your team",
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
      "We text the customers overdue for service and book them back in, while an AI voice answers the calls your team can't during busy bay hours — every booking logged into your shop software.",
    heroPoints: [
      "Overdue customers texted & rebooked",
      "Calls answered during busy bay hours",
      "Bookings logged into your shop software",
    ],
    problemHeading: "Sound familiar?",
    problems: [
      "Roughly 6 in 10 customers switch shops within 18 months.",
      "Service reminders never go out consistently.",
      "The phones go unanswered while your team is in the bays.",
      "New callers reach a voicemail and dial the next shop.",
    ],
    results: [
      { value: "~60%", label: "Of customers switch shops in 18 months — keep yours" },
      { value: "100%", label: "Of calls answered during bay hours" },
      { value: "24/7", label: "Booking & service reminders" },
      { value: "< 60s", label: "To answer every inbound call" },
    ],
    featuresHeading: "What we run for your shop",
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
      "Book a 30-minute call. We'll show you how many of your past customers are overdue for service — and how we'd rebook them automatically.",
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
    problemHeading: "Sound familiar?",
    problems: [
      "After-hours intake calls go to voicemail and never call back.",
      "High-intent inquiries arrive faster than staff can handle.",
      "Manual intake is inconsistent and hard to audit.",
      "The most motivated callers reach you at 9pm — and hang up.",
    ],
    results: [
      { value: "7–11pm", label: "When high-intent intake calls cluster" },
      { value: "100%", label: "Of after-hours calls captured & qualified" },
      { value: "24/7", label: "Compliance-first intake coverage" },
      { value: "0", label: "Inquiries lost to voicemail" },
    ],
    featuresHeading: "What we run for your firm",
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
