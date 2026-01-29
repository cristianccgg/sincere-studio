import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./common/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex h-22.5 font-rajdhani items-center justify-between w-full pl-[13.5px] pr-[22.5px]">
      <Link to="/">
        <img src="/images/navbar/logo.png" alt="logo" className="w-33 h-15" />
      </Link>
      {isMenuOpen ? (
        <X
          className="md:hidden block cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        />
      ) : (
        <Menu
          className="md:hidden block cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      )}

      <div className="text-[24px] gap-12.5 pe-3 ps-6.5 hidden md:flex items-center">
        <Link
          to="/services"
          className="px-3 cursor-pointer hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]"
        >
          Services
        </Link>
        <Link
          to="/projects"
          className="px-3 cursor-pointer hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]"
        >
          Our Projects
        </Link>
        <Link
          to="/about-us"
          className="px-3 cursor-pointer hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]"
        >
          About Us
        </Link>
        <Link to="/contacts">
          <Button size="navbar">Contacts</Button>
        </Link>
      </div>
      {isMenuOpen && (
        <div className="text-[24px] md:hidden gap-5 absolute top-22.5 left-0 right-0 flex flex-col items-start bg-white p-6 z-50 shadow-lg">
          <Link
            to="/services"
            className="cursor-pointer hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]"
          >
            Services
          </Link>
          <Link
            to="/projects"
            className=" cursor-pointer hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]"
          >
            Our Projects
          </Link>
          <Link
            to="/about-us"
            className=" cursor-pointer hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]"
          >
            About Us
          </Link>
          <Link to="/contacts">
            <Button size="navbar">Contacts</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
