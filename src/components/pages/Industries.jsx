import React, { useState } from "react";

const Industries = () => {
  const [expanded, setExpanded] = useState({ 0: false, 1: false, 2: false });
  const toggle = (i) => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <div>
      <section className="bg-[#262424] h-[277px] w-full rounded-[20px] py-11.5 flex flex-col justify-center px-6">
        <div>
          <h2 className="text-[#FBFBFB] text-[24px] font-bold mb-6 tracking-[2%]">
            INDUSTRIES
          </h2>
          <p className="text-[#FFFFFF] text-[20px] font-medium -tracking-[3%]">
            We work with industries where reputation and first impressions
            matter. By understanding how they build trust and win clients, we
            create clear, confident digital experiences.
          </p>
        </div>
      </section>
      <section className="mt-6 px-5">
        <h2 className="text-[#403F3F] text-[24px] font-semibold mb-6">
          Explore Our Work
        </h2>
        <div className="flex flex-col gap-3 items-start py-4">
          <img
            src="/images/industries/ConcreteCompaniesMobile.png"
            alt=""
            className="rounded-[10px]"
          />
          <h3 className="text-[#262424] text-[20px] font-medium">
            Concreate Companies
          </h3>
          <p
            className={`text-[#262424] tracking-tight leading-tight text-[16px] font-normal overflow-hidden transition-all duration-300 ${
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
            className="text-[#262424] cursor-pointer text-[16px] font-medium hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]"
            onClick={() => toggle(0)}
          >
            {expanded[0] ? "Read Less" : "Read More"}
          </button>
        </div>
      </section>
      <section className="mt-8 px-5">
        <div className="flex flex-col gap-3 items-start py-4">
          <img
            src="/images/industries/RealEstateCompaniesMobile.png"
            alt=""
            className="rounded-[10px]"
          />
          <h3 className="text-[#262424] text-[20px] font-medium">
            Project Development
          </h3>
          <p
            className={`text-[#262424] tracking-tight leading-tight text-[16px] font-normal overflow-hidden transition-all duration-300 ${
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
            className="text-[#262424] cursor-pointer text-[16px] font-medium hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]"
            onClick={() => toggle(1)}
          >
            {expanded[1] ? "Read Less" : "Read More"}
          </button>
        </div>
      </section>
      <section className="mt-8 px-5">
        <div className="flex flex-col gap-3 items-start py-4">
          <img
            src="/images/industries/LogisticCompaniesMobile.png"
            alt=""
            className="rounded-[10px]"
          />
          <h3 className="text-[#262424] text-[20px] font-medium">
            Logistics Companies
          </h3>
          <p
            className={`text-[#262424] tracking-tight leading-tight text-[16px] font-normal overflow-hidden transition-all duration-300 ${
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
            className="text-[#262424] cursor-pointer text-[16px] font-medium hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]"
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
