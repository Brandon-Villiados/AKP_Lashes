import React, { Component } from 'react';

export default class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  appointmentForm() {
    <form action="">
      <label htmlFor=""></label>
      <input type="text"/>
    </form>
  }

  carousel() {
    <div className="wrap">
      <div id="arrow-left" className="arrow" onClick={this.props.previous.bind(this, true)}></div>
      <div id="arrow-right" className="arrow" onClick={this.props.next.bind(this, true)}></div>
        <div id="slider">
          <div className="slide slide1">
            <div className="slide-content">
            </div>
          </div>
        </div>
      </div>
  }

  render() {
    return (
      <div className="wrap">
        <div id="arrow-left" className="arrow" onClick={this.props.previous.bind(this, true)}></div>
          <div id="slider">
            <div className="slide slide1">
              <div className="slide-content">
              </div>
            </div>
          </div>
        <div id="arrow-right" className="arrow" onClick={this.props.next.bind(this, true)}></div>
      </div>
    )
  }
}





////// carousel logic that needs to be in App.jsx


  // //starts the carousel on mount
  // componentDidMount() {
  //   // this.interval = setInterval(this.next, 2500);
  // }

  // //clickhandler that rotates carousel to right
  // next(fromBtn) {
  //   if (this.state.counter === 3) {
  //     document.querySelector(`.slide`).classList.remove(`slide3`);
  //     document.querySelector(`.slide`).classList.add(`slide1`);
  //     this.setState({ counter: 1 });
  //   } else {
  //     document.querySelector(`.slide`).classList.remove(`slide${this.state.counter}`);
  //     document.querySelector(`.slide`).classList.add(`slide${++this.state.counter}`);
  //     this.setState({ counter: this.state.counter++ });
  //   }

  //   if(fromBtn) {
  //     clearInterval(this.interval);
  //   }
  // }

  // //clickhandler that rotates carousel to left
  // previous(fromBtn) {
  //   if (this.state.counter === 1) {
  //     document.querySelector(`.slide`).classList.remove(`slide1`);
  //     document.querySelector(`.slide`).classList.add(`slide3`);
  //     this.setState({ counter: 3 });
  //   } else {
  //     document.querySelector(`.slide`).classList.remove(`slide${this.state.counter}`);
  //     document.querySelector(`.slide`).classList.add(`slide${--this.state.counter}`);
  //     this.setState({ counter: this.state.counter-- });
  //   }
  //   if(fromBtn) {
  //     clearInterval(this.interval);
  //   }
  // }
  

  //bg-img needs refactor in order to give wipe effect

  