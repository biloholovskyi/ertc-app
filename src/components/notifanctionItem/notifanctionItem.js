import React from 'react';
import styled from "styled-components";

import confirm from './icon/confirm.svg';
import downloud from './icon/downloud.svg';
import important from './icon/import.svg';
import warning from './icon/warning.svg';

const ItemBox = styled.div `
  display: flex;
  padding-bottom: 16px;
  margin-bottom: 24px;
`;

const Icon = styled.div `
  width: 24px;
  min-width: 24px;
  height: 24px;
  margin-right: 14px;
  background-position: center;
  background-size: 20px;
  background-repeat: no-repeat;
  background-image: url(${props => props.srcImg});
`;

const Text = styled.div `

`;

const Title = styled.div `
  font-weight: 700;
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

const NotifanctionItem = () => {
  return (
    <ItemBox>
      <Icon srcImg={important}/>
      <Text>
        <Title>Обновления условий валидации</Title>
        <Desc>Уважаемая Carlos, ознакомтесь с обновл...</Desc>
      </Text>
    </ItemBox>
  )
};

export default NotifanctionItem;