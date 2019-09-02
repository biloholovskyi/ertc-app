import React from 'react';
import styled from "styled-components";

import battery from './icon/battery.svg';
import reception from './icon/reception.svg';
import wifi from './icon/wifi.svg';

const MobileHead = styled.div`
  width: 100%;
  height: 24px;
  position: absolute;
  top: 0;
  left: 0;
  background: #627E51;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 8px;
`;

const Time = styled.span`
  font-size: 13px;
  line-height: 15px;
  color: #FFFFFF;
`;

const MobileLineIcon = styled.div `
  width: 12px;
  height: 12px;
  margin-right: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image:url(${props => props.iconImg});
`;

const MobileLine = () => {
  return (
    <MobileHead>
      <MobileLineIcon iconImg={wifi}/>
      <MobileLineIcon iconImg={reception}/>
      <MobileLineIcon iconImg={battery}/>
      <Time>12:30</Time>
    </MobileHead>
  )
};

export default MobileLine;