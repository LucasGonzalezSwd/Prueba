// src/components/OrderSelector.js
import React from "react";
import "../styles/OrderSelector.css";

export const OrderSelector = ({ order, onOrderChange }) => {
  return (
    <div className="order-selector">
      <label>Ordenar: </label>
      <select value={order} onChange={onOrderChange}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );
};
