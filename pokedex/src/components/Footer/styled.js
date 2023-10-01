import styled from "styled-components";

export const CustomFooter = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #fbab47;
  /* text-align: center; */
  display: absolute;
  bottom:0;
  right:0;
  left:0;

  

  p {
    padding-left: 50px;
    padding-top:15px;
    text-decoration:none;
    letter-spacing:1px;
    -moz-user-select: -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;

   @media (max-width: 300px) {
   font-size:10px;
  }
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 480px)  {
  button{
    width: 4.8rem;
    height: 2rem;
  }
}

`;