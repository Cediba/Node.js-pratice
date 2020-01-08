const express = require('express');
const path = require('path');

const router = require('./routes/main-router')

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//use to send static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.listen(3000);