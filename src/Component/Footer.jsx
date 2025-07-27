import React from "react";
import FooterImg from "../assets/Couchly.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#1e2329] text-white">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <img src={FooterImg} alt="Couchly Logo" className="mb-4 w-32" />
          <p className="mb-4 text-sm leading-6">
            Bring rustic charm into your home with our cozy furniture. Explore
            our collection of wooden tables, distressed finishes, and
            country-inspired designs.
          </p>
          <div className="flex gap-4 mt-2 text-xl text-[#0b7e8a]">
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <IoLogoYoutube className="cursor-pointer" />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl text-[#0b7e8a] font-semibold mb-4">
            Contact info
          </h3>
          <p className="flex items-start gap-2 text-sm mb-3">
            <FaLocationDot className="mt-1" />
            2972 Westheimer Rd.
            <br />
            Santa Ana, Illinois 85486
          </p>
          <p className="flex items-center gap-2 text-sm">
            <MdEmail />
           krishnorooy@gmail.com
          </p>
        </div>

        {/* Collection */}
        <div>
          <h3 className="text-2xl text-[#0b7e8a] font-semibold mb-4">
            Collection
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Living Room Furniture</li>
            <li>Bedroom Furniture</li>
            <li>Dining Room Furniture</li>
            <li>Office Furniture</li>
            <li>Outdoor Furniture</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl text-[#0b7e8a] font-semibold mb-4">
            Insight
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Terms of use</a>
            </li>
            <li>
              <a href="/">Privacy notice</a>
            </li>
            <li>
              <a href="/">Cookies policy</a>
            </li>
            <li>
              <a href="/">Accessibility help</a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-gray-600 my-4 mx-6" />

      <p className="text-center text-xs pb-6 text-gray-400">
        © 2025 Copyright by krishno roy
      </p>
    </footer>
  );
};

export default Footer;
