const express = require('express');
const router = express.Router();
const Participants = require('../models/Participants');
const { name } = require('ejs');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const submissions = await Participants.getAll();
    res.render('index', {
      title: 'Move CptS 489 to Afternoon in Winter!',
      submissions: submissions,
      alert: req.query.message,
      alertType: req.query.type || 'Success'
    });
  } catch (err) {
    console.error('Failed to Retrieve List of Participants: ', err);
    res.render('index', {
      title: 'Move CptS 489 to Afternoon in Winter!',
      submissions: [],
      alert: 'Failed to Retrieve List of Participants: ' + err.message,
      alertType: 'Bad.'
    });
  }
});

router.post('/sign', async function(req, res, next) {
  try {
    const { Name, Email, City, State } = req.body;
    if (!Name || Name.length < 5 || name.length > 20) {
      return res.status(400).json({
        success: false,
        message: 'Name should be within 5 to 20 characters in length!'
      });
    }
    if (!Email || !Email.includes('@')) {
      return res.status(400).json({
        success: false,
        message: 'Email should have an \'@\'!'
      });
    }
    if (!State || State.length !== 2 || State !== State.toUpperCase()) {
      return res.status(400).json({
        success: false,
        message: 'State should be of length 2 and uppercase!'
      });
    }
    
    const newSubmission = await Participants.add({ Name, Email, City, State });
    res.status(201).json({
      success: true,
      submission: newSubmission,
      message: 'Submission Successful.'
    });
  } catch (err) {
    console.error('Submission Failed: ', err);
    res.status(500).json({
      success: false,
      message: 'Submission Failed: ' + err.message
    });
  }
});

module.exports = router;
