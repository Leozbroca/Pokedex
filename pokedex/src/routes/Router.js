import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DetalhesPage from "../pages/detalhes/DetalhesPage";
import ErrorPage from "../pages/error/ErrorPage";
import HomePage from "../pages/home/HomePage";
import PokedexPage from "../pages/pokedex/PokedexPage";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/pokedex" element={<PokedexPage />} />
      <Route exact path="/detalhes/:name" element={<DetalhesPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
