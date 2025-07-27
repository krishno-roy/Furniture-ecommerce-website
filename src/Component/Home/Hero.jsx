import React from "react";
import HeroImage from "../../assets/Hero-furniture.png";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-[#f6f6f6] py-10">
      <div className="container mx-auto px-5 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Right Image Section */}
        <div className="w-full lg:w-1/2">
          <img src={HeroImage} alt="Hero Furniture" className="w-full h-auto" />
        </div>
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <p className="text-[#2ea2cc] font-medium">Sustainable Furniture👌</p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Quality Furniture for
            <br /> Every Room
          </h2>
          <p className="text-gray-700">
            From living rooms to bedrooms, our high-quality furniture
            <br />
            collections offer something for every space.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#2ea2cc] px-7 py-2 rounded-full text-white font-medium hover:bg-[#2389a9] transition">
              Explore Now
            </button>
            <button className="flex items-center gap-3 px-6 py-2 rounded-full bg-white shadow hover:shadow-md transition ">
              <span className="bg-[#f0f0f0] p-3 rounded-full">
                <FaPlay className="text-black" />
              </span>
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
