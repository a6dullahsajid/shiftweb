import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import OpenGraphImage from "./assets/opengraph-image.png";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Shift Web | Design, Development & SEO",
  description:
    "Shift Web designs and develops high-performance websites that look great, rank higher, and help businesses grow online.",
  keywords: [
    "web design",
    "web development",
    "website development",
    "SEO",
    "ecommerce website",
    "Next.js development",
    "Shopify development",
    "Shift Web",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Shift Web",
    title: "Shift Web | Design, Development & SEO",
    description:
      "High-performance websites, digital products, and technical SEO for ambitious brands.",
    images: [OpenGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shift Web | Design, Development & SEO",
    description:
      "High-performance websites, digital products, and technical SEO for ambitious brands.",
    images: [OpenGraphImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Analytics />
      <body className="min-h-full flex flex-col bg-white">
        {/* The Header MUST go inside the body */}
        <Header />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.shiftweb.in/#organization",
                  name: "Shift Web",
                  url: "https://www.shiftweb.in",
                  email: "shiftwebdesign.in@gmail.com",
                  sameAs: [
                    "https://www.instagram.com/shiftweb.design",
                    "https://www.facebook.com/share/18Monk33iM/",
                    "https://wa.me/6393170895",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.shiftweb.in/#website",
                  name: "Shift Web",
                  url: "https://www.shiftweb.in",
                  publisher: {
                    "@id": "https://www.shiftweb.in/#organization",
                  },
                },
              ],
            }),
          }}
        />
        
        {/* Wrapping children in a flex-grow main tag ensures your layout fills the screen */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}