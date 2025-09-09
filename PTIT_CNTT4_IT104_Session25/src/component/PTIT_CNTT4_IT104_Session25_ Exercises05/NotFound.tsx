import React from 'react'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 120, fontWeight: 700, lineHeight: 1 }}>404</div>
        <div style={{ fontSize: 24, color: "#6b7280", marginTop: 8 }}>
          Not Found
        </div>
      </div>
    </div>
  );
}
