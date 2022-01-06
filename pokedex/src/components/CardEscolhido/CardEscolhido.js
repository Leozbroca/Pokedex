import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import BASE_URL from "../../constants/baseURI";
import { Card, CardImg, IconPokebola, Nome } from "./styled";
import GlobalStateContext from "../../contexts/GlobalContextState";
import pokebola from "../../assets/pokebola.png";
import pokebola2 from "../../assets/pokebola2.png";
import { goToDetalhes } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";

export default function CardPokemon({ name, pokemon, removerPokedex }) {
  const navigate = useNavigate();
  const [fotoPokemon, setFotoPokemon] = useState([]);
  const { pokedex, setPokedex } = useContext(GlobalStateContext);

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
        <Nome>{name}<IconPokebola src={pokebola2} /></Nome>
      </div>
      <button onClick={() => removerPokedex(pokemon, pokedex, setPokedex)}>
        Remover
      </button>
    </Card>
  );
}
