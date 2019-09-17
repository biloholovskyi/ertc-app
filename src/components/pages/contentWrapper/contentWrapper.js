import React from 'react';
import styled from "styled-components";

const ContentWrapper = styled.div `
  height: ${props => props.status ? "100%" : "0%"};
  opacity: ${props => props.status ? "1" : "0"};
  width: 100%;
  position: relative;
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 24px 16px 70px 16px;
  overflow: auto;
  -webkit-transition: all .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);
   -moz-transition: all .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);
     -o-transition: all .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);
        transition: all .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { width: 0 !important }
`;

export default ContentWrapper;