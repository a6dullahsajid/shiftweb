import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ info }) => {
  return (
    <div className="project-card-1 py-6 flex flex-col justify-between gap-2 w-full bg-[#F8FAFC] border border-secondary/20">
      <div>
        <div className="top relative">
          <div className="flex pl-5 sm:pl-10 items-center gap-2.5 text-[12px] text-secondary">
            <span>{info.title}</span>
            <span className="text-[10px] text-slate-300">•</span>
            <span>{info.category}</span>

            {/* Minimal dot separator */}
            <span className="text-[10px] text-slate-300">•</span>

            <div className="flex items-center gap-1.5">
              <span>Live</span>

              {/* Blinking "Live" Indicator */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </div>
          </div>
          <Link href={info.links.live}>
            <div className="max-w-[350px] my-5 mx-4 md:mx-18">
              <Image src={info.image} alt={info.title} />
            </div>
          </Link>
          {/* <div className="absolute bottom-0 w-full h-[120px] backdrop-blur-md bg-white/20 [mask-image:linear-gradient(to_bottom,transparent_0%,black_100%)] pointer-events-none z-10"></div> */}
        </div>

        <div className="bottom px-5 sm:px-10 flex flex-col group cursor-pointer ">
          <Link
            href={info.links.caseStudy}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="wrapper">
              <div>
                <p className="text-2xl md:text-3xl text-shadow-[0_0px_2px_rgba(59,130,246,0.5)] transition-all delay-100 group-hover:text-primary">
                  {info.cardTitle}
                </p>
              </div>
              <div className="mt-2">
                <p className="text-secondary text-[13px] md:text-[16px]">
                  {info.description}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="card-footer flex flex-col gap-8 mt-8 px-5 sm:px-10 ">
        <div className="flex flex-wrap gap-2 text-[10px] text-secondary">
          {info.techStack.map((highlight, i) => (
            <span
              key={i}
              className="border px-2 py-1  border-secondary text-nowrap"
            >
              {highlight}
            </span>
          ))}
        </div>
        <div>
          <Link
            href={info.links.caseStudy}
            className="text-primary hover:text-primary/80 text-[14px] sm:text-[16px]"
          >
            Read the case study &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
