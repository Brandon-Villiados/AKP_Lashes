import React, { Component } from 'react';
import styled from 'styled-components';

const SoonImg = styled.img`
  grid-row: 2;
  width: 100vw;
  height: auto;
  margin-top: 3em;
  background-color: #FBB5C6;
`;

const ComingSoon = (props) => {
  return (
    <SoonImg src='Coming_Soon_2.jpg' />
  )
};

export default ComingSoon;