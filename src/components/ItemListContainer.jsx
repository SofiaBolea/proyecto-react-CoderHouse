import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ItemListContainer = ({ message, category, filterProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [category]);

  const displayedProducts = filterProducts ? filterProducts(products) : products;

  return (
    <div className="container">
      <h1>{message}</h1>
      <p>Explora nuestra colección exclusiva de productos.</p>
      <div className="product-list-scroll">
        {displayedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;