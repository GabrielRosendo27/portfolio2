import React from "react";
import styled from "styled-components";

const ContatoSection = styled.section`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contato = () => {
  return (
    <>
      <ContatoSection id="contato">
        <div className="box">
          Gabriel_eulalio@hotmail.com <br />
          Linkedin: <br />
          Github:
        </div>
      </ContatoSection>
    </>
  );
};

export default Contato;
