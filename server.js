const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const path = require('path');
const dotenv = require('dotenv');
const routes = require('./routes/routes.js');


// Create environment variable from .env file
Dotenv.config();
// Set up database, this will work locally, not for Heroku.
sequelize = new Sequelize(process.env.POSTGRES_URI);

const app = express();

app.use(express.static(path.join(__dirname, 'pathfinder-vue', 'dist')));
app.use('/api', routes);

const server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port);
});
