import { Space_Grotesk, Instrument_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata = {
  title: "Your Agency Name | Digital Marketing & Web Development Agency",
  description:
    "We help businesses grow through powerful digital marketing strategies, high-converting websites, SEO optimization, Google Ads, and branding solutions. Get a free consultation today.",
  keywords: [
    "digital marketing agency",
    "web development",
    "SEO optimization",
    "Google Ads management",
    "social media marketing",
    "branding",
    "website design",
  ],
  authors: [{ name: "Your Agency Name" }],
  creator: "Your Agency Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://youragencyname.com",
    siteName: "Your Agency Name",
    title: "Your Agency Name | Digital Marketing & Web Development Agency",
    description:
      "We create powerful digital experiences that generate leads, increase sales, and build strong brands.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Your Agency Name - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Agency Name | Digital Marketing Agency",
    description:
      "We create powerful digital experiences that generate leads, increase sales, and build strong brands.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Your Agency Name",
    url: "https://youragencyname.com",
    description:
      "Digital marketing and web development agency helping businesses grow through powerful digital experiences.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-87670-67884",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://instagram.com/youragencyname",
      "https://facebook.com/youragencyname",
      "https://linkedin.com/company/youragencyname",
    ],
  };

  return (
    <html lang="en" className={`${instrumentSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen antialiased"
        style={{
          fontFamily: "var(--font-body)",
        }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
