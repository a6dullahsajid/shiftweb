import React from "react";
import StartProjectButton from "./StartProjectButton";

const pricingPlans = [
  {
    name: "Launch",
    description:
      "A professionally designed 3–4 page website or landing page built to establish your business online with a strong first impression.",
    price: "₹12,000",
    popular: false,
    features: [
      "3–4 page business website or landing page",
      "Premium, conversion-focused design",
      "Mobile-friendly responsive experience",
      "WhatsApp enquiry integration",
      "Basic Google SEO setup",
      "Contact form & enquiry setup",
      "6 months free support for content changes",
      // "1 week delivery",
    ],
  },

  {
    name: "Growth",
    description:
      "A product-centric dynamic business website designed to showcase your offerings, build trust and generate more enquiries.",
    price: "₹25,000",
    popular: true,
    features: [
      "Complete multi-page dynamic business website",
      "Custom-designed pages for your brand, products, services and business information",
      "Product/service-focused layouts and presentation",
      "WhatsApp enquiry & ordering integration",
      "Google SEO setup for better search visibility",
      "Basic analytics to track website visitors and enquiries",
      "6 months free support for content changes",
      // "3–4 weeks delivery",
    ],
  },

  {
    name: "Scale",
    description:
      "Custom software built for organizations to manage operations, data and workflows through a centralized digital system.",
    price: "₹45,000",
    popular: false,
    features: [
      "Custom web application tailored to your organization",
      // "Everything included in the Growth Plan",
      "Admin panel for managing content, data and website functionality",
      "Custom dashboards for business operations and analytics",
      "Role-based access and management features",
      "Advanced enquiry, data and activity tracking",
      "Advanced SEO & Google optimization",
      // "Initial content and data setup included",
      // "Up to 6 months free support for initial content and data updates",
    ],
  },
];

const PricingSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
        <p className="uppercase text-secondary text-[12px] tracking-widest mb-4">
          Investment
        </p>

        <h2 className="text-primary text-2xl md:text-5xl max-w-[870px] font-[140] leading-[1.2] mb-4">
          Transparent pricing for high-performance builds.
        </h2>

        <p className="text-sm md:text-lg my-2 md:my-6 text-secondary leading-relaxed">
          No hidden fees or surprise retainers. Choose the architecture that
          fits your exact growth stage.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={
              plan.popular
                ? "relative flex flex-col p-8 bg-primary border border-primary"
                : "flex flex-col p-8 bg-[#F8FAFC] border border-secondary/20"
            }
          >
            {/* Most Popular */}
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-secondary/20 text-primary text-[10px] font-bold uppercase tracking-widest py-1.5 px-4">
                Most Popular
              </div>
            )}

            <h3
              className={
                plan.popular
                  ? "text-[20px] font-semibold text-white mb-2"
                  : "text-[20px] font-semibold text-primary mb-2"
              }
            >
              {plan.name}
            </h3>

            <p
              className={
                plan.popular
                  ? "text-[14px] text-white/80 mb-6 min-h-[40px]"
                  : "text-[14px] text-secondary mb-6 min-h-[40px]"
              }
            >
              {plan.description}
            </p>

            <div className="flex items-baseline gap-1 mb-8">
              <span
                className={
                  plan.popular
                    ? "text-[40px] font-[140] text-white"
                    : "text-[40px] font-[140] text-primary"
                }
              >
                {plan.price}
              </span>

              <span
                className={
                  plan.popular
                    ? "text-[14px] text-white/80"
                    : "text-[14px] text-secondary"
                }
              >
                /project
              </span>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={
                    plan.popular
                      ? "flex items-center gap-3 text-[14px] text-white/90"
                      : "flex items-center gap-3 text-[14px] text-secondary"
                  }
                >
                  <svg
                    className={
                      plan.popular
                        ? "w-4 h-4 text-white shrink-0"
                        : "w-4 h-4 text-primary shrink-0"
                    }
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  {feature}
                </li>
              ))}
            </ul>

            <StartProjectButton
              openCallForm
              className={
                plan.popular
                  ? "w-full py-3 bg-white text-primary font-medium hover:bg-gray-200 transition-colors text-[14px] cursor-pointer"
                  : "w-full py-3 border border-secondary text-secondary font-medium hover:bg-secondary hover:text-white transition-colors text-[14px] cursor-pointer"
              }
              label="Book a Call"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
