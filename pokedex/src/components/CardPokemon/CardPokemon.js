import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import BASE_URL from "../../constants/baseURI";
import {
  Card,
  CardImg,
  Nome,
  DivImagem,
  Id,
  TypesContainer,
  TypesRow,
} from "./styled";
import GlobalStateContext from "../../contexts/GlobalContextState";
import { goToDetalhes } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import Loading from "../../constants/Loading";

export default function CardPokemon({ name, pokemon, adicionarPokedex }) {
  const navigate = useNavigate();
  const [fotoPokemon, setFotoPokemon] = useState();
  const [id, setId] = useState(0);
  const [types, setTypes] = useState([]);
  const { setPokedex, setOpen, setPokeSnack, setOpenRelease } =
    useContext(GlobalStateContext);

  const pegarInformacoesPokemon = async () => {
    try {
      const res = await axios.get(pokemon.url);
      setFotoPokemon(res.data.sprites.other["official-artwork"].front_default);
      setId(res.data.id);
      setTypes(res.data.types);
    } catch (err) {
      console.log(err);
    }
  };

  const pokemonTypes =
    pokemon &&
    types.map((types) => {
      return (
        <TypesRow key={types.type.name} type={types.type.name}>
          <img src={`/icons/${types.type.name}.svg`} alt="imagem" />
          {console.log(types.type.name)}
        </TypesRow>
      );
    });

  useEffect(() => {
    pegarInformacoesPokemon();
  }, []);

  return (
    <Card>
      {!fotoPokemon ? (
        <Loading />
      ) : (
        <div>
          <Id>
            <p>{id < 100 ? `#0${id}` : `#${id}`}</p>
          </Id>
          <DivImagem onClick={() => goToDetalhes(navigate, name)}>
            <CardImg src={fotoPokemon} />
            <Nome>{name}</Nome>
          </DivImagem>
          <TypesContainer>
            <TypesRow>{pokemonTypes}</TypesRow>
          </TypesContainer>
          <button
            onClick={() =>
              adicionarPokedex(
                pokemon,
                setPokedex,
                setOpen,
                setPokeSnack,
                setOpenRelease
              )
            }
          >
            Add to Pokedex
          </button>
        </div>
      )}
    </Card>
  );
}
