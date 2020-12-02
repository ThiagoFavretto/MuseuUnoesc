import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import Instituicao from "./Intituicao";
import Categoria from "./Categoria";
import Local from "./Local";
import Objeto from "./Objeto";
import Usuario from "./Usuario";

import { Container, ContainerMenuLateral, Corpo } from "./styles";

const Configuracao = () => {
  const [Renderizar, setRenderizar] = useState(<Instituicao />);

  const mudarRender = (pagina, id) => {
    setRenderizar(pagina);
  };

  return (
    <Container>
      <ContainerMenuLateral>
        <div>
          <button onClick={() => mudarRender(<Instituicao />)}>
            Instituição
          </button>

          <button onClick={() => mudarRender(<Categoria />)}>Categoria</button>

          <button onClick={() => mudarRender(<Local />)}>Local</button>

          <button onClick={() => mudarRender(<Objeto />)}>Objeto</button>

          <button onClick={() => mudarRender(<Usuario />)}>Usuário</button>
        </div>
      </ContainerMenuLateral>
      <Corpo>{Renderizar}</Corpo>
    </Container>
  );
};

export default Configuracao;
