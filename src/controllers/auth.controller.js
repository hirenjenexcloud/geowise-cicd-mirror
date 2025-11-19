// src/controllers/auth.controller.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/user.model');
const sendEmail = require('../utils/EmailSend');
const logger = require('../utils/logger');

const { success, fail } = require('../utils/apiResponse');

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
const RESET_TOKEN_EXPIRY_MS = 60 * 60 * 1000; // 1 hour

// Helper to generate JWT
const generateToken = (user) => {
  const payload = { id: user._id, email: user.email, name: user.name };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

/**
 * Signup
 */
exports.signup = async (req, res) => {
  try {
    const { name, email, password, phone, timezone } = req.body;

    // basic validation
    if (!name || !email || !password) {
      return fail(res, 'INVALIDSYNTAX', 'name, email and password are required');
    }

    // check existing
    const existing = await User.findOne({ email });
    if (existing) {
      return fail(res, 'INVALIDSYNTAX', 'Email already exists');
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      phone,
      timezone,
      password: hashed
    });

    const data = {
      userId: user._id,
      name: user.name,
      email: user.email
    };

    return success(res, 'CREATED', 'User registered successfully', data);
  } catch (err) {
    logger.error('Signup error:', err);
    return fail(res, 'INTERNALSERVERERROR', 'Server error', process.env.NODE_ENV === 'development' ? err.message : undefined);
  }
};

/**
 * Signin
 */
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return fail(res, 'INVALIDSYNTAX', 'email and password are required');
    }

    const user = await User.findOne({ email });
    if (!user) {
      return fail(res, 'UNAUTHORIZED', 'Invalid email or password');
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return fail(res, 'UNAUTHORIZED', 'Invalid email or password');
    }

    const token = generateToken(user);

    return success(res, 'OK', 'Login successful', {
      userId: user._id,
      name: user.name,
      email: user.email,
      token
    });
  } catch (err) {
    logger.error('Signin error:', err);
    return fail(res, 'INTERNALSERVERERROR', 'Server error', process.env.NODE_ENV === 'development' ? err.message : undefined);
  }
};

/**
 * Send password reset link (generate token + email)
 */
exports.passwordUpdate = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return fail(res, 'INVALIDSYNTAX', 'Email is required');

    const user = await User.findOne({ email });
    if (!user) {
      return fail(res, 'NOTFOUND', 'User not found with this email');
    }

    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + RESET_TOKEN_EXPIRY_MS;

    await user.save();

    // Construct reset link. Prefer FRONTEND_URL in env. Fallback to server route.
    const frontendUrl = process.env.FRONTEND_URL || process.env.BACKEND_URL || 'http://localhost:4000';
    const resetPath = process.env.PASSWORD_RESET_PATH || '/reset-password';
    const resetLink = `${frontendUrl}${resetPath}?token=${token}&email=${encodeURIComponent(user.email)}`;

    const subject = 'Password reset request';
    const html = `
      <p>Hello ${user.name || ''},</p>
      <p>You requested a password reset. Click the link below to reset your password. This link is valid for 1 hour.</p>
      <p><a href="${resetLink}">Reset Password</a></p>
      <p>If you did not request this, please ignore this email.</p>
    `;

    // send email (may throw)
    await sendEmail({ to: user.email, subject, html });

    return success(res, 'OK', 'Password reset link sent to your email');
  } catch (err) {
    logger.error('passwordUpdate error:', err);
    return fail(res, 'INTERNALSERVERERROR', 'Server error', process.env.NODE_ENV === 'development' ? err.message : undefined);
  }
};

/**
 * Reset password using token
 */
exports.resetPassword = async (req, res) => {
  try {
    const { email, token, newPassword } = req.body;

    if (!email || !token || !newPassword) {
      return fail(res, 'INVALIDSYNTAX', 'Email, token and newPassword are required');
    }

    const user = await User.findOne({
      email,
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return fail(res, 'INVALIDSYNTAX', 'Invalid email or expired token');
    }

    // Hash new password
    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;

    // Clear reset token fields
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    // Try to send confirmation email, but don't fail on mail errors
    try {
      await sendEmail({
        to: user.email,
        subject: 'Your password has been changed',
        html: `<p>Hello ${user.name || ''},</p>
               <p>Your password has been successfully updated. If you did not perform this action, please contact support immediately.</p>`
      });
    } catch (mailErr) {
      logger.error('Failed to send password change confirmation:', mailErr);
    }

    // Optionally generate a fresh JWT so client can be logged in immediately
    const tokenJwt = generateToken(user);

    return success(res, 'OK', 'Password has been reset successfully', {
      userId: user._id,
      name: user.name,
      email: user.email,
      token: tokenJwt
    });
  } catch (err) {
    logger.error('resetPassword error:', err);
    const msg = process.env.NODE_ENV === 'production' ? 'Server error' : (err.message || 'Server error');
    return fail(res, 'INTERNALSERVERERROR', msg);
  }
};
