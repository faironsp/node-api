'use strict'

const ValidationContract = require('../validators/fluent-validators');
const repository = require('../repositories/customer-repository');
const md5 = require('md5');

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O name deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email, 'E-mail inválido');
    contract.hasMinLen(req.body.password, 6, 'O password deve conter pelo menos 3 caracteres');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password)
        });
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso'
        });
    } catch (error) {
        res.status(400).send({
            message: 'Falha ao processar a requisição',
            data: e,
            json: req.body
        });
    }
};