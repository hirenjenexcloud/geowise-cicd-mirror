// src/utils/EmailSend.js
const nodemailer = require('nodemailer');
const logger = require('./logger');

const createTransporter = () => {
  // If user is using Gmail (auto-detect)
  if ((process.env.SMTP_HOST || '').includes('gmail')) {
    logger.info('Configuring Gmail SMTP transporter...');
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  // Fallback for custom SMTP providers
  logger.info(`Configuring custom SMTP: ${process.env.SMTP_HOST}:${process.env.SMTP_PORT}`);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
    tls: { rejectUnauthorized: false } // allows Gmail & self-signed certs
  });
};

const transporter = createTransporter();

// Optional verification step (helps debug)
transporter.verify((error, success) => {
  if (error) logger.error('SMTP verify failed:', error);
  else logger.info('SMTP server ready to send mail.');
});

const sendEmail = async ({ to, subject, html, text }) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.SMTP_USER,
    to,
    subject,
    text,
    html
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    logger.info(`Email sent successfully to ${to}: ${info.messageId}`);
    return info;
  } catch (err) {
    logger.error('Error sending email:', err);
    throw err;
  }
};

module.exports = sendEmail;
