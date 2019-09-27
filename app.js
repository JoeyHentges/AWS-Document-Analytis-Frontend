// Requirements
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('tiny'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Set the HTML Template engine to EJS
app.set('views', ['./main/views', './apps/']);
app.set('view engine', 'ejs');

// Export app to be used in Server.js
module.exports.app = app;

// Add Routes to the app
app.use('/', require('./main/routes/routes').router);
