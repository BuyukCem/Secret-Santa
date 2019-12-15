const express = require('express');
const request = require('request');
const bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
const API = require('../config/confAPI.js');
const people = express.Router();
const urlencodedParser = bodyParser.urlencoded({extended: false});

//nous supposons /people/
people.get('/', function (req, res) {
    res.render('people');
    let url_Api = "http://lcoalhost/:27017";
    console.log();
    request(API.config.URL + "/list_all_people", function (err, response, body) {
        try {
            let result = JSON.parse(body);
            console.log(result);
            //.result[0];
            //.result[0].data[0];
            res.render('/', {name: result.name,});//envoie des donnée json sur la vue
        } catch (err) {
            console.error(err);
            res.render('index', {degres: null, error: 'Error, please try again'});
        }
    });
});
//on suppose /people/:iddpeople
people.get("/:idpeople", urlencodedParser, function (req, res) {
    let idpeople = req.params.idpeople;
    if (idpeople === ' ' || idpeople === null || idpeople === 'undefined') {
        res.render('index', {degres: null, error: 'Error, please try again'});
        console.log("error");
    } else {
        request(url_Api, function (err, response, body) {
            try {
                let result = JSON.parse(body); //envoir des donnée json sur la vue
                console.log(result);
                res.render('/', {});
            } catch (err) {
                console.error(err);
                res.render('index', {degres: null, error: 'Error, please try again'});
            }
        });
    }
});
//on suppose /people/:idpeople
people.put("/:idpeople", urlencodedParser, function (req, res) {
        let name = req.body.name;
        if (name === ' ' || name === null || name === 'undefined') {
            res.render('index', {name: null, error: 'Error, please try again'});
            console.log("error");
        } else {
            Jsonobject= {
                name: name
            };

            /*
            *  Envoie de la donnée mais je crois que sais faut..
            * */
            request(API.config.URL + "/people", function (err, response, body) {
                try{
                    res.render('/',{message: "succes"})
                }catch (err) {
                    console.log(err);
                    res.render('index',{name: name});
                }
            });
        }

    }
);


//on suppose /people:iddpeople
people.put("/:idpeople", urlencodedParser, function (req, res) {
        let name = req.body.name;
        if (name === ' ' || name === null || name === 'undefined') {
            res.render('index', {name: null, error: 'Error, please try again'});
            console.log("error");
        } else {
            Jsonobject= {
                name: name
            };

            /*
            *  Envoie de la donnée mais je crois que sais faut..
            * */
            request(API.config.URL + "/people", function (err, response, body) {
                try{
                    res.render('/',{message: "succes"})
                }catch (err) {
                    console.log(err);
                    res.render('index',{name: name});
                }
            });
        }

    }
);
module.exports = people;