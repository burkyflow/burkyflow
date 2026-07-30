// Central site config. Edit once, propagates everywhere.
export const site = {
  name: "BurkyFlow",
  legalName: "BurkyFlow Inc.",
  tagline:
    "AI-powered revenue operations for service businesses. We find where your revenue leaks, capture it, and optimise every step that turns a lead into a paid job.",
  url: "https://burkyflow.com",
  // TODO(you): confirm where the primary CTA points. Placeholder for now.
  ctaHref: "/contact",
  ctaLabel: "Book a call",
  secondaryCtaLabel: "See how it works",
  email: "atta@burkyflow.com",
  phone: { display: "+1 (407) 978-3798", href: "tel:+14079783798" },
  // Calendly scheduler (still used by the ad funnels).
  calendly: "https://calendly.com/hilalaziz-unitzero/30min",
  // GoHighLevel booking widget. The script auto-resizes the iframe by its id,
  // so `id` must match exactly what the embed code specifies.
  booking: {
    src: "https://api.burkyflow.com/widget/booking/XNHhxZCCI6H7FjRjAlSl",
    id: "XNHhxZCCI6H7FjRjAlSl_1784909823286",
    script: "https://api.burkyflow.com/js/form_embed.js",
  },
  // Google Tag Manager container.
  gtmId: "GTM-TBPZZQBN",
  // Meta (Facebook) Pixel — for ad attribution & retargeting on the funnels.
  metaPixelId: "2518081575289161",
  // Meta Test Events code. ⚠️ Only for testing — routes real PageViews into
  // Meta's Test Events view. Set back to "" before running live ads so real
  // traffic counts in normal reporting.
  metaPixelTestEventCode: "TEST73160",
  // Registered address — used for LocalBusiness/Organization schema + Contact.
  address: {
    streetAddress: "30 N Gould St Ste R",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
  // Metros we serve remotely (declared via Service.areaServed, never as a local presence).
  serviceAreas: ["Houston", "San Antonio", "Charleston", "Greenville"],
  social: {
    linkedin: "https://www.linkedin.com/company/burkyflow",
    instagram: "https://instagram.com/burkyflow",
    facebook: "https://facebook.com/burkyflow",
    youtube: "https://youtube.com/@burkyflow",
    x: "https://x.com/burkyflow",
  },
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Bundles", href: "/bundles" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
