import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import BASE_URL from "../../constants/baseURI";
import { Card, CardImg } from "./styled";
import GlobalStateContext from "../../contexts/GlobalContextState";
import { goToDetalhes } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";

export default function CardPokemon({ name, pokemon, adicionarPokedex }) {
  const navigate = useNavigate();
  const [fotoPokemon, setFotoPokemon] = useState([]);
  const { setPokedex } = useContext(GlobalStateContext);

  const pegarInformacoesPokemon = async () => {
    try {
      const res = await axios.get(`${BASE_URL}${name}`);
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
      <button onClick={() => adicionarPokedex(pokemon, setPokedex)}>
        Adicionar a pokedex
      </button>
    </Card>
  );
}
