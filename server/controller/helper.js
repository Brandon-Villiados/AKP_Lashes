const {google} = require('googleapis');
const moment = require('moment-timezone');
const Promise = require('bluebird');

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
        console.log(events)
        let list = events.map((event, i) => {
          const start = event.start.dateTime || event.start.date;
          const end = event.end.dateTime;
          return `${start.slice(11, 16)}-${start.slice(11, 16)}`;
        })
        resolve(list);
      } else {
        resolve([]);
      }
    });
  });
}

let addEvents = async function(auth, event) {
  const calendar = google.calendar({version: 'v3', auth});
  new Promise((resolve, reject) => {
    calendar.events.insert({
      auth: auth,
      calendarId: 'primary',
      resource: event,
      sendUpdates: 'all'
    }, function(err, event) {
      if (err) {
        reject('There was an error contacting the Calendar service: ' + err);
      }
      resolve(event);
    });
  });
}

module.exports.authorize = authorize;
module.exports.listEvents = listEvents;
module.exports.addEvents = addEvents;