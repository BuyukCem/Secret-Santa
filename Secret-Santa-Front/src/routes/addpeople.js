const express = require('express');
//const request = require('request');
//const bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres

const addpeople =  express.Router();


addpeople.get('/',function(req,res) {
    res.render('addpeople');
});

module.exports = addpeople;