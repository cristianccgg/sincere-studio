import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CircleChevronRight, CircleArrowRight } from "lucide-react";

const workItems = [
  {
    id: 0,
    src: "/images/landing/our work/nano.png",
    alt: "nano-project",
    text: "MANO - Fashion Brand App",
  },
  {
    id: 1,
    src: "/images/landing/our work/Cover Thumbnail 2.png",
    alt: "LShot-project",
    text: "MANO - Fashion Brand App",
  },
  {
    id: 2,
    src: "/images/landing/our work/Cover Thumbnail 3.png",
    alt: "The-Food-Co-Project",
    text: "MANO - Fashion Brand App",
  },
  {
    id: 3,
    src: "/images/landing/our work/Cover Thumbnail 4.png",
    alt: "Wedwish-project",
    text: "MANO - Fashion Brand App",
  },
  {
    id: 4,
    src: "/images/landing/our work/Cover Thumbnail 5.png",
    alt: "MatchWise-project",
    text: "MANO - Fashion Brand App",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(0);
  const [hoveredIconIndex, setHoveredIconIndex] = useState(null);
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === "mobile";

  const handleImageClick = (index) => {
    if (activeIndex === index && clickedIndex === index) {
      // Si ya está abierto, ir a la página de detalles
      console.log(
        `Navegar a la página de detalles del proyecto: ${workItems[index].alt}`,
      );
      // window.location.href = `/projects/${workItems[index].alt}`;
    } else {
      // Primer click o click en diferente imagen - abrir/cambiar
      setActiveIndex(index);
      setClickedIndex(index);
    }
  };

  if (isMobile) {
    return (
      <div className="flex flex-col gap-4 mb-10">
        {workItems.map((item) => (
          <div key={item.id} className="rounded-[20px] overflow-hidden w-full">
            <div className="relative w-full" style={{ height: "300px" }}>
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
              <div className="flex absolute text-[24px] text-white bottom-4 left-4 justify-between items-center w-[90%]">
                <h3>{item.text}</h3>
                <CircleArrowRight className="w-10.5 h-10.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-2 xl:gap-3 2xl:gap-4 mb-7.25">
      {workItems.map((item, index) => (
        <motion.div
          key={item.id}
          className="rounded-[20px] overflow-hidden cursor-pointer"
          onClick={() => handleImageClick(index)}
          animate={{
            width:
              activeIndex === index
                ? "min(30.67vw, 530px)"
                : "min(13.89vw, 240px)",
          }}
          initial={{
            width: index === 0 ? "min(30.67vw, 530px)" : "min(13.89vw, 240px)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          style={{
            height: "min(28.36vw, 490px)",
          }}
        >
          <div className="w-full h-full relative">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
            {clickedIndex === index && (
              <div className="flex absolute text-[24px] text-white bottom-4 left-4 justify-between items-center w-[90%]">
                <h3>{item.text}</h3>
                <motion.div
                  onMouseEnter={() => setHoveredIconIndex(index)}
                  onMouseLeave={() => setHoveredIconIndex(null)}
                  animate={{
                    rotate: hoveredIconIndex === index ? -45 : 0,
                  }}
                  transition={{
                    type: "spring",
                    mass: 1,
                    stiffness: 177.8,
                    damping: 20,
                  }}
                >
                  {hoveredIconIndex === index ? (
                    <CircleArrowRight className="w-10.5 h-10.5" />
                  ) : (
                    <CircleChevronRight className="w-10.5 h-10.5" />
                  )}
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkAccordion;
