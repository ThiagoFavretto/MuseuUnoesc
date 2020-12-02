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

const Objeto = ({ id }) => {
  const dados = [
    {
      id: 1,
      nome: "teste 1",
      descricao: "teste 1",
      status: 1,
      categoria: 1,
      instituicao: 1,
      local: 1,
      destaque: 1,
    },

    {
      id: 2,
      nome: "teste 1",
      descricao: "teste 1",
      status: 1,
      categoria: 1,
      instituicao: 1,
      local: 1,
      destaque: 1,
    },

    {
      id: 3,
      nome: "teste 1",
      descricao: "teste 1",
      status: 1,
      categoria: 1,
      instituicao: 1,
      local: 1,
      destaque: 1,
    },

    {
      id: 4,
      nome: "teste 1",
      descricao: "teste 1",
      status: 1,
      categoria: 1,
      instituicao: 1,
      local: 1,
      destaque: 1,
    },
  ];

  return (
    <Container>
      <Toolbar>
        <label>Objetos</label>
        <Popup trigger={<Cadastrar> Cadastrar</Cadastrar>} modal>
          {(close) => (
            <Modal>
              <ConteudoModal>
                <Cadastro>
                  <label id="titulo">Objeto</label>
                  <Card>
                    <Campo>
                      <label>Nome: </label>{" "}
                      <input placeholder="Informe nome..." />
                    </Campo>
                    <Campo>
                      <label>Descricao: </label>
                      <textarea placeholder="Informe na descrição..." />
                    </Campo>
                    <Campo>
                      <label>Status: </label>
                      <select placeholder="Instituição...">
                        <option value="1">Ativo</option>
                        <option value="2">Inátivo</option>
                      </select>
                      <label id="margem">Categoria: </label>
                      <select placeholder="Instituição...">
                        <option value="1">Lolis</option>
                        <option value="2">Hentais</option>
                      </select>
                    </Campo>
                    <Campo>
                      <label>Instituição: </label>
                      <select placeholder="Instituição...">
                        <option value="1">Unoesc</option>
                        <option value="2">Bar do zé</option>
                      </select>
                      <label id="margem">Local: </label>
                      <select placeholder="Instituição...">
                        <option value="1">Unoesc</option>
                        <option value="2">Bar do zé</option>
                      </select>
                    </Campo>
                    <Campo>
                      <label>Destaque</label>
                      <input id="destaque" type="checkbox" />
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
            <span>Nome</span>
            <span>Descição</span>
            <span id="status">Status</span>
            <span id="destaque">Destaque</span>
            <span id="acoes">Ações</span>
          </Cabecalho>
          <Grid>
            {dados.map((e) => (
              <div key={e.id} id="row">
                <span id="first">{e.nome}</span>
                <span>{e.descricao.substring(0, 50)}</span>
                <span id="status">{e.status}</span>
                <span id="destaque">{e.destaque}</span>
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

export default Objeto;
