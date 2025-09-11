import { NavLink } from "react-router-dom";
import './styles.css'
export default function Navbar() {
  const linkStyle: React.CSSProperties = {
    color: "white",
    padding: "10px 16px",
    textDecoration: "none",
    fontWeight: 600,
    borderRadius: 6,
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            ...linkStyle,
            background: isActive ? "rgba(255,255,255,0.15)" : "transparent",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            ...linkStyle,
            background: isActive ? "rgba(255,255,255,0.15)" : "transparent",
          })}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            ...linkStyle,
            background: isActive ? "rgba(255,255,255,0.15)" : "transparent",
          })}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
