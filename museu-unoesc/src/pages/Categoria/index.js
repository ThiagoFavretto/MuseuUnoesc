import React from "react";

import { Container } from "./styles";
import { Titulo } from "./styles";
import { Lista } from "./styles";
import { Grid } from "./styles";
import { Slide } from "./styles";


const objetos = [
  { id: 1, descricao: "Objeto 1", texto: "husbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwuk" },
  { id: 2, descricao: "Objeto 2", texto: "husbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwuk" },
  { id: 3, descricao: "Objeto 3", texto: "husbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwuk" },
  { id: 4, descricao: "Objeto 4", texto: "husbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwuk" },
  { id: 5, descricao: "Objeto ", texto: "husbjfjlaehblgkjsrnlgkjbsrlkgjbdjhrgbkehsrgkjhaebrfkhajwvekavjyregvqgvfhawgvkfuavwuk" },
];

const Categoria = ({ id }) => {
  return (
    <Container>
      <Lista>
        <Titulo>Categoria</Titulo>
        <Grid>

        {objetos.map((e) => (
            <Slide
              onClick={() =>{ }}
              key={e.id}
            >
              {e.descricao}
            </Slide>
          ))}
          
        </Grid>
      </Lista>
    </Container>
  );
};

export default Categoria;
