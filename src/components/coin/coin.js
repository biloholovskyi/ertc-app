import React, {Component} from 'react';
import styled from "styled-components";

import store from "../../store/store";

import HeaderHome from "../header/headerHome/headerHome";
import HomePage from "../pages/homePage/homePage";

import BackImg from './back.svg';
import SearchImg from './search.svg';

const WalletWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: ${props => props.top ? props.top : "100%"};
  left: 0;
  z-index: 700;
  background-color: #fff;
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
  padding: 16px 16px 0 16px;
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

const Search = styled(NavLineButton)`
  background-image: url(${SearchImg});
`;

const Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em; 
  color: #393738;
`;

const Table = styled.div`
  height: calc(100% - 50px);
  max-height: calc(100% - 50px);
  overflow: auto;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { width: 0 !important }
  .t-wrapper {
    display: flex;
  }
  .first {
    width: 102px;
  }
  .second {
    width: 103px;
  }
  .third {
    text-align: right;
    width: 100%;
    max-width: 119px;
  }
`;

const THead = styled.div`
  padding: 18px 16px;
  border: 1px solid rgba(57, 55, 56, 0.1);
  border-left: none;
  border-right: none;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  justify-content: space-between;
  letter-spacing: -0.01em;
  color: rgba(57, 55, 56, 0.56);
`;

const TWrapper = styled.div`
   overflow: auto;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { width: 0 !important }
`;

const TBody = styled.div`
  margin: 0 16px;
  border-bottom: 0.5px solid rgba(57, 55, 56, 0.1);
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;  
  color: #393738;
  padding: 16px 0;
`;

const TItem = styled.div`
  max-height: 100%;
`;

export default class Coin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStatus: false,
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
    const {openPage, id} = this.props;
    const {showStatus} = this.state;
    const walletArr = store.filter(item => item.name === "wallet");
    const current = walletArr[0].arr.filter(item => item.id === id);
    return (
      <>
        {showStatus ? <View top="0%" current={current} id={id} openPage={openPage}/> : <View top="100%" current={current} id={id} openPage={openPage}/>}
      </>
    )
  }
};

const View = ({top, current, id, openPage}) => {
  const coins = current[0].coin;
  const coinList = coins.map((item) => {
    const {id, idValid, coordination} = item;
    return (
      <TBody>
        <div className="t-wrapper">
          <TItem className="first">{id}</TItem>
          <TItem className="second">{idValid}</TItem>
        </div>
        <TItem className="third">{coordination}</TItem>
      </TBody>
    )
  });
  return (
    <WalletWrapper top={top}>
      <NavLine>
        <Back onClick={() => {openPage(<HomePage openPage={openPage}/>, <HeaderHome/>)}}/>
        <Title>Информация о коинах</Title>
        <Search/>
      </NavLine>
      <Table>
        <THead>
          <div className="t-wrapper">
            <TItem className="first">ID коина</TItem>
            <TItem className="second">Дата валидации</TItem>
          </div>
          <TItem className="third">Координаты</TItem>
        </THead>
        <TWrapper>
          {coinList}
        </TWrapper>
      </Table>
    </WalletWrapper>
  )
};