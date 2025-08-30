import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/add">Add Habit</Link>
    </nav>
  );
}

export default NavBar;
