import Link from "next/link";
import Cta from "../components/Cta";

const principles = [
  {
    number: "01",
    title: "Clarity before code",
    description:
      "We turn a broad idea into a focused brief, a realistic scope, and a build plan your team can actually use.",
  },
  {
    number: "02",
    title: "Useful by default",
    description:
      "Every page and interaction has a job: explain the offer, build trust, or move the right person forward.",
  },
  {
    number: "03",
    title: "Built to keep moving",
    description:
      "We leave you with a fast foundation that can grow with your business instead of becoming a bottleneck.",
  },
];

const capabilities = [
  "Brand identity",
  "High-performance websites",
  "Product and service pages",
  "SEO foundations",
  "Custom web software",
  "Analytics and enquiry systems",
];

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 overflow-hidden px-6 pb-20 pt-14 md:px-10 lg:flex-row lg:items-end lg:gap-16">
        <div className="flex-1">
          <p className="uppercase text-[12px] text-secondary">
            About Shift Web
          </p>
          <h1 className="max-w-[820px] py-6 text-[42px] font-semibold leading-[1.05] text-primary sm:text-[72px]">
            The technical partner behind your next shift.
          </h1>
          <p className="max-w-[650px] text-[16px] leading-relaxed text-secondary sm:text-[20px]">
            Shift Web helps ambitious businesses make sense of the web. We
            combine sharp positioning, thoughtful design, and dependable
            engineering to create digital systems that are ready for real
            customers.
          </p>
        </div>

        <div className="grid w-full max-w-[360px] grid-cols-2 gap-px border border-secondary/20 bg-secondary/20 lg:mb-2">
          <div className="flex aspect-square flex-col justify-between bg-primary p-5 text-white">
            <span className="text-[12px] text-slate-300">EST.</span>
            <span className="text-[40px] font-semibold leading-none">24</span>
          </div>
          <div className="flex aspect-square flex-col justify-between bg-[#F8FAFC] p-5 text-primary">
            <span className="text-[12px] text-secondary">FOCUS</span>
            <span className="text-[18px] font-semibold leading-tight">
              Business<br />growth
            </span>
          </div>
          <div className="col-span-2 flex min-h-[116px] items-end justify-between bg-white p-5">
            <span className="max-w-[180px] text-[14px] leading-relaxed text-secondary">
              Strategy, design, development, and SEO in one focused team.
            </span>
            <span className="text-[34px] font-semibold text-primary">↗</span>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
          <div>
            <p className="uppercase text-[12px] text-secondary">Why we exist</p>
            <h2 className="mt-6 max-w-[420px] text-[36px] leading-[1.15] text-primary sm:text-[50px]">
              Less noise. More momentum.
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-[18px] leading-relaxed text-secondary sm:text-[22px]">
            <p>
              Most businesses do not need another complicated agency process.
              They need someone who can understand the problem, make the right
              decisions, and ship a useful first version quickly.
            </p>
            <p>
              That is the role we built Shift Web to play. We work closely,
              explain the trade-offs, and keep the work connected to outcomes
              instead of outputs.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-6 border-b border-secondary/30 pb-8 md:flex-row md:items-end">
          <div>
            <p className="uppercase text-[12px] text-secondary">How we work</p>
            <h2 className="mt-5 max-w-[650px] text-[36px] leading-[1.15] text-primary sm:text-[50px]">
              A small team with a serious standard.
            </h2>
          </div>
          <p className="max-w-[300px] text-[14px] leading-relaxed text-secondary">
            Clear communication, direct collaboration, and no unnecessary
            layers between the problem and the person solving it.
          </p>
        </div>

        <div className="grid gap-5 pt-8 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="flex min-h-[270px] flex-col justify-between border border-secondary/20 bg-white p-5"
            >
              <span className="text-[12px] text-secondary">{principle.number}</span>
              <div className="flex flex-col gap-4">
                <h3 className="text-[22px] text-primary">{principle.title}</h3>
                <p className="text-[14px] leading-relaxed text-secondary">
                  {principle.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
          <div>
            <p className="uppercase text-[12px] text-slate-300">What we bring</p>
            <h2 className="mt-6 max-w-[430px] text-[36px] leading-[1.15] sm:text-[50px]">
              Everything your next stage needs.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className="flex items-center justify-between border-b border-white/25 py-5 text-[16px]"
              >
                <span className="text-slate-100">{capability}</span>
                <span className="text-[12px] text-slate-300">0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 lg:py-24">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="uppercase text-[12px] text-secondary">The first step</p>
            <h2 className="mt-6 max-w-[400px] text-[36px] leading-[1.15] text-primary sm:text-[50px]">
              Bring us the messy version.
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <p className="max-w-[620px] text-[20px] leading-relaxed text-secondary sm:text-[26px]">
              You do not need a perfect brief before reaching out. Tell us what
              is not working, where you want to go, and what has to change.
            </p>
            <Link
              href="/#plan"
              className="w-fit border-b border-primary pb-2 text-[14px] text-primary transition-colors hover:border-secondary hover:text-secondary"
            >
              See how we start a project <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-10 lg:pb-24">
        <Cta />
      </section>
    </main>
  );
}