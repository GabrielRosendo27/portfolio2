import React from "react";
import styled from "styled-components";
import IconGithub from "../Icons/IconGithub";
import IconLinkedin from "../Icons/IconLinkedin";
import IconEmailOutline from "../Icons/IconEmail";

const ContatoSection = styled.section`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const IconTextBox = styled.div`
  display: flex;
  gap: 10px;

  span {
    display: flex;
    align-items: center;
    font-size: 3rem;
    letter-spacing: 4px;
  }
`;
const Contato = () => {
  return (
    <>
      <ContatoSection id="contato">
        <div className="box">
          <TextBox>
            <IconTextBox>
              <IconGithub />
              <span>
                <a href="https://github.com/GabrielRosendo27" target="_blank" rel="noopener noreferrer">
                  GITHUB
                </a>
              </span>
            </IconTextBox>
            <IconTextBox>
              <IconLinkedin />{" "}
              <span>
                {" "}
                <a href="https://github.com/GabrielRosendo27" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </span>
            </IconTextBox>
            <IconTextBox>
              <IconEmailOutline /> <span>Gabriel_eulalio@hotmail.com</span>
            </IconTextBox>
          </TextBox>
        </div>
      </ContatoSection>
    </>
  );
};

export default Contato;
