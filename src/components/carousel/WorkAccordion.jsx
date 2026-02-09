import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CircleChevronRight, CircleArrowRight } from "lucide-react";

const workItems = [
  {
    id: 0,
    src: "/images/landing/our work/nano.png",
    alt: "nano-project",
    text: "MANO - Fashion Brand App",
    link: "/projects/mano",
  },
  {
    id: 1,
    src: "/images/landing/our work/Cover Thumbnail 2.png",
    alt: "LShot-project",
    text: "LShot - Screenshot Tool",
    link: "/projects/lshot",
  },
  {
    id: 2,
    src: "/images/landing/our work/Cover Thumbnail 3.png",
    alt: "The-Food-Co-Project",
    text: "The Food Co - Restaurant",
    link: "/projects/thefoodco",
  },
  {
    id: 3,
    src: "/images/landing/our work/Cover Thumbnail 4.png",
    alt: "Wedwish-project",
    text: "Wedwish - Wedding App",
    link: "/projects/wedwish",
  },
  {
    id: 4,
    src: "/images/landing/our work/Cover Thumbnail 5.png",
    alt: "MatchWise-project",
    text: "MatchWise - Dating App",
    link: "/projects/matchwise",
  },
];

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

const WorkAccordion = () => {
  const [activeSlot, setActiveSlot] = useState(0); // which slot is expanded (0-4)
  const [previousSlot, setPreviousSlot] = useState(0); // track previous slot for direction
  const [hoveredIconIndex, setHoveredIconIndex] = useState(null);
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === "mobile";
  const navigate = useNavigate();

  // Direction: true = moving right (click on slot > activeSlot), false = moving left
  const isMovingRight = activeSlot > previousSlot;

  // Calculate pixel values based on viewport - updates on every resize
  const [sizes, setSizes] = useState(() => {
    if (typeof window === "undefined") {
      return { collapsed: 240, expanded: 530 };
    }
    const vw = window.innerWidth / 100;
    return {
      collapsed: Math.min(13.89 * vw, 240),
      expanded: Math.min(30.67 * vw, 530),
    };
  });

  useEffect(() => {
    const updateSizes = () => {
      const vw = window.innerWidth / 100;
      setSizes({
        collapsed: Math.min(13.89 * vw, 240),
        expanded: Math.min(30.67 * vw, 530),
      });
    };

    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const handleSlotClick = (slot) => {
    if (slot === activeSlot) {
      // Already active, navigate
      navigate(workItems[slot].link);
    } else {
      // Track direction and move expanded container to clicked slot
      setPreviousSlot(activeSlot);
      setActiveSlot(slot);
    }
  };

  if (isMobile) {
    return (
      <div className="flex flex-col gap-[24px] mb-10">
        {workItems.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            className="rounded-[20px] overflow-hidden w-full"
          >
            <div className="relative w-full" style={{ height: "300px" }}>
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
              <div className="flex absolute text-[24px] text-[#FBFBFB] bottom-4 left-4 justify-between items-center w-[90%]">
                <h3>{item.text}</h3>
                <motion.div
                  onMouseEnter={() => setHoveredIconIndex(item.id)}
                  onMouseLeave={() => setHoveredIconIndex(null)}
                  animate={{
                    rotate: hoveredIconIndex === item.id ? -45 : 0,
                  }}
                  transition={{
                    type: "spring",
                    mass: 1,
                    stiffness: 177.8,
                    damping: 20,
                  }}
                >
                  {hoveredIconIndex === item.id ? (
                    <CircleArrowRight className="w-10.5 h-10.5" />
                  ) : (
                    <CircleChevronRight className="w-10.5 h-10.5" />
                  )}
                </motion.div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  const springTransition = {
    type: "spring",
    mass: 1,
    stiffness: 100,
    damping: 15,
  };

  const gap = breakpoint === "2xl" ? 16 : breakpoint === "xl" ? 12 : 8;

  const collapsedWidthPx = sizes.collapsed;
  const expandedWidthPx = sizes.expanded;
  const extraWidthPx = expandedWidthPx - collapsedWidthPx;

  // CSS values for styling
  const collapsedWidth = "min(13.89vw, 240px)";
  const expandedWidth = "min(30.67vw, 530px)";

  // Calculate left position in pixels for a collapsed card at a given slot
  const getCollapsedPositionPx = (slot) => {
    const basePosition = slot * (collapsedWidthPx + gap);
    if (slot > activeSlot) {
      return basePosition + extraWidthPx;
    }
    return basePosition;
  };

  // Position for the expanded container in pixels
  const getExpandedPositionPx = () => {
    return activeSlot * (collapsedWidthPx + gap);
  };

  return (
    <div className="mb-7.25 relative" style={{ height: "min(28.36vw, 490px)" }}>
      {/* Collapsed cards - one for each slot, except the active one */}
      {workItems.map((item, slot) => {
        // Don't render a collapsed card for the active slot (it's covered by the expanded)
        if (slot === activeSlot) return null;

        // When moving left, cards that are moving (between new and old slot) should be on top
        const isCardMoving = isMovingRight
          ? slot > previousSlot && slot <= activeSlot
          : slot >= activeSlot && slot < previousSlot;
        const collapsedZIndex = !isMovingRight && isCardMoving ? 20 : 1;

        return (
          <motion.div
            key={item.id}
            className="absolute top-0 rounded-[20px] overflow-hidden cursor-pointer"
            onClick={() => handleSlotClick(slot)}
            style={{
              width: collapsedWidth,
              height: "min(28.36vw, 490px)",
              zIndex: collapsedZIndex,
            }}
            initial={false}
            animate={{
              x: getCollapsedPositionPx(slot),
            }}
            transition={springTransition}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        );
      })}

      {/* Expanded container - moves between positions with crossfade */}
      <motion.div
        className="absolute top-0 rounded-[20px] overflow-hidden cursor-pointer"
        onClick={() => navigate(workItems[activeSlot].link)}
        style={{
          width: expandedWidth,
          height: "min(28.36vw, 490px)",
          zIndex: isMovingRight ? 10 : 5,
        }}
        initial={false}
        animate={{
          x: getExpandedPositionPx(),
        }}
        transition={springTransition}
      >
        {/* All images stacked with crossfade */}
        {workItems.map((item, index) => (
          <motion.img
            key={item.id}
            src={item.src}
            alt={item.alt}
            className="absolute inset-0 w-full h-full object-cover"
            initial={false}
            animate={{
              opacity: activeSlot === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}

        {/* Text overlay with crossfade */}
        <div className="flex absolute text-[24px] text-[#FBFBFB] bottom-4 left-4 justify-between items-center w-[90%]">
          {workItems.map((item, index) => (
            <motion.h3
              key={item.id}
              className="absolute"
              initial={false}
              animate={{
                opacity: activeSlot === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {item.text}
            </motion.h3>
          ))}
          <motion.div
            className="ml-auto"
            onMouseEnter={() => setHoveredIconIndex(activeSlot)}
            onMouseLeave={() => setHoveredIconIndex(null)}
            animate={{
              rotate: hoveredIconIndex === activeSlot ? -45 : 0,
            }}
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 177.8,
              damping: 20,
            }}
          >
            {hoveredIconIndex === activeSlot ? (
              <CircleArrowRight className="w-10.5 h-10.5" />
            ) : (
              <CircleChevronRight className="w-10.5 h-10.5" />
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkAccordion;
