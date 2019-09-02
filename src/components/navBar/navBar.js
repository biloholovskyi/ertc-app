import React from 'react';
import styled from "styled-components";

import home from './icon/home.svg';
import more from './icon/more.svg';
import notifanction from './icon/notifanction.svg';
import validation from './icon/validation.svg';

const NavBarWrapper = styled.div `
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

const NavBarLink = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img `
  width: 24px;
  height: 24px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 5px;
`;

const Name = styled.div `
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
        <Img src={home}/>
        <Name active={true}>Главный</Name>
      </NavBarLink>
      <NavBarLink>
        <Img src={validation}/>
        <Name>Валидации</Name>
      </NavBarLink>
      <NavBarLink>
        <Img src={notifanction}/>
        <Name>Уведомления</Name>
      </NavBarLink>
      <NavBarLink>
        <Img src={more}/>
        <Name>Еще</Name>
      </NavBarLink>
    </NavBarWrapper>
  )
};

export default NavBar;