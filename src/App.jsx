
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import HomePage from "./components/HomePage";
import MainCatalogPage from "./components/MainCatalogPage";
import FilterCatalogPage from "./components/FilterCatalogPage";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartPage from "./components/CartPage";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";
import "./App.css";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<MainCatalogPage />} />
          <Route path="/categoria/:categoryId" element={<FilterCatalogPage />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}