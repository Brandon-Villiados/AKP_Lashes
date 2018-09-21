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