import { React } from 'react'
import { useRequestData } from '../../hooks/useRequestData';

const HomePage = () => {
    const [pokemons, isLoading, error] = useRequestData([])

    const pokemonsList = pokemons?.map((pokemon) => {
        return (
            <div key={pokemon.id}>
                <img src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} alt={pokemon.name}/>
                {pokemon.name}
            </div>
        )
    })
    return(
        <div>
        {pokemonsList}
        </div>
    )
}

export default HomePage