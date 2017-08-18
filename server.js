var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Fixture = require('./api/models/soccerModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
var db = process.env.MONGODB_URI || "mongodb://localhost/Fixturesdb";
// Connect mongoose to our database
mongoose.connect(db, function(error) {
    // Log any errors connecting with mongoose
    if (error) {
        console.error(error);
    }
    // Or log a success message
    else {
        console.log("mongoose connection is successful");
    }
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
// });


var routes = require('./api/routes/soccerRoutes');
routes(app);


app.listen(port);


console.log('soccer RESTful API server started on: ' + port);