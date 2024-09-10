import React from "react";
import styled from "styled-components";

const PortfolioSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: red;
  scroll-snap-align: start;
`;

const Portfolio = () => {
  return <PortfolioSection id="portfolio">Portfolio</PortfolioSection>;
};

export default Portfolio;
