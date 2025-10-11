import { useState } from "react";
import { Link } from "react-router-dom";
import CardWidget from "./CardWidget";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const cerrarMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Mi E-Commerce</h2>
      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {open && <div className="overlay" onClick={cerrarMenu}></div>}
      <ul className={`navbar-links ${open ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={cerrarMenu}>Home</Link>
        </li>
        <li>
          <Link to="/catalog" onClick={cerrarMenu}>Catálogo Principal</Link>
        </li>
        <li>
          <Link to="/filter-catalog" onClick={cerrarMenu}>Catálogo con Filtros</Link>
        </li>
      </ul>
      <CardWidget />
    </nav>
  );
};

export default NavBar;