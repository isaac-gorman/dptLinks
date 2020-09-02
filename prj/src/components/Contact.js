import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  // margin-top: 60px;
  // margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: blue;
  // align-items: flex-end;

  @media (min-width: 768px) {
    width: 50%;
    background: green;
    align-items: flex-end;
  }

  @media (min-width: 1152px) {
    width: 65%;
    background: blue;
    margin-top: 0px;
    align-items: center;
  } ;
`;

const Heading = styled.h3`
  font-size: 18px;
  margin-left: 6px;
  text-align: left;
  width: 90%;
`;

const Card = styled.div`
  width: 90%;
  height: 380px;
  background: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

function Contact() {
  return (
    <Container>
      <Heading>Contact</Heading>
      <Card></Card>
    </Container>
  );
}

export default Contact;
