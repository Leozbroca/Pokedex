import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";

const DetalhesPage = () => {
  const params = useParams();
  const pokemon = useRequestData(`pokemon/${params.name}`, []);

//   const pokeType =
//     pokemon.types.map((poke, index) => {
//       return <p key={index}>{poke.type.name}</p>;
//     });

//   const pokeMoves =
//     pokemon.moves.map((poke, index) => {
//       return <p key={index}>{poke.move.name}</p>;
//     });

//   console.log(pokeType);
//   console.log(pokeMoves);

  return (
    <div>
      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.height}</p>
          <p>{pokemon.weight}</p>
          <img
            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
          />
        </div>
      )}
    </div>
  );
};

export default DetalhesPage;
