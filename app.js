require('dotenv/config');

require('./db');

const express = require('express');

const app = express();

require('./config')(app);

const session = require('express-session');
const MongoStore = require('connect-mongo').default;

app.use(session({
    secret: 'NotMyAge',
    saveUninitialized: false, 
    resave: false, 
    cookie: {
      maxAge: 1000*60*60*24// is in milliseconds.  expiring in 1 day
    },
    store: new MongoStore({
      mongoUrl: process.env.MONGODB_URI || "mongodb://localhost/TechChallenge",
      ttl: 60*60*24, // is in seconds. expiring in 1 day
    })
}));

const allRoutes = require('./routes');
app.use('/api', allRoutes);

const argonauteRoutes = require('./routes/argonaute.routes');
app.use('/api', argonauteRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
