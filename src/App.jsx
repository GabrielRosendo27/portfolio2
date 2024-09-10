import React from "react";
import Menu from "./Components/Menu";
import Section from "./Components/Sobre";
import Portfolio from "./Components/Portfolio";
import Contato from "./Components/Contato";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

function App() {
  return (
    <Container>
      <Menu />
      <Section />
      <Portfolio />
      <Contato />
    </Container>
  );
}

export default App;
