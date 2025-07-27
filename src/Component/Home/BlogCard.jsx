import React from "react";
import { Link } from "react-router";

const BlogCard = ({ post }) => {
  const imageUrl = `https://picsum.photos/seed/${post.id}/400/250`;

  return (
    <Link
      to={`/blog/${post.id}`}
      className="block bg-gray-100 rounded shadow hover:shadow-md transition overflow-hidden "
    >
      <img
        src={imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">
          {post.title.slice(0, 20)}
        </h3>
        <p className="text-gray-600">{post.body.slice(0, 20)}...</p>
      </div>
    </Link>
  );
};

export default BlogCard;
