import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Button from "./common/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Our Projects" },
    { to: "/about-us", label: "About Us" },
  ];

  return (
    <>
      <div className="flex h-22.5 font-rajdhani items-center justify-between w-full pl-[13.5px] pr-[22.5px] relative z-50 bg-[#FBFBFB]">
        <Link to="/" onClick={closeMenu} className="cursor-pointer select-none">
          <img src="/images/navbar/logo.png" alt="logo" className="w-33 h-15 min-w-33 pointer-events-none" draggable="false" />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden block cursor-pointer p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="text-[18px] lg:text-[24px] gap-4 lg:gap-12.5 pe-3 ps-6.5 hidden md:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-3 cursor-pointer hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5]"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contacts">
            <Button size="navbar">Contacts</Button>
          </Link>
        </div>
      </div>

      {/* Mobile navigation overlay - starts below navbar */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed top-22.5 left-0 right-0 bottom-0 bg-black/50 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-22.5 left-0 right-0 bg-[#FBFBFB] z-50 shadow-lg">
          <nav className="flex flex-col items-start p-6 gap-5 text-[24px]">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="cursor-pointer hover:underline hover:underline-offset-[25%] hover:decoration-[#8A38F5] w-full py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contacts" onClick={closeMenu} className="mt-2">
              <Button size="navbar">Contacts</Button>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
