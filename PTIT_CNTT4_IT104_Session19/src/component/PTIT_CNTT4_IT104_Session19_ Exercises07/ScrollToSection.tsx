import React, { useRef } from "react";

export default function ScrollToSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <button
        onClick={handleScroll}
        style={{
          margin: "20px",
          padding: "12px 24px",
          backgroundColor: "#3498db",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Đi tới phần nội dung
      </button>

      <div style={{ height: "1000px", padding: "20px", background: "#f5f5f5" }}>
        <p>Đây là nội dung giả lập phía trên để tạo độ dài cho trang.</p>
        <p>Cuộn xuống sẽ thấy phần nội dung ở bên dưới.</p>
      </div>

      <div
        ref={sectionRef}
        style={{
          height: "300px",
          backgroundColor: "#2ecc71",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Đây là phần nội dung cần cuộn tới
      </div>
    </div>
  );
}
