import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment-timezone';
import $ from 'jquery';

const Modal = styled.div`
  position: absolute; 
  top: 25%;
  left: 50%;
  width: 80%;
  height: 18%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background: #ddd;
  color: #222;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1rem auto 1rem;
  grid-template-rows: 1rem fit-content(0) 1rem auto 1rem;
  font-family: 'Quicksand', sans-serif;
  text-align: center;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9998;
  background-color: #00000050;
`;

const ModHeader = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  grid-template-columns: auto fit-content(0);
`;

const ModTitle = styled.div`
  grid-column: 1 / 2;
  color: #222;
`;

const ModContainer = styled.form`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  margin-top: -0.5rem;
  justify-content: space-around;
`;

const Button = styled.button`
  display: flex;
  width: 25%;
  height: 1rem;
  background-color: white;
  border-radius: 2px;
  border: solid thin;
  text-align: center;
  margin: 1.4em auto 0;
  justify-content: center;
`;

const Input = styled.input`
  border-color: black;
  border-style: solid;
  border-width: thin;
  border-radius: 2px;
  justify-content: space-around;
  text-align: center;
  padding: 0 .5em;
`

const Err = styled.h5`
  color: red;
  text-align: center;
  display: none;
`

const ThankContain = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
`

export default class Mod extends Component {
  constructor(props){
    super(props)

    this.renderMain = this.renderMain.bind(this);
    this.renderModHeader = this.renderModHeader.bind(this);
  }

  renderMain(render) {
    if (render) {
      return (
        <ModContainer>
          <h5>{this.props.firsth5}</h5>  
          <Input type="text" name="name" value={this.props.name} onChange={(e) => this.props.handleChange(e)}/>
          <h5>{this.props.secondh5}</h5>
          <Input type="text" name="email" value={this.props.email} onChange={(e) => this.props.handleChange(e)}/>
          <h5>{this.props.thirdh5}</h5>
          <Input type="text" name="emailTruth" value={this.props.emailTruth} onChange={(e) => this.props.handleChange(e)}/>
          <Button onClick={this.props.postAppointment}>Submit</Button>
          <Err className="hidden">Invalid Email</Err>
        </ModContainer>
      )
    } else {
      return (
        <ModContainer>
          <ThankContain>
          <h2>Thank You for scheduling your AKPlash appointment!</h2>
          <h3>Make sure you check your email to confirm your appointment</h3>
          </ThankContain>
        </ModContainer>
      )
    }
  }

  renderModHeader(render) {
    if (render) {
      return (
        <ModHeader>
          <ModTitle>
            <h3>{this.props.title + ' ' + moment(this.props.startDate).tz('America/Los_Angeles').format('MMM Do') + ' at ' + this.props.startTime}</h3>
          </ModTitle>
        </ModHeader>
      )
    }
    return;
  }

  render(){
    return !!this.props.modal ? (
      <div>
        <Overlay onClick={this.props.handleModal} />
        <Modal>
          {this.renderModHeader(this.props.render)}
          {this.renderMain(this.props.render)}
        </Modal>
      </div>
    ) : null;
  }
}