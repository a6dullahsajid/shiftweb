"use client";

import { useEffect, useState } from "react";

const cubes = ["Logo", "Website", "Brand kit"];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % cubes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStackClass = (index) => {
    const position = (index - activeIndex + cubes.length) % cubes.length;

    switch (position) {
      case 0:
        return "translate-x-0 translate-y-0 scale-100 z-30 opacity-100 bg-primary text-white shadow-2xl";
      case 1:
        return "translate-x-[15%] translate-y-[15%] scale-90 z-20 opacity-70 bg-[#5A74FF] text-transparent shadow-lg blur-[1px]";
      case 2:
        return "translate-x-[30%] translate-y-[30%] scale-80 z-10 opacity-30 bg-[#5A74FF] text-transparent shadow-md blur-[2px]";
      default:
        return "";
    }
  };

  return (
    <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-square pr-[30%] pb-[30%]">
      {cubes.map((content, index) => (
        <div
          key={content}
          className={`absolute top-0 left-0 w-[80%] h-[80%] flex justify-center items-center font-semibold text-[40px] md:text-[52px] transition-all duration-700 ease-in-out ${getStackClass(index)}`}
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
  );
};

export default HeroCarousel;