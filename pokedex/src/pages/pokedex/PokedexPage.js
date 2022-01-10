
import { React, useEffect, useContext } from 'react'
import CardPokedex from '../../components/CardPokedex/CardPokedex'
import { ListaPoke } from './styled';
import GlobalStateContext from '../../contexts/GlobalContextState';
import { removerPokedex } from '../../services/removerPoke';
import {ImgOpenBall, PokedexDiv} from './styled'
import openBall from '../../assets/openBall.jpg'
import { Typography } from '@mui/material'
import Header from '../../components/header/Header';
import CustomizedSnackbars from '../../constants/Alerts'
import CustomizedSnackbars2 from '../../constants/Alerts2'


const PokedexPage = () => {
  const { pokedex, setOpen, open, openRelease } =
    useContext(GlobalStateContext);

  useEffect(() => {}, [pokedex]);

  return (
    <div>
      <Header />
      <ListaPoke>
        {!pokedex || pokedex.length === 0 ? (
          <PokedexDiv>
            <ImgOpenBall src={openBall}></ImgOpenBall>
            <Typography variant={"h4"} align={"center"}>
              Empty pokedex
            </Typography>
          </PokedexDiv>
        ) : (
          pokedex.map((pokemon) => {
            return (
              <CardPokedex
                key={pokemon.name}
                name={pokemon.name}
                pokemon={pokemon}
                removerPokedex={removerPokedex}
              />
            );
          })
        )}
      </ListaPoke>
      {CustomizedSnackbars()}
      {CustomizedSnackbars2()}
    </div>
  );
};

export default PokedexPage;
