import React, { useState } from "react";

const Industries = () => {
  const [expanded, setExpanded] = useState({ 0: false, 1: false, 2: false });
  const [hovered, setHovered] = useState({ 0: false, 1: false, 2: false });
  const [heroHovered, setHeroHovered] = useState(false);
  const toggle = (i) => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  const overlayStyle = (i) => ({
    transition: "transform 300ms ease-out",
    transform: hovered[i] ? "translateY(0)" : "translateY(200%)",
  });

  return (
    <div className="mt-6">
      <section
        className="bg-[#262424] h-[277px] md:h-full w-full rounded-[20px] py-11.5 md:py-[64px] xl:ps-[155px] md:ps-20 flex flex-col justify-center px-6 overflow-hidden"
        onMouseEnter={() => setHeroHovered(true)}
      >
        <div
          style={{
            transition: "transform 300ms ease-in, opacity 300ms ease-in",
            transform: heroHovered ? "translateY(0)" : "translateY(200%)",
            opacity: heroHovered ? 1 : 0,
          }}
        >
          <h2 className="text-[#FBFBFB] md:hidden text-[24px] font-bold mb-6 tracking-[2%]">
            INDUSTRIES
          </h2>
          <h2 className="text-[#FBFBFB]  hidden md:block  text-[48px] font-bold mb-6 tracking-[2%]">
            Industries
          </h2>
          <p className="text-[#FFFFFF] md:hidden text-[20px] font-medium -tracking-[3%]">
            We work with industries where reputation and first impressions
            matter. By understanding how they build trust and win clients, we
            create clear, confident digital experiences.
          </p>
          <p className="text-[#FFFFFF] max-w-[709px] hidden md:block text-[24px] font-medium -tracking-[3%]">
            We partner with businesses in sectors where reputation matters,
            decisions are high-stakes, and first impressions carry weight.By
            understanding how each industry builds trust and wins clients, we
            create digital experiences that communicate value with clarity and
            confidence.
          </p>
        </div>
      </section>
      <section className="mt-6 md:mt-[88px]">
        <h2 className="text-[#403F3F] md:text-[36px] text-[24px] font-semibold mb-6 md:mb-[71px]">
          Explore Our Work
        </h2>
        <div className="flex flex-col gap-3 items-start py-4 md:py-0">
          <img
            src="/images/industries/ConcreteCompaniesMobile.png"
            alt=""
            className="rounded-[10px] md:hidden w-full"
          />
          <div
            className="relative overflow-hidden rounded-[20px] hidden md:block"
            onMouseEnter={() => setHovered((p) => ({ ...p, 0: true }))}
          >
            <img
              src="/images/industries/ConcreteCompanies.png"
              alt=""
              className="rounded-[20px] block"
            />
            <div
              className="absolute space-y-[42px] bottom-[62px] left-[75px] w-[705px] text-[#FBFBFB]"
              style={overlayStyle(0)}
            >
              <h3 className="text-[40px] font-bold">CONCRETE COMPANIES</h3>
              <p className="text-[20px] font-medium text-justify">
                Concrete companies need a digital presence that communicates
                reliability, technical precision, and proven delivery from the
                first glance. We help concrete businesses present their
                services, project experience, and capabilities with clarity —
                making it easier for contractors, developers, and
                decision-makers to understand the value behind the work. The
                result is a website that builds trust quickly and supports lead
                generation in a highly competitive market.
              </p>
            </div>
          </div>
          <h3 className="text-[#262424] text-[20px] font-medium md:hidden">
            Concreate Companies
          </h3>
          <p
            className={`text-[#262424] tracking-tight leading-tight text-[16px] font-normal  md:hidden overflow-hidden transition-all duration-300 ${
              expanded[0] ? "max-h-[500px]" : "max-h-[79px]"
            }`}
          >
            Concrete companies need a digital presence that communicates
            reliability, technical precision, and proven delivery from the first
            glance. We help concrete businesses present their services, project
            experience, and capabilities with clarity — making it easier for
            contractors, developers, and decision-makers to understand the value
            behind the work. The result is a website that builds trust quickly
            and supports lead generation in a highly competitive market.
          </p>
          <button
            className="text-[#262424] cursor-pointer text-[16px] md:hidden font-medium hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]"
            onClick={() => toggle(0)}
          >
            {expanded[0] ? "Read Less" : "Read More"}
          </button>
        </div>
      </section>
      <section className="mt-8 md:mt-[42px]">
        <div className="flex flex-col gap-3 items-start py-4 md:py-0">
          <div
            className="relative overflow-hidden rounded-[20px] hidden md:block"
            onMouseEnter={() => setHovered((p) => ({ ...p, 1: true }))}
          >
            <img
              src="/images/industries/RealEstateCompanies.png"
              alt=""
              className="rounded-[20px] block"
            />
            <div
              className="absolute space-y-[42px] bottom-[62px] left-[75px] w-[705px] text-[#FBFBFB]"
              style={overlayStyle(1)}
            >
              <h3 className="text-[40px] font-bold">REAL ESTATE DEVELOPERS</h3>
              <p className="text-[20px] font-medium text-justify">
                Project developers need to establish credibility early — with
                investors, buyers, partners, and stakeholders alike. We help
                present developments with structure, clarity, and confidence by
                organizing project information, highlighting progress, and
                making portfolios easier to explore. The result is a digital
                experience that supports trust, strengthens perception, and
                helps projects gain attention from the right audience.
              </p>
            </div>
          </div>
          <img
            src="/images/industries/RealEstateCompaniesMobile.png"
            alt=""
            className="rounded-[10px] md:hidden w-full"
          />
          <h3 className="text-[#262424] text-[20px] font-medium md:hidden">
            Project Development
          </h3>
          <p
            className={`text-[#262424] tracking-tight leading-tight text-[16px] font-normal md:hidden overflow-hidden transition-all duration-300 ${
              expanded[1] ? "max-h-[500px]" : "max-h-[79px]"
            }`}
          >
            Project developers need to establish credibility early — with
            investors, buyers, partners, and stakeholders alike. We help present
            developments with structure, clarity, and confidence by organizing
            project information, highlighting progress, and making portfolios
            easier to explore. The result is a digital experience that supports
            trust, strengthens perception, and helps projects gain attention
            from the right audience.
          </p>
          <button
            className="text-[#262424] cursor-pointer text-[16px] md:hidden font-medium hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]"
            onClick={() => toggle(1)}
          >
            {expanded[1] ? "Read Less" : "Read More"}
          </button>
        </div>
      </section>
      <section className="mt-8 md:mt-[42px]">
        <div className="flex flex-col gap-3 items-start py-4 md:py-0">
          <div
            className="relative overflow-hidden rounded-[20px] hidden md:block"
            onMouseEnter={() => setHovered((p) => ({ ...p, 2: true }))}
          >
            <img
              src="/images/industries/LogisticCompanies.png"
              alt=""
              className="rounded-[20px] block scale-101"
            />
            <div
              className="absolute space-y-[42px] bottom-[62px] left-[75px] w-[705px] text-[#FBFBFB]"
              style={overlayStyle(2)}
            >
              <h3 className="text-[40px] font-bold">LOGISTICS COMPANIES</h3>
              <p className="text-[20px] font-medium text-justify">
                Logistics companies operate in an industry where speed,
                reliability, and operational clarity are essential. We help
                logistics brands communicate complex services in a way that
                feels simple, structured, and trustworthy — from transport
                capabilities to coverage, processes, and quote enquiries. This
                creates a stronger digital presence that supports visibility,
                builds authority, and turns interest into qualified leads.
              </p>
            </div>
          </div>
          <img
            src="/images/industries/LogisticCompaniesMobile.png"
            alt=""
            className="rounded-[10px] md:hidden w-full"
          />
          <h3 className="text-[#262424] text-[20px] font-medium md:hidden">
            Logistics Companies
          </h3>
          <p
            className={`text-[#262424] tracking-tight leading-tight text-[16px] font-normal md:hidden overflow-hidden transition-all duration-300 ${
              expanded[2] ? "max-h-[500px]" : "max-h-[79px]"
            }`}
          >
            Logistics companies operate in an industry where speed, reliability,
            and operational clarity are essential. We help logistics brands
            communicate complex services in a way that feels simple, structured,
            and trustworthy — from transport capabilities to coverage,
            processes, and quote enquiries. This creates a stronger digital
            presence that supports visibility, builds authority, and turns
            interest into qualified leads.
          </p>
          <button
            className="text-[#262424] cursor-pointer text-[16px] md:hidden font-medium hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]"
            onClick={() => toggle(2)}
          >
            {expanded[2] ? "Read Less" : "Read More"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Industries;
