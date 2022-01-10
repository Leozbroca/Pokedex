import styled from "styled-components";
import { typeColor } from "../../constants/typeColor";

export const CardPokemon = styled.div`
  background: ${(props) => typeColor[props.type]};
  display: flex;
  flex-direction: column;
  height: 44vh;

  img {
    align-self: center;
    width: 24%;

    @media (max-width: 800px) {
      width: 60%;
      padding-top: 1rem;
    }
  }

  h1 {
    align-self: center;

    @media (max-width: 800px) {
      color: #ffffff;
    }
  }

  h4 {
    align-self: flex-end;
    margin-right: 4rem;
    cursor: pointer;
    color: #ffffff;

    @media (max-width: 800px) {
      margin-right: 2rem;
    }
  }
`;

export const TypeButton = styled.div`
  background: ${(props) => typeColor[props.type]};
  border-radius: 12px;
  width: 9rem;
  height: 2.2rem;
  margin-right: 0.5rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  p {
    color: #ffffff;
  }

  @media (max-width: 800px) {
    padding: 0 1rem;
  }
`;

export const StatsArea = styled.div`
  display: grid;
  grid-template-columns: 24% 10% 66%;
  grid-gap: 0.1rem;
  width: 40rem;
  align-content: end;
  p {
    margin: 0.6rem 0.5rem;
  }
`;

export const StatsItem = styled.div`
  width: 60%;
  background: #f0f0f0;
  height: 0.6rem;
  position: relative;
  top: 0.8rem;
  border-radius: 0.5rem;

  :after {
    content: "";
    height: 0.6rem;
    width: ${(props) => props.baseStat + "%"};
    background: ${(props) => typeColor[props.type]};
    position: absolute;
    border-radius: 0.5rem;
  }

  @media (max-width: 800px) {
    width: 44%;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  div {
    h1 {
      font-size: 1.4rem;
      font-weight: 400;
      text-align: center;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TypesContainer = styled.div`
  margin-right: 50rem;
  div {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 800px) {
    margin: 1rem 0 2rem 1rem;
  }
`;
export const MovesContainer = styled.div`
  margin-right: 50rem;

  @media (max-width: 800px) {
    margin-left: 1rem;
    margin-right: 0;
  }
`;

export const StatsContainer = styled.div`
  position: absolute;
  left: 62vw;

  @media (max-width: 800px) {
    left: 0;
    position: static;
  }
`;
