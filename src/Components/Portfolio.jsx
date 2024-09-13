import React from "react";
import styled from "styled-components";
import SwipeSlider from "./SwipeSlider";

const PortfolioSection = styled.section`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Portfolio = ({ isDarkMode }) => {
  return (
    <>
      <PortfolioSection id="portfolio">
        <SwipeSlider isDarkMode={isDarkMode} />
      </PortfolioSection>
    </>
  );
};

export default Portfolio;
