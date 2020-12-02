import React from "react";
import { Link } from "react-router-dom";

import { Container, Box } from "./styles";

const Login = () => {
  const instituicoes = [
    { id: 1, nome: "Instituição 1" },
    { id: 2, nome: "Instituição 2" },
    { id: 2, nome: "Instituição 3" },
  ];
  return (
    <Container>
      <Box>
        <label>Login</label>
        <select placeholder="Instituição...">
          {instituicoes.map((instituicao) => (
            <option value={instituicao.id}>{instituicao.nome}</option>
          ))}
        </select>
        <input type="text" placeholder="Login..." />
        <input type="password" placeholder="Senha..." />

        <Link to="/configuracao" style={{ textDecoration: "none" }}>
          <button>ENTRAR</button>
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
