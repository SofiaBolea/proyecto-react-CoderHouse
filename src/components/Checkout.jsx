import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Checkout() {
  const { cart, clearCart, totalPrice } = useCart();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [orderId, setOrderId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Nombre requerido";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Email inválido";
    if (!/^\+?\d{7,15}$/.test(form.phone)) e.phone = "Teléfono inválido";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (key) => (ev) => setForm(prev => ({ ...prev, [key]: ev.target.value }));

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate() || cart.length === 0) return;
    setSubmitting(true);
    const order = {
      buyer: form,
      items: cart,
      total: totalPrice,
      createdAt: serverTimestamp()
    };
    try {
      const colRef = collection(db, "orders");
      const docRef = await addDoc(colRef, order);
      setOrderId(docRef.id);
      clearCart();
      setTimeout(() => navigate("/"), 4000);
    } catch {
      // En entorno real mostrar mensaje al usuario
    } finally {
      setSubmitting(false);
    }
  };

  if (orderId) return <div className="order-success">Compra realizada. ID: <strong>{orderId}</strong></div>;

  return (
    <section className="checkout">
      <form onSubmit={handleSubmit} noValidate className="checkout-form">
        <label>
          Nombre
          <input value={form.name} onChange={handleChange("name")} />
          {errors.name && <small className="error">{errors.name}</small>}
        </label>
        <label>
          Email
          <input value={form.email} onChange={handleChange("email")} />
          {errors.email && <small className="error">{errors.email}</small>}
        </label>
        <label>
          Teléfono
          <input value={form.phone} onChange={handleChange("phone")} />
          {errors.phone && <small className="error">{errors.phone}</small>}
        </label>
        <div className="checkout-actions">
          <button type="submit" className="btn primary">Generar orden</button>
        </div>
      </form>
    </section>
  );
}