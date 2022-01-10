import React from "react";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { goToHome } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import {
  CardPokemon,
  TypeButton,
  StatsArea,
  StatsItem,
  TypesContainer,
  MovesContainer,
  StatsContainer,
  DescriptionContainer,
  DivMaior,
  DivMoves
} from "./styled";

const DetalhesPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [pokemon] = useRequestData(`${params.name}`);
  const pokeType = pokemon && pokemon?.types[0]?.type?.name;

  const pokemonTypes =
    pokemon &&
    pokemon.types.map((pokemon) => {
      return (
        <TypeButton key={pokemon.id} type={pokemon.type.name}>
          <img src={`/icons/${pokemon.type.name}.svg`} alt="imagem" />
          <p>{pokemon.type.name}</p>
        </TypeButton>
      );
    });

  const pokemonMoves =
    pokemon &&
    pokemon.moves.slice(0, 4).map((pokemon) => {
      return <p key={pokemon.id}>- {pokemon.move.name}</p>;
    });

  const pokemonStats =
    pokemon &&
    pokemon.stats.map((pokemon) => {
      return (
        <StatsArea key={pokemon.id}>
          <p>{pokemon.stat.name}</p>
          <p>{pokemon.base_stat}</p>
          <StatsItem
            baseStat={pokemon.base_stat > 100 ? 100 : pokemon.base_stat}
            type={pokeType}
          />
        </StatsArea>
      );
    });

  return (
    <div>
      {pokemon && (
        <DivMaior>
          <CardPokemon type={pokeType}>
            <h4 onClick={() => goToHome(navigate)}>Voltar</h4>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
            <h1>{pokemon.name}</h1>
          </CardPokemon>
          <DescriptionContainer>
            <DivMoves>
              <TypesContainer>
                {pokemon.types.length > 1 ? <h1>Types</h1> : <h1>Type</h1>}
                <div>{pokemonTypes}</div>
              </TypesContainer>
              <MovesContainer>
                <h1>Moves</h1>
                <div>{pokemonMoves}</div>
              </MovesContainer>
            </DivMoves>
            <StatsContainer>
              <h1>Stats</h1>
              <div>{pokemonStats}</div>
            </StatsContainer>
          </DescriptionContainer>
        </DivMaior>
      )}
    </div>
  );
};

export default DetalhesPage;
