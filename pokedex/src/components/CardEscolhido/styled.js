import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #e3e3e3;
  border-radius: 15px;
  width: 12.4rem;
  height: 16.8rem;
  margin: 0px 20px 40px;
  font-family: "Zen Dots", cursive;
  box-shadow: 0px 0px 8px 8px #d9d9d9;

  div {
    cursor: pointer;

    p {
      text-align: center;
    }
  }

  button {
    width: 6rem;
    border: none;
    border-radius: 8px;
    padding: 0.6rem;
    width: 150px;
    text-align: center;
    margin-top: 20px;
  }
`;

export const CardImg = styled.img`
  width: 8rem;
  height: 8rem;
  filter: grayscale(100%);
`;

export const Nome = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 100%;
  padding-bottom: 10px;
`;

export const DivImagem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const IconPokebola = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  background-size: contain;
  border-radius: 10px;
  padding-left: 10px;
  margin-top: -10px;
  margin-left: -30px;
  filter: grayscale(30%);
`;

export const Id = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 10.4rem;
  margin-top: -20px;

  p {
    font-size: 0.8rem;
    color: rgb(164, 164, 164);
    font-weight: 400;
  }
`;

export const TypesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 100%;

  div {
    display: flex;
  }
`;

export const TypesRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const TypeImg = styled.img`
  filter: grayscale(100%);
`;
