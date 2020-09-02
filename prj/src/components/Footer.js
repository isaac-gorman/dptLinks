import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 45px;

  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-height: 800px) {
    height: 75px;
  }

  @media (min-height: 900px) {
    height: 95px;
  }

  @media (min-height: 1000px) {
    margin-top: 20px;
  }
`;

const ContentDiv = styled.div`
  width: 90%;
  height: 22px;

  background: yellow;
  display: flex;
`;

function Footer() {
  return (
    <Container>
      <ContentDiv></ContentDiv>
    </Container>
  );
}

export default Footer;
