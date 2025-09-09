import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1 }}>404</div>
        <div style={{ fontSize: 22, color: "#6b7280" }}>Not Found</div>
        <div style={{ marginTop: 16 }}>
          <Link to="/">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
