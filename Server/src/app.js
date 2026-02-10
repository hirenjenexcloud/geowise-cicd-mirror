// src/app.js
require('dotenv').config();
require('express-async-errors');

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const app = express();

const frontendPath = path.resolve(
  __dirname,
  '../../dist/next-v8.1.2-lite'
);

console.log('FRONTEND PATH:', frontendPath);
app.use(
  helmet({
    contentSecurityPolicy: false, // Disable CSP for development; configure properly for production
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(express.static(frontendPath));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.use('/api', routes);

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')){
    app.use((req, res) => res.status(404).json({ message: 'Not Found' }));
  }
  res.sendFile(path.join(frontendPath, 'index.html'));
});


app.use(errorHandler);

module.exports = app;
