import React from "react";
import styled from "styled-components";
import IconDarkMode from "../assets/DarkModeIcon";
const DarkModeDiv = styled.div`
  padding: 8px 10px;
  margin-left: 50px;
  background: black;
  border-radius: 6px;
  color: #f8f8f0;
  transition: all 0.5s;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.08, 1.08);
  }
  &.darkmodebg {
    background: #f8f8f0;
    color: #000000f4;
  }
  @media (max-width: 640px) {
    margin-left: 15px;
  }
  @media (max-width: 468px) {
    font-size: 12px;
    padding: 4px 6px;
  }
`;

const DarkMode = ({ isDarkMode, setIsDarkMode }) => {
  const ToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <DarkModeDiv onClick={ToggleDarkMode} className={isDarkMode ? "darkmodebg" : ""}>
        {isDarkMode ? <IconDarkMode /> : <IconDarkMode />}
      </DarkModeDiv>
    </div>
  );
};

export default DarkMode;
