import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { register } from "swiper/element/bundle";
register();

const ImgSlide = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  user-select: none;
  border-radius: 6px;
`;
const SlideContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 6px;

  &:hover .overlay {
    opacity: 1;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  padding: 20px;
  cursor: pointer;
  user-select: none;
`;
const Title = styled.h3`
  margin: 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 10px 0 0;
  font-size: 16px;
`;
const SwipeSlider = () => {
  const [slidePerView, setSlidePerView] = React.useState(2);

  const mouseOver = () => {
    console.log("passou");
  };

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerView(1);
      } else {
        setSlidePerView(2);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    { id: "1", image: "./listafilmesimg.PNG", title: "Imagem 1", description: "Descrição da imagem 1" },
    { id: "2", image: "./imgBotDisc.PNG", title: "Imagem 2", description: "Descrição da imagem 2" },
    { id: "3", image: "./exame.PNG", title: "Imagem 3", description: "Descrição da imagem 3" },
    { id: "4", image: "./telaLogin.PNG", title: "Imagem 4", description: "Descrição da imagem 4" },
    { id: "5", image: "./jogodavelha.png", title: "Imagem 5", description: "Descrição da imagem 5" },
    { id: "6", image: "./bikcraft.png", title: "Imagem 6", description: "Descrição da imagem 6" },
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={slidePerView}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <SlideContainer>
            <ImgSlide src={item.image} alt="Slider" className="slide-item" onMouseOver={mouseOver} />
            <Overlay className="overlay">
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </Overlay>
          </SlideContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipeSlider;
