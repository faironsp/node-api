'use strict'

//Status code
//200 - ok
//201 - created
//400 - bad request
//401 - not authenticated
//403 - access denied

const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta ao Mongodb (Atlas) Clusters
mongoose.connect('mongodb+srv://dev:010085ff@dev-bozx2.azure.mongodb.net/test?retryWrites=true&w=majority', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

//Carrega os Models
const Product = require('./models/product');

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;