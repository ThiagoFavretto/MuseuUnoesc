import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import {
  Header,
  LogoUnoesc,
  TituloHeader,
  PesquisaContainer,
  Login,
  ContainerLogo,
} from "./styles";

import logoUnoesc from "../../assets/unoescLogo.jpg";

const Dashboard = () => {
  return (
    <Header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <ContainerLogo>
          <LogoUnoesc src={logoUnoesc} />
          <TituloHeader>MUSEU UNOESC</TituloHeader>
        </ContainerLogo>
      </Link>
      <PesquisaContainer>
        <input type="text" />
        <span>
          <FiSearch size={20} />
        </span>
      </PesquisaContainer>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <Login>Login</Login>
      </Link>
    </Header>
  );
};

export default Dashboard;
