import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DetalhesPage from "../pages/detalhes/DetalhesPage";
import ErrorPage from "../pages/error/ErrorPage";
import HomePage from "../pages/home/HomePage";
import PokedexPage from "../pages/pokedex/PokedexPage";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/> 
                <Route exact path="/Pokedex" element={<PokedexPage/>}/> 
                <Route exact path="/Detalhes/:id" element={<DetalhesPage/>}/> 
                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router