import { React, useEffect, useContext } from 'react'
import CardPokedex from '../../components/CardPokedex/CardPokedex'
import { ListaPoke } from '../home/styled';
import GlobalStateContext from '../../contexts/GlobalContextState';
import { removerPokedex } from '../../services/removerPoke';

const PokedexPage = () => {
    const {pokedex, setPokedex} = useContext(GlobalStateContext)

    useEffect(() => {

    }, [pokedex])

    
    return(
        <ListaPoke>
            {!pokedex || pokedex.length === 0 ? <p>Nenhum pokemon adicionado na pokedex</p> : pokedex.map((pokemon) => {
        return <CardPokedex key={pokemon.name} name={pokemon.name} pokemon={pokemon} removerPokedex={removerPokedex}/>
        })}
            
        </ListaPoke>
    )
}

export default PokedexPage