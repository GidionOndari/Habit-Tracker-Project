import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Dashboard
      </NavLink>
      <NavLink to="/add" className={({ isActive }) => (isActive ? "active" : "")}>
        Add Habit
      </NavLink>
      <span className="brand">Habit Tracker</span>
    </nav>
  );
}
