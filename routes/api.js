const express = require('express');

//TODO: Error handling!

module.exports = function(Trail) {
    var router = express.Router();

    router.get('/trails', function(req, res, next) {
        Trail.findAll().then( trails => {
            return res.json(trails);
        });
    });

    router.post('/trails', function(req, res, next) {
        Trail.create(req.body).then( (data) => {
            return res.status(201).send('ok');
        }).catch(err => {
            console.log(err);
            return res.status(501);
        });
    });

    return router;

};
