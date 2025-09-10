import React from "react";
import { Link, Outlet } from "react-router-dom";

// dữ liệu demo
const TEAMS = [
  { id: "arsenal", name: "Arsenal" },
  { id: "barca", name: "Barcelona" },
  { id: "milan", name: "AC Milan" },
];

export default function Teams() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 24 }}>
      <aside>
        <h3>Teams</h3>
        <ul>
          {TEAMS.map((t) => (
            <li key={t.id}>
              <Link to={t.id}>{t.name}</Link>
            </li>
          ))}
        </ul>
        <p>
          <Link to="">(Xem trang giới thiệu teams)</Link>
        </p>
      </aside>

      <main>
        {/* Nơi render TeamsIndex hoặc Team */}
        <Outlet />
      </main>
    </div>
  );
}
