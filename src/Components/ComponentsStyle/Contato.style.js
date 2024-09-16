import styled from "styled-components";

export const ContatoSection = styled.section`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
export const IconTextBox = styled.div`
  display: flex;
  gap: 10px;
  transition: all 0.3s;
  span {
    display: flex;
    align-items: center;
    font-size: 1rem;
    letter-spacing: 4px;
    gap: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    @media (max-width: 576px) {
      font-size: 12px;
    }
  }
  &:hover {
    color: #0063cf;
    transform: scale(1.1, 1.1);
  }
`;
