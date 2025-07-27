import React, { useEffect, useState } from "react";
import BlogCard from "../Home/BlogCard";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogs(data.posts.slice(0, 4))); // only 4 blogs
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="flex justify-between py-4">
        <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
        <button className="px-4 py-2 rounded border text-xl">View All</button>
      </div>
      <div className="grid gap-6 md:grid-cols-4">
        {blogs.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
