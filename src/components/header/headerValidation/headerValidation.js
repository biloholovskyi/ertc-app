import React from 'react';
import styled from "styled-components";

import PlusIcon from './plus.svg';

const HeaderContent = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
  z-index: 20;
`;

const Title = styled.div `
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  margin-bottom: 3px;
  position: relative;
  width: 100%;
`;

const Desc = styled.div `
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.56);
`;

const Plus = styled.div `
  width: 24px;
  height: 24px;
  background-size: 14px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${PlusIcon});
  position: absolute;
  //top: 50%;
  margin-top: -24px;
  right: 21px;
`;

const HeaderValidation = () => {
  return (
    <HeaderContent>
      <Title>Валидации<Plus/></Title>
      <Desc>Всего валидировано: 1200 m<sup>2</sup></Desc>
    </HeaderContent>
  )
};

export default HeaderValidation;