'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// var TeamSchema = new Schema({
//     name: {
//         type: String,
//         Required: 'Kindly enter the name of the team'
//     },
//     Created_date: {
//         type: Date,
//         default: Date.now
//     },
//     players: {
//         type: String
//     }
//
//
// });


var FixtureSchema = new Schema({

    date: {
        type: String
    },
    status: {
        type: String
    },
    matchday: {
        type: String
    },
    homeTeamName: {
        type: String
    },
    awayTeamName: {
        type: String
    },
    result: {
        goalsHomeTeam: {
            type: Number
        },
        goalsAwayTeam: {
            type: Number
        }
    }



});

module.exports = mongoose.model('Fixture', FixtureSchema);