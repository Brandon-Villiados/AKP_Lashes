var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

let appointmentSchema = mongoose.Schema({
  firstName: {
    type: String,
    unique: true
  },
  lastName: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  visits: Number
});

let Appointment = mongoose.model('Appointment', appointmentSchema);

let trackApps = (data) => {
  new Appointment({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    visits: 1
  });
};


module.exports.trackApps = trackApps;