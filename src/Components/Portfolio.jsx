import React from "react";
import styled from "styled-components";

const PortfolioSection = styled.section`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Portfolio = () => {
  return <PortfolioSection id="portfolio">Portfolio</PortfolioSection>;
};

export default Portfolio;
