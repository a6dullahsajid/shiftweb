"use client";

import { useState, useEffect } from "react";

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
          <p className="text-[42px] sm:text-[72px] font-semibold">We Create</p>
          <div className="flex items-center gap-5">
            <span className="w-[54px] h-[52px] bg-primary font-semibold"></span>
            <p className="text-[42px] sm:text-[72px] text-secondary font-semibold leading-[1]">
              Awesome
            </p>
          </div>
          <p className="text-[42px] sm:text-[72px] font-semibold">Websites.</p>
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
                index
              )}`}
            >
              <span className={`transition-opacity duration-500 ${
                (index - activeIndex + cubes.length) % cubes.length === 0 ? "opacity-100 delay-300" : "opacity-0"
              }`}>
                {content}
              </span>
            </div>
          ))}
          
        </div>
      </div>
      
    </section>

    <section className="services-section flex items-start flex-col lg:flex-row justify-between bg-white mx-auto w-full px-6 md:px-11 max-w-6xl pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden gap-12 lg:gap-8">
      <div className="left flex-1">
        <div>
          <p className="uppercase text-secondary text-[12px]">
           What We Deliver
          </p>
        </div>
        <div className="py-8">
          <p className="text-primary text-[36px] sm:text-[50px] max-w-[606px] leading-[1.2] font-[140]">From your visual identity to your launch strategy. We provide the complete digital toolkit to get your business off the ground.</p>
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
          We build responsive, conversion-focused digital storefronts engineered for immediate impact.
        </p>
      </div>
    </div>
    
    <div className="w-full max-w-full md:max-w-[300px] h-[300px] bg-[#FDF2F8] p-4 flex flex-col justify-between">
      <p className="text-[12px] text-secondary">02</p>
      <div className="flex flex-col gap-5 pb-5">
        <p className="text-[18px]">Brand Identity</p>
        <p className="text-[12px] text-secondary">
          We deliver complete visual systems and professional logos to ensure absolute brand consistency.
        </p>
      </div>
    </div>
    
    <div className="w-full max-w-full md:max-w-[620px] lg:max-w-[300px] h-[300px] bg-[#F0FDF4] p-4 flex flex-col justify-between">
      <p className="text-[12px] text-secondary">03</p>
      <div className="flex flex-col gap-5 pb-5">
        <p className="text-[18px]">SEO Revitalization</p>
        <p className="text-[12px] text-secondary">
          We upgrade your existing architecture with technical SEO strategies to dominate search rankings.
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
          We ignite audience growth with a 30-day custom content campaign for your social channels.
        </p>
      </div>
    </div>
    
    <div className="w-full max-w-full md:max-w-[620px] lg:max-w-[460px] h-[300px] bg-primary p-4 flex flex-col justify-between">
      <p className="text-[12px] text-white">05</p>
      <div className="flex flex-col gap-5 pb-5">
        <p className="text-[18px] text-white">Custom Web Software & SaaS</p>
        <p className="text-[12px] text-stone-200 max-w-[350px]">
          We engineer robust, data-driven web applications and custom software for complex business needs.
        </p>
      </div>
    </div>

  </div>
  
</div>
      </div>
    </section>
    </>
  );
};

export default Hero;