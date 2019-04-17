var mongoose = require('mongoose');

var Persons = new mongoose.Schema({

    name: {
        type: String,
    },
    email: {
        type: String
    },
    location: {
        type: String
    },
    phone: {
        type: String
    },
    message: {
        type: String
    },

});

module.exports = mongoose.model('Persons', Persons);