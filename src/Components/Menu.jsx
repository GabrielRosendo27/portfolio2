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
`;
const MenuA = styled.a`
  padding: 6px 8px;

  border-radius: 4px;
`;

const Menu = () => {
  return (
    <MenuStyle>
      <MenuUl>
        <MenuLi>Gabriel Rosendo</MenuLi>
      </MenuUl>
      <MenuUl>
        <MenuLi>
          <MenuA>Ínicio</MenuA>
        </MenuLi>
        <MenuLi>
          <MenuA>Sobre</MenuA>
        </MenuLi>
        <MenuLi>
          <MenuA>Portfólio</MenuA>
        </MenuLi>
        <MenuLi>
          <MenuA>Contato</MenuA>
        </MenuLi>
      </MenuUl>
    </MenuStyle>
  );
};

export default Menu;
