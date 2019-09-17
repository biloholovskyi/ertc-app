import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "../header/header";
import NavBar from "../navBar/navBar";
import Content from "../content/content";
import WalletPage from "../pages/walletPage/walletPage";
import HomePage from "../pages/homePage/homePage";
import ValidationPage from "../pages/validationPage/validationPage";
import NotifanctionPage from "../pages/notifanctionPage/notifanctionPage";
import MorePage from "../pages/morePage/morePage";
import MobileLine from "../mobileLine/mobileLine";
import HeaderHome from "../header/headerHome/headerHome";
import HeaderValidation from "../header//headerValidation/headerValidation";
import HeaderNotification from "../header//headerNotifanction/headerNotifanction";
import HeaderMore from "../header//headerMore/headerMore";

const AppWrapper = styled.div `
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileWrapper = styled.div`
  width: 100%;
  height:100vh;
  max-height: 100%;
  margin: 0 auto;
  -webkit-box-shadow: 10px 10px 47px -31px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 47px -31px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 47px -31px rgba(0,0,0,0.75);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStatus: false,
      showPage: <HomePage openPage={this.openPage}/>,
      showHead: <HeaderHome/>
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(({showStatus}) => {
        return {
          showStatus: true
        }
      })
    }, 200);
  }

  componentWillUnmount() {
    setTimeout(() => {
      this.setState(({showStatus}) => {
        return {
          showStatus: false
        }
      })
    }, 100);
  }

  openPage = (page, head) => {
    this.setState(({showStatus}) => {
      return {
        showPage: page,
        showHead: head
      }
    })
  };

  render() {
    const {showPage, showHead} = this.state;
    return (
      <>
        <AppWrapper>
          <MobileWrapper>
            <Header showHead={showHead}/>
            {showPage}
            {/*<Switch>*/}
            {/*  /!*<Route path="/" exact render={HomePage}/>*!/*/}
            {/*  /!*<Route path="/wallet/" render={HomePage}/>*!/*/}
            {/*  <Route path="/validation" exact render={ValidationPage}/>*/}
            {/*  <Route path="/notifanction" exact render={NotifanctionPage}/>*/}
            {/*  <Route path="/more" exact render={MorePage}/>*/}
            {/*  <Route path="/wallet/:id" exact render={*/}
            {/*    ({match}) => {*/}
            {/*      const {id} = match.params;*/}
            {/*      return <WalletPage id={id}/>*/}
            {/*    }*/}
            {/*  }/>*/}
            {/*</Switch>*/}
            <NavBar openPage={this.openPage}/>
          </MobileWrapper>
        </AppWrapper>
      </>
    );
  }
}