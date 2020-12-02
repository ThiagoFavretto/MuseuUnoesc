import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import Popup from "reactjs-popup";

import {
  Container,
  Modal,
  ConteudoModal,
  Cancelar,
  Salvar,
  Cadastro,
  Card,
  Campo,
  Cadastrar,
  Toolbar,
  Listagem,
  ContainerGrid,
  Cabecalho,
  Grid,
} from "./styles";

const Usuario = ({ id }) => {
  const dados = [
    { id: 1, nome: "teste 1", login: "teste 1", papel: 1 },
    { id: 2, nome: "teste 2", login: "login 2", papel: 2 },
    { id: 3, nome: "teste 1", login: "teste 1", papel: 1 },
    { id: 4, nome: "teste 2", login: "login 2", papel: 2 },
    { id: 5, nome: "teste 1", login: "teste 1", papel: 1 },
    { id: 6, nome: "teste 2", login: "login 2", papel: 2 },
    { id: 7, nome: "teste 1", login: "teste 1", papel: 1 },
    { id: 8, nome: "teste 2", login: "login 2", papel: 2 },
    { id: 9, nome: "teste 1", login: "teste 1", papel: 1 },
    { id: 10, nome: "teste 2", login: "login 2", papel: 2 },
  ];
  return (
    <Container>
      <Toolbar>
      <label>Usuários</label>
        <Popup trigger={<Cadastrar> Cadastrar</Cadastrar>} modal>
          {(close) => (
            <Modal>
              <ConteudoModal>
                <Cadastro>
                  <label id="titulo">Usuário</label>
                  <Card>
                    <Campo>
                      <label>Nome: </label>{" "}
                      <input placeholder="Informe nome..." />
                    </Campo>
                    <Campo>
                      <label>Login: </label>{" "}
                      <input placeholder="Informe login..." />
                    </Campo>
                    <Campo>
                      <label id="papel">Papel: </label>
                      <select>
                        <option value="1">Funcionário</option>
                        <option value="2">Administrador</option>
                      </select>
                    </Campo>
                    <Campo>
                      <label>Senha: </label>
                      <input
                        type="password"
                        placeholder="Informe uma senha..."
                      />
                    </Campo>
                    <Campo>
                      <label>Confirmar Senha: </label>
                      <input
                        type="password"
                        placeholder="Confirme a senha..."
                      />
                    </Campo>
                  </Card>
                </Cadastro>
              </ConteudoModal>
              <div id="fotter">
                <Salvar>Salvar</Salvar>
                <Cancelar onClick={close}>Cancelar</Cancelar>
              </div>
            </Modal>
          )}
        </Popup>
      </Toolbar>
      <Listagem>
        <ContainerGrid>
          <Cabecalho>
            <span id="first">nome</span>
            <span id="login">Login</span>
            <span id="papel">Papel</span>
            <span id="acoes">Ações</span>
          </Cabecalho>
          <Grid>
            {dados.map((e) => (
              <div key={e.id} id="row">
                <span id="first">{e.nome}</span>
                <span id="login">{e.login}</span>
                <span id="papel">
                  {e.papel === 1 ? "Funcionário" : "Administrador"}
                </span>
                <span id="acoes">
                  <FaEdit color="rgb(54 132 249)" />
                  <RiDeleteBinFill color="#ff4545" />
                </span>
              </div>
            ))}
          </Grid>
        </ContainerGrid>
      </Listagem>
    </Container>
  );
};

export default Usuario;
