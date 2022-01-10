import styled from "styled-components";

export const CustomHeader = styled.div`
  width: 100%;
  height: 6rem;
  background-color: #fbab47;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px gray;

  h1 {
    padding-right: 50px;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 480px)  {
  button{
    width: 4.8rem;
    height: 2rem;
  }
}

`;


export const LogoBackground = styled.img`
  width: 12rem;
  height: 6.4rem;
  padding-left: 6.6rem;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px)  {
  
  width: 10rem;
  height: 5.2rem;
  padding-left:1.5rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  margin-right: 6.6rem;
  p {
    padding: 50px;
    font-size: 25px;
  }

  @media (max-width: 800px) {
    margin: 1rem 0 2rem;
  }
`;

export const ButtonHeader = styled.button`
  width: 7rem;
  height: 2rem;
  font-size: 1rem;
  margin-left: 20px;
  border: none;
  border-radius: 8px;
  background: #f2f2f2;

  :hover {
    opacity: 0.6;
  }
`;
