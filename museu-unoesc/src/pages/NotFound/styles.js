import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-image: url("${(props) => props.back}");
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
