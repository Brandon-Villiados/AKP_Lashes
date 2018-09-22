import React, { Component } from 'react';
import styled from "styled-components";
import Carousel from './body_components/Carousel.jsx';
import Buttons from './body_components/Buttons.jsx';
import Nav from './header_components/Navbar.jsx'; 
import MainContent from './body_components/MainContent.jsx';
import SubContent from './body_components/SubContent.jsx';

const Container = styled.div`
  width: 375px;
  height: 1334px;
  display: grid;
  grid-template-columns: 1fr
  grid-template-rows: 12% 38% 49%;
  position: absolute;
  margin: auto;
`;

const Wipedbg = styled.div`
  grid-row: 3;
  background-image: url('Logo_J_Pineapple.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: -1;
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
      <Container>
        <Nav/>
        <MainContent/>
        <Wipedbg>
          <SubContent/>
        </Wipedbg>
      </Container>
        // <div className="nav">
        //   <img className="logo" src="original_logo.png" alt="original_logo.png"/>
        //   <a href="" className="btnBook">Schedule an Appointment</a>
        // </div>
        // <div className="aboutMe">
        //   <h1 className="welcome-header">Welcome To <br/> AKP Lash Artistry</h1>
        //   <img src="Jade_Profile.jpeg" alt="Jade_Profile.jpeg"/>
        // </div>
        // <div className="aboutMe-description">"Today I choose life. Every morning when I wake up I can choose joy, happiness, negativity, pain... To feel the freedom that comes from being able to continue to make mistakes and choices - today I choose to feel life, not to deny my humanity but embrace it." <br/><br/> ~Jade Villiados</div>
        // <Buttons />
        // <MainContent 
        // next={this.next} 
        // previous={this.previous} 
        // counter={this.state.counter}
        // mainContent={this.state.mainContent}
        // />
        // <div className="section-split">
        //   <h1>Contact Me</h1>
        // </div>
        // <div className="contact-me">
        //   <a href="mailto:JadeKVilliados@gmail.com"><h3>Email</h3></a>
        //   <a href="https://www.facebook.com/jade.villiados"><h3>Facebook</h3></a>
        //   <a href="https://www.instagram.com/akplashartistry/"><h3>Instagram</h3></a>
        //   <h3>Twitter</h3>
        // </div>
    );
  }
};

