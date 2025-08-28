import React, { useEffect, useState } from "react";

export default function KeyTracker() {
  const [keyPressed, setKeyPressed] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKeyPressed(event.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "80px",
        fontWeight: "bold",
        fontFamily: "Arial",
        backgroundColor: "#f0f0f0",
        userSelect: "none",
      }}
    >
      {keyPressed ? `Phím: ${keyPressed}` : "Nhấn phím bất kỳ..."}
    </div>
  );
}
