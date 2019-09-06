import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const NavBarWrapper = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  background: #FFFFFF;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  padding: 9px 0 9px 0;
  display: flex;
  align-items: flex-end;
  z-index: 500;
  min-height: 62px;
`;

const NavBarLink = styled.div`
  width: 100%;
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

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavBarLink>
        <NavLink exact to="/" activeClassName="active">
          <span className="icon-home"></span>
          <Name className="name">Главный</Name>
        </NavLink>
      </NavBarLink>
      <NavBarLink>
        <NavLink exact to="/validation" activeClassName="active">
          <span className="icon-validation"></span>
          <Name className="name">Валидации</Name>
        </NavLink>
      </NavBarLink>
      <NavBarLink>
        <NavLink exact to="/notifanction" activeClassName="active">
          <span className="icon-notifanction"></span>
          <Name className="name">Уведомления</Name>
        </NavLink>
      </NavBarLink>
      <NavBarLink>
        <NavLink exact to="/more" activeClassName="active">
          <span className="icon-more small"></span>
          <Name className="name">Еще</Name>
        </NavLink>
      </NavBarLink>
    </NavBarWrapper>
  )
};

export default NavBar;