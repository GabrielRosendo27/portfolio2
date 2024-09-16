import styled from "styled-components";
//

export const ImgSlide = styled.img`
  width: 20vw;
  height: 60vh;
  object-fit: cover;
  border-radius: 12px;
  user-select: none;
  @media (max-width: 1369px) {
    width: 22vw;
  }
  @media (max-width: 1151px) {
    width: 28vw;
  }
  @media (max-width: 968px) {
    display: none;
  }
`;
export const SlideContainer = styled.div`
  margin: 20px 30px;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
    margin: 30px 10px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  padding: 10px;
  text-align: start;
  @media (max-width: 576px) {
    font-size: 22px;
  }
`;
export const TextDiv = styled.div``;
export const Description = styled.p`
  font-size: 16px;
  line-height: 1.8;
  word-break: keep-all;
  word-spacing: 1px;
  letter-spacing: 0.5px;
  padding: 10px;
  @media (max-width: 968px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
export const Git = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 1rem;
`;
export const ImgGitDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
