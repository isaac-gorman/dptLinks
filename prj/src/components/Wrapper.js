import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Hero from "./Hero";
import StudyLinks from "./StudyLinks";
import ClassArchive from "./ClassArchive";
import Contact from "./Contact";

const ResponsiveSection = styled.div`
  width: 96vw;
  margin: 0 auto;
  // height: 100vh;
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
  height: 600px;
  // background: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;

  @media (min-width: 1152px) {
    align-items: flex-start;
    // background: pink;
    width: 60vw;
    margin-top: 0px;
  }
`;
const SectionB = styled.div`
  width: 100%;
  height: 600px;
  // margin: 0 auto;

  // background: lightblue;
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
  } ;
`;

function Wrapper() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default Wrapper;
