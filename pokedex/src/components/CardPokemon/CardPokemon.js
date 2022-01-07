import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import BASE_URL from "../../constants/baseURI";
import { Card, CardImg } from "./styled";
import GlobalStateContext from "../../contexts/GlobalContextState";
import { goToDetalhes } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import Loading from '../../constants/Loading'

export default function CardPokemon({ name, pokemon, adicionarPokedex }) {
  const navigate = useNavigate();
  const [fotoPokemon, setFotoPokemon] = useState();
  const { setPokedex, setOpen, setPokeSnack} = useContext(GlobalStateContext);

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
        {!fotoPokemon ? <Loading/> : 
        <div>
            <div onClick={() => goToDetalhes(navigate, name)}>
                <CardImg src={fotoPokemon}/>
                <p>{name}</p>
            </div>
            <button onClick={() => adicionarPokedex(pokemon, setPokedex, setOpen, setPokeSnack)}>
                Adicionar a pokedex
            </button>
        </div>}
    </Card>
  );
}
