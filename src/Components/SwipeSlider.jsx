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
  const data = [
    {
      id: "1",
      image: "./listafilmesimg.PNG",
      title: "Lista Filmes App",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi reprehenderit esse quam quasi corrupti aut quis alias amet iure consectetur nesciunt, nobis reiciendis facere mollitia ipsam voluptatibus. Vero, est nihil?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi reprehenderit esse quam quasi corrupti aut quis alias amet iure consectetur nesciunt, nobis reiciendis facere mollitia ipsam voluptatibus. Vero, est nihil?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi reprehenderit esse quam quasi corrupti aut quis alias amet iure consectetur nesciunt, nobis reiciendis facere mollitia ipsam voluptatibus. Vero, est nihil?",
      tec: "React, Firebase, API",
      git: "Link Github",
    },
    {
      id: "2",
      image: "./imgBotDisc.PNG",
      title: "Discord Bot",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi reprehenderit esse quam quasi corrupti aut quis alias amet iure consectetur nesciunt, nobis reiciendis facere mollitia ipsam voluptatibus. Vero, est nihil?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi reprehenderit esse quam quasi corrupti aut quis alias amet iure consectetur nesciunt, nobis reiciendis facere mollitia ipsam voluptatibus. Vero, est nihil?",
      tec: "Python, SQLite",
      git: "Link Github",
    },
    {
      id: "3",
      image: "./exame.PNG",
      title: "Exame",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi reprehenderit esse quam quasi corrupti aut quis alias amet iure consectetur nesciunt, nobis reiciendis facere mollitia ipsam voluptatibus. Vero, est nihil?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi reprehenderit esse quam quasi corrupti aut quis alias amet iure consectetur nesciunt, nobis reiciendis facere mollitia ipsam voluptatibus. Vero, est nihil?",
      tec: "Java",
      git: "Link Github",
    },
    {
      id: "4",
      image: "./telaLogin.PNG",
      title: "Tela de login",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi reprehenderit esse quam quasi corrupti aut quis alias amet iure consectetur nesciunt, nobis reiciendis facere mollitia ipsam voluptatibus. Vero, est nihil?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi reprehenderit esse quam quasi corrupti aut quis alias amet iure consectetur nesciunt, nobis reiciendis facere mollitia ipsam voluptatibus. Vero, est nihil?",
      tec: "Java, SQL",
      git: "Link Github",
    },
    {
      id: "5",
      image: "./jogodavelha.png",
      title: "Jogo da Velha",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi reprehenderit esse quam quasi corrupti aut quis alias amet iure consectetur nesciunt, nobis reiciendis facere mollitia ipsam voluptatibus. Vero, est nihil?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi reprehenderit esse quam quasi corrupti aut quis alias amet iure consectetur nesciunt, nobis reiciendis facere mollitia ipsam voluptatibus. Vero, est nihil?",
      tec: "HTML, CSS, JavaScript",
      git: "Link Github",
    },
    {
      id: "6",
      image: "./bikcraft.png",
      title: "Bikcraft",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi reprehenderit esse quam quasi corrupti aut quis alias amet iure consectetur nesciunt, nobis reiciendis facere mollitia ipsam voluptatibus. Vero, est nihil?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi reprehenderit esse quam quasi corrupti aut quis alias amet iure consectetur nesciunt, nobis reiciendis facere mollitia ipsam voluptatibus. Vero, est nihil?",
      tec: "HTML, CSS",
      git: "Link Github",
    },
  ];
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
