import React from "react";
import { NavLink } from "react-router-dom";
import CardWidget from "./CardWidget";
import "./navBar.css";

const activeClass = ({ isActive }) => (isActive ? "navlink active" : "navlink");

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <NavLink to="/" className="brand">MiTienda</NavLink>
        <nav className="nav">
          <NavLink to="/catalogo" className={activeClass}>Catálogo</NavLink>
          <NavLink to="/categoria/calzado" className={activeClass}>Calzado</NavLink>
          <NavLink to="/categoria/ropa" className={activeClass}>Ropa</NavLink>
        </nav>
      </div>
      <div className="nav-right">
        <CardWidget />
      </div>
    </header>
  );
}