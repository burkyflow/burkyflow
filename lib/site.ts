// Central site config. Edit once, propagates everywhere.
export const site = {
  name: "BurkyFlow",
  legalName: "BurkyFlow",
  tagline:
    "AI-powered revenue operations for service businesses. We find where your revenue leaks, capture it, and optimise every step that turns a lead into a paid job.",
  url: "https://burkyflow.com",
  // TODO(you): confirm where the primary CTA points. Placeholder for now.
  ctaHref: "/contact",
  ctaLabel: "Book a call",
  secondaryCtaLabel: "See how it works",
  email: "hello@burkyflow.com", // TODO(you): confirm
  // Phone shown in the navbar. TODO(you): replace with the real number.
  phone: { display: "(702) 900-1234", href: "tel:+17029001234" },
  // Real registered address — used ONLY for LocalBusiness/Organization on Contact.
  // TODO(you): confirm exact address. UNITZERO is registered in Karachi (later Wyoming, US).
  address: {
    streetAddress: "",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    postalCode: "",
    addressCountry: "PK",
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
