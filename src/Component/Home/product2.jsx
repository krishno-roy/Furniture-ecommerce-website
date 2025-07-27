import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

const Product2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/furniture") // fetch furniture category
      .then((res) => res.json())
      .then((data) => {
        // Show only first 4 products
        setProducts(data.products.slice(0, 8));
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-5 space-y-3">
          <h2 className="text-3xl font-bold">Best selling Furniture</h2>
          <p>Shop versatile furniture perfect for multi-use spaces</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 p-4 rounded-2xl flex flex-col"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-40 h-40 object-contain mb-4 mx-auto"
              />
              <h3 className="text-md font-semibold">{product.title}</h3>
              <div className="text-sm mt-1 mb-2">
                {product.discountPercentage > 0 && (
                  <span className="line-through text-gray-400 mr-2">
                    $
                    {(
                      product.price /
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                  </span>
                )}
                <span className="text-teal-700 font-bold">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-auto">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-teal-600 hover:text-white transition">
                  ADD TO CART
                </button>
                <button className="p-2 rounded-full border border-gray-300 hover:bg-pink-100 text-gray-500">
                  <FaHeart size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center text-white  ">
          <button className="items-center py-3 px-4 bg-[#0b7e8a] hover:bg-black rounded">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product2;
