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
  transition: all 0.3s;
  span {
    display: flex;
    align-items: center;
    font-size: 1rem;
    letter-spacing: 4px;
    gap: 5px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  &:hover {
    color: #0063cf;
    transform: scale(1.1, 1.1);
  }
`;
const Contato = () => {
  return (
    <>
      <ContatoSection id="contato">
        <div className="box">
          <TextBox>
            <IconTextBox>
              <a href="https://github.com/GabrielRosendo27" target="_blank" rel="noopener noreferrer">
                <span>
                  <IconGithub /> GITHUB
                </span>
              </a>
            </IconTextBox>
            <IconTextBox>
              <a href="https://github.com/GabrielRosendo27" target="_blank" rel="noopener noreferrer">
                <span>
                  <IconLinkedin />
                  LinkedIn
                </span>
              </a>
            </IconTextBox>
            <IconTextBox>
              <span>
                <IconEmailOutline />
                Gabriel_eulalio@hotmail.com
              </span>
            </IconTextBox>
          </TextBox>
        </div>
      </ContatoSection>
    </>
  );
};

export default Contato;
