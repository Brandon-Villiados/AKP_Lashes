import React, { Component } from 'react';
import styled from 'styled-components';
import ContactInfo from '../footer_components/ContactInfo.jsx';

const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 100%;

  h1, h5 {
    font-family: 'Quicksand', sans-serif;
  }
`;

const ClassicLash = styled.div`
  grid-row: 1;
  width: 100%;
  height: 95%;
  margin: .9em auto .8em;
  background-color: rgba(250, 182, 198);
  filter: drop-shadow(0 0 1px #727272);

  h1 {
    margin-top: .5em;
  }

  img {
    width: 100%;
    height: auto;
    margin: 1em auto .2em;
    border-radius: 2px;
  }
`;

const CustomLash = styled.div`
  grid-row: 2;
  margin: .8em auto .7em;
  width: 100%;
  height: 95%;
  background-color: rgba(250, 182, 198);
  filter: drop-shadow(0 0 1px #727272);

  h1 {
    margin-top: .5em;
  }

  img {
    width: 100%;
    height: auto;
    margin-top: 1em;
    border-radius: 2px;
    margin: 1em auto .3em;
  }
`;

const LearnBtn = styled.button`
  width: 33%;
  height: auto;
  margin: 0.6em auto 0.5em;
  border-radius: 15px;
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

const ClassicBtn = styled.div`
  grid-row: 2;
  size: 100% 100%;
`;

const SubContent = (props) => {
  return(
    <ContentWrap>
      <ClassicLash>
        <h1>Classic Lashes</h1>
        <img src="Kiana_Closeup.jpg" alt="Kiana_Closeup.jpg"/>
        <LearnBtn>
          <h5>Learn More</h5>
        </LearnBtn>
      </ClassicLash>
      <CustomLash>
        <h1>Custom Lashes</h1>
        <img src="Kiana_Closeup.jpg" alt="Kiana_Closeup.jpg"/>
        <LearnBtn>
          <h5>Learn More</h5>
        </LearnBtn>
      </CustomLash>
      <ContactInfo />
    </ContentWrap>
  )
}

export default SubContent;