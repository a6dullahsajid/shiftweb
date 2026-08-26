import Image from "next/image";

export default function ProjectCard({
  number,
  title,
  category,
  services = [],
  image,
  href = "#",
  featured = false,
}) {
  let isFirst = false;
  if (number === "01") {
    isFirst = true;
  }
  return (
    <a href={href} className="group block">
      {/* Number + View Project */}
      <div className="mb-3 flex items-center justify-between">
        {/* <span className="text-sm font-semibold text-black">{number}</span> */}
        <span className="text-sm text-black transition-transform duration-300 group-hover:translate-x-1">
          View project →
        </span>
      </div>

      {/* Image */}
      <div className="relative overflow-visible">
        {/* Back layers */}
        <div
          className={`
            ${isFirst ? "block" : "hidden"}
            absolute
            bottom-[-10%]
            right-[-10%]
            h-full
            w-[85%]
            bg-[#233DFF]/70
            transition-all
            duration-500
            group-hover:bottom-[-17%]
            group-hover:right-[-11%]
          `}
        />

        <div
          className={`  
            ${isFirst ? "block" : "hidden"}
            absolute
            bottom-[-5%]
            right-[-5%]
            h-full
            w-[85%]
            bg-[#233DFF]/95
            transition-all
            duration-500
            group-hover:bottom-[-8%]
            group-hover:right-[-6%]
          `}
        />

        {/* Main image */}
        <div
          className={`
            relative
            overflow-hidden
            border
            border-slate-300
            bg-slate-100
            ${featured ? "aspect-video" : "aspect-9/5"}
          `}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="
              h-full
              w-full
              object-contain
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.025]
            "
          />

          {/* Category */}
          {/* <div
            className="
              absolute
              right-0
              bottom-3
              bg-primary
              px-4
              py-2
              text-xs
              font-medium
              text-white
              shadow-lg
              transition-transform
              duration-500
              group-hover:-translate-y-1
            "
          >
            {category}
          </div> */}
        </div>
      </div>

      {/* Information */}
      <div className="mt-7">
        <h3
          className={`
            font-semibold
            tracking-tight
            text-black
            ${featured ? "text-3xl" : "text-2xl"}
          `}
        >
          {title}
        </h3>

        {services.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-x-2 text-base text-slate-500">
            {services.map((service, index) => (
              <span key={service}>
                {service}

                {index < services.length - 1 && (
                  <span className="ml-2 text-slate-300">·</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
