import React from "react";
import styled from "styled-components";
import DarkMode from "./DarkMode";
import IconGithub from "../Icons/IconGithub";
import IconLinkedin from "../Icons/IconLinkedin";

const MenuStyle = styled.div`
  width: 100vw;
  height: 80px;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Roboto;
  z-index: 1;
`;

const MenuUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 0px;
  &:nth-child(1) {
    margin-left: 180px;
  }
  &:nth-child(2) {
    margin-right: 50px;
    gap: 15px;
  }
  a {
    cursor: pointer;
    transition: all 0.3s;
    padding: 6px 1.2px;
    &:nth-child(2) {
      margin-right: 150px;
    }
    &:hover {
      color: #0063cf;
      transform: scale(1.1, 1.1);
    }
  }
`;
const MenuLi = styled.li`
  font-size: 20px;
  cursor: pointer;
  padding: 6px 6px;
  border-radius: 6px;
  &:hover {
    transition: all 0.2s;
    opacity: 0.7;
  }
`;

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
        <MenuLi onClick={() => handleScrollToSection("sobre")}>Gabriel Rosendo</MenuLi>
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
