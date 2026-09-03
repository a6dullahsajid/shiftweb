import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; 
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        {/* The Header MUST go inside the body */}
        <Header />
        
        {/* Wrapping children in a flex-grow main tag ensures your layout fills the screen */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}