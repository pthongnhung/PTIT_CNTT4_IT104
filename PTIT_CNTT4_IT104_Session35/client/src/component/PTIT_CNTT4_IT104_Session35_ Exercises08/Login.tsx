import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { USERS } from "../../store/slices/users";
import { login } from "../../store/slices/authSlice";


export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("nva@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const found = USERS.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) {
      setError("Email hoặc mật khẩu không đúng");
      return;
    }

      dispatch(login(found)); 
      navigate("/", { replace: true }); 
      
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
        <h3 style={{ textAlign: "center", marginBottom: 16 }}>LOGIN FORM</h3>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                height: 36,
                border: "1px solid #e5e7eb",
                borderRadius: 6,
                padding: "0 10px",
              }}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                height: 36,
                border: "1px solid #e5e7eb",
                borderRadius: 6,
                padding: "0 10px",
              }}
              required
            />
          </div>

          {error && (
            <div style={{ color: "#ef4444", fontSize: 14 }}>{error}</div>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              height: 36,
              borderRadius: 6,
              border: "1px solid #1d4ed8",
              background: "#2563eb",
              color: "#fff",
              cursor: "pointer",
              marginTop: 6,
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
