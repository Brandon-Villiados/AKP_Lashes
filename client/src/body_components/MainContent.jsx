import React, { Component } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  grid-row: 2;
  width: 100%;
  height: 95%;
  justify-content: center;
  text-align: center;
  z-index: 10;
`;

const Header = styled.h5`
  margin: 1.5em auto 0;
  color: rgb(92, 92, 92);
  outline-style: solid #000;
`;

const MainPhoto = styled.img`
  width: 90%;
  height: auto;
  margin: 1.5em 1em;
  filter: drop-shadow(0 0 2px #727272);
  border-radius: 2px;
`;

const Section = styled.div`
  width: 100vw;
  height: 51%;
  background-color: #FBB5C6;
  justify-content: center;
  border-radius: 2px;
  z-index: 50;
  /* filter: drop-shadow(0px -2px 2px #727272); */

  h1 {
    padding-top: .5em;
  }

  @media (max-width: 377px) {
    width: 377px;
  }
`;

const VoluminousLash = styled.img`
  width: 100%;
  height: auto;
  margin: 1em auto 0;
  border-radius: 2px;
  filter: drop-shadow(0 0 1px #727272);
`;

const LearnBtn = styled.div`
  width: 33%;
  height: auto;
  margin: 0.4em auto;
  border-style: solid;
  border-width: thin;
  border-color: #fff;
  border-radius: 15px;

  h5 {
    margin: auto;
    color: #fff;
    padding: 5px;
  }

  h5:hover {
    color: #000;
    border-style: solid;
    border-width: thin;
    border-color: #fde79b;
    background-color: #fde79b;
    border-radius: 15px;
  }

`;

const MainContent = (props) => {
  return (
    <MainWrapper>
      <Header>The Home of Beauty & Aesthetics</Header>
      <MainPhoto src='AKP_Action_Kiana.jpg' alt='AKP_Action_Kiana.jpg'/>
      <Section>
        <h1>Voluminous Lashes</h1>
        <VoluminousLash src='Kiana_Closeup.jpg' alt='Kiana_Closeup.jpg'/>
        <LearnBtn>
          <h5>Learn More</h5>
        </LearnBtn>
      </Section>
    </MainWrapper>
  )
}

export default MainContent;