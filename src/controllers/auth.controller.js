// src/controllers/auth.controller.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/user.model');
const sendEmail = require('../utils/EmailSend');
const logger = require('../utils/logger');

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
const RESET_TOKEN_EXPIRY_MS = 60 * 60 * 1000; // 1 hour

// Helper to generate JWT
const generateToken = (user) => {
  const payload = { id: user._id, email: user.email, name: user.name };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

exports.signup = async (req, res) => {
  try {
    const { name, email, password, phone, timezone } = req.body;

    // check existing
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ status: false, message: 'Email already exists' });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      phone,
      timezone,
      password: hashed
    });

    // const token = generateToken(user);

    return res.status(201).json({
      status: true,
      message: 'User registered successfully',
      data: {
        userId: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    logger.error('Signup error:', err);
    return res.status(500).json({ status: false, message: 'Server error' });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ status: false, message: 'Invalid email or password' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ status: false, message: 'Invalid email or password' });
    }

    const token = generateToken(user);

    return res.json({
      status: true,
      message: 'Login successful',
      data: {
        userId: user._id,
        name: user.name,
        email: user.email,
        token
      }
    });
  } catch (err) {
    logger.error('Signin error:', err);
    return res.status(500).json({ status: false, message: 'Server error' });
  }
};

exports.passwordUpdate = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ status: false, message: 'User not found with this email' });
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
      <p>Hello ${user.name},</p>
      <p>You requested a password reset. Click the link below to reset your password. This link is valid for 1 hour.</p>
      <p><a href="${resetLink}">Reset Password</a></p>
      <p>If you did not request this, please ignore this email.</p>
    `;

    await sendEmail({ to: user.email, subject, html });

    return res.json({ status: true, message: 'Password reset link sent to your email' });
  } catch (err) {
    logger.error('passwordUpdate error:', err);
    return res.status(500).json({ status: false, message: 'Server error' });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { email, token, newPassword } = req.body;

    if (!email || !token || !newPassword) {
      return res.status(422).json({ status: false, message: 'Email, token and newPassword are required' });
    }

    const user = await User.findOne({
      email,
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ status: false, message: 'Invalid email or expired token' });
    }

    // Hash new password
    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;

    // Clear reset token fields
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    // Optionally send confirmation email
    try {
      await sendEmail({
        to: user.email,
        subject: 'Your password has been changed',
        html: `<p>Hello ${user.name},</p>
               <p>Your password has been successfully updated. If you did not perform this action, please contact support immediately.</p>`
      });
    } catch (mailErr) {
      // don't fail the request if an email couldn't be sent; just log it
      logger.error('Failed to send password change confirmation:', mailErr);
    }

    // Optionally generate a fresh JWT so client can be logged in immediately
    const tokenJwt = generateToken(user);

    return res.json({
      status: true,
      message: 'Password has been reset successfully',
      data: {
        userId: user._id,
        name: user.name,
        email: user.email,
        token: tokenJwt
      }
    });
  } catch (err) {
    logger.error('resetPassword error:', err);
    const msg = process.env.NODE_ENV === 'production' ? 'Server error' : (err.message || 'Server error');
    return res.status(500).json({ status: false, message: msg });
  }
};
