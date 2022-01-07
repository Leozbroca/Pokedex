import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #e3e3e3;
  border-radius: 15px;
  width: 12.4rem;
  height: 15.8rem;
  margin: 0px 20px 40px;
  font-family: "Zen Dots", cursive;
  box-shadow: 0px 0px 8px 8px #d9d9d9;

  div {
    cursor: pointer;
    margin-bottom: 0.6rem;
    p {
      text-align: center;
    }
  }

  button {
    width: 6rem;
    border: none;
    border-radius: 8px;
    padding: 0.6rem;
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
`;

export const IconPokebola = styled.img`
  width: 30px;
  height: 30px;
  background-size: contain;
  border-radius: 10px;
  padding-left: 10px;
`;
