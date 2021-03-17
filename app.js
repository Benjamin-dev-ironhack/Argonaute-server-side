require('dotenv/config');

require('./db');

const express = require('express');

const app = express();

require('./config')(app);

const allRoutes = require('./routes');
app.use('/api', allRoutes);

const argonauteRoutes = require('./routes/argonaute.routes');
app.use('/api', argonauteRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
