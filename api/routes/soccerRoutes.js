'use strict';
module.exports = function(app) {
    var fixtures = require('../controllers/soccerController');


    app.route('/fixtures')
        .get(fixtures.list_all_fixtures)
        .post(fixtures.create_a_fixture);


    app.route('/fixtures/:fixtureId')
        .get(fixtures.read_a_fixture)
        .put(fixtures.update_a_fixture)
        .delete(fixtures.delete_a_fixture);

    app.route('/fixtures/add/:fixtureId')
        .put(fixtures.add_to_fixtures)
};
