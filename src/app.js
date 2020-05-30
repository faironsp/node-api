'use strict'

//Status code
//200 - ok
//201 - created
//400 - bad request
//401 - not authenticated
//403 - access denied

const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const router = express.Router();

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;