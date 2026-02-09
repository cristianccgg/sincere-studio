import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import "./AboutUs.css";
import Button from "../common/Button";
import { ChevronRight } from "lucide-react";

const ValueCard = ({
  title,
  description,
  icon,
  initialWidth,
  variantWidth,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 1280) {
        setScale(1);
        setIsMobile(false);
      } else if (window.innerWidth >= 1024) {
        setScale(0.75);
        setIsMobile(false);
      } else if (window.innerWidth >= 768) {
        setScale(1);
        setIsMobile(false);
      } else {
        setScale(1);
        setIsMobile(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-[20px] lg:text-[24px] xl:text-[32px] text-[#262424] rounded-[20px] cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={
        isHovered
          ? {
              width: isMobile ? "100%" : variantWidth * scale,
              height: 460 * scale,
              background: "#FBFBFB",
              border: "3px solid #262424",
              boxShadow: "0px 0px 4px 0px #00000040",
            }
          : {
              width: isMobile ? "100%" : initialWidth * scale,
              height: 322 * scale,
              background: "#FBFBFB",
              border: "3px solid #262424",
              boxShadow: "0px 0px 0px 0px #00000000",
            }
      }
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <motion.img
        src={icon}
        alt=""
        className="w-12 h-12 lg:w-16 lg:h-16"
        animate={
          isHovered
            ? { opacity: 0, height: 0, marginBottom: 0 }
            : { opacity: 1, height: "auto", marginBottom: 27 * scale }
        }
        transition={{ duration: 0.3, ease: "easeIn" }}
      />
      <motion.h1
        className="font-bold"
        animate={
          isHovered
            ? { opacity: 0, height: 0 }
            : { opacity: 1, height: "auto" }
        }
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-center font-medium tracking-[-2%] px-4 overflow-hidden"
        animate={
          isHovered
            ? { opacity: 1, height: "auto", marginTop: 24 * scale }
            : { opacity: 0, height: 0, marginTop: 0 }
        }
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const WhoWeAreSection = () => {
  const [hasHovered, setHasHovered] = useState(false);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const hasEntered = hasHovered || inView;

  return (
    <div
      ref={sectionRef}
      className="flex flex-col  items-stretch md:flex-row lg:gap-[110px] gap-10 xl:max-h-[577px] mt-[110px]"
      onMouseEnter={() => setHasHovered(true)}
    >
      <motion.div
        className="flex-1 flex flex-col lg:gap-[75px] gap-10 max-w-[692px]"
        initial={{ opacity: 0, y: 100 }}
        animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-6">
          <h2 className="lg:text-[36px] text-xl font-semibold">
            Explore Our Vision and Concepts
          </h2>
          <h1 className="lg:text-[40px] text-2xl font-bold">Who We Are</h1>
        </div>

        <div className="flex flex-col gap-[75px]">
          <p className="xl:text-[24px] lg:text-[22px] text-lg text-justify">
            We are a team of young creatives driven by growth, passion, and
            purpose. <br /> Always seeking new ways to develop our potential, we
            channel that energy into every project and partnership. <br /> Each
            team member brings unique expertise and proven achievements,
            combining knowledge and experience with complete dedication.
            Together, we create with heart, focus, and a clear vision for
            meaningful results.
          </p>
          <Link to="/projects">
            <Button
              size="hero"
              fontWeight="medium"
              icon={<ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />}
              className="self-start"
            >
              See our Solutions
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: -100 }}
        animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <img
          src="/images/about us/who-we-are.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="">
      <section className="mt-11.25 pb-[35px]">
        <div className="aboutus-hero flex flex-col xl:ps-[130px] xl:pt-[110px] lg:ps-[100px] justify-center gap-10 px-6 py-10 rounded-[20px]">
          <h1 className="lg:text-[48px] text-2xl font-bold">
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

      <section className="pt-6.25 pb-25 ">
        <div className="flex flex-col md:flex-row  flex-wrap gap-6 lg:gap-[45px] items-stretch max-w-[1340px] mx-auto">
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
        <WhoWeAreSection />
      </section>

      <section className="lg:py-[75px] xl:px-[72px] lg:my-[50px]">
        <div className="flex flex-col gap-[35px]">
          <h2 className="lg:text-[36px] text-xl font-semibold">
            Driven by Values
          </h2>
          <h1 className="lg:text-[40px] text-2xl font-bold">
            FOUR VALUES THAT SHAPE EVERYTHING WE CREATE
          </h1>
        </div>
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-4 lg:gap-6 mt-10 lg:mt-[70px]">
          <ValueCard
            title="CREATIVITY"
            description="Every idea is crafted to inspire and deliver real results."
            icon="/images/about us/Group 22.png"
            initialWidth={363}
            variantWidth={380}
          />

          <ValueCard
            title="SIMPLICITY"
            description="We design clean, functional solutions that communicate with clarity."
            icon="/images/about us/Group 23.png"
            initialWidth={362}
            variantWidth={370}
          />

          <ValueCard
            title="INTEGRITY"
            description="We build trust through honesty and transparency in every interaction."
            icon="/images/about us/Group 21.png"
            initialWidth={362}
            variantWidth={370}
          />

          <ValueCard
            title="GROWTH"
            description="We constantly evolve, learn, and push boundaries to achieve more."
            icon="/images/about us/Group 24.png"
            initialWidth={363}
            variantWidth={370}
          />
        </div>
      </section>

      <section className="my-[50px]">
        <div className="bg-[#262424] rounded-2xl">
          <div className="flex flex-col mx-auto  gap-17.5 py-15 lg:py-[90px] lg:px-15 px-5  rounded-2xl">
            <div className=" flex flex-col gap-8.75 items-center text-[#FFFFFF]">
              <h1 className="lg:text-[40px] text-2xl font-bold text-center">
                Let’s turn your WHAT IF into WHAT’S NEXT
              </h1>
              <h2 className="lg:text-[24px] tracking-[-2%] max-w-[1101px] text-xl font-medium  text-justify">
                Every great project begins with curiosity — a spark, a question,
                a possibility. At Sincere Studio, we take that spark and shape
                it into minimal and impactful digital solutions. Whether it’s a
                new website, a digital product, or a marketing strategy, we’re
                here to transform ideas into results that last.
              </h2>
            </div>
            <Link to="/contacts" className="self-center">
              <Button
                size="hero"
                fontWeight="medium"
                variant="static"
                icon={
                  <ChevronRight className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-5 xl:h-5" />
                }
              >
                Make it Real
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
