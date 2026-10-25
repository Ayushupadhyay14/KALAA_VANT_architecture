import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE_URL, STUDIO_INFO } from "@/data/projects";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "KALAA VANT | Art & Murals Atelier",
  description:
    "KALAVANT is a multidisciplinary art business creating paintings, sculptures, murals, mixed media and commercial art commissions.",
  keywords: ["Kalaa Vant", "KALAVANT", "murals", "paintings", "sculpture", "mixed media", "art commissions"],
  authors: [{ name: "KALAVANT", url: "https://www.instagram.com/kalaa_vant" }],
  creator: "KALAVANT",
  openGraph: {
    title: "KALAA VANT | Art & Murals Atelier",
    description:
      "Paintings, sculptures, murals, mixed media and commercial art commissions.",
    url: SITE_URL,
    siteName: "KALAVANT",
    images: [
      {
        url: "/images/slideshow-1.jpg",
        width: 1800,
        height: 1000,
        alt: "KALAVANT artwork",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KALAA VANT | Art & Murals Atelier",
    description: "Paintings, sculptures, murals, mixed media and commercial art commissions.",
    images: ["/images/slideshow-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data: only confirmed facts (name and Instagram). Phone, email, address and
  // team stay out until the owner verifies them (KV-03).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KALAVANT",
    alternateName: "Kalaa Vant",
    url: SITE_URL,
    description: "Paintings, sculptures, murals, mixed media and commercial art commissions.",
    sameAs: [STUDIO_INFO.contact.instagram],
  };

  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} h-full antialiased selection:bg-charcoal selection:text-ivory`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ivory text-charcoal overflow-x-hidden font-sans">
        <SmoothScroll>
          <Header />
          <div className="flex-1 w-full">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
