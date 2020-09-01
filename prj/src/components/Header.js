import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 96vw;
  margin: 0 auto;
  height: 80px;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled.h3`
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  @media (min-width: 1152px) {
    text-align: left;
    font-size: 14px;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>dpt23</Logo>
    </HeaderContainer>
  );
}

export default Header;
