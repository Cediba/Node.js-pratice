const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
// Set db
const database = require('./util/database');
const router = require('./routes/route');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());

app.use(router);


app.use(express.static('./public'));

app.listen(3000);