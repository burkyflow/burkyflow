/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Card cover photos (see content/photos.ts).
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  // Security headers on every response. CSP is report-only until every
  // third-party host (GTM, Meta Pixel, Stape gateway, booking widget) is listed.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy-Report-Only", value: "frame-ancestors 'self'; object-src 'none'; base-uri 'self'" },
        ],
      },
    ];
  },
  // Renamed slugs keep their old links working and pass ranking to the new URL.
  async redirects() {
    return [
      {
        source: "/case-studies/dr-shifton-neurology",
        destination: "/case-studies/specialized-neurology-practice",
        permanent: true,
      },
      {
        source: "/case-studies/go-waka-car-finance",
        destination: "/case-studies/auto-finance-company",
        permanent: true,
      },
      {
        source: "/bundles/full-stack-unitzero",
        destination: "/bundles/full-stack-burkyflow",
        permanent: true,
      },
      {
        source: "/bundles/the-wedge-service-business",
        destination: "/bundles/service-business-core",
        permanent: true,
      },
      // Unpublished Nov 12, 2026 post; its link was already shared on LinkedIn.
      {
        source: "/blog/automate-linkedin-lead-qualification-n8n-openai",
        destination: "/blog/estimate-follow-up-crm-unanswered-quotes",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
