import React, { Component } from 'react';
import styled from 'styled-components';

const Drop = styled.form`
  width: 8.2rem;
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
        <Sel onChange={this.props.selectAppointment} name="appointments">
          <option value="ClassicSet">Classic Set</option>
          <option value="VolumeSet">Volume Set</option>
          <option value="ClassicFill">Classic Fill</option>
          <option value="VolumeFill">Volume Fill</option>
        </Sel>
      </Drop>
    )
  }
}