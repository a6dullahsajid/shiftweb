import React from "react";
import Image from "next/image";
import shiftweb_logo from "../assets/shiftweb-logo-white.png"
import Link from "next/link";

function Footer() {
  return (
    <section className="footer-section bg-primary text-white">
      <div className="mx-auto w-full px-6 md:px-11 max-w-6xl pt-16 md:pt-24 pb-16 overflow-hidden flex flex-col md:flex-row justify-between gap-12 lg:gap-8">
        
        {/* Left Side: Brand & Mission */}
        <div className="left flex flex-col gap-6 max-w-sm">
          <Image src={shiftweb_logo} alt="shift-web logo"></Image>
          <p className="text-[14px] leading-relaxed text-slate-300">
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
        <div className="right flex flex-wrap sm:flex-nowrap gap-12 md:gap-20">
          
          <div className="flex flex-col gap-5">
            <p className="font-semibold text-white text-[14px] uppercase tracking-wider">
              Company
            </p>
            <ul className="flex flex-col gap-3 text-[14px] text-slate-300">
              <li><Link href="/#services" className="hover:text-white transition-colors">Our services</Link></li>
              <li><Link href="/work" className="hover:text-white transition-colors">Our work</Link></li>
              <li><Link href="/#plan" className="hover:text-white transition-colors">How we work</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-semibold text-[14px] uppercase tracking-wider">
              Socials
            </p>
            <ul className="flex flex-col gap-3 text-[14px] text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Legal */}
      <div className="mx-auto w-full px-6 md:px-11 max-w-6xl pb-8">
        <div className="border-t border-slate-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-slate-300">
          <p>© {new Date().getFullYear()} Shiftweb. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;