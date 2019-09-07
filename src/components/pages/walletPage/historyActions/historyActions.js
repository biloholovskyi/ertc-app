import React from 'react';
import styled from "styled-components";

import HistoryList from "./historyList/historyList";

const HistoryHead = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: rgba(57, 55, 56, 0.87);
  }
`;

const HistoryHeadButton = styled.button `
  background-color: transparent;
  border: none;
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HistoryActions = ({actions}) => {
  return (
    <>
      <HistoryHead>
        <HistoryHeadButton><span className="icon-graf"></span></HistoryHeadButton>
        <h3>История операций</h3>
        <HistoryHeadButton><span className="icon-search"></span></HistoryHeadButton>
      </HistoryHead>
      <HistoryList actions={actions}/>
    </>
  )
};

export default HistoryActions;