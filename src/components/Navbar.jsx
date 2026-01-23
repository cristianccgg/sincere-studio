import React from "react";
import logo from "../assets/images/navbar/logo.png";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <div className="flex font-rajdhani items-center justify-between w-full px-[58.5px]">
      <img src={logo} alt="logo" className="w-33 h-15" />
      <div className="text-[24px] flex gap-12.5 pe-3 ps-6.5">
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
    </div>
  );
};

export default Navbar;
