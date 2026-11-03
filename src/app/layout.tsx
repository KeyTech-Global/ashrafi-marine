import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { contacts, site } from "@/content/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const title =
  "Ashrafi Marine Products — Dry Fish Wholesale Supplier in Mumbai, India";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s | Ashrafi Marine Products",
  },
  description:
    "Dry fish merchant and wholesale supplier based in Madh Island, Mumbai. Wholesale enquiries for Jawla, mixed dry fish and other varieties, supplied to trade buyers across India.",
  applicationName: site.name,
  keywords: [
    "dry fish wholesale supplier India",
    "dry fish merchant Mumbai",
    "Jawla dry fish wholesale",
    "sookha jheenga wholesale",
    "dried prawns wholesale",
    "baby dry shrimp supplier",
    "mixed dry fish supplier",
    "bulk dry fish supplier",
    "marine products wholesale India",
    "dry fish supplier Maharashtra",
    "dry fish wholesale Madh Island",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "business",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title,
    description:
      "Quality dry fish. Reliable wholesale supply. Wholesale and bulk enquiries for Jawla, mixed dry fish and other varieties — Madh Island, Mumbai, serving buyers across India.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ashrafi Marine Products — dry fish wholesale, Madh Island, Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Dry fish wholesale and bulk supply enquiries — Madh Island, Mumbai, serving buyers across India.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  formatDetection: {
    telephone: true,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#071C2C",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${site.url}/#business`,
  name: site.name,
  alternateName: "Ashrafi Marine",
  url: site.url,
  description: site.description,
  slogan: site.tagline,
  image: `${site.url}/images/hero-harbour.webp`,
  logo: `${site.url}/icon.svg`,
  telephone: contacts[0].phoneDisplay,
  address: {
    "@type": "PostalAddress",
    addressLocality: `${site.location.locality}, ${site.location.city}`,
    addressRegion: site.location.region,
    addressCountry: site.location.countryCode,
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  knowsAbout: [
    "Dry fish wholesale",
    "Jawla dry fish",
    "Dried prawns (sookha jheenga)",
    "Baby dry shrimp",
    "Mixed dry fish",
    "Bulk dry fish supply",
    "Marine products",
  ],
  contactPoint: contacts.map((contact) => ({
    "@type": "ContactPoint",
    contactType: "sales",
    name: contact.name,
    telephone: contact.phoneHref.replace("tel:", ""),
    areaServed: "IN",
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${manrope.variable} ${playfair.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body id="top" className="min-h-screen bg-pearl text-navy">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
