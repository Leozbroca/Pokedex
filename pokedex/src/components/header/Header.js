import { React } from 'react'
import { CustomHeader, LogoBackground, Menu } from './styled'
import GlobalStyle from '../../constants/GlobalStyle'
import logo from '../../assets/Logo.png'



const Header = ({pagina}) => {
    return(
        <CustomHeader>
            <LogoBackground src={logo}/>
            <Menu>
                <p>Home</p>
                <p>Pokedex</p>
            </Menu>
        </CustomHeader>
    )
}

export default Header