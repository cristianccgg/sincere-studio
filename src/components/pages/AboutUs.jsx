import React from "react";
import "./Services.css";
import Button from "../common/Button";
import { ChevronRight } from "lucide-react";

const AboutUs = () => {
  return (
    <div>
      <section className="mt-22.5 pb-[35px]">
        <div className="services-hero flex flex-col xl:ps-[130px] xl:pt-[110px] lg:ps-[100px] justify-center gap-10 px-6 py-10 rounded-[20px] shadow-[0px_0px_6px_0px_#00000059]">
          <h1 className="lg:text-[48px] text-3xl font-bold">
            WHAT WE STAND FOR
          </h1>
          <p className="max-w-[709px] lg:h-[227px]  h-[200px] lg:text-[24px] text-xl font-medium xl:mt-[55px]">
            Our mission is to create bold, minimal digital solutions that build
            trust, captivate audiences, and deliver measurable business growth.
            By seamlessly blending creativity with strategic insight, we
            transform ideas into enduring success.
          </p>
        </div>
      </section>

      <section className="pt-6.25 pb-25">
        <div className="flex flex-col md:flex-row flex-wrap gap-6 lg:gap-[45px] items-stretch max-w-[1340px] mx-auto">
          <div className="flex items-center w-[90%] sm:w-[80%] lg:flex-1 mx-auto lg:mx-0 border border-[#403F3F] rounded-2xl px-6">
            <img
              src="/images/about us/fully-remote.png"
              alt="icon-1"
              className="w-24 h-24"
            />
            <h3>Fully remote and globally connected</h3>
          </div>
          <div className="flex items-center w-[90%] sm:w-[80%] lg:flex-1 mx-auto lg:mx-0 border border-[#403F3F] rounded-2xl px-6">
            <img
              src="/images/about us/personalized.png"
              alt="icon-2"
              className="w-24 h-24"
            />
            <h3>Personalized, client-focused solutions</h3>
          </div>
          <div className="flex items-center w-[90%] sm:w-[80%] lg:flex-1 mx-auto lg:mx-0 border border-[#403F3F] rounded-2xl px-6">
            <img
              src="/images/about us/agile.png"
              alt="icon-3"
              className="w-24 h-24"
            />
            <h3>Agile speed and flexible, efficient collaboration</h3>
          </div>
        </div>
        <div className="flex flex-col items-stretch md:flex-row gap-[110px] xl:max-h-[577px] mt-[110px]">
          <div className="flex-1  flex flex-col gap-[75px] max-w-[692px]">
            <div className="flex flex-col gap-6">
              <h2 className="lg:text-[36px] text-2xl font-semibold">
                Explore Our Vision and Concepts
              </h2>
              <h1 className="lg:text-[40px] text-4xl font-bold">Who We Are</h1>
            </div>

            <div className="flex flex-col gap-[75px]">
              <p className="xl:text-[24px] lg:text-[22px] text-xl text-justify">
                We are a team of young creatives driven by growth, passion, and
                purpose. <br /> Always seeking new ways to develop our
                potential, we channel that energy into every project and
                partnership. <br /> Each team member brings unique expertise and
                proven achievements, combining knowledge and experience with
                complete dedication. Together, we create with heart, focus, and
                a clear vision for meaningful results.
              </p>
              <Button
                size="hero"
                fontWeight="medium"
                icon={<ChevronRight size={22} />}
                className="self-start"
              >
                See our Solutions
              </Button>
            </div>
          </div>

          <div className="flex-1 rounded-2xl overflow-hidden">
            <img
              src="/images/about us/who-we-are.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-[75px] my-[50px]">
        <div className="flex flex-col gap-[35px]">
          <h2 className="lg:text-[36px] text-2xl font-semibold">
            Driven by Values
          </h2>
          <h1 className="lg:text-[40px] text-3xl font-bold">
            FOUR VALUES WTHAT SHAPE EVERYTHING WE CREATE
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-[70px]">
          <div className="w-[363px] h-[322px] text-[32px] font-bold text-[#FBFBFB] rounded-2xl flex items-center justify-center bg-[radial-gradient(130.55%_100%_at_50%_100%,rgba(255,37,37,0.85)_0%,#FF6819_100%),linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1))]">
            CREATIVITY
          </div>
          <div className="w-[363px] h-[322px] text-[32px] font-bold text-[#FBFBFB] rounded-2xl flex items-center justify-center bg-[radial-gradient(142.32%_100%_at_50%_100%,#357CE1_0%,rgba(52,220,238,0.85)_100%),linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1))]">
            SIMPLICITY
          </div>
          <div className="w-[363px] h-[322px] text-[32px] font-bold text-[#FBFBFB] rounded-2xl flex items-center justify-center bg-[radial-gradient(121.3%_100%_at_50%_100%,#7729CB_0%,rgba(196,96,216,0.85)_100%),linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1))]">
            INTEGRITY
          </div>
          <div className="w-[363px] h-[322px] text-[32px] font-bold text-[#FBFBFB] rounded-2xl flex items-center justify-center bg-[radial-gradient(119.62%_100%_at_50%_100%,#24AC15_0%,#EDF261_100%),linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1))]">
            GROUTH
          </div>
        </div>
      </section>

      <section className="   py-[50px] ">
        <div className="bg-[#262424] rounded-2xl">
          <div className="flex flex-col max-w-[1149px] mx-auto  gap-17.5 py-15 lg:py-[90px] lg:px-15 px-5  rounded-2xl">
            <div className=" flex flex-col gap-8.75 items-center text-[#FFFFFF]">
              <h1 className="lg:text-[40px] text-3xl font-bold text-center">
                Let’s turn your WHAT IF into WHAT’S NEXT
              </h1>
              <h2 className="lg:text-[24px] text-2xl font-medium  text-justify">
                Every great project begins with curiosity — a spark, a question,
                a possibility. At Sincere Studio, we take that spark and shape
                it into minimal and impactful digital solutions. Whether it’s a
                new website, a digital product, or a marketing strategy, we’re
                here to transform ideas into results that last.
              </h2>
            </div>
            <Button
              size="hero"
              fontWeight="medium"
              icon={<ChevronRight size={22} />}
              className="self-center"
            >
              Make it Real
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
