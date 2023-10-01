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
  -moz-user-select: -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;

  h1 {
    padding-right: 50px;
  }

`;


export const LogoBackground = styled.img`
  width: 12rem;
  height: 6.4rem;
  padding-left: 6.6rem;

  @media screen and (min-device-width : 210px) and (max-device-width : 480px)  {
  
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
  .right{
  margin-left:20px;
  @media (max-width: 800px) {
    margin-right:10px;
  }
  @media (max-width: 350px) {
    width:80px;
    font-size:10px;
  }
}
.left{
  @media (max-width: 550px) {
    display:none;
  }
}


`;

export const ButtonHeader = styled.button`

  background: transparent;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  transition: background-color 0.3s ease-in-out;
  position: relative;
  overflow: hidden;


:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  pointer-events: none;
}

:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

:hover:before {
  transform: translateX(0);
}



`;
