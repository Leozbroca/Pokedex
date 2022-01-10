export const removerPokedexfromHome = (
  pokemon,
  pokedex,
  setPokedex,
  setPokeSnackRelease,
  setOpenRelease,
  setOpen,
  pokeSnack
) => {
  const index = pokedex.findIndex((i) => i.name === pokemon.name);

  if (pokedex[index] !== -1) {
    pokedex.splice(index, 1);
  }
  localStorage.setItem("pokedex", JSON.stringify(pokedex));
  setPokedex(JSON.parse(localStorage.getItem("pokedex")));
  setPokeSnackRelease(pokemon.name);
  setOpen(false);
  setOpenRelease(true);
};
