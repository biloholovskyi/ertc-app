import React from 'react';
import styled from "styled-components";
import Wallet from "../wallet/wallet";
import {Route} from "react-router-dom";

import HomePage from "../pages/homePage/homePage";
import ValidationPage from "../pages/validationPage/validationPage";
import NotifanctionPage from "../pages/notifanctionPage/notifanctionPage";
import MorePage from "../pages/morePage/morePage";

import Plus from '../pages/homePage/plus.svg';

const ContentBg = styled.div `
  background-color: #fff;
  height: calc(100% - (24px + 14px + 110px + 61px));
  width: 100%;
  position: absolute;
  bottom: 61px;
  left: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px 16px;
  overflow: auto;
`;

const Content = () => {
  return (
    <ContentBg>
      <Route path="/" exact render={HomePage}/>
      <Route path="/validation" exact render={ValidationPage}/>
      <Route path="/notifanction" exact render={NotifanctionPage}/>
      <Route path="/more" exact render={MorePage}/>
    </ContentBg>
  )
};

export default Content;