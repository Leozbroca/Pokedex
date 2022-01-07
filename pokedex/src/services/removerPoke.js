export const removerPokedex = (pokemon, pokedex, setPokedex) => {
    const index = pokedex.findIndex((i) => i.name === pokemon.name);

        if(pokedex[index] !== -1){
            pokedex.splice(index, 1)
        }
        localStorage.setItem('pokedex', JSON.stringify(pokedex))
        setPokedex(JSON.parse(localStorage.getItem('pokedex')))
}