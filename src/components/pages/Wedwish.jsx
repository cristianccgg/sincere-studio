import React from "react";

const Wedwish = () => {
  return (
    <div className="max-w-[1287px] mx-auto">
      <div className="flex flex-col gap-6 mt-[58px] max-w-[1242px] mx-auto">
        <h1 className="lg:text-[40px] text-3xl font-bold">Wedwish</h1>
        <h2 className="lg:text-[36px] text-2xl font-semibold">
          A seamless platform for couples, guests, and unforgettable memories
        </h2>
        <div className="flex gap-1.75 flex-wrap">
          <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
            <h3>#WeddingPlatform</h3>
          </div>
          <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
            <h3>#UX/UI</h3>
          </div>
          <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
            <h3>#WebDesign</h3>
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
      <section className="mt-10 max-w-[1242px] mx-auto">
        <div
          className="rounded-lg relative h-75 sm:h-100 md:h-125 lg:h-145 xl:h-167 overflow-hidden"
          style={{
            background:
              "radial-gradient(47.34% 71.78% at 50% 54.19%, #2A9FE2 45.67%, #17577C 100%)",
          }}
        >
          <img
            src="/images/projects/wedwish/hero.png"
            alt="img-cover"
            className="absolute right-0 bottom-0  w-auto"
          />
        </div>
      </section>
      <section className="mt-[90px] max-w-[1277px] mx-auto">
        <div className="flex flex-col gap-6">
          <h1 className="lg:text-[36px] text-3xl font-semibold">
            About the Project
          </h1>
          <h2 className="lg:text-[24px] font-medium text-xl">
            Wedwish is a modern, user-friendly online platform that helps
            couples create and manage personalized gift registries and funds.
            The platform provides a seamless journey — from registration to fund
            creation, gift selection, and gratitude sharing. Its interface
            emphasizes clarity, warmth, and simplicity, making the experience
            intuitive and enjoyable for every user.
          </h2>
        </div>
        <div className="flex max-w-[1242px] mx-auto flex-col md:flex-row gap-10 lg:gap-0 mt-22.5 xl:justify-between md:justify-evenly items-center justify-center">
          <img
            src="/images/projects/wedwish/about/Home page 1 1.png"
            alt="about-img"
            className="w-full max-w-80 sm:max-w-96 md:max-w-72 lg:max-w-100 xl:max-w-149.25"
          />
          <img
            src="/images/projects/wedwish/about/Home page 1 2.png"
            alt="about-img"
            className="w-full max-w-80 sm:max-w-96 md:max-w-72 lg:max-w-100 xl:max-w-150.25"
          />
        </div>
      </section>

      <section className="mt-[90px] max-w-[1223px] mx-auto">
        <div className="flex flex-col gap-6 max-w-[1223px]">
          <h1 className="lg:text-[36px] text-3xl font-semibold">
            Challenges & Goals
          </h1>
          <h2 className="lg:text-[24px] tracking-[2%] text-justify font-medium text-xl  xl:h-[211px]">
            The main challenge was designing a multi-step process (registration,
            gift/fund setup, and profile management) that feels effortless while
            handling diverse scenarios — from individual gifts to collective
            contributions. Another key goal was to ensure the design remained
            visually inviting, building trust and emotional connection with
            couples, while maintaining clear navigation and functionality across
            all devices.
          </h2>
        </div>
        <div className="mt-[90px] max-w-[1277px] mx-auto">
          <img
            src="/images/projects/wedwish/about/hero-img-about.png"
            alt="about-img"
            className="challenges-img"
          />
        </div>
        <div className="flex flex-col gap-6 max-w-[1286px] mx-auto mt-[90px]">
          <h1 className="lg:text-[36px] text-3xl font-semibold">What We Did</h1>
          <h2 className="lg:text-[24px] tracking-[2%] text-justify font-medium text-xl">
            We created a clean and engaging design system that guides users
            through each step without confusion. Our work included:
          </h2>
          <div className="flex flex-col lg:text-[24px] gap-[14.4px]">
            <div className="flex items-center gap-[20.5px]">
              <img src="/images/services/Cube.png" alt="cube-icon" />
              <p className="font-normal">
                Building clear pathways for registration and profile setup
              </p>
            </div>
            <div className="flex items-center gap-[20.5px]">
              <img src="/images/services/Cube.png" alt="cube-icon" />
              <p className="font-normal">
                Enabling flexible creation and customization of gift lists and
                funds
              </p>
            </div>
            <div className="flex items-center gap-[20.5px]">
              <img src="/images/services/Cube.png" alt="cube-icon" />
              <p className="font-normal">
                Incorporating visual storytelling with warm, relatable imagery
              </p>
            </div>
            <div className="flex items-center gap-[20.5px]">
              <img src="/images/services/Cube.png" alt="cube-icon" />
              <p className="font-normal">
                Ensuring consistent branding and intuitive navigation throughout
                the user journey
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 max-w-[1287px] xl:mt-[90px] w-full mx-auto">
        {/* Outer wrapper: aspect-ratio preserves proportions, overflow-hidden clips */}
        <div
          className="rounded-sm overflow-hidden w-full"
          style={{
            aspectRatio: "1287 / 1139",
            background:
              "radial-gradient(47.34% 71.78% at 50% 54.19%, #2A9FE2 45.67%, #17577C 100%)",
          }}
        >
          {/* Fila 1 - con padding izquierdo */}
          <div className="flex gap-[2.875%] pt-[3.496%] ps-[4.002%]">
            <img
              src="/images/projects/wedwish/what-we-did/Brands 1.png"
              alt="img-cover"
              className="w-[32.71%] aspect-421/317 object-cover shrink-0"
            />
            <img
              src="/images/projects/wedwish/what-we-did/Brands 2.png"
              alt="img-cover"
              className="w-[32.71%] aspect-421/317 object-cover shrink-0"
            />
            <img
              src="/images/projects/wedwish/what-we-did/Brands 3.png"
              alt="img-cover"
              className="w-[32.71%] aspect-421/317 object-cover shrink"
            />
          </div>
          {/* Fila 2 - sin padding, pegada al borde izquierdo */}
          <div className="flex gap-[2.875%] pt-[3.496%]">
            <img
              src="/images/projects/wedwish/what-we-did/Brands 5.png"
              alt="img-cover-5"
              className="w-[24.71%] aspect-318/317 object-cover shrink-0"
            />
            <img
              src="/images/projects/wedwish/what-we-did/Brands 6.png"
              alt="img-cover"
              className="w-[32.71%] aspect-421/317 object-cover shrink-0"
            />
            <img
              src="/images/projects/wedwish/what-we-did/Brands 7.png"
              alt="img-cover"
              className="w-[32.71%] aspect-421/317 object-cover shrink-0"
            />
          </div>
          {/* Fila 3 - con padding izquierdo */}
          <div className="flex gap-[2.875%] pt-[3.496%] ps-[4.002%]">
            <img
              src="/images/projects/wedwish/what-we-did/untitled folder/Brands 5.png"
              alt="img-cover"
              className="w-[32.71%] aspect-421/317 object-cover shrink-0"
            />
            <img
              src="/images/projects/wedwish/what-we-did/untitled folder/Brands 6.png"
              alt="img-cover"
              className="w-[32.71%] aspect-421/317 object-cover shrink-0"
            />
            <img
              src="/images/projects/wedwish/what-we-did/untitled folder/Brands 7.png"
              alt="img-cover"
              className="w-[32.71%] aspect-421/317 object-cover shrink"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wedwish;
