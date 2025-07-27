import React from "react";
import bannerImage from "../../assets/Group-9481.png"; 
import productData from "../ProductData/productData"; //

const FeaturedSection = () => {
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        {/* LEFT - Banner */}
        <div className="bg-teal-700 text-white p-6 rounded-3xl flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Innovative Furniture</h2>
            <p className="mb-6">
              Upgrade your home with our innovative furniture designs.
            </p>
            <button className="underline underline-offset-4 font-semibold">
              EXPLORE NOW →
            </button>
          </div>
          <div className="mt-auto">
            <img
              src={bannerImage}
              alt="Furniture"
              className="w-full object-contain max-h-[300px] mt-5 pl-35"
            />
          </div>
        </div>

        {/* RIGHT - Product Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {productData.map((product, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl "
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full object-contain mb-3"
              />
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <div className="mt-1">
                {product.discountPrice ? (
                  <>
                    <span className="line-through text-gray-400 text-sm mr-2">
                      ${product.originalPrice}
                    </span>
                    <span className="text-teal-600 font-bold">
                      ${product.discountPrice}
                    </span>
                  </>
                ) : (
                  <span className="text-teal-600 font-bold">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <div className="flex  gap-2 mt-4">
                <button className="border border-gray-400 rounded-full px-4 py-1 text-sm font-medium">
                  ADD TO CART
                </button>
                <button className="border border-gray-400 rounded-full px-3 py-1">
                  🤍
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
