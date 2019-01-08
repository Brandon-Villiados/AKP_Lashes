import React, { Component } from 'react';
import styled from 'styled-components';

const Drop = styled.form`
  width: 9.5rem;
  height: 1.215rem;
  background-color: white;
  border-color: black;
  border: solid thin;
  text-align: center;
  border-radius: 2px;
`

const Sel = styled.select`
  width: 100%;
  text-align-last: center;
`

export default class DropDown extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <Drop>
        <Sel onChange={this.props.selectAppointmentType} name="appointments">
          <option id="Classic-Set" value="1.5">Classic Set</option>
          <option id="Volume-Set" value="1.75">Volume Set</option>
          <option id="Classic-Fill" value="0.75">Classic Fill</option>
          <option id="Volume-Fill" value="1">Volume Fill</option>
        </Sel>
      </Drop>
    )
  }
}