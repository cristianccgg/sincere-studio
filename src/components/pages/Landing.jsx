import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import Footer from "../Footer";
import { motion, useInView } from "framer-motion";
import { CircleChevronRight, ChevronRight } from "lucide-react";
import AnimatedArrowIcon from "../common/AnimatedArrowIcon";
import WorkAccordion from "../carousel/WorkAccordion";
import TestimonialsCarousel from "../carousel/TestimonialsCarousel";

// Card sizes per breakpoint
const cardSizes = {
  "2xl": {
    container: { width: 480, height: 415 },
    card: { width: 477, height: 415, padding: 24, gap: 24 },
    hover: { width: 480, height: 455, padding: 40, gap: 28 },
  },
  xl: {
    container: { width: 380, height: 345 },
    card: { width: 377, height: 345, padding: 20, gap: 20 },
    hover: { width: 380, height: 365, padding: 32, gap: 24 },
  },
  lg: {
    container: { width: 290, height: "auto" },
    card: { width: 287, height: "auto", padding: 16, gap: 16 },
    hover: { width: 290, height: "auto", padding: 24, gap: 20 },
  },
  mobile: {
    container: { width: "100%", height: "auto" },
    card: { width: "100%", height: "auto", padding: 24, gap: 24 },
    hover: { padding: 32, gap: 28 },
  },
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("mobile");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1535) {
        setBreakpoint("2xl");
      } else if (width >= 1280) {
        setBreakpoint("xl");
      } else if (width >= 1024) {
        setBreakpoint("lg");
      } else {
        setBreakpoint("mobile");
      }
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
};

