import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import BASE_URL from "../../constants/baseURI";
import {
  Card,
  CardImg,
  IconPokebola,
  Nome,
  DivImagem,
  Id,
  TypesContainer,
  TypesRow,
  TypeImg,
} from "./styled";
import GlobalStateContext from "../../contexts/GlobalContextState";
import pokebola from "../../assets/pokebola.png";
import pokebola2 from "../../assets/pokebola2.png";
import { goToDetalhes } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import Loading from "../../constants/Loading";

export default function CardPokemon({ name, pokemon, removerPokedexfromHome }) {
  const navigate = useNavigate();
  const [fotoPokemon, setFotoPokemon] = useState();
  const [id, setId] = useState(0);
  const [types, setTypes] = useState([]);
  const {
    pokedex,
    setPokedex,
    setOpenRelease,
    setPokeSnackRelease,
    setOpen,
    pokeSnack,
  } = useContext(GlobalStateContext);

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
          <TypeImg src={`/icons/${types.type.name}.svg`} alt="imagem" />
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
          <IconPokebola src={pokebola2} />
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
              removerPokedexfromHome(
                pokemon,
                pokedex,
                setPokedex,
                setPokeSnackRelease,
                setOpenRelease,
                setOpen,
                pokeSnack
              )
            }
          >
            Release
          </button>
        </div>
      )}
    </Card>
  );
}
