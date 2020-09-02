import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Hero from "./Hero";
import StudyLinks from "./StudyLinks";
import ClassArchive from "./ClassArchive";
import Contact from "./Contact";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // height: 100%;
`;

// const ResponisveContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// `;

const ResponsiveSection = styled.div`
  width: 96vw;
  margin: 0 auto;
  // height: 100%;
  background: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;

  @media (min-width: 1152px) {
    flex-direction: row;
  }
`;
const SectionA = styled.div`
  width: 100%;
  // margin: 0 auto;
  height: 50%;
  background: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;

  @media (min-width: 1152px) {
    align-items: flex-start;
    // background: pink;
    width: 60vw;
    margin-top: 0px;
    height: 600px;
  }

  @media (min-width: 1280px) {
    height: 90%;
  }
`;
const SectionB = styled.div`
  width: 100%;
  height: 50%;
  // margin: 0 auto;

  background: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;

  @media (min-width: 768px) {
    width: 100%;
    background: grey;
    flex-direction: row;
    justify-content: flex-start;
  }

  @media (min-width: 1152px) {
    // width: 65%;
    background: grey;
    flex-direction: column;
    overflow: hidden;
    overflow-y: scroll;
    height: 600px;
  }

  @media (min-height: 800px) {
    height: 50vw;
  }

  @media (min-height: 950px) {
    height: 60vw;
  }
`;

function Wrapper() {
  return (
    <Container>
      <Header />
      {/* <ResponisveContainer> */}
      <ResponsiveSection>
        <SectionA>
          <Hero />
          <StudyLinks />
        </SectionA>
        <SectionB>
          <ClassArchive />
          <Contact />
        </SectionB>
      </ResponsiveSection>
      {/* </ResponisveContainer> */}

      <Footer />
    </Container>
  );
}

export default Wrapper;
