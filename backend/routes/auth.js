const express = require('express');
const User = require('../models/User1');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Enter a valid email'),
    body('phno').isLength({ min: 10 }).withMessage('phno must be at least 10 numbers'),
  ] , async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
      return res.status(400).json({ success, errors: result.array() });
    }
    let user = await User.create({
        name: req.body.name,
        email: req.body.email,
        phno: req.body.phno
      })
    console.log(result.array())
    res.send(user,"created successfully");
});

module.exports = router;