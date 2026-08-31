import Image from "next/image";

const ProjectCard = ({ info }) => {
  return (
    <div className="project-card-1 py-6 flex flex-col justify-between gap-2 w-full bg-[#F8FAFC]">
      <div>
      <div className="top relative">
        <div className="flex pl-5 sm:pl-10 items-center gap-2.5 text-[12px] text-secondary">
          <span>{info.titleTop[0]}</span>
          <span className="text-[10px] text-slate-300">•</span>
          <span>{info.titleTop[1]}</span>

          {/* Minimal dot separator */}
          <span className="text-[10px] text-slate-300">•</span>

          <div className="flex items-center gap-1.5">
            <span>{info.titleTop[2]}</span>

            {/* Blinking "Live" Indicator */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>
        </div>
        <div className="max-w-[350px] my-5 mx-10">
          <Image src={info.imageUrl} alt={info.title} />
        </div>
        <div className="absolute bottom-0 w-full h-[120px] backdrop-blur-md bg-white/20 [mask-image:linear-gradient(to_bottom,transparent_0%,black_100%)] pointer-events-none z-10"></div>
      </div>

      <div className="bottom px-5 sm:px-10 flex flex-col">
        <div className="wrapper">
          <div>
            <p className="text-[24px] sm:text-[32px]">{info.title}</p>
          </div>
          <div className="mt-2">
            <p className="text-secondary text-[14px] sm:text-[16px]">
              {info.description}
            </p>
          </div>
        </div>
        
      </div>
      </div>

      <div className="card-footer flex flex-col gap-8 mt-8 px-5 sm:px-10 ">
          <div className="flex gap-5 text-[10px] text-secondary">
            {/* Map through features dynamically instead of hardcoding indexes */}
            {info.features.map((feature, i) => (
              <span key={i} className="border p-1 border-secondary">
                {feature}
              </span>
            ))}
          </div>
          <div>
            <a href="#" className="text-secondary text-[14px] sm:text-[16px]">
              Read the case study &rarr;
            </a>
          </div>
        </div>
    </div>
  );
};

export default ProjectCard;


