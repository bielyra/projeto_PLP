import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/cadastro">About</Link>
          </li>
          <li>
          
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;