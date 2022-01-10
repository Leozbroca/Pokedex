import { React, useEffect, useContext, useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import CardEscolhido from "../../components/CardEscolhido/CardEscolhido";
import { ListaPoke, DivPaginacao, MainDiv } from "./styled";
import GlobalStateContext from "../../contexts/GlobalContextState";
import { adicionarPokedex } from "../../services/adicionarPoke";
import { removerPokedex } from "../../services/removerPoke";
import { removerPokedexfromHome } from "../../services/removerPokeFromHome";
import PaginationOutlined from "../../components/Paginacao/Paginacao";
import CustomizedSnackbars from "../../constants/Alerts";
import CustomizedSnackbars2 from "../../constants/Alerts2";
import Header from "../../components/header/Header";

const HomePage = () => {
  const { pokedex, paginaPoke, setOpenRelease, openRelease, open } =
    useContext(GlobalStateContext);
  const [pokemons] = useRequestData(`?offset=${paginaPoke}&limit=30`);

  useEffect(() => {}, [pokedex]);

  const pokemonsList =
    pokedex &&
    pokemons &&
    pokemons.results.map((pokemon) => {
      let pokemonExists = pokedex.find((p) => p.name === pokemon.name);
      if (pokemonExists) {
        return (
          <CardEscolhido
            key={pokemon.name}
            name={pokemon.name}
            pokemon={pokemon}
            removerPokedexfromHome={removerPokedexfromHome}
          />
        );
      } else {
        return (
          <CardPokemon
            key={pokemon.name}
            name={pokemon.name}
            pokemon={pokemon}
            adicionarPokedex={adicionarPokedex}
          />
        );
      }
    });

  return (
    <MainDiv>
      <Header />
      <DivPaginacao>{PaginationOutlined()}</DivPaginacao>
      <ListaPoke>{pokemonsList}</ListaPoke>
      {CustomizedSnackbars()}
      {CustomizedSnackbars2()}
    </MainDiv>
  );
};

export default HomePage;
