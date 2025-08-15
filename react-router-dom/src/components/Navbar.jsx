import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |
        <NavLink to="/career">Career</NavLink> |
        <NavLink to="/services">Services</NavLink> |
        <NavLink to="/user/Vaishnavi">Manish's Profile</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
