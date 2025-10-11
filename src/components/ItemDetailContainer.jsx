import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return (
    <div className="product-detail-fullscreen">
      <div className="product-detail-card">
        Cargando...
      </div>
    </div>
  );

  return (
    <div className="container product-detail-fullscreen">
      <div className="product-detail-card">
        <h2 className="product-detail-title">{product.title}</h2>
        <img className="product-detail-img" src={product.image} alt={product.title} />
        <p className="product-detail-desc">{product.description}</p>
        <p className="product-detail-price">${product.price}</p>
        <div className="product-detail-actions">
          <label htmlFor="qty" style={{ fontWeight: "bold", color: "#6b4f3b" }}>
            Cantidad:
          </label>
          <input
            id="qty"
            type="number"
            min={1}
            className="product-detail-qty"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button className="product-detail-btn">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;