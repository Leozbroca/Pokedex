import styled from 'styled-components'

export const Card = styled.section`
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border: 1px solid #e3e3e3;
border-radius: 15px;
width:12.4rem;
height:15.8rem;
margin:0px 20px 40px;
font-family: "Zen Dots", cursive;
box-shadow: 0px 0px 8px 8px #f2f2f2;

div {
    cursor: pointer;

    p{
        text-align: center;
    }
}

button {
    border: none;
    border-radius: 8px;
    padding: 0.6rem;
}
`

export const CardImg = styled.img`
width:8rem;
height:8rem;
`