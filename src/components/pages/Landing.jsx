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
          <div
            className="absolute -right-px w-[1020px] h-[840px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/landing/hero2.png')",
              clipPath: `
      polygon(
  22% 0%,     /* borde superior normal */
  100% 0%,
  100% 100%,
  22% 100%,  /* borde inferior normal */

  22% 62%,   /* baja hasta donde empieza el corte */
  0% 62%,    /* sale hacia la izquierda */
  0% 38%,    /* sube vertical */
  22% 38%    /* vuelve al borde */
      )
    `,
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
