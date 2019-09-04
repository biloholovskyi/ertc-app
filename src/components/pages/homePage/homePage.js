import React from 'react';
import styled from "styled-components";

import Wallet from "../../wallet/wallet";

import Plus from "./plus.svg";

const AddWallet = styled.button `
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #FFFFFF;
  height: 48px;
  background: #8DC045;
  border-radius: 1000px;
  padding: 0 20px 0 12px;
  margin: 0 auto;
`;

const PlusIcon = styled.div `
  width: 24px;
  min-width: 24px;
  height: 24px;
  background-position: center;
  background-size: 14px;
  background-repeat: no-repeat;
  background-image:url(${Plus});
  margin-right: 12px;
`;

const HomePage = () => {
  return (
    <div>
      <Wallet/>
      <Wallet/>
      <AddWallet><PlusIcon/>Добавить счет</AddWallet>
    </div>
  )
};

export default HomePage;