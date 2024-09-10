import React from "react";
import styled from "styled-components";

const MenuStyle = styled.div`
  width: 100vw;
  height: 80px;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 250px;
  background: green;
`;

const MenuUl = styled.ul`
  display: flex;
  gap: 15px;
`;
const MenuLi = styled.li`
  font-size: 22px;
  cursor: pointer;
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
    </MenuStyle>
  );
};

export default Menu;
