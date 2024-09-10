import React from "react";
import styled from "styled-components";

const MenuStyle = styled.div`
  position: relative;
  width: 100vw;
  height: 80px;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 250px;
  font-family: Roboto;
`;

const MenuUl = styled.ul`
  display: flex;
  gap: 15px;
`;
const MenuLi = styled.li`
  font-size: 20px;
  cursor: pointer;
  padding: 6px 6px;
  border-radius: 6px;
`;
const DarkModeDiv = styled.div`
  position: absolute;
  top: 30px;
  right: 80px;
`;

const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
};

const Menu = () => {
  return (
    <MenuStyle>
      <MenuUl>
        <MenuLi onClick={() => handleScrollToSection("sobre")}>Gabriel Rosendo</MenuLi>
      </MenuUl>
      <MenuUl>
        <MenuLi onClick={() => handleScrollToSection("sobre")}>Sobre</MenuLi>

        <MenuLi onClick={() => handleScrollToSection("portfolio")}>Portfólio</MenuLi>

        <MenuLi onClick={() => handleScrollToSection("contato")}>Contato</MenuLi>
      </MenuUl>
      <DarkModeDiv>DarkMode</DarkModeDiv>
    </MenuStyle>
  );
};

export default Menu;
