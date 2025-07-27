import React from "react";
import { FaArrowRight } from "react-icons/fa";
import BannerImage from "../../assets/Furniture.png";
import BannerImage2 from "../../assets/Elegant-Furniture.png";
import BannerImage3 from "../../assets/Modern-Furniture.png";

const Farniturelist = [
  {
    id: 1,
    title: "Elegant Furniture",
    description: "Upgrade your home with our innovative furniture designs.",
    image: BannerImage2,
  },
  {
    id: 2,
    title: "Modern Furniture",
    description: "Elevate your living space with sleek modern design.",
    image: BannerImage3,
  },
];

const ProductFeture = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Featured Box */}
        <div className="w-full lg:w-1/3 bg-[#0b7e8a] text-white p-6 rounded-lg space-y-4 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Innovative Furniture</h2>
            <p>Upgrade your home with our innovative furniture designs.</p>
          </div>
          <button className="flex items-center gap-2 underline hover:text-black transition">
            Explore now <FaArrowRight className="-rotate-45" />
          </button>
          <img
            src={BannerImage}
            alt="Furniture"
            className="w-full rounded-lg mt-4"
          />
        </div>

        {/* Right Product List */}
        <div className="w-full lg:w-2/3 space-y-8">
          {Farniturelist.map((product) => (
            <div
              key={product.id}
              className="bg-[#f6f6f6] shadow-md rounded-lg overflow-hidden p-5"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Text Section */}
                <div className="w-full md:w-2/3 space-y-2">
                  <h2 className="text-2xl font-semibold">{product.title}</h2>
                  <p className="text-gray-600">{product.description}</p>
                  <button className="flex items-center gap-2 mt-3 text-[#0b7e8a] hover:text-black underline transition">
                    Explore now <FaArrowRight className="-rotate-45" />
                  </button>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeture;
