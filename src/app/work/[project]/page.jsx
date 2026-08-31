import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import projects from "../../data/work";

export async function generateStaticParams() {
  return projects.map((project) => ({
    project: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { project } = await params;

  const data = projects.find((item) => item.slug === project);

  if (!data) {
    return {
      title: "Project Not Found | Shift Web",
    };
  }

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
  };
}

export default async function ProjectPage({ params }) {
  const { project } = await params;

  const data = projects.find((item) => item.slug === project);

  if (!data) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project);

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className=" text-black mx-auto w-full px-6 md:px-11 max-w-6xl pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden gap-12 lg:gap-8">
      <section>
        <div className="Navbar flex gap-2 text-[12px] text-secondary">
          <Link href={"/"}>
            <p className="hover:text-black">Home</p>
          </Link>
          <p>/</p>
          <Link href={"/work"}>
            <p className="hover:text-black">Work</p>
          </Link>
          <p>/</p>
          <p className="text-black">{data.title}</p>
        </div>

        {/* Title + description */}
        <div className="flex flex-col-reverse md:flex-row justify-between align-top my-15 gap-10">
          <div className="pb-2 left flex flex-col justify-between">
            <div>
              <div>
                <h1
                  className="
                text-4xl
                font-semibold
                leading-[0.95]
                tracking-[-0.04em]
                sm:text-4xl
                md:text-5xl
                lg:text-[76px]
              "
                >
                  {data.title}
                  <span className="inline-block w-2 h-2 bg-primary ml-1"></span>
                </h1>
              </div>

              <div className="max-w-xl lg:pb-1 mt-5 ">
                <p className="text-lg max-w-[516px] leading-8 text-secondary">
                  {data.shortDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-2 text-sm text-secondary">
                  {data.services.map((service, index) => (
                    <span key={service}>
                      {service}

                      {index < data.services.length - 1 && (
                        <span className="ml-2 text-slate-300">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {data.links.live && (
              <div className="mt-8">
                <a
                  href={data.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                inline-flex
                items-center
                gap-3
                bg-primary
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition-opacity
                hover:opacity-90
              "
                >
                  Visit live website
                  <span>↗</span>
                </a>
              </div>
            )}
          </div>

          {/* Actual project */}
          <div className="max-w-[350px] lg:max-w-[450px] ">
            <Image
              src={data.image}
              alt={`${data.title} website`}
              loading="eager"
            />

            {/* <div className="absolute bottom-0 w-full h-[120px] backdrop-blur-md bg-white/20 [mask-image:linear-gradient(to_bottom,transparent_0%,black_100%)] pointer-events-none z-10"></div> */}
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK PROJECT INFO
      ====================================================== */}

      <section className="border-y border-slate-200">
        <div className="mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="border-r border-slate-200 py-8 pr-6 lg:pr-10">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Project
              </p>

              <p className="mt-2 text-base font-medium">{data.projectType}</p>
            </div>

            <div className="lg:border-r border-slate-200 py-8 pl-6 lg:px-10">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Year
              </p>

              <p className="mt-2 text-base font-medium">{data.year}</p>
            </div>

            <div className="border-r border-slate-200 py-8 pl-0 lg:px-10">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Services
              </p>

              <p className="mt-2 text-base font-medium">
                {data.services.length}
              </p>
            </div>

            <div className="py-8 pl-6 lg:pl-10">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Built with
              </p>

              <p className="mt-2 text-base font-medium">{data.techStack[0]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto px-6 py-24 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              About the project
            </p>
          </div>
          <div className="max-w-3xl">
            <p className="text-2xl leading-10 tracking-tight text-slate-600 md:text-3xl md:leading-[1.5]">
              {data.shortDescription}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="mx-auto px-6 py-24 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                01 — Challenge
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                The problem
              </h2>

              <div className="mt-8 space-y-5">
                {data.problem.map((item) => (
                  <p key={item} className="text-lg leading-8 text-slate-500">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                02 — Solution
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                The approach
              </h2>

              <div className="mt-8 space-y-5">
                {data.solution.map((item) => (
                  <p key={item} className="text-lg leading-8 text-slate-500">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto px-6 py-24 md:px-10 lg:px-16">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            03 — What we built
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Built for the real world.
          </h2>
        </div>

        <div className="grid border-t border-slate-200 md:grid-cols-2 lg:grid-cols-3">
          {data.features.map((feature, index) => (
            <div key={feature} className="border-b border-slate-200 py-8 pr-8">
              <span className="text-sm text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-8 text-lg font-medium">{feature}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="border-y border-slate-200">
        <div className="mx-auto px-6 py-24 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                04 — Technology
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                The stack
              </h2>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {data.techStack.map((technology) => (
                <span key={technology} className="text-xl font-medium">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto px-6 py-24 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              05 — Outcome
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              The result
            </h2>
          </div>

          <div>
            {data.results.map((result, index) => (
              <div
                key={result}
                className="flex gap-6 border-t border-slate-200 py-6"
              >
                <span className="text-sm text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-lg text-slate-600">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NEXT PROJECT
      ====================================================== */}

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 lg:px-16">
          <p className="text-sm uppercase tracking-[0.15em] text-secondary">
            Next project
          </p>

          <Link
            href={`/work/${nextProject.slug}`}
            className="group mt-6 flex items-center justify-between text-black hover:text-primary transition-all delay-75"
          >
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-7xl">
              {nextProject.title}
              <span className="text-white/50">.</span>
            </h2>

            <span className="text-3xl transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
