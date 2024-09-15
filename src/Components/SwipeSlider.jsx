import React from "react";
import styled from "styled-components";
//
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { register } from "swiper/element/bundle";
register();
//
import { data } from "../Data/Data";

const ImgSlide = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  user-select: none;
  @media (max-width: 930px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 765px) {
    display: none;
  }
`;
const SlideContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 10px;
  margin: 0 30px;
  cursor: pointer;
  margin-bottom: 30px;
  @media (max-width: 930px) {
    p {
      width: 600px;
    }
  }
  @media (max-width: 765px) {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  padding: 10px;
  text-align: start;
`;
const TextDiv = styled.div``;
const Description = styled.p`
  width: 1100px;
  font-size: 16px;
  line-height: 1.8;
  word-break: keep-all;
  word-spacing: 1px;
  letter-spacing: 0.5px;
  padding: 10px;
  @media (max-width: 1400px) {
    width: 900px;
  }
  @media (max-width: 1200px) {
    width: 600px;
  }
  @media (max-width: 930px) {
    font-size: 12px;
  }
`;
const Git = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (max-width: 930px) {
    flex-wrap: wrap;
  }
`;
const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 0rem;
`;
const ImgGitDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const SwipeSlider = ({ isDarkMode }) => {
  return (
    <Swiper
      className={`swiper box ${isDarkMode ? "swiper-dark in-view" : "in-view"}`}
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCreative]}
      spaceBetween={0}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect="creative"
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
          scale: 0.6, // Diminui o slide anterior
          opacity: 0, // Faz o slide anterior desaparecer
        },
        next: {
          translate: ["100%", 0, 0], // Faz o próximo slide entrar da direita
          opacity: 1, // O próximo slide aparece
        },
      }}
      speed={400}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <SlideContainer>
            <ImgGitDiv>
              <ImgSlide src={item.image} alt="Slider" className={isDarkMode ? "dark-border" : "light-border"} />
              <Git>
                {item.git} {item.vercel}
              </Git>
            </ImgGitDiv>
            <TextDiv>
              <Title>{item.title}</Title>
              <Description>
                {item.description.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </Description>
              <ButtonsDiv>
                <span> {item.tec}</span>
              </ButtonsDiv>
            </TextDiv>
          </SlideContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipeSlider;
