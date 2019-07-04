  var express = require('express');
  var app = express();
  var mongoose = require('mongoose');
  var bodyParser = require('body-parser');

  // including body parser
  app.use(bodyParser.urlencoded({ extended: true }));

  //setting an environment variable
  app.set('port', process.env.PORT || 3000);

  //connecting Locally to Mongo DB
  // mongoose.connect('mongodb://localhost:27017/person_db', { useNewUrlParser: true })
  //     .then(res => {
  //         console.log('Mongo db connected');
  //     })
  //     .catch(err => {
  //         console.log('cannot connect', err);
  //  });

  //connecting Locally People to Learning Mongo DB
  //   mongoose.connect('mongodb://localhost:27017/learning_mongo', { useNewUrlParser: true })
  //       .then(res => {
  //           console.log('Mongo db connected');
  //       })
  //       .catch(err => {
  //           console.log('cannot connect', err);
  //       });


  //setting up a view engine
  app.set('view engine', 'ejs');
  app.set('views', './app/views'); //specifying the view folder location

  // Learning Mongo Views
  //app.set('views', './CRUD/View');


  //accessing the static files
  app.use(express.static('./app/public'));

  app.locals.siteTitle = 'Business Service Company';

  // Creating access to the routes
  app.use(require('./app/routes/mainRouter'));
  app.use(require('./app/routes/api'));

  //Learning Mongo Route
  app.use(require('../Business-Service-Company/CRUD/controller/peopleController'));

  //listening to the 3000 port
  var server = app.listen(app.get('port'), function() {
      console.log('listening on port ' + app.get('port'));

  });