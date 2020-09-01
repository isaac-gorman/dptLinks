import React from "react";
import styled from "styled-components";
import StudyLinksData from "./Data/StudyLinksData";

const Container = styled.div`
  width: 100%;
  height: 60%;

  // background: purple;
`;
const Heading = styled.h3`
  font-size: 16px;
`;
const CarouselConatiner = styled.div`
  width: 100%;
  height: 90%;
  background: red;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
`;
const Track = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: scroll;

  background: green;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    background: transparent;
    width: 0px;
  }
`;
const LinksDivA = styled.div`
  width: 400px;
  height: 100%;
  flex-shrink: 0;

  background: yellow;
`;
const LinksDivB = styled.div`
  width: 400px;
  height: 100%;
  flex-shrink: 0;

  background: orange;
`;

const LinkCard = styled.div`
  width: 240px;
  height: 55px;
  background: grey;
  display: flex;
  // justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  background: pink;
  margin-left: 6px;
`;

const SubjectDiv = styled.div`
  width: 70%;
  height: 50px;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

const Title = styled.h4`
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Destination = styled.p`
  font-size: 12px;
  margin-top: 0px;
  margin-bottom: 0px;
`;
function StudyLinks() {
  return (
    <Container>
      <Heading>Study Links</Heading>
      <CarouselConatiner>
        <Track>
          <LinksDivA>
            {/* .slice(0, 3) */}
            {StudyLinksData.slice(0, 3).map((item) => {
              return (
                <LinkCard key={item.id}>
                  <Icon src={item.image} alt="item" />
                  <SubjectDiv>
                    <Title>{item.title}</Title>
                    <Destination>{item.destination}</Destination>
                  </SubjectDiv>
                </LinkCard>
              );
            })}
          </LinksDivA>
          <LinksDivB>
            {StudyLinksData.slice(3).map((item) => {
              return (
                <LinkCard key={item.id}>
                  <Icon src={item.image} alt="item" />
                  <SubjectDiv>
                    <Title>{item.title}</Title>
                    <Destination>{item.destination}</Destination>
                  </SubjectDiv>
                </LinkCard>
              );
            })}
          </LinksDivB>
        </Track>
      </CarouselConatiner>
    </Container>
  );
}

export default StudyLinks;
