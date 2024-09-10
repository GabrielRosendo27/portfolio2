import React from "react";
import Menu from "./Components/Menu";
import Section from "./Components/Sobre";
import Portfolio from "./Components/Portfolio";
import Contato from "./Components/Contato";
import styled from "styled-components";

const Container = styled.div`
  overflow-x: hidden;
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
