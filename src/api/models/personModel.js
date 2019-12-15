const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personSchema = new Schema({
    firstname: {
        type: String,
        required: "Firstname is required"
    },
    lastname: {
        type: String,
        required: "Lastname is required"
    },
    email: {
        type: String,
    },
    group_id:{
        type: String
    },

    id_person_to_give: {
        type: String
    }

});

module.exports = mongoose.model ('Person', personSchema);