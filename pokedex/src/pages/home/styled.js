import styled from "styled-components";

export const ListaPoke = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 2rem 4rem;

  @media (max-width: 800px) {
    margin-top: 2rem;
    grid-template-columns: 1fr;
    align-content: center;
    margin-left: 8vw;
  }
`;

export const DivPaginacao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 800px) {
    margin-top: 4rem;
  }
`;

export const MainDiv = styled.div``;
