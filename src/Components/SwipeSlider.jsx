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
  width: 390px;
  height: 510px;
  object-fit: cover;
  border-radius: 12px;
  user-select: none;
  padding: 0.2px;
`;
const SlideContainer = styled.div`
  height: 60vh;
  display: grid;
  grid-template-columns: 450px 1fr;
  align-items: start;
  justify-content: center;
  overflow: hidden;
  border-radius: 24px;
  margin: 0 30px;
  scroll-behavior: smooth;
  padding: 20px;
  cursor: pointer;
  &:hover .overlay {
    opacity: 1;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  padding: 10px;
  text-align: center;
`;
const TextDiv = styled.div`
  height: 500px;
  overflow: hidden;
`;
const Description = styled.p`
  font-size: 16px;
  line-height: 2;
  word-break: break-all;
  word-spacing: 1px;
  letter-spacing: 0.5px;
  padding: 10px;
  word-break: keep-all;
`;
const Git = styled.div`
  display: flex;
  gap: 10px;
`;
const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
            <div>
              <ImgSlide src={item.image} alt="Slider" className={isDarkMode ? "dark-border" : "light-border"} />
            </div>
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
                <Git>
                  {item.git} {item.vercel}
                </Git>
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
