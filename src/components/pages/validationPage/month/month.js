import React from 'react';
import styled from "styled-components";

import ValidationAction from "./validationAction/validationAction";

const NameMonth = styled.div `
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: rgba(57, 55, 56, 0.87);
  padding-bottom: 20px;
  padding-top: 10px;
  position: relative;
  display: ${props => props.name === "current" ? "none" : "block"};
  span {
    background-color: #fff;
    padding: 0 15px;
    display: inline;
    position: relative;
    z-index: 10;
  }
`;

const LineMonth = styled.div `
  width: 100%;
  height: 0.5px;
  background: rgba(57, 55, 56, 0.1);
  position: absolute;
  top: 19px;
  left: 0;
`;

const Month = ({name}) => {
  const nameMonth = name === "current" ? false : name === "previous" ? "прошлый месяц" : name;
  return (
    <>
      <NameMonth name={name}>
        <LineMonth/>
        <span>{nameMonth}</span>
      </NameMonth>
      <ValidationAction/>
      <ValidationAction/>
      <ValidationAction/>
    </>
  )
};

export default Month;