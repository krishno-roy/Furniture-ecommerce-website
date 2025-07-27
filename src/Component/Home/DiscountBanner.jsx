import React from "react";
import chair from "../../assets/Object.png"; // ছবিটা local রাখলে

const DiscountBanner = () => {
  return (
    <div className="bg-teal-700 rounded-[40px] max-w-7xl mx-auto my-12 px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between text-white px-10">
      {/* Left Image */}
      <div className="md:w-1/2 w-full mb-6 md:mb-0 md:-mt-25 -mt-25">
        <img
          src={chair}
          alt="Chair"
          className="w-full h-auto object-contain max-h-[300px] md:max-h-[400px]"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          To get 30% off?
        </h2>
        <p className="text-base md:text-lg mb-6 text-white/90">
          Sing up our newsletter today and get 10% off your very first online
          order with us
        </p>
        <button className="bg-white text-teal-700 font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition">
          GET NOW
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
