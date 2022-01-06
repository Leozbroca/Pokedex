import React from "react";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { goToHome } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";

import {
  MainContainer,
  CardPokemon,
  DescriptionContainer,
  TypesMovesContainer
} from './styled';

const DetalhesPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [pokemon] = useRequestData(`${params.name}`);
  const pokeType = pokemon && pokemon?.types[0]?.type?.name

  const pokemonTypes = pokemon &&
    pokemon.types.map((pokemon) => {
      return <p key={pokemon.id}>{pokemon.type.name}</p>;
    });

    const pokemonMoves =
    pokemon &&
    pokemon.moves.slice(0, 3).map((pokemon) => {
      return <p key={pokemon.id}>{pokemon.move.name}</p>;
    });

    const pokemonStats =
    pokemon &&
    pokemon.stats.map((pokemon) => {
      return <div key={pokemon.id}>{pokemon.stat.name}{" "}{pokemon.base_stat}</div>;
    });

  return (
    <MainContainer>
      {pokemon && (
        <div>
        <CardPokemon type={pokeType}>
        <h4 onClick={() => goToHome(navigate)}>X</h4>
        <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
          <h1>{pokemon.name}</h1>
        </CardPokemon>
        <DescriptionContainer>
        <TypesMovesContainer>
          {pokemonTypes}
          {pokemonMoves}
        </TypesMovesContainer>
        <section>
          {pokemonStats}
        </section>
        </DescriptionContainer>
        </div>
      )}
    </MainContainer>
  );
};

export default DetalhesPage;
