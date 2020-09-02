import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 45px;

  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;

  // position: relative;
  // bottom: 0;
  // left: 0;
  // right: 0;
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
