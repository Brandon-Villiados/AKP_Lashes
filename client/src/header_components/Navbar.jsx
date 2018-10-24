import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';

const NavWrapper = styled.div`
  grid-row: 1;
  width: 100%;
  height: 90%;
`;

const Nav = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr .1fr .5fr;
  grid-template-areas: 
  'logo'
  'line'
  'navButtons';

  a {
    font-family: 'Quicksand', sans-serif;
    text-decoration: none;
    color: #000;
    margin: auto;
  }

  a:hover{
    color: #ff961d;
  }
`;

const Logo = styled.img`
  grid-area: logo;
  width: 50%;
  height: auto;
  margin: 1em auto;

  @media (min-width: 394px) {
   width: 200px;
  }
`;

const Line = styled.div`
  width: 75%;
  margin: auto;
  border-bottom: 1px solid #000;
`;

const NavButton = styled.div`
  display: flex;
  width: 90%;
  height: auto;
  grid-area: navButtons;
  justify-content: space-around;
  margin: .5em auto;
`;

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper>
        <Nav>
          <Logo src='Nav_Logo.jpg' alt='Nav_Logo.jpg'/>
          <Line/>
          <NavButton className="NavButton">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/book_online">Book Online</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </NavButton>
        </Nav>
      </NavWrapper>
    );
  };
};

