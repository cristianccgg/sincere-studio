import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <section>
        <div className="services-hero flex flex-col xl:ps-[130px] xl:pt-[110px] lg:ps-[100px] justify-center gap-10 px-6 py-10 rounded-[20px] shadow-[0px_0px_6px_0px_#00000059]">
          <h1 className="lg:text-[48px] text-3xl font-bold">Our Services</h1>
          <p className="max-w-[709px] lg:h-[227px]  h-[200px] lg:text-[24px] text-xl font-medium xl:mt-[55px]">
            At Sincere Studio, we combine creativity, strategy, and technology
            to help brands grow with purpose. Every service we provide is
            designed to deliver clarity, impact, and measurable results —
            whether you're launching a new digital product, refreshing your
            online presence, or scaling your business.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
