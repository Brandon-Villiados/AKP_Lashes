const router = require('express').Router();
const gcal = require('./controller/gcal.js');

router.get('/api/google/get', gcal.get.appointments);
// console.log(gcal)

module.exports = router;
