import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: white;
  display: flex;
`;

export const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 200px);
  height: calc(100vh - 120px);
`;

export const ContainerMenuLateral = styled.div`
  width: 200px;
  height: 100%;
  border: solid 1px #f9f9f9;
  div {
    display: flex;
    flex-direction: column;
    button {
      width: 100%;
      height: 40px;
      border: 1px solid #e6e6e6;
      background-color: #fff;
    }
  }
`;
