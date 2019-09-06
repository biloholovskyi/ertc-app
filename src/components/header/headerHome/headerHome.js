import React from 'react';
import styled from "styled-components";
import userAvatar from "./userAvatar.png";

const HeaderContent = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 14px;
  padding-bottom: 14px;
  position: relative;
  z-index: 50;
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

const HeaderHome = () => {
  return (
    <HeaderContent>
      <Avatar/>
      <UserName>Carlos Rose</UserName>
    </HeaderContent>
  )
};

export default HeaderHome;