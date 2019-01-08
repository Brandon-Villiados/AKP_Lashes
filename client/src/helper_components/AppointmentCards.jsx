import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 90%;
  height: auto;
  background-color: #FBB5C6;
  margin: .3em auto;
  border-radius: 2px;
  text-align: center;
  font-family: 'Quicksand', sans-serif;

  :hover{
    background-color: #ff961d;
  }

  h1 {
    padding: .25em;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const AppointmentCard = ({ availability, handleModal }) => {
  return (
    <CardWrapper>
     { availability.map((appointment, key) => {
       return (
        <Card key={key} onClick={handleModal}>
          <h1 id={appointment}>{appointment}</h1>
        </Card>
       )}) }
    </CardWrapper>
  )
}

export default AppointmentCard;