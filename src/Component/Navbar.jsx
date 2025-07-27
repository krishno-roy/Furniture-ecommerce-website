import React, { useState, useEffect } from "react";
import LogoImage from "../assets/Couchly-black.png";
import { NavLink } from "react-router";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus, FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle sticky on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 bg-[#f6f6f6] ${
        isSticky
          ? "sticky top-0 bg-white shadow-md transition-all duration-300"
          : ""
      }`}
    >
      <header className="container mx-auto flex justify-between py-4 px-4 md:px-0">
        {/* Logo */}
        <div>
          <img src={LogoImage} alt="Logo" className="w-32" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-xl text-right">
          <li>
            <NavLink to="/" className="hover:text-red-500">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-red-500">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="hover:text-red-500">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="hover:text-red-500">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-red-500">
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex gap-3 items-center">
          <div className="border p-2 rounded-full cursor-pointer">
            <IoSearch />
          </div>
          <div className="border p-2 rounded-full relative cursor-pointer">
            <FaCartPlus />
            <div className="bg-red-500 text-white px-2 py-1 rounded-full absolute text-xs top-[-10px] right-[-10px]">
              0
            </div>
          </div>
          <div className="border p-2 rounded-full cursor-pointer">
            <FaUser />
          </div>

          {/* Hamburger Icon */}
          <div
            className="md:hidden p-2 ml-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-white text-center text-lg py-4 shadow-lg">
          <li className="py-2">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/shop" onClick={() => setIsMenuOpen(false)}>
              Shop
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/blog" onClick={() => setIsMenuOpen(false)}>
              Blog
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
