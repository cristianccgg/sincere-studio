import React from "react";
import Button from "../common/Button";
import { CircleChevronRight } from "lucide-react";

const Landing = () => {
  return (
    <div>
      <section className="w-full mt-4">
        <div className="flex  mx-auto relative">
          <div className="flex flex-col w-full xl:w-[1033px] h-auto xl:h-[270px] justify-center px-4 xl:px-0">
            <div className="flex flex-wrap xl:flex-nowrap justify-between items-baseline leading-none gap-x-2">
              <span className="font-nats text-[48px] sm:text-[72px] md:text-[96px] xl:text-[128px] font-normal tracking-[-0.02em]">
                SINCERE
              </span>
              <span className="font-nats text-[48px] sm:text-[72px] md:text-[96px] xl:text-[128px] font-normal tracking-[-0.02em]">
                STUDIO
              </span>
              <span className="font-rajdhani text-[36px] sm:text-[54px] md:text-[72px] xl:text-[96px] tracking-[-0.02em]">
                IT'S
              </span>
            </div>
            <div className="flex flex-wrap xl:flex-nowrap justify-between items-baseline leading-none gap-x-2">
              <span className="font-rajdhani text-[36px] sm:text-[54px] md:text-[72px] xl:text-[96px] tracking-[-0.02em]">
                NOT
              </span>
              <span className="font-rajdhani text-[36px] sm:text-[54px] md:text-[72px] xl:text-[96px] tracking-[-0.02em]">
                JUST
              </span>
              <span className="font-rajdhani text-[36px] sm:text-[54px] md:text-[72px] xl:text-[96px] tracking-[-0.02em]">
                A
              </span>
              <span className="font-rajdhani text-[36px] sm:text-[54px] md:text-[72px] xl:text-[96px] tracking-[-0.02em]">
                DESIGN
              </span>
              <span className="font-rajdhani text-[36px] sm:text-[54px] md:text-[72px] xl:text-[96px] tracking-[-0.02em]">
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
            className="absolute -right-px w-[1020px] h-[840px] bg-cover hidden xl:block"
            style={{
              backgroundImage: "url('/images/landing/hero2.png')",
              backgroundPosition: "15% center",
              clipPath: "url(#heroClip)",
            }}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between max-w-[1043px]">
          <img
            src="/images/landing/hero1.png"
            alt="hero-img1"
            className="md:max-w-143.5"
          />
          <div className="max-w-107">
            <h2 className="font-medium text-[#444444] xl:text-[48px] text-[42px]">
              We Creating Values & <br />
              Scaling with Honestly
            </h2>
            <Button fontWeight="medium" icon={<CircleChevronRight size={36} />}>
              See our Solutions
            </Button>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Landing;
