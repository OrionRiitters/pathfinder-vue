var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var routes = require('./routes/routes.js');
var path = require('path');

// Set up database
sequelize = new Sequelize('');

var app = express();

app.use(express.static(path.join(__dirname, 'pathfinder-vue', 'dist')));
app.use('/api', routes);

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port);
});
