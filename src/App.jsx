import React from "react";
import Menu from "./Components/Menu";
import Sobre from "./Components/Sobre";
import Portfolio from "./Components/Portfolio";
import Contato from "./Components/Contato";
import { registerObserver } from "./Data/Observer";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  scrollbar-width: none;
  scroll-snap-type: y mandatory;
  scroll-snap-align: start;
  scroll-behavior: smooth;
  font-family: Poppins;
  transition: all 0.5s;
  &.dark-mode {
    background-color: #000000f4;
    color: #f0f0f0;
  }
  &.light-mode {
    background-color: #f8f8f0;
    color: #333;
  }
`;

function App() {
  //
  React.useEffect(() => {
    const observer = registerObserver();
    return () => {
      const boxes = document.querySelectorAll(".box");
      boxes.forEach((box) => observer.unobserve(box));
    };
  }, []);
  //
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  //
  return (
    <Container className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Menu isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Sobre />
      <Portfolio isDarkMode={isDarkMode} />
      <Contato />
    </Container>
  );
}

export default App;
