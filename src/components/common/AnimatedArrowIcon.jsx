import React, { useState } from "react";
import { motion } from "framer-motion";
import { CircleChevronRight, ArrowRight } from "lucide-react";

const AnimatedArrowIcon = ({
  size = "w-8 h-8 2xl:w-[42px] 2xl:h-[42px]",
  color = "#262424",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const spring = {
    type: "spring",
    mass: 1,
    stiffness: 177.8,
    damping: 20,
  };

  return (
    <div
      className={`relative ${size} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Chevron - rotates and fades out on hover */}
      <motion.div
        animate={{
          rotate: isHovered ? -45 : 0,
          opacity: isHovered ? 0 : 1,
        }}
        transition={spring}
        className="absolute inset-0"
      >
        <CircleChevronRight
          className="w-full h-full"
          color={color}
          strokeWidth={2}
        />
      </motion.div>

      {/* Arrow - appears rotated on hover */}
      <motion.div
        initial={{ rotate: -45, opacity: 0 }}
        animate={{
          rotate: -45,
          opacity: isHovered ? 1 : 0,
        }}
        transition={spring}
        className="absolute inset-0 bg-[#262424] text-[#FFFFFF] rounded-full"
      >
        <ArrowRight className="w-full h-full" />
      </motion.div>
    </div>
  );
};

export default AnimatedArrowIcon;
