import React from "react";
import { Link } from "react-router-dom";
import { posts } from "./Data";

export default function Posts() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {" "}
        Danh sách bài viết
      </h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-white rounded-lg shadow-md p-4 hover:bg-gray-50 transition"
          >
            <h3 className="text-lg font-semibold text-blue-600 hover:underline">
              <Link to={`/blog/posts/${post.id}`}>{post.title}</Link>
            </h3>
            <p className="text-gray-600 mt-1">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
