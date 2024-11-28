import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a href ="https://www.unipe.edu.br/aluno/" target="_blank" rel="noopener noreferrer">Home Page</a>
          </li>
          <li>
            <a href ="https://www.unipe.edu.br/aluno/" target="_blank" rel="noopener noreferrer">Random Animal</a>
          </li>
          <li>
          <a href ="https://www.unipe.edu.br/aluno/" target="_blank" rel="noopener noreferrer">CU</a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;