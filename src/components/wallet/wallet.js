import React, {Component} from 'react';
import styled, {keyframes} from "styled-components";
import {NavLink, Link} from "react-router-dom";

import Logo from './ErtcLogo.svg';
import Euro from './euro.svg';
import WalletPage from "../pages/walletPage/walletPage";
import HeaderHome from "../header/headerHome/headerHome";
import Coin from "../coin/coin";

const UpdateAnim = keyframes`
  0% {
    transform: translateX(0px); 
  }
  50% {
    transform: translateX(-500px); 
  }
  100% {
    transform: translateX(0px); 
  }
`;

const WalletWrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;
  padding-bottom: ${props => props.pageType === "home" ? "24px" : "16px"};
  border-bottom: 0.5px solid rgba(57, 55, 56, 0.1);
  .updateAnim {
    animation: ${UpdateAnim} .5s linear;
  }
`;

const WalletPrice = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
  .walletWrapper {
    display: flex;
    align-items: center;
  }
  .coin-btn {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -10px;
    color: rgba(57, 55, 56, 0.56);
    font-size: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Icon = styled.div`
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

const WalletCount = styled.div`
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
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WalletButton = styled.button`
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

const WalletDotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .activeDot {
    background-color:  #ADD47D !important;
  }
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #E5E5E5;
  margin: 0 4px;
  &:hover {
    cursor: pointer;
  }
`;

const Hower = styled.div `
  &:hover {
    cursor: pointer;
  }
`;

export default class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      update: false,
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.id !== this.props.id) {

      setTimeout(() => {
        this.setState(() => {
          return {
            id: this.props.id,
            // update: true,
          }
        });
      }, 100);



      setTimeout(() => {
        this.setState(() => {
          return {
            update: false
          }
        });
      }, 600)
    }
  }

  startSwipe = () => {
    this.setState(() => {
      return {
        update: true,
      }
    });
  };

  render() {
    const {name, count, page, openPage, changeWallet} = this.props;
    const {id, update, translate} = this.state;
    return (
      <WalletWrapper pageType={page}>
        {
          page === "home" ? <WalletPriceView name={name} count={count} id={id} openPage={openPage}/> : update === false ? (
            <WalletPrice onTouchMove={() => {changeWallet("1")}}>
              <Icon name={name}/>
              <WalletCount>{count}<span>{name}</span></WalletCount>
            </WalletPrice>
          ) : (
            <WalletPrice className="updateAnim" onTouchMove={() => {changeWallet("1")}}>
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
          page === "wallet" ? <WalletDotView id={id} changeWallet={changeWallet} startSwipe={this.startSwipe}/> : false
        }
      </WalletWrapper>
    )
  }
};

const WalletDotView = ({id, changeWallet, startSwipe}) => {
  return (
    <>
      {
        id === "1" ? (
          <WalletDotWrapper>
            <Dot className="activeDot" onClick={() => {startSwipe(); changeWallet("1")}}/>
            <Dot onClick={() => {startSwipe(); changeWallet("2")}}/>
          </WalletDotWrapper>
        ) : (
          <WalletDotWrapper>
            <Dot onClick={() => {startSwipe(); changeWallet("1")}}/>
            <Dot className="activeDot" onClick={() => {startSwipe(); changeWallet("2")}}/>
          </WalletDotWrapper>
        )
      }

    </>
  )
};

const WalletPriceView = ({name, count, id, openPage}) => {
  return (
    <Hower>
      <WalletPrice>
        <div className="walletWrapper" onClick={() => {openPage(<WalletPage id={id} openPage={openPage}/>, <HeaderHome/>)}}>
          <Icon name={name}/>
          <WalletCount>{count}<span>{name}</span></WalletCount>
        </div>
        <span className="icon-import coin-btn" onClick={() => {openPage(<Coin id={id} openPage={openPage}/>, <HeaderHome/>)}}></span>
      </WalletPrice>
    </Hower>
  )
};