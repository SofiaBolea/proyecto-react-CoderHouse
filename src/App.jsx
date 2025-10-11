import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import HomePage from "./components/HomePage";
import MainCatalogPage from "./components/MainCatalogPage";
import FilterCatalogPage from "./components/FilterCatalogPage";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<MainCatalogPage />} />
        <Route path="/filter-catalog" element={<FilterCatalogPage />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        {/* Ruta 404 */}
        <Route path="*" element={<h2 style={{textAlign: "center"}}>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;