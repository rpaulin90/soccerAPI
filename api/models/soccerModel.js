'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TeamSchema = new Schema({
    name: {
        type: String,
        Required: 'Kindly enter the name of the team'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    players: {
        type: String
    }


});

module.exports = mongoose.model('Team', TeamSchema);