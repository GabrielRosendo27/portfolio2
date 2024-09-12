import React from "react";
import styled from "styled-components";

const SobreSection = styled.section`
  width: 100vw;
  height: 100vh;
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 100px;
  scroll-snap-align: start;
`;
const SobreH1 = styled.h1`
  font-size: 5rem;
  position: relative;
`;
const SobreP = styled.p`
  position: absolute;
  top: 90px;
  left: 0px;
  font-size: 1.3rem;
  margin-left: 0.6rem;
  color: black;
`;
const Sobre = () => {
  return (
    <SobreSection id="sobre">
      <div>
        <SobreH1>
          Gabriel Rosendo
          <SobreP>Web Developer</SobreP>
        </SobreH1>
      </div>
      <div>
        <p>Aqui você pode encontrar meus principais projetos, tecnologias que utilizei e o que aprendi com cada um deles.</p>
      </div>
    </SobreSection>
  );
};

export default Sobre;
