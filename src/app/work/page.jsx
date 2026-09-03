import PremiumCard from "../components/PremiumCard.jsx";
import Cta from "../components/Cta";
import projects from "../data/work.js";

export default function WorkPage() {
  return (
    <>
    <section className="work-section mx-auto w-full px-6 md:px-10 max-w-6xl pt-6 md:pt-12 pb-24 md:pb-32 overflow-hidden gap-12 lg:gap-8">
      <div>
        <p className="uppercase text-secondary font-bold">work</p>
      </div>
      <div className="py-3 md:py-6">
        <p className="text-primary text-2xl md:text-5xl max-w-[850px] md:leading-[1.2] font-[250]">
          Production software, in domains that don&apos;t tolerate shortcuts.
        </p>
        <p className="text-xs md:text-lg my-2 md:my-6 text-secondary max-w-[706px]">
          Every case study here is a live or delivered system. No concept demos,
          no speculative decks — just what we built, how, and what it did for
          the client.
        </p>
      </div>
      <div className="projet-grid grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((info) => (
          <PremiumCard key={info.id} info={info} />
        ))}
      </div>
      <div className="hr-line mt-15 border-b border-divider border-[#64748B] w-full"></div>
      <div className="py-15">
        <p className="text-[28px] mb-5">And more — we&apos;ve shipped 10+ complex projects.</p>
        <p className="text-[16px] max-w-[680px] text-secondary">The ones above are a handful we can write up publicly. The rest are under NDA or just not captured yet — happy to walk through any of them on a call.</p>
      </div>
      <div className="mt-20">
      <Cta />
      </div>
    </section>
    
    </>
  );
}
