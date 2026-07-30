// The four headline wedge offers, the sharpest pitches we lead with.
// These are positioning over plumbing: each maps onto the underlying services
// in content/services.ts and content/catalogue.ts.

export type Wedge = {
  slug: string;
  letter: "A" | "B" | "C" | "D";
  name: string;
  shortName: string;
  // Card image for the "Top offers" grid. Paste a URL (or /images/... path) here.
  // Leave undefined to show the placeholder.
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
    image: "/images/card1.png", 
    tagline: "Wake up dormant CRM lists with SMS + AI voice booking.",
    pitch:
      "Pay per booked job. Zero cost until the calendar starts filling. We work the list you already paid to acquire.",
    pitchLong: [
      "Every service business is sitting on a list of past customers and dead leads they already paid to acquire, and almost none of them are being contacted. Meanwhile the team keeps buying new clicks at a premium.",
      "We text the list in your tone, the AI voice handles replies and qualifies intent, and ready customers land on your calendar. You see the reachable-contact count before anything sends, and the engagement is structured as risk-reversed: you pay per booked job.",
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
    name: "Paid acquisition that doesn't leak at the booking step",
    shortName: "Ads + AI Voice Pilot",
    image: "/images/card2.png", 
    tagline: "Meta / IG ads + AI voice + GHL booking funnel, wired together.",
    pitch:
      "Most paid lead campaigns lose 60%+ of leads at the booking step. We close that leak with AI voice and a GHL funnel built behind the ad, sold as a 14-day pilot against a defined target.",
    pitchLong: [
      "Ads agencies fill the top of the funnel and then walk away. The leak is below the ad, leads come in, the front desk can't answer fast enough, the booking flow is broken, and 60%+ of that paid traffic dies before it becomes a consult.",
      "We run the ads, build the funnel, and put the AI voice receptionist on the inbound number so every lead is answered, qualified, and booked. Sold as a 14-day pilot with a defined target, consults, inspections, or installs, so you can measure the difference before committing.",
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
        a: "We run the ads, build the landing/funnel, and wire the AI voice + GHL booking behind it. One team, one accountability line.",
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
    name: "Outbound that doesn't smell like outbound",
    shortName: "B2B Outbound Engine",
    image: "/images/card3.png",
    tagline: "Apollo + Clay list build → multi-touch SMS + email → AI voice qualifier → booked meeting.",
    pitch:
      "Replaces the fragile 6-tool DIY outbound stack with a single productised engine. Setup fee plus monthly retainer, booked meetings on the calendar.",
    pitchLong: [
      "Most B2B teams cobble together six tools, Apollo, Clay, Instantly, Smartlead, Zapier, Calendly, and the result is fragile, generic, and obvious. Reply rates drop, the sender domain burns, and the SDR layer becomes a cost centre.",
      "We replace that stack with one productised engine: enriched lists, multi-touch SMS and email, an AI voice qualifier, and direct hand-off to your calendar. Meetings land qualified, and the team behind it is ours.",
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
      "Personalised per-account using Clay enrichment, not just first-name swaps",
      "Multi-touch sequencing across SMS + email + LinkedIn",
      "AI voice qualifies before the meeting lands on your calendar",
      "Weekly reporting against a stated meeting target",
    ],
    faqs: [
      {
        q: "What reply rates should I expect?",
        a: "4–8% cold replies are typical, with 10–30 booked meetings per month at the multi-channel tier.",
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
    image: "/images/card4.png",
    tagline: "AI voice on the inbound line, catches missed and after-hours calls from LSAs, SEO, and referrals.",
    pitch:
      "You already paid for the click that drove the call. Missing the call is the most expensive line item in the business. Proof-window first, then ongoing coverage.",
    pitchLong: [
      "Every missed call to a business that bought the click, LSAs, Google Ads, organic SEO, referral traffic, is the most expensive line item in the business. The acquisition cost is paid; the conversion is lost to whoever answers second.",
      "We put an AI voice on the inbound line, overflow, after-hours, or full coverage, and you stop paying twice. Start with a proof-window audit of your missed-call log, then move to ongoing coverage with bookings landing in your CRM.",
    ],
    riskReversal: "Proof window first: we audit your missed-call log and show the lost-revenue number before you commit.",
    bestFor: [
      "After-hours plumbing, electrical, HVAC",
      "Law firm intake",
      "Vacation rental property managers",
      "Any business with paid traffic and a busy front desk",
    ],
    underlyingServices: ["ai-voice-receptionist", "crm-lead-systems", "workflow-automation"],
    proofPoints: [
      "Sub-60-second response, 24/7",
      "20–40% booking rate on qualified inbound",
      "30%+ missed-call recovery",
      "Bookings land in your CRM with full call context",
    ],
    faqs: [
      {
        q: "What's a 'proof window'?",
        a: "We pull your missed-call log, quantify the lost-revenue number, and only move forward if the math justifies it. No commitment to begin.",
      },
      {
        q: "Does it replace the front desk?",
        a: "It can, or it can sit behind the front desk as overflow and after-hours coverage. Most clients start with overflow and expand.",
      },
      {
        q: "How fast can it go live?",
        a: "Voice Lite goes live in 5–7 days. Voice Pro (full intake + CRM sync) in 10–14 days.",
      },
    ],
  },
];

export function getWedge(slug: string) {
  return wedges.find((w) => w.slug === slug);
}
