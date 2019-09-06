import React from 'react';
import styled from "styled-components";

import Logo from './ErtcLogo.svg';
import Euro from './euro.svg';

const WalletWrapper = styled.div `
  width: 100%;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(57, 55, 56, 0.1);
`;

const WalletPrice = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Icon = styled.div `
  width: 40px;
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url(${props => props.name === "ertc" ? Logo : Euro});
  background-position: center;
  background-size: ${props => props.name === "ertc" ? "cover" : "16px"};
  background-repeat: no-repeat;
  margin-right: 16px;
  background-color: #EFEFEF;
`;

const WalletCount = styled.div `
  font-size: 32px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #393738;
  span {
    margin-left: 6px;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
`;

const ButtonWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WalletButton = styled.button `
  width: 156px;
  height: 40px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #8DC045;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
`;

const Wallet = ({name, count}) => {
  return (
    <WalletWrapper>
      <WalletPrice>
        <Icon name={name}/>
        <WalletCount>{count}<span>{name}</span></WalletCount>
      </WalletPrice>
      <ButtonWrapper>
        <WalletButton>вывод средств</WalletButton>
        <WalletButton>Новый платеж</WalletButton>
      </ButtonWrapper>
    </WalletWrapper>
  )
};

export default Wallet;