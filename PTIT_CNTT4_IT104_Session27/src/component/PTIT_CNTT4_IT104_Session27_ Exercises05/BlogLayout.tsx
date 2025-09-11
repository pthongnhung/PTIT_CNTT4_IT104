import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">My Blog</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/blog/posts"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
