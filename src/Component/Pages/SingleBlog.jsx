import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router"; // ✅ Fix import
import DiscountBanner from "../Home/DiscountBanner";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  if (!blog) return <p className="text-center mt-10">Loading...</p>;

  const imageUrl = `https://picsum.photos/seed/${id}/800/400`;

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <Link to="/" className="text-blue-600 hover:underline">
        ← Back to Blogs
      </Link>

      {/* Thumbnail Image */}
      <img
        src={imageUrl}
        alt={blog.title}
        className="w-full h-64 object-cover rounded my-6"
      />

      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 leading-relaxed">{blog.body}</p>
      <div className="py-13">
        <DiscountBanner />
      </div>
    </div>
  );
};

export default SingleBlog;
