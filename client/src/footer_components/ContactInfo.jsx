import React, { Component } from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  width: 100%;
  height: auto;
  grid-row: 3;
  margin-top: .5em;
  background-color: #a3d9d9;
  opacity: .9;
  border-radius: 2px;

  h3{
    margin-top: .5em
  }

  h5 {
    margin-top: 2em;
  }
`;

const InfoLinks = styled.a`
  color: #FBB5C6;

  h3 {
    margin-top: .5em;
    filter: drop-shadow(0 1px 1px #000);
  }

  h3:hover {
    color: #000;
  }
`;

const ContactInfo = (props) => {
  return (
    <ContactWrapper>
    <h3>Contact Me</h3>
    <InfoLinks href="mailto:JadeKVilliados@gmail.com"><h3>Email</h3></InfoLinks>
    <InfoLinks href="https://www.facebook.com/jade.villiados"><h3>Facebook</h3></InfoLinks>
    <InfoLinks href="https://www.instagram.com/akplashartistry/"><h3>Instagram</h3></InfoLinks>
    <h5>&copy; 2018 AKP Lash Production</h5>
    </ContactWrapper>
  )
}

export default ContactInfo;