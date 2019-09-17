import React from 'react';
import styled from "styled-components";

const ClickBox = styled.div `
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #627E51;
  opacity: ${props => props.status === "scale" ? "0" : props.status === true ? ".35" : "0"};
  transition: all .3s ease-in-out;
  top: 50%;
  left: 50%;
  margin-top: -75px;
  margin-left: -75px;
  transform: ${props => props.status === "scale" ? "scale(1)" : props.status ? "scale(1)" : "scale(0)"};
`;

const ClickEffect = ({state}) => {
  return (
    <ClickBox status={state}/>
  )
};

export default ClickEffect;