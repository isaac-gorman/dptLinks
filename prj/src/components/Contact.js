import React from "react";
import styled from "styled-components";
import JG from "./JG.svg";
import M from "./M.svg";

const Container = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  // margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: blue;
  // align-items: flex-end;

  @media (min-width: 768px) {
    width: 50%;
    background: green;
    align-items: flex-end;
  }

  @media (min-width: 1152px) {
    width: 65%;
    background: blue;
    margin-top: 0px;
    align-items: center;
  } ;
`;

const Heading = styled.h3`
  font-size: 18px;
  margin-left: 6px;
  text-align: left;
  width: 90%;
`;

const Card = styled.div`
  width: 90%;
  height: 380px;
  background: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleDiv = styled.div`
  height: 60px;
  width: 90%;
  // background: pink;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const InfoDiv = styled.div`
  height: 40px;
  width: 70%;
  // background: green;
  display: flex;
  flex-direction: column;
`;

const Responsibility = styled.h3`
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Name = styled.p`
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const ImageDiv = styled.div`
  width: 50px;
  height: 50px;
  color: lightblue;
  border-radius: 40px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: none;
  border-radius: 40px;
`;

const DetailsDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const RoleSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const RoleDiv = styled.div`
  display: flex;
`;

const Role = styled.h3`
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 10px;
`;

const RoleName = styled.p`
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.5px;
  background: black;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const DirectionsTitle = styled.h3`
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 8px;
`;

const Directions = styled.p`
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const EmailDiv = styled.div`
  display: flex;
  align-items: center;
`;

const EmailIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 14px;
`;

const Email = styled.p`
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 0px;
  text-decoration: underline;
`;

function Contact() {
  return (
    <Container>
      <Heading>Contact</Heading>
      <Card>
        <TitleDiv>
          <InfoDiv>
            <Responsibility>Photos & Videos</Responsibility>
            <Name>Jasmine Gongora</Name>
          </InfoDiv>
          <ImageDiv>
            <Image src={JG} alt="Lab-A Historian Jasmine G" />
          </ImageDiv>
        </TitleDiv>

        <DetailsDiv>
          <RoleSection>
            <RoleDiv>
              <Role>Role</Role>
              <RoleName>Historian Lab A</RoleName>
            </RoleDiv>
            <Divider />
          </RoleSection>

          <RoleSection>
            <DirectionsTitle>How to get intouch </DirectionsTitle>
            <Directions>
              Email me if you have any question or concerns regardinding photos
              and video. Thanks, Jasmine.
            </Directions>
            <Divider />
          </RoleSection>

          <EmailDiv>
            <EmailIcon src={M} alt="Email Icon" />
            <Email>media@dptLinks23.com</Email>
          </EmailDiv>
        </DetailsDiv>
      </Card>
    </Container>
  );
}

export default Contact;
