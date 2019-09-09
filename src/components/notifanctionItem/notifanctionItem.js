import React from 'react';
import styled from "styled-components";

const ItemBox = styled.div `
  padding-bottom: 16px;
  margin-bottom: 24px;
`;

const Top = styled.div `
  display: flex;
  align-items: center;
  span {
    font-size: 20px;
    margin-right: 14px;
    color: ${props => props.status === "more" ? "rgba(57, 55, 56, 0.87)" : "#8DC045"};
  }
`;


const Title = styled.div `
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #393738;

`;

const Desc = styled.div `
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: rgba(57, 55, 56, 0.56);
  margin-left: 34px;
`;

const NotifanctionItem = ({icon, title, message, status}) => {
  title = title.split("^");
  return (
    <ItemBox status={status}>
      <Top status={status}>
        <span className={"icon-" + icon}></span>
        <Title>{title[0]}<sup>{title[1]}</sup>{title[2]}</Title>
      </Top>
      {status === "notifanction" ? <Desc>{message}</Desc> : false}
    </ItemBox>
  )
};

export default NotifanctionItem;