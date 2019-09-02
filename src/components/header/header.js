import React from 'react';
import styled from "styled-components";

import MobileLine from "../mobileLine/mobileLine";

import patternBg from './patternBg.svg';
import userAvatar from './userAvatar.png';

const HeadBG = styled.header `
  width: 100%;
  height: 180px;
  background-image: url(${patternBg});
  background-position: center;
  position: relative;
  padding-top: calc(24px + 14px);
`;

const HeaderContent = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //background-color: red;
`;

const Avatar = styled.div `
  width: 64px;
  min-width: 64px;
  height: 64px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image:url(${userAvatar});
  margin-bottom: 9px;
`;

const UserName = styled.div `
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #FFFFFF;
`;

const Header = () => {
  return (
    <HeadBG>
      <MobileLine/>
      <HeaderContent>
        <Avatar/>
        <UserName>Carlos Rose</UserName>
      </HeaderContent>
    </HeadBG>
  )
};

export default Header;