import React, {Component} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import ClickEffect from "./clickEffect";

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
  a {
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

const Name = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.01em;
  color: rgba(57, 55, 56, 0.56);
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
      }
    }
  }
  runAnim = (el) => {
    console.log(this.state.data[el]);
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
    }, 150);
    setTimeout(() => {
      this.setState(({data}) => {
        const newArr = {...data, [el]: false};
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
  };

  render() {
    return (
      <NavBarWrapper>
        <NavBarLink onMouseDown={() => this.runAnim("home")} onMouseUp={() => this.stopAnim("home")}>
          <ClickEffect state={this.state.data.home}/>
          <NavLink exact to="/" activeClassName="active">
            <span className="icon-home"></span>
            <Name className="name">Главный</Name>
          </NavLink>
        </NavBarLink>
        <NavBarLink onMouseDown={() => this.runAnim("valid")} onMouseUp={() => this.stopAnim("valid")}>
          <ClickEffect state={this.state.data.valid}/>
          <NavLink exact to="/validation" activeClassName="active">
            <span className="icon-validation"></span>
            <Name className="name">Валидации</Name>
          </NavLink>
        </NavBarLink>
        <NavBarLink onMouseDown={() => this.runAnim("not")} onMouseUp={() => this.stopAnim("not")}>
          <ClickEffect state={this.state.data.not}/>
          <NavLink exact to="/notifanction" activeClassName="active">
            <span className="icon-notifanction"></span>
            <Name className="name">Уведомления</Name>
          </NavLink>
        </NavBarLink>
        <NavBarLink onMouseDown={() => this.runAnim("more")} onMouseUp={() => this.stopAnim("more")}>
          <ClickEffect state={this.state.data.more}/>
          <NavLink exact to="/more" activeClassName="active">
            <span className="icon-more small"></span>
            <Name className="name">Еще</Name>
          </NavLink>
        </NavBarLink>
      </NavBarWrapper>
    )
  }
};