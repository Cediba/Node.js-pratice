//---Imports---
const express = require('express');
const parser = require('body-parser');

const router = require('./routes/main-routes');


//---Setups---
const app = express();
app.set('view engine', 'ejs');

//---middleware---
app.use(parser.urlencoded({extended: false}));

app.use(router);

app.use(express.static('./public'))


// --Server stats
app.listen(3000);

