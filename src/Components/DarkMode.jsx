import React from "react";
import styled from "styled-components";

const DarkModeDiv = styled.div`
  align-self: center;
  padding: 10px 12px;
  margin-left: 50px;
  background: black;
  border-radius: 6px;
  color: white;
  transition: all 0.5s;
  user-select: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.08, 1.08);
  }
  &.darkmodebg {
    background: white;
    color: black;
  }
`;

const DarkMode = ({ isDarkMode, setIsDarkMode }) => {
  const ToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <DarkModeDiv onClick={ToggleDarkMode} className={isDarkMode ? "darkmodebg" : ""}>
        {isDarkMode ? "LightMode" : "DarkMode"}
      </DarkModeDiv>
    </div>
  );
};

export default DarkMode;
