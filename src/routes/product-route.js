'use strict'

const express = require('express');
const router = express.Router();

//const route = router.get('/', (req, res, next) => {
//    res.status(200).send({
//        title: "Node Store API",
//        version: "0.0.2"
//    });
//});

router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
    });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id
    });
});

module.exports = router;