import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/slices/authSlice";


export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((s) => s.auth.currentUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <div style={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
      <div
        style={{
          width: 360,
          border: "1px solid #e5e7eb",
          borderRadius: 8,
          padding: 16,
        }}
      >
        <div style={{ marginBottom: 8 }}>
          <strong>User Name:</strong> {user?.userName}
        </div>
        <div style={{ marginBottom: 16 }}>
          <strong>Email:</strong> {user?.email}
        </div>

        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            height: 36,
            borderRadius: 6,
            border: "1px solid #e5e7eb",
            background: "#f8fafc",
            cursor: "pointer",
          }}
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
}
