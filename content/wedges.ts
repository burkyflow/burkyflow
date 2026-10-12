// The four headline offers most clients start with.
// These are positioning over plumbing: each maps onto the underlying services
// in content/services.ts and content/catalogue.ts.

export type Wedge = {
  slug: string;
  letter: "A" | "B" | "C" | "D";
  name: string;
  shortName: string;
  // Card image for the "Top offers" grid. Paste a URL (or /images/... path) here.
  // Optional offer artwork.
  image?: string;
  tagline: string;
  pitch: string;
  pitchLong: string[];
  riskReversal: string;
  bestFor: string[];
  underlyingServices: string[]; // service slugs powering this wedge
  proofPoints: string[];
  faqs: { q: string; a: string }[];
};

export const wedges: Wedge[] = [
  {
    slug: "database-reactivation",
    letter: "A",
    name: "Unlock the list you already paid for",
    shortName: "Database Reactivation",
    image: "/images/card1.webp",
    tagline: "Text past customers and old leads, and let AI voice book the ones who reply.",
    pitch:
      "Pay per booked job. Zero cost until the calendar starts filling. We work the list you already paid to acquire.",
    pitchLong: [
      "Every service business is sitting on a list of past customers and dead leads they already paid to acquire, and almost none of them are being contacted. Meanwhile the team keeps buying new clicks at a premium.",
      "We text the list in your tone, the AI voice handles replies and qualifies intent, and ready customers land on your calendar. You see the reachable-contact count before anything sends, and you pay only for booked jobs.",
    ],
    riskReversal: "Pay per booked job, zero cost until the calendar fills.",
    bestFor: [
      "HVAC and home services with maintenance lists",
      "Dental recall and medspa rebooking",
      "Real-estate teams with dead buyer leads",
      "Lawn and pest service renewals",
      "Auto repair customer recovery",
    ],
    underlyingServices: ["database-reactivation", "ai-voice-receptionist", "crm-lead-systems"],
    proofPoints: [
      "Contacts you already paid to acquire, no new media spend",
      "Reachable-contact count surfaced before launch",
      "Compliant SMS cadence with clean opt-out and quiet hours",
      "Replies handled by AI voice, bookings land on the calendar without staff intervention",
    ],
    faqs: [
      {
        q: "How is this priced?",
        a: "Pay per booked job. We agree on the booking definition up front, you see the reachable count, and the campaign runs on a performance basis with no upside cap.",
      },
      {
        q: "Will it hurt my brand?",
        a: "No. We message in your tone with appropriate consent handling, sensible cadence, and clear opt-out. Reactivation strengthens your reputation rather than risking it.",
      },
      {
        q: "How fast do bookings start?",
        a: "Replies and bookings typically begin within days, you are contacting people who already know you.",
      },
    ],
  },
  {
    slug: "paid-acquisition-no-leak",
    letter: "B",
    name: "Paid ads that don't leak at the booking step",
    shortName: "Ads + AI Voice Pilot",
    image: "/images/card2.webp",
    tagline: "Facebook and Instagram ads, an AI voice that answers every lead, and a booking page, run by one team.",
    pitch:
      "Paid leads go cold fast when nobody answers or booking is clumsy. We close that leak with an AI voice and a booking page built behind the ad, starting with a 14-day pilot against a target you set.",
    pitchLong: [
      "Ads agencies fill the top of the funnel and then walk away. The leak is below the ad, leads come in, the front desk can't answer fast enough, the booking flow is broken, and much of that paid traffic is lost before it becomes a consult.",
      "We run the ads, build the funnel, and put the AI voice receptionist on the inbound number so every lead is answered, qualified, and booked. It starts as a 14-day pilot with a defined target, consults, inspections, or installs, so you can measure the difference before committing.",
    ],
    riskReversal: "14-day pilot with a defined target. If the numbers don't land, no commitment to continue.",
    bestFor: [
      "Roofing storm pushes",
      "Medspa promotional windows",
      "HVAC install surges",
      "Dental new-patient campaigns",
    ],
    underlyingServices: ["ai-voice-receptionist", "crm-lead-systems"],
    proofPoints: [
      "Ads, voice, and funnel run by one team, no finger-pointing",
      "Every paid lead answered within seconds, 24/7",
      "Booked-consult cost reported daily, not weekly",
      "Pilot scoped to a target metric the client sets",
    ],
    faqs: [
      {
        q: "Who runs the ads?",
        a: "We run the ads, build the landing page, and connect the AI voice and booking system behind it. One team is accountable for the result.",
      },
      {
        q: "What's the pilot commitment?",
        a: "14 days against a target you define, consults, inspections, or installs. If the numbers don't land, no obligation to continue.",
      },
      {
        q: "How is ad spend handled?",
        a: "Ad spend is invoiced separately and capped to your stated budget. Our fee covers the build, voice, and funnel.",
      },
    ],
  },
  {
    slug: "outbound-engine",
    letter: "C",
    name: "Outbound that feels personal, not automated",
    shortName: "Done-for-You B2B Outbound",
    image: "/images/card3.webp",
    tagline: "We build a researched prospect list, reach out by email and text, qualify replies with AI voice, and book the meeting.",
    pitch:
      "One done-for-you system instead of six separate sales tools. A setup fee plus a monthly retainer, with qualified meetings on your calendar.",
    pitchLong: [
      "Most B2B teams stitch together separate tools for lists, data, email sending, automation, and scheduling, and the result is fragile and generic. Reply rates drop, email deliverability suffers, and sales reps spend their time on prospects who were never a fit.",
      "We replace that with one system we run for you: researched prospect lists, personalized email and text follow-up, an AI voice call that checks interest, and meetings booked straight onto your calendar. Our team runs it end to end.",
    ],
    riskReversal: "Setup fee plus monthly retainer. Reply and meeting targets defined up front and reported weekly.",
    bestFor: [
      "Commercial HVAC and facilities services",
      "Staffing and recruiting",
      "B2B professional services firms",
      "Real-estate teams chasing transplant buyers or expireds",
    ],
    underlyingServices: ["crm-lead-systems", "workflow-automation"],
    proofPoints: [
      "Personalized to each company, not just a first-name swap",
      "Follow-up across email, text, and LinkedIn",
      "AI voice qualifies before the meeting lands on your calendar",
      "Weekly reporting against a stated meeting target",
    ],
    faqs: [
      {
        q: "What reply rates should I expect?",
        a: "It depends on your market, offer, and list. We agree reply and meeting targets during setup and report against them every week.",
      },
      {
        q: "Do you handle reply management?",
        a: "Yes. Reply handling sits inside our team, meetings land on your calendar already qualified.",
      },
      {
        q: "Will outbound time itself to my prospects?",
        a: "Yes. Sends time to your prospects' business hours regardless of where the delivery team sits.",
      },
    ],
  },
  {
    slug: "always-on-voice",
    letter: "D",
    name: "Don't lose the calls you already paid Google for",
    shortName: "24/7 AI Voice Coverage",
    image: "/images/card4.webp",
    tagline: "An AI receptionist on your main line that answers missed and after-hours calls from Google ads, search, and referrals.",
    pitch:
      "You already paid for the click that drove the call. Missing the call is the most expensive line item in the business. We start by auditing your missed calls, then move to ongoing coverage.",
    pitchLong: [
      "Every missed call to a business that paid for it, through Local Services Ads, Google Ads, search, or referrals, is the most expensive line item in the business. The acquisition cost is paid; the conversion is lost to whoever answers second.",
      "We put an AI voice on the inbound line, overflow, after-hours, or full coverage, and you stop paying twice. Start with an audit of your missed-call log, then move to ongoing coverage with bookings landing in your CRM.",
    ],
    riskReversal: "Audit first: we review your missed-call log and show the lost-revenue number before you commit.",
    bestFor: [
      "After-hours plumbing, electrical, HVAC",
      "Law firm intake",
      "Vacation rental property managers",
      "Any business with paid traffic and a busy front desk",
    ],
    underlyingServices: ["ai-voice-receptionist", "crm-lead-systems", "workflow-automation"],
    proofPoints: [
      "Sub-60-second response, 24/7",
      "Average answer time cut from 45 seconds to 2 at Troy Plumbing",
      "Call capture raised from 55% to 100% at EZ Cribs",
      "Bookings land in your CRM with full call context",
    ],
    faqs: [
      {
        q: "What happens in the missed-call audit?",
        a: "We pull your missed-call log, quantify the lost-revenue number, and only move forward if the math justifies it. No commitment to begin.",
      },
      {
        q: "Does it replace the front desk?",
        a: "It can, or it can sit behind the front desk as overflow and after-hours coverage. Most clients start with overflow and expand.",
      },
      {
        q: "How fast can it go live?",
        a: "A basic setup goes live in 5–7 days. Full intake with CRM sync takes 10–14 days.",
      },
    ],
  },
];

export function getWedge(slug: string) {
  return wedges.find((w) => w.slug === slug);
}
