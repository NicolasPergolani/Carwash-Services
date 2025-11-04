const mongoose = require('mongoose');
const connectDB = require('./config/db');
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3003;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Services API running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();