import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

import home from './icon/home.svg';
import more from './icon/more.svg';
import notifanction from './icon/notifanction.svg';
import validation from './icon/validation.svg';

const NavBarWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background: #FFFFFF;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  padding: 9px 0 9px 0;
  display: flex;
  align-items: center;
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
  }
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 5px;
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${props => props.active ? "#ADD47D" : "rgba(57, 55, 56, 0.56)"};
`;

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavBarLink>
        <Link to="/">
          <Img src={home}/>
          <Name active={true}>Главный</Name>
        </Link>
      </NavBarLink>
      <NavBarLink>
        <Link to="/validation">
          <Img src={validation}/>
          <Name>Валидации</Name>
        </Link>
      </NavBarLink>
      <NavBarLink>
        <Link to="/notifanction">
          <Img src={notifanction}/>
          <Name>Уведомления</Name>
        </Link>
      </NavBarLink>
      <NavBarLink>
        <Link to="/more">
          <Img src={more}/>
          <Name>Еще</Name>
        </Link>
      </NavBarLink>
    </NavBarWrapper>
  )
};

export default NavBar;