import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./nav.css";

export default function Layout() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    "nav-link" + (isActive ? " active" : "");

  return (
    <div>
      <nav className="nav">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/product" className={linkClass}>
          Product
        </NavLink>
        <NavLink to="/detail" className={linkClass}>
          Detail
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
