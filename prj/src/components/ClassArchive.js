import React from "react";
import styled from "styled-components";
import CA from "./CA.svg";

const Container = styled.div`
  width: 100%;
  // height: 400px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 100px;
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
  height: 400px;
  background: white;
  border-radius: 10px;
  border: 0.1px solid #e6e6e6;

  transition: transform 0.2s;

  &:hover {
    border: none;
    // -ms-transform: scale(1.025); /* IE 9 */
    // -webkit-transform: scale(1.025); /* Safari 3-8 */
    transform: scale(1.025);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 3px 4px rgba(0, 0, 0, 0.25);
  }
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
  font-size: 14px;
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
  font-size: 14px;
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
  font-size: 14px;
  font-family: "airbnb_cereal_appbook";
  font-style: normal;
  font-weight: normal;
  // // margin-left: 6px;
  // text-align: left;
  // width: 100%;
  // margin-top: 0px;
  // margin-bottom: 0px;
`;

const AppLink = styled.a`
  text-decoration: none;
  color: black;
  // &:hover {
  //   color: #9ab8e9;
  // }
  // &:active {
  //   color: #4285f4;
  // }
`;

const Button = styled.button`
  width: 100%;
  font-size: 12px;
  font-family: "airbnb_cereal_appmedium";
  font-style: normal;
  text-decoration: none;
  color: white;
  background: #4285f4;
  padding: 12px;
  border: none;
  border-radius: 6px;

  &:hover {
    background: #9ab8e9;
  }
  &:active {
    background: #144ba6;
  }
`;

function ClassArchive() {
  return (
    <Container>
      <Heading>Class Archive</Heading>
      <AppLink></AppLink>

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

          <AppLink
            href="https://drive.google.com/drive/folders/1OQbx7Gw3064-bAxTHIgQ0dRQuNQSrK5W?usp=sharing"
            target="_blank"
          >
            <Button>Go to Archive</Button>
          </AppLink>
        </TextDiv>
      </Card>
    </Container>
  );
}

export default ClassArchive;
