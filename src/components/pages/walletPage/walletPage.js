import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

import store from "../../../store/store";

import Wallet from "../../wallet/wallet";
import HistoryActions from "./historyActions/historyActions";

import BackImg from './back.svg';
import MenuImg from './menu.svg';

const WalletWrapper = styled.div `
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 700;
  background-color: #fff;
  padding: 16px;
  padding-bottom: 0;
`;

const NavLine = styled.div `
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLineButton = styled.button `
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  background-position: center;
  background-size: 16px;
  background-repeat: no-repeat;
`;

const Back = styled(NavLineButton) `
  background-image:url(${BackImg});
`;

const Menu = styled(NavLineButton) `
  background-image: url(${MenuImg});
  background-size: 24px;
`;

const WalletPage = ({id}) => {
  const walletArr = store.filter(item => item.name === "wallet");
  const current = walletArr[0].arr.filter(item => item.id === id);
  const {count, name} = current[0];
  return (
    <WalletWrapper>
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
      <HistoryActions actions={current[0].actions}/>
    </WalletWrapper>
  )
};

export default WalletPage;