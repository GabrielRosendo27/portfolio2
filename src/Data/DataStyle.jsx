import styled from "styled-components";
import React from "react";
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const TechButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  }
`;

// Botões personalizados com cores específicas para cada tecnologia
export const ReactButton = styled(TechButton)`
  background-color: #61dbfb; /* Azul React */
`;

export const JavaScriptButton = styled(TechButton)`
  background-color: #f0db4f; /* Amarelo JavaScript */
  color: #323330; /* Cor do texto mais escura */
`;

export const FirebaseButton = styled(TechButton)`
  background-color: #ffca28; /* Amarelo Firebase */
  color: #333; /* Texto escuro */
`;

export const JavaButton = styled(TechButton)`
  background-color: #5382a1; /* Azul Java */
`;

export const PythonButton = styled(TechButton)`
  background-color: #3776ab; /* Azul Python */
`;

export const MySQLButton = styled(TechButton)`
  background-color: #00758f; /* Azul mySQL */
`;

export const SQLiteButton = styled(TechButton)`
  background-color: #003b57; /* Azul escuro SQLite */
`;
export const ApiButton = styled(TechButton)`
  background-color: #6e42f4; /* Roxo chamativo para APIs */
`;

function TechButtons() {
  return (
    <ButtonContainer>
      <ReactButton>React</ReactButton>
      <JavaScriptButton>JavaScript</JavaScriptButton>
      <FirebaseButton>Firebase</FirebaseButton>
      <JavaButton>Java</JavaButton>
      <PythonButton>Python</PythonButton>
      <MySQLButton>mySQL</MySQLButton>
      <SQLiteButton>SQLite</SQLiteButton>
    </ButtonContainer>
  );
}

export default TechButtons;
