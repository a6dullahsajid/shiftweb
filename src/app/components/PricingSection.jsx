import React from "react";

const PricingSection = () => {
  return (
   
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <p className="uppercase text-secondary text-[12px] tracking-widest mb-4">
            Investment
          </p>
          <h2 className="text-primary text-[36px] md:text-[50px] max-w-[850px] font-[140] leading-[1.2] mb-6">
            Transparent pricing for high-performance builds.
          </h2>
          <p className="text-[16px] sm:text-[20px] text-secondary leading-relaxed">
            No hidden fees or surprise retainers. Choose the architecture that fits your exact growth stage.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Tier 1: Basic Plan */}
          <div className="flex flex-col p-8 bg-[#F8FAFC] border border-secondary/20">
            <h3 className="text-[20px] font-semibold text-primary mb-2">Basic Plan</h3>
            <p className="text-[14px] text-secondary mb-6 min-h-[40px]">Perfect for single page website.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-[40px] font-[140] text-primary">₹8,000</span>
              <span className="text-[14px] text-secondary">/project</span>
            </div>
            <ul className="flex flex-col gap-4 mb-8 flex-1">
              {["Next.js Static Generation", "Standard Technical SEO", "Contact Form Integration", "1 Revision Round", "1 Week Delivery"].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[14px] text-secondary">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 border border-secondary text-secondary font-medium hover:bg-secondary/5 transition-colors text-[14px]">
              Book a Call
            </button>
          </div>

          {/* Tier 2: Normal Plan (Highlighted) */}
          <div className="relative flex flex-col p-8 bg-primary border border-primary md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-secondary/20 text-primary text-[10px] font-bold uppercase tracking-widest py-1.5 px-4">
              Most Popular
            </div>
            <h3 className="text-[20px] font-semibold text-white mb-2">Normal Plan</h3>
            <p className="text-[14px] text-white/80 mb-6 min-h-[40px]">Multi page along with SEO.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-[40px] font-[140] text-white">₹15,000</span>
              <span className="text-[14px] text-white/80">/project</span>
            </div>
            <ul className="flex flex-col gap-4 mb-8 flex-1">
              {["Custom React/Node.js Stack", "Database Architecture (MongoDB)", "Admin Dashboard & Analytics", "Advanced SEO Indexing", "Direct-to-WhatsApp Funnels", "3 Revision Rounds", "3-4 Weeks Delivery"].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[14px] text-white/90">
                  <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-white text-primary font-medium hover:bg-gray-50 transition-colors text-[14px]">
              Book a Call
            </button>
          </div>

          {/* Tier 3: Pro Plan */}
          <div className="flex flex-col p-8 bg-[#F8FAFC] border border-secondary/20">
            <h3 className="text-[20px] font-semibold text-primary mb-2">Pro Plan</h3>
            <p className="text-[14px] text-secondary mb-6 min-h-[40px]">Multi page, admin panel along with SEO and analytics panel.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-[40px] font-[140] text-primary">₹22,000</span>
              <span className="text-[14px] text-secondary">/project</span>
            </div>
            <ul className="flex flex-col gap-4 mb-8 flex-1">
              {["Continuous Feature Rollouts", "Uptime & Cron Job Monitoring", "Priority Bug Fixes", "Monthly Lighthouse Audits", "Dedicated Slack Channel"].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[14px] text-secondary">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 border border-secondary text-secondary font-medium hover:bg-secondary/5 transition-colors text-[14px]">
              Book a Call
            </button>
          </div>

        </div>
      </div>

  );
};

export default PricingSection;