// src/validators/userValidator.js
const { body, validationResult } = require('express-validator');

const signupRules = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('timezone').trim().notEmpty().withMessage('Timezone is required')
];

const signinRules = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required')
];

const emailOnlyRule = [
  body('email').isEmail().withMessage('Valid email is required')
];

const resetPasswordRules = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('token').notEmpty().withMessage('Token is required'),
  body('newPassword').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];


const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      message: 'Validation failed',
      errors: errors.array()
    });
  }
  next();
};

module.exports = {
  signupRules,
  signinRules,
  emailOnlyRule,
  resetPasswordRules,
  validate
};
