import React from "react";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="bg-white text-primary">
      
      {/* HEADER SECTION */}
      <section className="flex justify-start border-b border-secondary/10">
        <div className="mx-auto w-full px-6 md:px-10 max-w-6xl pt-14 pb-20 overflow-hidden flex flex-col gap-6 items-start text-left">
          <p className="text-[12px] uppercase text-secondary">
            Legal
          </p>
          <h1 className="text-[48px] sm:text-[64px] font-[140] leading-[1.05] tracking-tight text-primary">
            Terms of Service
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
            <h2 className="text-[22px] sm:text-[26px] font-[140] text-primary">1. Agreement to Terms</h2>
            <p>
              By accessing our website and engaging Shift Web for design and engineering services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using or accessing our site or services.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-[22px] sm:text-[26px] font-[140] text-primary">2. Intellectual Property & Ownership</h2>
            <p>
              Upon final payment for your project, all custom code, visual assets, and digital architecture produced by Shift Web specifically for your business will become your intellectual property. Until final payment is received in full, Shift Web retains all rights, title, and interest in the deliverables.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-[22px] sm:text-[26px] font-[140] text-primary">3. Project Scope & Timelines</h2>
            <p>
              Our high-performance builds rely on strict timelines and clear communication. Project scopes are defined in detail before code is written. Any requests falling outside the initial agreed-upon architecture will be subject to additional scoping and fees. Delivery timelines depend on timely feedback and asset provision from the client.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-[22px] sm:text-[26px] font-[140] text-primary">4. Payments & Refunds</h2>
            <p>
              Due to the custom, labor-intensive nature of software engineering and web design, all payments made to Shift Web are non-refundable. Projects typically require an upfront deposit to secure a spot in our development queue, with remaining milestones billed upon completion of specific project phases.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-[22px] sm:text-[26px] font-[140] text-primary">5. Limitation of Liability</h2>
            <p>
              Shift Web engineers digital ecosystems to the highest modern standards. However, we are not liable for any direct, indirect, incidental, or consequential damages resulting from server downtime, third-party API changes, or unauthorized access to your systems after handoff.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-[22px] sm:text-[26px] font-[140] text-primary">6. Contact us</h2>
            <p>
              If you have any questions regarding our Terms of Service, scope definitions, or project agreements, please contact us at: <br/>
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