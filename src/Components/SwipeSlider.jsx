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
import IconBxlReact from "../Icons/ReactIcon";
import IconReact from "../Icons/IconReact";
import { data } from "../Data/Data";

const ImgSlide = styled.img`
  width: 390px;
  height: 510px;
  object-fit: cover;
  border-radius: 12px;
  user-select: none;
  border: 4px solid rgba(0, 0, 0, 1);
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
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  border-right: 2px solid rgba(0, 0, 0, 0.2);
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
`;
const Tec = styled.p`
  color: blue;
  margin-top: 1rem;
`;
const Git = styled.p`
  color: red;
`;
const SwipeSlider = () => {
  // const [slidePerView, setSlidePerView] = React.useState(1);
  // React.useEffect(() => {
  //   function handleResize() {
  //     if (window.innerWidth < 720) {
  //       setSlidePerView(1);
  //     } else {
  //       setSlidePerView(1);
  //     }
  //   }
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <Swiper
      className="swiper box"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      // navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <SlideContainer>
            <div>
              <ImgSlide src={item.image} alt="Slider" className="slide-item" />
            </div>
            <TextDiv>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Tec>
                {" "}
                {/* {item.tec} */}
                {/* <IconBxlReact />
                <IconReact /> */}
              </Tec>
              <Git>{item.git}</Git>
            </TextDiv>
          </SlideContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipeSlider;
