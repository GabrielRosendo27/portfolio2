import React from "react";
import { ContatoSection, TextBox, IconTextBox } from "./ComponentsStyle/Contato.style";
import IconGithub from "../Icons/IconGithub";
import IconLinkedin from "../Icons/IconLinkedin";
import IconEmailOutline from "../Icons/IconEmail";

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
