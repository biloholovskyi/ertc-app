import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

import store from "../../../store/store";

import Wallet from "../../wallet/wallet";

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

const WalletPage = () => {
  const walletArr = store.filter(item => item.name === "wallet");
  // const walletList = walletArr[0].arr.map((item) => {
  //   const {id, count, name} = item;
  //   return (
  //     <Wallet
  //       key={id}
  //       count={count}
  //       name={name}
  //     />
  //   );
  // });
  const {count, name} = walletArr[0].arr[0];
  return (
    <WalletWrapper>
      <NavLine>
        <Link to="/">
          <Back/>
        </Link>
        <Menu/>
      </NavLine>
      <Wallet count={count} name={name}/>
    </WalletWrapper>
  )
};

export default WalletPage;