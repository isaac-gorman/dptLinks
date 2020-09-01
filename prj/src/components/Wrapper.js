import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Hero from "./Hero";
import StudyLinks from "./StudyLinks";

const ResponsiveSection = styled.div`
  width: 96vw;
  margin: 0 auto;
  height: 100vh;
  // background: #e5e5e5;
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
`;
const SectionB = styled.div`
  // width: 100%;
  // margin: 0 auto;
  // height: 100%;
  background: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
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
        <SectionB></SectionB>
      </ResponsiveSection>
    </>
  );
}

export default Wrapper;
