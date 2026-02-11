import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const profileScreens = [
  {
    src: "/images/projects/mano/about the project/profile – Копие.png",
    alt: "Profile Screen",
  },
  {
    src: "/images/projects/mano/about the project/Log In – Копие.png",
    alt: "Log In Screen",
  },
  {
    src: "/images/projects/mano/about the project/PROFILE-1 – Копие.png",
    alt: "Profile Menu Screen",
  },
  {
    src: "/images/projects/mano/about the project/EDIT PROFILE – Копие.png",
    alt: "Edit Profile Screen",
  },
];

// Pares de imágenes para tablet (md)
const profileScreenPairs = [
  [profileScreens[0], profileScreens[1]],
  [profileScreens[2], profileScreens[3]],
];

const bannerScreens = [
  { src: "/images/projects/mano/loweBanner/img1.png", alt: "Banner Screen 1" },
  { src: "/images/projects/mano/loweBanner/img2.png", alt: "Banner Screen 2" },
  { src: "/images/projects/mano/loweBanner/img3.png", alt: "Banner Screen 3" },
  { src: "/images/projects/mano/loweBanner/img4.png", alt: "Banner Screen 4" },
  { src: "/images/projects/mano/loweBanner/img5.png", alt: "Banner Screen 5" },
];

// Pares de imágenes del banner para sm
const bannerScreenPairs = [
  [bannerScreens[0], bannerScreens[1]],
  [bannerScreens[2], bannerScreens[3]],
  [bannerScreens[4]],
];

// Tríos de imágenes del banner para tablet (md)
const bannerScreenTrios = [
  [bannerScreens[0], bannerScreens[1], bannerScreens[2]],
  [bannerScreens[3], bannerScreens[4]],
];

