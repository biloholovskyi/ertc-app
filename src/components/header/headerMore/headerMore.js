import React from 'react';
import styled from "styled-components";

import Logo from './ertc-logo.svg';
import LogoName from './logo-name.svg';

const HeaderContent = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 50;
  padding: 16px 16px 20px 16px;
`;

const IconContainer = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Icon = styled.div `
  width: 32px;
  height: 32px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image:url(${Logo});
  margin-right: 8px;
`;

const IconName = styled.div `
  width: 64px;
  height: 17px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image:url(${LogoName});
`;

const Line = styled.div `
  height: 0.5px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 25px;
`;

const Converter = styled.div `
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #FFFFFF;
`;

const HeaderMore = () => {
  return (
    <HeaderContent>
      <IconContainer>
        <Icon/>
        <IconName/>
      </IconContainer>
      <Line/>
      <Converter>1 ertc = 7,22 EUR</Converter>
    </HeaderContent>
  )
};

export default HeaderMore;