'use strict';


var mongoose = require('mongoose'),
    Fixture = mongoose.model('Fixture');

exports.list_all_fixtures = function(req, res) {
    Fixture.find({}, function(err, fixture) {
        if (err)
            res.send(err);
        res.json(fixture);
    });
};


exports.create_a_fixture = function(req, res) {
    var new_fixture = new Fixture(req.body);
    new_fixture.save(function(err, fixture) {
        if (err)
            res.send(err);
        res.json(fixture);
    });
};


exports.read_a_fixture = function(req, res) {
    Fixture.findById(req.params.fixtureId, function(err, fixture) {
        if (err)
            res.send(err);
        res.json(fixture);
    });
};


exports.update_a_fixture = function(req, res) {
    Fixture.findOneAndUpdate({_id: req.params.fixtureId}, req.body, {new: true}, function(err, fixture) {
        if (err)
            res.send(err);
        res.json(fixture);
    });
};


exports.delete_a_fixture = function(req, res) {


    Fixture.remove({
        _id: req.params.fixtureId
    }, function(err, fixture) {
        if (err)
            res.send(err);
        res.json({ message: 'Fixture successfully deleted' });
    });
};
