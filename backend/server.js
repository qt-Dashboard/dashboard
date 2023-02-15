const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRoute = require('./routes/user.routes');
const categoryRoute = require('./routes/category.routes');
const markerRoute = require('./routes/marker.routes')

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
app.use('/category', categoryRoute);
app.use('/marker', markerRoute);

module.exports = app;