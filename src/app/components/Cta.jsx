import React from "react";
import Link from "next/link";
import StartProjectButton from "./StartProjectButton";

const Cta = () => {
  return (
    <div className="cta-container flex flex-col gap-3 md:gap-5 p-8 lg:p-15 w-full bg-primary">
      <div>
        <p className="text-[12px] text-slate-300 uppercase">Ready to talk?</p>
      </div>
      <div className="max-w-[755px]">
        <h2 className="text-white text-[36px] sm:text-[50px] max-w-[806px] leading-[1.2] font-[140]">
          Tell us what you&apos;re trying to build.
        </h2>
      </div>
      <div className="max-w-[605px]">
        <p className="text-base md:text-lg my-2 md:my-6 text-slate-300">
          We reply within one business day. Discovery calls this week. Small
          pilots welcome.
        </p>
      </div>
      <div className="pt-4 flex flex-col md:flex-row items-start gap-5">
        <StartProjectButton className="bg-white text-black hover:bg-gray-200 w-[200px] sm:w-[136px] h-[40px] cursor-pointer transition-colors" />
        <Link href="/work" className="flex items-center justify-center text-white hover:bg-white hover:text-primary w-[200px] sm:w-[136px] h-[40px] cursor-pointer transition-colors border border-white">
          See our work
        </Link>
      </div>
    </div>
  );
};

export default Cta;
