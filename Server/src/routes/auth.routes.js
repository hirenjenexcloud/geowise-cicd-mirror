// src/routes/auth.routes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const auth = require('../middlewares/authJWT');
const { signupRules, signinRules, emailOnlyRule,resetPasswordRules, validate } = require('../validators/userValidator');

router.post('/signup', signupRules, validate, auth.authenticate, authController.signup);
router.post('/signin', signinRules, validate, authController.signin);
router.post('/passwordupdate', emailOnlyRule, validate, authController.passwordUpdate);
router.post('/reset-password', resetPasswordRules, validate, authController.resetPassword);

module.exports = router;
