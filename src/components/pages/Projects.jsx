import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const [titleEntered, setTitleEntered] = useState(false);
  const [row1Entered, setRow1Entered] = useState(false);
  const [row2Entered, setRow2Entered] = useState(false);
  const [row3Entered, setRow3Entered] = useState(false);

  const titleRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const row1InView = useInView(row1Ref, { once: true, amount: 0.3 });
  const row2InView = useInView(row2Ref, { once: true, amount: 0.3 });
  const row3InView = useInView(row3Ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (titleInView) setTitleEntered(true);
  }, [titleInView]);

  useEffect(() => {
    if (row1InView) setRow1Entered(true);
  }, [row1InView]);

  useEffect(() => {
    if (row2InView) setRow2Entered(true);
  }, [row2InView]);

  useEffect(() => {
    if (row3InView) setRow3Entered(true);
  }, [row3InView]);

  return (
    <div>
      <motion.div
        ref={titleRef}
        className="flex flex-col items-center gap-8.75 my-20.75"
        initial={{ opacity: 0, y: -50 }}
        animate={titleEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onMouseEnter={() => setTitleEntered(true)}
      >
        <h2 className="lg:text-[36px] text-xl font-semibold">
          Explore Our Work
        </h2>
        <h1 className="lg:text-[40px] text-2xl font-bold text-center">
          REAL PROJECTS, REAL RESULTS — <br /> SEE HOW WE TURN IDEAS INTO
          DIGITAL EXPERIENCES.
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-[94px] gap-x-4 lg:gap-x-[75px] px-0 lg:px-0 max-w-[1595px] mx-auto">
        {/* Row 1 - Project 1 */}
        <motion.div
          ref={row1Ref}
          initial={{ opacity: 0, y: 100 }}
          animate={row1Entered ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onMouseEnter={() => setRow1Entered(true)}
        >
          <ProjectCard
            to="/projects/lshot"
            image="/images/projects/main/Cover Thumbnail 1.png"
            tags={[
              "#PhotographyWebsite",
              "#WebDesign",
              "#DigitalProduct",
              "#UX/UI",
              "#Developing",
              "#Prototyping",
            ]}
            title="LShot – Professional Photography"
          />
        </motion.div>
        {/* Row 1 - Project 2 */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={row1Entered ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onMouseEnter={() => setRow1Entered(true)}
        >
          <ProjectCard
            to="/projects/mano"
            image="/images/projects/main/tumbnail2.png"
            tags={[
              "#AppDesign",
              "#FashionTech",
              "#UX/UI",
              "#EcommerceDesign",
              "#Prototyping",
              "#Developing",
            ]}
            title="MANO - Fashion Brand App"
          />
        </motion.div>
        {/* Row 2 - Project 3 */}
        <motion.div
          ref={row2Ref}
          initial={{ opacity: 0, y: 100 }}
          animate={row2Entered ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onMouseEnter={() => setRow2Entered(true)}
        >
          <ProjectCard
            to="/projects/wedwish"
            image="/images/projects/main/tumbnail4.png"
            tags={[
              "#WeddingPlatform",
              "#UX/UI",
              "#WebDesign",
              "#Prototyping",
              "#Developing",
            ]}
            title="Wedwish – Digital Platform for Wedding Gifts"
          />
        </motion.div>
        {/* Row 2 - Project 4 */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={row2Entered ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onMouseEnter={() => setRow2Entered(true)}
        >
          <ProjectCard
            to="/projects/matchwise"
            image="/images/projects/main/tumbnail3.png"
            tags={[
              "#FreelancePlatform",
              "#DigitalProduct",
              "#WebDesign",
              "#UXUI",
              "#MarketplaceDesign",
            ]}
            title="MatchWise – Freelance Marketplace Platform"
          />
        </motion.div>
        {/* Row 3 - Project 5 */}
        <motion.div
          ref={row3Ref}
          initial={{ opacity: 0, y: 100 }}
          animate={row3Entered ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onMouseEnter={() => setRow3Entered(true)}
        >
          <ProjectCard
            to="/projects/thefoodco"
            image="/images/projects/main/tumbnail5.png"
            tags={[
              "#RestaurantWebsite",
              "#DigitalProduct",
              "#WebDesign",
              "#FoodTech",
              "#UXUI",
              "#HospitalityDesign",
            ]}
            title="The Food Co. – A Digital Space for Unique Dining Experiences"
          />
        </motion.div>
        {/* Empty cell for row 3 hover area */}
        <div
          className="hidden lg:block"
          onMouseEnter={() => setRow3Entered(true)}
        />
      </div>
    </div>
  );
};

const ProjectCard = ({ to, image, tags, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      className="flex flex-col gap-6 items-start w-full max-w-[760px] cursor-pointer"
    >
      <img
        src={image}
        alt={`${title}-img`}
        className="rounded-2xl w-full h-auto aspect-[760/456] object-cover"
      />
      <div className="flex gap-1.75 flex-wrap">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]"
          >
            <h3>{tag}</h3>
          </div>
        ))}
      </div>
      <h3 className="text-2xl lg:text-[32px] font-medium">{title}</h3>
      <motion.div
        className="-space-y-2 h-fit"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <span className="text-2xl lg:text-[32px] font-semibold">More</span>
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
    </Link>
  );
};

export default Projects;
