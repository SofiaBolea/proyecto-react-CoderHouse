import React, { useState } from "react";
import ItemListContainer from "./ItemListContainer";

export default function MainCatalogPage() {
  const [search, setSearch] = useState("");

  return (
    <section className="catalog-page">
      <h2>Catálogo completo</h2>

      <div className="catalog-controls" style={{ marginBottom: 12 }}>
        <input
          className="search-input"
          type="search"
          placeholder="Buscar producto por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar productos"
          style={{
            width: "100%",
            maxWidth: 420,
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid rgba(0,0,0,0.06)",
            background: "white"
          }}
        />
      </div>

      <ItemListContainer searchTerm={search} />
    </section>
  );
}