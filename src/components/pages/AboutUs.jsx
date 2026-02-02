import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import "./AboutUs.css";
import Button from "../common/Button";
import { ChevronRight } from "lucide-react";

const ValueCard = ({
  title,
  description,
  initialWidth,
  variantWidth,
  backgrounds,
  border,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 1280) {
        setScale(1);
      } else if (window.innerWidth >= 1024) {
        setScale(0.75);
      } else {
        setScale(1);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-[20px] lg:text-[24px] xl:text-[32px] text-[#FBFBFB] rounded-[20px] shadow-[0px_0px_10px_0px_#00000040] cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={
        isHovered
          ? {
              width: variantWidth * scale,
              height: 460 * scale,
              background: backgrounds.variant,
              border: border?.variant || "0px solid transparent",
            }
          : {
              width: initialWidth * scale,
              height: 322 * scale,
              background: backgrounds.initial,
              border: border?.initial || "0px solid transparent",
            }
      }
      transition={{ duration: 0.3, ease: "linear" }}
    >
      <h1 className="font-bold drop-shadow-[0px_0px_5px_#00000059]">{title}</h1>
      <motion.p
        className="text-center font-medium tracking-[-2%] px-4 drop-shadow-[0px_0px_5px_#00000059] overflow-hidden"
        animate={
          isHovered
            ? { opacity: 1, height: "auto", marginTop: 24 * scale }
            : { opacity: 0, height: 0, marginTop: 0 }
        }
        transition={{ duration: 0.3, ease: "linear" }}
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
      className="flex flex-col px-5 items-stretch md:flex-row gap-[110px] xl:max-h-[577px] mt-[110px]"
      onMouseEnter={() => setHasHovered(true)}
    >
      <motion.div
        className="flex-1 flex flex-col gap-[75px] max-w-[692px]"
        initial={{ opacity: 0, y: 100 }}
        animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-6">
          <h2 className="lg:text-[36px] text-2xl font-semibold">
            Explore Our Vision and Concepts
          </h2>
          <h1 className="lg:text-[40px] text-4xl font-bold">Who We Are</h1>
        </div>

        <div className="flex flex-col gap-[75px]">
          <p className="xl:text-[24px] lg:text-[22px] text-xl text-justify">
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
      <section className="mt-22.5 pb-[35px]">
        <div className="aboutus-hero flex flex-col xl:ps-[130px] xl:pt-[110px] lg:ps-[100px] justify-center gap-10 px-6 py-10 rounded-[20px]">
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

      <section className="py-[75px] xl:px-[72px] px-5  my-[50px]">
        <div className="flex flex-col gap-[35px]">
          <h2 className="lg:text-[36px] text-2xl font-semibold">
            Driven by Values
          </h2>
          <h1 className="lg:text-[40px] text-3xl font-bold">
            FOUR VALUES THAT SHAPE EVERYTHING WE CREATE
          </h1>
        </div>
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-4 lg:gap-6 mt-[70px]">
          <ValueCard
            title="CREATIVITY"
            description="Every idea is crafted to inspire and deliver real results."
            initialWidth={363}
            variantWidth={380}
            backgrounds={{
              initial:
                "radial-gradient(130.55% 100% at 50% 100%, rgba(255, 37, 37, 0.85) 0%, #FF6819 100%)",
              variant:
                "radial-gradient(76.96% 51.2% at 50% 111.85%, #FF2525 0%, #FF6819 99.34%)",
            }}
            border={{
              initial: "0px solid transparent",
              variant: "2px solid rgba(251, 251, 251, 0.5)",
            }}
          />

          <ValueCard
            title="SIMPLICITY"
            description="We design clean, functional solutions that communicate with clarity."
            initialWidth={362}
            variantWidth={370}
            backgrounds={{
              initial:
                "radial-gradient(142.32% 100% at 50% 100%, #357CE1 0%, rgba(52, 220, 238, 0.85) 100%)",
              variant:
                "radial-gradient(80.42% 52.93% at 50% 100%, #357CE1 0%, #34DCEE 100%)",
            }}
          />

          <ValueCard
            title="INTEGRITY"
            description="We build trust through honesty and transparency in every interaction."
            initialWidth={362}
            variantWidth={370}
            backgrounds={{
              initial:
                "radial-gradient(121.3% 100% at 50% 100%, #7729CB 0%, rgba(196, 96, 216, 0.85) 100%)",
              variant:
                "radial-gradient(57.88% 47.72% at 50% 105.76%, #7729CB 0%, rgba(196, 96, 216, 0.85) 100%)",
            }}
            border={{
              initial: "0px solid transparent",
              variant: "2px solid #FBFBFB",
            }}
          />

          <ValueCard
            title="GROWTH"
            description="We constantly evolve, learn, and push boundaries to achieve more."
            initialWidth={363}
            variantWidth={370}
            backgrounds={{
              initial:
                "radial-gradient(119.62% 100% at 50% 100%, #24AC15 0%, #EDF261 100%)",
              variant:
                "radial-gradient(71.77% 60% at 52.3% 115.76%, #24AC15 0%, #B0DD4A 100%)",
            }}
            border={{
              initial: "0px solid transparent",
              variant: "2px solid #FBFBFB",
            }}
          />
        </div>
      </section>

      <section className="my-[50px]">
        <div className="bg-[#262424] rounded-2xl">
          <div className="flex flex-col mx-auto  gap-17.5 py-15 lg:py-[90px] lg:px-15 px-5  rounded-2xl">
            <div className=" flex flex-col gap-8.75 items-center text-[#FFFFFF]">
              <h1 className="lg:text-[40px] text-3xl font-bold text-center">
                Let’s turn your WHAT IF into WHAT’S NEXT
              </h1>
              <h2 className="lg:text-[24px] tracking-[-2%] max-w-[1101px] text-2xl font-medium  text-justify">
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
                icon={<ChevronRight className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-5 xl:h-5" />}
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
