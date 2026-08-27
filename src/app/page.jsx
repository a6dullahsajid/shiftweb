"use client";

import { useState, useEffect } from "react";

import TestimonialMarquee from "./components/TestimonialMarquee";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cubes = ["Logo", "Website", "Brand kit"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % cubes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cubes.length]);

  // Calculates position based on distance from the active index
  const getStackClass = (index) => {
    const position = (index - activeIndex + cubes.length) % cubes.length;

    switch (position) {
      case 0:
        // Front: Main Active Cube
        return "translate-x-0 translate-y-0 scale-100 z-30 opacity-100 bg-primary text-white shadow-2xl";
      case 1:
        // Middle: First step back
        return "translate-x-[15%] translate-y-[15%] scale-90 z-20 opacity-70 bg-[#5A74FF] text-transparent shadow-lg blur-[1px]";
      case 2:
        // Back: Furthest back
        return "translate-x-[30%] translate-y-[30%] scale-80 z-10 opacity-30 bg-[#5A74FF] text-transparent shadow-md blur-[2px]";
      default:
        return "";
    }
  };

  return (
    <>
      <section className="hero-section flex items-start flex-col lg:flex-row justify-between bg-white mx-auto w-full px-6 md:px-11 max-w-6xl pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden gap-12 lg:gap-8">
        {/* Left Div (Unchanged) */}
        <div className="left flex-1">
          <div>
            <p className="uppercase text-secondary text-[12px]">
              Your Technical Partner for the Web
            </p>
          </div>
          <div className="py-4">
            <p className="text-[42px] sm:text-[72px] font-semibold">
              We Create
            </p>
            <div className="flex items-center gap-5">
              <span className="w-[54px] h-[52px] bg-primary font-semibold"></span>
              <p className="text-[42px] sm:text-[72px] text-secondary font-semibold leading-[1]">
                Awesome
              </p>
            </div>
            <p className="text-[42px] sm:text-[72px] font-semibold">
              Websites.
            </p>
          </div>
          <div className="pb-4">
            <p className="text-[14px] sm:text-[16px] text-secondary max-w-[606px]">
              Agencies over-complicate things. We cut the noise. By handling
              your entire ecosystem—from brand identity to custom development
              and SEO—we build exactly what matters, launching your business
              faster for real-world traffic.
            </p>
          </div>
          <div className="pt-4 flex items-center gap-5">
            <button className="bg-[#233DFF] text-white w-[136px] h-[40px] cursor-pointer transition-colors">
              Start a project
            </button>
            <button className="text-secondary w-[136px] h-[40px] cursor-pointer transition-colors border border-secondary">
              See our work
            </button>
          </div>
        </div>

        {/* Right Div - Cascading Depth Carousel */}
        <div className="right hidden sm:flex mt-4 flex-1 justify-center lg:justify-end items-center">
          {/* Container needs enough padding/margin so the shifted cubes don't get cut off */}
          <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-square pr-[30%] pb-[30%]">
            {cubes.map((content, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-[80%] h-[80%] flex justify-center items-center font-semibold text-[40px] md:text-[52px] transition-all duration-700 ease-in-out ${getStackClass(
                  index,
                )}`}
              >
                <span
                  className={`transition-opacity duration-500 ${
                    (index - activeIndex + cubes.length) % cubes.length === 0
                      ? "opacity-100 delay-300"
                      : "opacity-0"
                  }`}
                >
                  {content}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section bg-[#F8FAFC]">
      <div className="flex items-start flex-col lg:flex-row justify-between mx-auto w-full px-6 md:px-11 max-w-6xl pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden gap-12 lg:gap-8">
        <div className="left flex-1">
          <div>
            <p className="uppercase text-secondary text-[12px]">
              What We Deliver
            </p>
          </div>
          <div className="py-8">
            <p className="text-primary text-[36px] sm:text-[50px] max-w-[706px] leading-[1.2] font-[140]">
              From your visual identity to your launch strategy. We provide the
              complete digital toolkit to get your business off the ground.
            </p>
          </div>
          {/* <div className="service-grid flex flex-col gap-5">
          <div className="service-grid-top flex flex-col sm:flex-row sm:justify-center sm:items-center items-center gap-5">
          <div className="w-[300px] h-[300px] bg-[#C1E1FF] p-4 flex flex-col justify-between">
          <p className="text-[12px] text-secondary">01</p>
          <div className="flex flex-col gap-5 pb-5">
          <p className="text-[18px]">High-Performance Websites</p>
          <p className="text-[12px] text-secondary">We build responsive, conversion-focused digital storefronts engineered for immediate impact.</p>
          </div>
          </div>
          <div className="w-[300px] h-[300px] bg-[#FDF2F8] p-4 flex flex-col justify-between">
          <p className="text-[12px] text-secondary">02</p>
          <div className="flex flex-col gap-5 pb-5">
          <p className="text-[18px]">Brand Identity</p>
          <p className="text-[12px] text-secondary">We deliver complete visual systems and professional logos to ensure absolute brand consistency.</p>
          </div>
          </div>
          <div className="w-[300px] h-[300px] bg-[#F0FDF4] p-4 flex flex-col justify-between">
          <p className="text-[12px] text-secondary">03</p>
          <div className="flex flex-col gap-5 pb-5">
          <p className="text-[18px]">SEO Revitalization</p>
          <p className="text-[12px] text-secondary">We upgrade your existing architecture with technical SEO strategies to dominate search rankings.</p>
          </div>
          </div>
          </div>
          <div className="service-grid-bottom flex items-center gap-5">
          <div className="w-[460px] h-[300px] bg-[#FDEFDD] p-4 flex flex-col justify-between">
          <p className="text-[12px] text-secondary">04</p>
          <div className="flex flex-col gap-5 pb-5">
          <p className="text-[18px]">Social Media Kick-Start</p>
          <p className="text-[12px] text-secondary max-w-[350px]">We ignite audience growth with a 30-day custom content campaign for your social channels.</p>
          </div>
          </div>
          <div className="w-[460px] h-[300px] bg-primary p-4 flex flex-col justify-between">
          <p className="text-[12px] text-white">05</p>
          <div className="flex flex-col gap-5 pb-5">
          <p className="text-[18px] text-white">Custom Web Software & SaaS</p>
          <p className="text-[12px] text-stone-200 max-w-[350px]">We engineer robust, data-driven web applications and custom software for complex business needs.</p>
          </div>
          </div>
          </div>
        </div> */}
          <div className="service-grid flex flex-col gap-5 mt-5">
            {/* Top Row */}
            <div className="service-grid-top flex flex-wrap items-center gap-5">
              <div className="w-full max-w-full md:max-w-[300px] h-[300px] bg-[#C1E1FF] p-4 flex flex-col justify-between">
                <p className="text-[12px] text-secondary">01</p>
                <div className="flex flex-col gap-5 pb-5">
                  <p className="text-[18px]">High-Performance Websites</p>
                  <p className="text-[12px] text-secondary">
                    We build responsive, conversion-focused digital storefronts
                    engineered for immediate impact.
                  </p>
                </div>
              </div>

              <div className="w-full max-w-full md:max-w-[300px] h-[300px] bg-[#FDF2F8] p-4 flex flex-col justify-between">
                <p className="text-[12px] text-secondary">02</p>
                <div className="flex flex-col gap-5 pb-5">
                  <p className="text-[18px]">Brand Identity</p>
                  <p className="text-[12px] text-secondary">
                    We deliver complete visual systems and professional logos to
                    ensure absolute brand consistency.
                  </p>
                </div>
              </div>

              <div className="w-full max-w-full md:max-w-[620px] lg:max-w-[300px] h-[300px] bg-[#F0FDF4] p-4 flex flex-col justify-between">
                <p className="text-[12px] text-secondary">03</p>
                <div className="flex flex-col gap-5 pb-5">
                  <p className="text-[18px]">SEO Revitalization</p>
                  <p className="text-[12px] text-secondary">
                    We upgrade your existing architecture with technical SEO
                    strategies to dominate search rankings.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="service-grid-bottom flex flex-wrap items-center gap-5">
              <div className="w-full max-w-full md:max-w-[620px] lg:max-w-[460px] h-[300px] bg-[#FDEFDD] p-4 flex flex-col justify-between">
                <p className="text-[12px] text-secondary">04</p>
                <div className="flex flex-col gap-5 pb-5">
                  <p className="text-[18px]">Social Media Kick-Start</p>
                  <p className="text-[12px] text-secondary max-w-[350px]">
                    We ignite audience growth with a 30-day custom content
                    campaign for your social channels.
                  </p>
                </div>
              </div>

              <div className="w-full max-w-full md:max-w-[620px] lg:max-w-[460px] h-[300px] bg-primary p-4 flex flex-col justify-between">
                <p className="text-[12px] text-white">05</p>
                <div className="flex flex-col gap-5 pb-5">
                  <p className="text-[18px] text-white">
                    Custom Web Software & SaaS
                  </p>
                  <p className="text-[12px] text-stone-200 max-w-[350px]">
                    We engineer robust, data-driven web applications and custom
                    software for complex business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className="work-section mx-auto w-full px-6 md:px-11 max-w-6xl pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden gap-12 lg:gap-8">
        <div>
          <p className="uppercase text-secondary text-[12px]">
            our recent work
          </p>
        </div>
        <div className="py-8 flex flex-col lg:flex-row gap-5 justify-between lg:items-baseline-last">
          <p className="text-primary text-[36px] sm:text-[50px] max-w-[706px] leading-[1.2] font-[140]">
            Built for scale. Designed for impact. See how our digital ecosystems
            perform in the real world.
          </p>
          <a href="#" className="text-secondary">
            View all case studies &rarr;
          </a>
        </div>
        <div className="projet-grid flex flex-wrap lg:flex-nowrap gap-5">
          <div className="project-card-1 p-4 sm:p-8 flex flex-col justify-between gap-2 max-w-[586px] bg-[#F8FAFC] [clip-path:polygon(0_0,35%_0,45%_10%,100%_10%,100%_100%,0_100%)]">
            <div className="card-top">
              <div>
                <p className="text-[12px] text-secondary">E-Commerce</p>
              </div>
              <div className="mt-8">
                <p className="text-[24px] sm:text-[38px]">
                  High-Performance Digital Storefront
                </p>
              </div>
              <div>
                <p className="text-[14px] sm:text-[18px] text-secondary italic">
                  Engineered for maximum visibility and frictionless conversion
                  for premium athletic gear.
                </p>
              </div>
              <div className="mt-8">
                <p className="text-secondary text-[14px] sm:text-[18px]">
                  Features a proprietary, role-isolated admin dashboard for
                  real-time inventory control and a bespoke analytics engine
                  tracking precise user click journeys. We bypassed traditional
                  payment gateways in favor of a streamlined, direct-to-WhatsApp
                  sales funnel, backed by flawless technical SEO with 100% index
                  crawlability.
                </p>
              </div>
            </div>
            <div className="card-bottom flex flex-col gap-8 mt-8">
              <div className="flex gap-5 text-[10px] text-secondary">
                <span className="border p-1 border-secondary">
                  Next.js Architecture
                </span>
                <span className="border p-1 border-secondary">
                  Proprietary Analytics Engine
                </span>
                <span className="border p-1 border-secondary">
                  Live in production
                </span>
              </div>
              <div>
                <a
                  href="#"
                  className="text-secondary text-[14px] sm:text-[18px]"
                >
                  Read the case study &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="project-card-2 p-4 sm:p-8 flex flex-col justify-between gap-2 max-w-[586px] bg-[#F8FAFC] [clip-path:polygon(0_0,35%_0,45%_10%,100%_10%,100%_100%,0_100%)]">
            <div className="card-top">
              <div>
                <p className="text-[12px] text-secondary">E-Commerce</p>
              </div>
              <div className="mt-8">
                <p className="text-[24px] sm:text-[38px]">
                  High-Performance Digital Storefront
                </p>
              </div>
              <div>
                <p className="text-[14px] sm:text-[18px] text-secondary italic">
                  Engineered for maximum visibility and frictionless conversion
                  for premium athletic gear.
                </p>
              </div>
              <div className="mt-8">
                <p className="text-secondary text-[14px] sm:text-[18px]">
                  Features a proprietary, role-isolated admin dashboard for
                  real-time inventory control and a bespoke analytics engine
                  tracking precise user click journeys. We bypassed traditional
                  payment gateways in favor of a streamlined, direct-to-WhatsApp
                  sales funnel, backed by flawless technical SEO with 100% index
                  crawlability.
                </p>
              </div>
            </div>
            <div className="card-bottom flex flex-col gap-8 mt-8">
              <div className="flex gap-5 text-[10px] text-secondary">
                <span className="border p-1 border-secondary">
                  Next.js Architecture
                </span>
                <span className="border p-1 border-secondary">
                  Proprietary Analytics Engine
                </span>
                <span className="border p-1 border-secondary">
                  Live in production
                </span>
              </div>
              <div>
                <a
                  href="#"
                  className="text-secondary text-[14px] sm:text-[18px]"
                >
                  Read the case study &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plan-section bg-[#F8FAFC]">
        <div className="mx-auto w-full px-6 md:px-11 max-w-6xl pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden gap-12 lg:gap-8">
        <div>
          <p className="uppercase text-secondary text-[12px]">how we start</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 py-8">
          <div className="flex-1 justify-between flex flex-col gap-12 pb-2">
            <div className="flex flex-col gap-5">
              <p className="text-primary text-[36px] sm:text-[50px] max-w-[706px] leading-[1.2] font-[140]">
                Plan first. Build second.
              </p>
              <p className="text-[20px] max-w-[350px] text-secondary">
                We start by simplifying your vision. Next, we map out the exact
                steps to get there. Then, we build a fast, high-quality version
                of your product so you can test it with the real world before
                committing to the next phase.
              </p>
            </div>
            <button className="bg-primary text-white w-[136px] h-[40px] cursor-pointer transition-colors">
              Start a project
            </button>
          </div>

          {/* sadfsdf */}
          <div className="flex-1 py-2 mt-5 md:mt-0">
            <div className="relative">
              {/* Continuous Vertical Line */}
              <div className="absolute left-[9px] top-0 bottom-0 w-[2px] bg-secondary/50"></div>

              {/* Timeline Items Container */}
              <div className="flex flex-col gap-8">
                {/* Step 1 */}
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 w-[20px] h-[20px] bg-primary shrink-0"></div>
                  <div className="flex flex-col gap-2.5">
                    <p className="text-[12px] uppercase tracking-wider text-secondary">
                      DAY 1
                    </p>
                    <h3 className="text-[20px] leading-none">Discovery call</h3>
                    <p className="text-[16px] text-secondary leading-relaxed">
                      30 minutes this week. No slides. No pitch deck.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 w-[20px] h-[20px] bg-primary shrink-0"></div>
                  <div className="flex flex-col gap-2.5">
                    <p className="text-[12px] uppercase tracking-wider text-secondary">
                      WITHIN 3 BUSINESS DAYS
                    </p>
                    <h3 className="text-[20px] leading-none">
                      Scope & proposal
                    </h3>
                    <p className="text-[16px] text-secondary leading-relaxed">
                      A plan you can build with us — or with anyone else.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 w-[20px] h-[20px] bg-primary shrink-0"></div>
                  <div className="flex flex-col gap-2.5">
                    <p className="text-[12px] uppercase tracking-wider text-secondary">
                      WEEK 1
                    </p>
                    <h3 className="text-[20px] leading-none">Kickoff</h3>
                    <p className="text-[16px] text-secondary leading-relaxed">
                      Team in place, infra up, first code in main.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 w-[20px] h-[20px] bg-primary shrink-0"></div>
                  <div className="flex flex-col gap-2.5">
                    <p className="text-[12px] uppercase tracking-wider text-secondary">
                      WEEK 3
                    </p>
                    <h3 className="text-[20px] leading-none">
                      First working demo
                    </h3>
                    <p className="text-[16px] text-secondary leading-relaxed">
                      Something you can click on. Not a Figma link.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="testimonial-section flex flex-col justify-center items-center mx-auto w-full px-6 md:px-11 max-w-6xl pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden gap-12 lg:gap-8">
        <div>
          <p className="uppercase text-secondary text-[12px]">
            Why founders trust us
          </p>
        </div>
        <div className="pb-5">
          <p className="text-primary text-center text-[36px] sm:text-[50px] max-w-[806px] leading-[1.2] font-[140]">
            “We never pad the scope. We’d rather simplify the architecture and
            earn your trust.”
          </p>
        </div>
        <TestimonialMarquee />
      </section>

      <section className="cta-section flex flex-col justify-center items-center mx-auto w-full px-6 md:px-11 max-w-6xl pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden gap-12 lg:gap-8">
        <div className="cta-container flex flex-col gap-5 p-8 lg:p-15 w-full bg-[#F8FAFC]">
          <div>
            <p className="text-[12px] text-secondary uppercase">
              Ready to talk?
            </p>
          </div>
          <div className="max-w-[755px]">
            <p className="text-primary text-[36px] sm:text-[50px] max-w-[806px] leading-[1.2] font-[140]">
              Tell us what you're trying to build.
            </p>
          </div>
          <div className="max-w-[605px]">
            <p className="text-[22px] text-secondary">
              We reply within one business day. Discovery calls this week. Small pilots welcome.
            </p>
          </div>
          <div className="pt-4 flex flex-col md:flex-row items-start gap-5">
            <button className="bg-primary text-white w-[200px] sm:w-[136px] h-[40px] cursor-pointer transition-colors">
              Start a project
            </button>
            <button className="text-secondary w-[200px] sm:w-[136px] h-[40px] cursor-pointer transition-colors border border-secondary">
              See our work
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
