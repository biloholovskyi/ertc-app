import React, {Component} from 'react';
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";

import HomePage from "../pages/homePage/homePage";
import ValidationPage from "../pages/validationPage/validationPage";
import NotifanctionPage from "../pages/notifanctionPage/notifanctionPage";
import MorePage from "../pages/morePage/morePage";

const ContentWrapper = styled.div `
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 24px 16px 70px 16px;
  overflow: auto;
  transition: all 1s;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { width: 0 !important }
  
`;

export default class Content extends Component {
  render() {
    return (
      <ContentWrapper>
        <Switch>
          <Route path="/" exact render={HomePage}/>
          <Route path="/wallet/" render={HomePage}/>
          <Route path="/validation" exact render={ValidationPage}/>
          <Route path="/notifanction" exact render={NotifanctionPage}/>
          <Route path="/more" exact render={MorePage}/>
        </Switch>
      </ContentWrapper>
    )
  }
};