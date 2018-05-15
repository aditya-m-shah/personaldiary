var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser =require('body-parser'),
  fileUpload = require('express-fileupload'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  Diary = require('./api/models/greenModel');

///mongoose instance connection URL connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/greenRoutes');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);