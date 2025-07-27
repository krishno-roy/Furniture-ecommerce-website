// src/pages/Product.jsx
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router";
import ShopBg from "../../assets/flowers-on-wooden-cupboard-in-natural-living-room-2023-11-27-05-05-49-utc.jpg";

const categories = [
  "furniture",
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "lighting",
  "motorcycle",
  "tops",
];

const PRODUCTS_PER_PAGE = 8;

const Product = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("furniture");
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const skip = (page - 1) * PRODUCTS_PER_PAGE;

    fetch(
      `https://dummyjson.com/products/category/${category}?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalProducts(data.total);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [category, page]);

  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  return (
    <section className=" bg-white">
      {/* Banner */}
      <div
        className="relative bg-cover bg-center py-20 text-white text-center"
        style={{ backgroundImage: `url(${ShopBg})` }}
      >
        <div className="absolute inset-0 bg-black/45 bg-opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold">Shop</h2>
          <p className="text-lg mt-2">Home | Shop</p>
        </div>
      </div>

      {/* Filter */}
      <div className="max-w-7xl mx-auto py-6 flex justify-center">
        <select
          className="border border-gray-300 rounded-md px-4 py-2"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 p-4 rounded-2xl flex flex-col cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
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
                <button
                  className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-teal-600 hover:text-white transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Added ${product.title} to cart!`);
                  }}
                >
                  ADD TO CART
                </button>
                <button
                  className="p-2 rounded-full border border-gray-300 hover:bg-pink-100 text-gray-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Added ${product.title} to wishlist!`);
                  }}
                >
                  <FaHeart size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className={`px-4 py-2 rounded-md border ${
              page === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-white hover:bg-teal-600 hover:text-white"
            }`}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => setPage(idx + 1)}
              className={`px-4 py-2 rounded-md border ${
                page === idx + 1
                  ? "bg-teal-600 text-white"
                  : "bg-white hover:bg-teal-600 hover:text-white"
              }`}
            >
              {idx + 1}
            </button>
          ))}
          <button
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className={`px-4 py-2 rounded-md border ${
              page === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-white hover:bg-teal-600 hover:text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
