
import React from "react";
import { Card, Typography, Button } from "antd";
import { Navigate, useNavigate } from "react-router-dom";

type CurrentUser = { id: number; email: string };

export default function Home() {
  const navigate = useNavigate();

  const raw = localStorage.getItem("currentUser");
  const current: CurrentUser | null = raw ? JSON.parse(raw) : null;

  
  if (!current) return <Navigate to="/login" replace />;

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login", { replace: true });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f5f7fb",
      }}
    >
      <Card
        style={{ width: 480, textAlign: "center" }}
        bodyStyle={{ padding: 24 }}
      >
        <Typography.Title level={2} style={{ marginBottom: 8 }}>
          Home page
        </Typography.Title>
        <Typography.Paragraph style={{ margin: 0, fontSize: 16 }}>
          Email: <b>{current.email}</b>
        </Typography.Paragraph>

        <div style={{ marginTop: 16 }}>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </Card>
    </div>
  );
}
