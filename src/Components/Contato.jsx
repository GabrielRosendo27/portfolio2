import React from "react";
import styled from "styled-components";

const ContatoSection = styled.section`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
`;

const Contato = () => {
  return <ContatoSection id="contato">Contato</ContatoSection>;
};

export default Contato;
