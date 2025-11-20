import React, { useState } from "react";

export default function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [count, setCount] = useState(Math.max(1, initial));

  const inc = () => setCount(c => Math.min(c + 1, stock));
  const dec = () => setCount(c => Math.max(c - 1, 1));

  return (
    <div className="item-count">
      <div className="counter">
        <button type="button" onClick={dec} aria-label="disminuir">−</button>
        <span aria-live="polite">{count}</span>
        <button type="button" onClick={inc} aria-label="aumentar">+</button>
      </div>
      <button className="btn primary" type="button" onClick={() => onAdd(count)} disabled={stock <= 0}>Agregar</button>
    </div>
  );
}