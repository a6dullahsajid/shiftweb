import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.shiftweb.in";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Shift Web | Web Design, Development & SEO",
    template: "%s | Shift Web",
  },

  description:
    "Shift Web builds high-performance websites, custom web applications, e-commerce platforms, and digital products for ambitious brands. We combine strategic design, technical SEO, and engineering excellence to create digital experiences that drive real business results.",

  keywords: [
    "Shift Web",
    "web design",
    "web development",
    "website development",
    "SEO",
    "technical SEO",
    "ecommerce website",
    "Next.js development",
    "Shopify development",
    "custom web applications",
    "SaaS development",
  ],

  alternates: {
    canonical: "/",
  },

  // FAVICON
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],

    shortcut: "/favicon.ico",

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  // OPEN GRAPH
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Shift Web",
    title: "Shift Web | Web Design, Development & SEO",
    description:
      "We design and develop custom websites, e-commerce platforms, and SaaS products with technical SEO built in. From brand strategy to production deployment, we handle your entire digital ecosystem.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Shift Web | Web Design, Development & SEO",
      },
    ],
    locale: "en_US",
  },

  // TWITTER / X
  twitter: {
    card: "summary_large_image",
    title: "Shift Web | Web Design, Development & SEO",
    description:
      "Custom web design, development, e-commerce, SaaS solutions, and technical SEO for ambitious brands.",
    images: ["/opengraph-image.png"],
  },

  // ROBOTS
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
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Shift Web",
      alternateName: "ShiftWeb",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      email: "shiftwebdesign.in@gmail.com",

      sameAs: [
        "https://www.instagram.com/shiftweb.design",
        "https://www.facebook.com/share/18Monk33iM/",
        "https://wa.me/6393170895",
      ],
    },

    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Shift Web",
      alternateName: "ShiftWeb",
      url: SITE_URL,

      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Analytics />

        <Header />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
