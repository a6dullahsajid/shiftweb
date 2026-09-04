const TestimonialMarquee = () => {
  // Define your cards here to keep the HTML clean
  const testimonials = [
    {
      quote: "We never pad the scope. We’d rather simplify the architecture and earn your trust.",
      author: "kickxwear",
    },
    {
      quote: "They bypassed the fluff and delivered a highly optimized infrastructure on week one.",
      author: "TechFlow Inc.",
    },
    {
      quote: "Fast, reliable, and completely transparent. The best development partners we've hired.",
      author: "Studio9",
    },
    {
      quote: "Our conversion rates doubled after they rebuilt our storefront. Highly recommended.",
      author: "Apex Apparel",
    },
  ];

  return (
    <div className="testimonial-container mx-auto max-w-[806px] overflow-hidden">
      <div className="relative w-full h-[220px] [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
        
        {/* 
          The sliding track. 
          'w-max' allows it to grow beyond the screen width.
          Hovering pauses the animation so users can read.
        */}
        <div 
          className="flex w-max hover:[animation-play-state:paused]"
          style={{ animation: 'marquee 20s linear infinite' }}
        >
          
          {/* We map the exact same list twice [1, 2] to create the seamless infinite illusion */}
          {[1, 2].map((set) => (
            <div key={set} className="flex gap-4 pr-4">
              {testimonials.map((card, index) => (
                <div 
                  key={index} 
                  className="bg-[#F8FAFC] border border-secondary/20 w-[350px] shrink-0 flex flex-col gap-4 justify-center items-center p-8 rounded-sm"
                >
                  <p className="text-center text-secondary">
                    “{card.quote}”
                  </p>
                  <div className="hl h-[1px] border border-secondary/20 w-[90%]"></div>
                  <p className="text-secondary">{card.author}</p>
                </div>
              ))}
            </div>
          ))}

        </div>

        {/* Inline keyframes so it works instantly without touching your global CSS */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        
      </div>
    </div>
  );
};

export default TestimonialMarquee;