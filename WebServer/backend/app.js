require('dotenv').config();
const path = require('path');
const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const apiRouter = require('./routes/api');
const app = express();

app.use(cors({
    origin: 'https://webapp.arisalexia.fr' // Remplacez par vos domaines autorisés
  }));

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use('/', apiRouter);


app.get('/', (req, res) => {
    res.send('OK');
});

module.exports = app;