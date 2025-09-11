import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        404 - Không tìm thấy trang
      </h1>
      <p className="text-gray-600 mb-6">Trang bạn tìm không tồn tại.</p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Quay lại
        </button>

        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