const Mano = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPair, setCurrentPair] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentBannerPair, setCurrentBannerPair] = useState(0);
  const [currentBannerTrio, setCurrentBannerTrio] = useState(0);
  return (
    <div className="max-w-[1728px] mx-auto">
      <div className="flex flex-col gap-6 mt-[58px] max-w-[1242px] mx-auto">
        <h1 className="lg:text-[40px] text-3xl font-bold">MANO</h1>
        <h2 className="lg:text-[36px] text-2xl font-semibold">
          Scroll. Tap. Own It.
        </h2>
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
      </div>
      {/* Hero Section with iPhones */}
      <section className="mt-10 max-w-[1242px] mx-auto">
        <div className=" h-[400px] lg:h-[580px] px-5 lg:px-[135px] relative overflow-hidden rounded-lg">
          {/* Background Image */}
          <img
            src="/images/projects/mano/background-hero.png"
            alt="MANO Background"
            className="absolute inset-0 w-full h-full object-cover bg-[#161517]"
          />
          {/* iPhone 1 - Left large phone (visible on all screens) */}
          <img
            src="/images/projects/mano/iPhone 13 Pro1.png"
            alt="MANO App Screen 1"
            className="absolute left-1/2 -translate-x-1/2 lg:left-[135px] lg:translate-x-0 top-1/2 -translate-y-1/2 h-[85%] w-auto z-10"
          />
          {/* iPhone 2 - Top right small (hidden on mobile) */}
          <img
            src="/images/projects/mano/iPhone 13 Pro2.png"
            alt="MANO App Screen 2"
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 w-[251px] z-20"
          />
          {/* iPhone 3 - Center phone (hidden on mobile) */}
          <img
            src="/images/projects/mano/iPhone 13 Pro3.png"
            alt="MANO App Screen 3"
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 w-[251px] z-20"
          />
          {/* iPhone 4 - Right side phone (hidden on mobile) */}
          <img
            src="/images/projects/mano/iPhone 13 Pro4.png"
            alt="MANO App Screen 4"
            className="hidden lg:block absolute right-[135px] top-0 w-[251px] z-10"
          />
          {/* iPhone 5 - Bottom right (hidden on mobile) */}
          <img
            src="/images/projects/mano/iPhone 13 Pro5.png"
            alt="MANO App Screen 5"
            className="hidden lg:block absolute right-[135px] bottom-0 w-[251px] z-10"
          />
        </div>
      </section>
      <section className="mt-[90px] max-w-[1277px] mx-auto">
        <div className="flex flex-col gap-6">
          <h1 className="lg:text-[36px] text-3xl font-semibold">
            About the Project
          </h1>
          <h2 className="lg:text-[24px] font-medium text-xl">
            MANO is a mobile-first fashion e-commerce app created for modern,
            style-driven users. The project centered on delivering a clean,
            intuitive shopping experience that reflects MANO’s brand —
            minimalist, bold, and user-focused. From product browsing to
            checkout, every screen was designed to guide users effortlessly
            while showcasing fashion in a premium digital environment.
          </h2>
        </div>
        <div className="h-[338px] rounded-[5px] mt-[90px] bg-[linear-gradient(83.96deg,#101010_10.71%,#4C4B4B_41.22%,#101010_90.91%)] relative flex items-end justify-center lg:block">
          <img
            src="/images/projects/mano/about the project/Frame mokeup icon1.png"
            alt="icon-img"
            className="xl:left-[220px] lg:left-25 lg:top-15 lg:absolute"
          />
          <img
            src="/images/projects/mano/about the project/mockup icon2.png"
            alt="icon2-img"
            className="hidden lg:block absolute xl:right-[219px] lg:right-25 top-0"
          />
        </div>
      </section>
      {/* Profile Screens Section */}
      <section className="mt-[90px] max-w-[1277px] mx-auto">
        {/* Mobile Carousel - 1 image */}
        <div className="md:hidden bg-[#FFFFFF] rounded-[5px] overflow-hidden">
          <div className="relative h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={profileScreens[currentSlide].src}
                alt={profileScreens[currentSlide].alt}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="h-[85%] w-auto"
              />
            </AnimatePresence>
          </div>
          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 pb-6">
            {profileScreens.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-[#403F3F]" : "bg-[#D9D9D9]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Tablet Carousel - 2 images */}
        <div className="hidden md:block lg:hidden bg-[#FFFFFF] rounded-[5px] overflow-hidden">
          <div className="relative h-[500px] flex items-center justify-center gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPair}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center gap-6 h-full"
              >
                {profileScreenPairs[currentPair].map((screen, idx) => (
                  <img
                    key={idx}
                    src={screen.src}
                    alt={screen.alt}
                    className="h-[85%] w-auto"
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 pb-6">
            {profileScreenPairs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPair(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentPair === index ? "bg-[#403F3F]" : "bg-[#D9D9D9]"
                }`}
                aria-label={`Go to pair ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Desktop Layout */}
        <div className="hidden lg:block relative lg:h-[550px] xl:h-[674px] bg-[#FFFFFF] rounded-[5px] overflow-hidden">
          <img
            src="/images/projects/mano/about the project/profile – Копие.png"
            alt="Profile Screen"
            className="absolute lg:left-[4%] xl:left-[54px] lg:top-[15px] xl:top-[23px] lg:h-[350px] xl:h-auto w-auto"
          />
          <img
            src="/images/projects/mano/about the project/Log In – Копие.png"
            alt="Log In Screen"
            className="absolute lg:left-[27%] xl:left-[355px] lg:top-[45px] xl:top-[71px] lg:h-[350px] xl:h-auto w-auto"
          />
          <img
            src="/images/projects/mano/about the project/PROFILE-1 – Копие.png"
            alt="Profile Menu Screen"
            className="absolute lg:left-[50%] xl:left-[656px] lg:top-[80px] xl:top-[124px] lg:h-[350px] xl:h-auto w-auto"
          />
          <img
            src="/images/projects/mano/about the project/EDIT PROFILE – Копие.png"
            alt="Edit Profile Screen"
            className="absolute lg:left-[73%] xl:left-[957px] lg:top-[120px] xl:top-[186px] lg:h-[350px] xl:h-auto w-auto"
          />
        </div>
      </section>
      <section className="mt-[90px] max-w-[1223px] mx-auto">
        <div className="flex flex-col gap-6 ">
          <h1 className="lg:text-[36px] text-3xl font-semibold">
            Challenges & Goals
          </h1>
          <h2 className="lg:text-[24px] tracking-[2%] text-justify font-medium text-xl  xl:h-[211px]">
            The main challenge was to design a visually refined interface that
            also improved usability and reduced friction throughout the shopping
            flow. Fashion shoppers expect both inspiration and speed, so the app
            needed to balance aesthetic clarity with smart, efficient
            functionality.
          </h2>
        </div>
        <div className="my-[90px] max-w-[1277px] mx-auto">
          <img
            src="/images/projects/mano/challenges/dark and light mode 1.png"
            alt="dark-light-img"
          />
        </div>
        <div className="flex flex-col gap-6 max-w-[1286px] mx-auto">
          <h1 className="lg:text-[36px] text-3xl font-semibold">
            Challenges & Goals
          </h1>
          <h2 className="lg:text-[24px] tracking-[2%] text-justify font-medium text-xl">
            We led the complete UX/UI design process for MANO — from strategy to
            execution. Our work included:
          </h2>
          <div className="flex flex-col lg:text-[24px] gap-[14.4px]">
            <div className="flex items-center gap-[20.5px]">
              <img src="/images/services/Cube.png" alt="cube-icon" />
              <p className="font-normal">
                Researching user behavior and best practices in mobile fashion
                retail
              </p>
            </div>
            <div className="flex items-center gap-[20.5px]">
              <img src="/images/services/Cube.png" alt="cube-icon" />
              <p className="font-normal">
                Designing wireframes and high-fidelity prototypes in Figma
              </p>
            </div>
            <div className="flex items-center gap-[20.5px]">
              <img src="/images/services/Cube.png" alt="cube-icon" />
              <p className="font-normal">
                Creating a modular UI system with reusable components
              </p>
            </div>
            <div className="flex items-center gap-[20.5px]">
              <img src="/images/services/Cube.png" alt="cube-icon" />
              <p className="font-normal">
                Streamlining the product page, cart, and checkout flows
              </p>
            </div>
            <div className="flex items-center gap-[20.5px]">
              <img src="/images/services/Cube.png" alt="cube-icon" />
              <p className="font-normal">
                Ensuring the app is optimized for performance and clarity on all
                mobile devices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Banner Carousel - 1 image */}
      <section className="sm:hidden my-[90px] w-full bg-[#111111] py-10">
        <div className="relative h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentBanner}
              src={bannerScreens[currentBanner].src}
              alt={bannerScreens[currentBanner].alt}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="h-[85%] w-auto"
            />
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 pt-6">
          {bannerScreens.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentBanner === index ? "bg-[#FFFFFF]" : "bg-[#555555]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Small Banner Carousel - 2 images */}
      <section className="hidden sm:block md:hidden my-[90px] w-full bg-[#111111] py-10">
        <div className="relative h-[500px] flex items-center justify-center gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBannerPair}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center gap-4 h-full"
            >
              {bannerScreenPairs[currentBannerPair].map((screen, idx) => (
                <img
                  key={idx}
                  src={screen.src}
                  alt={screen.alt}
                  className="h-[85%] w-auto"
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 pt-6">
          {bannerScreenPairs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBannerPair(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentBannerPair === index ? "bg-[#FFFFFF]" : "bg-[#555555]"
              }`}
              aria-label={`Go to pair ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Tablet Banner Carousel - 3 images */}
      <section className="hidden md:block lg:hidden my-[90px] w-full bg-[#111111] py-10">
        <div className="relative h-[500px] flex items-center justify-center gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBannerTrio}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center gap-4 h-full"
            >
              {bannerScreenTrios[currentBannerTrio].map((screen, idx) => (
                <img
                  key={idx}
                  src={screen.src}
                  alt={screen.alt}
                  className="h-[85%] w-auto"
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 pt-6">
          {bannerScreenTrios.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBannerTrio(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentBannerTrio === index ? "bg-[#FFFFFF]" : "bg-[#555555]"
              }`}
              aria-label={`Go to group ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Desktop Banner - all 5 images */}
      <section className="hidden lg:flex my-[90px] w-full 2xl:h-[800px] xl:h-[650px] lg:h-[500px] 2xl:py-0 xl:py-10 lg:py-8 items-center justify-evenly bg-[#111111] gap-0">
        <div>
          <img
            src="/images/projects/mano/loweBanner/img1.png"
            alt="img1"
            className="2xl:h-[658px] xl:h-[500px] lg:h-[380px] w-auto"
          />
        </div>
        <div>
          <img
            src="/images/projects/mano/loweBanner/img2.png"
            alt="img2"
            className="2xl:h-[658px] xl:h-[500px] lg:h-[380px] w-auto"
          />
        </div>
        <div>
          <img
            src="/images/projects/mano/loweBanner/img3.png"
            alt="img3"
            className="2xl:h-[658px] xl:h-[500px] lg:h-[380px] w-auto"
          />
        </div>
        <div>
          <img
            src="/images/projects/mano/loweBanner/img4.png"
            alt="img4"
            className="2xl:h-[658px] xl:h-[500px] lg:h-[380px] w-auto"
          />
        </div>
        <div>
          <img
            src="/images/projects/mano/loweBanner/img5.png"
            alt="img5"
            className="2xl:h-[658px] xl:h-[500px] lg:h-[380px] w-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Mano;
