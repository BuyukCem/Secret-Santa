const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let giftSchema = new Schema({
    label: {
        type: String,
        required: "Label is required"
    },
    details: {
        type: String,
        required: "Details are required"
    },
    person_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model ('Gift', giftSchema);