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
  letter-spacing: 0.05em;
`;
const SobreP = styled.p`
  position: absolute;
  top: 90px;
  left: 0px;
  font-size: 1.3rem;
  margin-left: 0.6rem;
`;
const DescP = styled.p`
  font-size: 2rem;
`;

const Sobre = () => {
  return (
    <SobreSection id="sobre">
      <div className="box">
        <SobreH1>
          Gabriel Rosendo
          <SobreP>Web Developer</SobreP>
        </SobreH1>
      </div>
      <div className="box">
        <DescP>Bem vindo ao meu Portfólio</DescP>
        <DescP>Aqui você pode encontrar meus principais projetos, tecnologias que utilizei e o que aprendi com cada um deles.</DescP>
      </div>
    </SobreSection>
  );
};

export default Sobre;
