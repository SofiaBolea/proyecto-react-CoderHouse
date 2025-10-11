import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="container home-page">
    <h1 className="home-title">Bienvenido a Mi E-Commerce</h1>
    <p className="home-desc">
      Descubre productos exclusivos, navega por categorías y encuentra lo que buscas con facilidad.
    </p>
    <div className="home-actions">
      <Link to="/catalog" className="home-btn">
        Ver Catálogo Principal
      </Link>
      <Link to="/filter-catalog" className="home-btn">
        Catálogo con Filtros
      </Link>
    </div>
  </div>
);

export default HomePage;