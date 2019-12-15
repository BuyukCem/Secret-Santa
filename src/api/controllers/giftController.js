const mongoose = require('mongoose');
const giftModel = require('../models/giftModel');
const Gift = mongoose.model("Gift");

exports.get_all_gifts = (req, res) => {
    Gift.find({person_id: req.params.person_id}, (error, gifts) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }
        else {
            res.status(200);
            res.json(gifts);
        }
    })
}

exports.create_a_gift = (req, res) => {
    req.body.person_id = req.params.person_id;
    let new_gift = new Gift(req.body);

    new_gift.save((error, gift) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }
        else {
            res.status(201);
            res.json(gift);
        }
    })
}

exports.get_a_gift = (req, res) => {
    Gift.findById(req.params.gift_id, (error, gift) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }
        else {
            res.status(200);
            res.json(gift);
        }
    })
}

exports.update_a_gift = (req, res) => {
    Gift.findOneAndUpdate({_id: req.params.gift_id}, req.body, {new: true}, (error, gift) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }
        else {
            res.status(200);
            res.json(gift);
        }
    })
}

exports.delete_a_gift = (req, res) => {
    Gift.remove({_id: req.params.gift_id}, (error) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }
        else {
            res.status(200);
            res.json({message: "Gift removed"});
        }
    })
}
