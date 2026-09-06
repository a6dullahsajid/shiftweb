import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="bg-white text-primary">
      
      {/* HEADER SECTION */}
      <section className="flex justify-start border-b border-secondary/10">
        <div className="mx-auto w-full px-6 md:px-10 max-w-6xl pt-14 pb-20 overflow-hidden flex flex-col gap-6 items-start text-left">
          <p className="text-[12px] uppercase text-secondary">
            Legal
          </p>
          <h1 className="text-[48px] sm:text-[64px] font-[140] leading-[1.05] tracking-tight text-primary">
            Privacy Policy
          </h1>
          <p className="text-[14px] text-secondary mt-2">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="w-full px-6 py-16 md:py-24">
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-12 text-[16px] sm:text-[18px] leading-[1.8] text-secondary">
          
          <div className="flex flex-col gap-5">
            <h2 className="text-[22px] sm:text-[26px] font-[140] text-primary">1. Information we collect</h2>
            <p>
              We only collect information that is strictly necessary to provide our services. This includes your name, email address, and project details when you fill out our contact form or book a discovery call. We also utilize standard, privacy-friendly analytics to understand how visitors interact with our website.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-[22px] sm:text-[26px] font-[140] text-primary">2. How we use your data</h2>
            <p>
              We use your information exclusively to communicate with you regarding your project inquiry, deliver our engineering and design services, and improve our digital presence. Shift Web will never sell, rent, or trade your personal data to outside parties.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-[22px] sm:text-[26px] font-[140] text-primary">3. Third-party architecture</h2>
            <p>
              To run our agency efficiently, we may share your data with trusted third-party infrastructure providers (such as secure hosting platforms or communication tools) strictly for the purpose of operating our business. These parties are contractually obligated to keep this information confidential.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-[22px] sm:text-[26px] font-[140] text-primary">4. Contact us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at: <br/>
              <a href="mailto:shiftweb.in@gmail.com" className="text-primary hover:text-secondary transition-colors mt-2 inline-block">
                shiftweb.in@gmail.com
              </a>
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}