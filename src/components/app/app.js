import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "../header/header";
import NavBar from "../navBar/navBar";
import Content from "../content/content";
import WalletPage from "../pages/walletPage/walletPage";
import HomePage from "../pages/homePage/homePage";

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

function App() {
  return (
    <Router>
      <AppWrapper>
        <MobileWrapper>
          <Header/>
          <Content/>
          <Switch>
            <Route path="/wallet/:id" exact render={
              ({match}) => {
                const {id} = match.params;
                return <WalletPage id={id}/>
              }
            }/>
          </Switch>
          <NavBar/>
        </MobileWrapper>
      </AppWrapper>
    </Router>
  );
}

export default App;
