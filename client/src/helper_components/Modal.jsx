import React, { Component } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: absolute; 
  top: 25%;
  left: 50%;
  width: 80%;
  height: 15%;
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

const Form = styled.form`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 25%;
  height: 1rem;
  background-color: white;
  border-radius: 2px;
  border: solid thin;
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

export default class Mod extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return !!this.props.modal ? (
      <div>
        <Overlay onClick={this.props.handleModal} />
        <Modal>
          <ModHeader>
            <ModTitle>
              <h3>Schedule your Appointment</h3>
            </ModTitle>
          </ModHeader>
          <Form>
            <h5>Name</h5>  
            <Input type="text" name="name" value={this.props.name} onChange={(e) => this.props.handleChange(e)}/>
            <h5>Email</h5>
            <Input type="text" name="email" value={this.props.email} onChange={(e) => this.props.handleChange(e)}/>
            <br/>
            <br/>
            <Button>Submit</Button>
          </Form>
        </Modal>
      </div>
    ) : null;
  }
}