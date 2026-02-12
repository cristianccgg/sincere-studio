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
    card: { width: "100%", height: "auto", padding: 12, gap: 24 },
    hover: { padding: 12, gap: 24 },
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
      <section className="sm:hidden mt-[3px]">
        <motion.div
          className="flex flex-col w-full text-[#262424] leading-[36px] mb-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            mass: 1,
            stiffness: 100,
            damping: 15,
          }}
        >
          <span className="font-nats text-[36px] font-normal leading-[36px]">
            SINCERE STUDIO
          </span>
          <div className="flex flex-wrap gap-x-2">
            <span className="font-rajdhani text-[24px] font-medium leading-[36px]">
              IT'S NOT JUST A DESIGN STUDIO
            </span>
          </div>
        </motion.div>
        <motion.img
          src="/images/landing/hero1.png"
          alt="hero-img1"
          className="w-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            mass: 1,
            stiffness: 100,
            damping: 15,
            delay: 0.2,
          }}
        />
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            mass: 1,
            stiffness: 100,
            damping: 15,
            delay: 0.3,
          }}
        >
          <Link to="/projects">
            <Button
              size="hero"
              fontWeight="medium"
              icon={<ChevronRight className="w-3 h-3" />}
            >
              See our Solutions
            </Button>
          </Link>
        </motion.div>
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
          <motion.div
            className="tracking-[-2%] leading-none"
            style={{ width: 1013 }}
            initial={{ opacity: 0, x: -100, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 64.02,
              damping: 12,
            }}
          >
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
          </motion.div>
          <div className="flex items-end justify-between mt-10">
            <motion.img
              src="/images/landing/hero1.png"
              alt="hero-img1"
              className="max-w-143.5"
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
              className="flex flex-col justify-between items-end w-107 h-50.75"
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
              <h2 className="font-medium text-[#444444] text-[48px] whitespace-nowrap">
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
            </motion.div>
          </div>
        </div>
        {/* SVG para definir el clipPath — valores interpolados según heroScale */}
        {(() => {
          // Dos tramos: lineal de 2xl a 883px, fijo de 883px a sm
          const threshold = 883 / 1728; // ~0.511
          const smScale = 640 / 1728; // ~0.370
          const smThreshold = 750 / 1728; // ~0.434 — debajo de aquí interpola hacia sm
          const t =
            heroScale >= threshold
              ? Math.min(Math.max((1 - heroScale) / 0.5, 0), 1)
              : heroScale >= smThreshold
                ? 0.28
                : 0.4 +
                  (0.4 - 0.28) *
                    (1 - (heroScale - smScale) / (smThreshold - smScale));
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
      <section
        ref={sectionRef}
        className="lg:mt-30 mt-[75px] lg:py-[29px] py-5 xl:px-[37px]"
        onMouseEnter={() => setSectionHovered(true)}
      >
        {/* Desktop: animate on sectionEntered */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: -50 }}
          animate={
            sectionEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h3 className="lg:text-[36px] text-[20px] leading-[100%] font-semibold text-[#403F3F]">
            We make more than a design
          </h3>
          <h2 className="lg:text-[40px] text-[24px] leading-[100%] font-bold text-[#262424] mt-5 xl:mb-22.5 md:mb-5 mb-[28px]">
            EVERY SERVICE, EVERY SKILL - <br />
            ALIGNED FOR MAXIMUM IMPACT
          </h2>
        </motion.div>
        {/* Mobile: title + first card enter together from left */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            mass: 1,
            stiffness: 100,
            damping: 15,
          }}
        >
          <h3 className="lg:text-[36px] text-[20px] leading-[100%] font-semibold text-[#403F3F]">
            We make more than a design
          </h3>
          <h2 className="lg:text-[40px] text-[24px] leading-[100%] font-bold text-[#262424] mt-5 xl:mb-22.5 md:mb-5 mb-[28px]">
            EVERY SERVICE, EVERY SKILL - <br />
            ALIGNED FOR MAXIMUM IMPACT
          </h2>
          {/* First card enters with title */}
          <Link to="/services" className="w-full">
            <motion.div
              className="cursor-pointer flex flex-col rounded-[20px] border w-full"
              style={{
                padding: sizes.card.padding,
                gap: sizes.card.gap,
                boxShadow: "0px 0px 6.3px 0px rgba(0,0,0,0.4)",
                borderColor: "#FBFBFB",
              }}
            >
              <div className="flex items-center justify-between text-[#101010]">
                <h3 className="text-[32px] leading-[100%] font-semibold">
                  Digital Products
                </h3>
                <AnimatedArrowIcon />
              </div>
              <p className="font-rajdhani font-normal text-[20px] leading-[100%] tracking-[-0.01em] text-[#101010] flex-1">
                We design and develop apps, templates, and interactive tools
                that deliver real value to your users.
              </p>
              <img
                src="/images/landing/we make more/digital-products.png"
                alt="digital-products-img"
                className="w-full h-[175px] object-cover rounded-[12px]"
              />
            </motion.div>
          </Link>
        </motion.div>
        {/* Mobile: card 2 - enters from left on scroll */}
        <motion.div
          className="md:hidden mt-[28px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            mass: 1,
            stiffness: 100,
            damping: 15,
          }}
        >
          <Link to="/services" className="w-full">
            <motion.div
              className="cursor-pointer flex flex-col rounded-[20px] border w-full"
              style={{
                padding: sizes.card.padding,
                gap: sizes.card.gap,
                boxShadow: "0px 0px 6.3px 0px rgba(0,0,0,0.4)",
                borderColor: "#FBFBFB",
              }}
            >
              <div className="flex items-center justify-between text-[#101010]">
                <h3 className="text-[32px] leading-[100%] font-semibold">
                  Web Design
                </h3>
                <AnimatedArrowIcon />
              </div>
              <p className="font-rajdhani font-normal text-[20px] leading-[100%] tracking-[-0.01em] text-[#101010] flex-1">
                Modern, responsive websites with clean aesthetics and a seamless
                user experience — tailored to your brand and goals.
              </p>
              <img
                src="/images/landing/we make more/web-design.png"
                alt="Web-design-img"
                className="w-full h-[175px] object-cover rounded-[12px]"
              />
            </motion.div>
          </Link>
        </motion.div>
        {/* Mobile: card 3 - enters from left on scroll */}
        <motion.div
          className="md:hidden mt-[28px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            mass: 1,
            stiffness: 100,
            damping: 15,
          }}
        >
          <Link to="/services" className="w-full">
            <motion.div
              className="cursor-pointer flex flex-col rounded-[20px] border w-full"
              style={{
                padding: sizes.card.padding,
                gap: sizes.card.gap,
                boxShadow: "0px 0px 6.3px 0px rgba(0,0,0,0.4)",
                borderColor: "#FBFBFB",
              }}
            >
              <div className="flex items-center justify-between text-[#101010]">
                <h3 className="text-[32px] leading-[100%] font-semibold whitespace-nowrap">
                  Marketing and Sales
                </h3>
                <AnimatedArrowIcon />
              </div>
              <p className="font-rajdhani font-normal text-[20px] leading-[100%] tracking-[-0.01em] text-[#101010] flex-1">
                From SEO and social media to funnels and optimization — we help
                you attract, convert, and grow your business.
              </p>
              <img
                src="/images/landing/we make more/marketing-sales.png"
                alt="Marketing-sales-img"
                className="w-full h-[175px] object-cover rounded-[12px]"
              />
            </motion.div>
          </Link>
        </motion.div>
        {/* Desktop: cards container animated together */}
        <motion.div
          className="hidden md:flex md:flex-row 2xl:gap-6 xl:gap-4 lg:gap-3 md:gap-3 items-center md:items-stretch justify-between"
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
                <h3 className="text-[32px] leading-[100%] 2xl:text-[40px] xl:text-3xl lg:text-xl font-semibold">
                  Digital Products
                </h3>
                <AnimatedArrowIcon />
              </div>
              <p className="font-rajdhani font-normal text-[20px] leading-[100%] 2xl:text-[24px] xl:text-lg lg:text-sm tracking-[-0.01em] md:text-justify text-[#101010] flex-1">
                We design and develop apps, templates, and interactive tools
                that deliver real value to your users.
              </p>
              <img
                src="/images/landing/we make more/digital-products.png"
                alt="digital-products-img"
                className="w-full md:h-auto h-[175px] object-cover rounded-[12px]"
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
                <h3 className="text-[32px] leading-[100%] 2xl:text-[40px] xl:text-3xl lg:text-xl font-semibold">
                  Web Design
                </h3>
                <AnimatedArrowIcon />
              </div>
              <p className="font-rajdhani font-normal text-[20px] leading-[100%] 2xl:text-[24px] xl:text-lg lg:text-sm xl:text-nowrap tracking-[-0.01em] md:text-justify text-[#101010] flex-1">
                Modern, responsive websites with clean <br /> aesthetics and a
                seamless user experience <br className="hidden md:block" /> —
                tailored to your brand and goals.
              </p>
              <img
                src="/images/landing/we make more/web-design.png"
                alt="Web-design-img"
                className="w-full md:h-auto h-[175px] object-cover rounded-[12px]"
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
                <h3 className="text-[32px] leading-[100%] 2xl:text-[40px] xl:text-3xl lg:text-xl font-semibold whitespace-nowrap">
                  Marketing and Sales
                </h3>
                <AnimatedArrowIcon />
              </div>
              <p className="font-rajdhani font-normal text-[20px] leading-[100%] 2xl:text-[24px] xl:text-lg lg:text-sm tracking-[-0.01em] md:text-justify text-[#101010] flex-1">
                From SEO and social media to funnels{" "}
                <br className="md:hidden" /> and optimization — we help you
                attract, convert, and grow your business.
              </p>
              <img
                src="/images/landing/we make more/marketing-sales.png"
                alt="Marketing-sales-img"
                className="w-full md:h-auto h-[175px] object-cover rounded-[12px]"
              />
            </motion.div>
          </Link>
        </motion.div>
      </section>

      <section className="lg:mt-30 mt-[75px]  lg:py-[29px] py-5 xl:px-[37px] ">
        {/* Desktop: no animation on titles */}
        <div className="hidden md:block">
          <h3 className="lg:text-[36px] text-[20px] leading-[100%] font-semibold text-[#403F3F] ">
            Explore Our Work
          </h3>
          <h2 className="lg:text-[40px] text-[24px] leading-[100%] font-bold text-[#403F3F] mt-5 xl:mb-22.5 lg:mb-17.5 md:mb-5 mb-[24px]">
            REAL PROJECTS, REAL RESULTS — <br />
            SEE HOW WE TURN IDEAS INTO DIGITAL EXPERIENCES.
          </h2>
        </div>
        {/* Mobile: titles enter from left */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            mass: 1,
            stiffness: 100,
            damping: 15,
          }}
        >
          <h3 className="lg:text-[36px] text-[20px] leading-[100%] font-semibold text-[#403F3F] ">
            Explore Our Work
          </h3>
          <h2 className="lg:text-[40px] text-[24px] leading-[100%] font-bold text-[#403F3F] mt-5 xl:mb-22.5 lg:mb-17.5 md:mb-5 mb-[24px]">
            REAL PROJECTS, REAL RESULTS — <br />
            SEE HOW WE TURN IDEAS INTO DIGITAL EXPERIENCES.
          </h2>
        </motion.div>
        <WorkAccordion />
      </section>

      <section
        ref={visionRef}
        className="lg:mt-30 mt-[75px] xl:max-h-[730px]  lg:py-[29px] py-5 xl:px-[37px] flex flex-col md:flex-row gap-10 justify-between"
        onMouseEnter={() => setVisionHovered(true)}
      >
        {/* Desktop layout */}
        <motion.div
          className="hidden md:flex max-w-182.5 flex-col justify-between text-justify"
          initial={{ opacity: 0, y: 80 }}
          animate={visionEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h3 className="2xl:text-[36px] lg:text-2xl  text-xl font-semibold text-[#403F3F] ">
            Explore Our Vision and Concepts
          </h3>
          <h2 className="2xl:text-[40px] lg:text-2xl md:text-lg text-2xl font-bold text-[#262424] mt-5 mb-3.75 ">
            WE BELIEVE DEEPLY IN OUR CLIENTS AND WE ARE COMMITTED TO GIVING THEM
            THE BEST POSSIBLE SUPPORT
          </h2>
          <p className="xl:text-[24px] lg:text-xl md:text-base text-justify text-xl mb-8.5 max-w-177.25 font-rajdhani font-normal text-[#262424] ">
            At Sincere Studio, we craft digital solutions that are not only
            beautiful but also effective. Our mission is to blend creativity
            with strategy to deliver work that builds trust and drives real
            results. From websites and digital products to marketing strategies,
            we help brands grow with purpose. <br /> <br />
            What inspires us is the desire to push boundaries and create with
            heart. For us, it's never just about projects — it's about turning
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
        <div className="hidden md:block">
          <img src="/images/landing/our vision/photo.png" alt="photo" />
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col">
          {/* Title + subtitle enter from left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 100,
              damping: 15,
            }}
          >
            <h3 className="text-[20px] leading-[100%] font-semibold text-[#403F3F]">
              Explore Our Vision and Concepts
            </h3>
            <h2 className="text-[24px] leading-[100%] font-bold text-[#262424] mt-5 mb-[24px]">
              WE BELIEVE DEEPLY IN OUR CLIENTS AND WE ARE COMMITTED TO GIVING
              THEM THE BEST POSSIBLE SUPPORT
            </h2>
          </motion.div>
          {/* Image enters from right */}
          <motion.img
            src="/images/landing/our vision/photo.png"
            alt="photo"
            className="w-full rounded-[12px] mb-[24px]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 100,
              damping: 15,
            }}
          />
          {/* Text + button enter from left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 100,
              damping: 15,
            }}
          >
            <p className="font-rajdhani font-normal text-[20px]  text-[#262424] mb-[16px]">
              What inspires us is the desire to push boundaries and create with
              heart. <br /> For us, it's never just about projects — it's about
              turning visions into lasting success.
            </p>
            <Link to="/contacts">
              <Button
                size="hero"
                fontWeight="semibold"
                icon={<ChevronRight className="w-3 h-3" />}
                style={{
                  fontSize: "18px",
                  lineHeight: "100%",
                }}
              >
                Start a Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section
        ref={testimonialsRef}
        className="lg:mt-30 mt-[75px] pb-5 border"
        onMouseEnter={() => setTestimonialsHovered(true)}
      >
        {/* Desktop titles */}
        <motion.div
          className="hidden lg:block"
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
        {/* Mobile titles */}
        <motion.div
          className="lg:hidden mb-[24px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            mass: 1,
            stiffness: 100,
            damping: 15,
          }}
        >
          <h3 className="text-[20px] leading-[100%] font-semibold text-[#403F3F]">
            Here are some of the nice things people have said about Us
          </h3>
          <h2 className="text-[24px] leading-[100%] font-bold text-[#262424] mt-5">
            THANK YOU FOR CHOOSING US
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

      <section className="bg-[#262424] rounded-[20px] lg:mt-30 mt-[75px] text-[#FFFFFF] md:py-22.5 md:px-10 2xl:px-105.25 xl:px-80 lg:px-40 sm:px-20 py-[46px] px-[58px]">
        {/* Desktop */}
        <div className="hidden md:flex flex-col gap-[42px] items-center text-center">
          <h2 className="lg:text-[40px] text-2xl font-bold text-center">
            DO YOU WANT TO WORK TOGETHER ?
          </h2>
          <h3 className="lg:text-[24px] text-xl font-medium tracking-[-0.02em] text-justify max-w-168.75">
            At Sincere Studio, we're ready to design, build, and grow digital
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
        {/* Mobile */}
        <div className="md:hidden flex flex-col">
          <h2 className="text-[24px] leading-[100%] font-bold tracking-[-0.02em] text-center">
            DO YOU WANT TO <br /> WORK TOGETHER ?
          </h2>
          <h3 className="text-[20px]  font-medium tracking-[-2%] text-justify mt-[24px]">
            At Sincere Studio, we're ready to design, build, and grow digital
            solutions that make an impact. Share your ideas with us — the first
            step toward your next big success starts here.
          </h3>
          <div className="mt-[42px] self-center">
            <Link to="/contacts">
              <Button
                size="hero"
                fontWeight="medium"
                variant="static"
                icon={<ChevronRight className="w-3 h-3" />}
              >
                Let's Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
