import { NavLink } from "react-router-dom";

export default function Header() {
  const baseStyle: React.CSSProperties = {
    padding: "8px 16px",
    textDecoration: "none",
    fontWeight: "bold",
    color: "#111",
    borderRadius: 4,
  };

  return (
    <nav style={{ marginBottom: 20 }}>
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({
          ...baseStyle,
          backgroundColor: isActive ? "red" : "transparent",
          color: isActive ? "white" : "#111",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/product"
        style={({ isActive }) => ({
          ...baseStyle,
          backgroundColor: isActive ? "red" : "transparent",
          color: isActive ? "white" : "#111",
        })}
      >
        Product
      </NavLink>

      <NavLink
        to="/detail"
        style={({ isActive }) => ({
          ...baseStyle,
          backgroundColor: isActive ? "red" : "transparent",
          color: isActive ? "white" : "#111",
        })}
      >
        Detail
      </NavLink>
    </nav>
  );
}
