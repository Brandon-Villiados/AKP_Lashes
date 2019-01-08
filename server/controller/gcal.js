const util = require('./helper.js')
const moment = require('moment-timezone');

const get = {};
const post = {};

get.appointments = (req, res) => {
  let startDate = req.url.split('?')[1];

  util.authorize(JSON.parse(process.env.GCAL_CREDENTIALS))
  .then(auth => util.listEvents(auth, startDate))
  .then(data => res.json(data));
}

post.appointment = (req, res) => {
  console.log(req.body)
  let { startDate, selectedAppType, startTime, email, appointmentLength } = req.body;
  let timeLen = req.body.startTime.length;
  let endTime = '';
  appointmentLength = Number(appointmentLength);
  startDate = moment(startDate).tz('America/Los_Angeles').format()

  if (startTime.slice(timeLen - 2) === 'AM') {
    if (startTime.slice(0, 2).includes(':')) {
      startTime = '0' + startTime.slice(0, timeLen - 3) + ':00-07:00';
      startDate = startDate.slice(0, 11) + startTime;
      endTime = moment(startDate).add(appointmentLength, 'hours').tz('America/Los_Angeles').format()
    } else {
      startTime = startTime.slice(0, timeLen - 3) + ':00-07:00';
      startDate = startDate.slice(0, 11) + startTime;
      endTime = moment(startDate).add(appointmentLength, 'hours').tz('America/Los_Angeles').format()
    }
  } else {
    let startInt = Number(startTime.slice(0, 1));
    startInt = startInt + 12;
    startTime = startInt.toString() + startTime.slice(2, timeLen - 5) + ':00:00-07:00';
    startDate = startDate.slice(0, 11) + startTime;
    endTime = moment(startDate).add(appointmentLength, 'hours').tz('America/Los_Angeles').format()
  }

  let newEvent = {
    'summary': `${req.body.selectedAppType} with AKP Lashes`,
    'location': '25779 Booker Way, Hayward, CA 94544',
    'start': {
      'dateTime': `${startDate}`,
      'timeZone': 'America/Los_Angeles',
    },
    'end': {
      'dateTime':  `${endTime}`,
      'timeZone': 'America/Los_Angeles',
    },
    'attendees': [
      {'email': `${email}`},
      {'email': `jade.k.villiados@gmail.com`}
    ],
    'reminders': {
      'useDefault': false,
      'overrides': [
        {'method': 'popup', 'minutes': 60},
        {'method': 'popup', 'minutes': 30},
      ],
    }
  }
  util.authorize(JSON.parse(process.env.GCAL_CREDENTIALS))
  .then(auth => util.addEvents(auth, newEvent))
  .then(data => res.json(data));
}

module.exports.get = get;
module.exports.post = post;
