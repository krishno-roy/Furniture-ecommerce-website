import React, { useEffect, useState } from "react";
import BannerImage from "../../assets/Group-9477-2.png";

const Elegantfurniture = () => {
  return (
    <section className="bg-[#f8f8f8]  px-5 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 pb-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Elegant Furniture <br />
          </h2>
          <p>
            Upgrade your home with our innovative furniture
            <br /> designs.
          </p>

          <button className="border-b-1 text-sm px-6 py-2 transition">
            BUY NOW
          </button>
        </div>

        {/* Right Image */}
        <div className=" flex-col-reverse">
          <img src={BannerImage} alt="Offer" className=" max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Elegantfurniture;
