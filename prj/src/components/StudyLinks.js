import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60%;

  background: purple;
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
  height: 80%;
  flex-shrink: 0;

  background: yellow;
`;
const LinksDivB = styled.div`
  width: 400px;
  height: 80%;
  flex-shrink: 0;

  background: orange;
`;

// const LinksB = styled.div`
//   width: 400px;
//   height: 80%;

//   background: orange;
// `;

function StudyLinks() {
  return (
    <Container>
      <Heading>Study Links</Heading>
      <CarouselConatiner>
        <Track>
          <LinksDivA></LinksDivA>
          <LinksDivB></LinksDivB>
          {/* <LinksB></LinksB> */}
        </Track>
      </CarouselConatiner>
    </Container>
  );
}

export default StudyLinks;
