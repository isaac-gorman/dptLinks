import React from "react";
import styled from "styled-components";
import StudyLinksData from "./Data/StudyLinksData";

const Container = styled.div`
  width: 100%;
  height: 60%;
  margin-top: 60px;

  // background: purple;
`;
const Heading = styled.h3`
  font-size: 20px;
  margin-left: 6px;
`;
const CarouselConatiner = styled.div`
  width: 100%;
  height: 90%;
  // background: red;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
`;
const Track = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: scroll;

  // background: green;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    background: transparent;
    width: 0px;
  }
`;
const LinksDivA = styled.div`
  width: 290px;
  height: 100%;
  flex-shrink: 0;
  // background: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LinksDivB = styled.div`
  width: 400px;
  height: 100%;
  flex-shrink: 0;

  // background: orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LinkCard = styled.div`
  width: 250px;
  height: 60px;
  margin-top: 14px;
  margin-bottom: 14px;
  // background: grey;
  display: flex;
  // justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  // background: pink;
  margin-left: 6px;
`;

const SubjectDiv = styled.div`
  width: 70%;
  height: 50px;
  // background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

const Title = styled.h4`
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Destination = styled.p`
  font-size: 16px;
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
