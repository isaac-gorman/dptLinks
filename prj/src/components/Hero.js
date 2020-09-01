import React from "react";
import styled from "styled-components";
// import fileC from "./fileC.jpg";
// import fileC from "./logo.svg";
// import LV from "./LV.svg";
import fc from "./fc.svg";

const HeroContainer = styled.div`
  width: 90%;
  height: 40%;

  background: white;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 680px;
    height: 230px;
  } ;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  border-radius: 20px;
`;

const Heading = styled.h3`
  font-size: 18px;
`;

const Description = styled.p`
  font-size: 12px;
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroImage src={fc} alt="file cabinet" />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Heading>All the links in one place</Heading>
      <Description>
        Find lab videos, to student made study material all in one place.
      </Description>
    </HeroContainer>
  );
}

export default Hero;
