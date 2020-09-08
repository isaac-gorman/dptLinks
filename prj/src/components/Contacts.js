import React, { useState } from "react";
import styled from "styled-components";
// import JG from "./JG.svg";
import M from "./M.svg";
import ContactsData from "./Data/ContactsData";

const Container = styled.div`
  width: 100%;
  height: auto;
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
  margin-top: 10px;
  margin-bottom: 10px;
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
  // color: lightblue;
  border-radius: 40px;
  background-color: blue;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: none;
  border-radius: 40px;
  background: black;
  fill: white;
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
  margin-top: 10px;
  margin-bottom: 10px;

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
  const [activeJJ, setActiveJJ] = useState(false);
  const [activeK, setActiveK] = useState(false);
  const [activeM, setActiveM] = useState(false);
  const [activeR, setActiveR] = useState(false);
  const [activeB, setActiveB] = useState(false);
  const [activeJ, setActiveJ] = useState(false);
  const [activeG, setActiveG] = useState(false);

  return (
    <Container>
      <Heading>Contacts</Heading>
      {activeJJ ? (
        <Card onClick={() => setActiveJJ(!activeJJ)}>
          <TitleDiv>
            <InfoDiv>
              <Responsibility>{ContactsData.jj.role}</Responsibility>
              <Name>{ContactsData.jj.name}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={ContactsData.jj.image} alt="Tresurer jj " />
            </ImageDiv>
          </TitleDiv>

          <DetailsDiv>
            <RoleSection>
              <RoleDiv>
                <Role>Role</Role>
                <RoleName>{ContactsData.jj.role_description}</RoleName>
              </RoleDiv>
              <Divider />
            </RoleSection>

            <RoleSection>
              <DirectionsTitle>How to get intouch </DirectionsTitle>
              <Directions>{ContactsData.jj.directions}</Directions>
              <Divider />
            </RoleSection>

            <EmailDiv>
              <EmailIcon src={M} alt="Email Icon" />
              <Email>{ContactsData.jj.email}</Email>
            </EmailDiv>
          </DetailsDiv>
        </Card>
      ) : (
        <PreviewCard onClick={() => setActiveJJ(!activeJJ)}>
          <PreviewTitleDiv>
            <InfoDiv>
              <Responsibility>{ContactsData.jj.role}</Responsibility>
              <Name>{ContactsData.jj.name}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={ContactsData.jj.image} alt="Lab-A Historian jj" />
            </ImageDiv>
          </PreviewTitleDiv>
        </PreviewCard>
      )}
      {activeK ? (
        <Card onClick={() => setActiveK(!activeK)}>
          <TitleDiv>
            <InfoDiv>
              <Responsibility>{ContactsData.kaliea.role}</Responsibility>
              <Name>{ContactsData.kaliea.name}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={ContactsData.kaliea.image} alt="Tresurer kaliea " />
            </ImageDiv>
          </TitleDiv>

          <DetailsDiv>
            <RoleSection>
              <RoleDiv>
                <Role>Role</Role>
                <RoleName>{ContactsData.kaliea.role_description}</RoleName>
              </RoleDiv>
              <Divider />
            </RoleSection>

            <RoleSection>
              <DirectionsTitle>How to get intouch </DirectionsTitle>
              <Directions>{ContactsData.kaliea.directions}</Directions>
              <Divider />
            </RoleSection>

            <EmailDiv>
              <EmailIcon src={M} alt="Email Icon" />
              <Email>{ContactsData.kaliea.email}</Email>
            </EmailDiv>
          </DetailsDiv>
        </Card>
      ) : (
        <PreviewCard onClick={() => setActiveK(!activeK)}>
          <PreviewTitleDiv>
            <InfoDiv>
              <Responsibility>{ContactsData.kaliea.role}</Responsibility>
              <Name>{ContactsData.kaliea.name}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image
                src={ContactsData.kaliea.image}
                alt="Lab-A Historian kaliea"
              />
            </ImageDiv>
          </PreviewTitleDiv>
        </PreviewCard>
      )}
      {activeM ? (
        <Card onClick={() => setActiveM(!activeM)}>
          <TitleDiv>
            <InfoDiv>
              <Responsibility>{ContactsData.maddy.role}</Responsibility>
              <Name>{ContactsData.maddy.name}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={ContactsData.maddy.image} alt="Tresurer Maddy " />
            </ImageDiv>
          </TitleDiv>

          <DetailsDiv>
            <RoleSection>
              <RoleDiv>
                <Role>Role</Role>
                <RoleName>{ContactsData.maddy.role_description}</RoleName>
              </RoleDiv>
              <Divider />
            </RoleSection>

            <RoleSection>
              <DirectionsTitle>How to get intouch </DirectionsTitle>
              <Directions>{ContactsData.maddy.directions}</Directions>
              <Divider />
            </RoleSection>

            <EmailDiv>
              <EmailIcon src={M} alt="Email Icon" />
              <Email>{ContactsData.maddy.email}</Email>
            </EmailDiv>
          </DetailsDiv>
        </Card>
      ) : (
        <PreviewCard onClick={() => setActiveM(!activeM)}>
          <PreviewTitleDiv>
            <InfoDiv>
              <Responsibility>{ContactsData.maddy.role}</Responsibility>
              <Name>{ContactsData.maddy.name}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image
                src={ContactsData.maddy.image}
                alt="Lab-A Historian Maddy"
              />
            </ImageDiv>
          </PreviewTitleDiv>
        </PreviewCard>
      )}
      {activeR ? (
        <Card onClick={() => setActiveR(!activeR)}>
          <TitleDiv>
            <InfoDiv>
              <Responsibility>{ContactsData.robert.role}</Responsibility>
              <Name>{ContactsData.robert.name}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image src={ContactsData.robert.image} alt="Tresurer Robert " />
            </ImageDiv>
          </TitleDiv>

          <DetailsDiv>
            <RoleSection>
              <RoleDiv>
                <Role>Role</Role>
                <RoleName>{ContactsData.robert.role_description}</RoleName>
              </RoleDiv>
              <Divider />
            </RoleSection>

            <RoleSection>
              <DirectionsTitle>How to get intouch </DirectionsTitle>
              <Directions>{ContactsData.robert.directions}</Directions>
              <Divider />
            </RoleSection>

            <EmailDiv>
              <EmailIcon src={M} alt="Email Icon" />
              <Email>{ContactsData.robert.email}</Email>
            </EmailDiv>
          </DetailsDiv>
        </Card>
      ) : (
        <PreviewCard onClick={() => setActiveR(!activeR)}>
          <PreviewTitleDiv>
            <InfoDiv>
              <Responsibility>{ContactsData.robert.role}</Responsibility>
              <Name>{ContactsData.robert.name}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image
                src={ContactsData.robert.image}
                alt="Lab-A Historian Robert"
              />
            </ImageDiv>
          </PreviewTitleDiv>
        </PreviewCard>
      )}
      {activeB ? (
        <Card onClick={() => setActiveB(!activeB)}>
          <TitleDiv>
            <InfoDiv>
              <Responsibility>{ContactsData.brianna.role}</Responsibility>
              <Name>{ContactsData.brianna.name}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image
                src={ContactsData.brianna.image}
                alt="Lab-A Historian Brianna "
              />
            </ImageDiv>
          </TitleDiv>

          <DetailsDiv>
            <RoleSection>
              <RoleDiv>
                <Role>Role</Role>
                <RoleName>{ContactsData.brianna.role_description}</RoleName>
              </RoleDiv>
              <Divider />
            </RoleSection>

            <RoleSection>
              <DirectionsTitle>How to get intouch </DirectionsTitle>
              <Directions>{ContactsData.brianna.directions}</Directions>
              <Divider />
            </RoleSection>

            <EmailDiv>
              <EmailIcon src={M} alt="Email Icon" />
              <Email>{ContactsData.brianna.email}</Email>
            </EmailDiv>
          </DetailsDiv>
        </Card>
      ) : (
        <PreviewCard onClick={() => setActiveB(!activeB)}>
          <PreviewTitleDiv>
            <InfoDiv>
              <Responsibility>{ContactsData.brianna.role}</Responsibility>
              <Name>{ContactsData.brianna.name}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image
                src={ContactsData.brianna.image}
                alt="Lab-A Historian Brianna"
              />
            </ImageDiv>
          </PreviewTitleDiv>
        </PreviewCard>
      )}
      {activeJ ? (
        <Card onClick={() => setActiveJ(!activeJ)}>
          <TitleDiv>
            <InfoDiv>
              <Responsibility>{ContactsData.jasmine.role}</Responsibility>
              <Name>{ContactsData.jasmine.name}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image
                src={ContactsData.jasmine.image}
                alt="Lab-A Historian Jasmine G"
              />
            </ImageDiv>
          </TitleDiv>

          <DetailsDiv>
            <RoleSection>
              <RoleDiv>
                <Role>Role</Role>
                <RoleName>{ContactsData.jasmine.role_description}</RoleName>
              </RoleDiv>
              <Divider />
            </RoleSection>

            <RoleSection>
              <DirectionsTitle>How to get intouch </DirectionsTitle>
              <Directions>{ContactsData.jasmine.directions}</Directions>
              <Divider />
            </RoleSection>

            <EmailDiv>
              <EmailIcon src={M} alt="Email Icon" />
              <Email>{ContactsData.jasmine.email}</Email>
            </EmailDiv>
          </DetailsDiv>
        </Card>
      ) : (
        <PreviewCard onClick={() => setActiveJ(!activeJ)}>
          <PreviewTitleDiv>
            <InfoDiv>
              <Responsibility>{ContactsData.jasmine.role}</Responsibility>
              <Name>{ContactsData.jasmine.name}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image
                src={ContactsData.jasmine.image}
                alt="Lab-A Historian Jasmine G"
              />
            </ImageDiv>
          </PreviewTitleDiv>
        </PreviewCard>
      )}
      {activeG ? (
        <Card onClick={() => setActiveG(!activeG)}>
          <TitleDiv>
            <InfoDiv>
              <Responsibility>{ContactsData.gabrielle.role}</Responsibility>
              <Name>{ContactsData.gabrielle.name}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image
                src={ContactsData.gabrielle.image}
                alt="Lab-A Historian gabrielle G"
              />
            </ImageDiv>
          </TitleDiv>

          <DetailsDiv>
            <RoleSection>
              <RoleDiv>
                <Role>Role</Role>
                <RoleName>{ContactsData.gabrielle.role_description}</RoleName>
              </RoleDiv>
              <Divider />
            </RoleSection>

            <RoleSection>
              <DirectionsTitle>How to get intouch </DirectionsTitle>
              <Directions>{ContactsData.gabrielle.directions}</Directions>
              <Divider />
            </RoleSection>

            <EmailDiv>
              <EmailIcon src={M} alt="Email Icon" />
              <Email>{ContactsData.gabrielle.email}</Email>
            </EmailDiv>
          </DetailsDiv>
        </Card>
      ) : (
        <PreviewCard onClick={() => setActiveG(!activeG)}>
          <PreviewTitleDiv>
            <InfoDiv>
              <Responsibility>{ContactsData.gabrielle.role}</Responsibility>
              <Name>{ContactsData.gabrielle.name}</Name>
            </InfoDiv>
            <ImageDiv>
              <Image
                src={ContactsData.gabrielle.image}
                alt="Lab-A Historian Gabrielle G"
              />
            </ImageDiv>
          </PreviewTitleDiv>
        </PreviewCard>
      )}
    </Container>
  );
}

export default Contact;
