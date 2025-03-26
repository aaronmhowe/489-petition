const express = require('express');
const router = express.Router();
const Participant = require('../models/Participants');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const submissions = await Participant.getAll();
    res.render('index', {
      title: 'Move CptS 489 to Afternoon in Winter!',
      Participants: submissions,
      alert: req.query.message,
      alertType: req.query.type || 'Success'
    });
  } catch (err) {
    console.error('Failed to Retrieve List of Participants: ', err);
    res.render('index', {
      title: 'Move CptS 489 to Afternoon in Winter!',
      Participants: [],
      alert: 'Failed to Retrieve List of Participants: ' + err.message,
      alertType: 'Bad.'
    });
  }
});

module.exports = router;
