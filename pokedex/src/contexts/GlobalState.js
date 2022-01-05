import React, { useEffect, useState } from "react"
import axios from "axios";
import BASE_URL from "../constants/baseURI";
import GlobalContextState from './GlobalContextState';
import useRequestData from "../hooks/useRequestData";

const GlobalState = (props) =>{
    const [pokedex, setPokedex] = useState(JSON.parse(localStorage.getItem('pokedex')))
    if(!pokedex){
        localStorage.setItem('pokedex', JSON.stringify([]))
        setPokedex(JSON.parse(localStorage.getItem('pokedex')))
    }

    return(
        <GlobalContextState.Provider value={{pokedex, setPokedex}}>
            {props.children}
        </GlobalContextState.Provider>
    )
}


export default GlobalState;