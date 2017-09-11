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


// var FixtureSchema = new Schema({
//
//     fixtures: [
//         {
//
//             _links: {
//                 self: {
//                     href: {
//
//                         type: String
//
//                      }
//                 },
//                 competition: {
//                     href: {
//
//                         type: String
//
//                      }
//                 },
//                 homeTeam: {
//                     href: {
//
//                         type: String
//
//                      }
//                 },
//                 awayTeam: {
//                     href: {
//
//                         type: String
//
//                      }
//                 }
//             },
//
//             date: {
//                 type: String
//             },
//             status: {
//                 type: String
//             },
//             matchday: {
//                 type: String
//             },
//             homeTeamName: {
//                 type: String
//             },
//             awayTeamName: {
//                 type: String
//             },
//             result: {
//                 goalsHomeTeam: {
//                     type: Number
//                 },
//                 goalsAwayTeam: {
//                     type: Number
//                 }
//             }
//
//         }
//     ]
//
//
//
// });

var FixtureSchema = new Schema({


    name: {
        type: String
    },
    team: {
        type: String
    },
    position: {
        type: String
    },
    fixtures: {
        type: Array
    }
    // gameweeks: [
    //     {
    //         gw1: {
    //             minutesPlayed: {
    //                 type: Number
    //             },
    //             goalsScored: {
    //                 type: Number
    //             },
    //             goalsAssisted: {
    //                 type: Number
    //             },
    //             goalsConceded: {
    //                 type: Number
    //             },
    //             ownGoals: {
    //                 type: Number
    //             },
    //             penaltiesSaved: {
    //                 type: Number
    //             },
    //             penaltiesMissed: {
    //                 type: Number
    //             },
    //             yellowCards: {
    //                 type: Number
    //             },
    //             redCards: {
    //                 type: Number
    //             },
    //             tackles: {
    //                 type: Number
    //             },
    //             interceptions: {
    //                 type: Number
    //             },
    //             recoveries: {
    //                 type: Number
    //             }
    //         }
    //     }
    // ]

    // fixtures: [
    //     {
    //
    //         _links: {
    //             self: {
    //                 href: {
    //
    //                     type: String
    //
    //                 }
    //             },
    //             competition: {
    //                 href: {
    //
    //                     type: String
    //
    //                 }
    //             },
    //             homeTeam: {
    //                 href: {
    //
    //                     type: String
    //
    //                 }
    //             },
    //             awayTeam: {
    //                 href: {
    //
    //                     type: String
    //
    //                 }
    //             }
    //         },
    //
    //         date: {
    //             type: String
    //         },
    //         status: {
    //             type: String
    //         },
    //         matchday: {
    //             type: String
    //         },
    //         homeTeamName: {
    //             type: String
    //         },
    //         awayTeamName: {
    //             type: String
    //         },
    //         result: {
    //             goalsHomeTeam: {
    //                 type: Number
    //             },
    //             goalsAwayTeam: {
    //                 type: Number
    //             }
    //         }
    //
    //     }
    // ]



});


module.exports = mongoose.model('Fixture', FixtureSchema);