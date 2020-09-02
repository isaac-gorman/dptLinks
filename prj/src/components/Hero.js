import React from "react";
import styled from "styled-components";
// import fileC from "./fileC.jpg";
// import fileC from "./logo.svg";
// import LV from "./LV.svg";
import fc from "./fc.svg";

const HeroContainer = styled.div`
  width: 95%;
  height: 350px;

  background: whit;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 100%;
    height: 300px;
  } ;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  border-radius: 20px;
`;

const Heading = styled.h3`
  font-size: 24px;
  font-family: "airbnb_cereal_appbook";
  font-style: normal;

  margin-bottom: 0;
  margin-top: 20px;
  position: relative;
  top: -300px;
  left: 24px;
  color: black;
  width: 80%;

  @media (min-width: 768px) {
    top: -280px;
    left: 42px;
    font-size: 32px;
    width: 50%;
  } ;
`;

const Description = styled.p`
  font-size: 16px;
  font-family: "airbnb_cereal_appbook";
  font-style: normal;
  font-weight: normal;

  position: relative;
  top: -160px;
  left: 24px;
  color: black;
  width: 90%;
  // font-weight: bold;

  @media (min-width: 768px) {
    top: -220px;
    left: 42px;
    font-size: 18px;
    width: 40%;
  } ;
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroImage src={fc} alt="file cabinet" />
      <Heading>A file cabinet for school links</Heading>
      <Description>
        Find lab videos, to student made study material all in one place.
      </Description>
    </HeroContainer>
  );
}

export default Hero;
