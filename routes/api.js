const express = require('express')
const hikingProjectAPI = require('../ext_apis/hikingproject-api')
const geocodeAPI = require('../ext_apis/geocode-api')

//TODO: Error handling!

module.exports = function(Trail) {
  var router = express.Router()

  router.get('/db/trails', function(req, res, next) {
    Trail.findAll().then(trails => {
      return res.json(trails)
    })
  })

  router.post('/db/trails', function(req, res, next) {
    Trail.create(req.body).then(trail => res.json(trail))
  })

  router.patch('/db/trails', function(req, res, next) {
    Trail.update(
      { hasHiked: req.body.hasHiked },
      { returning: true, where: { id: req.body.id } }
    ).then(function([rowsUpdate, [updatedTrail]]) {
      res.json(updatedTrail)
    })
  })
  router.post('/db/trails', function(req, res, next) {
    Trail.create(req.body)
      .then(data => {
        return res.status(201).send('ok')
      })
      .catch(err => {
        console.log(err)
        return res.status(501)
      })
  })

  router.get('/external/', function(req, res, next) {
    geocodeAPI(req.query.city, req.query.state)
      .then(geocode => {
        // Use first location returned from nominatim
        return hikingProjectAPI(geocode[0].lat, geocode[0].lon)
          .then(trails => {
            return res.json(trails)
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  })

  return router
}
