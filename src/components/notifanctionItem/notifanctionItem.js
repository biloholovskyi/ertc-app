import React from 'react';
import styled from "styled-components";

const ItemBox = styled.div `
  display: flex;
  padding-bottom: 16px;
  margin-bottom: 24px;
  span {
    font-size: 20px;
    margin-right: 14px;
    color: ${props => props.status === "more" ? "rgba(57, 55, 56, 0.87)" : "#8DC045"};
  }
`;

const Text = styled.div `

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
`;

const NotifanctionItem = ({icon, title, message, status}) => {
  title = title.split("^");
  return (
    <ItemBox status={status}>
      <span className={"icon-" + icon}></span>
      <Text>
        <Title>{title[0]}<sup>{title[1]}</sup>{title[2]}</Title>
        {status === "notifanction" ? <Desc>{message}</Desc> : false}
      </Text>
    </ItemBox>
  )
};

export default NotifanctionItem;