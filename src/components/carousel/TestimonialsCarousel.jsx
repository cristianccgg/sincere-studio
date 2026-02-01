import React, { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    text: "The work was extremely professional and pleasant. They worked on both of our brands as well as a number of advertising materials, and throughout the whole process showed understanding of our ideas and needs. Fast, precise, and with clear communication, which made the work easy. The results exceeded our expectations, and we would gladly work with her again.",
    name: "Jeni Jekova",
    position: "CEO of The Academy",
    image: "/images/landing/testimonials/jeni.png",
  },
  {
    id: 2,
    text: "Their minimalistic and bold style gave our brand a fresh, modern look. Every step of the process was transparent, professional, and delivered with precision",
    name: "Frank Johnson",
    position: "Marketing Director at V Group",
    image: "/images/landing/testimonials/frank.png",
  },
  {
    id: 3,
    text: "I would like to sincerely thank you for the professionalism and excellent work in creating my website. The result exceeded my expectations, and I am extremely pleased with our collaboration. Thanks to Sincere Studio, my site now has a modern, functional, and attractive look. Thank you! Keep putting your heart into your work!",
    name: "Didi Aleksieva",
    position: "Co-Owner of The Food Co.",
    image: "/images/landing/testimonials/didi.png",
  },
  {
    id: 4,
    text: "They were proactive, flexible, and treated our project like their own. Thanks to their work, our product launch was a huge success.",
    name: "David Johnson",
    position: "Co-Founder of Era",
    image: "/images/landing/testimonials/David.png",
  },
  {
    id: 5,
    text: "Working with Sincere Studio was a turning point for my business. They didn’t just design a website – they built a digital identity that truly reflects my brand. The team was attentive, creative, and always willing to adapt to my ideas. The result exceeded my expectations.",
    name: "Mark Ray",
    position: "CEO of THE.Flow",
    image: "/images/landing/testimonials/Mark.png",
  },
  {
    id: 6,
    text: "Sincere Studio transformed my online store into a professional, responsive, and user-friendly website. Their attention to detail and creative input helped me double my sales in just three months.",
    name: "Jessica Miller",
    position: "CEO of HomeDec",
    image: "/images/landing/testimonials/Jessica.png",
  },
  {
    id: 7,
    text: "Sincere Studio transformed my online store into a professional, responsive, and user-friendly website. Their attention to detail and creative input helped me double my sales in just three months.",
    name: "Jessica Miller",
    position: "CEO of HomeDec",
    image: "/images/landing/testimonials/jessica2.png",
  },
];

const TestimonialsCarousel = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const animationRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setLastX(e.pageX);
    setLastTime(Date.now());
    setVelocity(0);

    // Cancel any ongoing momentum animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      applyMomentum();
    }
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      applyMomentum();
    }
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const currentTime = Date.now();
    const currentX = e.pageX;
    const timeDelta = currentTime - lastTime;
    const distance = currentX - lastX;

    // Calculate velocity
    if (timeDelta > 0) {
      const currentVelocity = distance / timeDelta;
      setVelocity(currentVelocity);
    }

    setLastX(currentX);
    setLastTime(currentTime);

    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const applyMomentum = () => {
    let currentVelocity = velocity * 20; // Amplify velocity for momentum
    const friction = 0.95; // Friction factor (0.95 = 5% speed reduction per frame)
    const minVelocity = 0.5; // Minimum velocity threshold

    const animate = () => {
      if (Math.abs(currentVelocity) > minVelocity) {
        scrollContainerRef.current.scrollLeft -= currentVelocity;
        currentVelocity *= friction;
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      if (scrollContainer) {
        const firstCard = scrollContainer.querySelector(':scope > div:not(style)');
        if (firstCard) {
          const cardWidth = firstCard.offsetWidth + 24; // card width + gap
          const index = Math.round(scrollContainer.scrollLeft / cardWidth);
          setCurrentIndex(Math.max(0, Math.min(index, testimonials.length - 1)));
        }
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="w-full mx-auto px-4">
      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex overflow-x-auto gap-6 pb-4 scroll-smooth cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`p-6 md:p-8 shadow-containers drop-shadow-containers lg:p-10.5 md:min-w-[45vw] lg:min-w-[42vw] xl:min-w-[38vw] 2xl:min-w-[570px] md:max-w-[45vw] lg:max-w-[42vw] xl:max-w-[38vw] 2xl:max-w-[570px] rounded-xl border-dashed border border-[#8A38F5] flex flex-col gap-4 md:gap-5 lg:gap-6 flex-shrink-0 h-fit select-none ${
                  isMobile ? 'min-w-[280px] max-w-[280px]' : ''
                }`}
          >
            {/* Quote Marks */}
            <div className="flex w-13.5 h-[33.67px] gap-1.5 md:gap-2 lg:gap-2.25">
              <img
                src="/images/landing/testimonials/quote-sign.png"
                alt="quote-sign-img"
                className=""
              />
              <img
                src="/images/landing/testimonials/quote-sign.png"
                alt="quote-sign-img"
                className=""
              />
            </div>

            {/* Testimonial Text */}
            <p className="text-sm md:text-base text-[#262424] lg:text-lg leading-relaxed">
              {testimonial.text}
            </p>

            {/* Author Info */}
            <div className="flex gap-2 md:gap-2.5">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between text-[#262424]">
                <h2 className="text-xl md:text-2xl lg:text-[32px] font-medium leading-tight">
                  {testimonial.name}
                </h2>
                <h3 className="text-base md:text-lg lg:text-[24px] font-medium text-[#262424]">
                  {testimonial.position}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots - only on mobile */}
      {isMobile && (
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const firstCard = scrollContainerRef.current?.querySelector(':scope > div:not(style)');
                if (firstCard && scrollContainerRef.current) {
                  const cardWidth = firstCard.offsetWidth + 24;
                  scrollContainerRef.current.scrollTo({
                    left: index * cardWidth,
                    behavior: 'smooth'
                  });
                }
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? 'bg-[#8A38F5]' : 'bg-[#D9D9D9]'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialsCarousel;
