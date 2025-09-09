import React from "react";
import { useParams, Link } from "react-router-dom";

// Lặp lại mảng users cho đúng yêu cầu "không dùng file .ts riêng"
const users = [
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
  { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },
];

export default function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <h3>Không tìm thấy người dùng</h3>
        <Link to="/">← Quay lại danh sách</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ textAlign: "center", marginBottom: 16 }}>
        Thông tin chi tiết
      </h2>

      <div
        style={{
          width: 360,
          margin: "0 auto",
          border: "1px solid #ddd",
          borderRadius: 6,
          padding: 12,
          background: "#fff",
        }}
      >
        <p>
          <b>Id:</b> {user.id}
        </p>
        <p>
          <b>UserName:</b> {user.name}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
        <p>
          <b>Address:</b> {user.address}
        </p>

        <Link
          to="/"
          style={{
            display: "inline-block",
            marginTop: 8,
            border: "1px solid #bbb",
            borderRadius: 4,
            padding: "6px 10px",
            textDecoration: "none",
            color: "#222",
          }}
        >
          Quay lại
        </Link>
      </div>
    </div>
  );
}
