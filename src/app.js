// src/app.js
require('dotenv').config();
require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes'); // all routes combined
const errorHandler = require('./middlewares/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json'); // generated file

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Health check
app.get('/', (req, res) => res.json({ status: 'ok', service: 'geotracker' }));

// Swagger docs route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// All routes
app.use('/api', routes); // unified mount point

// 404 fallback
app.use((req, res) => res.status(404).json({ message: 'Not Found' }));

// Error handler
app.use(errorHandler);

module.exports = app;
