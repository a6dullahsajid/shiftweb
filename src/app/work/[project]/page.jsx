import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import projects from "../../data/work";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

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
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const projectUrl = `${siteUrl}/work/${data.slug}`;
  const imageUrl = `${siteUrl}/work/${data.slug}/opengraph-image`;

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    alternates: {
      canonical: projectUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "article",
      url: projectUrl,
      title: data.seo.title,
      description: data.seo.description,
      siteName: "Shift Web",
      images: [
        {
          url: imageUrl,
          width: data.image.width,
          height: data.image.height,
          alt: `${data.title} project preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.seo.title,
      description: data.seo.description,
      images: [imageUrl],
    },
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
  const projectUrl = `${siteUrl}/work/${data.slug}`;
  const imageUrl = `${siteUrl}/work/${data.slug}/opengraph-image`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: data.title,
    headline: data.seo.title,
    description: data.seo.description,
    url: projectUrl,
    image: imageUrl,
    creator: {
      "@type": "Organization",
      name: "Shift Web",
      url: siteUrl,
    },
    provider: {
      "@type": "Organization",
      name: "Shift Web",
      url: siteUrl,
    },
    keywords: data.seo.keywords.join(", "),
    about: data.services,
  };

  return (
    <main className=" text-black mx-auto w-full px-6 md:px-10 max-w-6xl pt-14 pb-20 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
        <div className="flex flex-col-reverse md:flex-row justify-between align-top my-10 gap-10">
          <div className="pb-2 left flex flex-col">
            <div>
              <div>
                <h1
                  className="
                text-3xl
                font-semibold
                leading-[0.95]
                tracking-[-0.04em]
                md:text-5xl
                lg:text-[76px]
              "
                >
                  {data.title}
                  <span className="inline-block w-2 h-2 bg-primary ml-1"></span>
                </h1>
              </div>

              <div className="max-w-xl lg:pb-1 mt-5 ">
                <p className="text-base md:text-lg max-w-[516px] leading-6 md:leading-8 text-secondary">
                  {data.shortDescription}
                </p>

                <div className="mt-5 md:mt-7 flex flex-wrap gap-x-1 text-xs md:text-sm text-secondary">
                  {data.services.map((service, index) => (
                    <span key={service}>
                      {service}

                      {index < data.services.length - 1 && (
                        <span className="ml-2 text-secondary">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {data.links.live && (
              <div className="mt-6 md:mt-8">
                <a
                  href={data.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                inline-flex
                items-center
                gap-2
                bg-primary
                px-5
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
          <Link href={data.links.live} target="_blank" rel="noopener noreferrer" className="cusror-pointer">
            <div className="max-w-[350px] lg:max-w-[450px] ">
              <Image
                src={data.image}
                alt={`${data.title} website`}
                loading="eager"
              />

              {/* <div className="absolute bottom-0 w-full h-[120px] backdrop-blur-md bg-white/20 [mask-image:linear-gradient(to_bottom,transparent_0%,black_100%)] pointer-events-none z-10"></div> */}
            </div>
          </Link>
        </div>
      </section>

      {/* =====================================================
          QUICK PROJECT INFO
      ====================================================== */}

      <section className="border-y border-slate-200">
        <div className="mx-auto px-2 md:px-10 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="border-r border-b md:border-b-0 border-slate-200 py-4 lg:pr-10">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Project
              </p>

              <p className="mt-2 text-base font-medium">{data.projectType}</p>
            </div>

            <div className="lg:border-r border-b md:border-b-0 border-slate-200 py-4 pl-6 lg:px-10">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Year
              </p>

              <p className="mt-2 text-base font-medium">{data.year}</p>
            </div>

            <div className="border-r border-slate-200 py-4 pl-0 lg:px-10">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Services
              </p>

              <p className="mt-2 text-base font-medium">
                {data.services.length}
              </p>
            </div>

            <div className="py-4 pl-6 lg:pl-10">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Built with
              </p>

              <p className="mt-2 text-base font-medium">{data.techStack[0]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto px-1 py-8 md:py-12 md:px-8">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              About the project
            </p>
          </div>
          <div>
            <p className="tracking-tight text-slate-600 md:text-xl md:leading-[1.5]">
              {data.description}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="px-6 py-8 md:py-16 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                01 — Challenge
              </p>

              <h2 className="mt-2 md:mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                The problem
              </h2>

              <div className="mt-3 md:mt-6 space-y-4">
                {data.problem.map((item) => (
                  <p
                    key={item}
                    className="md:text-lg md:leading-7 text-slate-500"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                02 — Solution
              </p>

              <h2 className="mt-2 md:mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                The approach
              </h2>

              <div className="mt-2 md:mt-6 space-y-4">
                {data.solution.map((item) => (
                  <p
                    key={item}
                    className="md:text-lg md:leading-7 text-slate-500"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-3 py-4 md:px-6">
        <div className="my-6">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            03 — What we built
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Built for the real world.
          </h2>
        </div>

        <div className="w-fit grid grid-cols-1 md:grid-cols-2">
          {data.highlights.map((highlight, index) => (
            <div
              key={highlight}
              className={`${index % 2 === 0 ? "md:border-r" : ""} border-b border-slate-200 py-4 md:pl-4`}
            >
              <span className="text-xs md:text-sm text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="md:mt-1 text-sm md:text-base text-slate-700 font-medium">
                {highlight}
              </h3>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="py-6 md:py-12 md:px-4">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                04 — Technology
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                The stack
              </h2>
            </div>

            <div className="flex flex-wrap items-end md:justify-end md:mt-3 gap-x-4 md:gap-x-8">
              {data.techStack.map((technology) => (
                <span
                  key={technology}
                  className="md:text-xl text-black/80 font-medium"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* =====================================================
          NEXT PROJECT
      ====================================================== */}

      <section className="bg-[#F8FAFC] group cursor-pointer hover:bg-[#E2E8F0] transition-colors duration-300">
        <Link
          href={`/work/${nextProject.slug}`}
          className="group mt-6 text-black group-hover:text-primary transition-all delay-75"
        >
          <div className="max-w-[1400px] px-8 py-6 md:py-12 md:px-10 lg:px-16">
            <p className="md:mb-2 text-xs md:text-sm uppercase tracking-[0.15em] text-secondary">
              Next project
            </p>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold tracking-tight md:text-5xl lg:text-7xl">
                {nextProject.title}
                <span className="text-black/70 group-hover:text-primary/60 transition-all delay-75">
                  .
                </span>
              </h2>

              <span className="text-3xl transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}
