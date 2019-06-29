var mongoose = require('mongoose');

var People = new mongoose.Schema({

    name: {
        type: String,
        required: "This field is required"
    },
    email: {
        type: String
    },
    location: {
        type: String,

    },
    phone: {
        type: String
    },
    message: {
        type: String
    },

});

module.exports = mongoose.model('People', People);