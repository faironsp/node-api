'use strict'

const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//Conecta ao Mongodb (Atlas) Clusters
//mongodb.com -> Vincunlado a minha conta do google
mongoose.connect(config.connectionString, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

//Carrega os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);

module.exports = app;