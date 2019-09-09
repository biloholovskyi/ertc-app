import React, {Component} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

import store from "../../../store/store";

import Wallet from "../../wallet/wallet";
import HistoryActions from "./historyActions/historyActions";

import BackImg from './back.svg';
import MenuImg from './menu.svg';

const WalletWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: ${props => props.top ? props.top : "100%"};
  left: 0;
  z-index: 700;
  background-color: #fff;
  padding: 16px;
  padding-bottom: 0;
  -webkit-transition: all .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);
   -moz-transition: all .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);
     -o-transition: all .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);
        transition: all .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);
`;

const NavLine = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLineButton = styled.button`
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  background-position: center;
  background-size: 16px;
  background-repeat: no-repeat;
`;

const Back = styled(NavLineButton)`
  background-image:url(${BackImg});
`;

const Menu = styled(NavLineButton)`
  background-image: url(${MenuImg});
  background-size: 24px;
`;

export default class WalletPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStatus: false
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

  render() {
    const {id} = this.props;
    const {showStatus} = this.state;
    const walletArr = store.filter(item => item.name === "wallet");
    const current = walletArr[0].arr.filter(item => item.id === id);
    return (
      <>
        {showStatus ? <View item={current[0]} top="0%"/> : <View item={current[0]} top="100%"/>}
      </>
    )
  }
};

const View = ({item, top}) => {
  const {count, name} = item;
  return (
    <WalletWrapper top={top}>
      <NavLine>
        <Link to="/">
          <Back/>
        </Link>
        <Menu/>
      </NavLine>
      <Wallet
        count={count}
        name={name}
        page="wallet"
      />
      <HistoryActions actions={item.actions}/>
    </WalletWrapper>
  )
};