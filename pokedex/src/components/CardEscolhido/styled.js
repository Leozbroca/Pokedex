import styled from 'styled-components'

export const Card = styled.div`
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border: 1px solid gray;
border-radius: 15px;
width:150px;
height:200px;
margin:0px 20px 40px;
font-family: "Zen Dots", cursive;
`

export const CardImg = styled.img`
width:80px;
height:80px;
filter: grayscale(100%);
`
export const Nome = styled.div`
display:flex;
flex-direction: row;
align-items: center;
`

export const IconPokebola = styled.img`
width:30px;
height:30px;
background-size: contain;
border-radius: 10px;
padding-left:10px;
`