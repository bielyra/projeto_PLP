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
          <a href ="https://www.unipe.edu.br/aluno/" target="_blank" rel="noopener noreferrer">CU</a>
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