import { React } from 'react'
import { CustomHeader, LogoBackground, Menu, ButtonHeader } from './styled'
//import GlobalStyle from '../../constants/GlobalStyle'
import logo from '../../assets/Logo.png'
import { goToPokedex, goToHome, goToDetalhes } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'



const Header = () => {
    let navigate = useNavigate()

    return(
        <CustomHeader>
            <LogoBackground src={logo}/>
            <Menu>
                <ButtonHeader onClick={() => goToHome(navigate)}>Home</ButtonHeader>
                <ButtonHeader onClick={() => goToPokedex(navigate)}>Pokedex</ButtonHeader>
            </Menu>
        </CustomHeader>
    )
}

export default Header