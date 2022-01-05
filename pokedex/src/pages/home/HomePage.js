import { React, useEffect, useState, useContext } from 'react'
import useRequestData from '../../hooks/useRequestData';
import CardPokemon from '../../components/CardPokemon/CardPokemon';
import CardEscolhido from '../../components/CardEscolhido/CardEscolhido';
import { ListaPoke } from './styled';
import GlobalStateContext from '../../contexts/GlobalContextState';
import { adicionarPokedex } from '../../services/adicionarPoke';
import { removerPokedex } from '../../services/removerPoke';

const HomePage = () => {
    const pokemons = useRequestData([])
    const {pokedex, setPokedex} = useContext(GlobalStateContext)

    useEffect(() => {

    }, [pokedex])    

    const pokemonsList = pokedex && pokemons && pokemons.map((pokemon) => {
            let pokemonExists = pokedex.find((p) => p.name === pokemon.name)
            if(pokemonExists){
                return <CardEscolhido key={pokemon.name} name={pokemon.name} pokemon={pokemon} removerPokedex={removerPokedex}/>   
            } else{
                return <CardPokemon key={pokemon.name} name={pokemon.name} pokemon={pokemon} adicionarPokedex={adicionarPokedex}/>
            }     
    })
    
    return(
        <div>
            <ListaPoke> 
                {pokemonsList} 
            </ListaPoke>   
        </div>
    )
}

export default HomePage