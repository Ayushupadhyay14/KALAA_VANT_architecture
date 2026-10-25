import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { STUDIO_INFO } from "@/data/projects";

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
  metadataBase: new URL("https://kalaavant.com"),
  title: "Studio Kalaa Vant | Contextual Architecture & Spatial Craft",
  description:
    "An architectural and spatial design atelier practicing contextual brutalism, sustainable luxury, and earth-responsive architecture across Mumbai, Pune, Alibaug, and Goa.",
  keywords: [
    "Kalaa Vant",
    "Studio Kalaa Vant",
    "Kalaavant Architecture",
    "Architect Mumbai",
    "Architect Pune",
    "Alibaug Villa Architecture",
    "Contextual Brutalism India",
    "Sustainable Architecture",
    "Rammed Earth Architects",
    "Luxury Residential Architecture India",
  ],
  authors: [{ name: "Studio Kalaa Vant", url: "https://www.instagram.com/kalaa_vant" }],
  creator: "Studio Kalaa Vant",
  openGraph: {
    title: "Studio Kalaa Vant | Contextual Architecture & Spatial Craft",
    description:
      "Architecture born from the land, sculpted by light, enduring in silence. Minimalist, refined, and editorial.",
    url: "https://kalaavant.com",
    siteName: "Studio Kalaa Vant",
    images: [
      {
        url: "/images/slideshow-1.jpg",
        width: 1800,
        height: 1000,
        alt: "Studio Kalaa Vant Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Kalaa Vant | Architecture Atelier",
    description: "Architecture born from the land, sculpted by light, enduring in silence.",
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
  // Structured Data Schema for Architect / ArchitectureFirm
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalFirm",
    name: STUDIO_INFO.fullName,
    alternateName: "Kalaa Vant",
    url: "https://kalaavant.com",
    logo: "https://kalaavant.com/images/slideshow-1.jpg",
    description: STUDIO_INFO.tagline,
    telephone: STUDIO_INFO.contact.phone,
    email: STUDIO_INFO.contact.email,
    sameAs: [
      STUDIO_INFO.contact.instagram,
      STUDIO_INFO.contact.linkedin,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Koregaon Park North Main Road",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5362",
      longitude: "73.8958",
    },
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
