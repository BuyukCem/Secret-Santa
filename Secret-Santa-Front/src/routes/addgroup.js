const express = require('express');
//const request = require('request');
//const bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres

const addgroup =  express.Router();


addgroup.get('/',function(req,res) {
    res.render('addgroup');
});

module.exports = addgroup;