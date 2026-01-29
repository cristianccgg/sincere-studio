import React from "react";
import { Link } from "react-router-dom";
import Button from "./common/Button";

const Footer = () => {
  return (
    <div className="mt-30 flex flex-col md:flex-row justify-between md:gap-30 gap-15 2xl:pt-[140px] 2xl:ps-[173px] 2xl:pe-[364px] 2xl:pb-[223px] pb-32.5 md:px-25">
      <div className="flex flex-col items-start md:gap-17.5 gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="lg:text-[48px] text-[32px] font-bold leading-[100%]">
            LET'S COLABORATE
          </h2>
          <h3 className="lg:text-[36px] text-[24px] font-medium ">
            We can make more then just a product
          </h3>
        </div>
        <Link to="/contacts">
          <Button variant="primary" size="lg">
            Let's work !
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="lg:text-[32px] text-[24px] font-semibold">Company</h3>
        <Link to="/" className="lg:text-[24px] text-xl font-semibold cursor-pointer hover:text-[#8A38F5] transition-colors">
          Home
        </Link>
        <Link to="/services" className="lg:text-[24px] text-xl font-semibold cursor-pointer hover:text-[#8A38F5] transition-colors">
          Services
        </Link>
        <Link to="/projects" className="lg:text-[24px] text-xl font-semibold cursor-pointer hover:text-[#8A38F5] transition-colors">
          Our Projects
        </Link>
        <Link to="/about-us" className="lg:text-[24px] text-xl font-semibold cursor-pointer hover:text-[#8A38F5] transition-colors">
          About Us
        </Link>
        <Link to="/contacts" className="lg:text-[24px] text-xl font-semibold cursor-pointer hover:text-[#8A38F5] transition-colors">
          Let's work
        </Link>
        <span className="lg:text-[24px] text-xl font-semibold cursor-pointer hover:text-[#8A38F5] transition-colors">
          Privacy Policy
        </span>
      </div>
    </div>
  );
};

export default Footer;
