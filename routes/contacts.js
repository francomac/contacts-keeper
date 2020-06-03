const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all Users Contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all Users Contacts');
});

// @route   POST api/contacts
// @desc    Add new Contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add new Contact');
});

// @route   PUT api/contacts/:id
// @desc    Update new Contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update new Contact');
});

// @route   DELETE api/contacts/:id
// @desc    Delete new Contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete new Contact');
});

module.exports = router;
