import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginProps = {
  setIsLogin: (v: boolean) => void;
};

export default function Login({ setIsLogin }: LoginProps) {
  const navigate = useNavigate();

  const userData = {
    email: "admin@gmail.com",
    password: "123456",
    role: "Admin",
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      form.email === userData.email &&
      form.password === userData.password &&
      form.role === userData.role
    ) {
      setIsLogin(true);
      navigate("/account");
    } else {
      setError("Email, mật khẩu hoặc quyền không đúng!");
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Nhập email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Nhập mật khẩu"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="">-- Chọn quyền --</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <br />
        <button type="submit">Đăng nhập</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
