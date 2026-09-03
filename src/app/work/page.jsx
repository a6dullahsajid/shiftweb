import kickxwear from "../assets/kickxwear-card-white.png";
import oasistrends from "../assets/oasistrends-card-white.png";
import PremiumCard from "../components/PremiumCard.jsx";
import vanlife from "../assets/vanlife-card-white.png";
import spendwise from "../assets/spendwise-card-white.png";
import Cta from "../components/Cta";

const cardInfo = [
  {
    id: "01",
    titleTop: ["Kickxwear", "E-Commerce", "Live"],
    imageUrl: kickxwear,
    title: "High-Performance Digital Storefront",
    description:
      "Features a proprietary, role-isolated admin dashboard for real-time inventory control and a bespoke analytics engine tracking precise user click journeys. We bypassed traditional payment gateways in favor of a streamlined, direct-to-WhatsApp sales funnel, backed by flawless technical SEO with 100% index crawlability",
    features: [
      "Next.js Architecture",
      "Proprietary Analytics Engine",
      "Live in production",
    ],
    redirectLink: "/work/kickxwear",
  },
  {
    id: "02",
    titleTop: ["Oasis Trends", "Corporate Showcase", "Live"],
    imageUrl: oasistrends,
    title: "Single-Page Digital Presence & B2B Catalog",
    description:
      "A high-performance static architecture designed to establish a premium digital footprint. Features a streamlined, read-only product catalog showcasing bulk inventory without the overhead of transactional e-commerce infrastructure, ensuring lightning-fast load times and seamless navigation.",
    features: [
      "Single-Page Architecture",
      "Static Generation",
      "Live in production",
    ],
    redirectLink: "/work/oasistrends",
  },
  {
    id: "03", // Make sure this ID is unique in your array

    // Top bar: [Category] • [Project Name] • [Status]
    titleTop: ["Vanlife", "Frontend & UI/UX", "Live"],
    imageUrl: vanlife,

    title: "Van Rental Platform Interface & Experience",

    description:
      "A fully responsive frontend architecture and custom UI/UX design for a specialized vehicle renting platform. Delivers an engaging browsing experience featuring detailed van specifications, pricing models, and user reviews, focusing entirely on client-side performance and seamless layout.",

    // The tags for the bottom borders
    features: ["React", "UI/UX Design", "Responsive Layout"],
    redirectLink: "/work/vanlife",
  },
  {
    id: "04", // Make sure this ID is unique in your array

    // Top bar: [Category] • [Project Name] • [Status]
    titleTop: ["Spendwise", "Full Stack", "Live"],
    imageUrl: spendwise,
    title: "Smart Expense Tracker & AI Financial Assistant",

    description:
      "A comprehensive full-stack financial management platform built on the MERN stack. Features an integrated AI chatbot for intelligent insights, dynamic expense-to-income graphs for visual data analysis, and a secure backend for reliable transaction tracking.",

    // The tags for the bottom borders
    features: ["MERN Stack", "AI Integration", "Data Visualization"],

    redirectLink: "/work/spendwise",
  },
];

export default function WorkPage() {
  return (
    <>
    <section className="work-section mx-auto w-full px-6 md:px-11 max-w-6xl pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden gap-12 lg:gap-8">
      <div>
        <p className="uppercase text-secondary text-[12px]">work</p>
      </div>
      <div className="py-8">
        <p className="text-primary text-[36px] sm:text-[50px] max-w-[706px] leading-[1.2] font-[140]">
          Production software, in domains that don&apos;t tolerate shortcuts.
        </p>
        <p className="text-[18px] my-8 text-secondary max-w-[706px]">
          Every case study here is a live or delivered system. No concept demos,
          no speculative decks — just what we built, how, and what it did for
          the client.
        </p>
      </div>
      <div className="projet-grid grid grid-cols-1 md:grid-cols-2 gap-5">
        {cardInfo.map((info, index) => (
          <PremiumCard key={index} info={info} />
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
