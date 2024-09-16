import React from "react";
import { MenuStyle, MenuLi, MenuUl } from "./ComponentsStyle/Menu.style";
import DarkMode from "./DarkMode";
import IconGithub from "../Icons/IconGithub";
import IconLinkedin from "../Icons/IconLinkedin";

const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
};

const Menu = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <MenuStyle>
      <MenuUl>
        <a>
          <IconGithub width={"24px"} />
        </a>
        <a>
          <IconLinkedin width={"24px"} />
        </a>
        <MenuLi onClick={() => handleScrollToSection("sobre")}>
          <span>Gabriel Rosendo</span>
        </MenuLi>
      </MenuUl>
      <MenuUl>
        <MenuLi onClick={() => handleScrollToSection("sobre")}>Sobre</MenuLi>

        <MenuLi onClick={() => handleScrollToSection("portfolio")}>Portfólio</MenuLi>

        <MenuLi onClick={() => handleScrollToSection("contato")}>Contato</MenuLi>
        <DarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </MenuUl>
    </MenuStyle>
  );
};

export default Menu;
