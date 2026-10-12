/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
  // Renamed slugs keep their old links working and pass ranking to the new URL.
  async redirects() {
    return [
      {
        source: "/case-studies/dr-shifton-neurology",
        destination: "/case-studies/specialized-neurology-practice",
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
    ];
  },
};

export default nextConfig;
