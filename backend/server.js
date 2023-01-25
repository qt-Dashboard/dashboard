const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRoute = require('./routes/user.routes');

// Initialization
const app = express();

// Settings
app.set('port', process.env.PORT || 3300);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// Routes
app.use('/user', userRoute);

module.exports = app;