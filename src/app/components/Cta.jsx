import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <div className="cta-container flex flex-col gap-5 p-8 lg:p-15 w-full bg-primary">
      <div>
        <p className="text-[12px] text-slate-300 uppercase">Ready to talk?</p>
      </div>
      <div className="max-w-[755px]">
        <p className="text-white text-[36px] sm:text-[50px] max-w-[806px] leading-[1.2] font-[140]">
          Tell us what you're trying to build.
        </p>
      </div>
      <div className="max-w-[605px]">
        <p className="text-[22px] text-slate-300">
          We reply within one business day. Discovery calls this week. Small
          pilots welcome.
        </p>
      </div>
      <div className="pt-4 flex flex-col md:flex-row items-start gap-5">
        <button className="bg-white text-black hover:bg-gray-200 w-[200px] sm:w-[136px] h-[40px] cursor-pointer transition-colors">
          Start a project
        </button>

        <Link href = "/work">
        <button className="text-white hover:bg-white hover:text-primary w-[200px] sm:w-[136px] h-[40px] cursor-pointer transition-colors border border-white">
          See our work
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
