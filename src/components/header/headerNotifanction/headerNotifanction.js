import React from 'react';
import styled from "styled-components";

import Bottom from './bottom.svg';
import GearImg from './gear.svg';

const HeaderContent = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 50;
  padding: 20px 16px;
`;

const All = styled.div `
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #FFFFFF;
`;

const Img = styled.div `
  width: 24px;
  height: 24px;
  background-size: 10px 5px;
  background-position: center;
  background-repeat: no-repeat;
  background-image:url(${Bottom});
  margin-left: 2px;
`;

const Gear = styled.div `
  width: 24px;
  height: 24px;
  background-size: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-image:url(${GearImg});
`;

const HeaderNotification = () => {
  return (
    <HeaderContent>
      <All>Все уведомления<Img/></All>
      <Gear/>
    </HeaderContent>
  )
};

export default HeaderNotification;