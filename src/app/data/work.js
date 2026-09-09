import kickxwearImage from "../assets/kickxwear-card-white.png";
import oasisTrendsImage from "../assets/oasistrends-card-white.png";
import vanlifeImage from "../assets/vanlife-card-white.png";
import spendwiseImage from "../assets/spendwise-card-white.png";
import portexaImage from "../assets/portexa-card-white.png";

const projects = [
  {
    id: "kickxwear",
    title: "Kickxwear",
    cardTitle: "High-Performance Digital Storefront",
    slug: "kickxwear",

    category: "E-commerce",
    projectType: "E-commerce Platform",
    year: "2026",
    description: "Features a proprietary, role-isolated admin dashboard for real-time inventory control and a bespoke analytics engine tracking precise user click journeys. We bypassed traditional payment gateways in favor of a streamlined, direct-to-WhatsApp sales funnel, backed by flawless technical SEO with 100% index crawlability",
    shortDescription:
      "A complete e-commerce platform built for product discovery, direct WhatsApp ordering, SEO growth and data-driven lead generation.",

    image: kickxwearImage,

    services: [
      "UI/UX Design",
      "E-commerce Development",
      "Admin Panel",
      "Product Analytics",
      "Technical SEO",
    ],

    problem: [
      "The business needed more than a product showcase — it needed a complete e-commerce system that could support product management, customer enquiries and day-to-day operations.",
      "Managing products and keeping catalogue information up to date needed to be possible without changing the website code every time.",
      "The business needed visibility into which products were generating customer enquiries so that leads could be tracked at the product level.",
      "The website also needed strong organic search visibility so that individual products could be discovered through Google.",
      "Customers needed a simple way to enquire about and order products directly through WhatsApp without going through a complicated checkout process.",
    ],

    solution: [
      "Built a complete e-commerce storefront with product browsing, categories and detailed product pages.",

      "Developed a dedicated admin panel for dynamically managing products, pricing, images, sizes and catalogue information, creating a scalable system for adding and updating products without rebuilding the website.",

      "Implemented product-level analytics to record and identify lead generation activity for individual products.",

      "Structured product pages with technical SEO, metadata and structured product information to help search engines understand the catalogue.",

      "Implemented Product and Merchant Listing structured data so eligible products can be understood by Google's shopping-related systems.",

      "Built a product-aware WhatsApp ordering flow that dynamically includes the product name, selected size, price and URL, with Open Graph metadata generating accurate product previews for shared links.",

    ],

    techStack: [
      "Next.js",
      "JWT Authentication",
      "MongoDB",
      "Cloudinary",
      "SEO Optimization",
      "JavaScript",
    ],

    highlights: [
      "Complete e-commerce platform with dynamic product catalogue",
      "Dedicated admin panel for managing products, pricing, images and sizes",
      "Product-level lead analytics to track customer enquiries",
      "Technical SEO with Product and Merchant Listing structured data",
      "Top-5 Google rankings for targeted product-related searches",
      "Product-aware WhatsApp ordering with dynamic product details",
      "Dynamic Open Graph previews for shared product links",
      "Scalable architecture built for continued SEO and product growth",
    ],

    seo: {
      title:
        "Kickxwear | E-commerce Website, SEO & Product Platform | Shift Web",

      description:
        "Explore how Shift Web built Kickxwear's e-commerce platform with an admin panel, product analytics, technical SEO, Google product structured data and WhatsApp ordering.",

      keywords: [
        "Kickxwear",
        "Kickxwear website",
        "Kickxwear e-commerce website",
        "Kickxwear online store",
        "e-commerce website development",
        "Next.js e-commerce development",
        "e-commerce admin panel",
        "product analytics",
        "e-commerce SEO",
        "Google merchant listings",
        "product structured data",
        "WhatsApp e-commerce ordering",
        "Shift Web portfolio",
      ],
    },

    links: {
      live: "https://www.kickxwear.in/",
      caseStudy: "/work/kickxwear",
    },
  },

  {
    id: "oasis-trends",
    title: "Oasis Trends",
    cardTitle: "Single-Page Digital Presence & B2B Catalogue",
    slug: "oasistrends",

    category: "B2B Catalogue",

    projectType: "B2B Product Catalogue",

    year: "2026",

    description: "A high-performance static architecture designed to establish a premium digital footprint. Features a streamlined, read-only product catalog showcasing bulk inventory without the overhead of transactional e-commerce infrastructure, ensuring lightning-fast load times and seamless navigation.",

    shortDescription:
      "A professional B2B catalogue website built to showcase leather and leather goods, strengthen the brand's online presence and generate enquiries for bulk and export orders.",

    image: oasisTrendsImage,

    services: [
      "UI/UX Design",
      "B2B Website Development",
      "Product Catalogue",
      "SEO",
    ],

    problem: [
      "The manufacturer needed a professional online presence that could establish credibility with buyers, importers and businesses.",

      "With a large range of leather and leather goods, potential buyers needed an easy way to explore products and understand what the company offers.",

      "The website needed to support bulk and export enquiries rather than a traditional online checkout experience.",

      "The digital experience needed to communicate the company's capabilities clearly across desktop and mobile devices.",
    ],

    solution: [
      "Designed a clean, product-focused catalogue experience that puts the manufacturer's products and capabilities at the centre.",

      "Organized products into clear categories to make it easier for potential buyers to discover relevant leather and leather goods.",

      "Created dedicated product presentation sections that provide buyers with the information needed before making an enquiry.",

      "Built clear enquiry and contact pathways focused on generating bulk and export order leads.",

      "Structured the website with SEO-friendly content and architecture to improve discoverability for relevant product and manufacturing searches.",
    ],

    techStack: [
      "Gatsby.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
    ],

    highlights: [
      "Professional B2B product catalogue for leather and leather goods",
      "Organized product categories for easier buyer discovery",
      "Product-focused presentation designed for B2B buyers",
      "Bulk and export enquiry pathways for lead generation",
      "Responsive experience across desktop, tablet and mobile",
      "SEO-friendly architecture for product and manufacturing searches",
      "Scalable foundation for future products and SEO growth",
    ],

    seo: {
      title:
        "Oasis Trends | Leather & Leather Goods Manufacturer | Shift Web",
      description:
        "Explore how Shift Web built a professional B2B catalogue website for Oasis Trends to showcase leather and leather goods, strengthen its online presence and generate bulk and export enquiries.",
      keywords: [
        "Oasis Trends",
        "Oasis Trends leather",
        "leather manufacturer",
        "leather goods manufacturer",
        "leather products manufacturer",
        "leather goods supplier",
        "leather manufacturer India",
        "leather products exporter",
        "leather goods exporter",
        "bulk leather orders",
        "leather wholesale supplier",
        "B2B leather website",
        "leather product catalogue",
        "Shift Web portfolio",
      ],
    },

    links: {
      live: "https://oasistrendsleather.com/",
      caseStudy: "/work/oasistrends",
    },
  },
  {
    id: "vanlife",
    title: "Vanlife",
    cardTitle: "Van Rental Platform Interface & Experience",
    slug: "vanlife",
    category: "Website",
    projectType: "Business Website",
    year: "2026",
    description: "A fully responsive frontend architecture and custom UI/UX design for a specialized vehicle renting platform. Delivers an engaging browsing experience featuring detailed van specifications, pricing models, and user reviews, focusing entirely on client-side performance and seamless layout.",
    shortDescription:
      "A modern business website focused on clarity, performance and presenting the brand professionally online",
    image: vanlifeImage,
    services: [
      "UI/UX Design",
      "Web Development",
      "SEO",
    ],
    problem: [
      "The business needed a stronger and more professional online presence.",
      "Important information needed to be presented clearly to potential customers.",
      "The website needed to provide a responsive experience across devices.",
    ],
    solution: [
      "Designed a clean interface with a clear content hierarchy.",
      "Developed responsive pages optimized for different screen sizes.",
      "Structured the website around clear navigation and calls to action.",
      "Implemented an SEO-friendly technical foundation.",
    ],

    highlights: [
      "Modern responsive business website",
      "Clear content hierarchy and navigation",
      "Call-to-action focused sections",
      "Mobile-first responsive experience",
      "Performance-focused development",
      "SEO-friendly technical structure",
      "Professional online presence",
    ],
    techStack: [
      "React.js",
      "UI/UX Design",
      "Tailwind CSS",
      "JavaScript",
    ],

    seo: {
      title: "Vanlife Website Development | Shift Web",

      description:
        "Explore how Shift Web designed and developed a modern business website for Vanlife with responsive design, performance and SEO in mind.",

      keywords: [
        "Vanlife website",
        "Vanlife web development",
        "business website development",
        "Next.js website development",
        "Shift Web portfolio",
      ],
    },

    links: {
      live: "https://tryvanlife.netlify.app/",
      caseStudy: "/work/vanlife",
    },
  },
  {
    id: "spendwise",
    title: "Spendwise",
    cardTitle: "Smart Expense Tracker & AI Financial Assistant",
    slug: "spendwise",

    category: "Web Application",
    projectType: "Expense Tracker",

    year: "2026",

    description:
      "A full-stack expense tracking web application designed to help users manage their finances, monitor income and expenses, visualize spending patterns and gain intelligent insights through an integrated AI assistant.",

    shortDescription:
      "A smart expense tracking web application combining financial management, data visualization and AI-powered insights.",

    image: spendwiseImage,

    services: [
      "UI/UX Design",
      "Web Application Development",
      "Financial Dashboard",
      "AI Integration",
    ],

    problem: [
      "Users needed a simple way to record and manage their daily income and expenses.",
      "Understanding spending patterns can be difficult when financial data is spread across individual transactions.",
      "Users needed clear visual insights to understand the relationship between their income and spending.",
      "The application needed an intuitive interface that could make personal financial management easier.",
    ],

    solution: [
      "Designed a clean and intuitive dashboard for managing income and expense data.",
      "Developed an expense tracking system for recording and organizing financial transactions.",
      "Implemented dynamic income and expense graphs to provide a clear visual overview of financial activity.",
      "Integrated an AI-powered chatbot to provide intelligent financial insights and assistance.",
      "Built a secure backend for reliable transaction management and data handling.",
      "Developed a responsive experience that works smoothly across different screen sizes.",
    ],

    highlights: [
      "Full-stack expense tracking web application",
      "Income and expense management",
      "Dynamic financial data visualization",
      "AI-powered financial assistant",
      "Interactive expense and income graphs",
      "Secure transaction management",
      "Responsive user experience",
      "Performance-focused development",
    ],

    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],

    seo: {
      title: "Spendwise | Expense Tracker Web Application | Shift Web",

      description:
        "Explore how Shift Web designed and developed Spendwise, a full-stack expense tracker web application with financial dashboards, data visualization and an AI-powered financial assistant.",

      keywords: [
        "Spendwise",
        "Spendwise expense tracker",
        "expense tracker web application",
        "expense management application",
        "personal finance web application",
        "AI expense tracker",
        "AI financial assistant",
        "expense tracking software",
        "React expense tracker",
        "MERN stack application",
        "financial dashboard",
        "Shift Web portfolio",
      ],
    },

    links: {
      live: "https://spendwise-mqxp.onrender.com/",
      caseStudy: "/work/spendwise",
    },
  },
  {
    id: "portexa",
    title: "Portexa",
    cardTitle: "Digital Platform & Interactive Experience",
    slug: "portexa",

    category: "Digital Platform",
    projectType: "Portfolio Building Platform",
    year: "2026",

    description:
      "A purpose-built digital platform designed to bring its core functionality into a structured and intuitive web experience. Portexa combines a modern interface with interactive workflows, responsive architecture and a scalable foundation designed to make complex functionality simple and accessible for users.",

    shortDescription:
      "A modern digital platform built around intuitive workflows, interactive functionality and a scalable user experience.",

    image: portexaImage,

    services: [
      "UI/UX Design",
      "Platform Development",
      "Interactive Experience",
      "Responsive Development",
    ],

    problem: [
      "The platform needed to present its core functionality through a clear and intuitive user experience.",
      "Users needed a structured way to interact with the platform without unnecessary complexity.",
      "The experience needed to remain consistent and responsive across different devices.",
      "The platform required a scalable foundation that could support future functionality and improvements.",
    ],

    solution: [
      "Designed a structured interface that makes the platform's functionality easy to understand and navigate.",
      "Created intuitive workflows that guide users through key platform interactions.",
      "Developed responsive interfaces optimized for desktop, tablet and mobile experiences.",
      "Built reusable components to maintain consistency across the platform.",
      "Focused on performance, usability and smooth interactions throughout the experience.",
      "Created a scalable architecture that allows the platform to evolve with future requirements.",
    ],

    highlights: [
      "Purpose-built digital platform",
      "Intuitive user workflows",
      "Interactive platform experience",
      "Responsive interface across devices",
      "Reusable and consistent UI components",
      "Performance-focused development",
      "Scalable platform architecture",
    ],

    techStack: [
      "Next.js",
      "React",
      "Firestore",
      "OAuth Authentication",
      "Tailwind CSS",
    ],

    seo: {
      title: "Portexa | Digital Platform Development | Shift Web",

      description:
        "Explore how Shift Web designed and developed Portexa, a modern digital platform focused on intuitive workflows, interactive functionality, responsive design and scalable architecture.",

      keywords: [
        "Portexa",
        "Portexa platform",
        "Portexa web platform",
        "digital platform development",
        "web platform development",
        "interactive web platform",
        "Next.js platform development",
        "React web platform",
        "UI UX platform design",
        "Shift Web portfolio",
      ],
    },

    links: {
      live: "https://portexa.vercel.app/",
      caseStudy: "/work/portexa",
    },
  },
];

export default projects;