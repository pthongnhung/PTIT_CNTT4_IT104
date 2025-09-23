import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  AppstoreOutlined,
  UserOutlined,
  DatabaseOutlined,
  BarChartOutlined,
  FileTextOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { toggle } from "../../store/slices/menuSlice";

const items = [
  { key: "dashboard", icon: <AppstoreOutlined />, label: "Bảng điều khiển" },
  { key: "account", icon: <UserOutlined />, label: "Tài khoản" },
  { key: "asset", icon: <DatabaseOutlined />, label: "Tài sản" },
  { key: "stats", icon: <BarChartOutlined />, label: "Thống kê" },
  { key: "docs", icon: <FileTextOutlined />, label: "Tài liệu" },
];

export default function SidebarMenu() {
  const dispatch = useDispatch();
  const collapsed = useSelector((s:any) => s.menu.collapsed);

  const width = collapsed ? 56 : 220;
  const bg = "#0b1e3a";
  const fg = "#e8f0ff";

  return (
    <div
      style={{
        height: "100vh",
        width,
        background: bg,
        color: fg,
        padding: 8,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {items.map(({ key, icon, label }) => (
        <div
          key={key}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 12px",
            borderRadius: 6,
            cursor: "pointer",
            background: "#112349",
          }}
        >
          <span style={{ fontSize: 16 }}>{icon}</span>
          {!collapsed && <span style={{ fontWeight: 600 }}>{label}</span>}
        </div>
      ))}

      <div style={{ flex: 1 }} />

      <div
        onClick={() => dispatch(toggle())}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 12px",
          borderRadius: 6,
          cursor: "pointer",
          background: "#112349",
          userSelect: "none",
        }}
      >
        <span style={{ fontSize: 16 }}>
          {collapsed ? <RightOutlined /> : <LeftOutlined />}
        </span>
        {!collapsed && <span style={{ fontWeight: 600 }}>Thu gọn</span>}
      </div>
    </div>
  );
}
