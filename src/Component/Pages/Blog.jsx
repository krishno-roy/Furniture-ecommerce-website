import React, { useEffect, useState } from "react";
import BlogCard from "../Home/BlogCard";
import ShopBg from "../../assets/flowers-on-wooden-cupboard-in-natural-living-room-2023-11-27-05-05-49-utc.jpg";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogs(data.posts.slice(0, 20))); // only 4 blogs
  }, []);

  return (
    <div className="">
       <div
              className="relative bg-cover bg-center py-20 text-white text-center"
              style={{ backgroundImage: `url(${ShopBg})` }}
            >
              <div className="absolute inset-0 bg-black/45 bg-opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold">Blog</h2>
                <p className="text-lg mt-2">Home | Blog</p>
              </div>
            </div>
      <div className="flex justify-between py-4 px-10">
        <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
        <button className="px-4 py-2 rounded border text-xl">View All</button>
      </div>
      <div className="grid gap-6 md:grid-cols-4 px-12">
        {blogs.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
