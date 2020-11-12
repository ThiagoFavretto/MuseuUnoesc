import React from "react";

import { Link } from "react-router-dom";
import BackgroundImg from "../../assets/not.png";

import { Container } from "./styles";

const NotFound = () => {
  return (
    <Container back={BackgroundImg}>
      <Link to="/">VOLTAR PRO DASHBOARD</Link>
    </Container>
  );
};

export default NotFound;
