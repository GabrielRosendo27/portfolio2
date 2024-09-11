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
  height: 400px;
  object-fit: cover;
  user-select: none;
  border-radius: 6px;
`;

const SwipeSlider = () => {
  const [slidePerView, setSlidePerView] = React.useState(3);

  const mouseOver = () => {
    console.log("passou");
  };

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerView(1);
      } else {
        setSlidePerView(3);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    { id: "1", image: "./nat.jpg" },
    { id: "2", image: "./nat2.jpg" },
    { id: "3", image: "./nat.jpg" },
    { id: "4", image: "./nat2.jpg" },
    { id: "5", image: "./nat.jpg" },
    { id: "6", image: "./nat2.jpg" },
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={slidePerView}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <ImgSlide src={item.image} alt="Slider" className="slide-item" onMouseOver={mouseOver} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipeSlider;
