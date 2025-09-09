import React from "react";
import { Link } from "react-router-dom";

type User = { id: number; name: string; email: string; address: string };

const users: User[] = [
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
  { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },
];

export default function ListUser() {
  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
        {users.map((u) => (
          <div
            key={u.id}
            style={{
              width: 260,
              border: "1px solid #ddd",
              borderRadius: 6,
              padding: 12,
              background: "#fff",
            }}
          >
            <p>
              <b>Id:</b> {u.id}
            </p>
            <p>
              <b>UserName:</b> {u.name}
            </p>
            <p>
              <b>Email:</b> {u.email}
            </p>
            <p>
              <b>Address:</b> {u.address}
            </p>

            <Link
              to={`/users/${u.id}`}
              style={{
                display: "block",
                textAlign: "center",
                border: "1px solid #bbb",
                borderRadius: 4,
                padding: "6px 0",
                textDecoration: "none",
                color: "#222",
                marginTop: 8,
              }}
            >
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
