export const adicionarPokedex = (
  pokemon,
  setPokedex,
  setOpen,
  setPokeSnack,
  setOpenRelease
) => {
  let pokedexLocal = JSON.parse(localStorage.getItem("pokedex"));

  if (!pokedexLocal) {
    pokedexLocal = [];
    localStorage.setItem("pokedex", JSON.stringify([...pokedexLocal, pokemon]));
  } else {
    const pokemonExists = pokedexLocal.find((p) => p.name === pokemon.name);
    if (pokemonExists) {
      return;
    }

    localStorage.setItem("pokedex", JSON.stringify([...pokedexLocal, pokemon]));
    setPokedex(JSON.parse(localStorage.getItem("pokedex")));
    setPokeSnack(pokemon.name);
    setOpenRelease(false);
    setOpen(true);
  }
};
