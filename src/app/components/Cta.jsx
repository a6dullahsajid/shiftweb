import React from "react";

const Cta = () => {
  return (
    // <div className="cta-container flex flex-col gap-5 p-8 lg:p-15 w-full bg-[#F8FAFC]">
    //   <div>
    //     <p className="text-[12px] text-secondary uppercase">Ready to talk?</p>
    //   </div>
    //   <div className="max-w-[755px]">
    //     <p className="text-primary text-[36px] sm:text-[50px] max-w-[806px] leading-[1.2] font-[140]">
    //       Tell us what you're trying to build.
    //     </p>
    //   </div>
    //   <div className="max-w-[605px]">
    //     <p className="text-[22px] text-secondary">
    //       We reply within one business day. Discovery calls this week. Small
    //       pilots welcome.
    //     </p>
    //   </div>
    //   <div className="pt-4 flex flex-col md:flex-row items-start gap-5">
    //     <button className="bg-primary text-white w-[200px] sm:w-[136px] h-[40px] cursor-pointer transition-colors">
    //       Start a project
    //     </button>
    //     <button className="text-secondary w-[200px] sm:w-[136px] h-[40px] cursor-pointer transition-colors border border-secondary">
    //       See our work
    //     </button>
    //   </div>
    // </div>
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
        <button className="bg-white text-black w-[200px] sm:w-[136px] h-[40px] cursor-pointer transition-colors">
          Start a project
        </button>
        <button className="text-white w-[200px] sm:w-[136px] h-[40px] cursor-pointer transition-colors border border-white">
          See our work
        </button>
      </div>
    </div>
  );
};

export default Cta;
