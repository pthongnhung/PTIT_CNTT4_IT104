import React, { useReducer, useState } from "react";

type State = {
  loading: boolean;
  success: boolean;
  error: boolean;
};

type Action =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS" }
  | { type: "LOGIN_ERROR" };

const initialState: State = {
  loading: false,
  success: false,
  error: false,
};

const loginReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN_START":
      return { loading: true, success: false, error: false };
    case "LOGIN_SUCCESS":
      return { loading: false, success: true, error: false };
    case "LOGIN_ERROR":
      return { loading: false, success: false, error: true };
    default:
      return state;
  }
};

export default function LoginForm() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch({ type: "LOGIN_START" });

    setTimeout(() => {
      if (username === "admin" && password === "123456") {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({ type: "LOGIN_ERROR" });
      }
    }, 2000);
  };

  return (
    <div style={{ width: "300px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2>Đăng nhập</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleLogin}
        disabled={state.loading}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: state.loading ? "#95a5a6" : "#3498db",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {state.loading ? "Đang đăng nhập..." : "Đăng nhập"}
      </button>

      {state.success && (
        <p style={{ color: "green", marginTop: "10px" }}>
          ✅ Đăng nhập thành công!
        </p>
      )}
      {state.error && (
        <p style={{ color: "red", marginTop: "10px" }}>
           Tên đăng nhập hoặc mật khẩu sai.
        </p>
      )}
    </div>
  );
}
