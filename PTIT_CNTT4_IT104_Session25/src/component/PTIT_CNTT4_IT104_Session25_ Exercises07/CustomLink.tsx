import React from "react";
import { Link } from "react-router-dom";

export default function CustomLink() {
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h3>CustomLink</h3>
      {/* Link liên kết với trang chủ */}
      <Link to="/home-page">Go to HomePage</Link>
    </div>
  );
}
