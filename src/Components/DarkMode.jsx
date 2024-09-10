import React from "react";
import styled from "styled-components";

const DarkModeDiv = styled.div`
  align-self: center;
  padding: 10px 12px;
  margin-left: 50px;
  cursor: pointer;
`;

const DarkMode = ({ isDarkMode, setIsDarkMode }) => {
  const ToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <DarkModeDiv onClick={ToggleDarkMode}>DarkMode</DarkModeDiv>
    </div>
  );
};

export default DarkMode;
