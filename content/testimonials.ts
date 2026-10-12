// Client testimonials shown on the homepage and the paid landing pages.
//
// To add a review: append it to `clientReviews` using the client's own words,
// only with their written permission to publish it. Set `rating` only if the
// client actually gave a star rating. Case-study quotes are added after these
// automatically, so new reviews show first.
import { caseStudies } from "@/content/case-studies";

export type Testimonial = {
  quote: string;
  name: string; // the person, e.g. "Jane Smith" (or the company if they prefer)
  role?: string; // e.g. "Owner"
  company?: string;
  location?: string; // e.g. "Houston, TX"
  industries: string[]; // industry slugs from content/industries.ts
  rating?: 1 | 2 | 3 | 4 | 5;
  caseStudySlug?: string;
};

export const clientReviews: Testimonial[] = [
  // {
  //   quote: "Exactly what the client wrote.",
  //   name: "Jane Smith",
  //   role: "Owner",
  //   company: "Smith Plumbing",
  //   location: "Houston, TX",
  //   industries: ["home-services"],
  //   rating: 5,
  // },
];

const caseStudyQuotes: Testimonial[] = caseStudies
  .filter((c) => c.quote)
  .map((c) => ({
    quote: c.quote!.text,
    name: c.quote!.attribution,
    location: c.location,
    industries: c.relatedIndustries,
    caseStudySlug: c.slug,
  }));

export const testimonials: Testimonial[] = [...clientReviews, ...caseStudyQuotes];

// Up to `limit` testimonials, preferring ones from the given industry.
export function testimonialsFor(industrySlug?: string, limit = 3) {
  if (!industrySlug) return testimonials.slice(0, limit);
  const matched = testimonials.filter((t) => t.industries.includes(industrySlug));
  const rest = testimonials.filter((t) => !t.industries.includes(industrySlug));
  return [...matched, ...rest].slice(0, limit);
}
