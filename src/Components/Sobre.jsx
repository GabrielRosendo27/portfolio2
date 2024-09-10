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
  gap: 50px;
  scroll-snap-align: start;
`;
const SobreH1 = styled.h1`
  font-size: 18px;
`;
const SobreP = styled.p`
  color: gray;
`;
const Sobre = () => {
  return (
    <SobreSection id="sobre">
      <div>
        <SobreH1>Gabriel Rosendo</SobreH1>
        <SobreP>Aqui você pode encontrar meus principais projetos, tecnologias que utilizei e o que aprendi com cada um deles.</SobreP>
      </div>
      <div>
        <SobreP>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet accusamus, nobis laboriosam iusto dignissimos voluptates expedita animi quo quia repellendus
          doloribus, qui unde nesciunt quisquam quam similique earum, neque facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem hic nesciunt
          fugiat maxime delectus quaerat. Dolor, quasi ipsa natus nulla accusamus, explicabo commodi rerum eum illo nisi nesciunt deleniti?
        </SobreP>
      </div>
    </SobreSection>
  );
};

export default Sobre;
