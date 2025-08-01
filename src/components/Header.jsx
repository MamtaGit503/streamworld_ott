import React, { useState, useEffect } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import {
  FaUserCircle,
  FaHome,
  FaImage,
  FaVideo,
  FaStar,
  FaComments,
  FaCrown,
} from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import logo from "../assets/images/logo.png";
import SearchPopup from "./SearchPopup";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "Features", icon: <FaStar /> },
    { name: "Gallery", icon: <FaImage /> },
    { name: "Video", icon: <MdOndemandVideo /> },
    { name: "Testimonials", icon: <FaComments /> },
    { name: "Contact", icon: <FaUserCircle /> },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (name) => {
    setActive(name);
    const section = document.getElementById(name);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="bg-[#000000ef] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 w-full">
          {/* Logo */}
          <a className="flex items-center space-x-4" href="#Home">
            <img src={logo} alt="Logo" className="w-24 h-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6">
            {menuItems.map(({ name }) => (
              <a
                key={name}
                onClick={() => handleScroll(name)}
                className={`relative header_link cursor-pointer font-semibold px-3 py-1 rounded after:transition-all after:duration-500 after:ease-in-out after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[3px] after:bg-[#a70d65] after:mx-auto after:w-0 hover:after:w-8 ${
                  active === name
                    ? "bg-transparent text-white after:w-8"
                    : "hover:text-gray-300"
                }`}
              >
                {name}
              </a>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <div
              className="cursor_main p-3"
              onClick={() => setIsSearchOpen(true)}
            >
              <FiSearch className="w-5 h-5 cursor-pointer" />
            </div>

            <FaUserCircle className="w-6 h-6 cursor-pointer hover:text-[#a70d65]" />

            {/* Subscribe Button */}
            <a href="#Subscriptions">
              <button className="hidden lg:flex space-x-2 items-center bg-[#a70d65] relative btn_line text-white px-5 py-2 rounded font-bold text-[16px]">
                <FaCrown className="text-white text-[18px]" />
                <span>Subscribe</span>
              </button>
            </a>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(true)}>
                <FiMenu size={26} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setIsMenuOpen(false)}
            ></div>

            <div className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-[#111] shadow-lg z-50 p-6 flex flex-col space-y-4 transform -translate-x-full animate-slideInLeft">
              <div className="flex justify-between items-center mb-6">
                <img src={logo} alt="Logo" className="w-24 h-auto" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white"
                >
                  <FiX size={24} />
                </button>
              </div>

              {menuItems.map(({ name, icon }) => (
                <a
                  key={name}
                  onClick={() => {
                    handleScroll(name);
                    setIsMenuOpen(false);
                  }}
                  className={`text-white font-[400] text-[16px] py-2 flex items-center gap-3 ${
                    active === name
                      ? "bg-[#494c51] text-[#a70d65] border-l-4 border-[#a70d65] pl-3"
                      : "hover:text-[#a70d65]"
                  }`}
                >
                  {icon} {name}
                </a>
              ))}

              <a href="#Subscriptions" onClick={() => setIsMenuOpen(false)}>
                <button className="relative mt-6 bg-[#a70d65] btn_line w-full text-white px-4 py-2 rounded font-bold text-[16px] flex items-center gap-2">
                  <FaCrown className="text-white text-[18px]" />
                  <span>Subscribe</span>
                </button>
              </a>
            </div>
          </>
        )}
      </header>

      {/* Search Popup */}
      <SearchPopup
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default Header;
