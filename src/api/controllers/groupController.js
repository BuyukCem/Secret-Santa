const mongoose = require('mongoose');
const groupModel = require('../models/groupModel');
const Group = mongoose.model("Group");
const personModel = require('../models/personModel');
const Person = mongoose.model("Person");

exports.list_all_groups =  (req, res) => {
    Group.find({}, (error, groups) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }
        else {
            res.status(200);
            res.json(groups);
        }
    })
};

exports.get_group_members = (req, res) => {
    Person.find({group_id: req.params.group_id}, (error, person) => {
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

exports.create_a_group = (req, res) => {
    let new_group = new Group(req.body);

    new_group.save((error, group) => {
        if(error) {
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }
        else {
            res.status(200);
            res.json(group);
        }
    })
};

exports.get_a_group = (req, res) => {
    Group.findById(req.params.group_id, (error, group) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }
        else {
            res.status(200);
            res.json(group);
        }
    })
}

exports.update_a_group = (req, res) => {
    Group.findOneAndUpdate({_id: req.params.group_id}, req.body, {new: true}, (error, group) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }else {
            res.status(200);
            res.json(req.body);
        }
    });
};

exports.delete_a_group = (req, res) => {
    Group.remove({_id: req.params.group_id}, (error) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }else{
            res.status(200);
            res.json({message: 'Group removed'});
        }
    });
};

exports.randomize = (req, res) => {
    Person.find({group_id: req.params.group_id}, (error, person) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        } else {
            var idList = [];

            person.forEach(function(onePerson){
                idList.push(onePerson._id);
            });

            person.forEach(function(onePerson){

                var idSelect;

                if (person.length >= 2) {
                    do {
                        key = Math.trunc(Math.random() * idList.length);
                        idSelect = idList[key];
                    } while (idSelect === onePerson._id)
                }

                Person.findOneAndUpdate({_id: onePerson._id}, {id_person_to_give: idSelect}, {}, (error) => {
                    if(error){
                        console.log(error);
                    }
                });

                idList.splice(key, 1);
            });

            res.status(200);
            res.json("Randomized");
        }
    })
}