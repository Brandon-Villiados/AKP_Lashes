const fs = require('fs');
const {google} = require('googleapis');
const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const readline = require('readline');
const moment = require('moment-timezone');
const Promise = require('bluebird');

const get = {};
const post = {};

get.appointments = (req, res) => {
  let startDate = req.url.split('?')[1];

  authorize(JSON.parse(process.env.GCAL_CREDENTIALS))
  .then(auth => listEvents(auth, startDate))
  .then(data => {
    res.json(data)
  });

}

let authorize = async function(credentials) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  oAuth2Client.setCredentials(JSON.parse(process.env.GOOGLE_TOKEN));

  return oAuth2Client;

}

let listEvents = async function(auth, startDate) {
  const calendar = google.calendar({version: 'v3', auth}); // gives access to 'primary' calendar **usually an email**
  let now = moment(startDate).tz('America/Los_Angeles').format();
  let max = now.slice(0, now.length - 14) + '23:59:00-07:00';

  return new Promise((resolve, reject) => {
    calendar.events.list({ // optional params maxResults, minAccessRole, pageToken, showDeleted, showHidden, syncToken
    calendarId: 'primary', // 'primary' or email
    timeMax: max,
    timeMin: now,
    maxResults: 20, 
    singleEvents: true, 
    orderBy: 'startTime',
    }, (err, response) => {
      if (err) reject('The API returned an error: ' + err);
      const events = response.data.items;
      if (events.length) {
        let list = events.map((event, i) => {
          const start = event.start.dateTime || event.start.date;
          return `${start.slice(11, 16)}-${event.summary}`;
        })
        resolve(list);
      } else {
        console.log('No upcoming events found.');
      }
    });
  });

}

let addEvents = function(auth, event) {
  const calendar = google.calendar({version: 'v3', auth});

  calendar.events.insert({
    auth: auth,
    calendarId: 'primary',
    resource: event,
  }, function(err, event) {
    if (err) {
      console.log('There was an error contacting the Calendar service: ' + err);
      return;
    }
    console.log('Event created: %s', event.htmlLink);
  });

}

// let eventTest = {
//   'summary': 'Calendar Test Brandon',
//   'location': '25779 Booker Way, Hayward, CA 94544',
//   'start': {
//     'dateTime': '2018-10-30T09:00:00-07:00',
//     'timeZone': 'America/Los_Angeles',
//   },
//   'end': {
//     'dateTime': '2020-10-30T17:00:00-07:00',
//     'timeZone': 'America/Los_Angeles',
//   },
//   'attendees': [
//     {'email': 'jade.k.villiados@gmail.com'}
//   ],
//   'reminders': {
//     'useDefault': false,
//     'overrides': [
//       {'method': 'email', 'minutes': 24 * 60},
//       {'method': 'popup', 'minutes': 10},
//     ],
//   }
// }



module.exports.get = get;
module.exports.post = post;
