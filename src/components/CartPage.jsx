// ...existing code...
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cart,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
    increaseItem,
    decreaseItem,
  } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <section className="cart-empty">
        <h2>Carrito vacío</h2>
        <Link to="/catalogo" className="btn primary home-cta">Volver al catálogo</Link>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <ul className="cart-list">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image || "/placeholder.png"} alt={item.title} className="cart-thumb" />
            <div className="cart-item-info">
              <strong>{item.title}</strong>
              <div className="text-muted">{item.quantity} x ${item.price.toFixed(2)}</div>
              <div style={{display: "flex", gap: 8, marginTop: 8, alignItems: "center"}}>
                <button
                  type="button"
                  aria-label={`Disminuir cantidad de ${item.title}`}
                  className="btn small ghost"
                  onClick={() => decreaseItem(item.id)}
                >−</button>
                <span aria-live="polite" style={{minWidth:24,textAlign:"center"}}>{item.quantity}</span>
                <button
                  type="button"
                  aria-label={`Aumentar cantidad de ${item.title}`}
                  className="btn small ghost"
                  onClick={() => increaseItem(item.id)}
                >+</button>
                <button
                  type="button"
                  className="btn ghost"
                  onClick={() => removeItem(item.id)}
                  style={{marginLeft:12}}
                >Eliminar</button>
              </div>
            </div>
            <div style={{marginLeft:"auto", textAlign:"right"}}>
              <div>Subtotal</div>
              <div style={{fontWeight:800}}>${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <p>Total artículos: {totalItems}</p>
        <p style={{fontWeight:800}}>Total: ${totalPrice.toFixed(2)}</p>
        <div style={{display:"flex",gap:12,marginTop:12}}>
          <button className="btn ghost" onClick={clearCart}>Vaciar carrito</button>
          <Link to="/checkout" className="btn primary">Ir a checkout</Link>
        </div>
      </div>
    </section>
  );
}