import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/slices/themeSlice";

export default function ThemeToggle() {
  const mode = useSelector((state: any) => state.theme.mode); 
  const dispatch = useDispatch();
  const isLight = mode === "light";

  const handleChange = () => {
    dispatch(toggle());
  };

  return (
    <div
      style={{
        minHeight: "100vh", 
        background: isLight ? "#ffffff" : "#1f2937",
        color: isLight ? "#111" : "#eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={handleChange}
        style={{
          padding: "8px 14px",
          borderRadius: 6,
          border: "1px solid #aaa",
          background: isLight ? "#f3f4f6" : "#3f4248",
          color: isLight ? "#111" : "#eee",
          cursor: "pointer",
        }}
      >
        {isLight ? "Light" : "Dark"}
      </button>
    </div>
  );
}
