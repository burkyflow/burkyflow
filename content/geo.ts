// ────────────────────────────────────────────────────────────────────────
// Geo + niche landing data.
//
// Canonical route: /ai-automation/[niche]/[city]   (organic, indexed)
// Paid alias:      /lp/[city]/[niche]               (noindex, same template)
//
// To add a new landing page:
//   1. Add the city to `cities` if it is new.
//   2. Add the niche to `niches` if it is new.
//   3. (Optional) Add a `combos` entry keyed `${niche}/${city}` to override
//      copy. If you skip it, the template renders from niche + city defaults.
//
// Copy is seeded from the BurkyFlow cold-email angles (A/B/C/D) so the voice
// matches outbound. Keep it factual: we serve these metros REMOTELY. No
// physical-presence claims. Schema uses Service.areaServed, not LocalBusiness.
// ────────────────────────────────────────────────────────────────────────

export type City = { slug: string; name: string; state: string; stateAbbr: string };
export type Niche = {
  slug: string;
  name: string; // "HVAC", "Plumbing"
  plural: string; // "HVAC businesses", "plumbing companies"
  // Default pains + offers if a combo override is not provided.
  pains: string[];
};

export type Offer = { title: string; detail: string; proof: string[] };

export type GeoFaq = { q: string; a: string };

export const cities: City[] = [
  { slug: "houston", name: "Houston", state: "Texas", stateAbbr: "TX" },
  { slug: "san-antonio", name: "San Antonio", state: "Texas", stateAbbr: "TX" },
  { slug: "charleston", name: "Charleston", state: "South Carolina", stateAbbr: "SC" },
  { slug: "greenville", name: "Greenville", state: "South Carolina", stateAbbr: "SC" },
];

