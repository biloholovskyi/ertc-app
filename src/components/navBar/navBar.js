import React, {Component} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import ClickEffect from "./clickEffect";
import ValidationPage from "../pages/validationPage/validationPage";
import NotifanctionPage from "../pages/notifanctionPage/notifanctionPage";
import MorePage from "../pages/morePage/morePage";
import HomePage from "../pages/homePage/homePage";
import HeaderHome from "../header/headerHome/headerHome";
import HeaderValidation from "../header/headerValidation/headerValidation";
import HeaderNotification from "../header/headerNotifanction/headerNotifanction";
import HeaderMore from "../header/headerMore/headerMore";

const NavBarWrapper = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  background: #FFFFFF;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-end;
  z-index: 500;
  min-height: 62px;
`;

const NavBarLink = styled.div`
  width: 100%;
  height: 62px;
  position: relative;
  overflow: hidden;
  //border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
  .navBarLink {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 500;
    span {
      font-size: 25px;
      color: rgba(57, 55, 56, 0.56);
      margin-bottom: 5px;
    }
    .small {
      font-size: 7px;
      margin-bottom: 13px;
    }
  }
  .active {
    .name,
    span {
      color: #ADD47D;
    }
  }
`;

const NavBarLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 500;
  span {
    font-size: 25px;
    color: ${props => props.state ? "#ADD47D" : "rgba(57, 55, 56, 0.56)"};
    margin-bottom: 5px;
  }
  .small {
    font-size: 7px;
    margin-bottom: 13px;
  }
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${props => props.state ? "#ADD47D" : "rgba(57, 55, 56, 0.56)"};
`;

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        home: false,
        valid: false,
        not: false,
        more: false
      },
      active: {
        home: true,
        valid: false,
        not: false,
        more: false
      }
    }
  }
  runAnim = (el) => {
    this.setState(({data}) => {
      const newArr = {...data, [el]: true};
      return {
        data: newArr
      }
    })
  };

  stopAnim = (el) => {
    setTimeout(() => {
      this.setState(({data}) => {
        const newArr = {...data, [el]: "scale"};
        return {
          data: newArr
        }
      })
    }, 200);
    setTimeout(() => {
      this.setState(({data}) => {
        const newArr = {...data, [el]: false};
        return {
          data: newArr
        }
      })
    }, 250);
    setTimeout(() => {
      this.setState(({data}) => {
        const newArr = {...data, [el]: false};
        return {
          data: newArr
        }
      })
    }, 400);
  };

  changePage = (page, pageItem, header) => {
    this.setState(({active}) => {
      const newArr = {[page]: true};
      return {
        active: newArr
      }
    });
    this.props.openPage(pageItem, header);
  };

  render() {

    return (
      <NavBarWrapper>
        <NavBarLink onMouseDown={() => this.runAnim("home")} onMouseUp={() => this.stopAnim("home")}>
          <ClickEffect state={this.state.data.home}/>
          <NavBarLinkWrapper state={this.state.active.home} onClick={() => {this.changePage("home", <HomePage openPage={this.props.openPage}/>,  <HeaderHome/>)}}>
            <span className="icon-home"></span>
            <Name className="name" state={this.state.active.home}>Главный</Name>
          </NavBarLinkWrapper>
        </NavBarLink>
        <NavBarLink onMouseDown={() => this.runAnim("valid")} onMouseUp={() => this.stopAnim("valid")}>
          <ClickEffect state={this.state.data.valid}/>
          <NavBarLinkWrapper state={this.state.active.valid} onClick={() => {this.changePage("valid", <ValidationPage openPage={this.props.openPage}/>, <HeaderValidation/>)}}>
            <span className="icon-validation"></span>
            <Name className="name" state={this.state.active.valid}>Валидации</Name>
          </NavBarLinkWrapper>
        </NavBarLink>
        <NavBarLink onMouseDown={() => this.runAnim("not")} onMouseUp={() => this.stopAnim("not")}>
          <ClickEffect state={this.state.data.not}/>
          <NavBarLinkWrapper state={this.state.active.not} onClick={() => {this.changePage("not", <NotifanctionPage openPage={this.props.openPage}/>, <HeaderNotification/>)}}>
            <span className="icon-notifanction"></span>
            <Name className="name" state={this.state.active.not}>Уведомления</Name>
          </NavBarLinkWrapper>
        </NavBarLink>
        <NavBarLink onMouseDown={() => this.runAnim("more")} onMouseUp={() => this.stopAnim("more")}>
          <ClickEffect state={this.state.data.more}/>
          <NavBarLinkWrapper state={this.state.active.more} onClick={() => {this.changePage("more", <MorePage openPage={this.props.openPage}/>, <HeaderMore/>)}}>
            <span className="icon-more small"></span>
            <Name className="name" state={this.state.active.more}>Еще</Name>
          </NavBarLinkWrapper>
        </NavBarLink>
      </NavBarWrapper>
    )
  }
};