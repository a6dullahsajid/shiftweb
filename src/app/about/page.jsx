import Link from "next/link";
import Cta from "../components/Cta";

const principles = [
  {
    number: "01",
    title: "Engineering First",
    description:
      "Beautiful design means nothing if the underlying architecture is fragile. We build on modern, robust stacks to ensure your platform handles scale, speed, and complexity from day one.",
  },
  {
    number: "02",
    title: "Relentless Optimization",
    description:
      "Every millisecond counts. We engineer ecosystems optimized for zero-latency data processing, flawless Lighthouse scores, and seamless user experiences.",
  },
  {
    number: "03",
    title: "Purposeful Minimalism",
    description:
      "We strip away the noise. No bloated codebases, no unnecessary plugins, and no visual clutter. Every element exists to drive conversion or communicate value.",
  },
];

const capabilities = [
  "Full-Stack Web Development",
  "System Architecture & UI/UX",
  "Performance Optimization",
  "Technical SEO Engineering",
  "Headless E-Commerce",
  "Custom Dashboards & Analytics",
];

export default function AboutPage() {
  return (
    <main className="w-full bg-white text-primary">
      {/* 1. HERO SECTION: Left-Aligned, Font-[140] */}
      <section className="w-full flex justify-start border-b border-secondary/10">
        <div className="mx-auto w-full px-6 md:px-10 max-w-6xl pt-14 pb-20 overflow-hidden flex flex-col gap-8 items-start text-left">
          <div>
            <p className="text-[12px] uppercase text-secondary">
              About Shift Web
            </p>
          </div>

          <h1 className="max-w-[1000px] text-[48px] sm:text-[64px] md:text-[80px] font-[140] leading-[1.05] tracking-tight text-primary">
            We build digital ecosystems that refuse to blend in.
          </h1>

          <p className="max-w-[650px] text-[18px] sm:text-[22px] leading-relaxed text-secondary mt-4">
            Shift Web is a technical partner for ambitious brands. We combine
            sharp positioning, purposeful minimalism, and dependable
            engineering.
          </p>
        </div>
      </section>

      {/* 2. THE STORY: Staggered Editorial Layout */}
      <section className="w-full bg-[#F8FAFC] border-b border-secondary/10">
        <div className="w-full mx-auto px-6 md:px-10 max-w-6xl pt-14 pb-20 overflow-hidden flex flex-col gap-16 md:gap-24">
          <h2 className="text-[32px] sm:text-[48px] font-[140] text-primary max-w-[850px] leading-[1.15]">
            Most websites are built for presentations. We build for the wild.
          </h2>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="flex-1 flex flex-col gap-6 text-[18px] sm:text-[20px] leading-[1.7] text-secondary">
              <p>
                Agencies consistently deliver bloated, template-driven sites
                that collapse under real-world traffic. We saw a massive gap
                between aesthetic design and functional engineering.
              </p>
              <p>
                Shift Web was founded to bridge that gap. We approach the web as
                engineers and designers who understand that true digital
                presence requires absolute technical precision.
              </p>
            </div>

            <div className="flex-1 flex flex-col justify-end">
              <div className="border-l-2 border-primary pl-6 sm:pl-10">
                <p className="text-[22px] sm:text-[28px] font-[140] text-primary leading-snug">
                  "We cut the noise, simplify the complex, and build incredibly
                  fast."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PHILOSOPHY: 3-Column Grid */}
      <section className="w-full">
        <div className="mx-auto w-full px-6 md:px-10 max-w-6xl pt-14 pb-20 overflow-hidden flex flex-col gap-16">
          <p className="text-[12px] uppercase text-secondary">Our DNA</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="flex flex-col gap-6 border-t border-secondary/20 pt-8"
              >
                <span className="text-[14px] font-mono tracking-widest text-secondary/50">
                  {principle.number}
                </span>
                <h3 className="text-[24px] sm:text-[28px] font-[140] text-primary tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-secondary/80">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 4. CAPABILITIES: Index Style Layout */}
      <section className="w-full bg-[#F8FAFC]">
        <div className="mx-auto w-full px-6 md:px-10 max-w-6xl pt-14 pb-20 overflow-hidden flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="w-full md:w-1/3 flex flex-col items-start text-left">
            <p className="text-[12px] uppercase text-secondary mb-8">
              Capabilities
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-[140] leading-tight tracking-tight text-primary max-w-[300px]">
              Everything you need to scale.
            </h2>
          </div>

          <div className="w-full md:w-2/3 flex flex-col">
            <div className="border-t border-secondary/20">
              {capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="group flex items-center justify-between border-b border-secondary/20 py-6 transition-all duration-300 hover:pl-6 hover:border-primary"
                >
                  <span className="text-[20px] sm:text-[26px] font-[140] tracking-wide text-secondary transition-colors duration-300 group-hover:text-primary">
                    {capability}
                  </span>
                  <span className="text-[14px] font-mono text-secondary/50 transition-colors duration-300 group-hover:text-primary">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="mx-auto w-full px-6 md:px-10 max-w-6xl pt-14 pb-20 overflow-hidden flex justify-start text-left">
        <Cta />
      </section>
    </main>
  );
}
