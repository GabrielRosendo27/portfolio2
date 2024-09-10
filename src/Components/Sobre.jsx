import React from "react";
import styled from "styled-components";

const SobreSection = styled.section`
  width: 100vw;
  height: 100vh;
  margin-top: 80px;
  background: blue;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 100px;
  gap: 50px;
`;
const SobreH1 = styled.h1`
  color: white;
  font-size: 18px;
`;
const SobreP = styled.p`
  color: gray;
`;
const Sobre = () => {
  return (
    <SobreSection>
      <div>
        <SobreH1>Gabriel Rosendo</SobreH1>
        <SobreP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quos veritatis aliquam assumenda, quibusdam aut in neque dolores maxime rerum eum deserunt
          similique molestiae sint asperiores at? Laudantium, neque voluptas.
        </SobreP>
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
