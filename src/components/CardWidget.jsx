import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CardWidget.css";

export default function CardWidget() {
  const { totalItems } = useCart();
  return (
    <Link to="/cart" className="cart-widget" aria-label="Ir al carrito">
      <span className="cart-icon">🛒</span>
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </Link>
  );
}