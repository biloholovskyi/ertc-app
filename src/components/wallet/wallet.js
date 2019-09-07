import React from 'react';
import styled from "styled-components";
import {NavLink, Link} from "react-router-dom";

import Logo from './ErtcLogo.svg';
import Euro from './euro.svg';

const WalletWrapper = styled.div `
  width: 100%;
  margin-bottom: 24px;
  padding-bottom: ${props => props.pageType === "home" ? "24px" : "16px"};
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

const WalletDotWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  .activeDot {
    div {
      background-color:  #ADD47D !important;
    }
  }
`;

const Dot = styled.div `
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #E5E5E5;
  margin: 0 4px;
`;

const Wallet = ({name, count, page, id}) => {
  return (
    <WalletWrapper pageType={page}>
      {
        page === "home" ? <WalletPriceView name={name} count={count} id={id}/> : (
          <WalletPrice>
            <Icon name={name}/>
            <WalletCount>{count}<span>{name}</span></WalletCount>
          </WalletPrice>
        )
      }
      <ButtonWrapper>
        <WalletButton>вывод средств</WalletButton>
        <WalletButton>Новый платеж</WalletButton>
      </ButtonWrapper>
      {
        page === "wallet" ? <WalletDotView/> : false
      }
    </WalletWrapper>
  )
};

const WalletDotView = () => {
  return (
    <WalletDotWrapper>
      <NavLink exact to="/wallet/1" activeClassName="activeDot"><Dot/></NavLink>
      <NavLink exact to="/wallet/2" activeClassName="activeDot"><Dot/></NavLink>
    </WalletDotWrapper>
  )
};

const WalletPriceView = ({name, count, id}) => {
  return (
    <Link to={`/wallet/${id}`}>
      <WalletPrice>
        <Icon name={name}/>
        <WalletCount>{count}<span>{name}</span></WalletCount>
      </WalletPrice>
    </Link>
  )
};

export default Wallet;