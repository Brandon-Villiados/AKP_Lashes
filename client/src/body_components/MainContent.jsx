import React, { Component } from 'react';
import styled from 'styled-components';
import SubContent from '../body_components/SubContent.jsx';

const MainWrapper = styled.div`
  grid-row: 2;
  width: 100%;
  height: 100%;
  justify-content: center;
  text-align: center;
  z-index: 10;

  h1, h5 {
    font-family: 'Quicksand', sans-serif;
  }
`;

const SubWrapper = styled.div`
  grid-row: 3;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Header = styled.h5`
  margin: 1em auto .5em;
  color: rgb(92, 92, 92);
  outline-style: solid #000;
  font-family: 'Quicksand', sans-serif;
`;

const MainPhoto = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: .5em;
  filter: drop-shadow(0 0 1px #727272);
  border-radius: 2px;
`;

const Section = styled.div`
  width: 100vw;
  height: 52%;
  background-color: #FBB5C6;
  justify-content: center;
  border-radius: 2px;
  z-index: 50;
  filter: drop-shadow(0 0 1px #727272);

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
  margin: 1em auto .1em;
  border-radius: 2px;
  filter: drop-shadow(0 0 1px #727272);
`;

const LearnBtn = styled.button`
  width: 33%;
  height: auto;
  margin: 1em auto;
  border-radius: 15px;
  border-color: #fff;
  background-color: #ff961d;
  border: none;
  font-size: 1em;

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
      <SubWrapper>
        <SubContent />
      </SubWrapper>
    </MainWrapper>
  )
}

export default MainContent;