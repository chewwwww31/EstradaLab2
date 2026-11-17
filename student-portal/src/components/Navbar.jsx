import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end className="navbar__link">Home</NavLink>
      <NavLink to="/students" className="navbar__link">Students</NavLink>
      <NavLink to="/courses" className="navbar__link">Courses</NavLink>
      <NavLink to="/about" className="navbar__link">About</NavLink>
    </nav>
  );
}
