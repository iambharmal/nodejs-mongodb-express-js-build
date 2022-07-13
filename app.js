const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
require('dotenv').config();

// connect to monogo DB
const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl, {
  useUnifiedTopology: true
})

const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello DoodleBlue!');
});

app.use('/api', authRoute);
app.use('/api/user', userRoute);

module.exports = app;