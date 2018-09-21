import React, { Component } from 'react';
import MainContent from './body_components/MainContent.jsx'
import Buttons from './body_components/Buttons.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      mainContent: 'carousel'
    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }


  //starts the carousel on mount
  componentDidMount() {
    this.interval = setInterval(this.next, 2500);
  }

  //clickhandler that rotates carousel to right
  next(fromBtn) {
    if (this.state.counter === 3) {
      document.querySelector(`.slide`).classList.remove(`slide3`);
      document.querySelector(`.slide`).classList.add(`slide1`);
      this.setState({ counter: 1 });
    } else {
      document.querySelector(`.slide`).classList.remove(`slide${this.state.counter}`);
      document.querySelector(`.slide`).classList.add(`slide${++this.state.counter}`);
      this.setState({ counter: this.state.counter++ });
    }

    if(fromBtn) {
      clearInterval(this.interval);
    }
  }

  //clickhandler that rotates carousel to left
  previous(fromBtn) {
    if (this.state.counter === 1) {
      document.querySelector(`.slide`).classList.remove(`slide1`);
      document.querySelector(`.slide`).classList.add(`slide3`);
      this.setState({ counter: 3 });
    } else {
      document.querySelector(`.slide`).classList.remove(`slide${this.state.counter}`);
      document.querySelector(`.slide`).classList.add(`slide${--this.state.counter}`);
      this.setState({ counter: this.state.counter-- });
    }
    if(fromBtn) {
      clearInterval(this.interval);
    }
  }
  

  //bg-img needs refactor in order to give wipe effect

  render() {
    return (
      <div className="top-container">
        <div className="nav">
          <img className="logo" src="original_logo.png" alt="original_logo.png"/>
          <a href="" className="btnBook">Schedule an Appointment</a>
        </div>
        <div className="aboutMe">
          <h1 className="welcome-header">Welcome To <br/> AKP Lash Artistry</h1>
          <img src="Jade_Profile.jpeg" alt="Jade_Profile.jpeg"/>
        </div>
        <div className="aboutMe-description">"Today I choose life. Every morning when I wake up I can choose joy, happiness, negativity, pain... To feel the freedom that comes from being able to continue to make mistakes and choices - today I choose to feel life, not to deny my humanity but embrace it." <br/><br/> ~Jade Villiados</div>
        <Buttons />
        <MainContent 
        next={this.next} 
        previous={this.previous} 
        counter={this.state.counter}
        mainContent={this.state.mainContent}
        />
        <div className="section-split">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-me">
          <a href="mailto:JadeKVilliados@gmail.com"><h3>Email</h3></a>
          <a href="https://www.facebook.com/jade.villiados"><h3>Facebook</h3></a>
          <a href="https://www.instagram.com/akplashartistry/"><h3>Instagram</h3></a>
          <h3>Twitter</h3>
        </div>
      </div>
    );
  }
};

