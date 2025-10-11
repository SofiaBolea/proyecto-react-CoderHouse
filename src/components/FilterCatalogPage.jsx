import React, { useState, useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer";

const FilterCatalogPage = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const filterProducts = (products) => {
    if (!search) return products;
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Catálogo con Filtros</h2>
      <div className="category-filters">
        <button
          className={`category-btn${category === "" ? " selected" : ""}`}
          onClick={() => setCategory("")}
        >
          Todas
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn${category === cat ? " selected" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <input
        type="text"
        className="product-search-input"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ItemListContainer
        message={category ? `Categoría: ${category}` : "Todos los productos"}
        category={category}
        filterProducts={filterProducts}
      />
    </div>
  );
};

export default FilterCatalogPage;