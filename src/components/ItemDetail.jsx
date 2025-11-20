import React from "react";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail({ product }) {
  const { isInCart, addItem } = useCart();
  const already = isInCart(product.id);

  const handleAdd = (qty) => {
    addItem(product, qty);
  };

  return (
    <article className="item-detail">
      <div className="detail-media">
        <img
          src={product.image || "/placeholder.png"}
          alt={product.title}
          className="detail-image"
        />
      </div>

      <div className="detail-info">
        <h2 className="detail-title">{product.title}</h2>
        <p className="detail-desc">{product.description}</p>
        <p className="detail-price">${product.price}</p>
        <p className="detail-stock">Stock: {product.stock ?? '—'}</p>

        {!already ? (
          <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
        ) : (
          <Link className="btn-go-cart" to="/cart">
            Ir al carrito
          </Link>
        )}
      </div>
    </article>
  );
}
