import { React, useEffect, useContext, useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import CardEscolhido from "../../components/CardEscolhido/CardEscolhido";
import { ListaPoke, DivPaginacao, MainDiv } from "./styled";
import GlobalStateContext from "../../contexts/GlobalContextState";
import { adicionarPokedex } from "../../services/adicionarPoke";
import { removerPokedex } from "../../services/removerPoke";
import PaginationOutlined from "../../components/Paginacao/Paginacao";
import CustomizedSnackbars from "../../constants/Alerts";

const HomePage = () => {
    const { pokedex, paginaPoke, open, setOpen} = useContext(GlobalStateContext);
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
            removerPokedex={removerPokedex}
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

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    
  return (
    <MainDiv>
      <DivPaginacao>
          {PaginationOutlined()}
      </DivPaginacao>
      <ListaPoke>{pokemonsList}</ListaPoke>
        {CustomizedSnackbars()}
    </MainDiv>
  );
};

export default HomePage;
