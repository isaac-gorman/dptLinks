import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100vw;
  margin: 0 auto;
  height: 60px;
  // background: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 0.1px solid #e6e6e6;
  margin-bottom: 10px;

  @media (min-width: 1152px) {
    text-align: left;
    font-size: 14px;
    // height: 80px;
    // background: #e5e5e5;
    margin-bottom: 0px;
  }

  @media (min-width: 768px) {
    height: 60px;
  }

  @media (min-height: 800px) {
    height: 85px;
  }

  @media (min-height: 900px) {
    height: 95px;
  }
`;

const Logo = styled.p`
  font-family: "airbnb_cereal_applight";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  @media (min-width: 1152px) {
    text-align: center;
    font-size: 16px;
  }
`;

const Bold = styled.span`
  font-family: "airbnb_cereal_appbold";
  font-style: normal;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        dpt<Bold>Links23</Bold>
      </Logo>
    </HeaderContainer>
  );
}

export default Header;
