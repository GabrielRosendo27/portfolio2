import React from "react";
import styled from "styled-components";

const SobreSection = styled.section`
  width: 100vw;
  height: 100vh;
  margin-top: 80px;
  display: grid;
  grid-template-columns: 700px 700px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  scroll-snap-align: start;
  @media (max-width: 1400px) {
    grid-template-columns: 500px 500px;
  }
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    text-align: center;
  }
`;
const SobreH1 = styled.h1`
  font-size: 4.5rem;
  position: relative;
  letter-spacing: 0.05em;
  @media (max-width: 1400px) {
    font-size: 3rem;
  }
`;
const SobreP = styled.p`
  position: absolute;
  top: 80px;
  left: 422px;
  font-size: 1.4rem;
  margin-left: 0.6rem;
  @media (max-width: 1400px) {
    top: 47px;
    left: 220px;
  }
  @media (max-width: 992px) {
    left: 88px;
    top: 52px;
  }
`;
const DescP = styled.p`
  font-size: 1.5rem;
  word-wrap: break-word;
  @media (max-width: 1400px) {
    font-size: 1.3rem;
  }
  @media (max-width: 992px) {
    width: 500px;
  }
`;

const Sobre = () => {
  return (
    <SobreSection id="sobre">
      <div className="box">
        <SobreH1>
          <p>Gabriel Rosendo</p>
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
