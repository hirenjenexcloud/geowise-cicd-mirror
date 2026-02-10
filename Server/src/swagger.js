// src/swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'GeoWise API',
    description: 'Automatically generated Swagger documentation for GeoWise backend',
    version: '1.0.0',
  },
  // host: 'localhost:4000',
  basePath: '',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
};

const outputFile = './src/swagger-output.json';
const endpointsFiles = ['./src/app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
