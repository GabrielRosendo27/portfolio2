import React from "react";
import { SobreSection, SobreH1, SobreP, DescP } from "./ComponentsStyle/Sobre.style";
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
