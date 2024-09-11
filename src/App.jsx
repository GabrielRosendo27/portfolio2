import React from "react";
import Menu from "./Components/Menu";
import Sobre from "./Components/Sobre";
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
  font-family: Poppins;
  transition: all 0.5s;
  &.dark-mode {
    background-color: #000000f4;
    color: white;
  }
  &.light-mode {
    background-color: #f8f8f0;
    color: black;
  }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  return (
    <Container className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Menu isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Sobre />
      <Portfolio />
      <Contato />
    </Container>
  );
}

export default App;
