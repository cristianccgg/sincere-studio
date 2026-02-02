import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Services.css";
import Button from "../common/Button";
import { CircleChevronDown, ChevronRight } from "lucide-react";

const Services = () => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div>
      <section className="mt-22.5 pb-[35px]">
        <div className="services-hero flex flex-col xl:ps-[130px] xl:pt-[110px] lg:ps-[100px] justify-center gap-10 px-6 py-10 rounded-[20px] shadow-[0px_0px_6px_0px_#00000059]">
          <h1 className="lg:text-[48px] text-3xl font-bold">Our Services</h1>
          <p className="max-w-[709px] lg:h-[227px]  h-auto lg:text-[24px] text-xl font-medium xl:mt-[55px]">
            At Sincere Studio, we combine creativity, strategy, and technology
            to help brands grow with purpose. Every service we provide is
            designed to deliver clarity, impact, and measurable results —
            whether you're launching a new digital product, refreshing your
            online presence, or scaling your business.
          </p>
        </div>
      </section>
      <section className="xl:ps-[123px]   xl:pr-[127px] lg:py-[75px] py-10 flex flex-col lg:gap-6">
        <div className="bg-[#FBFBFB] rounded-[20px]  rounded-[20px]">
          <div className="flex flex-col gap-6  lg:px-[42px] px-5 py-6">
            <div
              className="flex items-center gap-7.5 cursor-pointer"
              onClick={() => setIsOpen(0)}
            >
              <motion.div
                animate={{ scaleY: isOpen === 0 ? -1 : 1 }}
                transition={{ type: "spring", mass: 1, stiffness: 100, damping: 15 }}
              >
                <CircleChevronDown
                  size={37}
                  strokeWidth={1}
                  className={isOpen === 0 ? "text-[#8A38F5]" : ""}
                />
              </motion.div>
              <h1 className="lg:text-[36px] text-3xl font-bold">Website</h1>
            </div>
            <AnimatePresence initial={false}>
              {isOpen === 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="flex flex-col gap-[50px] mt-[34px]">
                    <p className="lg:text-[24px] text-xl font-medium">
                      A website demonstrates professionalism and builds trust — it
                      has been proven to increase revenue by making your products
                      and services accessible to anyone, anywhere.
                    </p>
                    <div className="flex flex-col lg:text-[24px] gap-[14.29px]">
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">Landing Page Design</p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">Information Architecture</p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">Website Layout and Structure</p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">Wireframes & Prototypes</p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">UX/UI Design</p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">Responsive Design</p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">Website Redesign</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-col gap-6  lg:px-[42px] px-5 py-6">
            <div
              className="flex items-center gap-7.5 cursor-pointer"
              onClick={() => setIsOpen(1)}
            >
              <motion.div
                animate={{ scaleY: isOpen === 1 ? -1 : 1 }}
                transition={{ type: "spring", mass: 1, stiffness: 100, damping: 15 }}
              >
                <CircleChevronDown
                  size={37}
                  strokeWidth={1}
                  className={isOpen === 1 ? "text-[#8A38F5]" : ""}
                />
              </motion.div>
              <h1 className="lg:text-[36px] text-3xl  font-bold">
                Digital Products
              </h1>
            </div>
            <AnimatePresence initial={false}>
              {isOpen === 1 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="flex flex-col gap-[50px] mt-[34px]">
                    <p className="lg:text-[24px] text-xl font-medium">
                      Digital products are the future of scalable business. They let
                      you create once and sell infinitely, reaching global audiences
                      without the cost of inventory or shipping. From eBooks and
                      online courses to templates and software, digital products
                      open new revenue streams for businesses of all sizes.
                    </p>
                    <div className="flex flex-col lg:text-[24px] gap-[14.29px]">
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">App Interface Design</p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">Digital Templates</p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">
                          UI Kit, Icons and Design Assets
                        </p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">Wireframes & Prototype</p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">SaaS UI/UX Design</p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">
                          Online Course Design & LMS Setup
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-col gap-6  lg:px-[42px] px-5 py-6">
            <div
              className="flex items-center gap-7.5 cursor-pointer"
              onClick={() => setIsOpen(2)}
            >
              <motion.div
                animate={{ scaleY: isOpen === 2 ? -1 : 1 }}
                transition={{ type: "spring", mass: 1, stiffness: 100, damping: 15 }}
              >
                <CircleChevronDown
                  size={37}
                  strokeWidth={1}
                  className={isOpen === 2 ? "text-[#8A38F5]" : ""}
                />
              </motion.div>
              <h1 className="lg:text-[36px] text-3xl font-bold">
                Marketing & Sales Strategy
              </h1>
            </div>
            <AnimatePresence initial={false}>
              {isOpen === 2 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="flex flex-col gap-[50px] mt-[34px]">
                    <p className="lg:text-[24px] text-xl font-medium">
                      Digital marketing connects your brand with the right audience
                      at the right time. With a tailored strategy, you can boost
                      visibility, build trust, and drive consistent growth through
                      measurable conversions.
                    </p>
                    <div className="flex flex-col lg:text-[24px] gap-[14.29px]">
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">Target Audience Analysis</p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">SEO Optimization</p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">Funnel Optimization</p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">A/B Testing</p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">Analytics & Reporting</p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">
                          Conversion Rate Optimization (CRO)
                        </p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">Campaign Strategy & Planning</p>
                      </div>
                      <div className="flex items-center gap-[20.5px]">
                        <img src="/images/services/Cube.png" alt="cube-icon" />
                        <p className="font-normal">
                          Email Marketing Campaign, Design and Management
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <section className="pb-5.25">
        <div className="flex flex-col items-center gap-17.5 py-15 lg:px-15 px-5 shadow-[0_0_6px_0_rgba(0,0,0,0.35)] rounded-2xl">
          <div className="flex flex-col gap-8.75 items-center ">
            <h2 className="lg:text-[36px] text-2xl font-semibold text-center">
              A page showcasing real work and results
            </h2>
            <h1 className="lg:text-[40px] text-3xl font-bold text-center">
              SEE HOW WE’VE HELPED BRANDS TRANSFORM INTO IMPACTFUL DIGITAL
              EXPERIENCES
            </h1>
          </div>
          <Link to="/projects">
            <Button
              size="lg"
              fontWeight="semibold"
              icon={<ChevronRight size={22} />}
            >
              See all Projects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
