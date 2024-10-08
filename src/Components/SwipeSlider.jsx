import React from "react";
import { ImgSlide, SlideContainer, Title, TextDiv, Description, Git, ButtonsDiv, ImgGitDiv } from "./ComponentsStyle/SwipeSlider.style";
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
