import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Link to="/" className="text-teal-600 underline mb-6 inline-block">
        ← Back to Shop
      </Link>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full md:w-1/2 object-contain rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-teal-700 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500">
            Discount: {product.discountPercentage}%
          </p>
          {/* Add more details if you want */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
