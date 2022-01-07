import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Card, CardImg } from "./styled";
import GlobalStateContext from "../../contexts/GlobalContextState";
import { goToDetalhes } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";

export default function CardPokemon({ name, pokemon, removerPokedex }) {
  const navigate = useNavigate();
  const [fotoPokemon, setFotoPokemon] = useState([]);
  const { pokedex, setPokedex } = useContext(GlobalStateContext);

  const pegarInformacoesPokemon = async () => {
    try {
      const res = await axios.get(pokemon.url);
      setFotoPokemon(res.data.sprites.other["official-artwork"].front_default);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    pegarInformacoesPokemon();
  }, []);

  return (
    <Card>
      <div onClick={() => goToDetalhes(navigate, name)}>
        <CardImg src={fotoPokemon} />
        <p>{name}</p>
      </div>
      <button onClick={() => removerPokedex(pokemon, pokedex, setPokedex)}>
        Remover
      </button>
    </Card>
  );
}
