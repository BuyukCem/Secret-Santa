const express = require('express');
//const request = require('request');
//const bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres

const router =  express.Router();


router.get('/',function(req,res) {
    res.render('index');
});
/*
router.post('/getweather', urlencodedParser,function (req,res){

    let city=req.body.city;
    if ( city=== ' ' || city === null || city==='undefined'){
        res.render('index',{degres: null, error: 'Error, please try again'});
        console.log("error");
    }else{
        let url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+API.conf.key;
        console.log(url);
        request(url, function(err, response, body){
            try {
                let weather = JSON.parse(body);
                res.render('index',{degres:kelvinToCelsius(weather.main.temp),icone:DetermineIcon(weather.weather[0].id),date:GetMonth(),city:city,desc:weather.description});
            }catch (err) {
                console.error(err);
                res.render('index',{degres: null, error: 'Error, please try again'});
            }
        });
    }
});*/
module.exports = router;