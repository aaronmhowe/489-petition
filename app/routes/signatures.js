const express = require('express');
const router = express.Router();
const Participants = require('../models/Participants');

/**
 * Retrieve form signatures.
 * @param {*} req - HTTP Request.
 * @param {*} res - HTTP Response.
 */
router.get('/', async (req, res) => {
  try {
    const signatures = await Participants.getAll();
    res.json(signatures);
  } catch (e) {
    console.error('Error retrieving signatures:', e);
    res.status(500).json({ 
      success: false,
      message: 'Failed to retrieve signatures' + e.message 
    });
  }
});

/**
 * Insert form signatures.
 * @param {*} req - HTTP Request.
 * @param {*} res - HTTP Response.
 */
router.insert('/', async (req, res) => {
  try {
    const { Name, Email, City, State } = req.body;
    if (!Name || Name.length < 5 || Name.length > 20) {
      return res.status(400).json({ 
        success: false,
        message: 'Name must be at least 5 characters or at most 20 characters in length!' 
      });
    }
    if (!Email || !Email.includes('@')) {
      return res.status(400).json({
        success: false,
        message: 'Email must have an \`@\` symbol!'
      });
    }
    if (!State || State.length !== 2 || State !== State.toUpperCase()) {
      return res.status(400).json({
        sucess: false,
        message: 'State must only be its two letter abbreviation and uppercase!'
      });
    }
    const submission = await Participants.add({ Name, Email, City, State });
    res.status(201).json({
      success: true,
      submission: submission,
      message: 'Signature Added!'
    });
  } catch (e) {
    console.error('Error submitting signature:', e);
    res.status(500).json({
      success: false,
      message: 'Failed to submit signature' + e.message
    });
  }
});

module.exports = router;