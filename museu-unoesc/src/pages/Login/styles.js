import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Box = styled.div`
  border: solid 1px #999;
  margin-top: 100px;
  background-color: #fafafa;
  border-radius: 7px;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  label {
    font-size: 30px;
    font-weight: bold;
  }
  select {
    width: 200px;
    border-radius: 5px;
    height: 30px;
    margin-top: 15px;
    border: 1px solid #e6e6e6;
  }
  input {
    width: 200px;
    border-radius: 5px;
    height: 30px;
    margin-top: 10px;
    border: 1px solid #e6e6e6;
  }
  button {
    margin-top: 30px;
    width: 150px;
    height: 30px;
    border-radius: 5px;
    background-color: brown;
    font-weight: bold;
    color: white;
    border: none;
  }
`;
