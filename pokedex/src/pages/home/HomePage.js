import { React } from 'react'
import useRequestData from '../../hooks/useRequestData';
import BASE_URL from '../../constants/baseURI';
import axios from 'axios';
import CardPokemon from '../../components/CardPokemon/CardPokemon';
import { ListaPoke } from './styled';

const HomePage = () => {
    const pokemons = useRequestData([])
   

    const pokemonsList = pokemons.map((pokemon) => {
        return <CardPokemon key={pokemon.name} name={pokemon.name} pokemon={pokemon} />
    })

    
    
    return(
        <div>
            <ListaPoke> {pokemonsList} </ListaPoke>   
        </div>
    )
}

export default HomePage