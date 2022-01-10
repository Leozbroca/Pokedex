import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../constants/baseURI";
import GlobalContextState from "./GlobalContextState";
import useRequestData from "../hooks/useRequestData";

const GlobalState = (props) => {
  const [pokedex, setPokedex] = useState(
    JSON.parse(localStorage.getItem("pokedex"))
  );
  const [paginaPoke, setPaginaPoke] = useState(0);
  const [pagina, setPagina] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [openRelease, setOpenRelease] = React.useState(false);
  const [pokeSnack, setPokeSnack] = useState("");
  const [pokeSnackRelease, setPokeSnackRelease] = useState("");

  if (!pokedex) {
    localStorage.setItem("pokedex", JSON.stringify([]));
    setPokedex(JSON.parse(localStorage.getItem("pokedex")));
  }

  return (
    <GlobalContextState.Provider
      value={{
        pokedex,
        setPokedex,
        paginaPoke,
        setPaginaPoke,
        pagina,
        setPagina,
        open,
        setOpen,
        pokeSnack,
        setPokeSnack,
        openRelease,
        setOpenRelease,
        pokeSnackRelease,
        setPokeSnackRelease,
      }}
    >
      {props.children}
    </GlobalContextState.Provider>
  );
};

export default GlobalState;
