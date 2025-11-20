import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="home">
      <h1 className="home-title">Bienvenido a MiTienda</h1>
      <p className="home-dec">Proyecto CoderHouse - Entrega Final</p>
      <Link to="/catalogo" className="btn primary home-cta">Ir al catálogo</Link>
    </section>
  );
}