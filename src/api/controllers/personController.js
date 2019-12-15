const mongoose = require('mongoose');
const personModel = require('../models/personModel');
const Person = mongoose.model("Person");

exports.list_all_persons =  (req, res) => {
    Person.find({}, (error, person) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }
        else {
            res.status(200);
            res.json(person);
        }
    })
};

exports.create_a_person = (req, res) => {
    let new_person = new Person(req.body);

    new_person.save((error, person) => {
        if(error) {
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }
        else {
            res.status(200);
            res.json(person);
        }
    })
};

exports.get_a_person = (req, res) => {
    Person.findById(req.params.person_id, (error, person) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }
        else {
            res.status(200);
            res.json(person);
        }
    })
}

exports.update_a_person = (req, res) => {
    Person.findOneAndUpdate({_id: req.params.person_id}, req.body, {new: true}, (error, person) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }else {
            res.status(200);
            res.json(person);
        }
    });
};

exports.delete_a_person = (req, res) => {
    Person.remove({_id: req.params.person_id}, (error) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }else{
            res.status(200);
            res.json({message: 'Person removed'});
        }
    });
};