import React, { Component } from 'react';
import styled from 'styled-components';
import ContactInfo from '../footer_components/ContactInfo.jsx';

const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 100%;
`;

const ClassicLash = styled.div`
  grid-row: 1;
  width: 100%;
  height: 90%;
  margin: 1.5em auto;
  background-color: rgba(250, 182, 198, .85);

  h1 {
    margin-top: .5em;
  }

  img {
    width: 100%;
    height: auto;
    margin-top: 1em;
    border-radius: 2px;
  }
`;

const CustomLash = styled.div`
  grid-row: 2;
  margin: 1em auto;
  width: 100%;
  height: 90%;
  background-color: rgba(250, 182, 198, .85);

  h1 {
    margin-top: .5em;
  }

  img {
    width: 100%;
    height: auto;
    margin-top: 1em;
    border-radius: 2px;
  }
`;

const LearnBtn = styled.div`
  width: 33%;
  height: auto;
  margin: 0.4em auto;
  border-style: solid;
  border-width: thin;
  border-color: #000;
  border-radius: 15px;

  h5 {
    margin: auto;
    color: #000;
    padding: 5px;
  }

  h5:hover {
    color: #fff;
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