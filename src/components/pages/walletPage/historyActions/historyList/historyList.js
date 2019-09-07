import React from 'react';
import styled from 'styled-components';


import HistoryItem from "./historyItem/historyItem";

const HistoryListWrapper = styled.div `
  overflow: auto;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { width: 0 !important }
  max-height: calc(100% - 227px);
  margin-bottom: 0;
  padding-bottom: 16px;
`;

const HistoryList = ({actions}) => {
  const actionsList = actions.map((item => {
    const {id, avatar, name, desc, count} = item;
    return (
      <HistoryItem
        key={id}
        avatar={avatar}
        name={name}
        desc={desc}
        count={count}
      />
    )
  }));
  return (
    <HistoryListWrapper>
      {actionsList}
    </HistoryListWrapper>
  )
};

export default HistoryList;