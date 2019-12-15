const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let groupSchema = new Schema({
    name: {
        type: String,
        required: "Name is required"
    },
    created_at : {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model ('Group', groupSchema);
