import { useState } from "react";
import CardWidget from "./CardWidget";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  // Cierra el menú si se hace click fuera
  const cerrarMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Mi E-Commerce</h2>

      {/* Botón Hamburguesa - para mobile */}
      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Overlay para cerrar el menú al tocar fuera */}
      {open && <div className="overlay" onClick={cerrarMenu}></div>}

      <ul className={`navbar-links ${open ? "active" : ""}`}>
        <li><a href="#" >Inicio</a></li>
        <li><a href="#" >Productos</a></li>
        <li><a href="#" >Contacto</a></li>
      </ul>

      <CardWidget />
    </nav>
  );
};

export default NavBar;
