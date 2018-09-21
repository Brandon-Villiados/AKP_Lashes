import React, { Component } from 'react';

export default class Buttons extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return(
      <div className="button-wrapper">
        <div className="splash-button aftercare">
          <div className="button-content">Aftercare</div>
        </div>
        <div className="splash-button services">
          <div className="button-content">Services</div>
        </div>
      </div>
    )
  }
}