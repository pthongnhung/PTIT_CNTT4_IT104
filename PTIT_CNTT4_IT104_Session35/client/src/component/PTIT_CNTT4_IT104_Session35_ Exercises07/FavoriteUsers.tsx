import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { resetAll, toggleFavorite } from "../../store/slices/favoriteUsersSlice";

export default function FavoriteUsers() {
  const dispatch = useDispatch();
  const users = useSelector((s) => s.favoriteUsers.users);

  const favoritesOnly = [...users]
    .filter((u) => u.isFavorite)
    .sort((a, b) => b.favorites - a.favorites);

  return (
    <div
      style={{
        display: "grid",
        gap: 24,
        justifyContent: "center",
        marginTop: 30,
      }}
    >
     
      <div style={{ width: 360, border: "1px solid #e5e7eb", borderRadius: 8 }}>
        <div style={{ padding: 12, fontWeight: 700 }}>List Favorites User</div>
        <div>
          {users.map((u) => (
            <div
              key={u.id}
              style={{
                padding: "10px 12px",
                borderTop: "1px solid #f1f5f9",
                display: "grid",
                gap: 6,
                background: "#fff",
              }}
            >
              <div>
                <strong>UserName:</strong> {u.userName}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span>
                  <strong>Favorites:</strong>
                </span>
                <button
                  onClick={() => dispatch(toggleFavorite(u.id))}
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: 6,
                    padding: "2px 8px",
                    background: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                  title={u.isFavorite ? "Bỏ yêu thích" : "Thêm vào yêu thích"}
                >
                  {u.isFavorite ? (
                    <HeartFilled style={{ color: "#ef4444" }} />
                  ) : (
                    <HeartOutlined />
                  )}
                  <span>{u.favorites}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: 12 }}>
          <button
            onClick={() => dispatch(resetAll())}
            style={{
              padding: "6px 10px",
              border: "1px solid #e5e7eb",
              borderRadius: 6,
              background: "#f8fafc",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div style={{ width: 360, border: "1px solid #e5e7eb", borderRadius: 8 }}>
        <div style={{ padding: 12, fontWeight: 700 }}>Đã yêu thích (top)</div>
        {favoritesOnly.length === 0 ? (
          <div style={{ padding: 12, color: "#64748b" }}>
            Chưa có tài khoản yêu thích
          </div>
        ) : (
          favoritesOnly.map((u) => (
            <div
              key={u.id}
              style={{
                padding: "10px 12px",
                borderTop: "1px solid #f1f5f9",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{u.userName}</span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <HeartFilled style={{ color: "#ef4444" }} /> {u.favorites}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
