const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const path = require('path')
const api_routes = require('./routes/api.js')

// I acknowledge that this shouldn't be on github but I am okay with strangers accessing this database.
sequelize = new Sequelize(
  'postgres://ahsozxwgafhowa:cb22b6451f9e69f33834bc2f006d5b4a0c6e455c3b7265c43c0ffdbde5736711@ec2-54-225-106-93.compute-1.amazonaws.com:5432/deon9t26ij4jpu',
  { dialect: 'postgres' }
)

sequelize
  .authenticate()
  .then(() => console.log('connected to postgres'))
  .catch(err => console.log('error connecting', err))

const trail = require('./model/trail.js')(sequelize, Sequelize)

const app = express()

app.use(express.static(path.join(__dirname, 'client', 'dist')))

app.use(bodyParser.json())

// Route to api requests
app.use('/api', api_routes(trail))

app.use(function(req, res, next) {
  res.status(404).send('Not found')
})

app.use(function(err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Internal error')
})

const server = app.listen(process.env.PORT || 3000, function() {
  console.log('app running on port', server.address().port)
})
