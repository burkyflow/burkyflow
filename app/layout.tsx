import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChromeGate } from "@/components/ChromeGate";
import { JsonLd } from "@/components/JsonLd";
import { organizationLd } from "@/lib/seo";
import { site } from "@/lib/site";

const heading = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `BurkyFlow — AI automation for service businesses`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `BurkyFlow — AI automation for service businesses`,
    description: site.tagline,
    url: site.url,
    images: [{ url: "/images/logo.png", width: 502, height: 502, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `BurkyFlow — AI automation for service businesses`,
    description: site.tagline,
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <JsonLd data={organizationLd()} />
        <ChromeGate navbar={<Navbar />} footer={<Footer />}>
          {children}
        </ChromeGate>
      </body>
    </html>
  );
}
