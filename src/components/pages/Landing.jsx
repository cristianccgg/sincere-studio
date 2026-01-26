import React from "react";

const Landing = () => {
  return (
    <div>
      <section className="w-full mt-4">
        <div className="flex  mx-auto relative">
          <div className="flex flex-col w-[1033px] h-[270px] justify-center">
            <div className="flex justify-between items-baseline leading-none">
              <span className="font-nats text-[128px] font-normal tracking-[-0.02em]">
                SINCERE
              </span>
              <span className="font-nats text-[128px] font-normal tracking-[-0.02em]">
                STUDIO
              </span>
              <span className="font-rajdhani text-[96px] tracking-[-0.02em]">
                IT'S
              </span>
            </div>
            <div className="flex justify-between items-baseline leading-none">
              <span className="font-rajdhani text-[96px]  tracking-[-0.02em]">
                NOT
              </span>
              <span className="font-rajdhani text-[96px]  tracking-[-0.02em]">
                JUST
              </span>
              <span className="font-rajdhani text-[96px]  tracking-[-0.02em]">
                A
              </span>
              <span className="font-rajdhani text-[96px]  tracking-[-0.02em]">
                DESIGN
              </span>
              <span className="font-rajdhani text-[96px]  tracking-[-0.02em]">
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
                    L 0.45 0.70
                    Q 0.45 0.68, 0.43 0.68
                    L 0.02 0.68
                    Q 0 0.68, 0 0.66
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
            className="absolute -right-px w-[1020px] h-[840px] bg-cover"
            style={{
              backgroundImage: "url('/images/landing/hero2.png')",
              backgroundPosition: "15% center",
              clipPath: "url(#heroClip)",
            }}
          />
        </div>

        <div>
          <img
            src="/images/landing/hero1.png"
            alt="hero-img1"
            className="max-w-143.5"
          />
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Landing;
