import React from "react";
import { Link } from "react-router-dom";

export default function ItemList({ items }) {
  if (!items || items.length === 0) return <p className="text-muted">No hay productos.</p>;
  return (
    <ul className="item-list">
      {items.map(item => (
        <li key={item.id} className="item-card">
          <img src={item.image || "/placeholder.png"} alt={item.title} className="item-image" />
          <div className="item-info">
            <h3 className="item-title">{item.title}</h3>
            <p className="item-price">${item.price}</p>
            <div className="item-actions">
              <Link to={`/detalle/${item.id}`} className="btn primary">Ver detalle</Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}