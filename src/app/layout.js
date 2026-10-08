// src/app/layout.js
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://mayareynoldspsyd.com"),
  title: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Warm, grounded psychotherapy in Santa Monica, CA with Dr. Maya Reynolds, PsyD. Specializing in anxiety, EMDR trauma recovery, and burnout for thoughtful adults. In-person & telehealth.",
  keywords: [
    "Anxiety therapy Santa Monica",
    "Trauma therapist Santa Monica CA",
    "EMDR therapy Los Angeles",
    "Burnout psychologist Santa Monica",
    "Dr Maya Reynolds PsyD",
    "Psychotherapy Santa Monica 90401",
    "California telehealth psychologist",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  creator: "Dr. Maya Reynolds, PsyD",
  openGraph: {
    title: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
    description:
      "Specialized, evidence-based therapy for adults navigating anxiety, panic, trauma, and burnout. In-person Santa Monica office & California telehealth.",
    url: "https://mayareynoldspsyd.com",
    siteName: "Dr. Maya Reynolds, PsyD Therapy",
    images: [
      {
        url: "/images/maya-reynolds.png",
        width: 1024,
        height: 1536,
        alt: "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, CA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
    description:
      "Warm, grounded therapy for anxiety, EMDR trauma processing, and burnout in Santa Monica and across California.",
    images: ["/images/maya-reynolds.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  // Structured data (Schema.org) for MedicalBusiness / Psychologist Local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: "Dr. Maya Reynolds, PsyD",
    image: "https://mayareynoldspsyd.com/images/maya-reynolds.png",
    description:
      "Licensed Clinical Psychologist in Santa Monica, CA providing therapy for anxiety, trauma (EMDR), and burnout.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123th Street 45 W, Suite 200",
      addressLocality: "Santa Monica",
      addressRegion: "CA",
      postalCode: "90401",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0195,
      longitude: -118.4912,
    },
    url: "https://mayareynoldspsyd.com",
    telephone: "+1-310-555-0194",
    priceRange: "$$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    medicalSpecialty: ["ClinicalPsychology", "Psychotherapy"],
    areaServed: [
      "Santa Monica",
      "Venice",
      "Brentwood",
      "Pacific Palisades",
      "West Los Angeles",
      "California",
    ],
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[var(--surface)] text-[var(--ink)]">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[var(--primary)] text-white px-4 py-2 rounded shadow-lg text-sm font-semibold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
