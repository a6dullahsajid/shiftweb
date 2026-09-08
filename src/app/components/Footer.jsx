import React from "react";
import Image from "next/image";
import shiftweb_logo from "../assets/shiftweb-logo-white.png"
import Link from "next/link";

function Footer() {
  return (
    <section className="footer-section bg-primary text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-10 overflow-hidden px-6 pb-12 pt-12 sm:gap-12 md:flex-row md:px-11 md:pb-16 md:pt-20 lg:gap-8">
        
        {/* Left Side: Brand & Mission */}
        <div className="left flex max-w-sm flex-col gap-5 md:max-w-xs">
          <Image
            src={shiftweb_logo}
            alt="shift-web logo"
            width={112}
            height={32}
            className="h-auto w-28"
          />
          <p className="text-sm leading-relaxed text-slate-300">
            Agencies over-complicate things. We cut the noise. By handling your entire ecosystem, we build exactly what matters.
          </p>
          <a 
            href="mailto:hello@youragency.com" 
            className="font-medium hover:underline hover:text-white text-[15px] text-slate-300 transition-colors"
          >
            shiftweb.in@gmail.com
          </a>
        </div>

        {/* Right Side: Navigation Columns */}
        <div className="right grid w-full grid-cols-2 gap-8 sm:gap-12 md:w-auto md:gap-20">
          
          <div className="flex min-w-0 flex-col gap-5">
            <p className="font-semibold text-white text-[14px] uppercase tracking-wider">
              Company
            </p>
            <ul className="flex flex-col gap-3 text-sm text-slate-300">
              <li><Link href="/#services" className="hover:text-white transition-colors">Our services</Link></li>
              <li><Link href="/work" className="hover:text-white transition-colors">Our work</Link></li>
              <li><Link href="/#plan" className="hover:text-white transition-colors">How we work</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          <div className="flex min-w-0 flex-col gap-5">
            <p className="font-semibold text-[14px] uppercase tracking-wider">
              Socials
            </p>
            <ul className="flex flex-col gap-3 text-sm text-slate-300">
              <li>
                <Link
                  href="https://www.instagram.com/shiftweb.design"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/share/18Monk33iM/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/6393170895"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Legal */}
      <div className="mx-auto w-full max-w-6xl px-4 pb-2 md:px-11 md:pb-4">
        <div className="flex flex-col-reverse items-center justify-between gap-4 md:border-t border-slate-300 pt-4 text-xs text-slate-300 sm:flex-row sm:items-center md:pt-8">
          <p className="w-full text-center md:text-left border-t border-slate-300 pt-2 text-xs text-slate-300 md:border-none md:pt-0">
            © {new Date().getFullYear()} Shiftweb. All rights reserved.
          </p>
          <div className="flex gap-x-6">
            <Link href="/privacy" className="hover:text-white text-nowrap transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white text-nowrap transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;