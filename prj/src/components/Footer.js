import React from "react";
import styled from "styled-components";
import FB from "./FB.svg";
import IG from "./IG.svg";

const Container = styled.div`
  width: 100vw;
  height: 45px;

  border-top: 0.1px solid #e6e6e6;

  // background: orange;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 60px;
  }

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

  marign: 0px;
  // background: yellow;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-height: 800px) {
    height: 40px;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  // height: 10px;
`;

const Logo = styled.p`
  font-size: 14px;
  font-family: "airbnb_cereal_applight";
  font-style: normal;
  font-weight: 300;
  // line-height: 16px;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;

  @media (min-height: 800px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const Bold = styled.span`
  font-weight: bold;
  font-family: "airbnb_cereal_appbold";
  font-style: normal;
`;

const SocialDiv = styled.div`
  display: flex;
  width: 60px;
  justify-content: space-between;
  @media (min-height: 800px) {
    width: 80px;
  }
`;

const FBIcon = styled.img`
  width: 20px;
  height: 20px;
  fill: #9ab8e9;
  &:hover {
    border-radius: 20px;
    background: #4285f4;
    // fill: #9ab8e9;
  }

  @media (min-height: 800px) {
    width: 30px;
    height: 30px;
  }
`;
const IGIcon = styled.img`
  width: 20px;
  height: 20px;
  &:hover {
    border-radius: 20px;
    background: #4285f4;
    // fill: #9ab8e9;
  }

  @media (min-height: 800px) {
    width: 30px;
    height: 30px;
  }
`;

const AppLink = styled.a`
  text-decoration: none;
  color: black;
  // &:hover {
  //   color: #9ab8e9;
  // }
  // &:active {
  //   color: #4285f4;
  // }
`;

function Footer() {
  return (
    <Container>
      <ContentDiv>
        <LogoDiv>
          <Logo>
            dpt<Bold>Links23</Bold>
          </Logo>
        </LogoDiv>
        <SocialDiv>
          <AppLink
            href="https://www.facebook.com/groups/2419696158283210/?epa=SEARCH_BOX"
            target="_blank"
          >
            <FBIcon src={FB} alt="Facebook icon" />
          </AppLink>

          <AppLink
            href="https://www.instagram.com/uthealthsa_dpt2023/"
            target="_blank"
          >
            <IGIcon src={IG} alt="Instagram icon" />
          </AppLink>
        </SocialDiv>
      </ContentDiv>
    </Container>
  );
}

export default Footer;
