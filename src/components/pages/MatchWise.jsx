import React from "react";

const MatchWise = () => {
  return (
    <div className=" px-5 lg:px-0">
      <div className="max-w-[1242px] mx-auto">
        <div className="flex flex-col gap-6 mt-[58px]">
          <h1 className="lg:text-[40px] text-3xl font-bold">MatchWise</h1>
          <h2 className="lg:text-[36px] text-2xl font-semibold">
            It’s the smart connection between you and your freelance career
          </h2>
          <div className="flex gap-1.75 flex-wrap">
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#FreelancePlatform</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#DigitalProduct</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#WebDesign</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#UXUI</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#MarketplaceDesign</h3>
            </div>
          </div>
        </div>
        {/* Hero Section with iPhones */}
        <section className="mt-10">
          <div className="rounded-lg">
            <img src="/images/projects/MatchWise/hero.png" alt="img-cover" />
          </div>
        </section>
        <section className="mt-[90px]">
          <div className="flex flex-col gap-6">
            <h1 className="lg:text-[36px] text-3xl font-semibold">
              About the Project
            </h1>
            <h2 className="lg:text-[24px] font-medium text-xl">
              LShot is a professional photographer specializing in portrait,
              fashion, and event photography. His goal was to create a modern,
              minimal, and elegant website that reflects his artistic style
              while making it easy for potential clients to explore his
              portfolio and book services. The site needed to serve as both a
              visual gallery and a personal brand statement.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-10 lg:gap-0 mt-[90px] md:items-start xl:justify-evenly items-center justify-center">
            <img
              src="/images/projects/Leo Kirilov/about/Project Image Container.png"
              alt="about-img"
              className="w-90 xl:w-auto"
            />
            <img
              src="/images/projects/Leo Kirilov/about/Project Image Container2.png"
              alt="about-img"
              className="max-h-[728px] w-90 xl:w-auto"
            />
          </div>
        </section>

        <section className="mt-[90px]">
          <div className="flex flex-col gap-6 max-w-[1223px]">
            <h1 className="lg:text-[36px] text-3xl font-semibold">
              Challenges & Goals
            </h1>
            <h2 className="lg:text-[24px] tracking-[2%] text-justify font-medium text-xl  xl:h-[211px]">
              The biggest challenge was balancing aesthetics with functionality.
              As a photographer, his work had to take center stage, requiring a
              design that was visually striking yet minimal enough not to
              distract from the images. The site also needed to handle
              high-resolution photography with fast load times, ensuring an
              optimal experience on both desktop and mobile. Another key goal
              was to structure the portfolio into clear categories for intuitive
              navigation, while also integrating business tools to help
              potential clients connect and book sessions seamlessly.
            </h2>
          </div>
          <div className="mt-[90px] flex items-center justify-center">
            <img
              src="/images/projects/Leo Kirilov/challenges/Image Gallery Container.png"
              alt="challenges-img"
            />
          </div>
          <div className="flex flex-col gap-6 max-w-[1223px] mt-[90px]">
            <h1 className="lg:text-[36px] text-3xl font-semibold">
              What We Did
            </h1>
            <h2 className="lg:text-[24px] tracking-[2%] text-justify font-medium text-xl">
              We designed a minimalist, responsive website optimized for both
              desktop and mobile. Key features included:
            </h2>
            <div className="flex flex-col lg:text-[24px] gap-[14.4px]">
              <div className="flex items-center gap-[20.5px]">
                <img src="/images/services/Cube.png" alt="cube-icon" />
                <p className="font-normal">
                  Organized portfolio sections by category for intuitive
                  browsing
                </p>
              </div>
              <div className="flex items-center gap-[20.5px]">
                <img src="/images/services/Cube.png" alt="cube-icon" />
                <p className="font-normal">
                  Integrated booking and contact form for streamlined client
                  inquiries
                </p>
              </div>
              <div className="flex items-center gap-[20.5px]">
                <img src="/images/services/Cube.png" alt="cube-icon" />
                <p className="font-normal">
                  Optimized high-resolution images for fast load speeds without
                  losing quality
                </p>
              </div>
              <div className="flex items-center gap-[20.5px]">
                <img src="/images/services/Cube.png" alt="cube-icon" />
                <p className="font-normal">
                  Crafted a visually balanced layout that highlighted LShot’s
                  photography style while maintaining simplicity
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MatchWise;
