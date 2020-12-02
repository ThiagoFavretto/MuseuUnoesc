import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 80px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LogoUnoesc = styled.img`
  width: 50px;
  height: 50px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  span {
    margin: 20px 0 0 15px;
  }
`;

export const TituloHeader = styled.span`
  width: 120px;
`;

export const PesquisaContainer = styled.div`
  width: 30%;
  height: 30px;
  display: flex;
  align-items: center;
  input {
    height: 100%;
    border-radius: 5px;
    border: solid 1px;
    flex: 1;
    margin-right: 15px;
  }
  span {
    height: 30px;
    width: 30px;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    border: solid 1px #666;
    :hover {
      cursor: pointer;
    }
  }
`;

export const Login = styled.div`
  border-radius: 5px;
  border: solid 1px #666;
  height: 30px;
  width: 50px;
  justify-content: center;
  display: flex;
  align-items: center;
`;
