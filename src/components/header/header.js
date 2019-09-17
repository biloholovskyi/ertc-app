import React from 'react';
import styled from "styled-components";
import {Route} from "react-router-dom";

import MobileLine from "../mobileLine/mobileLine";
import HeaderHome from "./headerHome/headerHome";
import HeaderValidation from "./headerValidation/headerValidation";
import HeaderNotification from "./headerNotifanction/headerNotifanction";
import HeaderMore from "./headerMore/headerMore";

import patternBg from './patternBg.svg';

const HeadBG = styled.header `
  width: 100%;
  position: relative;
  //padding-top: 24px;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 180px;
    top: 0;
    left: 0;
    background-image: url(${patternBg});
    background-position: center;
    background-size: cover;
  }
`;

const Header = ({showHead}) => {
  return (
    <HeadBG>
      {showHead}
      {/*<MobileLine/>*/}
      {/*<Route path="/" exact render={HeaderHome}/>*/}
      {/*<Route path="/wallet" render={HeaderHome}/>*/}
      {/*<Route path="/validation" exact render={HeaderValidation}/>*/}
      {/*<Route path="/notifanction" exact render={HeaderNotification}/>*/}
      {/*<Route path="/more" exact render={HeaderMore}/>*/}
    </HeadBG>
  )
};

export default Header;