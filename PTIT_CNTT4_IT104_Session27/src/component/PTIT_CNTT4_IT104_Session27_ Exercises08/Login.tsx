import React, { useState } from "react";
import { Link } from "react-router-dom";

interface User {
  email: string;
  password: string;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const matched = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matched) {
      setMessage(" Đăng nhập thành công!");
    } else {
      setMessage(" Thông tin không chính xác.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Đăng nhập</h2>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Đăng nhập
        </button>
      </form>

      {message && <p className="text-center mt-4 text-red-600">{message}</p>}

      <p className="text-center mt-4 text-sm">
        Chưa có tài khoản?{" "}
        <Link to="/register" className="text-blue-600 underline">
          Register here
        </Link>
      </p>
    </div>
  );
}
