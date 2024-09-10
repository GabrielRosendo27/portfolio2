import React from "react";
import styled from "styled-components";
import DarkMode from "./DarkMode";

const MenuStyle = styled.div`
  width: 100vw;
  height: 80px;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Roboto;
`;

const MenuUl = styled.ul`
  display: flex;
  gap: 15px;
  &:nth-child(1) {
    margin-left: 200px;
  }
  &:nth-child(2) {
    margin-right: 50px;
  }
`;
const MenuLi = styled.li`
  font-size: 20px;
  cursor: pointer;
  padding: 6px 6px;
  border-radius: 6px;
`;

const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
};

const Menu = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <MenuStyle>
      <MenuUl>
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
