import React from "react";
import styled from "styled-components";
import CA from "./CA.svg";

const Container = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 50%;
    // background: pink;
    align-items: flex-start;

    // margin-top: 20px;
    // margin-bottom: 20px;
  }

  @media (min-width: 1152px) {
    width: 65%;
    // background: blue;
    margin-top: 0px;
    align-items: center;
  } ;
`;

const Heading = styled.h3`
  font-size: 18px;

  font-family: "airbnb_cereal_appbook";
  font-style: normal;
  // font-weight: normal;
  margin-left: 6px;
  text-align: left;
  width: 90%;
`;

const Card = styled.div`
  width: 90%;
  height: 380px;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 169px;
  // border-radius: 10px 10px 0px 0px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  // max-height: 169px;
  border-radius: 10px 10px 0px 0px;
`;

const TextDiv = styled.div`
  width: 90%;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction column;
  // background: pink;
  
`;

const Title = styled.h3`
  font-size: 16px;
  font-family: "airbnb_cereal_appbook";
  font-style: normal;
  // font-weight: normal;
  // margin-left: 6px;
  text-align: left;
  width: 100%;
  margin-top: 26px;
  margin-bottom: 0px;
`;
const LinkDestination = styled.p`
  font-size: 16px;
  font-family: "airbnb_cereal_appbook";
  font-style: normal;
  font-weight: normal;
  // margin-left: 6px;
  text-align: left;
  width: 100%;
  margin-top: 0px;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 16px;
  font-family: "airbnb_cereal_appbook";
  font-style: normal;
  font-weight: normal;
  // // margin-left: 6px;
  // text-align: left;
  // width: 100%;
  // margin-top: 0px;
  // margin-bottom: 0px;
`;

function ClassArchive() {
  return (
    <Container>
      <Heading>Class Archive</Heading>
      <Card>
        <ImageContainer>
          <Image src={CA} alt />
        </ImageContainer>
        <TextDiv>
          <Title>DPT’23 Media Archive</Title>
          <LinkDestination>Google Photos</LinkDestination>
          <Description>
            Upload any content that you capture in and out of the classroom, for
            our class graduation slideshow.
          </Description>
        </TextDiv>
      </Card>
    </Container>
  );
}

export default ClassArchive;
