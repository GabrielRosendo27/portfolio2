import styled from "styled-components";
//

export const ImgSlide = styled.img`
  width: 30vw;
  height: 50vh;
  object-fit: cover;
  border-radius: 12px;
  user-select: none;
  @media (max-width: 992px) {
    width: 20vw;
    height: 20vh;
  }
  @media (max-width: 576px) {
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
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 576px) {
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
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 1;
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
