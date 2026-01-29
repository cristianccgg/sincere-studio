import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div className="flex flex-col items-center gap-8.75 my-20.75">
        <h2 className="text-[36px] font-semibold">Explore Our Work</h2>
        <h1 className="text-[40px] font-blold text-center">
          REAL PROJECTS, REAL RESULTS — <br /> SEE HOW WE TURN IDEAS INTO
          DIGITAL EXPERIENCES.
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-[94px] gap-x-4 lg:gap-x-[75px] px-4 lg:px-0 max-w-[1595px] mx-auto">
        <div className="flex flex-col gap-6 items-start w-full max-w-[760px]">
          <img
            src="/images/projects/main/Cover Thumbnail 1.png"
            alt="thumbnail1-img"
            className="rounded-2xl w-full h-auto aspect-[760/456] object-cover"
          />
          <div className="flex gap-1.75 flex-wrap">
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#PhotographyWebsite</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#WebDesign</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#DigitalProduct</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#UX/UI</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#Developing</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#Prototyping</h3>
            </div>
          </div>
          <h3 className="text-2xl lg:text-[32px] font-medium">
            LShot – Professional Photography
          </h3>
          <motion.div
            className="-space-y-2 h-fit cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <button className="text-2xl lg:text-[32px] font-semibold cursor-pointer">
              More
            </button>
            <motion.div
              className="bg-[#8A38F5] h-1 -mt-1"
              initial={{ width: "35%" }}
              animate={{ width: isHovered ? "100%" : "35%" }}
              transition={{
                type: "spring",
                mass: 1,
                stiffness: 100,
                damping: 15,
              }}
            />
          </motion.div>
        </div>
        <div className="flex flex-col gap-6 items-start w-full max-w-[760px]">
          <img
            src="/images/projects/main/tumbnail2.png"
            alt="thumbnail2-img"
            className="rounded-2xl w-full h-auto aspect-[760/456] object-cover"
          />
          <div className="flex gap-1.75 flex-wrap">
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#AppDesign</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#FashionTech</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#UX/UI</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#EcommerceDesign</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#Prototyping</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#Developing</h3>
            </div>
          </div>
          <h3 className="text-2xl lg:text-[32px] font-medium">MANO - Fashion Brand App</h3>
          <motion.div
            className="-space-y-2 h-fit cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <button className="text-2xl lg:text-[32px] font-semibold cursor-pointer">
              More
            </button>
            <motion.div
              className="bg-[#8A38F5] h-1 -mt-1"
              initial={{ width: "35%" }}
              animate={{ width: isHovered ? "100%" : "35%" }}
              transition={{
                type: "spring",
                mass: 1,
                stiffness: 100,
                damping: 15,
              }}
            />
          </motion.div>
        </div>
        <div className="flex flex-col gap-6 items-start w-full max-w-[760px]">
          <img
            src="/images/projects/main/tumbnail4.png"
            alt="thumbnail4-img"
            className="rounded-2xl w-full h-auto aspect-[760/456] object-cover"
          />
          <div className="flex gap-1.75 flex-wrap">
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#WeddingPlatform</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#UX/UI</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#WebDesign</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#Prototyping</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#Developing</h3>
            </div>
          </div>
          <h3 className="text-2xl lg:text-[32px] font-medium">
            Wedwish – Digital Platform for Wedding Gifts
          </h3>
          <motion.div
            className="-space-y-2 h-fit cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <button className="text-2xl lg:text-[32px] font-semibold cursor-pointer">
              More
            </button>
            <motion.div
              className="bg-[#8A38F5] h-1 -mt-1"
              initial={{ width: "35%" }}
              animate={{ width: isHovered ? "100%" : "35%" }}
              transition={{
                type: "spring",
                mass: 1,
                stiffness: 100,
                damping: 15,
              }}
            />
          </motion.div>
        </div>
        <div className="flex flex-col gap-6 items-start w-full max-w-[760px]">
          <img
            src="/images/projects/main/tumbnail3.png"
            alt="thumbnail3-img"
            className="rounded-2xl w-full h-auto aspect-[760/456] object-cover"
          />
          <div className="flex gap-1.75 flex-wrap">
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#FreelancePlatform</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#DigitalProduct</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#WebDesign</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#UXUI</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#MarketplaceDesign</h3>
            </div>
          </div>
          <h3 className="text-2xl lg:text-[32px] font-medium">
            MatchWise – Freelance Marketplace Platform
          </h3>
          <motion.div
            className="-space-y-2 h-fit cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <button className="text-2xl lg:text-[32px] font-semibold cursor-pointer">
              More
            </button>
            <motion.div
              className="bg-[#8A38F5] h-1 -mt-1"
              initial={{ width: "35%" }}
              animate={{ width: isHovered ? "100%" : "35%" }}
              transition={{
                type: "spring",
                mass: 1,
                stiffness: 100,
                damping: 15,
              }}
            />
          </motion.div>
        </div>
        <div className="flex flex-col gap-6 items-start w-full max-w-[760px]">
          <img
            src="/images/projects/main/tumbnail5.png"
            alt="thumbnail5-img"
            className="rounded-2xl w-full h-auto aspect-[760/456] object-cover"
          />
          <div className="flex gap-1.75 flex-wrap">
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#RestaurantWebsite</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#DigitalProduct</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#WebDesign</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#FoodTech</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#UXUI</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#HospitalityDesign</h3>
            </div>
          </div>
          <h3 className="text-2xl lg:text-[32px] font-medium">
            Wedwish - Digital Platform for Wedding Gifts
          </h3>
          <motion.div
            className="-space-y-2 h-fit cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <button className="text-2xl lg:text-[32px] font-semibold cursor-pointer">
              More
            </button>
            <motion.div
              className="bg-[#8A38F5] h-1 -mt-1"
              initial={{ width: "35%" }}
              animate={{ width: isHovered ? "100%" : "35%" }}
              transition={{
                type: "spring",
                mass: 1,
                stiffness: 100,
                damping: 15,
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
