import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router} from "react-router-dom";

import Header from "../header/header";
import NavBar from "../navBar/navBar";
import Content from "../content/content";

const AppWrapper = styled.div `
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileWrapper = styled.div`
  width: 100%;
  height: 812px;
  max-width: 375px;
  max-height: 812px;
  margin: 0 auto;
  -webkit-box-shadow: 10px 10px 47px -31px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 47px -31px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 47px -31px rgba(0,0,0,0.75);
  position: relative;
  overflow: hidden;
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <MobileWrapper>
          <Header/>
          <Content/>
          <NavBar/>
        </MobileWrapper>
      </AppWrapper>
    </Router>
  );
}

export default App;
