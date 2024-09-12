import React from "react";
import styled from "styled-components";
//
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { register } from "swiper/element/bundle";
register();
//
import { data } from "../Data/Data";

const ImgSlide = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  user-select: none;
  border-radius: 24px;
`;
const SlideContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  margin: 0 30px;
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
  background-color: rgba(0, 0, 0, 0.8);
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
  border-radius: 24px;
`;
const Title = styled.h3`
  font-size: 24px;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 10px;
`;
const Tec = styled.p`
  color: yellow;
  margin-top: 1rem;
`;
const Git = styled.p`
  color: red;
`;
const SwipeSlider = () => {
  const [slidePerView, setSlidePerView] = React.useState(2);

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

  return (
    <Swiper
      className="sw"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={slidePerView}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <SlideContainer>
            <ImgSlide src={item.image} alt="Slider" className="slide-item" />
            <Overlay className="overlay">
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Tec> {item.tec}</Tec>
              <Git>{item.git}</Git>
            </Overlay>
          </SlideContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipeSlider;
