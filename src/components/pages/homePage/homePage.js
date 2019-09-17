import React, {Component} from 'react';
import styled from "styled-components";
import {withRouter} from "react-router";

import store from "../../../store/store";

import Wallet from "../../wallet/wallet";
import ContentWrapper from "../contentWrapper/contentWrapper";

import Plus from "./plus.svg";
import NotifanctionItem from "../../notifanctionItem/notifanctionItem";


const AddWallet = styled.button`
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

const PlusIcon = styled.div`
  width: 24px;
  min-width: 24px;
  height: 24px;
  background-position: center;
  background-size: 14px;
  background-repeat: no-repeat;
  background-image:url(${Plus});
  margin-right: 12px;
`;

export default class HomePage extends Component {
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
    const walletArr = store.filter(item => item.name === "wallet");
    const walletList = walletArr[0].arr.map((item) => {
      const {id, count, name} = item;
      console.log(id);
      return (
        <Wallet
          key={id}
          count={count}
          name={name}
          page="home"
          id={id}
          openPage={this.props.openPage}
        />
      );
    });

    return (
      <>
        {
          this.state.showStatus ? <View walletList={walletList} status={true}/> : <View walletList={walletList} status={false}/>
        }
      </>
    )
  }
};

const View = ({walletList, status}) => {
  return (
    <ContentWrapper status={status}>
      {walletList}
      <AddWallet><PlusIcon/>Добавить счет</AddWallet>
    </ContentWrapper>
  )
};