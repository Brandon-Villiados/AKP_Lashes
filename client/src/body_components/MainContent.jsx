import React, { Component } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  grid-row: 2;
  width: 100%;
  height: 95%;
  justify-content: center;
  text-align: center;
`;

const Header = styled.h5`
  margin: 1em auto 0;
`;

const MainPhoto = styled.img`
  width: 90%;
  height: auto;
  margin: 1em;
  filter: drop-shadow(0 0 2px #727272);
  border-radius: 2px;
`;

const Section = styled.div`
  width: 100vw;
  height: 45%;
  background-color: #FBB5C6;
  justify-content: center;
  border-radius: 2px;
  filter: drop-shadow(0 1px 2px #727272);
`;

const JadePhoto = styled.img`
  width: 50%;
  height: auto;
  margin-top: 1.3em;
  filter: drop-shadow(0 0 2px #000);
  border-radius: 2px;
`;

const MainContent = (props) => {
  return (
    <MainWrapper>
      <Header>The Home of Beauty & Aesthetics</Header>
      <MainPhoto src='Arial_Cerrita.jpg' />
      <Section>
        <JadePhoto src='Jade_Profile.jpeg' />
      </Section>
    </MainWrapper>
  )
}

export default MainContent;