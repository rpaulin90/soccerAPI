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


// _links: {
//     self: {
//         href: {
//
//             type: String
//
//          }
//     },
//     competition: {
//         href: {
//
//             type: String
//
//          }
//     },
//     homeTeam: {
//         href: {
//
//             type: String
//
//          }
//     },
//     awayTeam: {
//         href: {
//
//             type: String
//
//          }
//     }
// },
// "date": "2017-08-26T14:00:00Z",
//     "status": "TIMED",
//     "matchday": 3,
//     "homeTeamName": "Newcastle United FC",
//     "awayTeamName": "West Ham United FC",
//     "result": {
//     "goalsHomeTeam": null,
//         "goalsAwayTeam": null
// },
// odds: null


var FixtureSchema = new Schema({

    fixtures: [
        {

            _links: {
                self: {
                    href: {

                        type: String

                     }
                },
                competition: {
                    href: {

                        type: String

                     }
                },
                homeTeam: {
                    href: {

                        type: String

                     }
                },
                awayTeam: {
                    href: {

                        type: String

                     }
                }
            },

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
            },
            odds: null


        }
    ]



});

module.exports = mongoose.model('Fixture', FixtureSchema);