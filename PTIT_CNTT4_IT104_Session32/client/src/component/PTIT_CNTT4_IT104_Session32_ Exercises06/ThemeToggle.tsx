import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./store/index.css";
export default function ThemeToggle() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: any) => state.themeState.darkMode);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "TOGGLE_THEME", payload: e.target.checked });
  };

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <h1>Chế độ: {darkMode ? "Tối" : "Sáng"}</h1>
      <label>
        <input type="checkbox" checked={darkMode} onChange={handleToggle} /> Bật
        chế độ tối
      </label>
    </div>
  );
}
