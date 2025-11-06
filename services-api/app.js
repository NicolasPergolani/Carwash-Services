const express = require('express');
const cors = require('cors');
const app = express();

// Configuración de CORS para arquitectura de Gateway centralizado
const allowedOrigins = [
  'https://gateway-api-lztd.onrender.com',
  process.env.GATEWAY_API_URL
].filter(Boolean);

// Uso de credenciales solo para orígenes confiables
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) {
      return callback(null, true);
    }
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(new Error('Not allowed by CORS policy'));
    }
  },

 // Permitir credentials solo para orígenes confiables
  credentials: function(req, callback) {
    const trustedForCredentials = [
      'https://gateway-api-lztd.onrender.com'
    ];
    const origin = req.headers.origin;
    if (!origin) {
      return callback(null, false);
    }
    const allowCredentials = trustedForCredentials.includes(origin);
    callback(null, allowCredentials);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-API-Key'],
  exposedHeaders: ['X-Total-Count'],
  maxAge: 86400 // 24 hours
}));


// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));


// Health check endpoint for Render
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Services API is running successfully!',
    timestamp: new Date().toISOString(),
    status: 'healthy'
  });
});


// service routes
const serviceRoutes = require('./routes/service.Routes');
app.use('/api/services', serviceRoutes);


// Error handling middleware
app.use('*', (req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});


const errorHandler = require('./middlewares/error.middleware');
app.use(errorHandler);

module.exports = app;