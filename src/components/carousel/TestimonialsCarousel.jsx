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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.offsetWidth;
      const index = Math.round(scrollPosition / cardWidth);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
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
            className="p-10.5 min-w-[570px] max-w-[570px] rounded-xl shadow drop-shadow-8xl drop-shadow-black flex flex-col gap-6 flex-shrink-0 h-fit"
          >
            {/* Quote Marks */}
            <div className="flex gap-2.25">
              <img
                src="/images/landing/testimonials/quote-sign.png"
                alt="quote-sign-img"
              />
              <img
                src="/images/landing/testimonials/quote-sign.png"
                alt="quote-sign-img"
              />
            </div>

            {/* Testimonial Text */}
            <p className="text-base md:text-lg leading-relaxed">
              {testimonial.text}
            </p>

            {/* Author Info */}
            <div className="flex gap-2.5">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h2 className="text-[32px] font-medium leading-tight">
                  {testimonial.name}
                </h2>
                <h3 className="text-[24px] font-medium text-gray-600">
                  {testimonial.position}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
