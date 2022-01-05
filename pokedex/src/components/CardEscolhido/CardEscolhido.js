import React, { useEffect, useState, useContext} from "react"
import axios from 'axios';
import BASE_URL from "../../constants/baseURI";
import { Card, CardImg, IconPokebola, Nome} from "./styled";
import GlobalStateContext from "../../contexts/GlobalContextState";
import pokebola from '../../assets/pokebola.png'
import pokebola2 from '../../assets/pokebola2.png'

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
            <Nome>{name}<IconPokebola src={pokebola2}/></Nome>
            <CardImg src={fotoPokemon}></CardImg>
            <button onClick={() => removerPokedex(pokemon, pokedex, setPokedex)}>Remover</button>
            <button>Ver detalhes</button>
        </Card>
    )
    
}