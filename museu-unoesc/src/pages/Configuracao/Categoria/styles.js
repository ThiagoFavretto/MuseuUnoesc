import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex: 2;
  display: flex;
  height: 600px;
  flex-direction: column;
`;

export const Modal = styled.div`
  width: 500px;
  height: 170px;
  background-color: #f6f6f6;
  border: 1px solid #e6e6e6;
  div#fotter {
    width: 100%;
    height: 50px;
    padding: 20px;
    background-color: #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const ConteudoModal = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  height: 100%;
`;

export const Cancelar = styled.button`
  background-color: #ec6d6d;
  width: 100px;
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  color: #fff;
  border: none;
  margin-left: 15px;
  :hover,
  :focus {
    color: #000;
  }
`;

export const Salvar = styled.button`
  background-color: #7ab8ff;
  width: 100px;
  height: 30px;
  font-size: 16px;
  color: #fff;
  border-radius: 5px;
  margin-left: 15px;
  border: none;
  :hover,
  :focus {
    color: #000;
  }
`;

export const Cadastro = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 15px 15px 15px 15px;
  background-color: #f6f6f6;
  label#titulo {
    width: 500px;
    font-size: 25px;
    text-align: center;
  }
`;

export const Card = styled.div`
  padding: 10px 30px 10px 10px;
  margin: 15px 15px 15px 15px;
  height: auto;
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  button {
    margin: 20px 0 0 110px;
    width: 300px;
    height: 30px;
    background-color: green;
    color: #fff;
    border: none;
    border-radius: 5px;
  }
`;

export const Campo = styled.div`
  width: 100%;
  font-size: 18px;
  margin: 10px;
  display: flex;
  align-items: center;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  label {
    width: 100px;
    font-size: 18px;
  }
  label#margem {
    margin-left: 10px;
  }
  input {
    width: calc(100% - 100px);
    height: 30px;
    border: 1px solid #e6e6ee;
    border-radius: 5px;
  }
  input#destaque {
    width: 20px;
    height: 20px;
    border: 1px solid #e6e6ee;
    border-radius: 5px;
  }

  select {
    width: calc(100% - 100px);
    height: 30px;
    border: 1px solid #e6e6ee;
    border-radius: 5px;
  }
  textarea {
    width: calc(100% - 100px);
    height: 70px;
    border: 1px solid #e6e6ee;
    border-radius: 5px;
    resize: none;
  }
`;

export const Cadastrar = styled.button`
  width: 100px;
  height: 30px;
  color: #fff;
  background-color: green;
`;

export const Toolbar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: #fff;
  padding: 15px;
  justify-content: space-between;
  label {
    width: 100px;
    height: 30px;
    font-size: 30px;
    color: black;
  }
`;

export const Listagem = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: fit-content;
`;
export const ContainerGrid = styled.div`
  width: 100%;
  font-size: 17px;
  margin: 15px;
  border-radius: 5px;
  padding: none;
  height: fit-content;
  min-height: 780px;
  border: 1px solid #e6e6e6;
`;
export const Cabecalho = styled.div`
  height: 30px;
  background-color: #e6e6e6;
  display: flex;
  align-items: center;
  span {
    min-width: 50px;
    padding-left: 10px;
    flex: 1;
  }
  span#acoes {
    width: 100px;
    max-width: 100px;
  }
  span#status {
    max-width: 80px;
  }
  span#first {
    max-width: 80px;
  }
  span#destaque {
    max-width: 100px;
  }
`;
export const Grid = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  max-height: 750px;
  flex-direction: column;

  div#row {
    display: flex;
    align-items: center;
    border: 1px solid #e6e6e6;
    span {
      display: flex;
      align-items: center;
      border-right: 1px solid #e6e6e6;
      border-left: 1px solid #e6e6e6;
      padding-left: 10px;
      min-width: 50px;
      flex: 1;
      height: 30px;
    }
    span#first {
      border-left: none;
    }
    span#acoes {
      width: 100px;
      max-width: 100px;
      align-items: center;
      justify-content: space-around;
    }
    span#destaque {
      max-width: 100px;
    }
    span#first {
      max-width: 80px;
    }
    span#status {
      max-width: 80px;
    }
  }
`;
