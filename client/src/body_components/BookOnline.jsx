import React, { Component } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';
import AppointmentCards from '../helper_components/AppointmentCards.jsx';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css';
import DropDown from '../helper_components/DropDown.jsx';
import Modal from '../helper_components/Modal.jsx'

const BookWrap = styled.div`
  display: grid;
  grid-row: 2;
  grid-template-rows: .1fr 1fr;
  grid-template-columns: 1fr;
  justify-content: center;
`;

const PickerWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1em;
`;

const AppointmentTimes = styled.div`
  grid-row: 2;
  height: auto;
  overflow: scroll;
`;

export default class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      availability: ['8:30 AM'],
      selectedAppType: 'ClassicSet',
      selectedTime: '',
      modal: false,
      name: '',
      email: ''
    };

    this.selectAppointmentType = this.selectAppointmentType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/google/get?${this.state.startDate.format('YYYY-MM-DD')}`)
    .then((res) => {
      console.log(res.data);
    })
  }

  handleChange(date) {
    this.setState({
      startDate: date
    }, () => {
      axios.get(`/api/google/get?${this.state.startDate.format('YYYY-MM-DD')}`)
      .then((res) => {
        console.log(res.data);
      })
    })
  }

  selectAppointmentType(event) {
    this.setState({
      selectedApp: event.target.value
    }, () => console.log(this.state.selectedAppType))
  }

  handleModal(e) {
    this.setState({
      modal: !this.state.modal,
      selectedTime: e.target.id
    }, () => console.log(this.state))
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <BookWrap>
        <PickerWrap>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            dateFormat="LL"
            timeCaption="time"
          />
          <DropDown selectAppointmentType={this.selectAppointmentType}/>  
        </PickerWrap>
        <AppointmentTimes>
          <AppointmentCards
            availability={this.state.availability}
            handleModal={this.handleModal}
          />
          <Modal 
            modal={this.state.modal}
            handleModal={this.handleModal}
            name={this.state.name}
            email={this.state.email}
            handleChange={this.handleChange}
          />
        </AppointmentTimes>
      </BookWrap>
    )
  }

}


      // <form action="">
      //   <label htmlFor="">First Name</label>
      //   <input type="text" placeholder="Your name.."/>
      //   <label htmlFor="">Last Name</label>
      //   <input type="text" placeholder="Your name.."/>
      //   <label htmlFor="">Email</label>
      //   <input type="text" placeholder="Email.."/>
      // </form>