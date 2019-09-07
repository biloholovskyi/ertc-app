import React from 'react';
import styled from "styled-components";

const ItemWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 0;
`;

const Info = styled.div `
  display: flex;
  align-items: center;
`;

const Avatar = styled.div `
  width: 40px;
  height: 40px;
  min-width: 40px;
  margin-right: 16px;
  border-radius: 50%;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.avatarImg});
`;

const Name = styled.div `
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #393738;
`;

const Desc = styled.div `
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: rgba(57, 55, 56, 0.56);
`;

const Count = styled.div `
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-align: right;
  letter-spacing: -0.02em;
  color: #393738;
  span {
    color: rgba(57, 55, 56, 0.56);
    font-size: 14px;
  }
`;

const HistoryItem = ({avatar, name, desc, count}) => {
  const countTrue = count.split(".");
  return (
    <ItemWrapper>
      <Info>
        <Avatar avatarImg={avatar}/>
        <div>
          <Name>{name}</Name>
          <Desc>{desc}</Desc>
        </div>
      </Info>
      <Count>{countTrue[0]}<span>.{countTrue[1]}</span></Count>
    </ItemWrapper>
  )
};

export default HistoryItem;