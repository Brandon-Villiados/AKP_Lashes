import React, { Component } from 'react';
import styled from "styled-components";
import Carousel from './body_components/Carousel.jsx';
import Buttons from './body_components/Buttons.jsx';
import Nav from './header_components/Navbar.jsx'; 
import MainContent from './body_components/MainContent.jsx';
import SubContent from './body_components/SubContent.jsx';
import ComingSoon from './helper_components/ComingSoon.jsx';
import BookForm from './body_components/BookOnline.jsx';
import {
  Route,
  NavLink,
  BrowserRouter as Router
} from 'react-router-dom';

const Container = styled.div`
  width: 375px;
  height: 1334px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 12% 38% 50%;
  position: absolute;
  margin: auto;

  @media (min-height: 812px) {
    height: 1930px;
  }
`;

const Wipedbg = styled.div`
  grid-row: 3;
  background-image: url('Logo_J_Pineapple.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    // this.next = this.next.bind(this);
    // this.previous = this.previous.bind(this); //code is in carousel for next and previous functions
  }


  render() {
    return (
      <Router>
        <Container>
          <Nav/>
          <Route exact path='/' component={MainContent}/>
          <Route path='/services' component={ComingSoon}/>
          <Route path='/portfolio' component={ComingSoon}/>
          <Route path='/book_online' component={BookForm}/>
          <Wipedbg>
            <SubContent/>
          </Wipedbg>
        </Container>
      </Router>
    );
  }
};

