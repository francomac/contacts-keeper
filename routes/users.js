const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
// @route   POST api/users
// @desc    Register a User
// @access  Public
router.post(
  '/',
  [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please include a valid Email').isEmail(),
    check('password', 'Please enter a password with 8 or more characters').isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(req.body);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.send('user saved');
    } catch (error) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;