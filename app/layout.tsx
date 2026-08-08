import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChromeGate } from "@/components/ChromeGate";
import { JsonLd } from "@/components/JsonLd";
import { organizationLd } from "@/lib/seo";
import { site } from "@/lib/site";

const heading = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `BurkyFlow, AI automation for service businesses`,
    template: `%s, ${site.name}`,
  },
  description: site.tagline,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `BurkyFlow, AI automation for service businesses`,
    description: site.tagline,
    url: site.url,
    images: [{ url: "/images/logo.png", width: 502, height: 502, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `BurkyFlow, AI automation for service businesses`,
    description: site.tagline,
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${site.gtmId}');`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <JsonLd data={organizationLd()} />
        <ChromeGate navbar={<Navbar />} footer={<Footer />}>
          {children}
        </ChromeGate>
      </body>
    </html>
  );
}
