export type ServiceFit = { service: string; why: string }; // service = slug
export type IndustryFAQ = { q: string; a: string };

export type Industry = {
  slug: string;
  name: string;
  h1: string;
  lead: string;
  intro: string[];
  pains: string[];
  offers: string[];
  // The silo core: which AI services we provide for this industry, and why.
  serviceFit: ServiceFit[];
  // Geo niche slugs that map to this industry (links to /ai-automation/[niche]/[city]).
  geoNiches: string[];
  stat?: { value: string; label: string };
  faqs: IndustryFAQ[];
};

export const industries: Industry[] = [
  {
    slug: "home-services",
    name: "Home and Property Services",
    h1: "AI automation for home and property service businesses",
    lead: "HVAC, plumbing, roofing, and lawn care live and die by who answers first and who follows up. We make sure that is always you.",
    intro: [
      "Home service businesses run on the phone. When a homeowner has no heat, a burst pipe, or storm damage, they call until someone picks up, and they hire whoever answers first. Every unanswered call is a job that can go to a competitor.",
      "We close that gap. An AI voice receptionist answers every call around the clock, reactivation campaigns bring back past maintenance customers, and automated workflows keep dispatch, reminders, and follow-up running without adding office staff.",
    ],
    pains: [
      "Emergency calls missed after hours go straight to a competitor.",
      "Past customers are never texted again until they have already rebooked elsewhere.",
      "The front desk cannot answer, dispatch, and follow up at the same time.",
    ],
    offers: [
      "24/7 AI voice on the after-hours and overflow line.",
      "SMS reactivation of past maintenance and service customers.",
      "Booking that drops straight onto the dispatch board.",
    ],
    serviceFit: [
      {
        service: "ai-voice-receptionist",
        why: "Captures emergency and after-hours calls that would otherwise go to the next contractor on the list.",
      },
      {
        service: "database-reactivation",
        why: "Brings back the maintenance and service customers already in your CRM before they rebook elsewhere.",
      },
      {
        service: "crm-lead-systems",
        why: "Gives dispatch one pipeline so no quoted job or callback is forgotten during a busy week.",
      },
      {
        service: "workflow-automation",
        why: "Automates confirmations, reminders, and the handoff from booking to the dispatch board.",
      },
    ],
    geoNiches: ["hvac", "plumbing", "roofing"],
    stat: { value: "2 sec", label: "average answer time at Troy Plumbing, down from 45 seconds" },
    faqs: [
      {
        q: "How much revenue do home service businesses lose to missed calls?",
        a: "It depends on your call volume and job value, so we work it out from your own numbers: qualified missed calls, times the share you could book, times your average job value. For example, 40 missed calls, a 25% booking rate, and a $300 average job add up to $3,000 in potential revenue. We run this calculation with your call logs on the first call.",
      },
      {
        q: "Can the AI handle emergency calls correctly?",
        a: "Yes. It detects urgency cues such as no heat, burst pipe, or lockout and routes those calls to your on-call person immediately rather than trying to handle them.",
      },
      {
        q: "Will bookings reach my dispatch board?",
        a: "Yes. Qualified jobs are written into your scheduler or dispatch board with the call summary attached, so your team has full context.",
      },
      {
        q: "Do you work with seasonal demand spikes?",
        a: "That is exactly when this matters most. The AI voice scales instantly when call volume spikes after a storm or during a heat wave, with no extra staffing.",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare and Practices",
    h1: "AI automation for dental, medspa, and healthcare practices",
    lead: "Recall lists and consult requests are revenue you already earned. We re-engage patients and book the chair without adding front-desk load.",
    intro: [
      "Practices spend heavily to acquire new patients while the recall list, full of patients who already trust them, sits untouched. At the same time, high-intent consult requests die in a contact form that someone means to call back tomorrow.",
      "We help practices recover both. Reactivation campaigns re-engage the hygiene and recall list with insurance handled on the call, and an AI voice books consults the moment a lead comes in, writing everything into your practice software.",
    ],
    pains: [
      "Hygiene and recall lists sit untouched while you buy new-patient clicks.",
      "Consult requests die in a contact form that someone calls back tomorrow.",
      "Insurance and intake questions slow every booking down.",
    ],
    offers: [
      "Recall and reactivation campaigns with insurance verification on the call.",
      "AI voice that books consults the moment a lead clicks.",
      "Bookings written straight into your practice software.",
    ],
    serviceFit: [
      {
        service: "database-reactivation",
        why: "Re-engages the hygiene and recall list, the patients who already trust you and are overdue.",
      },
      {
        service: "ai-voice-receptionist",
        why: "Books consults the moment a request comes in and handles routine insurance and intake questions.",
      },
      {
        service: "crm-lead-systems",
        why: "Keeps every patient inquiry in one pipeline so consults are followed up consistently.",
      },
      {
        service: "answer-engine-optimization",
        why: "Helps your practice get recommended when patients ask AI search for a local provider.",
      },
    ],
    geoNiches: ["dental"],
    stat: { value: "< 5 sec", label: "to escalate emergency calls at a neurology practice, down from 2–3 minutes" },
    faqs: [
      {
        q: "Is patient communication handled appropriately?",
        a: "Yes. Messaging follows sensible consent and cadence practices with clear opt-out, and intake summaries are handled securely for your team.",
      },
      {
        q: "Can the AI handle insurance questions?",
        a: "It can capture and verify insurance details on the call as part of booking, so patients are qualified before they reach the chair.",
      },
      {
        q: "Does it write into our practice software?",
        a: "Yes. Bookings and patient details are written into your existing practice management system with the call context attached.",
      },
      {
        q: "Which practices is this for?",
        a: "Dental practices, medspas, and similar appointment-driven healthcare practices that rely on recall and consult bookings.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate Teams",
    h1: "AI automation for real estate teams",
    lead: "Most teams sit on hundreds of cold buyer leads. We re-engage them, qualify the warm ones, and put the appointment on your team calendar.",
    intro: [
      "The average real estate team has hundreds of buyer and seller leads that went cold simply because follow-up was too slow. Many of those people still buy or sell, usually with whoever followed up.",
      "We re-engage that dead pipeline by SMS, qualify responders by timeline, motivation, and financing with an AI voice, and book the warm ones straight onto your team calendar, so agents spend time with people who are ready.",
    ],
    pains: [
      "Buyer leads go cold because no one followed up fast enough.",
      "Agents chase unqualified leads while ready buyers slip away.",
      "Expired and transplant-buyer lists never get worked.",
    ],
    offers: [
      "SMS re-engagement of dormant buyer and seller leads.",
      "AI voice qualification on timeline, motivation, and financing.",
      "Qualified appointments booked into the team calendar.",
    ],
    serviceFit: [
      {
        service: "database-reactivation",
        why: "Wakes up the dead buyer and seller leads sitting in your CRM from the last year and beyond.",
      },
      {
        service: "ai-voice-receptionist",
        why: "Qualifies responders on timeline, motivation, and financing and books the warm ones automatically.",
      },
      {
        service: "crm-lead-systems",
        why: "Routes new leads to the right agent with an instant first touch so none go cold again.",
      },
      {
        service: "answer-engine-optimization",
        why: "Positions your team to be recommended when buyers and sellers ask AI search for an agent.",
      },
    ],
    geoNiches: ["real-estate"],
    stat: { value: "7×", label: "more likely to qualify a lead contacted within an hour (Harvard Business Review)" },
    faqs: [
      {
        q: "Can you work our old lead database?",
        a: "Yes. We re-engage dormant buyer and seller leads by SMS, qualify the responders with AI voice, and book appointments onto your team calendar.",
      },
      {
        q: "How are leads qualified?",
        a: "The AI voice qualifies on timeline, motivation, and financing status so agents only spend time with leads that are genuinely ready.",
      },
      {
        q: "Does it work with our CRM?",
        a: "We integrate with the common real estate CRMs so appointments and lead activity flow into the system your team already uses.",
      },
      {
        q: "Can it handle expired and transplant-buyer lists?",
        a: "Yes. Those segments are ideal for reactivation, and we can build and prioritize them as part of the campaign.",
      },
    ],
  },
  {
    slug: "automotive",
    name: "Automotive and Repair",
    h1: "AI automation for auto repair and service shops",
    lead: "Most customers drift to another shop within eighteen months. We text the ones overdue for service and book them back in before they do.",
    intro: [
      "Roughly six in ten past customers are at a different shop within eighteen months, usually because nobody reminded them it was time to come back. The phones also go unanswered during busy bay hours, sending new callers elsewhere.",
      "We text overdue customers to book them back in, and an AI voice answers the calls your team cannot, scheduling the slot and logging it into your shop software.",
    ],
    pains: [
      "Past customers quietly switch to a competitor between visits.",
      "Service reminders never go out consistently.",
      "Phones go unanswered during busy bay hours.",
    ],
    offers: [
      "Overdue-customer reactivation by SMS.",
      "AI voice that books the service slot.",
      "Bookings logged into your shop software.",
    ],
    serviceFit: [
      {
        service: "database-reactivation",
        why: "Texts customers overdue for service and books them back before they switch shops.",
      },
      {
        service: "ai-voice-receptionist",
        why: "Answers calls during busy bay hours so new and returning customers always reach someone.",
      },
      {
        service: "workflow-automation",
        why: "Automates service reminders and the booking-to-shop-software handoff so nothing is manual.",
      },
      {
        service: "crm-lead-systems",
        why: "Keeps customer and vehicle history in one place to drive timely, relevant outreach.",
      },
    ],
    geoNiches: [],
    stat: { value: "24/7", label: "booking by phone and text, including after the shop closes" },
    faqs: [
      {
        q: "How do you know who is overdue?",
        a: "We use service history and recommended intervals in your shop software to identify customers due or overdue, then text them to rebook.",
      },
      {
        q: "Will calls be answered during busy hours?",
        a: "Yes. The AI voice picks up when your team is in the bays, so callers never reach a busy signal or voicemail.",
      },
      {
        q: "Does it log into our shop software?",
        a: "Bookings and customer details are written into your existing shop management system with the call context attached.",
      },
    ],
  },
  {
    slug: "professional-firms",
    name: "Professional Firms",
    h1: "AI automation for law firms and professional services",
    lead: "Intake calls cluster at night, exactly when the office line rolls to voicemail. We capture them, qualify them, and protect every inquiry.",
    intro: [
      "For many professional firms, the highest-intent inquiries arrive in the evening, the moment a prospect is motivated enough to call but the office line has already rolled to voicemail. Those callers rarely call back the next morning.",
      "We put a compliance-first AI voice on the after-hours line to capture matter type and urgency, deliver a secure summary to the partner, and hold a calendar slot for next-morning follow-up, so no inquiry is lost.",
    ],
    pains: [
      "After-hours intake calls go to voicemail and never call back.",
      "High-intent inquiries arrive faster than staff can handle.",
      "Manual intake is inconsistent and hard to audit.",
    ],
    offers: [
      "Compliance-first AI voice on the after-hours line.",
      "Matter-type and urgency capture with a secure summary to the partner.",
      "Calendar slots held for next-morning follow-up.",
    ],
    serviceFit: [
      {
        service: "ai-voice-receptionist",
        why: "Captures and qualifies after-hours intake calls and holds a slot for next-morning follow-up.",
      },
      {
        service: "crm-lead-systems",
        why: "Keeps every inquiry in one auditable pipeline so high-intent matters are followed up consistently.",
      },
      {
        service: "workflow-automation",
        why: "Automates intake summaries, conflict-check prompts, and handoffs to the right team member.",
      },
      {
        service: "answer-engine-optimization",
        why: "Helps the firm get recommended when prospects ask AI search for representation.",
      },
    ],
    geoNiches: [],
    stat: { value: "Instant", label: "proposal turnaround at Gordon Construction Consultancy, down from 2–3 days" },
    faqs: [
      {
        q: "Is this compliant for a law firm?",
        a: "It is built compliance-first, capturing matter type, urgency, and a basic conflict check, with a secure summary delivered to the responsible attorney.",
      },
      {
        q: "What happens to after-hours intake calls?",
        a: "They are captured and qualified by the AI voice, summarized securely for the partner, and a calendar slot is held for next-morning follow-up.",
      },
      {
        q: "Can intake be audited?",
        a: "Yes. Every inquiry is logged consistently in one pipeline, which makes intake far easier to review than manual notes.",
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

// Reverse lookup: which industry a geo niche belongs to (for geo -> industry silo).
export function industryForNiche(nicheSlug: string) {
  return industries.find((i) => i.geoNiches.includes(nicheSlug));
}
