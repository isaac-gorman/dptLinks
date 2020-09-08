import React, { useState } from "react";
import styled from "styled-components";
// import JG from "./JG.svg";
import M from "./M.svg";
import ContactsData from "./Data/ContactsData";

const Container = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background: blue;
  // align-items: flex-end;

  @media (min-width: 768px) {
    width: 50%;
    // background: green;
    align-items: flex-end;
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
  border: 0.1px solid #e6e6e6;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: transform 0.2s;

  &:hover {
    border: none;
    // -ms-transform: scale(1.025); /* IE 9 */
    // -webkit-transform: scale(1.025); /* Safari 3-8 */
    transform: scale(1.025);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 3px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    background-color: #f6f8fa;
  }
`;

const TitleDiv = styled.div`
  height: 60px;
  width: 90%;
  // background: green;
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
  font-family: "airbnb_cereal_appbook";
  font-style: normal;
  // font-weight: normal;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Name = styled.p`
  font-size: 14px;
  font-family: "airbnb_cereal_appbook";
  font-style: normal;
  font-weight: normal;
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
  font-family: "airbnb_cereal_appbook";
  font-style: normal;
  // font-weight: normal;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 10px;
`;

const RoleName = styled.p`
  font-size: 14px;
  font-family: "airbnb_cereal_appbook";
  font-style: normal;
  font-weight: normal;
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
  font-family: "airbnb_cereal_appbook";
  font-style: normal;

  margin-top: 0px;
  margin-bottom: 8px;
`;

const Directions = styled.p`
  font-size: 14px;
  font-family: "airbnb_cereal_appbook";
  font-style: normal;
  font-weight: normal;
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
  font-family: "airbnb_cereal_appbook";
  font-style: normal;
  // font-weight: normal;
  margin-top: 0px;
  margin-bottom: 0px;
  text-decoration: underline;
`;

const PreviewCard = styled.div`
  width: 90%;
  height: 120px;
  // background: pink;
  border: 0.1px solid #e6e6e6;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // margin-bottom: 20px;
  transition: transform 0.2s;

  &:hover {
    border: none;
    // -ms-transform: scale(1.025); /* IE 9 */
    // -webkit-transform: scale(1.025); /* Safari 3-8 */
    transform: scale(1.025);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 3px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    background-color: #f6f8fa;
  }
`;

const PreviewTitleDiv = styled.div`
  height: 60px;
  width: 90%;
  // background: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // margin-top: 30px;
`;

function Contact() {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <Heading>Contacts</Heading>
      {active ? (
        <Card onClick={() => setActive(!active)}>
          <TitleDiv>
            <InfoDiv>
              <Responsibility>Historian Lab A</Responsibility>
              <Name>Jasmine Gongora</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src="" alt="Lab-A Historian Jasmine G" />
            </ImageDiv>
          </TitleDiv>

          <DetailsDiv>
            <RoleSection>
              <RoleDiv>
                <Role>Role</Role>
                <RoleName>Archive photos and videos</RoleName>
              </RoleDiv>
              <Divider />
            </RoleSection>

            <RoleSection>
              <DirectionsTitle>How to get intouch </DirectionsTitle>
              <Directions>
                Email me if you have any question or concerns regarding photos
                and videos. Thanks, Jasmine.
              </Directions>
              <Divider />
            </RoleSection>

            <EmailDiv>
              <EmailIcon src={M} alt="Email Icon" />
              <Email>media@dptLinks23.com</Email>
            </EmailDiv>
          </DetailsDiv>
        </Card>
      ) : (
        <PreviewCard onClick={() => setActive(!active)}>
          <PreviewTitleDiv>
            <InfoDiv>
              <Responsibility>Historian Lab A</Responsibility>
              <Name>Jasmine Gongora</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src="" alt="Lab-A Historian Jasmine G" />
            </ImageDiv>
          </PreviewTitleDiv>
        </PreviewCard>
      )}
    </Container>
  );
}

export default Contact;
