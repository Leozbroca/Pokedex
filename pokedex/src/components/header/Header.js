import { React } from "react";
import { CustomHeader, LogoBackground, Menu, ButtonHeader } from "./styled";
import logo from "../../assets/Logo.png";
import { goToPokedex, goToHome } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  return (
    <>
      {window.location.pathname === "/" ||
      window.location.pathname === "/pokedex" ? (
        <CustomHeader>
          <LogoBackground onClick={() => goToHome(navigate)} src={logo} />
          <Menu>
            <ButtonHeader onClick={() => goToHome(navigate)}>Home</ButtonHeader>
            <ButtonHeader onClick={() => goToPokedex(navigate)}>
              Pokedex
            </ButtonHeader>
          </Menu>
        </CustomHeader>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
