import React, { Component } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'moment-timezone/builds/moment-timezone-with-data-2012-2022';
import moment from 'moment-timezone';
import axios from 'axios';
import AppointmentCards from '../helper_components/AppointmentCards.jsx';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css';
import DropDown from '../helper_components/DropDown.jsx';
import Modal from '../helper_components/Modal.jsx'
import $ from 'jquery';
import { 
  convertDate, 
  findAvailableTimes,
  checkAvailableToday,
  noneDisplayChosenApp } from '../helper_components/helpers.jsx'

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
      availabilitySource: ['08:30', '08:45', '09:00', '09:15', '09:30', '09:45', '10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '14:45', '15:00', '15:15', '15:30', '15:45', '16:00', '16:15', '16:30', '16:45', '17:00', '17:15', '17:30', '17:45', '18:00', '18:15', '18:30', '18:45', '19:00'],
      availability: [],
      selectedAppType: 'Classic_Set',
      startTime: '',
      appointmentLength: '1.5',
      modal: false,
      thankYou: false,
      name: '',
      email: '',
      emailTruth: ''
    };

    this.selectAppointmentType = this.selectAppointmentType.bind(this);
    this.fetchAppointments = this.fetchAppointments.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.postAppointment = this.postAppointment.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/google/get?${this.state.startDate.format('YYYY-MM-DD')}`)
    .then(({ data }) => {
      if (convertDate() >= 19) {
        this.setState({
          availability: []
        })
        return;
      }
      this.setState({availability: this.state.availabilitySource.slice(this.state.availabilitySource.indexOf(checkAvailableToday()))}, () => {
        this.setState({availability: findAvailableTimes(data, this.state.availabilitySource, this.state.selectedAppType)});
      });
    })
  }

  fetchAppointments(date) {
    if (date < new Date()) {
      this.setState({
        availability: [],
        startDate: date
      })
      return;
    }
    this.setState({
      startDate: date
    }, (e) => {
      axios.get(`/api/google/get?${this.state.startDate.format('YYYY-MM-DD')}`)
      .then(({ data }) => {
        this.setState({availability: findAvailableTimes(data, this.state.availabilitySource, this.state.selectedAppType)})
      })
    })
  }

  postAppointment(e) {
    e.preventDefault()

    if (this.state.emailTruth !== this.state.email) {
      $('.hidden').css('display', 'block')
      this.setState({
        email: '',
        emailTruth: ''
      })
    } else {
      this.setState({
        modal: false,
        thankYou: true
      })
      axios.post('/api/google/post', this.state)
      .then(res => {
        noneDisplayChosenApp(this.state.availability.indexOf(this.state.startTime), this.state.selectedAppType)
        .then(() => this.setState({
          name: '',
          email: '',
          emailTruth: ''
        }))
      });
    }
  }

  selectAppointmentType(event) {
    this.setState({
      selectedAppType: event.target.id,
      appointmentLength: event.target.value
    }, () => console.log(this.state.selectedAppType))
  }

  handleModal(e) {
    if (this.state.thankYou) {
      this.setState({thankYou: false, modal: false})
    } else {
      this.setState({
        modal: !this.state.modal,
        startTime: e.target.id
      }, () => {console.log('modal handled')});
    }
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
            onChange={this.fetchAppointments}
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
            emailTruth={this.state.emailTruth}
            postAppointment={this.postAppointment}
            handleChange={this.handleChange}
            title={'Your AKPlash appointment will be for'}
            firsth5={'Name'}
            secondh5={'Email'}
            thirdh5={'Retype Email'}
            startDate={this.state.startDate}
            startTime={this.state.startTime}
            render={true}
          />
          <Modal 
            handleModal={this.handleModal}
            modal={this.state.thankYou}
            render={false}
          />
        </AppointmentTimes>
      </BookWrap>
    )
  }

}