const useHeroScale = (designWidth = 1728) => {
  const [scale, setScale] = useState(() =>
    typeof window !== "undefined"
      ? Math.min(window.innerWidth / designWidth, 1)
      : 1,
  );

  useEffect(() => {
    const update = () => setScale(Math.min(window.innerWidth / designWidth, 1));
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [designWidth]);

  return scale;
};

const Landing = () => {
  const breakpoint = useBreakpoint();
  const sizes = cardSizes[breakpoint];
  const isMobile = breakpoint === "mobile";
  const needsStretch = isMobile || breakpoint === "lg";
  const heroScale = useHeroScale();

  const [sectionHovered, setSectionHovered] = useState(false);
  const [visionHovered, setVisionHovered] = useState(false);
  const [testimonialsHovered, setTestimonialsHovered] = useState(false);

  const sectionRef = useRef(null);
  const visionRef = useRef(null);
  const testimonialsRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const visionInView = useInView(visionRef, { once: true, amount: 0.3 });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.3,
  });

  const sectionEntered = sectionHovered || sectionInView;
  const visionEntered = visionHovered || visionInView;
  const testimonialsEntered = testimonialsHovered || testimonialsInView;

  return (
    <div>
      {/* Mobile hero layout (< sm) */}
      <section className="sm:hidden">
        <div className="flex flex-wrap w-full text-[#262424] items-baseline leading-none gap-x-2 mb-6">
          <span className="font-nats text-[40px] font-normal tracking-[-0.02em]">
            SINCERE
          </span>
          <span className="font-nats text-[40px] font-normal tracking-[-0.02em]">
            STUDIO
          </span>
          <span className="font-rajdhani text-[30px] tracking-[-0.02em]">
            IT'S
          </span>
          <span className="font-rajdhani text-[30px] tracking-[-0.02em]">
            NOT
          </span>
          <span className="font-rajdhani text-[30px] tracking-[-0.02em]">
            JUST
          </span>
          <span className="font-rajdhani text-[30px] tracking-[-0.02em]">
            A
          </span>
          <span className="font-rajdhani text-[30px] tracking-[-0.02em]">
            DESIGN
          </span>
          <span className="font-rajdhani text-[30px] tracking-[-0.02em]">
            STUDIO
          </span>
        </div>
        <img
          src="/images/landing/hero1.png"
          alt="hero-img1"
          className="w-full"
        />
        <div className="mt-5">
          <h2 className="font-medium text-[#444444] text-4xl mb-5">
            We Creating Values & <br />
            Scaling with Honestly
          </h2>
          <Link to="/projects">
            <Button
              size="hero"
              fontWeight="medium"
              icon={<ChevronRight className="w-3 h-3" />}
            >
              See our Solutions
            </Button>
          </Link>
        </div>
      </section>

      {/* Desktop/tablet hero layout (>= sm) with scale + clipPath */}
      <section
        className="relative overflow-hidden hidden sm:block"
        style={{ height: 840 * heroScale }}
      >
        {/* Contenido que escala proporcionalmente */}
        <div
          className="flex flex-col relative z-10 origin-top-left"
          style={{
            width: 1055,
            transform: `scale(${heroScale})`,
          }}
        >
          <div className="tracking-[-2%] leading-none" style={{ width: 1013 }}>
            <h1 className="font-nats flex justify-between items-baseline text-[128px]">
              <span>SINCERE</span>
              <span>STUDIO</span>
              <span className="font-rajdhani text-[96px]">IT'S</span>
            </h1>
            <p className="font-rajdhani flex justify-between items-baseline text-[96px]">
              <span>NOT</span>
              <span>JUST</span>
              <span>A</span>
              <span>DESIGN</span>
              <span>STUDIO</span>
            </p>
          </div>
          <div className="flex items-end justify-between mt-10">
            <img
              src="/images/landing/hero1.png"
              alt="hero-img1"
              className="max-w-143.5"
            />
            <div className="flex flex-col justify-between items-end w-107 h-50.75">
              <h2 className="font-medium text-[#444444] text-[48px] whitespace-nowrap">
                We Creating Values & <br />
                Scaling with Honestly
              </h2>
              <Link to="/projects">
                <button className="bg-[#E85102] text-[24px] font-medium text-[#FBFBFB] whitespace-nowrap px-4 py-2 rounded-full">
                  See our Solutions
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* SVG para definir el clipPath — valores interpolados según heroScale */}
        {(() => {
          // Dos tramos: lineal de 2xl a 883px, fijo de 883px a sm
          const threshold = 883 / 1728; // ~0.511
          const t =
            heroScale >= threshold
              ? Math.min(Math.max((1 - heroScale) / 0.5, 0), 1)
              : 0.28;
          const v = 0.45 + t * 0.1; // 0.45 → 0.515 (borde vertical)
          const vr = v + 0.02; // radio vertical
          const vi = v - 0.02; // radio interior
          const h = 0.0 + t * 0.1; // 0.00 → 0.10 (borde horizontal izq)
          const hr = h + 0.02; // radio horizontal
          return (
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
                  <path
                    d={`
                      M ${v.toFixed(3)} 0.02
                      Q ${v.toFixed(3)} 0, ${vr.toFixed(3)} 0
                      L 0.98 0
                      Q 1 0, 1 0.02
                      L 1 0.98
                      Q 1 1, 0.98 1
                      L ${vr.toFixed(3)} 1
                      Q ${v.toFixed(3)} 1, ${v.toFixed(3)} 0.98
                      L ${v.toFixed(3)} 0.75
                      Q ${v.toFixed(3)} 0.73, ${vi.toFixed(3)} 0.73
                      L ${hr.toFixed(3)} 0.73
                      Q ${h.toFixed(3)} 0.73, ${h.toFixed(3)} 0.71
                      L ${h.toFixed(3)} 0.34
                      Q ${h.toFixed(3)} 0.32, ${hr.toFixed(3)} 0.32
                      L ${vi.toFixed(3)} 0.32
                      Q ${v.toFixed(3)} 0.32, ${v.toFixed(3)} 0.30
                      Z
                    `}
                  />
                </clipPath>
              </defs>
            </svg>
          );
        })()}
        <motion.div
          className="absolute bg-cover hidden sm:block top-0 right-0"
          style={{
            width: 1020 * heroScale,
            height: 840 * heroScale,
            backgroundImage: "url('/images/landing/hero2.png')",
            backgroundPosition: "15% center",
            clipPath: "url(#heroClip)",
          }}
          initial={{ opacity: 0, x: 100, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            type: "spring",
            mass: 1,
            stiffness: 64.02,
            damping: 12,
            delay: 0.1,
          }}
        />
      </section>
      <section className="w-full mt-4 hidden">
        <div className="flex mx-auto relative">
          {/* Mobile/Tablet text */}
          <div className="flex flex-wrap w-full text-[#262424] items-baseline sm:hidden leading-none gap-x-2 mb-6">
            <span className="font-nats text-[40px] sm:text-[72px] lg:text-[96px] font-normal tracking-[-0.02em]">
              SINCERE
            </span>
            <span className="font-nats text-[40px] sm:text-[72px] lg:text-[96px] font-normal tracking-[-0.02em]">
              STUDIO
            </span>
            <span className="font-rajdhani text-[30px] sm:text-[54px] lg:text-[72px] tracking-[-0.02em]">
              IT'S
            </span>
            <span className="font-rajdhani text-[30px] sm:text-[54px] lg:text-[72px] tracking-[-0.02em]">
              NOT
            </span>
            <span className="font-rajdhani text-[30px] sm:text-[54px] lg:text-[72px] tracking-[-0.02em]">
              JUST
            </span>
            <span className="font-rajdhani text-[30px] sm:text-[54px] lg:text-[72px] tracking-[-0.02em]">
              A
            </span>
            <span className="font-rajdhani text-[30px] sm:text-[54px] lg:text-[72px] tracking-[-0.02em]">
              DESIGN
            </span>
            <span className="font-rajdhani text-[30px] sm:text-[54px] lg:text-[72px] tracking-[-0.02em]">
              STUDIO
            </span>
          </div>

          {/* Desktop text - scales proportionally based on 1728px, max at design size */}
          <motion.div
            className="hidden sm:flex flex-col justify-center lg:pr-8 xl:pr-0"
            style={{
              width: "min(59.8vw, 1033px)",
              height: "min(15.6vw, 270px)",
            }}
            initial={{ opacity: 0, x: -100, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 64.02,
              damping: 12,
            }}
          >
            <div className="flex justify-between text-[#262424] items-baseline leading-none">
              <span
                className="font-nats font-normal tracking-[-0.02em]"
                style={{ fontSize: "min(7vw, 128px)" }}
              >
                SINCERE
              </span>
              <span
                className="font-nats font-normal tracking-[-0.02em]"
                style={{ fontSize: "min(7vw, 128px)" }}
              >
                STUDIO
              </span>
              <span
                className="font-rajdhani tracking-[-0.02em]"
                style={{ fontSize: "min(5vw, 96px)" }}
              >
                IT'S
              </span>
            </div>
            <div className="flex justify-between items-baseline leading-none text-[#262424]">
              <span
                className="font-rajdhani tracking-[-0.02em]"
                style={{ fontSize: "min(5vw, 96px)" }}
              >
                NOT
              </span>
              <span
                className="font-rajdhani tracking-[-0.02em]"
                style={{ fontSize: "min(5vw, 96px)" }}
              >
                JUST
              </span>
              <span
                className="font-rajdhani tracking-[-0.02em]"
                style={{ fontSize: "min(5vw, 96px)" }}
              >
                A
              </span>
              <span
                className="font-rajdhani tracking-[-0.02em]"
                style={{ fontSize: "min(5vw, 96px)" }}
              >
                DESIGN
              </span>
              <span
                className="font-rajdhani tracking-[-0.02em]"
                style={{ fontSize: "min(5vw, 96px)" }}
              >
                STUDIO
              </span>
            </div>
          </motion.div>
          {/* SVG para definir el clipPath con esquinas redondeadas */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
                <path
                  d={`
                    M 0.45 0.02
                    Q 0.45 0, 0.47 0
                    L 0.98 0
                    Q 1 0, 1 0.02
                    L 1 0.98
                    Q 1 1, 0.98 1
                    L 0.47 1
                    Q 0.45 1, 0.45 0.98
                    L 0.45 0.75
                    Q 0.45 0.73, 0.43 0.73
                    L 0.02 0.73
                    Q 0 0.73, 0 0.71
                    L 0 0.34
                    Q 0 0.32, 0.02 0.32
                    L 0.43 0.32
                    Q 0.45 0.32, 0.45 0.30
                    Z
                  `}
                />
              </clipPath>
            </defs>
          </svg>
          <motion.div
            className="absolute bg-cover hidden lg:block lg:-right-2 xl:right-0"
            style={{
              width: "min(59vw, 1020px)",
              height: "min(48.6vw, 840px)",
              backgroundImage: "url('/images/landing/hero2.png')",
              backgroundPosition: "15% center",
              clipPath: "url(#heroClip)",
            }}
            initial={{ opacity: 0, x: 100, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 64.02,
              damping: 12,
              delay: 0.1,
            }}
          />
        </div>

        {/* Mobile/Tablet bottom section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between max-w-[1043px] lg:hidden">
          <img
            src="/images/landing/hero1.png"
            alt="hero-img1"
            className="md:max-w-143.5"
          />
          <div className="max-w-107">
            <h2 className="font-medium text-[#444444] md:text-[42px] text-4xl my-5 lg:my-0">
              We Creating Values & <br />
              Scaling with Honestly
            </h2>
            <Link to="/projects">
              <Button
                size="hero"
                fontWeight="medium"
                icon={<ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />}
              >
                See our Solutions
              </Button>
            </Link>
          </div>
        </div>
        {/* Desktop bottom section - scales proportionally */}
        <div
          className="hidden lg:flex items-end justify-between"
          style={{ maxWidth: "min(60.4vw, 1043px)" }}
        >
          <motion.img
            src="/images/landing/hero1.png"
            alt="hero-img1"
            style={{ maxWidth: "min(32vw, 574px)" }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 64.02,
              damping: 12,
              delay: 0.2,
            }}
          />
          <motion.div
            className=" bg-white md:pr-6 xl:pr-0  flex flex-col items-end"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 64.02,
              damping: 12,
              delay: 0.3,
            }}
          >
            <h2
              className="font-medium text-[#444444] leading-tight whitespace-nowrap"
              style={{ fontSize: "min(2.40vw, 48px)" }}
            >
              We Creating Values & <br />
              Scaling with Honestly
            </h2>
            <Link to="/projects" className="2xl:mt-[42px]">
              <Button
                size="hero"
                fontWeight="medium"
                icon={<ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />}
                style={{
                  fontSize: "min(1.16vw, 20px)",
                  padding: "min(0.46vw, 8px) min(0.93vw, 16px)",
                  gap: "min(0.58vw, 10px)",
                }}
              >
                See our Solutions
              </Button>
            </Link>
          </motion.div>
        </div>
        <div></div>
      </section>

      <section
        ref={sectionRef}
        className="lg:mt-30 mt-10 lg:py-[29px] py-5 xl:px-[37px]"
        onMouseEnter={() => setSectionHovered(true)}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={
            sectionEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h3 className="lg:text-[36px] text-xl font-semibold text-[#403F3F]">
            We make more than a design
          </h3>
          <h2 className="lg:text-[40px] text-2xl font-bold text-[#262424] mt-5 xl:mb-22.5 md:mb-5 mb-15">
            EVERY SERVICE, EVERY SKILL - <br />
            ALIGNED FOR MAXIMUM IMPACT
          </h2>
        </motion.div>
        <motion.div
          className="flex flex-col  md:flex-row 2xl:gap-6 xl:gap-4 lg:gap-3 md:gap-3 gap-15 items-center md:items-stretch justify-between"
          initial={{ opacity: 0, y: 80 }}
          animate={
            sectionEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
          }
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        >
          <Link
            to="/services"
            style={
              needsStretch
                ? {}
                : {
                    width: sizes.container.width,
                    height: sizes.container.height,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }
            }
            className={
              needsStretch
                ? "w-full sm:max-w-100 sm:mx-auto md:max-w-none md:mx-0 md:flex md:flex-col"
                : ""
            }
          >
            <motion.div
              className="cursor-pointer flex flex-col rounded-[20px] border md:border-0 md:flex-1 w-full"
              style={{
                width: isMobile ? undefined : sizes.card.width,
                height: needsStretch ? undefined : sizes.card.height,
                padding: sizes.card.padding,
                gap: sizes.card.gap,
                boxShadow: isMobile
                  ? "0px 0px 6.3px 0px rgba(0,0,0,0.4)"
                  : "none",
                borderColor: isMobile ? "#FBFBFB" : "transparent",
              }}
              whileHover={
                isMobile
                  ? {}
                  : {
                      width: sizes.hover.width,
                      height: sizes.hover.height,
                      padding: sizes.hover.padding,
                      gap: sizes.hover.gap,
                      borderColor: "#FBFBFB",
                      boxShadow: "0px 0px 6.3px 0px rgba(0,0,0,0.4)",
                    }
              }
              transition={{
                duration: 0.3,
                ease: "easeIn",
              }}
            >
              <div className="flex items-center justify-between text-[#101010]">
                <h3 className="text-xl 2xl:text-[40px] xl:text-3xl lg:text-xl font-semibold">
                  Digital Products
                </h3>
                <AnimatedArrowIcon />
              </div>
              <p className="font-rajdhani font-normal  text-lg 2xl:text-[24px] xl:text-lg lg:text-sm tracking-[-0.01em] text-justify text-[#101010] flex-1">
                We design and develop apps, templates, and interactive tools
                that deliver real value to your users.
              </p>
              <img
                src="/images/landing/we make more/digital-products.png"
                alt="digital-products-img"
              />
            </motion.div>
          </Link>
          <Link
            to="/services"
            style={
              needsStretch
                ? {}
                : {
                    width: sizes.container.width,
                    height: sizes.container.height,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }
            }
            className={
              needsStretch
                ? "w-full sm:max-w-100 sm:mx-auto md:max-w-none md:mx-0 md:flex md:flex-col"
                : ""
            }
          >
            <motion.div
              className="cursor-pointer flex flex-col rounded-[20px] border md:border-0 md:flex-1 w-full"
              style={{
                width: isMobile ? undefined : sizes.card.width,
                height: needsStretch ? undefined : sizes.card.height,
                padding: sizes.card.padding,
                gap: sizes.card.gap,
                boxShadow: isMobile
                  ? "0px 0px 6.3px 0px rgba(0,0,0,0.4)"
                  : "none",
                borderColor: isMobile ? "#FBFBFB" : "transparent",
              }}
              whileHover={
                isMobile
                  ? {}
                  : {
                      width: sizes.hover.width,
                      height: sizes.hover.height,
                      padding: sizes.hover.padding,
                      gap: sizes.hover.gap,
                      borderColor: "#FBFBFB",
                      boxShadow: "0px 0px 6.3px 0px rgba(0,0,0,0.4)",
                    }
              }
              transition={{
                duration: 0.3,
                ease: "easeIn",
              }}
            >
              <div className="flex items-center justify-between text-[#101010]">
                <h3 className="text-xl 2xl:text-[40px] xl:text-3xl lg:text-xl font-semibold">
                  Web Design
                </h3>
                <AnimatedArrowIcon />
              </div>
              <p className="font-rajdhani font-normal text-xl 2xl:text-[24px] xl:text-lg lg:text-sm xl:text-nowrap tracking-[-0.01em] text-justify text-[#101010] flex-1">
                Modern, responsive websites with clean <br /> aesthetics and a
                seamless user experience <br /> — tailored to your brand and
                goals.
              </p>
              <img
                src="/images/landing/we make more/web-design.png"
                alt="Web-design-img"
              />
            </motion.div>
          </Link>
          <Link
            to="/services"
            style={
              needsStretch
                ? {}
                : {
                    width: sizes.container.width,
                    height: sizes.container.height,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }
            }
            className={
              needsStretch
                ? "w-full sm:max-w-100 sm:mx-auto md:max-w-none md:mx-0 md:flex md:flex-col"
                : ""
            }
          >
            <motion.div
              className="cursor-pointer flex flex-col rounded-[20px] border md:border-0 md:flex-1 w-full"
              style={{
                width: isMobile ? undefined : sizes.card.width,
                height: needsStretch ? undefined : sizes.card.height,
                padding: sizes.card.padding,
                gap: sizes.card.gap,
                boxShadow: isMobile
                  ? "0px 0px 6.3px 0px rgba(0,0,0,0.4)"
                  : "none",
                borderColor: isMobile ? "#FBFBFB" : "transparent",
              }}
              whileHover={
                isMobile
                  ? {}
                  : {
                      width: sizes.hover.width,
                      height: sizes.hover.height,
                      padding: sizes.hover.padding,
                      gap: sizes.hover.gap,
                      borderColor: "#FBFBFB",
                      boxShadow: "0px 0px 6.3px 0px rgba(0,0,0,0.4)",
                    }
              }
              transition={{
                duration: 0.3,
                ease: "easeIn",
              }}
            >
              <div className="flex items-center justify-between text-[#101010]">
                <h3 className="text-2xl 2xl:text-[40px] xl:text-3xl lg:text-xl font-semibold whitespace-nowrap">
                  Marketing and Sales
                </h3>
                <AnimatedArrowIcon />
              </div>
              <p className="font-rajdhani font-normal text-xl 2xl:text-[24px] xl:text-lg lg:text-sm tracking-[-0.01em] text-justify text-[#101010] flex-1">
                From SEO and social media to funnels and optimization — we help
                you attract, convert, and grow your business.
              </p>
              <img
                src="/images/landing/we make more/marketing-sales.png"
                alt="Marketing-sales-img"
              />
            </motion.div>
          </Link>
        </motion.div>
      </section>

      <section className="lg:mt-30 mt-10  lg:py-[29px] py-5 xl:px-[37px] ">
        <h3 className="lg:text-[36px] text-xl font-semibold text-[#403F3F] ">
          Explore Our Work
        </h3>
        <h2 className="lg:text-[40px] text-2xl font-bold text-[#403F3F] mt-5 xl:mb-22.5 lg:mb-17.5 md:mb-5 mb-15">
          REAL PROJECTS, REAL RESULTS — <br />
          SEE HOW WE TURN IDEAS INTO DIGITAL EXPERIENCES.
        </h2>
        <WorkAccordion />
      </section>

      <section
        ref={visionRef}
        className="lg:mt-30 mt-10 xl:max-h-[680px]  lg:py-[29px] py-5 xl:px-[37px] flex flex-col lg:flex-row gap-10 justify-between"
        onMouseEnter={() => setVisionHovered(true)}
      >
        <motion.div
          className="max-w-182.5  flex flex-col justify-between"
          initial={{ opacity: 0, y: 80 }}
          animate={visionEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h3 className="2xl:text-[36px] text-xl font-semibold text-[#403F3F] ">
            Explore Our Vision and Concepts
          </h3>
          <h2 className="2xl:text-[40px] text-2xl font-bold text-[#262424] mt-5 mb-3.75">
            WE BELIEVE DEEPLY IN OUR CLIENTS AND ARE <br />
            COMMITTED TO GIVING THEM THE BEST <br /> POSSIBLE SUPPORT
          </h2>
          <p className="xl:text-[24px] text-justify text-xl mb-8.5 max-w-177.25 font-rajdhani font-normal text-[#262424] ">
            At Sincere Studio, we craft digital solutions that are not only
            beautiful but also effective. Our mission is to blend creativity
            with strategy to deliver work that builds trust and drives real
            results. From websites and digital products to marketing strategies,
            we help brands grow with purpose. <br /> <br />
            What inspires us is the desire to push boundaries and create with
            heart. For us, it’s never just about projects — it’s about turning
            visions into lasting success.
          </p>
          <Link to="/contacts">
            <Button
              size="hero"
              fontWeight="medium"
              icon={<ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />}
              style={{
                fontSize: "clamp(14px, 1.16vw, 20px)",
                padding: "clamp(6px, 0.46vw, 8px) clamp(12px, 0.93vw, 16px)",
                gap: "clamp(8px, 0.58vw, 10px)",
              }}
            >
              Let's create something great
            </Button>
          </Link>
        </motion.div>
        <motion.div
          className="md:px-3 xl:max-w-[668px] w-full md:w-fit flex flex-col gap-3"
          initial={{ opacity: 0, y: -80 }}
          animate={
            visionEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-col md:flex-row justify-between gap-3"
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={
              visionEntered
                ? { opacity: 1, x: 0, y: 0 }
                : { opacity: 0, x: -50, y: 50 }
            }
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          >
            <svg width="0" height="0" style={{ position: "absolute" }}>
              <defs>
                <clipPath id="notchClip" clipPathUnits="objectBoundingBox">
                  <path
                    d={`
          M 0.03 0
          L 0.795 0
          Q 0.825 0, 0.825 0.03
          L 0.825 0.145
          Q 0.825 0.175, 0.855 0.175
          L 0.97 0.175
          Q 1 0.175, 1 0.205
          L 1 0.97
          Q 1 1, 0.97 1
          L 0.03 1
          Q 0 1, 0 0.97
          L 0 0.03
          Q 0 0, 0.03 0
          Z
        `}
                  />
                </clipPath>
              </defs>
            </svg>
            <div
              className="bg-[#E2E3E4] md:max-h-[200px] 2xl:text-[20px] text-[#262424] rounded-[10px] flex flex-col gap-6 px-4 pt-4 pb-7.5 w-full md:max-w-[296px]"
              style={{
                clipPath: "url(#notchClip)",
                WebkitClipPath: "url(#notchClip)",
              }}
            >
              <h2 className="font-semibold">Clarity Over Noise</h2>
              <p className="tracking-tight">
                Every element serves a purpose — clean layouts, strong
                typography, and intentional whitespace that let your message
                breathe.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-[10px] relative border-[#D9DDE0] border overflow-hidden">
              <img
                src="/images/landing/our vision/dark and light mode 1.png"
                alt="dark-light-mode-img"
                className="w-full md:w-84.25 md:max-h-[200px]"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col-reverse md:flex-row justify-between gap-3 md:max-h-[200px]"
            initial={{ opacity: 0, x: 50, y: -50 }}
            animate={
              visionEntered
                ? { opacity: 1, x: 0, y: 0 }
                : { opacity: 0, x: 50, y: -50 }
            }
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          >
            <div className="w-full md:w-88.75 flex items-center justify-center rounded-[10px] relative border-[#D9DDE0] border overflow-hidden">
              <img
                src="/images/landing/our vision/Frame 12712 1.png"
                alt="dark-light-mode-img"
                className="w-full md:max-w-84.25"
              />
            </div>
            <div
              className="bg-[#E9E0F0] md:max-h-[200px] 2xl:text-[20px] text-[#262424] rounded-[10px] flex flex-col gap-6 px-4 pt-4 pb-7.5 w-full md:max-w-[298px]"
              style={{
                clipPath: "url(#notchClip)",
                WebkitClipPath: "url(#notchClip)",
              }}
            >
              <h2 className="font-semibold">
                Bold in Message, <br /> Minimal in Form
              </h2>
              <p>
                Our work is visually striking but never overwhelming — balance
                is our signature.
              </p>
            </div>
          </motion.div>
          <div className="flex flex-col md:flex-row justify-between gap-3">
            <motion.div
              className="bg-[#FFE5D8] md:max-h-[200px] 2xl:text-[20px] text-[#262424] rounded-[10px] flex flex-col gap-6 px-4 pt-4 pb-7.5 w-full md:max-w-74"
              style={{
                clipPath: "url(#notchClip)",
                WebkitClipPath: "url(#notchClip)",
              }}
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={
                visionEntered
                  ? { opacity: 1, x: 0, y: 0 }
                  : { opacity: 0, x: 50, y: 50 }
              }
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            >
              <h2 className="font-semibold">Designed to Convert</h2>
              <p className="tracking-tight">
                We fuse design with strategy — every pixel supports a business
                goal, whether it's engagement, retention, or sales.
              </p>
            </motion.div>
            <motion.div
              className="w-full md:w-88.75 md:max-h-[200px] pt-1.75 flex items-center justify-center rounded-[10px] relative border-[#D9DDE0] border overflow-hidden"
              initial={{ opacity: 0, x: -50, y: -50 }}
              animate={
                visionEntered
                  ? { opacity: 1, x: 0, y: 0 }
                  : { opacity: 0, x: -50, y: -50 }
              }
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            >
              <img
                src="/images/landing/our vision/Frame 298 1.png"
                alt="dark-light-mode-img"
                className="w-full md:max-w-84.25 md:max-h-[200px]"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section
        ref={testimonialsRef}
        className="lg:mt-30 mt-10 pb-5"
        onMouseEnter={() => setTestimonialsHovered(true)}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={
            testimonialsEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h3 className="lg:text-[36px] text-2xl font-semibold text-[#403F3F] text-center">
            Here are some of the nice things people have said about Us
          </h3>
          <h2 className="lg:text-[40px] text-xl font-bold text-[#262424] mt-5 mb-20 text-center">
            WE BELIEVE STRONGLY IN OUR CLIENTS & WANT <br /> TO GIVE THEM
            OPTIMAL SUPPORT
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            testimonialsEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        >
          <TestimonialsCarousel />
        </motion.div>
      </section>

      <section className="bg-[#262424] rounded-[20px] lg:mt-30 mt-10 text-[#FFFFFF] py-10 md:py-22.5 px-10 2xl:px-105.25 xl:px-80 lg:px-40  sm:px-20">
        {" "}
        <div className="flex flex-col gap-[42px] items-center text-center">
          <h2 className="lg:text-[40px] text-2xl font-bold  text-center">
            DO YOU WANT TO WORK TOGETHER ?
          </h2>
          <h3 className="lg:text-[24px] text-xl font-medium tracking-[-2%] text-justify max-w-168.75">
            At Sincere Studio, we’re ready to design, build, and grow digital
            solutions that make an impact. Share your ideas with us — the first
            step toward your next big success starts here.
          </h3>

          <Link to="/contacts">
            <Button
              size="hero"
              fontWeight="medium"
              variant="static"
              icon={<ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />}
            >
              Let's Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
