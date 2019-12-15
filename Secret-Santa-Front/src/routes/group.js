const express = require('express');
const request = require('request');

const bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
const API = require('../config/confAPI.js');
const group = express.Router();
const urlencodedParser = bodyParser.urlencoded({extended: false});

//nous supposons /group/
group.get('/', function (req, res) {
    res.render('group');
    let url_Api = "http://lcoalhost/:27017";
    console.log();
    request(API.config.URL + "/list_all_groups", function (err, response, body) {
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
//on suppose /group/:iddugroup
group.get("/:idgroup", urlencodedParser, function (req, res) {
    let idgroup = req.params.idgroup;
    if (idgroup === ' ' || idgroup === null || idgroup === 'undefined') {
        res.render('index', {degres: null, error: 'Error, please try again'});
        console.log("error");
    } else {
        request(url_Api, function (err, response, body) {
            try {
                let result = JSON.parse(body); //envoir des donnée json sur la vue
                console.log(result);
                res.render('/', {});//send a Json file
            } catch (err) {
                console.error(err);
                res.render('index', {degres: null, error: 'Error, please try again'});
            }
        });
    }
});
//on suppose /group/:iddugroup
group.post("/:idgroup", urlencodedParser, function (req, res) {
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
        request(API.config.URL + "/group", function (err, response, body) {
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


//on suppose /group/:iddugroup
group.put("/:idgroup", urlencodedParser, function (req, res) {
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
            request(API.config.URL + "/group", function (err, response, body) {
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
module.exports = group;