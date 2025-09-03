import React, { useEffect, useRef, useState } from "react";

export default function ModalFocus() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <button
        onClick={() => setIsOpen(true)}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Mở Modal
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -30%)",
            background: "#fff",
            padding: "30px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
          }}
        >
          <h3> Modal đang mở</h3>
          <input
            ref={inputRef}
            type="text"
            placeholder="Nhập gì đó..."
            style={{
              padding: "10px",
              width: "300px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          />
          <br />
          <button
            onClick={() => setIsOpen(false)}
            style={{ padding: "8px 16px" }}
          >
            Đóng Modal
          </button>
        </div>
      )}
    </div>
  );
}
