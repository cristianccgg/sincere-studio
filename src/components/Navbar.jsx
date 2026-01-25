import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./common/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex h-22.5 font-rajdhani items-center justify-between w-full pl-[13.5px] pr-[22.5px]">
      <img src="/images/navbar/logo.png" alt="logo" className="w-33 h-15" />
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

      <div className="text-[24px]  gap-12.5 pe-3 ps-6.5 hidden md:flex">
        <button className="px-3 cursor-pointer hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]">
          Services
        </button>
        <button className="px-3 cursor-pointer hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]">
          Our Projects
        </button>
        <button className="px-3 cursor-pointer hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]">
          About Us
        </button>
        <Button>Contacts</Button>
      </div>
      {isMenuOpen && (
        <div className="text-[24px] md:hidden gap-5 absolute top-20 flex flex-col items-start">
          <button className=" cursor-pointer hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]">
            Services
          </button>
          <button className=" cursor-pointer hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]">
            Our Projects
          </button>
          <button className=" cursor-pointer hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]">
            About Us
          </button>
          <Button>Contacts</Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
