import React from "react";
import { FiSearch } from "react-icons/fi";

import {
  Container,
  Header,
  LogoUnoesc,
  TituloHeader,
  PesquisaContainer,
  LoginContaienr,
  Content,
  Categoria,
  PesquisaCategoria,
  CategoriaItem,
  IconeSearch,
} from "./styles";

import logoUnoesc from "../../assets/unoescLogo.jpg";

const Dashboard = () => {
  const categorias = [
    { id: 1, descricao: "Ciencias" },
    { id: 2, descricao: "Ciencias" },
    { id: 3, descricao: "Ciencias" },
    { id: 4, descricao: "Ciencias" },
    { id: 5, descricao: "Ciencias" },
  ];
  return (
    <Container>
      <Header>
        <LogoUnoesc src={logoUnoesc} />
        <TituloHeader>MUSEU UNOESC</TituloHeader>

        <PesquisaContainer />
        <LoginContaienr>Login</LoginContaienr>
      </Header>
      <Content>
        <Categoria>
          <PesquisaCategoria>
            Categoria
            <IconeSearch>
              <FiSearch size={20} />
            </IconeSearch>
          </PesquisaCategoria>

          {categorias.map((e) => (
            <CategoriaItem key={e.id}>{e.descricao}</CategoriaItem>
          ))}
        </Categoria>
      </Content>
    </Container>
  );
};

export default Dashboard;
