import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <h2>404 — Página no encontrada</h2>
      <p className="text-muted"> La ruta solicitada no existe.</p>
      <Link to="/" className="btn">Ir al inicio</Link>
    </section>
  );
}