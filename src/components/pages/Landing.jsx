import React, { useState, useEffect } from "react";
import Button from "../common/Button";
import { motion } from "framer-motion";
import { CircleChevronRight } from "lucide-react";

// Card sizes per breakpoint
const cardSizes = {
  "2xl": {
    container: { width: 480, height: 455 },
    card: { width: 477, height: 415, padding: 24, gap: 24 },
    hover: { width: 480, height: 455, padding: 40, gap: 28 },
  },
  xl: {
    container: { width: 380, height: 400 },
    card: { width: 377, height: 365, padding: 20, gap: 20 },
    hover: { width: 380, height: 400, padding: 32, gap: 24 },
  },
  lg: {
    container: { width: 290, height: 340 },
    card: { width: 287, height: 310, padding: 16, gap: 16 },
    hover: { width: 290, height: 340, padding: 24, gap: 20 },
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

const Landing = () => {
  const breakpoint = useBreakpoint();
  const sizes = cardSizes[breakpoint] || null;

  return (
    <div>
      <section className="w-full mt-4">
        <div className="flex mx-auto relative">
          {/* Mobile/Tablet text */}
          <div className="flex flex-col w-full justify-center px-4 lg:hidden">
            <div className="flex flex-wrap justify-between items-baseline leading-none gap-x-2">
              <span className="font-nats text-[48px] sm:text-[72px] lg:text-[96px] font-normal tracking-[-0.02em]">
                SINCERE
              </span>
              <span className="font-nats text-[48px] sm:text-[72px] lg:text-[96px] font-normal tracking-[-0.02em]">
                STUDIO
              </span>
              <span className="font-rajdhani text-[36px] sm:text-[54px] lg:text-[72px] tracking-[-0.02em]">
                IT'S
              </span>
            </div>
            <div className="flex flex-wrap justify-between items-baseline leading-none gap-x-2">
              <span className="font-rajdhani text-[36px] sm:text-[54px] lg:text-[72px] tracking-[-0.02em]">
                NOT
              </span>
              <span className="font-rajdhani text-[36px] sm:text-[54px] lg:text-[72px] tracking-[-0.02em]">
                JUST
              </span>
              <span className="font-rajdhani text-[36px] sm:text-[54px] lg:text-[72px] tracking-[-0.02em]">
                A
              </span>
              <span className="font-rajdhani text-[36px] sm:text-[54px] lg:text-[72px] tracking-[-0.02em]">
                DESIGN
              </span>
              <span className="font-rajdhani text-[36px] sm:text-[54px] lg:text-[72px] tracking-[-0.02em]">
                STUDIO
              </span>
            </div>
          </div>
          {/* Desktop text - scales proportionally based on 1728px, max at design size */}
          <div
            className="hidden lg:flex flex-col justify-center"
            style={{
              width: "min(59.8vw, 1033px)",
              height: "min(15.6vw, 270px)",
            }}
          >
            <div className="flex justify-between items-baseline leading-none">
              <span
                className="font-nats font-normal tracking-[-0.02em]"
                style={{ fontSize: "min(7.4vw, 128px)" }}
              >
                SINCERE
              </span>
              <span
                className="font-nats font-normal tracking-[-0.02em]"
                style={{ fontSize: "min(7.4vw, 128px)" }}
              >
                STUDIO
              </span>
              <span
                className="font-rajdhani tracking-[-0.02em]"
                style={{ fontSize: "min(5.56vw, 96px)" }}
              >
                IT'S
              </span>
            </div>
            <div className="flex justify-between items-baseline leading-none">
              <span
                className="font-rajdhani tracking-[-0.02em]"
                style={{ fontSize: "min(5.56vw, 96px)" }}
              >
                NOT
              </span>
              <span
                className="font-rajdhani tracking-[-0.02em]"
                style={{ fontSize: "min(5.56vw, 96px)" }}
              >
                JUST
              </span>
              <span
                className="font-rajdhani tracking-[-0.02em]"
                style={{ fontSize: "min(5.56vw, 96px)" }}
              >
                A
              </span>
              <span
                className="font-rajdhani tracking-[-0.02em]"
                style={{ fontSize: "min(5.56vw, 96px)" }}
              >
                DESIGN
              </span>
              <span
                className="font-rajdhani tracking-[-0.02em]"
                style={{ fontSize: "min(5.56vw, 96px)" }}
              >
                STUDIO
              </span>
            </div>
          </div>
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
          <div
            className="absolute -right-px bg-cover hidden lg:block"
            style={{
              width: "min(59vw, 1020px)",
              height: "min(48.6vw, 840px)",
              backgroundImage: "url('/images/landing/hero2.png')",
              backgroundPosition: "15% center",
              clipPath: "url(#heroClip)",
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
            <h2 className="font-medium text-[#444444] text-[42px]">
              We Creating Values & <br />
              Scaling with Honestly
            </h2>
            <Button fontWeight="medium" icon={<CircleChevronRight size={36} />}>
              See our Solutions
            </Button>
          </div>
        </div>
        {/* Desktop bottom section - scales proportionally */}
        <div
          className="hidden lg:flex items-end justify-between"
          style={{ maxWidth: "min(60.4vw, 1043px)" }}
        >
          <img
            src="/images/landing/hero1.png"
            alt="hero-img1"
            style={{ maxWidth: "min(32vw, 574px)" }}
          />
          <div className="shrink-0 bg-white pr-4 xl:pr-0 flex flex-col items-end">
            <h2
              className="font-medium text-[#444444] leading-tight whitespace-nowrap"
              style={{ fontSize: "min(2.78vw, 48px)" }}
            >
              We Creating Values & <br />
              Scaling with Honestly
            </h2>
            <Button
              fontWeight="medium"
              icon={
                <CircleChevronRight
                  style={{
                    width: "min(2.1vw, 36px)",
                    height: "min(2.1vw, 36px)",
                  }}
                />
              }
              style={{
                fontSize: "min(1.16vw, 20px)",
                padding: "min(0.7vw, 12px) min(1.4vw, 24px)",
              }}
            >
              See our Solutions
            </Button>
          </div>
        </div>
        <div></div>
      </section>

      <section className="mt-30">
        <h3 className="text-[36px] font-semibold text-[#403F3F] ">
          We make more then a design
        </h3>
        <h2 className="text-[40px] font-bold text-[#262424] mt-5 mb-22.5">
          EVERY SERVICE, EVERY SKILL - <br />
          ALIGNED FOR MAXIMUM IMPACT
        </h2>
        <div className="flex flex-col lg:flex-row 2xl:gap-6 xl:gap-4 lg:gap-3 gap-15 items-center justify-between">
          {sizes ? (
            <>
              <div
                style={{
                  width: sizes.container.width,
                  height: sizes.container.height,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  className="cursor-pointer flex flex-col rounded-[20px] border border-transparent"
                  style={{
                    width: sizes.card.width,
                    height: sizes.card.height,
                    padding: sizes.card.padding,
                    gap: sizes.card.gap,
                    boxShadow: "none",
                  }}
                  whileHover={{
                    width: sizes.hover.width,
                    height: sizes.hover.height,
                    padding: sizes.hover.padding,
                    gap: sizes.hover.gap,
                    borderColor: "#FBFBFB",
                    borderWidth: 1,
                    boxShadow: "0px 0px 6.3px 0px rgba(0,0,0,0.4)",
                  }}
                  transition={{
                    type: "spring",
                    mass: 1,
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <div className="flex items-center justify-between text-[#101010]">
                    <h3 className="2xl:text-[40px] xl:text-3xl lg:text-xl font-semibold">
                      Digital Products
                    </h3>
                    <CircleChevronRight className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-[42px] 2xl:h-[42px]" />
                  </div>
                  <p className="font-rajdhani font-normal 2xl:text-[24px] xl:text-lg lg:text-sm leading-[100%] tracking-[-0.01em] text-justify text-[#101010]">
                    We design and develop apps, templates, and interactive tools
                    that deliver real value to your users.
                  </p>
                  <img
                    src="/images/landing/we make more/digital-products.png"
                    alt="digital-products-img"
                  />
                </motion.div>
              </div>
              <div
                style={{
                  width: sizes.container.width,
                  height: sizes.container.height,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  className="cursor-pointer flex flex-col rounded-[20px] border border-transparent"
                  style={{
                    width: sizes.card.width,
                    height: sizes.card.height,
                    padding: sizes.card.padding,
                    gap: sizes.card.gap,
                    boxShadow: "none",
                  }}
                  whileHover={{
                    width: sizes.hover.width,
                    height: sizes.hover.height,
                    padding: sizes.hover.padding,
                    gap: sizes.hover.gap,
                    borderColor: "#FBFBFB",
                    borderWidth: 1,
                    boxShadow: "0px 0px 6.3px 0px rgba(0,0,0,0.4)",
                  }}
                  transition={{
                    type: "spring",
                    mass: 1,
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <div className="flex items-center justify-between text-[#101010]">
                    <h3 className="2xl:text-[40px] xl:text-3xl lg:text-xl font-semibold">
                      Web Design
                    </h3>
                    <CircleChevronRight className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-[42px] 2xl:h-[42px]" />
                  </div>
                  <p className="font-rajdhani font-normal 2xl:text-[24px] xl:text-lg lg:text-sm leading-[100%] tracking-[-0.01em] text-justify text-[#101010]">
                    Modern, responsive websites with clean aesthetics and a
                    seamless user experience — tailored to your brand and goals.
                  </p>
                  <img
                    src="/images/landing/we make more/web-design.png"
                    alt="Web-design-img"
                  />
                </motion.div>
              </div>
              <div
                style={{
                  width: sizes.container.width,
                  height: sizes.container.height,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  className="cursor-pointer flex flex-col rounded-[20px] border border-transparent"
                  style={{
                    width: sizes.card.width,
                    height: sizes.card.height,
                    padding: sizes.card.padding,
                    gap: sizes.card.gap,
                    boxShadow: "none",
                  }}
                  whileHover={{
                    width: sizes.hover.width,
                    height: sizes.hover.height,
                    padding: sizes.hover.padding,
                    gap: sizes.hover.gap,
                    borderColor: "#FBFBFB",
                    borderWidth: 1,
                    boxShadow: "0px 0px 6.3px 0px rgba(0,0,0,0.4)",
                  }}
                  transition={{
                    type: "spring",
                    mass: 1,
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <div className="flex items-center justify-between text-[#101010]">
                    <h3 className="2xl:text-[40px] xl:text-3xl lg:text-xl font-semibold whitespace-nowrap">
                      Marketing and Sales
                    </h3>
                    <CircleChevronRight className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-[42px] 2xl:h-[42px]" />
                  </div>
                  <p className="font-rajdhani font-normal 2xl:text-[24px] xl:text-lg lg:text-sm leading-[100%] tracking-[-0.01em] text-justify text-[#101010]">
                    From SEO and social media to funnels and optimization — we
                    help you attract, convert, and grow your business.
                  </p>
                  <img
                    src="/images/landing/we make more/marketing-sales.png"
                    alt="Marketing-sales-img"
                  />
                </motion.div>
              </div>
            </>
          ) : (
            <>
              {/* Mobile */}
              <div className="w-full p-6 flex flex-col gap-6">
                <div className="flex items-center justify-between text-[#101010]">
                  <h3 className="text-2xl font-semibold">Digital Products</h3>
                  <CircleChevronRight size={32} />
                </div>
                <p className="text-xl leading-[-1%px] text-[#101010]">
                  We design and develop apps, templates, and interactive tools
                  that deliver real value to your users.
                </p>
                <img
                  src="/images/landing/we make more/digital-products.png"
                  alt="digital-products-img"
                />
              </div>
              <div className="w-full p-6 flex flex-col gap-6">
                <div className="flex items-center justify-between text-[#101010]">
                  <h3 className="text-2xl font-semibold">Web Design</h3>
                  <CircleChevronRight size={32} />
                </div>
                <p className="text-xl leading-[-1%px] text-[#101010]">
                  Modern, responsive websites with clean aesthetics and a
                  seamless user experience — tailored to your brand and goals.
                </p>
                <img
                  src="/images/landing/we make more/web-design.png"
                  alt="Web-design-img"
                />
              </div>
              <div className="w-full p-6 flex flex-col gap-6">
                <div className="flex items-center justify-between text-[#101010]">
                  <h3 className="text-2xl font-semibold">Marketing and Sales</h3>
                  <CircleChevronRight size={32} />
                </div>
                <p className="text-xl leading-[-1%px] text-[#101010]">
                  From SEO and social media to funnels and optimization — we
                  help you attract, convert, and grow your business.
                </p>
                <img
                  src="/images/landing/we make more/marketing-sales.png"
                  alt="Marketing-sales-img"
                />
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Landing;
