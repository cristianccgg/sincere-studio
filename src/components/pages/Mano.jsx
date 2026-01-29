import React from "react";

const Mano = () => {
  return (
    <div className="max-w-[1242px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-6 mt-[58px]">
        <h1 className="lg:text-[40px] text-3xl font-bold">MANO</h1>
        <h2 className="lg:text-[36px] text-2xl font-semibold">
          Scroll. Tap. Own It.
        </h2>

        <div className="flex gap-1.75 flex-wrap">
          <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
            <h3>#AppDesign</h3>
          </div>
          <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
            <h3>#FashionTech</h3>
          </div>
          <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
            <h3>#UX/UI</h3>
          </div>
          <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
            <h3>#EcommerceDesign</h3>
          </div>
          <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
            <h3>#Prototyping</h3>
          </div>
          <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
            <h3>#Developing</h3>
          </div>
        </div>
      </div>

      {/* Hero Section with iPhones */}
      <section className="mt-10">
        <div className="max-w-[1242px] h-[400px] lg:h-[580px] mx-auto px-5 lg:px-[135px] relative overflow-hidden rounded-lg">
          {/* Background Image */}
          <img
            src="/images/projects/mano/background-hero.png"
            alt="MANO Background"
            className="absolute inset-0 w-full h-full object-cover bg-[#161517]"
          />

          {/* iPhone 1 - Left large phone (visible on all screens) */}
          <img
            src="/images/projects/mano/iPhone 13 Pro1.png"
            alt="MANO App Screen 1"
            className="absolute left-1/2 -translate-x-1/2 lg:left-[135px] lg:translate-x-0 top-1/2 -translate-y-1/2 h-[85%] w-auto z-10"
          />

          {/* iPhone 2 - Top right small (hidden on mobile) */}
          <img
            src="/images/projects/mano/iPhone 13 Pro2.png"
            alt="MANO App Screen 2"
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 w-[251px] z-20"
          />

          {/* iPhone 3 - Center phone (hidden on mobile) */}
          <img
            src="/images/projects/mano/iPhone 13 Pro3.png"
            alt="MANO App Screen 3"
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 w-[251px] z-20"
          />

          {/* iPhone 4 - Right side phone (hidden on mobile) */}
          <img
            src="/images/projects/mano/iPhone 13 Pro4.png"
            alt="MANO App Screen 4"
            className="hidden lg:block absolute right-[135px] top-0 w-[251px] z-10"
          />

          {/* iPhone 5 - Bottom right (hidden on mobile) */}
          <img
            src="/images/projects/mano/iPhone 13 Pro5.png"
            alt="MANO App Screen 5"
            className="hidden lg:block absolute right-[135px] bottom-0 w-[251px] z-10"
          />
        </div>
      </section>
    </div>
  );
};

export default Mano;
