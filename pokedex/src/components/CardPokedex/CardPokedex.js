import React, { useEffect, useState, useContext } from "react"
import axios from 'axios';
import BASE_URL from "../../constants/baseURI";
import { Card, CardImg } from "./styled";
import GlobalStateContext from "../../contexts/GlobalContextState";


export default function CardPokemon({name, pokemon, removerPokedex}) {
    const [fotoPokemon, setFotoPokemon] = useState([])
    const {pokedex, setPokedex} = useContext(GlobalStateContext)

    const pegarInformacoesPokemon = async () => {    
        try {
            const res = await axios.get(`${BASE_URL}/${name}`)
            setFotoPokemon(res.data.sprites.other['official-artwork'].front_default)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        pegarInformacoesPokemon()
    }, [])
    
    return (
        <Card>
            <div>{name}</div>
            <CardImg src={fotoPokemon}></CardImg>
            <button onClick={() => removerPokedex(pokemon, pokedex, setPokedex)}>Remover</button>
            <button>Ver detalhes</button>
        </Card>
    )
    
}