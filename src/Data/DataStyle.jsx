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
  background-color: #61dbfb;
  color: #323330;
`;
export const HtmlButton = styled(TechButton)`
  background-color: #fb9261;
  color: #323330;
`;
export const CSSButton = styled(TechButton)`
  background-color: #61cafb;
  color: #323330;
`;

export const JavaScriptButton = styled(TechButton)`
  background-color: #f0db4f; /* Amarelo JavaScript */
  color: #323330; /* Cor do texto mais escura */
`;

export const FirebaseButton = styled(TechButton)`
  background-color: #ffca28; /* Amarelo Firebase */
  color: #323330; /* Texto escuro */
`;

export const JavaButton = styled(TechButton)`
  background-color: #d3cc6e; /* Azul Java */
  color: #323330;
`;

export const PythonButton = styled(TechButton)`
  background-color: #3776ab; /* Azul Python */
  color: #323330;
`;

export const MySQLButton = styled(TechButton)`
  background-color: #008f64; /* Azul mySQL */
  color: #323330;
`;

export const SQLiteButton = styled(TechButton)`
  background-color: #018db1; /* Azul escuro SQLite */
  color: #323330;
`;
export const ApiButton = styled(TechButton)`
  background-color: #6e42f4; /* Roxo chamativo para APIs */
  color: #323330;
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