export const niches: Niche[] = [
  {
    slug: "hvac",
    name: "HVAC",
    plural: "HVAC businesses",
    pains: [
      "The average shop has roughly 1,800 past customers in its CRM, and most are never contacted again.",
      "After-hours and overflow calls go to whoever answers second.",
      "Seasonal demand spikes faster than the front desk can book it.",
    ],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    plural: "plumbing companies",
    pains: [
      "Eight to fourteen after-hours calls a week go unanswered, and each is a four-figure emergency.",
      "Past customers are never texted again after the first job.",
      "Burst-pipe callers give the work to whoever picks up first.",
    ],
  },
  {
    slug: "roofing",
    name: "Roofing",
    plural: "roofing companies",
    pains: [
      "Inspection requests after a storm go unanswered during the exact window that wins the season.",
      "Ad spend brings leads that the booking step then leaks.",
      "Follow-up on quoted jobs is inconsistent.",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    plural: "real estate teams",
    pains: [
      "Hundreds of buyer leads go cold because follow-up was too slow.",
      "Agents spend time on unqualified leads while ready buyers drift away.",
      "Expired and transplant-buyer lists never get worked.",
    ],
  },
  {
    slug: "dental",
    name: "Dental",
    plural: "dental practices",
    pains: [
      "The hygiene recall list sits untouched while you buy new-patient clicks.",
      "Consult requests die in a contact form.",
      "Insurance questions slow every booking.",
    ],
  },
];

// Shared default offers (the three core geo offers from the brief).
export const defaultOffers: Offer[] = [
  {
    title: "Reactivate your dormant CRM",
    detail:
      "We text the past customers and dead leads already in your database, in your tone, and book the ones who are ready.",
    proof: [
      "No new ad spend required",
      "You see the reachable-contact count first",
      "Bookings flow into your existing system",
    ],
  },
  {
    title: "AI voice booking funnel",
    detail:
      "A human-sounding AI voice answers, qualifies the caller, and locks the appointment in under a minute, around the clock.",
    proof: [
      "Answers on the first ring, 24/7",
      "Qualifies before it books",
      "Hands off to a human when needed",
    ],
  },
  {
    title: "After-hours missed-call capture",
    detail:
      "Every call you cannot pick up is captured, logged, and turned into a booked job instead of a voicemail.",
    proof: [
      "Nights, weekends, and overflow covered",
      "Every call logged to a dashboard",
      "No more jobs lost to voicemail",
    ],
  },
];

// Optional per-combo overrides keyed `${nicheSlug}/${citySlug}`.
// Only override what you want to differ from the niche/city defaults.
export const combos: Record<
  string,
  { pains?: string[]; offers?: Offer[]; faqs?: GeoFaq[] }
> = {
  "hvac/houston": {
    // Reference implementation. Locally phrased FAQs for SEO.
  },
};

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
export function getNiche(slug: string) {
  return niches.find((n) => n.slug === slug);
}

// Known organic geo pages for a given niche, powers industry -> geo silo links.
export function geoCombosForNiche(nicheSlug: string) {
  return knownCombos
    .filter((c) => c.niche === nicheSlug)
    .map((c) => ({ niche: getNiche(c.niche)!, city: getCity(c.city)! }))
    .filter((c) => c.niche && c.city);
}

// All known geo pages for an industry's niches, used on industry detail pages.
export function geoCombosForNiches(nicheSlugs: string[]) {
  return nicheSlugs.flatMap((n) => geoCombosForNiche(n));
}

// All known organic combinations to pre-render. Extend freely.
export const knownCombos: { niche: string; city: string }[] = [
  { niche: "hvac", city: "houston" },
  { niche: "plumbing", city: "san-antonio" },
  { niche: "real-estate", city: "charleston" },
  { niche: "dental", city: "greenville" },
  { niche: "roofing", city: "houston" },
];

// Build the resolved content for a niche x city pair.
export function resolveGeo(nicheSlug: string, citySlug: string) {
  const niche = getNiche(nicheSlug);
  const city = getCity(citySlug);
  if (!niche || !city) return null;

  const override = combos[`${nicheSlug}/${citySlug}`] ?? {};
  const pains = override.pains ?? niche.pains;
  const offers = override.offers ?? defaultOffers;
  const faqs = override.faqs ?? buildDefaultFaqs(niche, city);

  return { niche, city, pains, offers, faqs };
}

// Locally phrased FAQ generator (8 questions). Used unless a combo overrides.
function buildDefaultFaqs(niche: Niche, city: City): GeoFaq[] {
  const N = niche.name;
  const C = city.name;
  return [
    {
      q: `Do you work with ${N} businesses in ${C}?`,
      a: `Yes. We serve ${N} businesses across ${C} and the surrounding ${city.state} area remotely, so there is nothing to install on site and you are live quickly.`,
    },
    {
      q: `How does the AI receptionist help a ${C} ${N} business?`,
      a: `It answers every call, including after-hours and overflow, qualifies the caller, and books the job into your calendar, so ${C} customers never reach a voicemail.`,
    },
    {
      q: `Can you reactivate our old customer list?`,
      a: `Yes. We text the past customers and dead leads already in your CRM, in your tone, and book the ones who are ready. You see the reachable-contact count before anything sends.`,
    },
    {
      q: `Will the AI voice sound robotic to my customers?`,
      a: `No. It is configured to match how your ${C} business talks, handles real back-and-forth, and hands off to a human when a call needs one.`,
    },
    {
      q: `How fast can we go live in ${C}?`,
      a: `A focused first system, such as after-hours call capture or a reactivation campaign, can typically be live within a couple of weeks.`,
    },
    {
      q: `Do you integrate with the software we already use?`,
      a: `We connect to the common ${N} and service-business tools and schedulers. Tell us what you run and we confirm fit before any build.`,
    },
    {
      q: `Are you a local ${C} company?`,
      a: `We are a remote AI automation agency serving ${C} ${niche.plural}. You get a dedicated team and a single point of contact without the overhead of a local office.`,
    },
    {
      q: `What does it cost?`,
      a: `Pricing depends on the system and the outcome you want. We scope it with you on a short call so the terms match the result, not a generic package.`,
    },
  ];
}
