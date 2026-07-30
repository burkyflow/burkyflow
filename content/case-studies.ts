// Case studies from live client deployments. Sourced from case-study.txt.

export type Stat = { value: string; label: string };
export type ResultRow = { metric: string; before: string; after: string };
export type SolutionBlock = { title: string; detail: string };

export type CaseStudy = {
  slug: string;
  client: string;
  vertical: string;
  location: string;
  tags: string[]; // e.g. ["VAPI", "GoHighLevel", "Outbound AI"]
  headline: string;
  summary: string;
  heroStats: Stat[];
  challenge: string[];
  solution: SolutionBlock[];
  results: string[];
  resultsTable?: ResultRow[];
  quote?: { text: string; attribution: string };
  status?: string; // e.g. "Live April 2026"
  // Silo: which services this case study proves out, and which industry it sits in.
  relatedServices: string[]; // service slugs from content/services.ts
  relatedIndustries: string[]; // industry slugs from content/industries.ts
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "go-waka-car-finance",
    client: "Go Waka Car Finance",
    vertical: "Auto Finance & Lending",
    location: "Auckland, New Zealand",
    tags: ["GoHighLevel", "12 Workflows", "Dual Pipeline", "Live April 2026"],
    headline: "Full CRM and automation system for an 8-lender consumer finance brand",
    summary:
      "A complete GoHighLevel ecosystem, 12 published workflows, dual pipelines, native Facebook Lead Ads, multi-lender routing, automated document collection, and a live operations dashboard. 100% native GHL, no Zapier, no ManyChat, no recurring tool costs.",
    heroStats: [
      { value: "1,600+", label: "Contacts unified into one source of truth" },
      { value: "3,520+", label: "Automated workflow executions in the first month" },
      { value: "214+", label: "Applications tracked across 8 lenders" },
    ],
    challenge: [
      "Leads from Facebook and the website arrived in separate places. Reps manually checked Business Manager and inboxes. Leads slipped through with no follow-up.",
      "No immediate SMS or email response to new leads. Average first-contact time was measured in hours, sometimes days, and in consumer finance that directly kills conversion.",
      "Documents were chased manually via WhatsApp with no tracking of what was sent, what was missing, or how long a file had been waiting.",
      "Submissions to up to 8 different lenders were tracked from memory and spreadsheets, with no pipeline, no task system, and no escalation logic.",
    ],
    solution: [
      {
        title: "Speed-to-Lead Engine",
        detail:
          "First-contact time slashed from days to seconds. Every Facebook lead now receives an automated SMS and email instantly, with a call task assigned within the hour.",
      },
      {
        title: "Automated Document Harvesting",
        detail:
          "Self-correcting follow-up loop that nudges clients for documents at set intervals and moves the lead the moment they confirm via the form, no staff input required.",
      },
      {
        title: "Intelligent Lender Routing",
        detail:
          "Tag-based logic system managing sequential submissions across Finance Now, Max Money, CTS Finance, Heart Land, Link Finance, Better Finance, Avanti, and HTF, with automatic pivots and 3-day / 20-day escalation alerts.",
      },
      {
        title: "Operational Command Center",
        detail:
          "Live 8-widget GHL dashboard giving management 100% visibility into lead sources, pipeline stage distribution, team task load, and lender performance.",
      },
    ],
    results: [
      "100% lead capture, every inbound from every source unified into one pipeline",
      "325 real-time admin notifications sent, zero leakage",
      "12 published workflows, all live and modular",
      "98.9% email delivery, 22.39% open rate on broadcast campaigns",
    ],
    resultsTable: [
      { metric: "First response time", before: "Hours / days", after: "Seconds" },
      { metric: "Document follow-up", before: "Manual WhatsApp + calls", after: "Fully automated" },
      { metric: "Lender tracking", before: "Memory + spreadsheet", after: "Live dual pipeline" },
      { metric: "Escalation alerts", before: "Never", after: "3-day + 20-day automated" },
      { metric: "Admin lead visibility", before: "None", after: "325 real-time notifications" },
      { metric: "Reporting", before: "Manual", after: "Live 8-widget dashboard" },
    ],
    quote: {
      text: "BurkyFlow didn't just organize our leads; they gave us an automated infrastructure that scales with us. We went from guessing our numbers to seeing them live, every single day.",
      attribution: "Go Waka Car Finance",
    },
    status: "Live & operational, April 2026",
    relatedServices: ["crm-lead-systems", "workflow-automation"],
    relatedIndustries: ["professional-firms"],
  },
  {
    slug: "gordon-construction",
    client: "Gordon Construction Consultancy",
    vertical: "SB-326 / SB-721 Compliance",
    location: "California, USA",
    tags: ["Apollo", "Clay", "GoHighLevel", "AI Proposal Agent"],
    headline: "A high-velocity lead engine for California balcony compliance",
    summary:
      "Gordon was sitting on a goldmine, thousands of California properties facing a hard 2026 legal deadline, but spending 10 hours a day on admin and proposal writing. We built a triple-threat marketing and operations engine that handles everything from cold touch to final proposal.",
    heroStats: [
      { value: "Instant", label: "Proposal turnaround (was 2–3 days)" },
      { value: "Statewide", label: "Reach (was local consultant)" },
      { value: "Surgical", label: "Outreach personalised per property" },
    ],
    challenge: [
      "Reaching the correct decision-maker, property manager or HOA board president, across thousands of California buildings was a manual nightmare.",
      "Inspection requests arrived as messy emails and phone calls with missing addresses and incomplete reports.",
      "After every inspection Gordon manually calculated costs and drafted repair bids, taking hours and delaying high-ticket repair contracts.",
    ],
    solution: [
      {
        title: "Apollo + Clay Outreach Engine",
        detail:
          "Apollo filters California real estate firms and HOA managers; Clay enriches every record with specific property details so each email reads as researched, not blasted.",
      },
      {
        title: "Dual-Funnel Intake (GoHighLevel)",
        detail:
          "Two high-converting funnels, one for new inspection leads, one for urgent post-inspection repairs, capturing structured data and uploaded inspection reports directly.",
      },
      {
        title: "AI Proposal Agent",
        detail:
          "Custom AI agent that ingests inspection reports, extracts deficiencies, and generates a structured, professional proposal, then syncs the deal value back into the GHL pipeline.",
      },
    ],
    results: [
      "Proposals delivered in minutes instead of days",
      "Outreach personalised per account at scale",
      "Statewide market position, perfectly placed for the January 2026 compliance surge",
    ],
    resultsTable: [
      { metric: "Lead discovery", before: "Manual / random", after: "Automated (Apollo + Clay)" },
      { metric: "Email relevance", before: "Generic / ignored", after: "Highly personalised via AI" },
      { metric: "Intake process", before: "Phone calls + messy emails", after: "Structured GHL funnels" },
      { metric: "Proposal turnaround", before: "2–3 days", after: "Instant (AI generated)" },
      { metric: "Market position", before: "Local consultant", after: "Statewide compliance leader" },
    ],
    quote: {
      text: "BurkyFlow didn't just build me a website; they built an automated sales force. I can now reach thousands of property managers and send them a professional bid before my competitors have even returned their first phone call.",
      attribution: "Gordon, Gordon Construction Consultancy",
    },
    relatedServices: ["crm-lead-systems", "workflow-automation", "done-for-you"],
    relatedIndustries: ["professional-firms"],
  },
  {
    slug: "helm-recruiting",
    client: "HELM Recruiting Agency",
    vertical: "Recruiting & Talent Placement",
    location: "United States",
    tags: ["Airtable", "n8n", "Slack", "Meta Lead Ads"],
    headline: "Unified operations system, six spreadsheets retired, one source of truth",
    summary:
      "Josh was running a high-growth recruiting agency held back by tool sprawl across six Google Sheets and a custom Vercel dashboard. We engineered a centralised Airtable + n8n + Slack ecosystem that replaced all of it.",
    heroStats: [
      { value: "14", label: "Tables replacing 6 spreadsheets" },
      { value: "12", label: "Custom interface pages with live KPI views" },
      { value: "100%", label: "Of operations managed in one system" },
    ],
    challenge: [
      "Operations scattered across six Google Sheets and a custom Vercel dashboard, no central source of truth.",
      "Fragmented data, delayed follow-ups, and zero real-time visibility for management.",
      "Recruiters spent more time updating systems than placing talent.",
    ],
    solution: [
      {
        title: "Single Source of Truth",
        detail:
          "Six disconnected spreadsheets replaced with a 14-table Airtable base covering Lead Intake, Role Tracking, Sourcing Metrics, and Referral Points.",
      },
      {
        title: "Slack Remote Control",
        detail:
          "Custom n8n-powered Slack bot with interactive buttons, set review dates, qualify leads, and assign recruiters without ever opening a database.",
      },
      {
        title: "Automated Lead Harvesting",
        detail:
          "Meta Lead Ads and website forms integrated directly into the pipeline with instant Slack notifications.",
      },
      {
        title: "Milestone Watchdog",
        detail:
          "Automated tracking for 2026 milestones with reminders for stale roles and overdue deadlines.",
      },
    ],
    results: [
      "Legacy Vercel dashboard fully sunsetted",
      "100% of agency operations managed through 12 custom interface pages",
      "Recruiting speed up, no-show rates tracked automatically",
      "Total management visibility from first contact to placement",
    ],
    relatedServices: ["workflow-automation", "crm-lead-systems"],
    relatedIndustries: ["professional-firms"],
  },
  {
    slug: "arik-services",
    client: "ARIK Services",
    vertical: "Home Services, 13 niches",
    location: "United States",
    tags: ["VAPI", "Multi-niche", "Spam Blocking", "Custom Database"],
    headline: "One AI receptionist + custom spam shield across 13 service lines",
    summary:
      "The client was drowning in 3,000+ spam calls per day and operating 13 service niches with no unified booking system. We built a single Vapi-powered receptionist plus a proprietary self-growing spam database that blocks calls before they connect.",
    heroStats: [
      { value: "40,000+", label: "Spam numbers in self-growing database" },
      { value: "3,000+", label: "Spam calls eliminated per period" },
      { value: "13", label: "Service niches on one shared infrastructure" },
    ],
    challenge: [
      "Over 3,000 spam calls regularly, robodialers, lead aggregators, telemarketing bots, every one consuming telephony minutes and staff time.",
      "13 service lines (HVAC, water damage, sliding door, roofing, painting, gutter, garage door, fencing, electric gate, carpet cleaning, air duct, chimney sweep, ARIK) with no unified standard for inbound handling.",
      "Complex scheduling rules, Saturday closures, same-day Friday block, blackout dates, 3-hour appointment windows, impossible to enforce consistently across staff.",
    ],
    solution: [
      {
        title: "Global Spam Shield",
        detail:
          "Pre-answer screening against a self-growing database of 40,000+ confirmed spam numbers. Spam calls are blocked at the infrastructure level, zero cost, zero agent time.",
      },
      {
        title: "Unified Multi-Niche AI Receptionist",
        detail:
          "A single Vapi-powered voice agent dispatching across 13 specialised niches with shared infrastructure, spam database, and notification system.",
      },
      {
        title: "Intelligent Guardrails",
        detail:
          "Zero-error scheduling, automatic Saturday closures, same-day Friday block, live blackout date checks. Rules enforced on every call without exception.",
      },
      {
        title: "Omnichannel Notifications",
        detail:
          "3-way sync on every booking, SMS to customer, plus SMS and email to owner and local staff.",
      },
    ],
    results: [
      "3,000+ spam calls eliminated per period, direct telephony cost savings",
      "100% data integrity: hard-coded to never book without a complete data set",
      "All 13 niches running on one shared infrastructure",
      "24/7 professional response across every service line",
    ],
    quote: {
      text: "BurkyFlow didn't just give us a voice bot; they built a security system for our phone lines and a professional booking engine that never makes a scheduling mistake across all 13 of our business lines.",
      attribution: "ARIK Services",
    },
    relatedServices: ["ai-voice-receptionist", "crm-lead-systems", "workflow-automation"],
    relatedIndustries: ["home-services"],
  },
  {
    slug: "ez-cribs",
    client: "EZ Cribs",
    vertical: "Renovations / Home Services",
    location: "Valencia, Spain",
    tags: ["VAPI", "n8n", "GoHighLevel", "Cal.com"],
    headline: "An autonomous revenue engine for a renovation business",
    summary:
      "EZ Cribs was losing 45% of calls after-hours and burning ~€1,200/month on no-show site visits. We replaced their pen-and-paper workflow with a fully autonomous Lead-to-Booking pipeline.",
    heroStats: [
      { value: "100%", label: "Call capture rate (was 55%)" },
      { value: "4%", label: "No-show rate (was 20%)" },
      { value: "62%", label: "Of no-shows recovered into new bookings" },
    ],
    challenge: [
      "45% of high-intent calls occurred outside 9-to-5 and went to voicemail rarely returned in time.",
      "Technicians manually texted clients to confirm addresses, human error and scheduling overlaps.",
      "No automated reminders meant technicians often arrived at empty properties, costing roughly €1,200/month in wasted labour and travel.",
    ],
    solution: [
      {
        title: "AI Voice Intelligence (Vapi)",
        detail:
          "'Mark' is connected via API to the master calendar, checks real-time slots, books on the spot, and switches languages instantly to match the caller.",
      },
      {
        title: "Post-Call 'Pulse' Automation",
        detail:
          "Within 30 seconds of hanging up the lead receives a branded SMS and email with their appointment and technician name. Reminders fire 24 hours and 2 hours before, timezone-aware.",
      },
      {
        title: "Safety-Net Recovery System",
        detail:
          "If a technician marks a visit as missed, an automated recovery sequence fires: 'Sorry we missed you, pick a new time.' Plus a 7-day nurture loop for leads who called but didn't book.",
      },
    ],
    results: [
      "50% increase in booked appointments in 30 days",
      "No-show rate cut from 20% to 4%",
      "62% of no-shows recovered as future bookings",
      "Team focused on renovations while AI ran the entire front office",
    ],
    resultsTable: [
      { metric: "Call capture rate", before: "55%", after: "100%" },
      { metric: "No-show rate", before: "20%", after: "4%" },
      { metric: "Average time to book", before: "4–6 hours", after: "Immediate" },
      { metric: "Recovered no-shows", before: "0%", after: "62%" },
    ],
    quote: {
      text: "BurkyFlow didn't just give us a bot; they gave us our time back and stopped the bleeding in our bottom line.",
      attribution: "EZ Cribs",
    },
    relatedServices: ["ai-voice-receptionist", "crm-lead-systems", "workflow-automation"],
    relatedIndustries: ["home-services"],
  },
  {
    slug: "troy-plumbing",
    client: "Troy Plumbing",
    vertical: "Plumbing Services",
    location: "Culver City, CA, serving LA County",
    tags: ["VAPI", "Caller ID", "24/7 Intake"],
    headline: "Zero missed leads across LA County, day or night",
    summary:
      "Serving LA County meant the phone never stopped ringing. Troy was losing 30% of evening and weekend inquiries because callers wouldn't leave voicemail. We designed a professional AI receptionist as the digital twin of their best front-desk staff.",
    heroStats: [
      { value: "2 sec", label: "Average answer time (was 45 sec)" },
      { value: "99.9%", label: "Email accuracy (was 82%)" },
      { value: "+20%", label: "Lift in average ticket value" },
    ],
    challenge: [
      "2-minute hold times in a plumbing emergency, callers hang up and dial the next Google result.",
      "Office staff occasionally forgot ZIP codes or misspelled emails, leading to lost follow-ups.",
      "The office was plagued by automated sales calls wasting hours of human time every week.",
    ],
    solution: [
      {
        title: "Anti-Spam Firewall",
        detail:
          "The system identifies non-human interactions and terminates them instantly, keeping the lines open for real customers.",
      },
      {
        title: "Active Listening Engine",
        detail:
          "Unlike basic bots, the AI lets the caller explain their plumbing disaster fully before speaking, creating a human-centric experience.",
      },
      {
        title: "Structured Data Harvesting",
        detail:
          "Strict hierarchy: Name → Phone (via Caller ID) → Email (letter-by-letter confirmation) → Location → Issue description.",
      },
      {
        title: "Localised Incentivised Booking",
        detail:
          "Naturally weaves in $50 off first service, 15% Senior Discount, and maintenance plan mentions to lift average ticket.",
      },
    ],
    results: [
      "Zero missed leads, every LA County call answered within 2 seconds",
      "99.9% email and address accuracy via mandatory confirmation",
      "20% increase in average ticket value",
      "Spam interception fully automated",
    ],
    resultsTable: [
      { metric: "Response time", before: "45 sec average", after: "2 sec" },
      { metric: "Email accuracy", before: "82%", after: "99.9%" },
      { metric: "Emergency capture", before: "Restricted to on-call", after: "24/7 full intake" },
      { metric: "Spam interception", before: "Manual filtering", after: "100% automated" },
    ],
    relatedServices: ["ai-voice-receptionist", "crm-lead-systems"],
    relatedIndustries: ["home-services"],
  },
  {
    slug: "dr-shifton-neurology",
    client: "Specialized Neurology Practice",
    vertical: "Medical Front Desk AI",
    location: "New York / East Coast",
    tags: ["VAPI", "HIPAA-aware", "Emergency Triage", "Insurance Intelligence"],
    headline: "A 6-layer protocol for a high-stakes neurology reception desk",
    summary:
      "Neurology practices face challenges standard AI receptionists cannot handle: HIPAA liability, emergency stroke and seizure detection, and complex insurance routing. We engineered a Vapi-powered assistant on a constraint-first architecture.",
    heroStats: [
      { value: "< 5 sec", label: "Emergency escalation (was 2–3 min)" },
      { value: "100%", label: "Calls answered on the first ring" },
      { value: "20+ hrs", label: "Saved per week for the office manager" },
    ],
    challenge: [
      "High call volumes with complex insurance questions and urgent medical inquiries.",
      "Front desk overwhelmed, leading to long hold times and the risk of missing emergency symptoms.",
      "HIPAA risk if AI collected medical data or gave clinical advice incorrectly.",
    ],
    solution: [
      {
        title: "Intent Classification",
        detail:
          "Callers are immediately sorted into Prescription, Hospital, or Appointment flows to prevent information dumping.",
      },
      {
        title: "Safety Firewall",
        detail:
          "Constant background monitoring for stroke and seizure indicators (slurred speech, drooping face). On detection, the AI halts all business logic and triggers the emergency script, 9-to-9 line or 911.",
      },
      {
        title: "Clinical Redirect",
        detail:
          "Proprietary logic gate that stops callers from sharing private medical history, protecting HIPAA compliance with a zero-storage policy for volunteered clinical data.",
      },
      {
        title: "Smart Insurance Routing",
        detail:
          "Cross-references caller insurance against complex network lists (Humana, Aetna, Cigna, Blue Cross, UnitedHealthcare) with instant compliant pricing disclosures.",
      },
      {
        title: "Closed-Loop Confirmation",
        detail:
          "Automatic after-call SMS and email confirmation only after mandatory Name and Time collection.",
      },
    ],
    results: [
      "Zero hold times, 100% of calls answered on the first ring, 24/7",
      "100% of emergency calls identified and escalated instantly",
      "Clinical team only receives clean, pre-qualified appointment requests",
      "Office manager saves 20+ hours per week",
    ],
    resultsTable: [
      { metric: "Emergency escalation speed", before: "2–3 minutes", after: "< 5 seconds" },
      { metric: "Insurance verification", before: "Manual / delayed", after: "Instant & accurate" },
      { metric: "Hospital / physician referrals", before: "Often lost in voicemail", after: "Prioritised & logged" },
      { metric: "Patient satisfaction", before: "Mixed (hold times)", after: "High (clear & reassuring)" },
    ],
    relatedServices: ["ai-voice-receptionist", "workflow-automation"],
    relatedIndustries: ["healthcare"],
  },
  {
    slug: "sabra-home-buyers",
    client: "Sabra Home Buyers",
    vertical: "Residential Real Estate, Cash Offers",
    location: "United States",
    tags: ["VAPI", "GoHighLevel", "Outbound AI", "Four-Pillar Qualification"],
    headline: "'Mark', an outbound AI follow-up specialist that booked appointments hands-free",
    summary:
      "Sabra had a pipeline overflowing with warm leads and reps losing hours to manual dialing. We deployed Mark, a high-performance outbound AI Follow-Up Specialist integrated into GoHighLevel that qualifies on four pillars and books in real time.",
    heroStats: [
      { value: "100%", label: "Follow-up consistency, no manual dialing" },
      { value: "< 90s", label: "Average qualification call length" },
      { value: "0", label: "Manual CRM updates required" },
    ],
    challenge: [
      "Pipeline full of warm leads with no scalable follow-up.",
      "Reps lost hours daily to manual dialing, often reaching people not ready to sell.",
      "Valuable seller data lost in unlogged conversations.",
      "Deals cooled because follow-up wasn't fast or consistent enough.",
    ],
    solution: [
      {
        title: "Four-Pillar Qualification",
        detail:
          "Mark qualifies every homeowner against Timeline (selling within 6 months), Condition (distressed, inherited, repair needed), Motivation (divorce, foreclosure, relocation), and Price (open to a cash offer).",
      },
      {
        title: "Intelligent Intent Detection",
        detail:
          "If a homeowner meets at least 2 of the 4 pillars, Mark instantly shifts into booking mode. Fewer than 2, he wraps politely and logs the outcome.",
      },
      {
        title: "Live GHL Calendar Sync",
        detail:
          "During the call Mark checks live calendar availability, offers up to 3 specific time slots within Mon–Fri 9am–6pm, and books in real time.",
      },
      {
        title: "Automated CRM Enrichment",
        detail:
          "Post-call, the system phone-first looks up or creates the contact, writes all four pillar responses into custom fields, and triggers owner and staff notifications plus a lead confirmation SMS.",
      },
    ],
    results: [
      "100% follow-up consistency, every lead re-contacted without a rep dialing",
      "Only high-intent sellers reach the team's calendar",
      "Zero-admin workflow: outbound dial, CRM update, team notification, fully hands-free",
      "Reduced no-shows via instant personalised SMS confirmation",
    ],
    relatedServices: ["crm-lead-systems", "database-reactivation", "ai-voice-receptionist"],
    relatedIndustries: ["real-estate"],
  },
  {
    slug: "its-landscape-design",
    client: "ITS Landscape Design",
    vertical: "Luxury Landscaping",
    location: "United States",
    tags: ["VAPI", "Southern Gentleman persona", "Hospitality Intake"],
    headline: "'Elliot', a white-glove AI coordinator for a boutique landscaping firm",
    summary:
      "The owner was stuck in a success trap: the more projects he won, the less time he had to answer the phone. Five-figure contracts were lost to voicemail. We deployed Elliot, a warm Southern-Gentleman AI coordinator who pre-sells the brand before the first stone is laid.",
    heroStats: [
      { value: "Near zero", label: "No-show rate (was 1 in 5)" },
      { value: "15+ hrs", label: "Reclaimed by the owner each week" },
      { value: "100%", label: "Verified data accuracy" },
    ],
    challenge: [
      "Voicemail and generic call centres felt 'budget', making it harder to justify premium pricing.",
      "Owner spent evenings playing phone tag for basic details like zip codes or project type.",
      "45-minute drives to locked-gate properties were costing hundreds of dollars a week in lost labour and fuel.",
    ],
    solution: [
      {
        title: "Hospitality-Driven Intake",
        detail:
          "Calm, professional greeting; guides callers through discovery for hardscaping, irrigation, or full redesigns. Elliot classifies the project so the owner arrives prepared to close.",
      },
      {
        title: "Zero-Leak Accuracy Protocol",
        detail:
          "Verifies phone numbers and spells back email addresses letter-by-letter to prevent CRM typos.",
      },
      {
        title: "Dual-Sided Reminder Loop",
        detail:
          "Both homeowner and owner receive automated nudges 24 hours and 1 hour before the meeting, with a full project brief sent to the owner's mobile including a clickable map link.",
      },
    ],
    results: [
      "Operates with the administrative power of a much larger firm",
      "Owner reclaimed 15+ hours per week of personal time and travel efficiency",
      "No-show rate virtually eliminated",
      "Customers regularly comment on how professional the intake felt, before meeting the team",
    ],
    resultsTable: [
      { metric: "Response speed", before: "2–8 hours (voicemail)", after: "Instant (24/7)" },
      { metric: "Data accuracy", before: "72% (manual typos)", after: "100% (verified)" },
      { metric: "No-show rate", before: "1 in 5 consultations", after: "Near zero" },
      { metric: "Owner admin time", before: "15+ hours / week", after: "0 (fully hands-off)" },
    ],
    relatedServices: ["ai-voice-receptionist", "crm-lead-systems"],
    relatedIndustries: ["home-services"],
  },
];

// Reverse lookups for silo rendering on service/industry pages.
export function caseStudiesForService(serviceSlug: string) {
  return caseStudies.filter((c) => c.relatedServices.includes(serviceSlug));
}
export function caseStudiesForIndustry(industrySlug: string) {
  return caseStudies.filter((c) => c.relatedIndustries.includes(industrySlug));
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
