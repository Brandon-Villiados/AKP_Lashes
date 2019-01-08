const router = require('express').Router();
const gcal = require('./controller/gcal.js');

router.get('/api/google/get', gcal.get.appointments);

router.post('/api/google/post', gcal.post.appointment);

module.exports = router;
