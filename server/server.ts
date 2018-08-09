// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
var request = require('request');

const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
// load mongoose models
import * as monogooseModels from './repositories/models';


let SitePDF = require('site-pdf');
let generator = new SitePDF();


// app.use(express.limit('20mb'));
const app = express();
loadMiddleWares(app);
loadRoutes(app);
app.get('/foo', async (req, res) => {

  await generator.create('https://material.angular.io/components/datepicker/examples/', 'yeahhh.pdf')
    .then(function () {
      generator.destroy();
    });

  res.send('run');
});
// app.get('/api', function (req, res, next) {
// const article = new Article({name: ''});
// article.save().then(() => console.log('article was Saved'));   <<<<<<<<<<<<<<<<<<<<<<<<<<<< save articles to DB
// });

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/stack-support/index.html'));
});
/**
 * Get port from environment and store in Express.
 */
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = process.env.PORT || '8888';
app.set('port', port);
/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, (ok, err) => {
  console.log(`API running on localhost:${port}`);
});

function loadMiddleWares(app) {
  app.use(fileUpload());

// Parsers for POST data
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
// Point static path to dist
  app.use(express.static(path.join(__dirname, '..//dist/stack-support')));
  app.use(express.static(path.join(__dirname, '../node_modules')));
}

function loadRoutes(app) {
  // load articles routers
  require('./articles/articles.api.router')(app, express);
  require('./resources/resources.api.router')(app, express);
  require('./resources/resources.url-pdf.api.router')(app, express);
}
