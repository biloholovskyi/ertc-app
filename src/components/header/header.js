import React from 'react';
import styled from "styled-components";
import {Route} from "react-router-dom";

import MobileLine from "../mobileLine/mobileLine";
import HeaderHome from "./headerHome/headerHome";

import patternBg from './patternBg.svg';

const HeadBG = styled.header `
  width: 100%;
  height: 180px;
  background-image: url(${patternBg});
  background-position: center;
  position: relative;
  padding-top: calc(24px + 14px);
`;

const Header = () => {
  return (
    <HeadBG>
      <MobileLine/>
      <Route path="/" exact render={HeaderHome}/>
    </HeadBG>
  )
};

export default Header;