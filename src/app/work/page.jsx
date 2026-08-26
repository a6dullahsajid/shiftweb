import ProjectCard from "../components/ProjectCard";

import kickxwear from "../assets/kickxwear.png";
import menuBar from "../assets/menu-bar.png";
import oasisTrends from "../assets/oasistrends.png";
import portexa from "../assets/portexa.png";

const projects = [
  {
    number: "01",
    title: "Kickxwear",
    category: "E-commerce",
    services: ["Next.js", "Development", "SEO"],
    image: kickxwear,
    href: "/work/kickxwear",
    featured: true,
  },
  {
    number: "02",
    title: "Menu Bar",
    category: "Website",
    services: ["Web Design", "Development"],
    image: menuBar,
    href: "/work/menu-bar",
  },
  {
    number: "03",
    title: "Oasis Trends",
    category: "E-commerce",
    services: ["Web Design", "Development"],
    image: oasisTrends,
    href: "/work/oasis-trends",
  },
  {
    number: "04",
    title: "Portexa",
    category: "Website",
    services: ["Development", "SEO"],
    image: portexa,
    href: "/work/portexa",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* =========================================
          INTRO
      ========================================== */}

      <section className="mx-auto px-14 py-10 md:px-16 md:py-8 lg:py-12 lg:px-40">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT */}
          <div className="flex flex-col justify-start">
            <p className="mb-2 md:mb-7 text-sm font-semibold uppercase tracking-wide text-primary">
              Our work
            </p>

            <h1
              className="
                text-5xl
                font-semibold
                leading-[0.9]
                tracking-[-0.045em]
                sm:text-7xl
                lg:text-[86px]
              "
            >
              Selected
              <br />
              <span className="text-primary">work.</span>
            </h1>

            <p
              className="
                mt-3
                max-w-md
                text-lg
                leading-8
                text-slate-500
                lg:text-xl
              "
            >
              Websites, brands and digital experiences built for real-world
              traffic.
            </p>

            {/* FILTERS */}
            <div className="mt-3 md:mt-12 flex flex-wrap gap-1 md:gap-3">
              <button
                className="
                  border
                  border-primary
                  bg-primary
                  px-5
                  md:px-6
                  md:py-3
                  text-xs
                  md:text-sm
                  font-medium
                  text-white
                  transition-opacity
                  hover:opacity-90
                "
              >
                All
              </button>

              <button
                className="
                  border
                  border-slate-300
                  bg-white
                  px-6
                  py-3
                  text-sm
                  text-slate-600
                  transition-colors
                  hover:border-black
                  hover:text-black
                "
              >
                Websites
              </button>

              <button
                className="
                  border
                  border-slate-300
                  bg-white
                  px-6
                  py-3
                  text-sm
                  text-slate-600
                  transition-colors
                  hover:border-black
                  hover:text-black
                "
              >
                E-commerce
              </button>

              <button
                className="
                  border
                  border-slate-300
                  bg-white
                  px-6
                  py-3
                  text-sm
                  text-slate-600
                  transition-colors
                  hover:border-black
                  hover:text-black
                "
              >
                Branding
              </button>
            </div>
          </div>

          {/* =========================================
              FEATURED PROJECT
          ========================================== */}

          <div className="lg:pt-1">
            <ProjectCard {...projects[0]} />
          </div>
        </div>
      </section>

      {/* =========================================
          OTHER PROJECTS
      ========================================== */}

      <section className="mx-auto px-16 md:p-12 lg:px-40">
        <div className="grid grid-cols-1 gap-x-28 gap-y-24 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(1).map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================== */}

      <section className="border-t border-slate-200">
        <div
          className="
            mx-auto
            max-w-[1400px]
            px-6
            py-28
            md:px-10
            lg:px-16
          "
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-primary">
            Have a project in mind?
          </p>

          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <h2
              className="
                max-w-3xl
                text-4xl
                font-semibold
                leading-[0.95]
                tracking-[-0.04em]
                md:text-7xl
              "
            >
              Let&apos;s build
              <br />
              something
              <span className="text-primary pl-2">awesome.</span>
            </h2>

            <a
              href="#"
              className="
                inline-flex
                w-fit
                items-center
                bg-primary
                px-7
                py-4
                text-base
                font-medium
                text-white
                transition-opacity
                hover:opacity-90
              "
            >
              Start a project →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
