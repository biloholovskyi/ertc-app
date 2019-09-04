import React from 'react';
import styled from 'styled-components';

const ActionWrapper = styled.div `
  width: 100%;
  padding-bottom: 12px;
  margin-bottom: 20px;
`;

const Info = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2px;
`;

const Name = styled.div `
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em; 
  color: #393738;
`;

const Date = styled.div `
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  letter-spacing: -0.02em;
  color: rgba(57, 55, 56, 0.56);
`;

const Status = styled.div `
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${props => props.state === "moderation" ? "#F5A33F" : props.state === "confirmed" ? "#8DC045" : "#EB5757"};
  margin-bottom: 4px;
`;

const Desc = styled.div `
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #393738;
`;

const ValidationAction = () => {
  return (
    <ActionWrapper>
      <Info>
        <Name>45m<sup>2</sup></Name>
        <Date>12 Июля 2019, 20:28</Date>
      </Info>
      <Status state="moderation">На модерации</Status>
      <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing</Desc>
    </ActionWrapper>
  )
};

export default ValidationAction;