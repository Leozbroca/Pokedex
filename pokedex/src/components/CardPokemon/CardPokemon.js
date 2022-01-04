import React, { useEffect, useState } from "react"
import axios from 'axios';
import BASE_URL from "../../constants/baseURI";
import { Card, CardImg } from "./styled";

export default function CardPokemon(props) {

    const [fotoPokemon, setFotoPokemon] = useState([])
    const {name, pokemon} = props;
    

    const pegarInformacoesPokemon = async () => {    
        try {
            const res = await axios.get(`${BASE_URL}/${name}`)
            setFotoPokemon(res.data.sprites.versions['generation-v']['black-white'].animated.front_default)
            console.log(res.data)
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
        </Card>
    )
    
}